## ESLINT

ESLint rules for TypeScript projects.

### Installation

```bash
bun install -D eslint @freehour/eslint-rules
```

### Usage

Create an `eslint.config.ts` file in the root of your project with the following content:

```ts
import { defineConfig } from 'eslint/config';
import { createConfig } from '@freehour/eslint-rules';

export default defineConfig(
    await createConfig({
        // node: true,          // enable when targeting Node.js
        // browser: true,       // enable when targeting browsers
        // react: true,         // enable when using React
        // stylistic: true,     // enable to use stylistic rules
        // imports: true,       // enable to use import rules
    }),
    {
        files: ['**/*.{ts,tsx}'],
    },
);
```
The ESLint rules are designed to be compatible with the following TypeScript compiler options. Make sure to set them in your `tsconfig.json`:

```jsonc
{
    "compilerOptions": {
        "exactOptionalPropertyTypes": false, // optional, but recommended
        "noFallthroughCasesInSwitch": true,
        "noImplicitOverride": true,
        "noImplicitReturns": true,
    }
}
```

### Auto-fixing

You may also want to bind a shortcut to `eslint.executeAutofix`. Press F1, type `Preferences: Open Keyboard Shortcuts (JSON)` and add the following:

```jsonc
{
    "key": "shift+alt+e", // or any other keybinding
    "command": "eslint.executeAutofix"
}
```