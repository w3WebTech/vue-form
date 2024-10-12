import { defineComponent, ref, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
import { V as VCheckbox } from './VCheckbox-BI5TDaTk.mjs';
import { V as VLabel } from './VLabel-CtbqF6Wb.mjs';
import { V as VTextarea } from './VTextarea-DId7pJKv.mjs';
import { a as VBtn, K as VProgressLinear } from './server.mjs';
import './VAvatar-BZtC_Qdy.mjs';
import './VCheckboxBtn-JiRxhpjI.mjs';
import './VInput-X9CvPL_3.mjs';
import './index-D38G6C1I.mjs';
import './form-CtAJx0Pr.mjs';
import './VField-DIVOjxLA.mjs';
import './easing-CuhD-vKF.mjs';
import './forwardRefs-BSTjJZPU.mjs';
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
  __name: "new-page",
  __ssrInlineRender: true,
  setup(__props) {
    const toggleCheckbox1 = ref(false);
    const toggleCheckbox2 = ref(false);
    const toggleCheckbox3 = ref(false);
    const toggleCheckbox4 = ref(false);
    const toggleCheckbox5 = ref(false);
    const toggleCheckbox6 = ref(false);
    ref(true);
    const skill = ref(20);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VCol, {
        cols: "12",
        md: "6",
        class: "layout-page-content1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "px-4 py-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCheckbox, {
                    modelValue: unref(toggleCheckbox1),
                    "onUpdate:modelValue": ($event) => isRef(toggleCheckbox1) ? toggleCheckbox1.value = $event : null,
                    label: "Get influencers responces by sharing your offer."
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCheckbox, {
                    modelValue: unref(toggleCheckbox2),
                    "onUpdate:modelValue": ($event) => isRef(toggleCheckbox2) ? toggleCheckbox2.value = $event : null,
                    label: "Discover influencers through a search with filters."
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCheckbox, {
                    modelValue: unref(toggleCheckbox3),
                    "onUpdate:modelValue": ($event) => isRef(toggleCheckbox3) ? toggleCheckbox3.value = $event : null,
                    label: "Run campaigns by sending free product samples and oofering promo codes."
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCheckbox, {
                    modelValue: unref(toggleCheckbox4),
                    "onUpdate:modelValue": ($event) => isRef(toggleCheckbox4) ? toggleCheckbox4.value = $event : null,
                    label: "Connect with shopify/Magento/WooCommerce and find influencers who have ordered from you."
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCheckbox, {
                    modelValue: unref(toggleCheckbox5),
                    "onUpdate:modelValue": ($event) => isRef(toggleCheckbox5) ? toggleCheckbox5.value = $event : null,
                    label: "Explore your competitors ,their strategies ,and find inspiring advertising insights."
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCheckbox, {
                    modelValue: unref(toggleCheckbox6),
                    "onUpdate:modelValue": ($event) => isRef(toggleCheckbox6) ? toggleCheckbox6.value = $event : null,
                    label: "Verify the influencers you've already found."
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCheckbox, {
                      modelValue: unref(toggleCheckbox1),
                      "onUpdate:modelValue": ($event) => isRef(toggleCheckbox1) ? toggleCheckbox1.value = $event : null,
                      label: "Get influencers responces by sharing your offer."
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VCheckbox, {
                      modelValue: unref(toggleCheckbox2),
                      "onUpdate:modelValue": ($event) => isRef(toggleCheckbox2) ? toggleCheckbox2.value = $event : null,
                      label: "Discover influencers through a search with filters."
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VCheckbox, {
                      modelValue: unref(toggleCheckbox3),
                      "onUpdate:modelValue": ($event) => isRef(toggleCheckbox3) ? toggleCheckbox3.value = $event : null,
                      label: "Run campaigns by sending free product samples and oofering promo codes."
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VCheckbox, {
                      modelValue: unref(toggleCheckbox4),
                      "onUpdate:modelValue": ($event) => isRef(toggleCheckbox4) ? toggleCheckbox4.value = $event : null,
                      label: "Connect with shopify/Magento/WooCommerce and find influencers who have ordered from you."
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VCheckbox, {
                      modelValue: unref(toggleCheckbox5),
                      "onUpdate:modelValue": ($event) => isRef(toggleCheckbox5) ? toggleCheckbox5.value = $event : null,
                      label: "Explore your competitors ,their strategies ,and find inspiring advertising insights."
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VCheckbox, {
                      modelValue: unref(toggleCheckbox6),
                      "onUpdate:modelValue": ($event) => isRef(toggleCheckbox6) ? toggleCheckbox6.value = $event : null,
                      label: "Verify the influencers you've already found."
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "px-4 py-4" }, {
                default: withCtx(() => [
                  createVNode(VCheckbox, {
                    modelValue: unref(toggleCheckbox1),
                    "onUpdate:modelValue": ($event) => isRef(toggleCheckbox1) ? toggleCheckbox1.value = $event : null,
                    label: "Get influencers responces by sharing your offer."
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VCheckbox, {
                    modelValue: unref(toggleCheckbox2),
                    "onUpdate:modelValue": ($event) => isRef(toggleCheckbox2) ? toggleCheckbox2.value = $event : null,
                    label: "Discover influencers through a search with filters."
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VCheckbox, {
                    modelValue: unref(toggleCheckbox3),
                    "onUpdate:modelValue": ($event) => isRef(toggleCheckbox3) ? toggleCheckbox3.value = $event : null,
                    label: "Run campaigns by sending free product samples and oofering promo codes."
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VCheckbox, {
                    modelValue: unref(toggleCheckbox4),
                    "onUpdate:modelValue": ($event) => isRef(toggleCheckbox4) ? toggleCheckbox4.value = $event : null,
                    label: "Connect with shopify/Magento/WooCommerce and find influencers who have ordered from you."
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VCheckbox, {
                    modelValue: unref(toggleCheckbox5),
                    "onUpdate:modelValue": ($event) => isRef(toggleCheckbox5) ? toggleCheckbox5.value = $event : null,
                    label: "Explore your competitors ,their strategies ,and find inspiring advertising insights."
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VCheckbox, {
                    modelValue: unref(toggleCheckbox6),
                    "onUpdate:modelValue": ($event) => isRef(toggleCheckbox6) ? toggleCheckbox6.value = $event : null,
                    label: "Verify the influencers you've already found."
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VLabel, { class: "py-3 font-bold layout-page-content1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Additional comments`);
          } else {
            return [
              createTextVNode("Additional comments")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VCol, {
        cols: "12",
        md: "6",
        class: "layout-page-content1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTextarea, {
              modelValue: _ctx.textareaValue,
              "onUpdate:modelValue": ($event) => _ctx.textareaValue = $event,
              counter: "",
              placeholder: "Tell us more about what you need,want, and hope to do with influencer marketing...",
              class: "bg-white h-[135px]"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTextarea, {
                modelValue: _ctx.textareaValue,
                "onUpdate:modelValue": ($event) => _ctx.textareaValue = $event,
                counter: "",
                placeholder: "Tell us more about what you need,want, and hope to do with influencer marketing...",
                class: "bg-white h-[135px]"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VCol, {
        cols: "12",
        md: "6",
        class: "px-3 mb-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              block: "",
              type: "submit",
              to: "/new-page2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` skip `);
                } else {
                  return [
                    createTextVNode(" skip ")
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
                to: "/new-page2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" skip ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/new-page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
