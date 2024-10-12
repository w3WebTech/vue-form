import { defineComponent, reactive, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import axios from 'axios';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "page1",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      id: null,
      active: false,
      server: "https://app.yetcargo.melisa.mx:8044/",
      endpoint: "/locations",
      watchOperationId: null,
      frequency: 2e3,
      autoUpdate: true,
      color: "blue",
      visibilityState: true,
      error: "",
      errorSendLocation: "",
      locations: []
    });
    const location = reactive({
      latitude: 0,
      longitude: 0,
      accuracy: 0,
      speed: 0,
      timestamp: 0
    });
    axios.create({
      baseURL: state.server,
      timeout: 1e4
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "app",
        class: "container mx-auto p-4"
      }, _attrs))}><div class="py-2 text-bold">Latitude</div><div class="py-2 px-4">${ssrInterpolate(location && location.latitude)}</div><div class="py-2 text-bold">Longitude</div><div class="py-2 px-4">${ssrInterpolate(location && location.longitude)}</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
