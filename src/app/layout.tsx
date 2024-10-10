import type { Metadata } from "next";

import "./globals.css";
import { ConvexClientProvider } from "@/components/Providers";
import { Toaster } from "@/components/ui/toast/toaster";

export const metadata: Metadata = {
  title: {
    template: "%s | Hughes Mugera",
    default: "Hughes Mugera",
  },
  description: "Welcome to the Hughesverse 👨‍🚀",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>
          <Toaster />

          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
