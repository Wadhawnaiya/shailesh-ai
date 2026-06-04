import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CA Shailesh S Wadhawaniya | Chartered Accountant & AI Expert",
  description:
    "National & International-Level Faculty, ESG & AI Consultant, AI Trainer",
  keywords: [
    "CA Shailesh Wadhawaniya",
    "Chartered Accountant",
    "ESG Consultant",
    "AI Trainer",
    "BRSR Reporting",
    "StrideX CPA US",
    "Industry 4.0 Leader",
  ],
  authors: [{ name: "CA Shailesh S Wadhawaniya" }],
  openGraph: {
    title: "CA Shailesh S Wadhawaniya | AI Expert",
    description:
      "National & International-Level Faculty, ESG & AI Consultant, AI Trainer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
