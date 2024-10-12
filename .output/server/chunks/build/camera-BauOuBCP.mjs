import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "camera",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const imageData = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "app",
        class: "container mx-auto p-4"
      }, _attrs))}>`);
      if (imageData.value) {
        _push(`<div><img${ssrRenderAttr("src", imageData.value)} alt=""></div>`);
      } else {
        _push(`<div class="row"><div class="col-sm w-full"><video autoplay class="w-full" style="${ssrRenderStyle({ "max-width": "100%" })}"></video><button class="btn btn-primary w-full bg-blue-500 text-white py-2 px-4 rounded mb-2"${ssrIncludeBooleanAttr(_ctx.active) ? " disabled" : ""} type="button"> Capture Image </button></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/camera.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
