import { useSSRContext, defineComponent, ref } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { Chart, registerables } from 'chart.js';
import { _ as _export_sfc } from './server.mjs';
import 'node:http';
import 'node:https';
import '../runtime.mjs';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-devtools-stub';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "page2",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(...registerables);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6f28379d><canvas data-v-6f28379d></canvas></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const page2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6f28379d"]]);

export { page2 as default };
