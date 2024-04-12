import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [
		react(),
		// Add other plugins as needed for production
	],
	build: {
		// Production-specific build optimizations
		minify: true,
		outDir: "dist-prod",
		// Add other production-specific build settings
	},
	define: {
		"process.env.NODE_ENV": '"prod"',
		// Add other environment-specific variables for production
	},
});
