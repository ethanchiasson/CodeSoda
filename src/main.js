// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import AltLayout from "~/layouts/AltLayout.vue";
import "~/css/styles.css";
// imported PrismJS into Main.js and gridsome.config.js
// After npm install @grisome/remark-prismjs
import "prismjs/themes/prism.css";

export default function(Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: "en" };
  head.bodyAttrs = { class: "body" };
  // Set default layout as a global component
  Vue.component("Layout", AltLayout);
}
