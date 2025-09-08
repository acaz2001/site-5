import { Geist, Geist_Mono, Inter,Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import AddToCart from "../components/addToCart";
import { CartProvider } from '../context/CartContext'; 
import AddToCartWrapper from "../components/AddToCartWrapper";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Verde",
  description: "Izrada tuš kabina i ogledala po meri.Staklorezačka radnja Verde, Bulevat Kralja Aleksandra 546 Zvezdara.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-631851238"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-631851238');
          `,
        }} />        
      </head>
      <body
        className={`${roboto.className} antialiased pl-5 pr-5 pt-5 relative`}
      >
        <CartProvider>
        <Header className='w-[100%] z-100'></Header>
        <div className="absolute right-0">
        </div>
        <div className="fade-in-page layout">
        {children}
        </div>
        <AddToCartWrapper /> {/* 👈 Globalno AddToCart uvek dostupno */}
        <Footer></Footer>
        </CartProvider>

        
      </body>
    </html>
  );
}
