import Datepicker from 'vue3-datepicker';
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, a as VBtn } from './server.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
import { V as VAlert } from './VAlert-BwRJIlJK.mjs';
import { V as VLabel } from './VLabel-CtbqF6Wb.mjs';
import { V as VTextField } from './VTextField-BsyoThCd.mjs';
import { V as VAutocomplete } from './VAutocomplete-Dfgbzjtj.mjs';
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
import './VField-DIVOjxLA.mjs';
import './index-D38G6C1I.mjs';
import './VInput-X9CvPL_3.mjs';
import './form-CtAJx0Pr.mjs';
import './easing-CuhD-vKF.mjs';
import './forwardRefs-BSTjJZPU.mjs';
import './filter--QOHq2bS.mjs';
import './VMenu-D2ZQl_It.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VDivider-UF-z31IW.mjs';
import './VOverlay-CsNFlnFM.mjs';
import './lazy-BteLhbse.mjs';
import './dialog-transition-CRChXgJR.mjs';
import './VCheckboxBtn-JiRxhpjI.mjs';

const _sfc_main = {
  components: {
    Datepicker
  },
  data() {
    return {
      checkbox: false,
      checkbox1: false,
      checkbox2: false,
      selectedDateTime: null,
      language: "en"
    };
  },
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_datepicker = resolveComponent("datepicker");
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
                    _push4(ssrRenderComponent(VCol, { class: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Nominee addition`);
                        } else {
                          return [
                            createTextVNode("Nominee addition")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "font-bold text-lg py-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Add Nominee To Your Account`);
                        } else {
                          return [
                            createTextVNode("Add Nominee To Your Account")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "py-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Nominees are the resipients of your stocks in case of your death`);
                        } else {
                          return [
                            createTextVNode("Nominees are the resipients of your stocks in case of your death")
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
                                _push6(` You can tap SKIP if you don&#39;t want to add a nominee `);
                              } else {
                                return [
                                  createTextVNode(" You can tap SKIP if you don't want to add a nominee ")
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
                                createTextVNode(" You can tap SKIP if you don't want to add a nominee ")
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
                                _push6(`Nominee&#39;s Full Name`);
                              } else {
                                return [
                                  createTextVNode("Nominee's Full Name")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("Nominee's Full Name")
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
                                _push6(`This Person Is Your`);
                              } else {
                                return [
                                  createTextVNode("This Person Is Your")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("This Person Is Your")
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
                          _push5(ssrRenderComponent(VAutocomplete, {
                            items: _ctx.items,
                            placeholder: "Select Ralationship"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VAutocomplete, {
                              items: _ctx.items,
                              placeholder: "Select Ralationship"
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
                                _push6(`Nominee&#39;s Date Of Birth`);
                              } else {
                                return [
                                  createTextVNode("Nominee's Date Of Birth")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("Nominee's Date Of Birth")
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
                          _push5(ssrRenderComponent(_component_datepicker, {
                            modelValue: $data.selectedDateTime,
                            "onUpdate:modelValue": ($event) => $data.selectedDateTime = $event,
                            format: "yyyy-MM-dd HH:mm:ss",
                            language: $data.language,
                            class: "datepick"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_datepicker, {
                              modelValue: $data.selectedDateTime,
                              "onUpdate:modelValue": ($event) => $data.selectedDateTime = $event,
                              format: "yyyy-MM-dd HH:mm:ss",
                              language: $data.language,
                              class: "datepick"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "language"])
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
                                      _push7(`Nominee&#39;s address is same as mine`);
                                    } else {
                                      return [
                                        createTextVNode("Nominee's address is same as mine")
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
                                      createTextVNode("Nominee's address is same as mine")
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
                                    createTextVNode("Nominee's address is same as mine")
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
                    _push4(ssrRenderComponent(VRow, { class: "px-3 py-3" }, {
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
                                  to: "/bankdetails"
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
                                    to: "/bankdetails"
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
                                  to: "/bankdetails"
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
                      createVNode(VCol, { class: "" }, {
                        default: withCtx(() => [
                          createTextVNode("Nominee addition")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("Add Nominee To Your Account")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("Nominees are the resipients of your stocks in case of your death")
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
                              createTextVNode(" You can tap SKIP if you don't want to add a nominee ")
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
                              createTextVNode("Nominee's Full Name")
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
                              createTextVNode("This Person Is Your")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VAutocomplete, {
                            items: _ctx.items,
                            placeholder: "Select Ralationship"
                          }, null, 8, ["items"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VLabel, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("Nominee's Date Of Birth")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_datepicker, {
                            modelValue: $data.selectedDateTime,
                            "onUpdate:modelValue": ($event) => $data.selectedDateTime = $event,
                            format: "yyyy-MM-dd HH:mm:ss",
                            language: $data.language,
                            class: "datepick"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "language"])
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
                                  createTextVNode("Nominee's address is same as mine")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { class: "px-3 py-3" }, {
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
                                to: "/bankdetails"
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
                    createVNode(VCol, { class: "" }, {
                      default: withCtx(() => [
                        createTextVNode("Nominee addition")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                      default: withCtx(() => [
                        createTextVNode("Add Nominee To Your Account")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "py-1" }, {
                      default: withCtx(() => [
                        createTextVNode("Nominees are the resipients of your stocks in case of your death")
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
                            createTextVNode(" You can tap SKIP if you don't want to add a nominee ")
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
                            createTextVNode("Nominee's Full Name")
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
                            createTextVNode("This Person Is Your")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VAutocomplete, {
                          items: _ctx.items,
                          placeholder: "Select Ralationship"
                        }, null, 8, ["items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VLabel, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("Nominee's Date Of Birth")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_datepicker, {
                          modelValue: $data.selectedDateTime,
                          "onUpdate:modelValue": ($event) => $data.selectedDateTime = $event,
                          format: "yyyy-MM-dd HH:mm:ss",
                          language: $data.language,
                          class: "datepick"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "language"])
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
                                createTextVNode("Nominee's address is same as mine")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, { class: "px-3 py-3" }, {
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
                              to: "/bankdetails"
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
                  createVNode(VCol, { class: "" }, {
                    default: withCtx(() => [
                      createTextVNode("Nominee addition")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                    default: withCtx(() => [
                      createTextVNode("Add Nominee To Your Account")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "py-1" }, {
                    default: withCtx(() => [
                      createTextVNode("Nominees are the resipients of your stocks in case of your death")
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
                          createTextVNode(" You can tap SKIP if you don't want to add a nominee ")
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
                          createTextVNode("Nominee's Full Name")
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
                          createTextVNode("This Person Is Your")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VAutocomplete, {
                        items: _ctx.items,
                        placeholder: "Select Ralationship"
                      }, null, 8, ["items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VLabel, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Nominee's Date Of Birth")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_datepicker, {
                        modelValue: $data.selectedDateTime,
                        "onUpdate:modelValue": ($event) => $data.selectedDateTime = $event,
                        format: "yyyy-MM-dd HH:mm:ss",
                        language: $data.language,
                        class: "datepick"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "language"])
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
                              createTextVNode("Nominee's address is same as mine")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, { class: "px-3 py-3" }, {
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
                            to: "/bankdetails"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/nominee.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nominee = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { nominee as default };
