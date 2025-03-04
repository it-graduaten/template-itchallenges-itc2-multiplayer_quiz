import {defineConfig} from 'vite';

export default defineConfig({
    test: {
        coverage: {
            enabled: true,
            reporter: ['html']
        },
        include: 'unit_tests/**/*.test.ts',
    },
});