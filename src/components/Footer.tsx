// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">MetroView</h2>
            <p className="text-gray-400">
              Your personal metro information assistant
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="hover:text-blue-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#download" className="hover:text-blue-400">
                  Download
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MetroView. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
