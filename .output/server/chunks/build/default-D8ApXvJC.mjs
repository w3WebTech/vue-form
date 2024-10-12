import { defineComponent, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import DefaultLayoutWithVerticalNav from './DefaultLayoutWithVerticalNav-Cw409pq7.mjs';
import './nuxt-link-jmK5-THK.mjs';
import './server.mjs';
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
import './NavItems-di9aFXKM.mjs';
import './logo-Cki8HXon.mjs';
import 'vue3-perfect-scrollbar';
import './NavbarThemeSwitcher-Czo7NgIu.mjs';
import './VTooltip-cfMFlRLC.mjs';
import './VOverlay-CsNFlnFM.mjs';
import './easing-CuhD-vKF.mjs';
import './lazy-BteLhbse.mjs';
import './forwardRefs-BSTjJZPU.mjs';
import './Footer-DiXG3NGC.mjs';
import './UserProfile-BpHCVrgx.mjs';
import './avatar-1-B_-VvdgB.mjs';
import './VAvatar-BZtC_Qdy.mjs';
import './VMenu-D2ZQl_It.mjs';
import './index-D38G6C1I.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VDivider-UF-z31IW.mjs';
import './dialog-transition-CRChXgJR.mjs';
import './VListItemAction-DSEhKCbx.mjs';
import './VSpacer-BPy1UqRS.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(DefaultLayoutWithVerticalNav, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
