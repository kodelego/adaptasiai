# Project Structure

## Root Directory
- **Configuration**: `package.json`, `tsconfig.json`, `next.config.mjs`, `eslint.config.mjs`
- **Environment**: `.env.example`, `.env` (local), `test.env`
- **Docker**: `Dockerfile`, `docker-compose.yml`
- **Testing**: `vitest.config.mts`, `playwright.config.ts`, `vitest.setup.ts`

## Source Code (`src/`)

### Application Structure (`src/app/`)
```
src/app/
├── (frontend)/          # Public-facing Next.js pages
│   ├── layout.tsx       # Frontend layout
│   ├── page.tsx         # Homepage
│   └── styles.css       # Frontend styles
└── (payload)/           # Payload CMS routes
    ├── admin/           # Admin interface
    ├── api/             # API endpoints
    ├── layout.tsx       # Admin layout
    └── custom.scss      # Admin styling
```

### Data Layer (`src/collections/`)
All collections follow consistent patterns:
- Export named `CollectionConfig` objects
- Use `afterOperationHook` for all collections
- Import path aliases (`@/collections/`)

**Collections:**
- `Agents.ts` - AI agent configurations
- `Tools.ts` - HTTP webhook tool definitions
- `Documents.ts` - Knowledge base items
- `Companies.ts` - Multi-tenant organizations
- `Users.ts` - Authentication users
- `Media.ts` - File uploads

### Configuration (`src/`)
- `payload.config.ts` - Main Payload configuration
- `payload-types.ts` - Generated TypeScript types (auto-generated)

### Extensions (`src/`)
- `globals/` - Global configurations (Webhooks)
- `hooks/` - Custom Payload hooks (`after-operation-hook.ts`)

## Testing Structure (`tests/`)
```
tests/
├── e2e/                 # Playwright end-to-end tests
│   └── *.e2e.spec.ts
└── int/                 # Vitest integration tests
    └── *.int.spec.ts
```

## Path Aliases
- `@/*` → `./src/*`
- `@payload-config` → `./src/payload.config.ts`

## File Naming Conventions
- Collections: PascalCase (e.g., `Agents.ts`)
- Components: PascalCase with `.tsx` extension
- Tests: `*.int.spec.ts` for integration, `*.e2e.spec.ts` for e2e
- Hooks: kebab-case (e.g., `after-operation-hook.ts`)

## Key Patterns
- All collections use the same hook structure
- TypeScript strict mode enabled
- ES modules throughout (`"type": "module"`)
- Consistent import/export patterns
- Payload collections export as named exports matching filename