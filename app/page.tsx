import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Card from './components/Card';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-8">
        <div className="text-center mb-12">
          <div className="mb-8">
            <Image
              src="/images/nextjs-logo.png"
              alt="Next.js Logo"
              width={300}
              height={100}
              className="mx-auto"
            />
          </div>
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Hello Next</h1>
          <p className="text-lg text-gray-600 mb-8">Welcome to your Next.js application!</p>
          <Button variant="primary" size="lg">
            <a href="/about" className="block">About this app</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Feature 1">
            <p className="text-gray-600">This is a sample feature description.</p>
          </Card>
          <Card title="Feature 2">
            <p className="text-gray-600">Another great feature of our application.</p>
          </Card>
          <Card title="Feature 3">
            <p className="text-gray-600">Yet another amazing feature to explore.</p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
