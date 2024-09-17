import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Permite que Vite escuche en todas las interfaces de red
    port: 5173,        // Asegúrate de que este puerto coincide con el que expones en Docker
  }
})
