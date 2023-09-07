import "./globals.css";
import { Poppins } from "typeface-poppins"; // Import the Poppins font

export const metadata = {
  title: "MSAF",
  description: "A Portfolio Made By Muhammad Salman Alfarisi",
  name: "viewport",
  content:
    "width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0, minimal-ui",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Poppins, sans-serif" }}>{children}</body>
    </html>
  );
}
