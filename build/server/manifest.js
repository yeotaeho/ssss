const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.c0eb7d20.js","app":"_app/immutable/entry/app.8df78a34.js","imports":["_app/immutable/entry/start.c0eb7d20.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.279ebe7e.js","_app/immutable/entry/app.8df78a34.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.8ae7638f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-e61c69dc.js')),
			__memo(() => import('./chunks/1-a39d1ca2.js')),
			__memo(() => import('./chunks/2-cec22e7f.js')),
			__memo(() => import('./chunks/3-7cf30a67.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
