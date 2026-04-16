import "./globals.css";
import { DM_Serif_Display, Noto_Sans } from "next/font/google";
import { business } from "@/data/business";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--nf-display",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--nf-body",
});

export const metadata = {
  title: `${business.name} | ${business.specialty ?? "Medical Practice"} — ${business.city}`,
  description: business.tagline,
};

function brandVars(b) {
  const p = b.primaryColor ?? "#0a4d68";
  const a = b.accentColor ?? "#0891b2";
  return `:root {
    --biz-brand:       ${p};
    --biz-brand-mid:   color-mix(in srgb, ${p} 75%, white);
    --biz-accent:      ${a};
    --biz-accent-dark: color-mix(in srgb, ${a} 80%, black);
    --biz-accent-pale: color-mix(in srgb, ${a} 12%, white);
  }`;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: brandVars(business) }} />
      </head>
      <body
        className={`${dmSerifDisplay.variable} ${notoSans.variable} font-body antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
