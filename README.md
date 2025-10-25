## ESLINT

ESLint rules to my personal preferences.

### Auto-fixing

You may also want to bind a shortcut to `eslint.executeAutofix`. Press F1, type `Preferences: Open Keyboard Shortcuts (JSON)` and add the following:

```jsonc
{
    "key": "shift+alt+e", // or any other keybinding
    "command": "eslint.executeAutofix"
}
```