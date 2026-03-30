import { resolve } from 'path';
import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';

import pkg from './package.json' with { type: 'json' };


const dependencies = [
    'globals',
    ...Object.keys(pkg.peerDependencies),
    ...Object.keys(pkg.dependencies),
];

export default defineConfig({
    resolve: {
        tsconfigPaths: true,
    },
    plugins: [
        dtsPlugin({
            entryRoot: 'lib',
            include: ['lib/'],
            staticImport: true,
            tsconfigPath: './tsconfig.lib.json',
        }),
    ],
    build: {
        minify: true,
        lib: {
            entry: [
                resolve(__dirname, './lib/index.ts'),
            ],
            name: pkg.name,
            formats: ['es'],
        },
        rollupOptions: {
            external: id => dependencies.some(dep => id.startsWith(dep)),
            output: {
                globals: Object.fromEntries(dependencies.map(dep => [dep, dep])),
                preserveModulesRoot: 'lib',
            },
        },
    },
});
