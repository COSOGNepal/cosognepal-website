import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code for Chairty Program",
  description:
    "Code for Charity is a flagship program of Coding for Social Good Nepal that provides pro-bono coding services to national and international non-profits. Our team of skilled developers and designers work closely with NGOs to develop websites, applications, and other digital solutions that help them achieve their goals.",
  metadataBase: new URL("https://cosognepal.org/programs/code-for-charity"),
  openGraph: {
    images: [
      {
        url: "/assets/about_banner.png",
        width: 1600,
        height: 1200,
        type: "image/png",
      },
    ],
    emails: "contact@cosognepal.com",
    phoneNumbers: "+977 9863196247",
  },
  twitter: {
    card: "summary",
    site: "@cosognepal",
    title: "Code for Charity Program | Coding for Social Good Nepal",
    description:
      "Code for Charity is a program by Coding for Social Good Nepal that aims to provide a platform for developers to contribute to open-source projects and help non-profits and social enterprises in Nepal.",
    images: [
      {
        url: "/assets/about_banner.png",
        width: 1600,
        height: 1200,
        type: "image/png",
      },
    ],
  },
  icons: [{ url: "/favicon.ico", sizes: "any" }],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
