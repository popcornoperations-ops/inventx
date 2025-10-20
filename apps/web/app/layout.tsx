export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#000', color: '#fff' }}>{children}</body>
    </html>
  );
}

