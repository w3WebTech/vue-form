import { aL as useRouter$1, _ as _export_sfc } from './server.mjs';
import { defineComponent, useSSRContext, withCtx, openBlock, createBlock, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
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
import './VAvatar-BZtC_Qdy.mjs';

const _sfc_main = defineComponent({
  data() {
    return {};
  },
  methods: {},
  setup() {
    const router = useRouter$1();
    const redirectToNextPage = () => {
      setTimeout(() => {
        router.push("/kycdetails");
      }, 5e3);
    };
    return {
      redirectToNextPage
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.redirectToNextPage();
    });
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent(VRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          md: "6",
          class: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, { class: "d-flex justify-center items-center text-center my-20" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, { class: "d-flex justify-center items-center text-center" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="h-12 w-12"${_scopeId5}><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"${_scopeId5}></path></svg>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "green",
                                    class: "h-12 w-12"
                                  }, [
                                    createVNode("path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" })
                                  ]))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, { class: "font-bold text-lg py-1" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Received Your Documents`);
                              } else {
                                return [
                                  createTextVNode("Received Your Documents")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Proceeding to the next step ...`);
                              } else {
                                return [
                                  createTextVNode("Proceeding to the next step ...")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, { class: "d-flex justify-center items-center text-center" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 24 24",
                                  fill: "green",
                                  class: "h-12 w-12"
                                }, [
                                  createVNode("path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" })
                                ]))
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                              default: withCtx(() => [
                                createTextVNode("Received Your Documents")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createTextVNode("Proceeding to the next step ...")
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
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { class: "d-flex justify-center items-center text-center" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "green",
                                class: "h-12 w-12"
                              }, [
                                createVNode("path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" })
                              ]))
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                            default: withCtx(() => [
                              createTextVNode("Received Your Documents")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createTextVNode("Proceeding to the next step ...")
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
                createVNode(VCard, { class: "d-flex justify-center items-center text-center my-20" }, {
                  default: withCtx(() => [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { class: "d-flex justify-center items-center text-center" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              fill: "green",
                              class: "h-12 w-12"
                            }, [
                              createVNode("path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" })
                            ]))
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                          default: withCtx(() => [
                            createTextVNode("Received Your Documents")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createTextVNode("Proceeding to the next step ...")
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
          createVNode(VCol, {
            cols: "12",
            md: "6",
            class: ""
          }, {
            default: withCtx(() => [
              createVNode(VCard, { class: "d-flex justify-center items-center text-center my-20" }, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VCol, { class: "d-flex justify-center items-center text-center" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "green",
                            class: "h-12 w-12"
                          }, [
                            createVNode("path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" })
                          ]))
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("Received Your Documents")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createTextVNode("Proceeding to the next step ...")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/successmessage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const successmessage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { successmessage as default };
