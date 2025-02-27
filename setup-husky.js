import {execSync} from 'child_process';
import {existsSync, mkdirSync, writeFileSync} from 'fs';

console.log('🔧 Setting up Husky...');

execSync('npx husky install', {stdio: 'inherit'});

if (!existsSync('.husky')) {
  mkdirSync('.husky');
}

const preCommitHook = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx prettier --write .
npx eslint --fix .
`;

writeFileSync('.husky/pre-commit', preCommitHook, {mode: 0o755});

console.log('✅ Created pre-commit hook');

const packageJson = JSON.parse(execSync('cat package.json', {encoding: 'utf-8'}));

packageJson.scripts = packageJson.scripts || {};
packageJson.scripts.prepare = 'husky install && node setup-husky.js';

writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n');

console.log('✅ Updated package.json with prepare script');

console.log('🎉 Husky setup completed successfully!');
