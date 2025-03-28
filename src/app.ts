import { app } from '$app/core';
import { parent, child } from './layouts';

export const appInstance = app({
  layout: {
    '': parent,
    '/child': child
  },
  pages: {
    '/'() {
      return {
        script: () => import('./pages/parent/Parent.svelte'),
        styles: ['~app.css']
      };
    },
    '/child'() {
      return {
        script: () => import('./pages/child/Child.svelte'),
        styles: ['~app.css']
      };
    }
  }
});
