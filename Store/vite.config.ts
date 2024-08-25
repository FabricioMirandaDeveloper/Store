import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Escucha en todas las interfaces de red
    port: 3000,      // El puerto en el que el servidor estará escuchando
    strictPort: true // Opcional: Si true, el servidor fallará si el puerto está en uso
  },
})
