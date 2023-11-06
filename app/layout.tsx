import "./globals.css";
import { Montserrat } from "next/font/google";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Henrik Näsmark",
  description: "Geopolitik, vetenskap, metafysik mm.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen ${roboto.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="site-width ">
            {/* <NavBar /> */}
            <main className="sm:pt-20 pt-12">{children}</main>
            <div className="mt-10">
              <Footer />
            </div>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
