import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_7022c2c8.mjs';
import './chunks/astro_5c0511ec.mjs';
import './chunks/pages/generic_f0faa63b.mjs';
import './chunks/astro-assets-services_dff643b2.mjs';

const _page0  = () => import('./chunks/generic_41939969.mjs');
const _page1  = () => import('./chunks/index_5d54fa33.mjs');
const _page2  = () => import('./chunks/_id__761e2e3f.mjs');
const _page3  = () => import('./chunks/about_c813e034.mjs');
const _page4  = () => import('./chunks/markdown_1fc98219.mjs');
const _page5  = () => import('./chunks/404_6ffc15e6.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.4.3_typescript@5.2.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/launch/[id].astro", _page2],["src/pages/about.astro", _page3],["src/pages/blog/markdown.md", _page4],["src/pages/404.astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
