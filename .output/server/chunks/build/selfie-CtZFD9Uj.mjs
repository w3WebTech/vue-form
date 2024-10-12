import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as VBtn } from './server.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
import { V as VAlert } from './VAlert-BwRJIlJK.mjs';
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
import './VAvatar-BZtC_Qdy.mjs';

const _sfc_main = {
  data() {
    return {
      checkbox: false,
      checkbox1: false,
      checkbox2: false
    };
  },
  methods: {}
};
const _imports_0 = "" + buildAssetsURL("selfie.BVWKZJNC.jpeg");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent(VRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          md: "6"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, { class: "px-3" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Selfie`);
                        } else {
                          return [
                            createTextVNode("Selfie")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "font-bold text-lg pt-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Click A Selfie`);
                        } else {
                          return [
                            createTextVNode("Click A Selfie")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "px-3 py-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Your Live Photo is required to sequirely open your demat account`);
                        } else {
                          return [
                            createTextVNode("Your Live Photo is required to sequirely open your demat account")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="w-full"${_scopeId4}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "",
                              class: "w-full"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VAlert, {
                            border: "start",
                            "border-color": "warning"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` To proceed with clicking a selfie,we need access to your webcam and location.Please allow the permissions to proceed. `);
                              } else {
                                return [
                                  createTextVNode(" To proceed with clicking a selfie,we need access to your webcam and location.Please allow the permissions to proceed. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VAlert, {
                              border: "start",
                              "border-color": "warning"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" To proceed with clicking a selfie,we need access to your webcam and location.Please allow the permissions to proceed. ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VRow, { class: "px-3 py-4 pb-15" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VBtn, {
                                  block: "",
                                  type: "submit",
                                  to: "/signatureupload"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` OPEN CAMERA `);
                                    } else {
                                      return [
                                        createTextVNode(" OPEN CAMERA ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    block: "",
                                    type: "submit",
                                    to: "/signatureupload"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" OPEN CAMERA ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  type: "submit",
                                  to: "/signatureupload"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" OPEN CAMERA ")
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
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, { class: "px-3" }, {
                        default: withCtx(() => [
                          createTextVNode("Selfie")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "font-bold text-lg pt-1" }, {
                        default: withCtx(() => [
                          createTextVNode("Click A Selfie")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "px-3 py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("Your Live Photo is required to sequirely open your demat account")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "",
                            class: "w-full"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VAlert, {
                            border: "start",
                            "border-color": "warning"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" To proceed with clicking a selfie,we need access to your webcam and location.Please allow the permissions to proceed. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { class: "px-3 py-4 pb-15" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                type: "submit",
                                to: "/signatureupload"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" OPEN CAMERA ")
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCard, null, {
                  default: withCtx(() => [
                    createVNode(VCol, { class: "px-3" }, {
                      default: withCtx(() => [
                        createTextVNode("Selfie")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "font-bold text-lg pt-1" }, {
                      default: withCtx(() => [
                        createTextVNode("Click A Selfie")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "px-3 py-1" }, {
                      default: withCtx(() => [
                        createTextVNode("Your Live Photo is required to sequirely open your demat account")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          class: "w-full"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VAlert, {
                          border: "start",
                          "border-color": "warning"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" To proceed with clicking a selfie,we need access to your webcam and location.Please allow the permissions to proceed. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, { class: "px-3 py-4 pb-15" }, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              type: "submit",
                              to: "/signatureupload"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" OPEN CAMERA ")
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCol, {
            cols: "12",
            md: "6"
          }, {
            default: withCtx(() => [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCol, { class: "px-3" }, {
                    default: withCtx(() => [
                      createTextVNode("Selfie")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "font-bold text-lg pt-1" }, {
                    default: withCtx(() => [
                      createTextVNode("Click A Selfie")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "px-3 py-1" }, {
                    default: withCtx(() => [
                      createTextVNode("Your Live Photo is required to sequirely open your demat account")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "",
                        class: "w-full"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VAlert, {
                        border: "start",
                        "border-color": "warning"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" To proceed with clicking a selfie,we need access to your webcam and location.Please allow the permissions to proceed. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, { class: "px-3 py-4 pb-15" }, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            type: "submit",
                            to: "/signatureupload"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" OPEN CAMERA ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/selfie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const selfie = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { selfie as default };
