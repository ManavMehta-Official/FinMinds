import localFont from "next/font/local";
import "../styles/globals.css";
import { Container } from "@mui/material";
import Navbar from "@/components/navbar/navbar";
import Provider from "@/components/provider/provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "finMinds",
  description: "Become Financialy Literate with finMinds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Container maxWidth="xl">
            <Navbar />
            {children}
          </Container>
        </Provider>
      </body>
    </html>
  );
}
