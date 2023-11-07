/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, g as addAttribute, m as maybeRenderHead, h as renderSlot, i as renderComponent, j as renderHead } from '../astro_ca757e30.mjs';

const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc"
        },
        limit: 12
      }
    })
  });
  const { docs: launches } = await res.json();
  return launches;
};
const getLaunchById = async ({ id }) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = await res.json();
  console.log(launch);
  return launch;
};

const $$Astro$4 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Projects/personal/curso-astro-demo/node_modules/.pnpm/astro@3.4.3_typescript@5.2.2/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$3 = createAstro();
const $$HeaderButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeaderButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="flex-row justify-center text-white cursor-pointer hover:bg-slate-700
    focus:ring-4 focus:outline-none focus: ring-[#1da1f2]/50 font-medium
    rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-
    [#1da1f2]/55 mr-2 mb-2 hover: shadow-lg transition-all duration-200
    ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-70 hover:opacity-100">${renderSlot($$result, $$slots["before"])}${renderSlot($$result, $$slots["default"])}${renderSlot($$result, $$slots["after"])}</a>`;
}, "C:/Projects/personal/curso-astro-demo/src/components/HeaderButton.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="py-8 px-4 mx-auto max-w-xl lg:py-16 lg:px-6"><div class="mx-auto text-center mb-8 lg:mb-16"><h2 class="mb-4 text-5xl tracking-tight font-extrabold text-white">
SpaceX launches 🚀
</h2><p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
All the information about SpaceX launches
</p></div><nav class="flex flex-col items-center justify-between w.full text-center md:flex-row">${renderComponent($$result, "HeaderButton", $$HeaderButton, { "href": "/" }, { "before": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rocket" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>`, "default": ($$result2) => renderTemplate`
Últimos lanzamientos
` })}${renderComponent($$result, "HeaderButton", $$HeaderButton, { "href": "/about" }, { "before": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 9h.01"></path><path d="M11 12h1v4h1"></path></svg>`, "default": ($$result2) => renderTemplate`
Sobre el proyecto
` })}${renderComponent($$result, "HeaderButton", $$HeaderButton, { "href": "/oldest" }, { "before": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20.984 12.535a9 9 0 1 0 -8.468 8.45"></path><path d="M16 19h6"></path><path d="M19 16v6"></path><path d="M12 7v5l3 3"></path></svg>`, "default": ($$result2) => renderTemplate`
Los más viejos
` })}</nav></header>`;
}, "C:/Projects/personal/curso-astro-demo/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head><body class="bg-gray-900 min-h-screen pb-32">${renderComponent($$result, "Header", $$Header, {})}<main class="max-w-5xl px-4 m-auto">${renderSlot($$result, $$slots["default"])}</main></body></html>`;
}, "C:/Projects/personal/curso-astro-demo/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const getStaticPaths = async () => {
  const launches = await getLatestLaunches();
  return launches.map(({ id }) => ({
    params: { id }
  }));
};
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let launch;
  if (id) {
    launch = await getLaunchById({ id });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Lanzamiento ${id}` }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<article class="flex gap-y-4 flex-col"><img class="w-52 h-auto"${addAttribute(launch?.links?.patch.small, "src")}${addAttribute(launch?.name, "alt")}><h2 class="text-4xl text-white font-bold">
Launch #${launch?.flight_number}</h2><p class="text-lg">${launch?.details}</p></article>` })}`;
}, "C:/Projects/personal/curso-astro-demo/src/pages/launch/[id].astro", void 0);

const $$file = "C:/Projects/personal/curso-astro-demo/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _, getLatestLaunches as g };
