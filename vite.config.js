import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: For GitHub Pages project sites, set base to '/<repo-name>/'.
// If you will use a custom domain or a user/organization site, leave it as ''.
export default defineConfig({
  plugins: [react()],
  base: '', // change to '/your-repo-name/' when deploying to a project site
})
