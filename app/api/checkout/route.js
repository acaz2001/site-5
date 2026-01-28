import Stripe from 'stripe';

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-08-16',
  });

  try {
    const { cartItems, shippingOption } = await request.json();

    const origin = request.headers.get('origin');

    let shippingCost = 0;

    if (shippingOption === 'dostava') {
      shippingCost = 1000;
    } else if (shippingOption === 'montaža') {
      const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      shippingCost = subtotal * 0.35;
    }

    const shippingItem =
      shippingCost > 0
        ? [
            {
              price_data: {
                currency: 'usd',
                product_data: {
                  name:
                    shippingOption === 'dostava'
                      ? 'Dostava'
                      : 'Montaža',
                },
                unit_amount: Math.round(shippingCost * 100),
              },
              quantity: 1,
            },
          ]
        : [];

    const allLineItems = [
      ...cartItems.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: [`${origin}/${item.image}.png`],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity || 1,
      })),
      ...shippingItem,
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: allLineItems,
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cart`,
    });

    return new Response(JSON.stringify({ id: session.id }), {
      status: 200,
    });
  } catch (err) {
    console.error('Stripe error:', err.message);
    return new Response(`Error creating checkout session: ${err.message}`, {
      status: 500,
    });
  }
}
