import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <div>
          {children} <Footer />
        </div>
      </div>
    </div>
  );
}
