import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [
		react(),
		// Add other plugins as needed for development
	],
	server: {
		port: 3000, // Development server port
		open: true, // Open browser automatically
	},
	define: {
		"process.env.NODE_ENV": '"development"',
		// Add other environment-specific variables for development
	},
	build: {
		outDir: "dist-dev",
	},
});
