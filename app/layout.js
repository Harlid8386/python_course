import "./globals.css";

export const metadata = {
  title: "Python för AI — Interaktiv kurs",
  description: "Lär dig Python för AI från grunden. 3 faser, 15 lektioner, körbara övningar direkt i webbläsaren.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
