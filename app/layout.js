import localFont from "next/font/local";
import "../styles/globals.css";
import { Container } from "@mui/material";
import Navbar from "@/components/navbar/navbar";
import Provider from "@/components/provider/provider";

export const metadata = {
  title: "finMinds",
  description: "Become Financialy Literate with finMinds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        
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
