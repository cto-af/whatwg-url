import {defineConfig} from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: [
    'src/index.ts',
  ],
  format: 'cjs',
  minify: true,
  outDir: 'lib',
  sourcemap: false,
  splitting: false,
  target: 'es2022',
  bundle: true,
});
