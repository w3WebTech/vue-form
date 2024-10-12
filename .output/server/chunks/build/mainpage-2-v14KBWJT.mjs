import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as VBtn } from './server.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
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
import 'vue-router';
import 'vue-devtools-stub';

const _sfc_main = {
  data() {
    return {
      emailAddress: "",
      isValidEmail: false,
      isError: false,
      isMobileNumberValid: false,
      mobileNumber: "",
      solidCardData: [
        {
          cardBg: "#8C57FF",
          title: "Facebook Card",
          icon: "ri-facebook-circle-line",
          text: "You've read about the importance of being courageous, rebellious and imaginative. These are all vital ingredients.",
          avatarName: "Eugene Clarke",
          likes: "3.2k",
          share: "49"
        }
      ]
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
      }
    }
  }
};
const _imports_0 = "" + buildAssetsURL("plant.CXMzh37_.jpeg");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent(VRow, mergeProps({ class: "px-3" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          md: "6",
          class: "d-flex justify-start"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="rounded-full h-24 w-24"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  class: "rounded-full h-24 w-24"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCol, { class: "font-bold text-2xl px-6" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Start Your <br${_scopeId2}> Invesment Journey <br${_scopeId2}>With Us`);
            } else {
              return [
                createTextVNode("Start Your "),
                createVNode("br"),
                createTextVNode(" Invesment Journey "),
                createVNode("br"),
                createTextVNode("With Us")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="d-flex align-center mb-2 px-6"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="h-5 w-5"${_scopeId}><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"${_scopeId}></path></svg><span class="ms-3"${_scopeId}>Bank Account number and IFSC </span></div><div class="d-flex align-center mb-2 px-6"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="h-5 w-5"${_scopeId}><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"${_scopeId}></path></svg><span class="ms-3"${_scopeId}>Bank Account number and IFSC </span></div><div class="d-flex align-center mb-2 px-6"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="h-5 w-5"${_scopeId}><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"${_scopeId}></path></svg><span class="ms-3"${_scopeId}>Bank Account number and IFSC </span></div><div class="d-flex align-center mb-2 px-6"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="h-5 w-5"${_scopeId}><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"${_scopeId}></path></svg><span class="ms-3"${_scopeId}>Bank Account number and IFSC </span></div><div class="d-flex align-center mb-2 px-6"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="h-5 w-5"${_scopeId}><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"${_scopeId}></path></svg><span class="ms-3"${_scopeId}>Bank Account number and IFSC </span></div>`);
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          class: "px-5 pt-10"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VBtn, {
                block: "",
                type: "submit",
                to: "/pandetails"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` OPEN ACCOUNT `);
                  } else {
                    return [
                      createTextVNode(" OPEN ACCOUNT ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VBtn, {
                  block: "",
                  type: "submit",
                  to: "/pandetails"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" OPEN ACCOUNT ")
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
            md: "6",
            class: "d-flex justify-start"
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_0,
                alt: "",
                class: "rounded-full h-24 w-24"
              })
            ]),
            _: 1
          }),
          createVNode(VCol, { class: "font-bold text-2xl px-6" }, {
            default: withCtx(() => [
              createTextVNode("Start Your "),
              createVNode("br"),
              createTextVNode(" Invesment Journey "),
              createVNode("br"),
              createTextVNode("With Us")
            ]),
            _: 1
          }),
          createVNode("div", { class: "d-flex align-center mb-2 px-6" }, [
            (openBlock(), createBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "green",
              class: "h-5 w-5"
            }, [
              createVNode("path", { d: "M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" })
            ])),
            createVNode("span", { class: "ms-3" }, "Bank Account number and IFSC ")
          ]),
          createVNode("div", { class: "d-flex align-center mb-2 px-6" }, [
            (openBlock(), createBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "green",
              class: "h-5 w-5"
            }, [
              createVNode("path", { d: "M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" })
            ])),
            createVNode("span", { class: "ms-3" }, "Bank Account number and IFSC ")
          ]),
          createVNode("div", { class: "d-flex align-center mb-2 px-6" }, [
            (openBlock(), createBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "green",
              class: "h-5 w-5"
            }, [
              createVNode("path", { d: "M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" })
            ])),
            createVNode("span", { class: "ms-3" }, "Bank Account number and IFSC ")
          ]),
          createVNode("div", { class: "d-flex align-center mb-2 px-6" }, [
            (openBlock(), createBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "green",
              class: "h-5 w-5"
            }, [
              createVNode("path", { d: "M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" })
            ])),
            createVNode("span", { class: "ms-3" }, "Bank Account number and IFSC ")
          ]),
          createVNode("div", { class: "d-flex align-center mb-2 px-6" }, [
            (openBlock(), createBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "green",
              class: "h-5 w-5"
            }, [
              createVNode("path", { d: "M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" })
            ])),
            createVNode("span", { class: "ms-3" }, "Bank Account number and IFSC ")
          ]),
          createVNode(VCol, {
            cols: "12",
            class: "px-5 pt-10"
          }, {
            default: withCtx(() => [
              createVNode(VBtn, {
                block: "",
                type: "submit",
                to: "/pandetails"
              }, {
                default: withCtx(() => [
                  createTextVNode(" OPEN ACCOUNT ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mainpage-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mainpage2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { mainpage2 as default };
