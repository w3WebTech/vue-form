import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, a as VBtn } from './server.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
import { V as VLabel } from './VLabel-CtbqF6Wb.mjs';
import { V as VAutocomplete } from './VAutocomplete-Dfgbzjtj.mjs';
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
import './filter--QOHq2bS.mjs';
import './VTextField-BsyoThCd.mjs';
import './VField-DIVOjxLA.mjs';
import './index-D38G6C1I.mjs';
import './VInput-X9CvPL_3.mjs';
import './form-CtAJx0Pr.mjs';
import './easing-CuhD-vKF.mjs';
import './forwardRefs-BSTjJZPU.mjs';
import './VMenu-D2ZQl_It.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VDivider-UF-z31IW.mjs';
import './VOverlay-CsNFlnFM.mjs';
import './lazy-BteLhbse.mjs';
import './dialog-transition-CRChXgJR.mjs';
import './VCheckboxBtn-JiRxhpjI.mjs';

const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
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
                          _push5(`KYC detail(2/3)`);
                        } else {
                          return [
                            createTextVNode("KYC detail(2/3)")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "font-bold text-lg pt-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`What is Your Income Range And Trading Experience?`);
                        } else {
                          return [
                            createTextVNode("What is Your Income Range And Trading Experience?")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "px-3 py-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`This is required to complete your KYC and securely open your demat account`);
                        } else {
                          return [
                            createTextVNode("This is required to complete your KYC and securely open your demat account")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VLabel, { class: "font-bold" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Income Range`);
                              } else {
                                return [
                                  createTextVNode("Income Range")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("Income Range")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "py-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VAutocomplete, {
                            items: _ctx.items,
                            placeholder: "Select Income Range"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VAutocomplete, {
                              items: _ctx.items,
                              placeholder: "Select Income Range"
                            }, null, 8, ["items"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VLabel, { class: "font-bold" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Trading Experience`);
                              } else {
                                return [
                                  createTextVNode("Trading Experience")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("Trading Experience")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "py-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VAutocomplete, {
                            items: _ctx.items,
                            placeholder: "Select Trading Experience"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VAutocomplete, {
                              items: _ctx.items,
                              placeholder: "Select Trading Experience"
                            }, null, 8, ["items"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VRow, { class: "px-3 py-4" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, { cols: "4" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VBtn, {
                                  block: "",
                                  color: "secondary",
                                  type: "reset",
                                  variant: "outlined"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` BACK `);
                                    } else {
                                      return [
                                        createTextVNode(" BACK ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    block: "",
                                    color: "secondary",
                                    type: "reset",
                                    variant: "outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" BACK ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, { cols: "8" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VBtn, {
                                  block: "",
                                  type: "submit",
                                  to: "/kycdetails3"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` PROCEED `);
                                    } else {
                                      return [
                                        createTextVNode(" PROCEED ")
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
                                    to: "/kycdetails3"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" PROCEED ")
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
                            createVNode(VCol, { cols: "4" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  color: "secondary",
                                  type: "reset",
                                  variant: "outlined"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" BACK ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "8" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  type: "submit",
                                  to: "/kycdetails3"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" PROCEED ")
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
                          createTextVNode("KYC detail(2/3)")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "font-bold text-lg pt-1" }, {
                        default: withCtx(() => [
                          createTextVNode("What is Your Income Range And Trading Experience?")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "px-3 py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("This is required to complete your KYC and securely open your demat account")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VLabel, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("Income Range")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "py-1" }, {
                        default: withCtx(() => [
                          createVNode(VAutocomplete, {
                            items: _ctx.items,
                            placeholder: "Select Income Range"
                          }, null, 8, ["items"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VLabel, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("Trading Experience")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "py-1" }, {
                        default: withCtx(() => [
                          createVNode(VAutocomplete, {
                            items: _ctx.items,
                            placeholder: "Select Trading Experience"
                          }, null, 8, ["items"])
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { class: "px-3 py-4" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "4" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                color: "secondary",
                                type: "reset",
                                variant: "outlined"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" BACK ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "8" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                type: "submit",
                                to: "/kycdetails3"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" PROCEED ")
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
                        createTextVNode("KYC detail(2/3)")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "font-bold text-lg pt-1" }, {
                      default: withCtx(() => [
                        createTextVNode("What is Your Income Range And Trading Experience?")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "px-3 py-1" }, {
                      default: withCtx(() => [
                        createTextVNode("This is required to complete your KYC and securely open your demat account")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VLabel, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("Income Range")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "py-1" }, {
                      default: withCtx(() => [
                        createVNode(VAutocomplete, {
                          items: _ctx.items,
                          placeholder: "Select Income Range"
                        }, null, 8, ["items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VLabel, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("Trading Experience")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "py-1" }, {
                      default: withCtx(() => [
                        createVNode(VAutocomplete, {
                          items: _ctx.items,
                          placeholder: "Select Trading Experience"
                        }, null, 8, ["items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, { class: "px-3 py-4" }, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "4" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              color: "secondary",
                              type: "reset",
                              variant: "outlined"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" BACK ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "8" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              type: "submit",
                              to: "/kycdetails3"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" PROCEED ")
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
                      createTextVNode("KYC detail(2/3)")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "font-bold text-lg pt-1" }, {
                    default: withCtx(() => [
                      createTextVNode("What is Your Income Range And Trading Experience?")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "px-3 py-1" }, {
                    default: withCtx(() => [
                      createTextVNode("This is required to complete your KYC and securely open your demat account")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VLabel, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Income Range")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "py-1" }, {
                    default: withCtx(() => [
                      createVNode(VAutocomplete, {
                        items: _ctx.items,
                        placeholder: "Select Income Range"
                      }, null, 8, ["items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VLabel, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Trading Experience")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "py-1" }, {
                    default: withCtx(() => [
                      createVNode(VAutocomplete, {
                        items: _ctx.items,
                        placeholder: "Select Trading Experience"
                      }, null, 8, ["items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, { class: "px-3 py-4" }, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "4" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            color: "secondary",
                            type: "reset",
                            variant: "outlined"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" BACK ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "8" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            type: "submit",
                            to: "/kycdetails3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" PROCEED ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/kycdetails2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kycdetails2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { kycdetails2 as default };
