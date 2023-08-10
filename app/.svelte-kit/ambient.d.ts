
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const USER: string;
	export const npm_config_user_agent: string;
	export const XDG_SEAT: string;
	export const SSH_AGENT_PID: string;
	export const XDG_SESSION_TYPE: string;
	export const BUN_INSTALL: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const LESS: string;
	export const HOME: string;
	export const TERMINFO: string;
	export const OLDPWD: string;
	export const DESKTOP_SESSION: string;
	export const npm_package_json: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const LSCOLORS: string;
	export const XDG_SEAT_PATH: string;
	export const PAGER: string;
	export const npm_config_local_prefix: string;
	export const KITTY_PID: string;
	export const VISUAL: string;
	export const COLORTERM: string;
	export const NIXPKGS_ALLOW_UNFREE: string;
	export const MOZ_PLUGIN_PATH: string;
	export const LOGNAME: string;
	export const GO111MODULE: string;
	export const WINDOWID: string;
	export const _: string;
	export const PKG_CONFIG_PATH: string;
	export const XDG_SESSION_CLASS: string;
	export const KITTY_PUBLIC_KEY: string;
	export const TERM: string;
	export const XDG_SESSION_ID: string;
	export const LC_COLLATE: string;
	export const PATH: string;
	export const NODE: string;
	export const GDM_LANG: string;
	export const npm_package_name: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_RUNTIME_DIR: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const SSH_AUTH_SOCK: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const GOPATH: string;
	export const NODE_PATH: string;
	export const GDMSESSION: string;
	export const KITTY_WINDOW_ID: string;
	export const XDG_VTNR: string;
	export const EMSDK_NODE: string;
	export const JAVA_HOME: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const EMSDK: string;
	export const ANDROID_HOME: string;
	export const XDG_DATA_DIRS: string;
	export const KITTY_LISTEN_ON: string;
	export const PNPM_HOME: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		USER: string;
		npm_config_user_agent: string;
		XDG_SEAT: string;
		SSH_AGENT_PID: string;
		XDG_SESSION_TYPE: string;
		BUN_INSTALL: string;
		npm_node_execpath: string;
		SHLVL: string;
		LESS: string;
		HOME: string;
		TERMINFO: string;
		OLDPWD: string;
		DESKTOP_SESSION: string;
		npm_package_json: string;
		KITTY_INSTALLATION_DIR: string;
		LSCOLORS: string;
		XDG_SEAT_PATH: string;
		PAGER: string;
		npm_config_local_prefix: string;
		KITTY_PID: string;
		VISUAL: string;
		COLORTERM: string;
		NIXPKGS_ALLOW_UNFREE: string;
		MOZ_PLUGIN_PATH: string;
		LOGNAME: string;
		GO111MODULE: string;
		WINDOWID: string;
		_: string;
		PKG_CONFIG_PATH: string;
		XDG_SESSION_CLASS: string;
		KITTY_PUBLIC_KEY: string;
		TERM: string;
		XDG_SESSION_ID: string;
		LC_COLLATE: string;
		PATH: string;
		NODE: string;
		GDM_LANG: string;
		npm_package_name: string;
		XDG_SESSION_PATH: string;
		XDG_RUNTIME_DIR: string;
		DISPLAY: string;
		LANG: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		SSH_AUTH_SOCK: string;
		XDG_GREETER_DATA_DIR: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		GOPATH: string;
		NODE_PATH: string;
		GDMSESSION: string;
		KITTY_WINDOW_ID: string;
		XDG_VTNR: string;
		EMSDK_NODE: string;
		JAVA_HOME: string;
		PWD: string;
		npm_execpath: string;
		EMSDK: string;
		ANDROID_HOME: string;
		XDG_DATA_DIRS: string;
		KITTY_LISTEN_ON: string;
		PNPM_HOME: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
