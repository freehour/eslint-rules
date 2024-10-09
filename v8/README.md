

# Legacy Config v8

```jsonc
// package.json
  "devDependencies": {
    "@eslint/js": "8.57.1",
    "@stylistic/eslint-plugin-js": "2.9.0",
    "@stylistic/eslint-plugin-ts": "2.9.0",
    "@stylistic/eslint-plugin-jsx": "2.9.0",
    "@stylistic/eslint-plugin-plus": "2.9.0",
    "eslint-import-resolver-typescript": "3.6.3",
    "eslint-plugin-import-x": "4.3.1",
    "eslint-plugin-react": "7.37.1",
    "eslint-plugin-react-hooks": "4.6.2",
    "eslint-plugin-react-refresh": "0.4.12",
    "eslint-plugin-simple-import-sort": "12.1.1",
    "typescript-eslint": "8.8.1"
    //...
  },

// .eslintrc.json
  {
    "plugins": [
        "@stylistic/js",
        "@stylistic/jsx",
        "@stylistic/plus",
        "@stylistic/ts",
        "import-x",
        "simple-import-sort",
        "@typescript-eslint",
    ],
    "extends": [
        "./eslint/v8/.eslintrc.json",
        "./eslint/v8/@stylistic/js/.eslintrc.json",
        "./eslint/v8/@stylistic/jsx/.eslintrc.json",
        "./eslint/v8/@stylistic/plus/.eslintrc.json",
        "./eslint/v8/@stylistic/ts/.eslintrc.json",
        "./eslint/v8/import-x/.eslintrc.json",
        "./eslint/v8/react/.eslintrc.json",
        "./eslint/v8/react-hooks/.eslintrc.json",
        "./eslint/v8/react-refresh/.eslintrc.json",
        "./eslint/v8/simple-import-sort/.eslintrc.json"
        "./eslint/v8/@typescript-eslint/.eslintrc.json",
    ],
    "settings": {
        "import-x/parsers": {
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