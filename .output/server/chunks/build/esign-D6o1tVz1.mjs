import { defineComponent, useSSRContext, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as VBtn } from './server.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
import { V as VAlert } from './VAlert-BwRJIlJK.mjs';
import { V as VDialog } from './VDialog-rjqrpDhf.mjs';
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
import './VOverlay-CsNFlnFM.mjs';
import './easing-CuhD-vKF.mjs';
import './lazy-BteLhbse.mjs';
import './forwardRefs-BSTjJZPU.mjs';
import './dialog-transition-CRChXgJR.mjs';

const _sfc_main = defineComponent({
  data() {
    return {
      isDialogVisible: false
    };
  },
  methods: {},
  mounted() {
  }
});
const _imports_0 = "data:image/jpeg;base64,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";
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
                    _push4(ssrRenderComponent(VCol, { class: "py-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Signature`);
                        } else {
                          return [
                            createTextVNode("Signature")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "font-bold text-lg py-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Add Your E-Sign`);
                        } else {
                          return [
                            createTextVNode("Add Your E-Sign")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "py-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`This is required to digitally sign your documents. Your phone number must be linked to your Aadhaar to complete this Details step`);
                        } else {
                          return [
                            createTextVNode("This is required to digitally sign your documents. Your phone number must be linked to your Aadhaar to complete this Details step")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      class: ""
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="border border-gray rounded-md h-40"${_scopeId4}><img${ssrRenderAttr("src", _imports_0)} alt="" class="h-40 w-full"${_scopeId4}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "border border-gray rounded-md h-40" }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "",
                                class: "h-40 w-full"
                              })
                            ])
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
                                _push6(` Opening E-sign page.This may Take 10-15 secs `);
                              } else {
                                return [
                                  createTextVNode(" Opening E-sign page.This may Take 10-15 secs ")
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
                                createTextVNode(" Opening E-sign page.This may Take 10-15 secs ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      class: "pt-5"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VBtn, {
                            block: "",
                            type: "submit",
                            onClick: ($event) => this.isDialogVisible = true
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` PROCEED TO E_SIGN `);
                              } else {
                                return [
                                  createTextVNode(" PROCEED TO E_SIGN ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VBtn, {
                              block: "",
                              type: "submit",
                              onClick: ($event) => this.isDialogVisible = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" PROCEED TO E_SIGN ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VDialog, {
                      modelValue: _ctx.isDialogVisible,
                      "onUpdate:modelValue": ($event) => _ctx.isDialogVisible = $event,
                      width: "500"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCard, { class: "py-3" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCol, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<div class="loader"${_scopeId6}><div class="dot"${_scopeId6}></div><div class="dot"${_scopeId6}></div><div class="dot"${_scopeId6}></div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "loader" }, [
                                          createVNode("div", { class: "dot" }),
                                          createVNode("div", { class: "dot" }),
                                          createVNode("div", { class: "dot" })
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VCol, { class: "text-xl font-bold text-black d-flex justify-center py-1" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Waiting For E-Sign Completion`);
                                    } else {
                                      return [
                                        createTextVNode("Waiting For E-Sign Completion")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VCol, { class: "d-flex justify-center text-center items-center py-1" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Please complete the e-sign in this window.if you don&#39;t see the E-sign window ,please enable the popups in your browser. `);
                                    } else {
                                      return [
                                        createTextVNode(" Please complete the e-sign in this window.if you don't see the E-sign window ,please enable the popups in your browser. ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "loader" }, [
                                        createVNode("div", { class: "dot" }),
                                        createVNode("div", { class: "dot" }),
                                        createVNode("div", { class: "dot" })
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { class: "text-xl font-bold text-black d-flex justify-center py-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Waiting For E-Sign Completion")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { class: "d-flex justify-center text-center items-center py-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Please complete the e-sign in this window.if you don't see the E-sign window ,please enable the popups in your browser. ")
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
                            createVNode(VCard, { class: "py-3" }, {
                              default: withCtx(() => [
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "loader" }, [
                                      createVNode("div", { class: "dot" }),
                                      createVNode("div", { class: "dot" }),
                                      createVNode("div", { class: "dot" })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { class: "text-xl font-bold text-black d-flex justify-center py-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Waiting For E-Sign Completion")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { class: "d-flex justify-center text-center items-center py-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Please complete the e-sign in this window.if you don't see the E-sign window ,please enable the popups in your browser. ")
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
                      createVNode(VCol, { class: "py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("Signature")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("Add Your E-Sign")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("This is required to digitally sign your documents. Your phone number must be linked to your Aadhaar to complete this Details step")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: ""
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border border-gray rounded-md h-40" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "",
                              class: "h-40 w-full"
                            })
                          ])
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
                              createTextVNode(" Opening E-sign page.This may Take 10-15 secs ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "pt-5"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            type: "submit",
                            onClick: ($event) => this.isDialogVisible = true
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" PROCEED TO E_SIGN ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(VDialog, {
                        modelValue: _ctx.isDialogVisible,
                        "onUpdate:modelValue": ($event) => _ctx.isDialogVisible = $event,
                        width: "500"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, { class: "py-3" }, {
                            default: withCtx(() => [
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "loader" }, [
                                    createVNode("div", { class: "dot" }),
                                    createVNode("div", { class: "dot" }),
                                    createVNode("div", { class: "dot" })
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { class: "text-xl font-bold text-black d-flex justify-center py-1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Waiting For E-Sign Completion")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { class: "d-flex justify-center text-center items-center py-1" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Please complete the e-sign in this window.if you don't see the E-sign window ,please enable the popups in your browser. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCard, null, {
                  default: withCtx(() => [
                    createVNode(VCol, { class: "py-1" }, {
                      default: withCtx(() => [
                        createTextVNode("Signature")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                      default: withCtx(() => [
                        createTextVNode("Add Your E-Sign")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "py-1" }, {
                      default: withCtx(() => [
                        createTextVNode("This is required to digitally sign your documents. Your phone number must be linked to your Aadhaar to complete this Details step")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: ""
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border border-gray rounded-md h-40" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "",
                            class: "h-40 w-full"
                          })
                        ])
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
                            createTextVNode(" Opening E-sign page.This may Take 10-15 secs ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "pt-5"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          block: "",
                          type: "submit",
                          onClick: ($event) => this.isDialogVisible = true
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" PROCEED TO E_SIGN ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(VDialog, {
                      modelValue: _ctx.isDialogVisible,
                      "onUpdate:modelValue": ($event) => _ctx.isDialogVisible = $event,
                      width: "500"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, { class: "py-3" }, {
                          default: withCtx(() => [
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "loader" }, [
                                  createVNode("div", { class: "dot" }),
                                  createVNode("div", { class: "dot" }),
                                  createVNode("div", { class: "dot" })
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { class: "text-xl font-bold text-black d-flex justify-center py-1" }, {
                              default: withCtx(() => [
                                createTextVNode("Waiting For E-Sign Completion")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { class: "d-flex justify-center text-center items-center py-1" }, {
                              default: withCtx(() => [
                                createTextVNode(" Please complete the e-sign in this window.if you don't see the E-sign window ,please enable the popups in your browser. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
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
                  createVNode(VCol, { class: "py-1" }, {
                    default: withCtx(() => [
                      createTextVNode("Signature")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                    default: withCtx(() => [
                      createTextVNode("Add Your E-Sign")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "py-1" }, {
                    default: withCtx(() => [
                      createTextVNode("This is required to digitally sign your documents. Your phone number must be linked to your Aadhaar to complete this Details step")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: ""
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "border border-gray rounded-md h-40" }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          class: "h-40 w-full"
                        })
                      ])
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
                          createTextVNode(" Opening E-sign page.This may Take 10-15 secs ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "pt-5"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        block: "",
                        type: "submit",
                        onClick: ($event) => this.isDialogVisible = true
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" PROCEED TO E_SIGN ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VDialog, {
                    modelValue: _ctx.isDialogVisible,
                    "onUpdate:modelValue": ($event) => _ctx.isDialogVisible = $event,
                    width: "500"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, { class: "py-3" }, {
                        default: withCtx(() => [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "loader" }, [
                                createVNode("div", { class: "dot" }),
                                createVNode("div", { class: "dot" }),
                                createVNode("div", { class: "dot" })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { class: "text-xl font-bold text-black d-flex justify-center py-1" }, {
                            default: withCtx(() => [
                              createTextVNode("Waiting For E-Sign Completion")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { class: "d-flex justify-center text-center items-center py-1" }, {
                            default: withCtx(() => [
                              createTextVNode(" Please complete the e-sign in this window.if you don't see the E-sign window ,please enable the popups in your browser. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/esign.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const esign = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { esign as default };
