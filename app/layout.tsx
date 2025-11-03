import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "@/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/constants";
import { ThemeProvider } from "@/providers/theme/theme-provider";


const ibmPlexSansArabic = Almarai({
  subsets: ["arabic"],
  weight: ["400", "300", "800", "700"],
});

export const metadata: Metadata = {
  title: {
    template: `${APP_NAME} | %s`,
    default: APP_NAME,
  },
  description: `${APP_DESCRIPTION}`,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${ibmPlexSansArabic.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
