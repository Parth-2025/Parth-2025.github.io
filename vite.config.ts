import { defineConfig } from 'vite';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]?.toLowerCase();
const base = repository && repository !== 'parth-2025.github.io'
  ? `/${repository}/`
  : '/';

export default defineConfig({ base });
