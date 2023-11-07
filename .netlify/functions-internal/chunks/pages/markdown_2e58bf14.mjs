/* empty css                           */import { f as createComponent, r as renderTemplate, i as renderComponent, u as unescapeHTML } from '../astro_ca757e30.mjs';
import { $ as $$Layout } from './404_a7037363.mjs';

const html = "<h1 id=\"esto-es-un-ejemplo-de-artículo\">Esto es un ejemplo de artículo</h1>\n<p>lorem ipsum dolor sit amet, consectetur adipiscing elit. sed non risus.</p>\n<h2 id=\"subtitulo\">Subtitulo</h2>\n<p>lorem ipsum dolor sit amet, consectetur adipiscing elit. sed non risus.</p>\n<h2 id=\"subtítulo-2\">Subtítulo 2</h2>\n<p>Para hacer blogs con Astro, es interesante revisar sus <a href=\"https://docs.astro.build/es/guides/content-collections/\">Content Collections</a></p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" lang=\"javascript\"><code><span class=\"line\"><span style=\"color:#F97583\">function</span><span style=\"color:#E1E4E8\"> () {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  console. </span><span style=\"color:#B392F0\">log</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'hola mundo'</span><span style=\"color:#E1E4E8\">)</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span></code></pre>";

				const frontmatter = {"title":"Contenido de la página","layout":"../../layouts/Layout.astro"};
				const file = "C:/Projects/personal/curso-astro-demo/src/pages/blog/markdown.md";
				const url = "/blog/markdown";
				function rawContent() {
					return "\r\n# Esto es un ejemplo de artículo\r\nlorem ipsum dolor sit amet, consectetur adipiscing elit. sed non risus.\r\n## Subtitulo\r\nlorem ipsum dolor sit amet, consectetur adipiscing elit. sed non risus.\r\n## Subtítulo 2\r\nPara hacer blogs con Astro, es interesante revisar sus [Content Collections](https://docs.astro.build/es/guides/content-collections/)\r\n\r\n```javascript\r\nfunction () {\r\n  console. log('hola mundo')\r\n}\r\n```";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"esto-es-un-ejemplo-de-artículo","text":"Esto es un ejemplo de artículo"},{"depth":2,"slug":"subtitulo","text":"Subtitulo"},{"depth":2,"slug":"subtítulo-2","text":"Subtítulo 2"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Layout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
