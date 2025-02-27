import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {existsSync, readFileSync} from 'fs';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintIgnorePath = `${__dirname}/.eslintignore`;
let ignoredPatterns = [];

if (existsSync(eslintIgnorePath)) {
  ignoredPatterns = readFileSync(eslintIgnorePath, 'utf-8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'));
}

const eslintConfig = [
  {
    ignores: ignoredPatterns,
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript')
];

export default eslintConfig;
