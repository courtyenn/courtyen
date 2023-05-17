import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { rollupImportMapPlugin } from "rollup-plugin-import-map";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  worker: {
    rollupOptions: {
      output: {
        format: "system",
        entryFileNames: "[name].js"
      }
    }
  }
})
