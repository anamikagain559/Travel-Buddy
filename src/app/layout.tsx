import "./globals.css";

export const metadata = {
  title: "Travel Buddy & Meetup",
  description: "Find your perfect travel companion",
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
