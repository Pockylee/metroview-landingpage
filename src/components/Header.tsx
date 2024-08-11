// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MetroView
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#download">Download</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
