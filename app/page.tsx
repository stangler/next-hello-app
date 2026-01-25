import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold text-blue-600">Hello Next</h1>
        <p className="mt-4 text-lg text-gray-600">Welcome to your Next.js application!</p>
        <div className="mt-8">
          <a href="/about" className="text-blue-600 hover:text-blue-800 underline">
            About this app
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
