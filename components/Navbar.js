import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav className="bg-green-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              aria-label="mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              className="inline-flex items-center justify-center p-2 hover:text-white hover:bg-green-600 focus:outline-none"
              onClick={() => setActive(!active)}
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">inweblife</Link>
            </div>
            <div className="hidden sm:block sm:ml-8">
              <div className="flex space-x-4">
                <Link href="/">
                  <a className="px-3 py-2 rounded-md text-md font-medium">
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a className="px-3 py-2 rounded-md text-md font-medium">
                    About
                  </a>
                </Link>
                <Link href="/news">
                  <a className="px-3 py-2 rounded-md text-md font-medium">
                    News
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="px-3 py-2 rounded-md text-md font-medium">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`sm:hidden ${active ? "" : "hidden"}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/">
            <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-400">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-400">
              About
            </a>
          </Link>
          <Link href="/news">
            <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-400">
              News
            </a>
          </Link>
          <Link href="/contact">
            <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-400">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
