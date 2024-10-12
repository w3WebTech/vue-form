import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
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

const _sfc_main = {
  data() {
    return {
      userAgent: "",
      platform: ""
      // Add more properties for other device details if needed
    };
  },
  mounted() {
    this.fetchDeviceDetails();
  },
  methods: {
    fetchDeviceDetails() {
      this.userAgent = (void 0).userAgent;
      this.platform = (void 0).platform;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>Device Details</h1><p>User Agent: ${ssrInterpolate($data.userAgent)}</p><p>Platform: ${ssrInterpolate($data.platform)}</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/devicedata.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const devicedata = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { devicedata as default };
