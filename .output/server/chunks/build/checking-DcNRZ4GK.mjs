import { defineComponent, useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as VBtn, V as VIcon } from './server.mjs';
import { _ as _imports_0, a as _imports_1 } from './download-G_sFDMBX.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VTextField } from './VTextField-BsyoThCd.mjs';
import { V as VCard, a as VCardText } from './VCard-BCzimUKB.mjs';
import { V as VForm } from './VForm-Avd0ACPh.mjs';
import { V as VWindow, a as VWindowItem } from './VWindowItem-DMV-_Fez.mjs';
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
import './VField-DIVOjxLA.mjs';
import './index-D38G6C1I.mjs';
import './VLabel-CtbqF6Wb.mjs';
import './VInput-X9CvPL_3.mjs';
import './form-CtAJx0Pr.mjs';
import './easing-CuhD-vKF.mjs';
import './forwardRefs-BSTjJZPU.mjs';
import './VAvatar-BZtC_Qdy.mjs';
import './lazy-BteLhbse.mjs';
import './ssrBoot-BtvJZs44.mjs';

const _sfc_main$2 = {
  data() {
    return {};
  },
  methods: {
    incrementStep(value) {
      console.log(value, "value");
      this.$emit("step-changed", value);
    }
  },
  mounted() {
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ml-20 my-5" }, _attrs))}><ol class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400"><li class="mb-10 ms-6">`);
  _push(ssrRenderComponent(_component_router_link, { class: "absolute flex items-center justify-center w-8 h-8 bg-[#7a1ff2] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-3.5 h-3.5 text-green-500 dark:text-green-400",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 16 12"
          }, [
            createVNode("path", {
              stroke: "currentColor",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M1 5.917 5.724 10.5 15 1.5"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 class="font-medium leading-tight pt-2">Identity Verification</h3></li><li class="mb-10 ms-6">`);
  _push(ssrRenderComponent(_component_router_link, { class: "absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16"${_scopeId}><path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-3.5 h-3.5 text-gray-500 dark:text-gray-400",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 20 16"
          }, [
            createVNode("path", { d: "M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 class="font-medium leading-tight">Account Info</h3><p class="text-sm">Step details here</p></li><li class="mb-10 ms-6">`);
  _push(ssrRenderComponent(_component_router_link, { class: "absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20"${_scopeId}><path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-3.5 h-3.5 text-gray-500 dark:text-gray-400",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 18 20"
          }, [
            createVNode("path", { d: "M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 class="font-medium leading-tight">Review</h3><p class="text-sm">Step details here</p></li><li class="ms-6">`);
  _push(ssrRenderComponent(_component_router_link, { class: "absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20"${_scopeId}><path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-3.5 h-3.5 text-gray-500 dark:text-gray-400",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 18 20"
          }, [
            createVNode("path", { d: "M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 class="font-medium leading-tight">Confirmation</h3><p class="text-sm">Step details here</p></li></ol></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppStepper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      emailAddress: "",
      isValidEmail: false,
      isError: false,
      isMobileNumberValid: false,
      mobileNumber: "",
      emailErrors: []
    };
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.isValidEmail = emailRegex.test(this.emailAddress);
      if (this.isValidEmail == false) {
        this.isError = true;
      } else {
        this.$router.push("/verification");
      }
    },
    validateMobileNumber() {
      const mobileNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      console.log(mobileNumberRegex.test(this.mobileNumber), "valid");
      this.isMobileNumberValid = mobileNumberRegex.test(this.mobileNumber);
      if (this.isMobileNumberValid == true) {
        this.$router.push("/otp");
      } else {
        this.emailErrors.push("Enter valid Number");
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IconBtn = resolveComponent("IconBtn");
  _push(ssrRenderComponent(VRow, mergeProps({ class: "d-flex justify-center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          md: "6"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VRow, { class: "py-4" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, {
                      cols: "3",
                      md: "4",
                      class: "px-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="h-10 w-10"${_scopeId4}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "",
                              class: "h-10 w-10"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "1",
                      md: "2",
                      class: "px-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_IconBtn, { class: "" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VIcon, { icon: "ri-arrow-right-line" }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VIcon, { icon: "ri-arrow-right-line" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_IconBtn, { class: "" }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-arrow-right-line" })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "4",
                      md: "4",
                      class: "px-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<img${ssrRenderAttr("src", _imports_1)} alt="" class="h-10 w-10"${_scopeId4}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: _imports_1,
                              alt: "",
                              class: "h-10 w-10"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, {
                        cols: "3",
                        md: "4",
                        class: "px-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "",
                            class: "h-10 w-10"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "1",
                        md: "2",
                        class: "px-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_IconBtn, { class: "" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-arrow-right-line" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "4",
                        md: "4",
                        class: "px-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_1,
                            alt: "",
                            class: "h-10 w-10"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, { class: "font-bold text-lg text-black px-4" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Use Your PhonePe Account to <br${_scopeId3}> proceed with Share Market`);
                  } else {
                    return [
                      createTextVNode("Use Your PhonePe Account to "),
                      createVNode("br"),
                      createTextVNode(" proceed with Share Market")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "12",
                      class: "text-sm"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<label for="mobile"${_scopeId4}>Enter Mobile Number</label>`);
                        } else {
                          return [
                            createVNode("label", { for: "mobile" }, "Enter Mobile Number")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "12",
                      class: "pb-0"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            id: "mobile",
                            modelValue: $data.mobileNumber,
                            "onUpdate:modelValue": ($event) => $data.mobileNumber = $event,
                            type: "number",
                            placeholder: "+91 1234567890",
                            "error-messages": $data.emailErrors,
                            "persistent-placeholder": ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              id: "mobile",
                              modelValue: $data.mobileNumber,
                              "onUpdate:modelValue": ($event) => $data.mobileNumber = $event,
                              type: "number",
                              placeholder: "+91 1234567890",
                              "error-messages": $data.emailErrors,
                              "persistent-placeholder": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, {
                        cols: "12",
                        md: "12",
                        class: "text-sm"
                      }, {
                        default: withCtx(() => [
                          createVNode("label", { for: "mobile" }, "Enter Mobile Number")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "12",
                        class: "pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            id: "mobile",
                            modelValue: $data.mobileNumber,
                            "onUpdate:modelValue": ($event) => $data.mobileNumber = $event,
                            type: "number",
                            placeholder: "+91 1234567890",
                            "error-messages": $data.emailErrors,
                            "persistent-placeholder": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                class: "px-5"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est, dolorum inventore voluptatem animi, sed itaque quibusdam enim assumenda tenetur soluta.`);
                  } else {
                    return [
                      createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est, dolorum inventore voluptatem animi, sed itaque quibusdam enim assumenda tenetur soluta.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                class: "px-4"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VBtn, {
                      block: "",
                      color: "primary",
                      type: "reset",
                      onClick: $options.validateMobileNumber
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Proceed `);
                        } else {
                          return [
                            createTextVNode(" Proceed ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VBtn, {
                        block: "",
                        color: "primary",
                        type: "reset",
                        onClick: $options.validateMobileNumber
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Proceed ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VRow, { class: "py-4" }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "3",
                      md: "4",
                      class: "px-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          class: "h-10 w-10"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "1",
                      md: "2",
                      class: "px-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_IconBtn, { class: "" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-arrow-right-line" })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "4",
                      md: "4",
                      class: "px-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_1,
                          alt: "",
                          class: "h-10 w-10"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, { class: "font-bold text-lg text-black px-4" }, {
                  default: withCtx(() => [
                    createTextVNode("Use Your PhonePe Account to "),
                    createVNode("br"),
                    createTextVNode(" proceed with Share Market")
                  ]),
                  _: 1
                }),
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      md: "12",
                      class: "text-sm"
                    }, {
                      default: withCtx(() => [
                        createVNode("label", { for: "mobile" }, "Enter Mobile Number")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "12",
                      class: "pb-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          id: "mobile",
                          modelValue: $data.mobileNumber,
                          "onUpdate:modelValue": ($event) => $data.mobileNumber = $event,
                          type: "number",
                          placeholder: "+91 1234567890",
                          "error-messages": $data.emailErrors,
                          "persistent-placeholder": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  class: "px-5"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est, dolorum inventore voluptatem animi, sed itaque quibusdam enim assumenda tenetur soluta.")
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  class: "px-4"
                }, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      block: "",
                      color: "primary",
                      type: "reset",
                      onClick: $options.validateMobileNumber
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Proceed ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCol, {
            cols: "12",
            md: "6"
          }, {
            default: withCtx(() => [
              createVNode(VRow, { class: "py-4" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "3",
                    md: "4",
                    class: "px-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "",
                        class: "h-10 w-10"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "1",
                    md: "2",
                    class: "px-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_IconBtn, { class: "" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "ri-arrow-right-line" })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "4",
                    md: "4",
                    class: "px-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_1,
                        alt: "",
                        class: "h-10 w-10"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { class: "font-bold text-lg text-black px-4" }, {
                default: withCtx(() => [
                  createTextVNode("Use Your PhonePe Account to "),
                  createVNode("br"),
                  createTextVNode(" proceed with Share Market")
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "12",
                    class: "text-sm"
                  }, {
                    default: withCtx(() => [
                      createVNode("label", { for: "mobile" }, "Enter Mobile Number")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "12",
                    class: "pb-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        id: "mobile",
                        modelValue: $data.mobileNumber,
                        "onUpdate:modelValue": ($event) => $data.mobileNumber = $event,
                        type: "number",
                        placeholder: "+91 1234567890",
                        "error-messages": $data.emailErrors,
                        "persistent-placeholder": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                class: "px-5"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est, dolorum inventore voluptatem animi, sed itaque quibusdam enim assumenda tenetur soluta.")
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                class: "px-4"
              }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    block: "",
                    color: "primary",
                    type: "reset",
                    onClick: $options.validateMobileNumber
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Proceed ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FirstStep.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  data() {
    return {
      currentStep: 0,
      numberedSteps: ["Step 1", "Step 2", "Step 3"]
      // Replace with your step names
    };
  },
  methods: {
    handleStepChanged(newStepValue) {
      console.log(newStepValue, "newStepValue");
      this.currentStep = newStepValue;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppStepper = __nuxt_component_0;
  const _component_FirstStep = __nuxt_component_1;
  const _component_selfie = resolveComponent("selfie");
  const _component_pandetails = resolveComponent("pandetails");
  _push(ssrRenderComponent(VCard, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "4",
                class: _ctx.$vuetify.display.smAndDown ? "border-b" : "border-e"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCardText, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_AppStepper, {
                            onStepChanged: _ctx.handleStepChanged,
                            "current-step": _ctx.currentStep,
                            "onUpdate:currentStep": ($event) => _ctx.currentStep = $event,
                            direction: "vertical",
                            items: _ctx.numberedSteps
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_AppStepper, {
                              onStepChanged: _ctx.handleStepChanged,
                              "current-step": _ctx.currentStep,
                              "onUpdate:currentStep": ($event) => _ctx.currentStep = $event,
                              direction: "vertical",
                              items: _ctx.numberedSteps
                            }, null, 8, ["onStepChanged", "current-step", "onUpdate:currentStep", "items"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_AppStepper, {
                            onStepChanged: _ctx.handleStepChanged,
                            "current-step": _ctx.currentStep,
                            "onUpdate:currentStep": ($event) => _ctx.currentStep = $event,
                            direction: "vertical",
                            items: _ctx.numberedSteps
                          }, null, 8, ["onStepChanged", "current-step", "onUpdate:currentStep", "items"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCardText, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VForm, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                if (_ctx.currentStep == 0) {
                                  _push6(ssrRenderComponent(VWindow, { class: "disable-tab-transition" }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(VWindowItem, null, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(ssrRenderComponent(_component_FirstStep, null, null, _parent8, _scopeId7));
                                            } else {
                                              return [
                                                createVNode(_component_FirstStep)
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(VWindowItem, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_FirstStep)
                                            ]),
                                            _: 1
                                          })
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                if (_ctx.currentStep == 1) {
                                  _push6(ssrRenderComponent(VWindow, { class: "disable-tab-transition" }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(VWindowItem, null, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(ssrRenderComponent(_component_selfie, null, null, _parent8, _scopeId7));
                                            } else {
                                              return [
                                                createVNode(_component_selfie)
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(VWindowItem, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_selfie)
                                            ]),
                                            _: 1
                                          })
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                if (_ctx.currentStep == 2) {
                                  _push6(ssrRenderComponent(VWindow, { class: "disable-tab-transition" }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(VWindowItem, null, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(ssrRenderComponent(_component_pandetails, null, null, _parent8, _scopeId7));
                                            } else {
                                              return [
                                                createVNode(_component_pandetails)
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(VWindowItem, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_pandetails)
                                            ]),
                                            _: 1
                                          })
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                if (_ctx.currentStep == 3) {
                                  _push6(ssrRenderComponent(VWindow, { class: "disable-tab-transition" }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(VWindowItem, null, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`fdss`);
                                            } else {
                                              return [
                                                createTextVNode("fdss")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(VWindowItem, null, {
                                            default: withCtx(() => [
                                              createTextVNode("fdss")
                                            ]),
                                            _: 1
                                          })
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                                _push6(`<div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"${_scopeId5}>`);
                                _push6(ssrRenderComponent(VBtn, {
                                  color: "secondary",
                                  variant: "outlined",
                                  disabled: _ctx.currentStep === 0,
                                  onClick: ($event) => _ctx.currentStep--
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VIcon, {
                                        icon: "ri-arrow-left-line",
                                        start: "",
                                        class: "flip-in-rtl"
                                      }, null, _parent7, _scopeId6));
                                      _push7(` Previous `);
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: "ri-arrow-left-line",
                                          start: "",
                                          class: "flip-in-rtl"
                                        }),
                                        createTextVNode(" Previous ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                if (_ctx.numberedSteps.length - 1 === _ctx.currentStep) {
                                  _push6(ssrRenderComponent(VBtn, {
                                    color: "success",
                                    "append-icon": "ri-check-line"
                                  }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(` Submit `);
                                      } else {
                                        return [
                                          createTextVNode(" Submit ")
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent6, _scopeId5));
                                } else {
                                  _push6(ssrRenderComponent(VBtn, {
                                    onClick: ($event) => _ctx.currentStep++
                                  }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(` Next `);
                                        _push7(ssrRenderComponent(VIcon, {
                                          icon: "ri-arrow-right-line",
                                          end: "",
                                          class: "flip-in-rtl"
                                        }, null, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createTextVNode(" Next "),
                                          createVNode(VIcon, {
                                            icon: "ri-arrow-right-line",
                                            end: "",
                                            class: "flip-in-rtl"
                                          })
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent6, _scopeId5));
                                }
                                _push6(`</div>`);
                              } else {
                                return [
                                  _ctx.currentStep == 0 ? (openBlock(), createBlock(VWindow, {
                                    key: 0,
                                    class: "disable-tab-transition"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_FirstStep)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  _ctx.currentStep == 1 ? (openBlock(), createBlock(VWindow, {
                                    key: 1,
                                    class: "disable-tab-transition"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_selfie)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  _ctx.currentStep == 2 ? (openBlock(), createBlock(VWindow, {
                                    key: 2,
                                    class: "disable-tab-transition"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_pandetails)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  _ctx.currentStep == 3 ? (openBlock(), createBlock(VWindow, {
                                    key: 3,
                                    class: "disable-tab-transition"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("fdss")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                    createVNode(VBtn, {
                                      color: "secondary",
                                      variant: "outlined",
                                      disabled: _ctx.currentStep === 0,
                                      onClick: ($event) => _ctx.currentStep--
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-arrow-left-line",
                                          start: "",
                                          class: "flip-in-rtl"
                                        }),
                                        createTextVNode(" Previous ")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled", "onClick"]),
                                    _ctx.numberedSteps.length - 1 === _ctx.currentStep ? (openBlock(), createBlock(VBtn, {
                                      key: 0,
                                      color: "success",
                                      "append-icon": "ri-check-line"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Submit ")
                                      ]),
                                      _: 1
                                    })) : (openBlock(), createBlock(VBtn, {
                                      key: 1,
                                      onClick: ($event) => _ctx.currentStep++
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Next "),
                                        createVNode(VIcon, {
                                          icon: "ri-arrow-right-line",
                                          end: "",
                                          class: "flip-in-rtl"
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]))
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VForm, null, {
                              default: withCtx(() => [
                                _ctx.currentStep == 0 ? (openBlock(), createBlock(VWindow, {
                                  key: 0,
                                  class: "disable-tab-transition"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_FirstStep)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                _ctx.currentStep == 1 ? (openBlock(), createBlock(VWindow, {
                                  key: 1,
                                  class: "disable-tab-transition"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_selfie)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                _ctx.currentStep == 2 ? (openBlock(), createBlock(VWindow, {
                                  key: 2,
                                  class: "disable-tab-transition"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_pandetails)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                _ctx.currentStep == 3 ? (openBlock(), createBlock(VWindow, {
                                  key: 3,
                                  class: "disable-tab-transition"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createTextVNode("fdss")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                  createVNode(VBtn, {
                                    color: "secondary",
                                    variant: "outlined",
                                    disabled: _ctx.currentStep === 0,
                                    onClick: ($event) => _ctx.currentStep--
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-arrow-left-line",
                                        start: "",
                                        class: "flip-in-rtl"
                                      }),
                                      createTextVNode(" Previous ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled", "onClick"]),
                                  _ctx.numberedSteps.length - 1 === _ctx.currentStep ? (openBlock(), createBlock(VBtn, {
                                    key: 0,
                                    color: "success",
                                    "append-icon": "ri-check-line"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Submit ")
                                    ]),
                                    _: 1
                                  })) : (openBlock(), createBlock(VBtn, {
                                    key: 1,
                                    onClick: ($event) => _ctx.currentStep++
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Next "),
                                      createVNode(VIcon, {
                                        icon: "ri-arrow-right-line",
                                        end: "",
                                        class: "flip-in-rtl"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]))
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VForm, null, {
                            default: withCtx(() => [
                              _ctx.currentStep == 0 ? (openBlock(), createBlock(VWindow, {
                                key: 0,
                                class: "disable-tab-transition"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_FirstStep)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              _ctx.currentStep == 1 ? (openBlock(), createBlock(VWindow, {
                                key: 1,
                                class: "disable-tab-transition"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_selfie)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              _ctx.currentStep == 2 ? (openBlock(), createBlock(VWindow, {
                                key: 2,
                                class: "disable-tab-transition"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_pandetails)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              _ctx.currentStep == 3 ? (openBlock(), createBlock(VWindow, {
                                key: 3,
                                class: "disable-tab-transition"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("fdss")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                createVNode(VBtn, {
                                  color: "secondary",
                                  variant: "outlined",
                                  disabled: _ctx.currentStep === 0,
                                  onClick: ($event) => _ctx.currentStep--
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-arrow-left-line",
                                      start: "",
                                      class: "flip-in-rtl"
                                    }),
                                    createTextVNode(" Previous ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "onClick"]),
                                _ctx.numberedSteps.length - 1 === _ctx.currentStep ? (openBlock(), createBlock(VBtn, {
                                  key: 0,
                                  color: "success",
                                  "append-icon": "ri-check-line"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Submit ")
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(VBtn, {
                                  key: 1,
                                  onClick: ($event) => _ctx.currentStep++
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Next "),
                                    createVNode(VIcon, {
                                      icon: "ri-arrow-right-line",
                                      end: "",
                                      class: "flip-in-rtl"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]))
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  cols: "12",
                  md: "4",
                  class: _ctx.$vuetify.display.smAndDown ? "border-b" : "border-e"
                }, {
                  default: withCtx(() => [
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(_component_AppStepper, {
                          onStepChanged: _ctx.handleStepChanged,
                          "current-step": _ctx.currentStep,
                          "onUpdate:currentStep": ($event) => _ctx.currentStep = $event,
                          direction: "vertical",
                          items: _ctx.numberedSteps
                        }, null, 8, ["onStepChanged", "current-step", "onUpdate:currentStep", "items"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["class"]),
                createVNode(VCol, {
                  cols: "12",
                  md: "8"
                }, {
                  default: withCtx(() => [
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VForm, null, {
                          default: withCtx(() => [
                            _ctx.currentStep == 0 ? (openBlock(), createBlock(VWindow, {
                              key: 0,
                              class: "disable-tab-transition"
                            }, {
                              default: withCtx(() => [
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_FirstStep)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            _ctx.currentStep == 1 ? (openBlock(), createBlock(VWindow, {
                              key: 1,
                              class: "disable-tab-transition"
                            }, {
                              default: withCtx(() => [
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_selfie)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            _ctx.currentStep == 2 ? (openBlock(), createBlock(VWindow, {
                              key: 2,
                              class: "disable-tab-transition"
                            }, {
                              default: withCtx(() => [
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_pandetails)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            _ctx.currentStep == 3 ? (openBlock(), createBlock(VWindow, {
                              key: 3,
                              class: "disable-tab-transition"
                            }, {
                              default: withCtx(() => [
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("fdss")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                              createVNode(VBtn, {
                                color: "secondary",
                                variant: "outlined",
                                disabled: _ctx.currentStep === 0,
                                onClick: ($event) => _ctx.currentStep--
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "ri-arrow-left-line",
                                    start: "",
                                    class: "flip-in-rtl"
                                  }),
                                  createTextVNode(" Previous ")
                                ]),
                                _: 1
                              }, 8, ["disabled", "onClick"]),
                              _ctx.numberedSteps.length - 1 === _ctx.currentStep ? (openBlock(), createBlock(VBtn, {
                                key: 0,
                                color: "success",
                                "append-icon": "ri-check-line"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Submit ")
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(VBtn, {
                                key: 1,
                                onClick: ($event) => _ctx.currentStep++
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Next "),
                                  createVNode(VIcon, {
                                    icon: "ri-arrow-right-line",
                                    end: "",
                                    class: "flip-in-rtl"
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]))
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VRow, null, {
            default: withCtx(() => [
              createVNode(VCol, {
                cols: "12",
                md: "4",
                class: _ctx.$vuetify.display.smAndDown ? "border-b" : "border-e"
              }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(_component_AppStepper, {
                        onStepChanged: _ctx.handleStepChanged,
                        "current-step": _ctx.currentStep,
                        "onUpdate:currentStep": ($event) => _ctx.currentStep = $event,
                        direction: "vertical",
                        items: _ctx.numberedSteps
                      }, null, 8, ["onStepChanged", "current-step", "onUpdate:currentStep", "items"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VForm, null, {
                        default: withCtx(() => [
                          _ctx.currentStep == 0 ? (openBlock(), createBlock(VWindow, {
                            key: 0,
                            class: "disable-tab-transition"
                          }, {
                            default: withCtx(() => [
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_FirstStep)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          _ctx.currentStep == 1 ? (openBlock(), createBlock(VWindow, {
                            key: 1,
                            class: "disable-tab-transition"
                          }, {
                            default: withCtx(() => [
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_selfie)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          _ctx.currentStep == 2 ? (openBlock(), createBlock(VWindow, {
                            key: 2,
                            class: "disable-tab-transition"
                          }, {
                            default: withCtx(() => [
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_pandetails)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          _ctx.currentStep == 3 ? (openBlock(), createBlock(VWindow, {
                            key: 3,
                            class: "disable-tab-transition"
                          }, {
                            default: withCtx(() => [
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createTextVNode("fdss")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                            createVNode(VBtn, {
                              color: "secondary",
                              variant: "outlined",
                              disabled: _ctx.currentStep === 0,
                              onClick: ($event) => _ctx.currentStep--
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-arrow-left-line",
                                  start: "",
                                  class: "flip-in-rtl"
                                }),
                                createTextVNode(" Previous ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "onClick"]),
                            _ctx.numberedSteps.length - 1 === _ctx.currentStep ? (openBlock(), createBlock(VBtn, {
                              key: 0,
                              color: "success",
                              "append-icon": "ri-check-line"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Submit ")
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(VBtn, {
                              key: 1,
                              onClick: ($event) => _ctx.currentStep++
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Next "),
                                createVNode(VIcon, {
                                  icon: "ri-arrow-right-line",
                                  end: "",
                                  class: "flip-in-rtl"
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checking = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { checking as default };
