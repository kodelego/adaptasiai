# Technology Stack

## Core Framework
- **Next.js 15.3.2**: React framework with App Router
- **Payload CMS 3.48.0**: Headless CMS and admin interface
- **TypeScript 5.7.3**: Type-safe development
- **React 19.1.0**: UI library

## Database & Storage
- **MongoDB**: Primary database via Mongoose adapter
- **S3 Storage**: File storage with `@payloadcms/storage-s3`
- **Sharp**: Image processing

## Development Tools
- **pnpm**: Package manager (required)
- **ESLint**: Code linting with Next.js config
- **Prettier**: Code formatting
- **Vitest**: Unit/integration testing
- **Playwright**: End-to-end testing

## Key Dependencies
- **Lexical Editor**: Rich text editing
- **Nodemailer**: Email functionality
- **Multi-tenant Plugin**: Company-based tenancy
- **GraphQL**: API layer

## Common Commands

### Development
```bash
pnpm dev          # Start development server
pnpm devsafe      # Clean start (removes .next)
pnpm build        # Production build
pnpm start        # Start production server
```

### Payload CMS
```bash
pnpm payload                    # Payload CLI
pnpm generate:types            # Generate TypeScript types
pnpm generate:importmap        # Generate import map
```

### Testing
```bash
pnpm test          # Run all tests
pnpm test:int      # Integration tests (Vitest)
pnpm test:e2e      # End-to-end tests (Playwright)
```

### Code Quality
```bash
pnpm lint          # ESLint check
```

## Environment Setup
- Copy `.env.example` to `.env`
- Configure MongoDB URI, Payload secret, S3 credentials, and email settings
- Docker Compose available for local MongoDB

## Node Requirements
- Node.js ^18.20.2 || >=20.9.0
- pnpm ^9 || ^10 (required package manager)