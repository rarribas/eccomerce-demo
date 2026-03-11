# AGENTS.md - Development Guidelines for Ecommerce Demo

## Project Overview

- **Type**: Modern Angular 21 standalone components application
- **Language**: TypeScript (strict mode enabled)
- **Testing**: Vitest with Angular TestBed
- **Formatting**: Prettier

---

## Commands

### Development

```bash
npm start          # Start dev server (ng serve)
npm run watch     # Build with watch mode (development)
npm run build      # Production build (ng build)
```

### Testing

```bash
npm test           # Run all tests (runs Vitest)
npx vitest run src/app/app.spec.ts   # Single test file
npx vitest run -t "should create"    # Specific test by name
npx vitest                              # Watch mode
```

---

## Code Style Guidelines

### TypeScript

- **Strict mode enabled** - all strict TypeScript compiler options are on
- Never use `any` type - use `unknown` if type is truly unknown
- Use type inference: `const x = 5` not `const x: number = 5`
- Use interfaces for object shapes, types for unions/intersections

### Angular Patterns

- Use **standalone components** (no NgModules unless required)
- Use signals for component state: `const count = signal(0)`
- Use `inject()` for dependency injection, not constructor injection
- Use new control flow syntax (`@if`, `@for`, `@switch`)
- Use `OnPush` change detection strategy where applicable

### Naming Conventions

- **Files**: kebab-case (`user-profile.component.ts`)
- **Components**: PascalCase (`UserProfileComponent`)
- **Classes**: PascalCase (`CartService`)
- **Interfaces**: PascalCase, no "I" prefix (`CartItem`)
- **Constants**: SCREAMING_SNAKE_CASE
- **Booleans**: prefix with `is`, `has`, `should`, `can`

### Imports

- Use absolute imports from `@angular/core`, `@angular/common`, etc.
- Use relative imports for local files (`./services/cart`)
- Group imports: external Angular, external libs, local
- Prefer named imports: `import { Component, signal } from '@angular/core'`

### Formatting (Prettier)

- Print width: **100 characters**
- Use **single quotes** for strings
- HTML templates use Angular parser

### Error Handling

- Use typed errors with custom error classes when appropriate
- Always handle async errors with try/catch or error callbacks
- Use Angular's `ErrorHandler` for global error handling

### Testing (Vitest)

- Test files: `*.spec.ts` co-located with source
- Use `describe` blocks for test suites
- Use `it` (not `test`) for individual tests
- Use `async`/`await` for asynchronous tests
- Use `fixture.whenStable()` for async template updates

### General Patterns

- Use modern ES2022+ features
- Use `readonly` for immutable properties
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- Avoid manual any - use proper typing
- Use `const` over `let`, never use `var`

---

## File Structure

```
src/
├── app/
│   ├── app.ts              # Root component (standalone)
│   ├── app.config.ts       # App configuration (provideRouter, etc.)
│   ├── app.routes.ts       # Route definitions
│   ├── app.spec.ts         # Root component tests
│   └── **/*.ts             # Features, services, components
├── main.ts                 # Bootstrap entry
└── styles.css             # Global styles
```

---

## Component Structure

```typescript
import { Component, signal, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-name',
  imports: [],
  templateUrl: './component-name.html',
  styleUrl: './component-name.css',
})
export class ComponentName {
  @Input() value = signal<string>('');
  @Output() valueChange = new EventEmitter<string>();
}
```

### Template Patterns

- Use inline templates only for very simple components (< 3 lines)
- Prefer external template files for readability
- Use Angular's new control flow syntax: `@if`, `@for`, `@switch`

---

## Services

```typescript
import { Injectable, signal } from '@angular/core';

export interface CartItem {
  id: string;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly items = signal<CartItem[]>([]);
  readonly cartItems = this.items.asReadonly();
}
```

### Guidelines

- Use `providedIn: 'root'` for singleton services
- Use signals for reactive state
- Expose readonly signals with `.asReadonly()`
- Use `inject()` in components, not constructor injection

---

## State Management

- Use signals for component-local state
- Use services with signals for shared state
- Computed signals: `computed(() => this.items().length)`
- Effects for side effects: `effect(() => { ... })`
- Signal inputs: `@Input() value = input<string>('')`
- Two-way binding: `@Input() value = model<string>('')`

---

## Key Configuration Files

- `tsconfig.json` - Strict TypeScript config
- `.prettierrc` - Formatting rules (100 width, single quotes)
- `package.json` - Dependencies and scripts
