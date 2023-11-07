export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/generic_ed246dab.mjs').then(n => n.g);

export { page };
