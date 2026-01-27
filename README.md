# next-hello-app

A Next.js application demonstrating modern web development practices with TypeScript, Tailwind CSS, and comprehensive component architecture.

## Description

This Next.js application showcases modern web development practices including:

- **App Router architecture** for efficient routing
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling
- **Vitest** for fast and reliable testing
- **ESLint** for code quality and consistency
- **Component-based architecture** with reusable UI components
- **Comprehensive testing** with 100% code coverage

## Features

### Reusable Components
The application includes a set of reusable components located in `app/components/`:
- **Button**: Customizable button with variants (primary, secondary, danger) and sizes (sm, md, lg)
- **Card**: Flexible card component with optional title and footer
- **Modal**: Accessible modal dialog with title, content, and footer support
- **Header**: Navigation header with site branding
- **Footer**: Site footer with copyright information
- **Navigation**: Navigation links for the application

### Page-Specific Components
- **AboutSection**: Specialized component for the About page with image support

### Testing
All components are thoroughly tested with Vitest, achieving 100% code coverage:
- Unit tests for each component
- Integration tests for pages
- Accessibility and behavior verification

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Button.tsx       # Customizable button component
│   ├── Card.tsx         # Card layout component
│   ├── Modal.tsx        # Modal dialog component
│   ├── Header.tsx       # Site header
│   ├── Footer.tsx       # Site footer
│   └── Navigation.tsx   # Navigation links
├── about/
│   ├── components/      # About page specific components
│   │   └── AboutSection.tsx
│   └── page.tsx         # About page
├── page.tsx             # Home page
└── layout.tsx           # Root layout
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later) or yarn (v1.22 or later)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/stangler/next-hello-app.git
```

2. Navigate to the project directory:

```bash
cd next-hello-app
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the Application

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building the Application

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

### Running the Application in Production

To start the production server, run:

```bash
npm run start
# or
yarn start
```

## Testing

### Running Tests

To run all tests with coverage:

```bash
npm run test
# or
yarn test
```

### Running Tests in Watch Mode

For development, you can run tests in watch mode:

```bash
npm run test:dev
# or
yarn test:dev
```

### Test Coverage
The application maintains 100% test coverage across all components and pages.

## Technologies Used

- **[Next.js](https://nextjs.org/)** - React framework for building web applications
- **[React](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vitest](https://vitest.dev/)** - Fast unit testing framework
- **[ESLint](https://eslint.org/)** - Code linting and quality tool
- **[Testing Library](https://testing-library.com/)** - Simple and complete testing utilities

## Component Documentation

### Button Component
A flexible button component with customizable variants and sizes.

**Props:**
- `children`: React node for button content
- `onClick`: Click handler function
- `variant`: 'primary' | 'secondary' | 'danger' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `className`: Additional CSS classes

### Card Component
A card layout component with optional title and footer.

**Props:**
- `title`: Optional card title
- `children`: Card content
- `footer`: Optional card footer
- `className`: Additional CSS classes

### Modal Component
An accessible modal dialog component.

**Props:**
- `isOpen`: Controls modal visibility
- `onClose`: Close handler function
- `title`: Optional modal title
- `children`: Modal content
- `footer`: Optional modal footer

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vitest Documentation](https://vitest.dev/guide/)
- [ESLint Documentation](https://eslint.org/docs/user-guide/getting-started)
- [Testing Library Documentation](https://testing-library.com/docs/)
- [Supabase Documentation](https://supabase.com/docs)
