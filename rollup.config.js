import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import json from "@rollup/plugin-json";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: [
    './src/lib/index.ts',
    './src/lib/DatePicker.tsx',
    './src/lib/DatePickerCalendar.tsx',
  ],
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      exports: 'named',
    }
  ],
  plugins: [
    sass({ insert: true }),
    typescript({
      verbosity: 2,
      clean: true,
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.json',
    }),
    json()
  ],
  external: ['react', 'react-dom']
}