import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, a as VBtn } from './server.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
import { V as VLabel } from './VLabel-CtbqF6Wb.mjs';
import { V as VCheckbox } from './VCheckbox-BI5TDaTk.mjs';
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
import './VCheckboxBtn-JiRxhpjI.mjs';
import './VInput-X9CvPL_3.mjs';
import './index-D38G6C1I.mjs';
import './form-CtAJx0Pr.mjs';

const _sfc_main = {
  data() {
    return {
      checkbox: false,
      checkbox1: false,
      checkbox2: false,
      selectedfundButton: "MONTH",
      selectedstockButton: " e-DIS(OTP on sell)"
    };
  },
  mounted() {
    [this.$refs.fundButton1, this.$refs.fundButton2];
    [this.$refs.stockButton1, this.$refs.stockButton2];
  },
  methods: {
    selectFundButton(option) {
      this.selectedfundButton = option;
      console.log("Selected fund button value:", this.selectedfundButton);
    },
    selectStockButton(option) {
      this.selectedstockButton = option;
      console.log("Selected stock button value:", this.selectedstockButton);
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
              _push3(ssrRenderComponent(VCard, { class: "px-3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, { class: "px-3 py-1 pt-4" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`KYC detail(3/3)`);
                        } else {
                          return [
                            createTextVNode("KYC detail(3/3)")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "font-bold text-lg py-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Preferences and Declarations`);
                        } else {
                          return [
                            createTextVNode("Preferences and Declarations")
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
                                _push6(`Withdraw Un-Invested Funds Everyday:`);
                              } else {
                                return [
                                  createTextVNode("Withdraw Un-Invested Funds Everyday:")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("Withdraw Un-Invested Funds Everyday:")
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
                                _push6(`<button class="${ssrRenderClass([{ selected: $data.selectedfundButton === "QUARTER" }, "gender-button"])}"${_scopeId5}> QUARTER </button><button class="${ssrRenderClass([{ selected: $data.selectedfundButton === "MONTH" }, "gender-button"])}"${_scopeId5}> MONTH </button>`);
                              } else {
                                return [
                                  createVNode("button", {
                                    ref: "fundButton1",
                                    class: ["gender-button", { selected: $data.selectedfundButton === "QUARTER" }],
                                    onClick: ($event) => $options.selectFundButton("QUARTER")
                                  }, " QUARTER ", 10, ["onClick"]),
                                  createVNode("button", {
                                    ref: "fundButton2",
                                    class: ["gender-button", { selected: $data.selectedfundButton === "MONTH" }],
                                    onClick: ($event) => $options.selectFundButton("MONTH")
                                  }, " MONTH ", 10, ["onClick"])
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
                                  class: ["gender-button", { selected: $data.selectedfundButton === "QUARTER" }],
                                  onClick: ($event) => $options.selectFundButton("QUARTER")
                                }, " QUARTER ", 10, ["onClick"]),
                                createVNode("button", {
                                  ref: "fundButton2",
                                  class: ["gender-button", { selected: $data.selectedfundButton === "MONTH" }],
                                  onClick: ($event) => $options.selectFundButton("MONTH")
                                }, " MONTH ", 10, ["onClick"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "px-3 text-sm" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`By selecting the preference, I agree to abide by TAC of Ruiving Account Authorisation Learn more`);
                        } else {
                          return [
                            createTextVNode("By selecting the preference, I agree to abide by TAC of Ruiving Account Authorisation Learn more")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VRow, { cols: "12" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCol, { cols: "1" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VCheckbox, {
                                        modelValue: this.checkbox,
                                        "onUpdate:modelValue": ($event) => this.checkbox = $event
                                      }, null, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(VCheckbox, {
                                          modelValue: this.checkbox,
                                          "onUpdate:modelValue": ($event) => this.checkbox = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VCol, {
                                  cols: "11",
                                  class: "mt-2 text-justify"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`I am an Indian Resident, I am neither a specified`);
                                    } else {
                                      return [
                                        createTextVNode("I am an Indian Resident, I am neither a specified")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VCol, { cols: "1" }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: this.checkbox,
                                        "onUpdate:modelValue": ($event) => this.checkbox = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "11",
                                    class: "mt-2 text-justify"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("I am an Indian Resident, I am neither a specified")
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
                            createVNode(VRow, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "1" }, {
                                  default: withCtx(() => [
                                    createVNode(VCheckbox, {
                                      modelValue: this.checkbox,
                                      "onUpdate:modelValue": ($event) => this.checkbox = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "11",
                                  class: "mt-2 text-justify"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("I am an Indian Resident, I am neither a specified")
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
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VLabel, { class: "font-bold" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Authorization Mode For Selling Stocks:`);
                              } else {
                                return [
                                  createTextVNode("Authorization Mode For Selling Stocks:")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("Authorization Mode For Selling Stocks:")
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
                                _push6(`<button class="${ssrRenderClass([{ selected: $data.selectedstockButton === "e-DIS(OTP on sell)" }, "gender-button"])}"${_scopeId5}> e-DIS(OTP on sell) </button><button class="${ssrRenderClass([{ selected: $data.selectedstockButton === "DDPI (No OTP)" }, "gender-button"])}"${_scopeId5}> DDPI (No OTP) </button>`);
                              } else {
                                return [
                                  createVNode("button", {
                                    ref: "stockButton1",
                                    class: ["gender-button", { selected: $data.selectedstockButton === "e-DIS(OTP on sell)" }],
                                    onClick: ($event) => $options.selectStockButton("e-DIS(OTP on sell)")
                                  }, " e-DIS(OTP on sell) ", 10, ["onClick"]),
                                  createVNode("button", {
                                    ref: "stockButton2",
                                    class: ["gender-button", { selected: $data.selectedstockButton === "DDPI (No OTP)" }],
                                    onClick: ($event) => $options.selectStockButton("DDPI (No OTP)")
                                  }, " DDPI (No OTP) ", 10, ["onClick"])
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
                                  ref: "stockButton1",
                                  class: ["gender-button", { selected: $data.selectedstockButton === "e-DIS(OTP on sell)" }],
                                  onClick: ($event) => $options.selectStockButton("e-DIS(OTP on sell)")
                                }, " e-DIS(OTP on sell) ", 10, ["onClick"]),
                                createVNode("button", {
                                  ref: "stockButton2",
                                  class: ["gender-button", { selected: $data.selectedstockButton === "DDPI (No OTP)" }],
                                  onClick: ($event) => $options.selectStockButton("DDPI (No OTP)")
                                }, " DDPI (No OTP) ", 10, ["onClick"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "px-3 text-sm" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`You can select DOPI if you want to sell stocks instantly without entaring a FIN every time. Learn more`);
                        } else {
                          return [
                            createTextVNode("You can select DOPI if you want to sell stocks instantly without entaring a FIN every time. Learn more")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VRow, { cols: "12" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCol, { cols: "1" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VCheckbox, {
                                        modelValue: this.checkbox,
                                        "onUpdate:modelValue": ($event) => this.checkbox = $event
                                      }, null, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(VCheckbox, {
                                          modelValue: this.checkbox,
                                          "onUpdate:modelValue": ($event) => this.checkbox = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VCol, {
                                  cols: "11",
                                  class: "mt-2 text-justify"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`I am an Indian Resident. I am neither a specified US person, US citizen/ green card holder nor a Tax resident of any other country`);
                                    } else {
                                      return [
                                        createTextVNode("I am an Indian Resident. I am neither a specified US person, US citizen/ green card holder nor a Tax resident of any other country")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VCol, { cols: "1" }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: this.checkbox,
                                        "onUpdate:modelValue": ($event) => this.checkbox = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "11",
                                    class: "mt-2 text-justify"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("I am an Indian Resident. I am neither a specified US person, US citizen/ green card holder nor a Tax resident of any other country")
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
                            createVNode(VRow, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "1" }, {
                                  default: withCtx(() => [
                                    createVNode(VCheckbox, {
                                      modelValue: this.checkbox,
                                      "onUpdate:modelValue": ($event) => this.checkbox = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "11",
                                  class: "mt-2 text-justify"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("I am an Indian Resident. I am neither a specified US person, US citizen/ green card holder nor a Tax resident of any other country")
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
                    _push4(ssrRenderComponent(VCol, { class: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VRow, { cols: "12" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCol, { cols: "1" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VCheckbox, {
                                        modelValue: this.checkbox1,
                                        "onUpdate:modelValue": ($event) => this.checkbox1 = $event
                                      }, null, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(VCheckbox, {
                                          modelValue: this.checkbox1,
                                          "onUpdate:modelValue": ($event) => this.checkbox1 = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VCol, {
                                  cols: "11",
                                  class: "mt-2 text-justify"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` I&#39;m not politically exposed or related to a politically-exposed person`);
                                    } else {
                                      return [
                                        createTextVNode(" I'm not politically exposed or related to a politically-exposed person")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VCol, { cols: "1" }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: this.checkbox1,
                                        "onUpdate:modelValue": ($event) => this.checkbox1 = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "11",
                                    class: "mt-2 text-justify"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" I'm not politically exposed or related to a politically-exposed person")
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
                            createVNode(VRow, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "1" }, {
                                  default: withCtx(() => [
                                    createVNode(VCheckbox, {
                                      modelValue: this.checkbox1,
                                      "onUpdate:modelValue": ($event) => this.checkbox1 = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "11",
                                  class: "mt-2 text-justify"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" I'm not politically exposed or related to a politically-exposed person")
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
                    _push4(ssrRenderComponent(VCol, { class: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VRow, { cols: "12" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCol, { cols: "1" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VCheckbox, {
                                        modelValue: this.checkbox2,
                                        "onUpdate:modelValue": ($event) => this.checkbox2 = $event
                                      }, null, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(VCheckbox, {
                                          modelValue: this.checkbox2,
                                          "onUpdate:modelValue": ($event) => this.checkbox2 = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VCol, {
                                  cols: "11",
                                  class: "mt-2 text-justify"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`I am not dealing with/ through any stock brokers/authorised person &amp; there are no disputes/ dues pending from! to them. Further, I hereby confirm that no actions/proceedings have been initiated or are pending against me by SEBIU Stock Exchanges or any other authority.`);
                                    } else {
                                      return [
                                        createTextVNode("I am not dealing with/ through any stock brokers/authorised person & there are no disputes/ dues pending from! to them. Further, I hereby confirm that no actions/proceedings have been initiated or are pending against me by SEBIU Stock Exchanges or any other authority.")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VCol, { cols: "1" }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: this.checkbox2,
                                        "onUpdate:modelValue": ($event) => this.checkbox2 = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "11",
                                    class: "mt-2 text-justify"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("I am not dealing with/ through any stock brokers/authorised person & there are no disputes/ dues pending from! to them. Further, I hereby confirm that no actions/proceedings have been initiated or are pending against me by SEBIU Stock Exchanges or any other authority.")
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
                            createVNode(VRow, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "1" }, {
                                  default: withCtx(() => [
                                    createVNode(VCheckbox, {
                                      modelValue: this.checkbox2,
                                      "onUpdate:modelValue": ($event) => this.checkbox2 = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "11",
                                  class: "mt-2 text-justify"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("I am not dealing with/ through any stock brokers/authorised person & there are no disputes/ dues pending from! to them. Further, I hereby confirm that no actions/proceedings have been initiated or are pending against me by SEBIU Stock Exchanges or any other authority.")
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
                                  to: "/nominee"
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
                                    to: "/nominee"
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
                                  to: "/nominee"
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
                      createVNode(VCol, { class: "px-3 py-1 pt-4" }, {
                        default: withCtx(() => [
                          createTextVNode("KYC detail(3/3)")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("Preferences and Declarations")
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
                              createTextVNode("Withdraw Un-Invested Funds Everyday:")
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
                                class: ["gender-button", { selected: $data.selectedfundButton === "QUARTER" }],
                                onClick: ($event) => $options.selectFundButton("QUARTER")
                              }, " QUARTER ", 10, ["onClick"]),
                              createVNode("button", {
                                ref: "fundButton2",
                                class: ["gender-button", { selected: $data.selectedfundButton === "MONTH" }],
                                onClick: ($event) => $options.selectFundButton("MONTH")
                              }, " MONTH ", 10, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "px-3 text-sm" }, {
                        default: withCtx(() => [
                          createTextVNode("By selecting the preference, I agree to abide by TAC of Ruiving Account Authorisation Learn more")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "" }, {
                        default: withCtx(() => [
                          createVNode(VRow, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "1" }, {
                                default: withCtx(() => [
                                  createVNode(VCheckbox, {
                                    modelValue: this.checkbox,
                                    "onUpdate:modelValue": ($event) => this.checkbox = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "11",
                                class: "mt-2 text-justify"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("I am an Indian Resident, I am neither a specified")
                                ]),
                                _: 1
                              })
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
                              createTextVNode("Authorization Mode For Selling Stocks:")
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
                                ref: "stockButton1",
                                class: ["gender-button", { selected: $data.selectedstockButton === "e-DIS(OTP on sell)" }],
                                onClick: ($event) => $options.selectStockButton("e-DIS(OTP on sell)")
                              }, " e-DIS(OTP on sell) ", 10, ["onClick"]),
                              createVNode("button", {
                                ref: "stockButton2",
                                class: ["gender-button", { selected: $data.selectedstockButton === "DDPI (No OTP)" }],
                                onClick: ($event) => $options.selectStockButton("DDPI (No OTP)")
                              }, " DDPI (No OTP) ", 10, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "px-3 text-sm" }, {
                        default: withCtx(() => [
                          createTextVNode("You can select DOPI if you want to sell stocks instantly without entaring a FIN every time. Learn more")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "" }, {
                        default: withCtx(() => [
                          createVNode(VRow, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "1" }, {
                                default: withCtx(() => [
                                  createVNode(VCheckbox, {
                                    modelValue: this.checkbox,
                                    "onUpdate:modelValue": ($event) => this.checkbox = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "11",
                                class: "mt-2 text-justify"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("I am an Indian Resident. I am neither a specified US person, US citizen/ green card holder nor a Tax resident of any other country")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "" }, {
                        default: withCtx(() => [
                          createVNode(VRow, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "1" }, {
                                default: withCtx(() => [
                                  createVNode(VCheckbox, {
                                    modelValue: this.checkbox1,
                                    "onUpdate:modelValue": ($event) => this.checkbox1 = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "11",
                                class: "mt-2 text-justify"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" I'm not politically exposed or related to a politically-exposed person")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "" }, {
                        default: withCtx(() => [
                          createVNode(VRow, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "1" }, {
                                default: withCtx(() => [
                                  createVNode(VCheckbox, {
                                    modelValue: this.checkbox2,
                                    "onUpdate:modelValue": ($event) => this.checkbox2 = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "11",
                                class: "mt-2 text-justify"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("I am not dealing with/ through any stock brokers/authorised person & there are no disputes/ dues pending from! to them. Further, I hereby confirm that no actions/proceedings have been initiated or are pending against me by SEBIU Stock Exchanges or any other authority.")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
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
                                to: "/nominee"
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
                createVNode(VCard, { class: "px-3" }, {
                  default: withCtx(() => [
                    createVNode(VCol, { class: "px-3 py-1 pt-4" }, {
                      default: withCtx(() => [
                        createTextVNode("KYC detail(3/3)")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                      default: withCtx(() => [
                        createTextVNode("Preferences and Declarations")
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
                            createTextVNode("Withdraw Un-Invested Funds Everyday:")
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
                              class: ["gender-button", { selected: $data.selectedfundButton === "QUARTER" }],
                              onClick: ($event) => $options.selectFundButton("QUARTER")
                            }, " QUARTER ", 10, ["onClick"]),
                            createVNode("button", {
                              ref: "fundButton2",
                              class: ["gender-button", { selected: $data.selectedfundButton === "MONTH" }],
                              onClick: ($event) => $options.selectFundButton("MONTH")
                            }, " MONTH ", 10, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "px-3 text-sm" }, {
                      default: withCtx(() => [
                        createTextVNode("By selecting the preference, I agree to abide by TAC of Ruiving Account Authorisation Learn more")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "1" }, {
                              default: withCtx(() => [
                                createVNode(VCheckbox, {
                                  modelValue: this.checkbox,
                                  "onUpdate:modelValue": ($event) => this.checkbox = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "11",
                              class: "mt-2 text-justify"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("I am an Indian Resident, I am neither a specified")
                              ]),
                              _: 1
                            })
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
                            createTextVNode("Authorization Mode For Selling Stocks:")
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
                              ref: "stockButton1",
                              class: ["gender-button", { selected: $data.selectedstockButton === "e-DIS(OTP on sell)" }],
                              onClick: ($event) => $options.selectStockButton("e-DIS(OTP on sell)")
                            }, " e-DIS(OTP on sell) ", 10, ["onClick"]),
                            createVNode("button", {
                              ref: "stockButton2",
                              class: ["gender-button", { selected: $data.selectedstockButton === "DDPI (No OTP)" }],
                              onClick: ($event) => $options.selectStockButton("DDPI (No OTP)")
                            }, " DDPI (No OTP) ", 10, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "px-3 text-sm" }, {
                      default: withCtx(() => [
                        createTextVNode("You can select DOPI if you want to sell stocks instantly without entaring a FIN every time. Learn more")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "1" }, {
                              default: withCtx(() => [
                                createVNode(VCheckbox, {
                                  modelValue: this.checkbox,
                                  "onUpdate:modelValue": ($event) => this.checkbox = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "11",
                              class: "mt-2 text-justify"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("I am an Indian Resident. I am neither a specified US person, US citizen/ green card holder nor a Tax resident of any other country")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "1" }, {
                              default: withCtx(() => [
                                createVNode(VCheckbox, {
                                  modelValue: this.checkbox1,
                                  "onUpdate:modelValue": ($event) => this.checkbox1 = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "11",
                              class: "mt-2 text-justify"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" I'm not politically exposed or related to a politically-exposed person")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "1" }, {
                              default: withCtx(() => [
                                createVNode(VCheckbox, {
                                  modelValue: this.checkbox2,
                                  "onUpdate:modelValue": ($event) => this.checkbox2 = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "11",
                              class: "mt-2 text-justify"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("I am not dealing with/ through any stock brokers/authorised person & there are no disputes/ dues pending from! to them. Further, I hereby confirm that no actions/proceedings have been initiated or are pending against me by SEBIU Stock Exchanges or any other authority.")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
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
                              to: "/nominee"
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
              createVNode(VCard, { class: "px-3" }, {
                default: withCtx(() => [
                  createVNode(VCol, { class: "px-3 py-1 pt-4" }, {
                    default: withCtx(() => [
                      createTextVNode("KYC detail(3/3)")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                    default: withCtx(() => [
                      createTextVNode("Preferences and Declarations")
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
                          createTextVNode("Withdraw Un-Invested Funds Everyday:")
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
                            class: ["gender-button", { selected: $data.selectedfundButton === "QUARTER" }],
                            onClick: ($event) => $options.selectFundButton("QUARTER")
                          }, " QUARTER ", 10, ["onClick"]),
                          createVNode("button", {
                            ref: "fundButton2",
                            class: ["gender-button", { selected: $data.selectedfundButton === "MONTH" }],
                            onClick: ($event) => $options.selectFundButton("MONTH")
                          }, " MONTH ", 10, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "px-3 text-sm" }, {
                    default: withCtx(() => [
                      createTextVNode("By selecting the preference, I agree to abide by TAC of Ruiving Account Authorisation Learn more")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "1" }, {
                            default: withCtx(() => [
                              createVNode(VCheckbox, {
                                modelValue: this.checkbox,
                                "onUpdate:modelValue": ($event) => this.checkbox = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "11",
                            class: "mt-2 text-justify"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("I am an Indian Resident, I am neither a specified")
                            ]),
                            _: 1
                          })
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
                          createTextVNode("Authorization Mode For Selling Stocks:")
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
                            ref: "stockButton1",
                            class: ["gender-button", { selected: $data.selectedstockButton === "e-DIS(OTP on sell)" }],
                            onClick: ($event) => $options.selectStockButton("e-DIS(OTP on sell)")
                          }, " e-DIS(OTP on sell) ", 10, ["onClick"]),
                          createVNode("button", {
                            ref: "stockButton2",
                            class: ["gender-button", { selected: $data.selectedstockButton === "DDPI (No OTP)" }],
                            onClick: ($event) => $options.selectStockButton("DDPI (No OTP)")
                          }, " DDPI (No OTP) ", 10, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "px-3 text-sm" }, {
                    default: withCtx(() => [
                      createTextVNode("You can select DOPI if you want to sell stocks instantly without entaring a FIN every time. Learn more")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "1" }, {
                            default: withCtx(() => [
                              createVNode(VCheckbox, {
                                modelValue: this.checkbox,
                                "onUpdate:modelValue": ($event) => this.checkbox = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "11",
                            class: "mt-2 text-justify"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("I am an Indian Resident. I am neither a specified US person, US citizen/ green card holder nor a Tax resident of any other country")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "1" }, {
                            default: withCtx(() => [
                              createVNode(VCheckbox, {
                                modelValue: this.checkbox1,
                                "onUpdate:modelValue": ($event) => this.checkbox1 = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "11",
                            class: "mt-2 text-justify"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" I'm not politically exposed or related to a politically-exposed person")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "1" }, {
                            default: withCtx(() => [
                              createVNode(VCheckbox, {
                                modelValue: this.checkbox2,
                                "onUpdate:modelValue": ($event) => this.checkbox2 = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "11",
                            class: "mt-2 text-justify"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("I am not dealing with/ through any stock brokers/authorised person & there are no disputes/ dues pending from! to them. Further, I hereby confirm that no actions/proceedings have been initiated or are pending against me by SEBIU Stock Exchanges or any other authority.")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
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
                            to: "/nominee"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/kycdetails3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kycdetails3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { kycdetails3 as default };
