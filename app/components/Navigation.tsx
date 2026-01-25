import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-600 hover:text-blue-800">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}