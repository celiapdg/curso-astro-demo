/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_ca757e30.mjs';
import { $ as $$Layout } from './404_a7037363.mjs';

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About the project" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1>About the project</h1><p>The SpaceX launches project is a demo for the Astro course</p>` })}`;
}, "C:/Projects/personal/curso-astro-demo/src/pages/about.astro", void 0);

const $$file = "C:/Projects/personal/curso-astro-demo/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
