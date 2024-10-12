import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, a as VBtn } from './server.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
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
import './VLabel-CtbqF6Wb.mjs';
import './VInput-X9CvPL_3.mjs';
import './index-D38G6C1I.mjs';
import './form-CtAJx0Pr.mjs';

const _sfc_main = {
  data() {
    return {
      checkbox: false,
      checkbox1: false
    };
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
                    _push4(ssrRenderComponent(VCol, { class: "font-bold text-lg" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Select Segment For Activation`);
                        } else {
                          return [
                            createTextVNode("Select Segment For Activation")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "px-3 py-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Select which market you want to trade in.This can be done later as well.`);
                        } else {
                          return [
                            createTextVNode("Select which market you want to trade in.This can be done later as well.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="border border-gray rounded-md"${_scopeId4}>`);
                          _push5(ssrRenderComponent(VCol, { class: "py-1" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VRow, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VCol, {
                                        class: "font-bold text-lg",
                                        cols: "10"
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`Equities `);
                                          } else {
                                            return [
                                              createTextVNode("Equities ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VCol, { cols: "2" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(VCheckbox, {
                                              modelValue: this.checkbox,
                                              "onUpdate:modelValue": ($event) => this.checkbox = $event
                                            }, null, _parent8, _scopeId7));
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
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(VCol, {
                                          class: "font-bold text-lg",
                                          cols: "10"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Equities ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "2" }, {
                                          default: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              modelValue: this.checkbox,
                                              "onUpdate:modelValue": ($event) => this.checkbox = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        class: "font-bold text-lg",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Equities ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "2" }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: this.checkbox,
                                            "onUpdate:modelValue": ($event) => this.checkbox = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, { class: "px-3 py-1" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`You can invest and trade in stocks and ETF&#39;s by activating this..`);
                              } else {
                                return [
                                  createTextVNode("You can invest and trade in stocks and ETF's by activating this..")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "border border-gray rounded-md" }, [
                              createVNode(VCol, { class: "py-1" }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        class: "font-bold text-lg",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Equities ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "2" }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: this.checkbox,
                                            "onUpdate:modelValue": ($event) => this.checkbox = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { class: "px-3 py-1" }, {
                                default: withCtx(() => [
                                  createTextVNode("You can invest and trade in stocks and ETF's by activating this..")
                                ]),
                                _: 1
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
                          _push5(`<div class="border border-gray rounded-md"${_scopeId4}>`);
                          _push5(ssrRenderComponent(VCol, { class: "py-1" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VRow, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VCol, {
                                        class: "font-bold text-lg",
                                        cols: "10"
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`Futures &amp; Options `);
                                          } else {
                                            return [
                                              createTextVNode("Futures & Options ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VCol, { cols: "2" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(VCheckbox, {
                                              modelValue: this.checkbox1,
                                              "onUpdate:modelValue": ($event) => this.checkbox1 = $event
                                            }, null, _parent8, _scopeId7));
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
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(VCol, {
                                          class: "font-bold text-lg",
                                          cols: "10"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Futures & Options ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "2" }, {
                                          default: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              modelValue: this.checkbox1,
                                              "onUpdate:modelValue": ($event) => this.checkbox1 = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        class: "font-bold text-lg",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Futures & Options ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "2" }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: this.checkbox1,
                                            "onUpdate:modelValue": ($event) => this.checkbox1 = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, { class: "px-3 py-1" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Only select this if you&#39;re an experienced trader`);
                              } else {
                                return [
                                  createTextVNode("Only select this if you're an experienced trader")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<div class="bg-[#FFE8E8] text-[#FF8F35] px-3"${_scopeId4}>hello</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "border border-gray rounded-md" }, [
                              createVNode(VCol, { class: "py-1" }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        class: "font-bold text-lg",
                                        cols: "10"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Futures & Options ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "2" }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: this.checkbox1,
                                            "onUpdate:modelValue": ($event) => this.checkbox1 = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { class: "px-3 py-1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Only select this if you're an experienced trader")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "bg-[#FFE8E8] text-[#FF8F35] px-3" }, "hello")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VRow, { class: "px-3 py-4" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12 ",
                            class: "pt-10"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VBtn, {
                                  block: "",
                                  type: "submit",
                                  to: "/esign"
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
                                    to: "/esign"
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
                            createVNode(VCol, {
                              cols: "12 ",
                              class: "pt-10"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  type: "submit",
                                  to: "/esign"
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
                      createVNode(VCol, { class: "font-bold text-lg" }, {
                        default: withCtx(() => [
                          createTextVNode("Select Segment For Activation")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "px-3 py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("Select which market you want to trade in.This can be done later as well.")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border border-gray rounded-md" }, [
                            createVNode(VCol, { class: "py-1" }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      class: "font-bold text-lg",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Equities ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "2" }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: this.checkbox,
                                          "onUpdate:modelValue": ($event) => this.checkbox = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { class: "px-3 py-1" }, {
                              default: withCtx(() => [
                                createTextVNode("You can invest and trade in stocks and ETF's by activating this..")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border border-gray rounded-md" }, [
                            createVNode(VCol, { class: "py-1" }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      class: "font-bold text-lg",
                                      cols: "10"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Futures & Options ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "2" }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: this.checkbox1,
                                          "onUpdate:modelValue": ($event) => this.checkbox1 = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { class: "px-3 py-1" }, {
                              default: withCtx(() => [
                                createTextVNode("Only select this if you're an experienced trader")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "bg-[#FFE8E8] text-[#FF8F35] px-3" }, "hello")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { class: "px-3 py-4" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12 ",
                            class: "pt-10"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                type: "submit",
                                to: "/esign"
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
                    createVNode(VCol, { class: "font-bold text-lg" }, {
                      default: withCtx(() => [
                        createTextVNode("Select Segment For Activation")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "px-3 py-1" }, {
                      default: withCtx(() => [
                        createTextVNode("Select which market you want to trade in.This can be done later as well.")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border border-gray rounded-md" }, [
                          createVNode(VCol, { class: "py-1" }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    class: "font-bold text-lg",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Equities ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "2" }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: this.checkbox,
                                        "onUpdate:modelValue": ($event) => this.checkbox = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { class: "px-3 py-1" }, {
                            default: withCtx(() => [
                              createTextVNode("You can invest and trade in stocks and ETF's by activating this..")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border border-gray rounded-md" }, [
                          createVNode(VCol, { class: "py-1" }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    class: "font-bold text-lg",
                                    cols: "10"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Futures & Options ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "2" }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: this.checkbox1,
                                        "onUpdate:modelValue": ($event) => this.checkbox1 = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { class: "px-3 py-1" }, {
                            default: withCtx(() => [
                              createTextVNode("Only select this if you're an experienced trader")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "bg-[#FFE8E8] text-[#FF8F35] px-3" }, "hello")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, { class: "px-3 py-4" }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12 ",
                          class: "pt-10"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              type: "submit",
                              to: "/esign"
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
                  createVNode(VCol, { class: "font-bold text-lg" }, {
                    default: withCtx(() => [
                      createTextVNode("Select Segment For Activation")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "px-3 py-1" }, {
                    default: withCtx(() => [
                      createTextVNode("Select which market you want to trade in.This can be done later as well.")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "border border-gray rounded-md" }, [
                        createVNode(VCol, { class: "py-1" }, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  class: "font-bold text-lg",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Equities ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "2" }, {
                                  default: withCtx(() => [
                                    createVNode(VCheckbox, {
                                      modelValue: this.checkbox,
                                      "onUpdate:modelValue": ($event) => this.checkbox = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { class: "px-3 py-1" }, {
                          default: withCtx(() => [
                            createTextVNode("You can invest and trade in stocks and ETF's by activating this..")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "border border-gray rounded-md" }, [
                        createVNode(VCol, { class: "py-1" }, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  class: "font-bold text-lg",
                                  cols: "10"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Futures & Options ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "2" }, {
                                  default: withCtx(() => [
                                    createVNode(VCheckbox, {
                                      modelValue: this.checkbox1,
                                      "onUpdate:modelValue": ($event) => this.checkbox1 = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { class: "px-3 py-1" }, {
                          default: withCtx(() => [
                            createTextVNode("Only select this if you're an experienced trader")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "bg-[#FFE8E8] text-[#FF8F35] px-3" }, "hello")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, { class: "px-3 py-4" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12 ",
                        class: "pt-10"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            type: "submit",
                            to: "/esign"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/segmentactivation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const segmentactivation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { segmentactivation as default };
