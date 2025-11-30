import  "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Sistema de Gestão</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
