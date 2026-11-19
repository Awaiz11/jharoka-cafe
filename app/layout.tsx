import type { Metadata, Viewport } from "next";
import "@fontsource/rozha-one/400.css";
import "@fontsource/karla/400.css";
import "@fontsource/karla/500.css";
import "@fontsource/karla/700.css";
import "@fontsource/noto-nastaliq-urdu/arabic-400.css";
import "@fontsource/noto-nastaliq-urdu/arabic-700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jharoka — Coffee & Kitchen, Gulberg Lahore",
  description:
    "Specialty coffee, all-day breakfast and late evenings on M.M. Alam Road, Gulberg III, Lahore. See the menu and reserve a table on WhatsApp.",
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#1c2e4a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
