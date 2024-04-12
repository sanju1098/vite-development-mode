import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// Define the main Vite config
export default async ({ mode }: { mode: string }): Promise<UserConfig> => {
	return defineConfig({
		plugins: [react()],
		...(await import(`./config/vite.config.${mode}.ts`)).default,
	});
};
