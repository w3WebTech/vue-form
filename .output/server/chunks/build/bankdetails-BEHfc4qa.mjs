import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, a as VBtn } from './server.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
import { V as VLabel } from './VLabel-CtbqF6Wb.mjs';
import { V as VAutocomplete } from './VAutocomplete-Dfgbzjtj.mjs';
import { V as VTextField } from './VTextField-BsyoThCd.mjs';
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
import './form-CtAJx0Pr.mjs';
import './forwardRefs-BSTjJZPU.mjs';
import './VMenu-D2ZQl_It.mjs';
import './index-D38G6C1I.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VDivider-UF-z31IW.mjs';
import './VOverlay-CsNFlnFM.mjs';
import './easing-CuhD-vKF.mjs';
import './lazy-BteLhbse.mjs';
import './dialog-transition-CRChXgJR.mjs';
import './VCheckboxBtn-JiRxhpjI.mjs';
import './VField-DIVOjxLA.mjs';
import './VInput-X9CvPL_3.mjs';

const _sfc_main = {
  data() {
    return {
      selectedaccounttypeButton: "CURRENT"
    };
  },
  methods: {
    selectaccounttypeButton(option) {
      this.selectedaccounttypeButton = option;
      console.log("Selected fund button value:", this.selectedaccounttypeButton);
    }
  }
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
                          _push5(`Bank Details`);
                        } else {
                          return [
                            createTextVNode("Bank Details")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "font-bold text-lg pt-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Link Your Bank Account`);
                        } else {
                          return [
                            createTextVNode("Link Your Bank Account")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "px-3 pt-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`From Which You Can Add and Withdraw Funds `);
                        } else {
                          return [
                            createTextVNode("From Which You Can Add and Withdraw Funds ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "py-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VLabel, { class: "font-bold" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Select Your Bank`);
                              } else {
                                return [
                                  createTextVNode("Select Your Bank")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("Select Your Bank")
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
                            placeholder: "Select Option"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VAutocomplete, {
                              items: _ctx.items,
                              placeholder: "Select Option"
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
                                _push6(`IFSC Code`);
                              } else {
                                return [
                                  createTextVNode("IFSC Code")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("IFSC Code")
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
                          _push5(ssrRenderComponent(VTextField, null, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField)
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
                                _push6(`Account Type`);
                              } else {
                                return [
                                  createTextVNode("Account Type")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("Account Type")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VRow, { class: "px-3" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<button class="${ssrRenderClass([{ selected: $data.selectedaccounttypeButton === "SAVINGS" }, "gender-button"])}"${_scopeId5}> SAVINGS </button><button class="${ssrRenderClass([{ selected: $data.selectedaccounttypeButton === "CURRENT" }, "gender-button"])}"${_scopeId5}> CURRENT </button>`);
                              } else {
                                return [
                                  createVNode("button", {
                                    ref: "fundButton1",
                                    class: ["gender-button", { selected: $data.selectedaccounttypeButton === "SAVINGS" }],
                                    onClick: ($event) => $options.selectaccounttypeButton("SAVINGS")
                                  }, " SAVINGS ", 10, ["onClick"]),
                                  createVNode("button", {
                                    ref: "fundButton2",
                                    class: ["gender-button", { selected: $data.selectedaccounttypeButton === "CURRENT" }],
                                    onClick: ($event) => $options.selectaccounttypeButton("CURRENT")
                                  }, " CURRENT ", 10, ["onClick"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode("button", {
                                  ref: "fundButton1",
                                  class: ["gender-button", { selected: $data.selectedaccounttypeButton === "SAVINGS" }],
                                  onClick: ($event) => $options.selectaccounttypeButton("SAVINGS")
                                }, " SAVINGS ", 10, ["onClick"]),
                                createVNode("button", {
                                  ref: "fundButton2",
                                  class: ["gender-button", { selected: $data.selectedaccounttypeButton === "CURRENT" }],
                                  onClick: ($event) => $options.selectaccounttypeButton("CURRENT")
                                }, " CURRENT ", 10, ["onClick"])
                              ]),
                              _: 1
                            })
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
                                _push6(`Account Number`);
                              } else {
                                return [
                                  createTextVNode("Account Number")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("Account Number")
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
                          _push5(ssrRenderComponent(VTextField, null, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField)
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
                                _push6(`Repeat Account Number`);
                              } else {
                                return [
                                  createTextVNode("Repeat Account Number")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("Repeat Account Number")
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
                          _push5(ssrRenderComponent(VTextField, null, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      class: "pb-10"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VBtn, {
                            block: "",
                            type: "submit",
                            to: "/selfie"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` PROCEED `);
                              } else {
                                return [
                                  createTextVNode(" PROCEED ")
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
                              to: "/selfie"
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
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, { class: "px-3" }, {
                        default: withCtx(() => [
                          createTextVNode("Bank Details")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "font-bold text-lg pt-1" }, {
                        default: withCtx(() => [
                          createTextVNode("Link Your Bank Account")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "px-3 pt-1" }, {
                        default: withCtx(() => [
                          createTextVNode("From Which You Can Add and Withdraw Funds ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "py-1" }, {
                        default: withCtx(() => [
                          createVNode(VLabel, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("Select Your Bank")
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
                            placeholder: "Select Option"
                          }, null, 8, ["items"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VLabel, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("IFSC Code")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "py-1" }, {
                        default: withCtx(() => [
                          createVNode(VTextField)
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VLabel, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("Account Type")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { class: "px-3" }, {
                        default: withCtx(() => [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode("button", {
                                ref: "fundButton1",
                                class: ["gender-button", { selected: $data.selectedaccounttypeButton === "SAVINGS" }],
                                onClick: ($event) => $options.selectaccounttypeButton("SAVINGS")
                              }, " SAVINGS ", 10, ["onClick"]),
                              createVNode("button", {
                                ref: "fundButton2",
                                class: ["gender-button", { selected: $data.selectedaccounttypeButton === "CURRENT" }],
                                onClick: ($event) => $options.selectaccounttypeButton("CURRENT")
                              }, " CURRENT ", 10, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VLabel, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("Account Number")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "py-1" }, {
                        default: withCtx(() => [
                          createVNode(VTextField)
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VLabel, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("Repeat Account Number")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "py-1" }, {
                        default: withCtx(() => [
                          createVNode(VTextField)
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "pb-10"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            type: "submit",
                            to: "/selfie"
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCard, null, {
                  default: withCtx(() => [
                    createVNode(VCol, { class: "px-3" }, {
                      default: withCtx(() => [
                        createTextVNode("Bank Details")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "font-bold text-lg pt-1" }, {
                      default: withCtx(() => [
                        createTextVNode("Link Your Bank Account")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "px-3 pt-1" }, {
                      default: withCtx(() => [
                        createTextVNode("From Which You Can Add and Withdraw Funds ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "py-1" }, {
                      default: withCtx(() => [
                        createVNode(VLabel, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("Select Your Bank")
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
                          placeholder: "Select Option"
                        }, null, 8, ["items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VLabel, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("IFSC Code")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "py-1" }, {
                      default: withCtx(() => [
                        createVNode(VTextField)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VLabel, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("Account Type")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, { class: "px-3" }, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode("button", {
                              ref: "fundButton1",
                              class: ["gender-button", { selected: $data.selectedaccounttypeButton === "SAVINGS" }],
                              onClick: ($event) => $options.selectaccounttypeButton("SAVINGS")
                            }, " SAVINGS ", 10, ["onClick"]),
                            createVNode("button", {
                              ref: "fundButton2",
                              class: ["gender-button", { selected: $data.selectedaccounttypeButton === "CURRENT" }],
                              onClick: ($event) => $options.selectaccounttypeButton("CURRENT")
                            }, " CURRENT ", 10, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VLabel, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("Account Number")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "py-1" }, {
                      default: withCtx(() => [
                        createVNode(VTextField)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VLabel, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("Repeat Account Number")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "py-1" }, {
                      default: withCtx(() => [
                        createVNode(VTextField)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "pb-10"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          block: "",
                          type: "submit",
                          to: "/selfie"
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
                      createTextVNode("Bank Details")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "font-bold text-lg pt-1" }, {
                    default: withCtx(() => [
                      createTextVNode("Link Your Bank Account")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "px-3 pt-1" }, {
                    default: withCtx(() => [
                      createTextVNode("From Which You Can Add and Withdraw Funds ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "py-1" }, {
                    default: withCtx(() => [
                      createVNode(VLabel, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Select Your Bank")
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
                        placeholder: "Select Option"
                      }, null, 8, ["items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VLabel, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("IFSC Code")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "py-1" }, {
                    default: withCtx(() => [
                      createVNode(VTextField)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VLabel, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Account Type")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, { class: "px-3" }, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode("button", {
                            ref: "fundButton1",
                            class: ["gender-button", { selected: $data.selectedaccounttypeButton === "SAVINGS" }],
                            onClick: ($event) => $options.selectaccounttypeButton("SAVINGS")
                          }, " SAVINGS ", 10, ["onClick"]),
                          createVNode("button", {
                            ref: "fundButton2",
                            class: ["gender-button", { selected: $data.selectedaccounttypeButton === "CURRENT" }],
                            onClick: ($event) => $options.selectaccounttypeButton("CURRENT")
                          }, " CURRENT ", 10, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VLabel, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Account Number")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "py-1" }, {
                    default: withCtx(() => [
                      createVNode(VTextField)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VLabel, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Repeat Account Number")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "py-1" }, {
                    default: withCtx(() => [
                      createVNode(VTextField)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "pb-10"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        block: "",
                        type: "submit",
                        to: "/selfie"
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
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bankdetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bankdetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { bankdetails as default };
