import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { C as CardBasic, _ as _sfc_main$1, a as _sfc_main$2 } from './CardSolid-DO2yD51m.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './avatar-1-B_-VvdgB.mjs';
import './avatar-8-DXLqjTP4.mjs';
import './index-D38G6C1I.mjs';
import './server.mjs';
import 'vue-router';
import 'vue-devtools-stub';
import './VRow-PELeuRof.mjs';
import './VCol-DQ0BDQfX.mjs';
import './VCard-BCzimUKB.mjs';
import './VAvatar-BZtC_Qdy.mjs';
import './VSpacer-BPy1UqRS.mjs';
import './VDivider-UF-z31IW.mjs';
import './VTabs-DbCT4doA.mjs';
import './easing-CuhD-vKF.mjs';
import './VWindowItem-DMV-_Fez.mjs';
import './lazy-BteLhbse.mjs';
import './ssrBoot-BtvJZs44.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cards",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><p class="text-2xl mb-6">Basic Cards</p>`);
      _push(ssrRenderComponent(CardBasic, null, null, _parent));
      _push(`<p class="text-2xl mb-6 mt-14">Navigation Cards</p>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<p class="text-2xl mt-14 mb-6">Solid Cards</p>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
