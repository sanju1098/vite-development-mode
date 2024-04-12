import { defineConfig, UserConfig } from "vite";

// Define the main Vite config - "https://vitejs.dev/config/"
export default async ({ mode }: { mode: string }): Promise<UserConfig> => {
	const configModule = await import(`./vite/vite.config.${mode}.ts`);
	return defineConfig(configModule.default);
};
