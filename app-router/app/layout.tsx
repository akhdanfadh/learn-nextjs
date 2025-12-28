import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased is tailwind css class for better font rendering */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
