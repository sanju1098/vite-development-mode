import { defineConfig, UserConfig } from "vite";

// https://vitejs.dev/config/
// Define the main Vite config
export default ({ mode }: { mode: string }): UserConfig => {
	return defineConfig({
		...require(`./vite/vite.config.${mode}.ts`).default,
	});
};
