import { defineComponent, ref, withCtx, createTextVNode, createVNode, unref, isRef, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { V as VLabel } from './VLabel-CtbqF6Wb.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { a as VBtn, K as VProgressLinear } from './server.mjs';
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
  __name: "new-page2",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref(false);
    ref(false);
    ref(false);
    ref(false);
    ref(false);
    ref(true);
    const skill = ref(40);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VLabel, { class: "font-bold px-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`second page `);
          } else {
            return [
              createTextVNode("second page ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VCol, {
        cols: "12",
        md: "6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              block: "",
              type: "submit",
              to: "/new-page3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` NEXT STEP `);
                } else {
                  return [
                    createTextVNode(" NEXT STEP ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                block: "",
                type: "submit",
                to: "/new-page3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" NEXT STEP ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VCol, {
        class: "fixed bottom-0 bg-white h-[100px] layout-page-content",
        cols: "12",
        md: "6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="demo-space-y px-4"${_scopeId}><div class="flex justify-end"${_scopeId}>${ssrInterpolate(Math.ceil(unref(skill)))}%</div>`);
            _push2(ssrRenderComponent(VProgressLinear, {
              modelValue: unref(skill),
              "onUpdate:modelValue": ($event) => isRef(skill) ? skill.value = $event : null,
              color: "primary",
              height: "20"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "demo-space-y px-4" }, [
                createVNode("div", { class: "flex justify-end" }, toDisplayString(Math.ceil(unref(skill))) + "%", 1),
                createVNode(VProgressLinear, {
                  modelValue: unref(skill),
                  "onUpdate:modelValue": ($event) => isRef(skill) ? skill.value = $event : null,
                  color: "primary",
                  height: "20"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/new-page2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
