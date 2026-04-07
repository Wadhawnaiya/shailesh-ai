import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CA Shailesh S Wadhawaniya | Chartered Accountant & AI Consultant",
  description:
    "National-Level ICAI Faculty, ESG & AI Consultant, Corporate Trainer, and Founder of Wadhawaniya & Co. — where finance meets the future.",
  keywords: [
    "CA Shailesh Wadhawaniya",
    "Chartered Accountant Ahmedabad",
    "ESG Consultant",
    "AI Trainer ICAI",
    "BRSR Reporting",
    "StrideX CPA US",
    "Industry 4.0 Finance",
  ],
  authors: [{ name: "CA Shailesh S Wadhawaniya" }],
  openGraph: {
    title: "CA Shailesh S Wadhawaniya | Finance Meets the Future",
    description:
      "National-Level ICAI Faculty, ESG Consultant & AI Trainer bridging traditional finance with Industry 4.0.",
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
