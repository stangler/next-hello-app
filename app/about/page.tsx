import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutSection from './components/AboutSection';
import Button from '../components/Button';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AboutSection
          title="About This App"
          description="This is a Next.js application built with TypeScript and Tailwind CSS. The application demonstrates modern web development practices including App Router architecture, TypeScript for type safety, Tailwind CSS for styling, Vitest for testing, and ESLint for code quality."
        />

        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <Button variant="secondary">
              <a href="/" className="block">Back to Home</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
