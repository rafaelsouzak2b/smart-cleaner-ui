import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Cleaner - Seu App de Serviços Domésticos",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center py-4 px-8">
            <div className="flex items-center">
              <span className="font-bold text-xl text-blue-500">SmartCleaner</span>
            </div>
            <nav>
              <ul className="flex space-x-8">
                <li><a href="/">Início</a></li>
                <li><a href="/contratar">Contratar</a></li>
                <li><a href="/cadastro">Trabalhe no App</a></li>
                <li><a 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  href="/entrar">
                    Entrar
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
       
        <main>{children}</main>

        <footer className="bg-gray-900 text-white text-center py-4">
          &copy; {new Date().getFullYear()} Sua Marca. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}