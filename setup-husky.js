import { execSync } from 'child_process';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

console.log('🔧 Setting up Husky and lint-staged...');

execSync('npx husky install', { stdio: 'inherit' });

if (!existsSync('.husky')) {
  mkdirSync('.husky');
}

const preCommitHook = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged --verbose
`;

writeFileSync('.husky/pre-commit', preCommitHook, { mode: 0o755 });

console.log('✅ Created pre-commit hook');

const packageJson = JSON.parse(
  execSync('cat package.json', { encoding: 'utf-8' }),
);

packageJson.scripts = packageJson.scripts || {};
packageJson.scripts.prepare = 'husky install && node setup-husky.js';

packageJson['lint-staged'] = packageJson['lint-staged'] || {
  '**/*.{js,jsx,ts,tsx}': [
    'npx prettier --write',
    'npx eslint --fix',
    'npx eslint',
  ],
};

writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n');

console.log('✅ Updated package.json with lint-staged configuration');
console.log('🎉 Husky and lint-staged setup completed successfully!');
