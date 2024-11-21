

# Legacy Config v8

This is the full configuration with all plugins listed below. You can omit the plugins you don't need.

```jsonc
// package.json
  "devDependencies": {
    "eslint": "8.57.1",
    "@stylistic/eslint-plugin-js": "2.10.1",
    "@stylistic/eslint-plugin-jsx": "2.10.1",
    "@stylistic/eslint-plugin-plus": "2.10.1",
    "@stylistic/eslint-plugin-ts": "2.10.1",
    "@typescript-eslint/eslint-plugin": "8.14.0",
    "@typescript-eslint/parser": "8.14.0",
    "eslint-import-resolver-typescript": "3.6.3",
    "eslint-plugin-import-x": "4.4.3",
    "eslint-plugin-simple-import-sort": "12.1.1",
    "eslint-plugin-react": "7.37.2",
    "eslint-plugin-react-hooks": "5.0.0",
    "eslint-plugin-react-refresh": "0.4.14",
    //...
  },

// .eslintrc.json
  {
    "plugins": [
        // You can omit the plugins you don't need
        "@stylistic/js",
        "@stylistic/jsx",
        "@stylistic/plus",
        "@stylistic/ts",
        "@typescript-eslint",
        "import-x",
        "simple-import-sort",
        "react",
        "react-hooks",
        "react-refresh"
    ],
    "extends": [
        "./eslint/v8/.eslintrc.json",
        // You can omit the extensions you don't need, but keep the order.
        // Remember to remove the corresponding plugin, package and settings too.
        "./eslint/v8/@stylistic/js/.eslintrc.json",
        "./eslint/v8/@stylistic/jsx/.eslintrc.json",
        "./eslint/v8/@stylistic/plus/.eslintrc.json",
        "./eslint/v8/@stylistic/ts/.eslintrc.json",
        "./eslint/v8/@typescript-eslint/.eslintrc.json",
        "./eslint/v8/import-x/.eslintrc.json",
        "./eslint/v8/simple-import-sort/.eslintrc.json",
        "./eslint/v8/react/.eslintrc.json",
        "./eslint/v8/react-hooks/.eslintrc.json",
        "./eslint/v8/react-refresh/.eslintrc.json",
    ],
    "settings": {
        // If you don't use React, you can omit this setting.
        "react": {
            "version": "detect"
        },
        // If you don't use import-x or typescript, you can omit these settings.
        "import-x/parsers": {
            // You can omit .tsx if you don't use JSX with TypeScript.
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import-x/resolver": {
            "typescript": {
                "alwaysTryTypes": true
            }
        }
    }
}
```