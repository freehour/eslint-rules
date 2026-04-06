import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import type { Config } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import stylisticPlugin from '@stylistic/eslint-plugin';
import importXPlugin from 'eslint-plugin-import-x';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';


export interface ConfigOptions {
    /**
     * Enable when targeting Node.js.
     */
    node?: boolean;

    /**
     * Enable when targeting browsers.
     */
    browser?: boolean;

    /**
     * Enable when using React.
     */
    react?: boolean;

    /**
     * Enable when using Tailwind CSS.
     */
    tailwindcss?: boolean;

    /**
     * Enable to use stylistic rules.
     */
    stylistic?: boolean;

    /**
     * Enable to use import rules.
     */
    imports?: boolean;
}

export async function createConfig({
    node = false,
    browser = false,
    react = false,
    tailwindcss = false,
    stylistic = false,
    imports = false,
}: ConfigOptions = {}): Promise<Config> {

    return {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                projectService: true,
                ...react && {
                    ecmaFeatures: {
                        jsx: true,
                    },
                },
            },
            parser: tseslint.parser,
            globals: {
                ...browser && globals.browser,
                ...node && globals.nodeBuiltin,
            },
        },
        settings: {
            ...imports && {
                'import-x/resolver-next': [
                    createTypeScriptImportResolver({
                        alwaysTryTypes: true,
                    }),
                ],
            },
            ...react && {
                react: {
                    version: 'detect',
                },
            },
            ...tailwindcss && {
                tailwindcss: {
                    callees: [
                        'tw',
                        'clsx',
                        'cn',
                        'cva',
                        'twMerge',
                        'classnames',
                        'ctl'
                    ],
                },
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            ...react && {
                'react': reactPlugin,
                'react-hooks': reactHooksPlugin as any,
                'react-refresh': reactRefreshPlugin,
            },
            ...stylistic && { '@stylistic': stylisticPlugin },
            ...imports && { 'import-x': importXPlugin, 'simple-import-sort': simpleImportSortPlugin },
            ...tailwindcss && { 'tailwindcss': tailwindcssPlugin },
        },
        rules: {
            // base
            ...{
                /**
                 * @description rules related to possible logic errors
                 * @see https://eslint.org/docs/v10.x/rules/#possible-problems
                 * @version 10.1.0
                 */

                'array-callback-return': 'error',
                'constructor-super': 'error',
                'for-direction': 'error',
                'getter-return': 'error',
                'no-async-promise-executor': 'error',
                'no-await-in-loop': 'off',
                'no-class-assign': 'error',
                'no-compare-neg-zero': 'error',
                'no-cond-assign': 'error',
                'no-const-assign': 'off',
                'no-constant-binary-expression': 'warn',
                'no-constant-condition': 'error',
                'no-constructor-return': 'error',
                'no-control-regex': 'error',
                'no-debugger': 'error',
                'no-dupe-args': 'error',
                'no-dupe-class-members': 'error',
                'no-dupe-else-if': 'error',
                'no-dupe-keys': 'error',
                'no-duplicate-case': 'error',
                'no-duplicate-imports': 'off',
                'no-empty-character-class': 'error',
                'no-empty-pattern': 'warn',
                'no-ex-assign': 'error',
                'no-fallthrough': 'off',
                'no-func-assign': 'error',
                'no-import-assign': 'error',
                'no-inner-declarations': 'error',
                'no-invalid-regexp': 'error',
                'no-irregular-whitespace': 'error',
                'no-loss-of-precision': 'error',
                'no-misleading-character-class': 'error',
                'no-new-native-nonconstructor': 'error',
                'no-obj-calls': 'error',
                'no-promise-executor-return': [
                    'error',
                    {
                        allowVoid: true,
                    },
                ],
                'no-prototype-builtins': 'error',
                'no-self-assign': 'error',
                'no-self-compare': 'warn',
                'no-setter-return': 'error',
                'no-sparse-arrays': 'error',
                'no-template-curly-in-string': 'warn',
                'no-this-before-super': 'error',
                'no-undef': 'error',
                'no-unexpected-multiline': 'error',
                'no-unmodified-loop-condition': 'error',
                'no-unreachable': 'error',
                'no-unreachable-loop': 'warn',
                'no-unsafe-finally': 'error',
                'no-unsafe-negation': 'error',
                'no-unsafe-optional-chaining': [
                    'error',
                    {
                        disallowArithmeticOperators: true,
                    },
                ],
                'no-unused-private-class-members': 'error',
                'no-unused-vars': [
                    'warn',
                    {
                        args: 'none',
                    },
                ],
                'no-use-before-define': [
                    'warn',
                    {
                        functions: false,
                        classes: false,
                        variables: true,
                        allowNamedExports: false,
                    },
                ],
                'no-useless-backreference': 'warn',
                'require-atomic-updates': 'warn',
                'use-isnan': 'error',
                'valid-typeof': 'error',


                /**
                 * @description rules suggesting alternate ways of doing things
                 * @see https://eslint.org/docs/v8.x/rules/#suggestions
                 * @version 10.1.0
                 */

                'accessor-pairs': 'error',
                'arrow-body-style': 'warn',
                'block-scoped-var': 'error',
                'camelcase': 'off',
                'capitalized-comments': 'off',
                'class-methods-use-this': 'off',
                'complexity': 'off',
                'consistent-return': 'off',
                'consistent-this': 'off',
                'curly': 'error',
                'default-case': 'off',
                'default-case-last': 'error',
                'default-param-last': 'error',
                'dot-notation': 'error',
                'eqeqeq': [
                    'error',
                    'always',
                ],
                'func-name-matching': 'off',
                'func-names': 'off',
                'func-style': 'off',
                'grouped-accessor-pairs': 'off',
                'guard-for-in': 'error',
                'id-denylist': 'off',
                'id-length': 'off',
                'id-match': 'off',
                'init-declarations': 'error',
                'logical-assignment-operators': 'off',
                'max-classes-per-file': 'off',
                'max-depth': 'off',
                'max-lines': 'off',
                'max-lines-per-function': 'off',
                'max-nested-callbacks': 'off',
                'max-params': 'off',
                'max-statements': 'off',
                'new-cap': 'off',
                'no-alert': 'error',
                'no-array-constructor': 'error',
                'no-bitwise': 'off',
                'no-caller': 'error',
                'no-case-declarations': 'error',
                'no-console': 'off',
                'no-continue': 'off',
                'no-delete-var': 'error',
                'no-div-regex': 'off',
                'no-else-return': [
                    'error',
                    {
                        allowElseIf: false,
                    },
                ],
                'no-empty': 'off',
                'no-empty-function': 'off',
                'no-empty-static-block': 'off',
                'no-eq-null': 'off',
                'no-eval': 'error',
                'no-extend-native': 'off',
                'no-extra-bind': 'error',
                'no-extra-boolean-cast': 'error',
                'no-extra-label': 'error',
                'no-global-assign': 'error',
                'no-implicit-coercion': 'error',
                'no-implicit-globals': 'off',
                'no-implied-eval': 'error',
                'no-inline-comments': 'off',
                'no-invalid-this': 'off',
                'no-iterator': 'error',
                'no-label-var': 'error',
                'no-labels': 'off',
                'no-lone-blocks': 'off',
                'no-lonely-if': 'warn',
                'no-loop-func': 'warn',
                'no-magic-numbers': 'off',
                'no-multi-assign': 'off',
                'no-multi-str': 'error',
                'no-negated-condition': 'off',
                'no-nested-ternary': 'off',
                'no-new': 'error',
                'no-new-func': 'error',
                'no-new-wrappers': 'error',
                'no-nonoctal-decimal-escape': 'error',
                'no-object-constructor': 'error',
                'no-octal': 'error',
                'no-octal-escape': 'error',
                'no-param-reassign': 'off',
                'no-plusplus': 'off',
                'no-proto': 'error',
                'no-redeclare': 'off',
                'no-regex-spaces': 'warn',
                'no-restricted-exports': 'off',
                'no-restricted-globals': 'off',
                'no-restricted-imports': 'error',
                'no-restricted-properties': 'off',
                'no-restricted-syntax': 'off',
                'no-return-assign': 'off',
                'no-script-url': 'error',
                'no-sequences': 'off',
                'no-shadow': 'off',
                'no-shadow-restricted-names': 'error',
                'no-ternary': 'off',
                'no-throw-literal': 'error',
                'no-undef-init': 'off',
                'no-undefined': 'off',
                'no-underscore-dangle': 'off',
                'no-unneeded-ternary': 'warn',
                'no-unused-expressions': 'warn',
                'no-unused-labels': 'error',
                'no-useless-call': 'off',
                'no-useless-catch': 'error',
                'no-useless-computed-key': 'warn',
                'no-useless-concat': 'warn',
                'no-useless-constructor': 'warn',
                'no-useless-escape': 'warn',
                'no-useless-rename': 'error',
                'no-useless-return': 'error',
                'no-var': 'error',
                'no-void': 'off',
                'no-warning-comments': 'off',
                'no-with': 'error',
                'object-shorthand': 'off',
                'one-var': 'off',
                'operator-assignment': 'off',
                'prefer-arrow-callback': 'off',
                'prefer-const': 'error',
                'prefer-destructuring': 'off',
                'prefer-exponentiation-operator': 'off',
                'prefer-named-capture-group': 'off',
                'prefer-numeric-literals': 'off',
                'prefer-object-has-own': 'off',
                'prefer-object-spread': 'warn',
                'prefer-promise-reject-errors': 'error',
                'prefer-regex-literals': 'off',
                'prefer-rest-params': 'warn',
                'prefer-spread': 'warn',
                'prefer-template': 'warn',
                'preserve-caught-error': 'error',
                'radix': 'off',
                'require-await': 'error',
                'require-unicode-regexp': 'off',
                'require-yield': 'error',
                'sort-imports': 'off',
                'sort-keys': 'off',
                'sort-vars': 'off',
                'strict': 'off',
                'symbol-description': 'off',
                'vars-on-top': 'off',
                'yoda': [
                    'warn',
                    'never',
                    {
                        exceptRange: true,
                    },
                ],

                /**
                 * @description rules that care about how the code looks rather than how it executes:
                 * @see https://eslint.org/docs/v8.x/rules/#layout--formatting
                 * @version 10.1.0
                 */
                'unicode-bom': 'error',
            },
            // @typescript-eslint
            ...{
                /**
                 * Base rules that are extended by the typescript-eslint package or checked by the typescript compiler anyway.
                 * These rules need to be turned off.
                 * @see https://typescript-eslint.io/rules/?=extension
                 */

                'class-methods-use-this': 'off',
                'consistent-return': 'off',
                'default-param-last': 'off',
                'dot-notation': 'off',
                'init-declarations': 'off',
                'max-params': 'off',
                'no-array-constructor': 'off',
                'no-dupe-class-members': 'off',
                'no-empty-function': 'off',
                'no-implied-eval': 'off',
                'no-invalid-this': 'off',
                'no-loop-func': 'off',
                'no-magic-numbers': 'off',
                'no-redeclare': 'off',
                'no-restricted-imports': 'off',
                'no-shadow': 'off',
                'no-undef': 'off',
                'no-unused-expressions': 'off',
                'no-unused-private-class-members': 'off',
                'no-unused-vars': 'off',
                'no-use-before-define': 'off',
                'no-useless-constructor': 'off',
                'no-throw-literal': 'off',
                'prefer-destructuring': 'off',
                'prefer-promise-reject-errors': 'off',
                'require-await': 'off',

                /**
                 * @description rules from the typescript-eslint package
                 * @see https://typescript-eslint.io/rules/
                 * @version 8.57.2
                 */

                '@typescript-eslint/adjacent-overload-signatures': 'warn',
                '@typescript-eslint/array-type': 'warn',
                '@typescript-eslint/await-thenable': 'error',
                '@typescript-eslint/ban-ts-comment': 'error',
                '@typescript-eslint/ban-tslint-comment': 'error',
                '@typescript-eslint/class-literal-property-style': 'warn',
                '@typescript-eslint/class-methods-use-this': 'off',
                '@typescript-eslint/consistent-generic-constructors': 'warn',
                '@typescript-eslint/consistent-indexed-object-style': 'warn',
                '@typescript-eslint/consistent-return': 'off',
                '@typescript-eslint/consistent-type-assertions': 'warn',
                '@typescript-eslint/consistent-type-definitions': 'warn',
                '@typescript-eslint/consistent-type-exports': 'warn',
                '@typescript-eslint/consistent-type-imports': 'warn',
                '@typescript-eslint/default-param-last': 'error',
                '@typescript-eslint/dot-notation': 'error',
                '@typescript-eslint/explicit-function-return-type': [
                    'warn',
                    {
                        allowExpressions: true,
                        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
                    },
                ],
                '@typescript-eslint/explicit-member-accessibility': [
                    'warn',
                    {
                        accessibility: 'no-public',
                    },
                ],
                '@typescript-eslint/explicit-module-boundary-types': 'error',
                '@typescript-eslint/init-declarations': 'error',
                '@typescript-eslint/max-params': 'off',
                '@typescript-eslint/member-ordering': 'off',
                '@typescript-eslint/method-signature-style': 'warn',
                '@typescript-eslint/naming-convention': 'off',
                '@typescript-eslint/no-array-constructor': 'error',
                '@typescript-eslint/no-array-delete': 'error',
                '@typescript-eslint/no-base-to-string': 'warn',
                '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
                '@typescript-eslint/no-confusing-void-expression': [
                    'warn',
                    {
                        ignoreArrowShorthand: true,
                    },
                ],
                '@typescript-eslint/no-deprecated': 'warn',
                '@typescript-eslint/no-dupe-class-members': 'off',
                '@typescript-eslint/no-duplicate-enum-values': 'warn',
                '@typescript-eslint/no-duplicate-type-constituents': 'warn',
                '@typescript-eslint/no-dynamic-delete': 'warn',
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/no-empty-object-type': [
                    'warn',
                    {
                        allowInterfaces: 'always',
                    },
                ],
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-extra-non-null-assertion': 'error',
                '@typescript-eslint/no-extraneous-class': 'warn',
                '@typescript-eslint/no-floating-promises': 'error',
                '@typescript-eslint/no-for-in-array': 'error',
                '@typescript-eslint/no-implied-eval': 'error',
                '@typescript-eslint/no-import-type-side-effects': 'warn',
                '@typescript-eslint/no-inferrable-types': 'warn',
                '@typescript-eslint/no-invalid-this': 'off',
                '@typescript-eslint/no-invalid-void-type': 'warn',
                '@typescript-eslint/no-loop-func': 'warn',
                '@typescript-eslint/no-magic-numbers': 'off',
                '@typescript-eslint/no-meaningless-void-operator': 'warn',
                '@typescript-eslint/no-misused-new': 'error',
                '@typescript-eslint/no-misused-promises': 'error',
                '@typescript-eslint/no-misused-spread': 'error',
                '@typescript-eslint/no-mixed-enums': 'warn',
                '@typescript-eslint/no-namespace': 'error',
                '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
                '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
                '@typescript-eslint/no-non-null-assertion': 'error',
                '@typescript-eslint/no-redeclare': 'off',
                '@typescript-eslint/no-redundant-type-constituents': 'warn',
                '@typescript-eslint/no-require-imports': 'warn',
                '@typescript-eslint/no-restricted-imports': 'error',
                '@typescript-eslint/no-restricted-types': 'off',
                '@typescript-eslint/no-shadow': 'off',
                '@typescript-eslint/no-this-alias': 'error',
                '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
                '@typescript-eslint/no-unnecessary-condition': [
                    'warn',
                    {
                        allowConstantLoopConditions: true,
                    },
                ],
                '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
                '@typescript-eslint/no-unnecessary-qualifier': 'warn',
                '@typescript-eslint/no-unnecessary-template-expression': 'warn',
                '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
                '@typescript-eslint/no-unnecessary-type-assertion': 'error',
                '@typescript-eslint/no-unnecessary-type-constraint': 'error',
                '@typescript-eslint/no-unnecessary-type-conversion': 'error',
                '@typescript-eslint/no-unnecessary-type-parameters': 'off',
                '@typescript-eslint/no-unsafe-argument': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-unsafe-declaration-merging': 'error',
                '@typescript-eslint/no-unsafe-enum-comparison': 'off',
                '@typescript-eslint/no-unsafe-function-type': 'warn',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/no-unsafe-unary-minus': 'error',
                '@typescript-eslint/no-unused-expressions': 'warn',
                '@typescript-eslint/no-unused-private-class-members': 'warn',
                '@typescript-eslint/no-unused-vars': [
                    'warn',
                    {
                        args: 'none',
                        enableAutofixRemoval: {
                            imports: true,
                        },
                    },
                ],
                '@typescript-eslint/no-use-before-define': [
                    'warn',
                    {
                        functions: false,
                        classes: false,
                        variables: true,
                        allowNamedExports: false,
                    },
                ],
                '@typescript-eslint/no-useless-constructor': 'warn',
                '@typescript-eslint/no-useless-empty-export': 'warn',
                '@typescript-eslint/no-wrapper-object-types': 'error',
                '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
                '@typescript-eslint/only-throw-error': [
                    'error',
                    {
                        allowRethrowing: true,
                    },
                ],
                '@typescript-eslint/parameter-properties': 'warn',
                '@typescript-eslint/prefer-as-const': 'error',
                '@typescript-eslint/prefer-destructuring': 'off',
                '@typescript-eslint/prefer-enum-initializers': 'off',
                '@typescript-eslint/prefer-find': 'warn',
                '@typescript-eslint/prefer-for-of': 'warn',
                '@typescript-eslint/prefer-function-type': 'warn',
                '@typescript-eslint/prefer-includes': 'warn',
                '@typescript-eslint/prefer-literal-enum-member': 'off',
                '@typescript-eslint/prefer-namespace-keyword': 'error',
                '@typescript-eslint/prefer-nullish-coalescing': 'error',
                '@typescript-eslint/prefer-optional-chain': 'error',
                '@typescript-eslint/prefer-promise-reject-errors': 'error',
                '@typescript-eslint/prefer-readonly': 'warn',
                '@typescript-eslint/prefer-readonly-parameter-types': 'off',
                '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
                '@typescript-eslint/prefer-regexp-exec': 'warn',
                '@typescript-eslint/prefer-return-this-type': 'warn',
                '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
                '@typescript-eslint/promise-function-async': 'warn',
                '@typescript-eslint/related-getter-setter-pairs': 'error',
                '@typescript-eslint/require-array-sort-compare': 'warn',
                '@typescript-eslint/require-await': 'error',
                '@typescript-eslint/restrict-plus-operands': 'off',
                '@typescript-eslint/restrict-template-expressions': 'off',
                '@typescript-eslint/return-await': [
                    'error',
                    'in-try-catch',
                ],
                '@typescript-eslint/strict-boolean-expressions': 'warn',
                '@typescript-eslint/strict-void-return': 'off',
                '@typescript-eslint/switch-exhaustiveness-check': 'warn',
                '@typescript-eslint/triple-slash-reference': 'error',
                '@typescript-eslint/unbound-method': [
                    'error',
                    {
                        ignoreStatic: true,
                    },
                ],
                '@typescript-eslint/unified-signatures': 'warn',
                '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
            },
            // stylistic
            ...stylistic && {
                /**
                 * @description rules from the stylistic package
                 * @see https://eslint.style/rules
                 * @version 6.0.0
                 */

                '@stylistic/array-bracket-newline': 'warn',
                '@stylistic/array-bracket-spacing': 'warn',
                '@stylistic/array-element-newline': [
                    'warn',
                    'consistent',
                ],
                '@stylistic/arrow-parens': [
                    'warn',
                    'as-needed',
                ],
                '@stylistic/arrow-spacing': 'warn',
                '@stylistic/block-spacing': 'warn',
                '@stylistic/brace-style': 'warn',
                '@stylistic/comma-dangle': [
                    'warn',
                    'always-multiline',
                ],
                '@stylistic/comma-spacing': 'warn',
                '@stylistic/comma-style': 'warn',
                '@stylistic/computed-property-spacing': 'warn',
                '@stylistic/dot-location': [
                    'warn',
                    'property',
                ],
                '@stylistic/eol-last': 'warn',
                '@stylistic/function-call-argument-newline': [
                    'warn',
                    'consistent',
                ],
                '@stylistic/function-call-spacing': 'warn',
                '@stylistic/function-paren-newline': [
                    'warn',
                    'multiline-arguments',
                ],
                '@stylistic/generator-star-spacing': 'warn',
                '@stylistic/implicit-arrow-linebreak': 'warn',
                '@stylistic/indent': ['warn', 4],
                '@stylistic/indent-binary-ops': ['warn', 4],

                '@stylistic/jsx-child-element-spacing': 'warn',
                '@stylistic/jsx-closing-bracket-location': 'warn',
                '@stylistic/jsx-closing-tag-location': 'warn',
                '@stylistic/jsx-curly-brace-presence': [
                    'warn',
                    {
                        props: 'never',
                        children: 'never',
                        propElementValues: 'always',
                    },
                ],
                '@stylistic/jsx-curly-newline': 'warn',
                '@stylistic/jsx-curly-spacing': 'warn',
                '@stylistic/jsx-equals-spacing': 'warn',
                '@stylistic/jsx-first-prop-new-line': [
                    'warn',
                    'multiline',
                ],
                '@stylistic/jsx-function-call-newline': 'warn',
                '@stylistic/jsx-indent-props': 'warn',
                '@stylistic/jsx-max-props-per-line': [
                    'warn',
                    {
                        maximum: 1,
                        when: 'multiline',
                    },
                ],
                '@stylistic/jsx-newline': [
                    'warn',
                    {
                        prevent: true,
                    },
                ],
                '@stylistic/jsx-one-expression-per-line': [
                    'warn',
                    {
                        allow: 'single-child',
                    },
                ],
                '@stylistic/jsx-pascal-case': 'warn',
                '@stylistic/exp-jsx-props-style': [
                    'warn',
                    {
                        singleLine: {
                            maxItems: 1,
                        },
                    },
                ],
                '@stylistic/jsx-quotes': 'warn',
                '@stylistic/jsx-self-closing-comp': 'warn',
                '@stylistic/jsx-tag-spacing': 'warn',
                '@stylistic/jsx-wrap-multilines': [
                    'warn',
                    {
                        declaration: 'parens-new-line',
                        assignment: 'parens-new-line',
                        return: 'parens-new-line',
                        arrow: 'parens-new-line',
                        condition: 'parens-new-line',
                        logical: 'parens-new-line',
                        prop: 'parens-new-line',
                    },
                ],
                '@stylistic/key-spacing': 'warn',
                '@stylistic/keyword-spacing': 'warn',
                '@stylistic/line-comment-position': 'off',
                '@stylistic/linebreak-style': 'warn',
                '@stylistic/lines-around-comment': [
                    'warn',
                    {
                        allowArrayStart: true,
                        allowBlockStart: true,
                        allowClassStart: true,
                        allowObjectStart: true,
                    },
                ],
                '@stylistic/lines-between-class-members': [
                    'warn',
                    'always',
                    {
                        exceptAfterSingleLine: true,
                    },
                ],
                '@stylistic/exp-list-style': 'warn',
                '@stylistic/max-len': 'off',
                '@stylistic/max-statements-per-line': 'warn',
                '@stylistic/member-delimiter-style': 'warn',
                '@stylistic/multiline-comment-style': 'off',
                '@stylistic/multiline-ternary': [
                    'warn',
                    'always-multiline',
                ],
                '@stylistic/new-parens': 'warn',
                '@stylistic/newline-per-chained-call': 'warn',
                '@stylistic/no-confusing-arrow': 'off',
                '@stylistic/no-extra-parens': [
                    'warn',
                    'all',
                    {
                        ignoreJSX: 'all',
                        nestedBinaryExpressions: false,
                        ignoredNodes: ['ArrowFunctionExpression[body.type=ConditionalExpression]'],
                    },
                ],
                '@stylistic/no-extra-semi': 'warn',
                '@stylistic/no-floating-decimal': 'warn',
                '@stylistic/no-mixed-operators': 'warn',
                '@stylistic/no-mixed-spaces-and-tabs': 'error',
                '@stylistic/no-multi-spaces': [
                    'warn',
                    {
                        ignoreEOLComments: true,
                    },
                ],
                '@stylistic/no-multiple-empty-lines': [
                    'warn',
                    {
                        max: 2,
                        maxEOF: 1,
                    },
                ],
                '@stylistic/no-tabs': 'error',
                '@stylistic/no-trailing-spaces': 'warn',
                '@stylistic/no-whitespace-before-property': 'warn',
                '@stylistic/nonblock-statement-body-position': 'off',
                '@stylistic/object-curly-newline': [
                    'warn',
                    {
                        ObjectExpression: { multiline: true, consistent: true },
                        ObjectPattern: { multiline: true, consistent: true },
                        ImportDeclaration: { multiline: true, consistent: true },
                        ExportDeclaration: { multiline: true, consistent: true },
                    },
                ],
                '@stylistic/object-curly-spacing': ['warn', 'always'],
                '@stylistic/object-property-newline': [
                    'warn',
                    {
                        allowAllPropertiesOnSameLine: true,
                    },
                ],
                '@stylistic/one-var-declaration-per-line': 'warn',
                '@stylistic/operator-linebreak': [
                    'warn',
                    'before',
                    {
                        overrides: {
                            '=': 'after',
                        },
                    }
                ],
                '@stylistic/padded-blocks': 'off',
                '@stylistic/padding-line-between-statements': [
                    'warn',
                    {
                        blankLine: 'always',
                        prev: ['class', 'function'],
                        next: '*',
                    },
                ],
                '@stylistic/quote-props': [
                    'warn',
                    'consistent-as-needed',
                ],
                '@stylistic/quotes': ['warn', 'single'],
                '@stylistic/rest-spread-spacing': 'warn',
                '@stylistic/semi': 'warn',
                '@stylistic/semi-spacing': 'warn',
                '@stylistic/semi-style': 'warn',
                '@stylistic/space-before-blocks': 'warn',
                '@stylistic/space-before-function-paren': [
                    'warn',
                    {
                        anonymous: 'never',
                        named: 'never',
                        asyncArrow: 'always',
                    },
                ],
                '@stylistic/space-in-parens': 'warn',
                '@stylistic/space-infix-ops': 'warn',
                '@stylistic/space-unary-ops': 'warn',
                '@stylistic/spaced-comment': 'warn',
                '@stylistic/switch-colon-spacing': 'warn',
                '@stylistic/template-curly-spacing': 'warn',
                '@stylistic/template-tag-spacing': 'warn',
                '@stylistic/type-annotation-spacing': 'warn',
                '@stylistic/type-generic-spacing': 'warn',
                '@stylistic/type-named-tuple-spacing': 'warn',
                '@stylistic/wrap-iife': 'warn',
                '@stylistic/wrap-regex': 'off',
                '@stylistic/yield-star-spacing': 'off',
            },
            // import-x
            ...imports && {
                /**
                 * Rules from the core eslint package that are extended by the import-x package.
                 * These rules need to be turned off.
                 */
                'no-duplicate-imports': 'off',

                /**
                 * @description Import rules
                 * @see https://github.com/import-js/eslint-plugin-import/tree/main?tab=readme-ov-file
                 * @version 4.16.2
                 */

                'import-x/export': 'error',
                'import-x/no-deprecated': 'warn',
                'import-x/no-empty-named-blocks': 'warn',
                'import-x/no-extraneous-dependencies': 'warn',
                'import-x/no-mutable-exports': 'warn',
                'import-x/no-named-as-default': 'warn',
                'import-x/no-named-as-default-member': 'off',
                'import-x/no-rename-default': 'off',
                'import-x/no-unused-modules': 'off', // not compatible with flat config
                'import-x/no-amd': 'error',
                'import-x/no-commonjs': 'error',
                'import-x/no-import-module-exports': 'error',
                'import-x/no-nodejs-modules': browser && !node ? 'error' : 'off',
                'import-x/unambiguous': 'error',

                'import-x/default': 'error',
                'import-x/named': 'off',
                'import-x/namespace': 'error',
                'import-x/no-absolute-path': 'error',
                'import-x/no-cycle': 'error',
                'import-x/no-dynamic-require': 'warn',
                'import-x/no-internal-modules': 'off',
                'import-x/no-relative-packages': 'warn',
                'import-x/no-relative-parent-imports': 'off',
                'import-x/no-restricted-paths': 'off',
                'import-x/no-self-import': 'warn',
                'import-x/no-unresolved': 'error',
                'import-x/no-useless-path-segments': 'warn',
                'import-x/no-webpack-loader-syntax': 'error',

                'import-x/consistent-type-specifier-style': [
                    'warn',
                    'prefer-top-level',
                ],
                'import-x/dynamic-import-chunkname': 'off',
                'import-x/exports-last': 'off',
                'import-x/extensions': [
                    'warn',
                    {
                        json: 'always',
                        fix: true,
                    },
                ],
                'import-x/first': 'warn',
                'import-x/group-exports': 'off',
                'import-x/max-dependencies': 'off',
                'import-x/newline-after-import': [
                    'warn',
                    {
                        count: 2,
                        considerComments: false,
                    },
                ],
                'import-x/no-anonymous-default-export': 'off',
                'import-x/no-default-export': 'off',
                'import-x/no-duplicates': 'warn',
                'import-x/no-named-default': 'warn',
                'import-x/no-named-export': 'off',
                'import-x/no-namespace': 'off',
                'import-x/no-unassigned-import': 'off',
                'import-x/order': 'off',
                'import-x/prefer-default-export': 'off',
                'import-x/prefer-namespace-import': 'off',


            },
            // react
            ...react && {
                ...stylistic && {
                    /**
                     * Rules from the stylistic package that are extended by the react plugin.
                     * These rules need to be turned off.
                     */
                    '@stylistic/jsx-child-element-spacing': 'off',
                    '@stylistic/jsx-closing-bracket-location': 'off',
                    '@stylistic/jsx-closing-tag-location': 'off',
                    '@stylistic/jsx-curly-brace-presence': 'off',
                    '@stylistic/jsx-curly-newline': 'off',
                    '@stylistic/jsx-curly-spacing': 'off',
                    '@stylistic/jsx-equals-spacing': 'off',
                    '@stylistic/jsx-first-prop-new-line': 'off',
                    '@stylistic/jsx-indent': 'off',
                    '@stylistic/jsx-indent-props': 'off',
                    '@stylistic/jsx-max-props-per-line': 'off',
                    '@stylistic/jsx-newline': 'off',
                    '@stylistic/jsx-one-expression-per-line': 'off',
                    '@stylistic/jsx-pascal-case': 'off',
                    '@stylistic/jsx-props-no-multi-spaces': 'off',
                    '@stylistic/jsx-sort-props': 'off',
                    '@stylistic/jsx-tag-spacing': 'off',
                },

                /**
                 * @description eslint rules for react
                 * @see https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules
                 * @version 7.37.5
                 */

                'react/boolean-prop-naming': 'off',
                'react/button-has-type': 'warn',
                'react/checked-requires-onchange-or-readonly': 'warn',
                'react/default-props-match-prop-types': 'off',
                'react/destructuring-assignment': 'off',
                'react/display-name': 'warn',
                'react/forbid-component-props': 'off',
                'react/forbid-dom-props': 'off',
                'react/forbid-elements': 'off',
                'react/forbid-foreign-prop-types': 'off',
                'react/forbid-prop-types': 'off',
                'react/forward-ref-uses-ref': 'warn',
                'react/function-component-definition': [
                    'warn',
                    {
                        namedComponents: 'arrow-function',
                    },
                ],
                'react/hook-use-state': 'warn',
                'react/iframe-missing-sandbox': 'warn',
                'react/jsx-boolean-value': 'warn',
                'react/jsx-child-element-spacing': 'warn',
                'react/jsx-closing-bracket-location': 'warn',
                'react/jsx-closing-tag-location': 'warn',
                'react/jsx-curly-brace-presence': [
                    'warn',
                    {
                        props: 'never',
                        children: 'never',
                        propElementValues: 'always',
                    },
                ],
                'react/jsx-curly-newline': 'warn',
                'react/jsx-curly-spacing': 'warn',
                'react/jsx-equals-spacing': 'warn',
                'react/jsx-filename-extension': [
                    'warn',
                    {
                        extensions: ['.tsx'],
                    },
                ],
                'react/jsx-first-prop-new-line': [
                    'warn',
                    'multiline',
                ],
                'react/jsx-fragments': 'warn',
                'react/jsx-handler-names': 'off',
                'react/jsx-indent': [
                    'warn',
                    4,
                    {
                        indentLogicalExpressions: true,
                    },
                ],
                'react/jsx-indent-props': 'warn',
                'react/jsx-key': 'warn',
                'react/jsx-max-depth': 'off',
                'react/jsx-max-props-per-line': [
                    'warn',
                    {
                        maximum: 1,
                        when: 'multiline',
                    },
                ],
                'react/jsx-newline': [
                    'warn',
                    {
                        prevent: true,
                    },
                ],
                'react/jsx-no-bind': [
                    'warn',
                    {
                        ignoreDOMComponents: true,
                        ignoreRefs: true,
                    },
                ],
                'react/jsx-no-comment-textnodes': 'warn',
                'react/jsx-no-constructed-context-values': 'warn',
                'react/jsx-no-duplicate-props': 'warn',
                'react/jsx-no-leaked-render': 'off',
                'react/jsx-no-literals': 'off',
                'react/jsx-no-script-url': 'warn',
                'react/jsx-no-target-blank': 'error',
                'react/jsx-no-undef': 'off',
                'react/jsx-no-useless-fragment': 'warn',
                'react/jsx-one-expression-per-line': [
                    'warn',
                    {
                        allow: 'single-child',
                    },
                ],
                'react/jsx-pascal-case': 'off',
                'react/jsx-props-no-multi-spaces': 'warn',
                'react/jsx-props-no-spread-multi': 'warn',
                'react/jsx-props-no-spreading': 'off',
                'react/jsx-sort-props': 'off',
                'react/jsx-tag-spacing': 'warn',

                'react/jsx-uses-vars': 'warn',
                'react/jsx-wrap-multilines': [
                    'warn',
                    {
                        declaration: 'parens-new-line',
                        assignment: 'parens-new-line',
                        return: 'parens-new-line',
                        arrow: 'parens-new-line',
                        condition: 'parens-new-line',
                        logical: 'parens-new-line',
                        prop: 'parens-new-line',
                    },
                ],
                'react/no-access-state-in-setstate': 'off',
                'react/no-adjacent-inline-elements': 'off',
                'react/no-array-index-key': 'off',
                'react/no-arrow-function-lifecycle': 'off',
                'react/no-children-prop': 'warn',
                'react/no-danger': 'off',
                'react/no-danger-with-children': 'warn',
                'react/no-deprecated': 'warn',
                'react/no-did-mount-set-state': 'off',
                'react/no-did-update-set-state': 'off',
                'react/no-direct-mutation-state': 'error',
                'react/no-find-dom-node': 'warn',
                'react/no-invalid-html-attribute': 'warn',
                'react/no-is-mounted': 'off',
                'react/no-multi-comp': 'off',
                'react/no-namespace': 'warn',
                'react/no-object-type-as-default-prop': 'off',
                'react/no-redundant-should-component-update': 'off',
                'react/no-render-return-value': 'warn',
                'react/no-set-state': 'off',
                'react/no-string-refs': 'warn',
                'react/no-this-in-sfc': 'warn',
                'react/no-typos': 'off',
                'react/no-unescaped-entities': 'warn',
                'react/no-unknown-property': 'warn',
                'react/no-unsafe': 'off',
                'react/no-unstable-nested-components': 'warn',
                'react/no-unused-class-component-methods': 'off',
                'react/no-unused-prop-types': 'off',
                'react/no-unused-state': 'off',
                'react/no-will-update-set-state': 'off',
                'react/prefer-es6-class': 'off',
                'react/prefer-exact-props': 'off',
                'react/prefer-read-only-props': 'off',
                'react/prefer-stateless-function': 'error',
                'react/prop-types': 'warn',
                'react/require-default-props': 'off',
                'react/require-optimization': 'off',
                'react/require-render-return': 'off',
                'react/self-closing-comp': 'warn',
                'react/sort-comp': 'off',
                'react/sort-default-props': 'off',
                'react/sort-prop-types': 'off',
                'react/state-in-constructor': 'off',
                'react/static-property-placement': 'off',
                'react/style-prop-object': 'warn',
                'react/void-dom-elements-no-children': 'warn',


                /**
                 * @description rules for react jsx-runtime
                 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/index.js
                 * @version 7.37.5
                 */

                'react/react-in-jsx-scope': 'off',
                'react/jsx-uses-react': 'off',


                /**
                 * @description: enforce the Rules of Hooks
                 * @see https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
                 * @version 7.0.1
                 */

                // Core hooks rules
                'react-hooks/rules-of-hooks': 'error',
                'react-hooks/exhaustive-deps': 'warn',

                // React Compiler rules
                'react-hooks/config': 'error',
                'react-hooks/error-boundaries': 'error',
                'react-hooks/component-hook-factories': 'error',
                'react-hooks/gating': 'error',
                'react-hooks/globals': 'error',
                'react-hooks/immutability': 'error',
                'react-hooks/preserve-manual-memoization': 'error',
                'react-hooks/purity': 'error',
                'react-hooks/refs': 'error',
                'react-hooks/set-state-in-effect': 'error',
                'react-hooks/set-state-in-render': 'error',
                'react-hooks/static-components': 'error',
                'react-hooks/unsupported-syntax': 'warn',
                'react-hooks/use-memo': 'off',
                'react-hooks/incompatible-library': 'warn',

                /**
                 * @description: rules that validate that your components can safely be updated with fast refresh.
                 * @see https://github.com/ArnaudBarre/eslint-plugin-react-refresh
                 * @version 0.5.2
                 */

                'react-refresh/only-export-components': [
                    'warn',
                    {
                        allowConstantExport: true,
                    },
                ],
            },
            // tailwindcss
            ...tailwindcss && {
                /**
                 * @description rules for Tailwind CSS
                 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss
                 * @version 4.0.0-beata.0
                 */

                'tailwindcss/classnames-order': 'warn',
                'tailwindcss/enforces-negative-arbitrary-values': 'warn',
                'tailwindcss/enforces-shorthand': 'warn',
                'tailwindcss/migration-from-tailwind-2': 'off',
                'tailwindcss/no-arbitrary-value': 'off',
                'tailwindcss/no-custom-classname': 'warn',
                'tailwindcss/no-contradicting-classname': 'off',
                'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
            },
            ...imports && {
                /**
                 * @description: eslint stylistic rules
                 * @see https://github.com/lydell/eslint-plugin-simple-import-sort/
                 * @version 12.1.1
                 */

                'simple-import-sort/imports': [
                    'warn',
                    {
                        groups: [
                            // Side effect imports.
                            [
                                "^\\u0000"
                            ],
                            // Unscoped packages.
                            [
                                "^\\w"
                            ],
                            // Scoped packages.
                            [
                                "^@\\w"
                            ],
                            // Internal packages.
                            [
                                "^@/"
                            ],
                            // Parent imports. Put `..` last.
                            [
                                "^\\.\\.(?!/?$)",
                                "^\\.\\./?$"
                            ],
                            // Other relative imports. Put same-folder imports and `.` last.
                            [
                                "^\\./(?=.*/)(?!/?$)",
                                "^\\.(?!/?$)",
                                "^\\./?$"
                            ],
                            // Style imports.
                            [
                                "^.+\\.s?css$"
                            ]
                        ]
                    }
                ],
                'simple-import-sort/exports': 'warn',
            }
        },
    };
}
