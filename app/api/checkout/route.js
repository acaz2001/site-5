import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const origin = request.headers.get('origin'); // 🔹 ovde se definiše 'origin'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: body.cartItems.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: [`${request.headers.get('origin')}/${item.image}.png`], // 🔹 koristi absolutan URL
          },
          unit_amount: Math.round(item.price * 100), 
        },
        quantity: item.quantity || 1,
      })),
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
