# TanStack Router Starter

A modern React application built with TanStack Router, TypeScript, and Zustand for state management using **Routes & Modules Architecture**.

## Features

- ⚡ **TanStack Router** - Type-safe file-based routing with powerful data loading
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach

- 🔒 **Authentication** - Complete auth system with Zustand
- 📊 **State Management** - Zustand for predictable state management
- 🏗️ **Routes & Modules Architecture** - Clear separation between pages and business logic
- 🛠️ **TypeScript** - Full type safety
- 🎯 **Biome** - Fast linting and formatting

## Architecture

This project uses **Routes & Modules Architecture** with clear separation between routes (pages) and modules (business logic). Routes compose UI by importing functionality from feature-based modules.

### Routes & Modules Structure

```
src/
├── routes/                 # TanStack Router file-based routes
│   ├── __root.tsx          # Root route (required)
│   ├── index.tsx           # Home page (/)
│   ├── dashboard.tsx       # Dashboard page (/dashboard)
│   ├── products.tsx        # Products page (/products)
│   ├── products.$id.tsx    # Product detail (/products/:id)
│   └── _auth.login.tsx     # Login page (/login) with auth layout
├── modules/                # Business logic modules
│   ├── auth/               # Authentication module
│   │   ├── auth-store.ts   # Auth state management
│   │   ├── auth-types.ts   # Auth-related types
│   │   ├── use-auth.ts     # Auth custom hook
│   │   └── index.ts        # Module exports
│   ├── analytics/          # Analytics module
│   │   ├── data-widget.tsx # Reusable component
│   │   ├── use-analytics.ts # Custom hook
│   │   └── index.ts        # Module exports
│   └── (NO index.ts)       # No barrel export at root
└── shared/                 # Shared utilities and components
```

## State Management

This project uses **Zustand v5** for state management with feature-specific stores:

### Auth Module (`~/modules/auth`)
- **`useAuthStore`** - User authentication (login/register/logout)
- **`useAuth`** - Enhanced auth functionality with auto-refresh
- Token management with automatic refresh
- Persistent storage with localStorage
- Error handling and loading states

### Analytics Module (`~/modules/analytics`)
- **`useAnalyticsStore`** - Analytics data management
- **`useAnalytics`** - Analytics functionality hook
- Data fetching and caching
- Real-time updates and filtering

### Custom Hooks
- `useAuth()` - Enhanced auth functionality
- `useAnalytics()` - Analytics data management

## Demo Credentials

For testing the authentication system:
- **Email**: test@example.com
- **Password**: password

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd tanstack-router-starter

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm typecheck    # Run TypeScript checks
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
pnpm check        # Run all checks (typecheck + lint + format)
pnpm fix          # Auto-fix linting and formatting issues
```

## Project Structure

```
src/
├── routes/                     # TanStack Router file-based routes
│   ├── __root.tsx              # Root route (required, contains Outlet)
│   ├── index.tsx               # Home page (/)
│   ├── dashboard.tsx           # Dashboard page (/dashboard)
│   ├── products.tsx            # Products list (/products)
│   ├── products.$id.tsx        # Product detail (/products/:id)
│   ├── _auth.tsx               # Auth layout (pathless)
│   ├── _auth.login.tsx         # Login page (/login)
│   └── _auth.register.tsx      # Register page (/register)
├── modules/                    # Business logic modules
│   ├── auth/                   # Authentication module
│   │   ├── auth-store.ts       # Auth state management
│   │   ├── auth-types.ts       # Auth-related types
│   │   ├── use-auth.ts         # Auth custom hook
│   │   ├── auth-service.ts     # Auth API service
│   │   └── index.ts            # Module exports
│   ├── analytics/              # Analytics module
│   │   ├── data-widget.tsx     # Reusable component
│   │   ├── metrics-chart.tsx   # Reusable component
│   │   ├── use-analytics.ts    # Custom hook
│   │   ├── analytics-store.ts  # State management
│   │   └── index.ts            # Module exports
│   ├── products/               # Products module
│   │   ├── product-card.tsx    # Reusable component
│   │   ├── use-products.ts     # Custom hook
│   │   └── index.ts            # Module exports
│   └── (NO index.ts)           # No barrel export at modules root
├── shared/                     # Shared resources (global only)
│   ├── components/             # Shared UI components
│   │   ├── ui/                 # Design system components (shadcn)
│   │   │   └── index.ts        # Barrel exports for UI
│   │   └── (NO index.ts)       # No barrel at components root
│   ├── layouts/                # Layout components
│   ├── hooks/                  # Global hooks only
│   ├── types/                  # Global types only
│   ├── utils/                  # Utility functions
│   ├── lib/                    # Third-party lib configs
│   │   └── axios.ts            # Axios instance (NOT shared/api/)
│   ├── config/                 # Configuration
│   │   └── environment.ts      # Environment variables
│   ├── constants/              # Shared constants
│   └── stores/                 # Global stores only
└── routeTree.gen.ts            # Auto-generated route tree (DO NOT EDIT)
```

## TanStack Router Features

### File-Based Routing
TanStack Router uses file-based routing with automatic route generation:

```typescript
// __root.tsx - Root route (required)
export const Route = createRootRoute({
  component: RootLayout,
});

// index.tsx - Home page (/)
export const Route = createFileRoute('/')({
  component: HomePage,
});

// products.$id.tsx - Dynamic route (/products/:id)
export const Route = createFileRoute('/products/$id')({
  component: ProductDetail,
  loader: async ({ params }) => {
    return fetchProduct(params.id);
  },
});

// _auth.login.tsx - Pathless layout (/login)
export const Route = createFileRoute('/_auth/login')({
  component: LoginPage,
});
```

### Routing Conventions
- **Index routes**: `index.tsx` → `/`
- **Dynamic params**: `products.$id.tsx` → `/products/:id`
- **Pathless layouts**: `_auth.login.tsx` → `/login` (renders in `_auth.tsx`)
- **Nested routes**: `products.detail.tsx` OR `products/detail.tsx` → `/products/detail`
- **Skip parent**: `products_.new.tsx` → `/products/new` (skips `products.tsx`)
- **Route groups**: `(admin)/users.tsx` → `/users` (folder not in URL)

### Data Loading
```typescript
// Route with loader
export const Route = createFileRoute('/products')({
  loader: async () => {
    return await fetchProducts();
  },
  component: ProductsPage,
});

// Access loader data in component
function ProductsPage() {
  const data = Route.useLoaderData();
  return <div>{/* Use data */}</div>;
}
```

### Navigation
```typescript
import { Link, useNavigate, useParams } from '@tanstack/react-router';

// Link component
<Link to="/products/$id" params={{ id: '123' }}>View Product</Link>

// Programmatic navigation
const navigate = useNavigate();
navigate({ to: '/dashboard' });

// Access route params
const { id } = useParams({ from: '/products/$id' });
```

## Import Patterns

### Module Imports
```typescript
// Import from business logic modules
import { useAuth } from '~/modules/auth';
import { useAnalytics } from '~/modules/analytics';
import { DataWidget } from '~/modules/analytics';

// Import types
import type { AuthCredentials } from '~/modules/auth';
import type { AnalyticsData } from '~/modules/analytics';
```

### Shared Imports
```typescript
// Import design system components (barrel exports)
import { Button, Card } from '~/shared/components/ui';

// Import custom shared components (direct imports)
import { CustomComponent } from '~/shared/components/custom-component';

// Import utilities and hooks
import { useLocalStorage } from '~/shared/hooks';
import { cn } from '~/shared/utils';
```



## Store Architecture

### Auth Store Features
- **Persistent Authentication**: Auto-saves auth state to localStorage
- **Token Refresh**: Automatic token refresh on expiration
- **Error Handling**: Comprehensive error states and messaging
- **API Integration**: Seamless integration with API client

### User Store Features
- **Profile Management**: Complete user profile CRUD operations
- **Preferences**: User preferences and settings
- **Real-time Updates**: Immediate UI updates on profile changes



## Development Guidelines

### Creating New Routes

1. **Create route file**: `src/routes/feature.tsx` or `src/routes/feature/index.tsx`
2. **Define route**: Use `createFileRoute()` with path
3. **Add loader** (optional): For data fetching
4. **Export component**: Route component

Example:
```typescript
// src/routes/products.tsx
export const Route = createFileRoute('/products')({
  loader: async () => fetchProducts(),
  component: ProductsPage,
});

function ProductsPage() {
  const products = Route.useLoaderData();
  return <div>{/* UI */}</div>;
}
```

### Creating New Modules

1. **Create module folder**: `src/modules/new-feature/`
2. **Add core files**:
   - `new-feature-store.ts` (if state needed)
   - `new-feature-types.ts` (if types needed)
   - `use-new-feature.ts` (if hooks needed)
   - `new-feature-service.ts` (if API needed)
   - Component files for reusable UI
3. **Export everything** in `index.ts`
4. **DO NOT create** `modules/index.ts` (no barrel export at root)

### When to Use Routes vs Modules vs Shared

```typescript
// ✅ Routes (page components)
- TanStack Router route definitions
- Page layout and composition
- Data loading with loaders
- Import and compose from modules
- Route-specific components (-components.tsx)

// ✅ Modules (business logic)
- State management for the feature
- Custom hooks for the feature
- Business logic and data processing
- Reusable components with logic
- API services for the feature
- Import: ~/modules/[feature]

// ✅ Shared (global utilities)
- UI components used across modules
- Utility functions used across modules
- Global state management
- Layout components
- Axios instance (~/shared/lib/axios.ts)
- Environment config (~/shared/config/environment.ts)
```

## Contributing

1. Follow the routes & modules architecture
2. Keep business logic in modules, pages in routes
3. Use TypeScript for all new code
4. Follow the established naming conventions
5. Write descriptive commit messages

## License

MIT License - see LICENSE file for details.
