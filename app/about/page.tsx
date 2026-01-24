export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-blue-600">About This App</h1>
      <p className="mt-4 text-lg text-gray-600">Welcome to the about page!</p>
      <div className="mt-8 max-w-2xl text-center">
        <p className="mb-4 text-gray-700">
          This is a Next.js application built with TypeScript and Tailwind CSS.
        </p>
        <p className="mb-4 text-gray-700">
          The application demonstrates modern web development practices including:
        </p>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
          <li>App Router architecture</li>
          <li>TypeScript for type safety</li>
          <li>Tailwind CSS for styling</li>
          <li>Vitest for testing</li>
          <li>ESLint for code quality</li>
        </ul>
      </div>
      <div className="mt-8">
        <a href="/" className="text-blue-600 hover:text-blue-800 underline">
          Back to Home
        </a>
      </div>
    </main>
  );
}
