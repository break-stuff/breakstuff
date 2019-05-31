import DefaultLayout from "~/layouts/Default.vue";

import BootstrapVue from "bootstrap-vue";
import "./assets/scss/styles.scss";

import checkIfMobile from "./mixins/checkIfMobile";

export default function(Vue, { router, head, isClient }) {
    Vue.use(BootstrapVue);
    Vue.component("Layout", DefaultLayout);
    Vue.mixin(checkIfMobile);
    head.link.push({
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.8.2/css/all.css",
        integrity: "sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",
        crossorigin: "anonymous"
    });
    head.script.push({
        src:
            "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"
    });
}
