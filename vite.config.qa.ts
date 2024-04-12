import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [
		react(),
		// Add other plugins as needed for QA
	],
	server: {
		port: 8080, // QA server port
		proxy: {
			// Proxy configuration for API requests
			"/api": {
				target: "https://qa.api.example.com",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
	define: {
		"process.env.NODE_ENV": '"qa"',
		"process.env.API_URL": '"https://qa.api.example.com"',
		// Add other environment-specific variables for QA
	},
	build: {
		outDir: "dist-qa",
	},
});
