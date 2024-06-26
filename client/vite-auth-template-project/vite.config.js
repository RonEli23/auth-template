import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

export default defineConfig({
  plugins: [react()],
  preview: {
    host:true,
    port: PORT
  }
});
