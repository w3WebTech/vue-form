import { defineComponent, ref, mergeProps, withCtx, createVNode, unref, isRef, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard, a as VCardText } from './VCard-BCzimUKB.mjs';
import { V as VCheckbox } from './VCheckbox-BI5TDaTk.mjs';
import { V as VTextField } from './VTextField-BsyoThCd.mjs';
import { a as VBtn } from './server.mjs';
import { V as VTextarea } from './VTextarea-DId7pJKv.mjs';
import './VAvatar-BZtC_Qdy.mjs';
import './VCheckboxBtn-JiRxhpjI.mjs';
import './VLabel-CtbqF6Wb.mjs';
import './VInput-X9CvPL_3.mjs';
import './index-D38G6C1I.mjs';
import './form-CtAJx0Pr.mjs';
import './VField-DIVOjxLA.mjs';
import './easing-CuhD-vKF.mjs';
import './forwardRefs-BSTjJZPU.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "page-7",
  __ssrInlineRender: true,
  setup(__props) {
    ref("");
    ref("");
    const micr = ref("");
    const ac = ref("");
    const checkbox = ref(false);
    const checkbox1 = ref(false);
    ref("I LIKE TO OPT-OUT NOMINEE");
    ref("SELECT TRADING EXPERIANCE");
    ref("SELECT OCCUPATION");
    ref("SELECT ANNUAL INCOME");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, mergeProps({ class: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Bank Details" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "12",
                                class: "text-sm"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="mname"${_scopeId5}>BANK ACCOUNT TYPE </label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "mname" }, "BANK ACCOUNT TYPE ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "12",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "mname" }, "BANK ACCOUNT TYPE ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, { class: "px-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6",
                                class: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardText, { class: "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "2",
                                                        class: "px-5"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VCheckbox, {
                                                              modelValue: unref(checkbox),
                                                              "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VCheckbox, {
                                                                modelValue: unref(checkbox),
                                                                "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "10",
                                                        class: "my-2"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<label for=""${_scopeId9}>SAVINGS</label>`);
                                                          } else {
                                                            return [
                                                              createVNode("label", { for: "" }, "SAVINGS")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, {
                                                          cols: "2",
                                                          class: "px-5"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VCheckbox, {
                                                              modelValue: unref(checkbox),
                                                              "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "10",
                                                          class: "my-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("label", { for: "" }, "SAVINGS")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, {
                                                        cols: "2",
                                                        class: "px-5"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VCheckbox, {
                                                            modelValue: unref(checkbox),
                                                            "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "10",
                                                        class: "my-2"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("label", { for: "" }, "SAVINGS")
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardText, { class: "" }, {
                                              default: withCtx(() => [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, {
                                                      cols: "2",
                                                      class: "px-5"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VCheckbox, {
                                                          modelValue: unref(checkbox),
                                                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "10",
                                                      class: "my-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("label", { for: "" }, "SAVINGS")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCard, null, {
                                        default: withCtx(() => [
                                          createVNode(VCardText, { class: "" }, {
                                            default: withCtx(() => [
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, {
                                                    cols: "2",
                                                    class: "px-5"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCheckbox, {
                                                        modelValue: unref(checkbox),
                                                        "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "10",
                                                    class: "my-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("label", { for: "" }, "SAVINGS")
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6",
                                class: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardText, { class: "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "2",
                                                        class: "px-5"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VCheckbox, {
                                                              modelValue: unref(checkbox1),
                                                              "onUpdate:modelValue": ($event) => isRef(checkbox1) ? checkbox1.value = $event : null
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VCheckbox, {
                                                                modelValue: unref(checkbox1),
                                                                "onUpdate:modelValue": ($event) => isRef(checkbox1) ? checkbox1.value = $event : null
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "10",
                                                        class: "my-2"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<label for=""${_scopeId9}>CURRENT</label>`);
                                                          } else {
                                                            return [
                                                              createVNode("label", { for: "" }, "CURRENT")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, {
                                                          cols: "2",
                                                          class: "px-5"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VCheckbox, {
                                                              modelValue: unref(checkbox1),
                                                              "onUpdate:modelValue": ($event) => isRef(checkbox1) ? checkbox1.value = $event : null
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "10",
                                                          class: "my-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("label", { for: "" }, "CURRENT")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, {
                                                        cols: "2",
                                                        class: "px-5"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VCheckbox, {
                                                            modelValue: unref(checkbox1),
                                                            "onUpdate:modelValue": ($event) => isRef(checkbox1) ? checkbox1.value = $event : null
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "10",
                                                        class: "my-2"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("label", { for: "" }, "CURRENT")
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardText, { class: "" }, {
                                              default: withCtx(() => [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, {
                                                      cols: "2",
                                                      class: "px-5"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VCheckbox, {
                                                          modelValue: unref(checkbox1),
                                                          "onUpdate:modelValue": ($event) => isRef(checkbox1) ? checkbox1.value = $event : null
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "10",
                                                      class: "my-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("label", { for: "" }, "CURRENT")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCard, null, {
                                        default: withCtx(() => [
                                          createVNode(VCardText, { class: "" }, {
                                            default: withCtx(() => [
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, {
                                                    cols: "2",
                                                    class: "px-5"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCheckbox, {
                                                        modelValue: unref(checkbox1),
                                                        "onUpdate:modelValue": ($event) => isRef(checkbox1) ? checkbox1.value = $event : null
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "10",
                                                    class: "my-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("label", { for: "" }, "CURRENT")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, null, {
                                      default: withCtx(() => [
                                        createVNode(VCardText, { class: "" }, {
                                          default: withCtx(() => [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "2",
                                                  class: "px-5"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VCheckbox, {
                                                      modelValue: unref(checkbox),
                                                      "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "10",
                                                  class: "my-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("label", { for: "" }, "SAVINGS")
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
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, null, {
                                      default: withCtx(() => [
                                        createVNode(VCardText, { class: "" }, {
                                          default: withCtx(() => [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "2",
                                                  class: "px-5"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VCheckbox, {
                                                      modelValue: unref(checkbox1),
                                                      "onUpdate:modelValue": ($event) => isRef(checkbox1) ? checkbox1.value = $event : null
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "10",
                                                  class: "my-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("label", { for: "" }, "CURRENT")
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "12",
                          class: "text-sm mt-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<label for="mname"${_scopeId4}>IFSC CODE (Find my ifsc code)</label>`);
                            } else {
                              return [
                                createVNode("label", { for: "mname" }, "IFSC CODE (Find my ifsc code)")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "12"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, { class: "px-3" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "11",
                                      cols: "9"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            label: "Include files",
                                            placeholder: "Placeholder Text"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              label: "Include files",
                                              placeholder: "Placeholder Text"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      sm: "1",
                                      cols: "1",
                                      class: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            type: "submit",
                                            class: "text-sm py-5 my-1 d-flex justify-center text-center items-center",
                                            rounded: "none"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` GO `);
                                              } else {
                                                return [
                                                  createTextVNode(" GO ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              type: "submit",
                                              class: "text-sm py-5 my-1 d-flex justify-center text-center items-center",
                                              rounded: "none"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" GO ")
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
                                      createVNode(VCol, {
                                        sm: "11",
                                        cols: "9"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Include files",
                                            placeholder: "Placeholder Text"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        sm: "1",
                                        cols: "1",
                                        class: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            type: "submit",
                                            class: "text-sm py-5 my-1 d-flex justify-center text-center items-center",
                                            rounded: "none"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" GO ")
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
                            } else {
                              return [
                                createVNode(VRow, { class: "px-3" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      sm: "11",
                                      cols: "9"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Include files",
                                          placeholder: "Placeholder Text"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      sm: "1",
                                      cols: "1",
                                      class: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          type: "submit",
                                          class: "text-sm py-5 my-1 d-flex justify-center text-center items-center",
                                          rounded: "none"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" GO ")
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "12",
                                class: "text-sm"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="micr"${_scopeId5}>MICR CODE (Find my micr code)</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "micr" }, "MICR CODE (Find my micr code)")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "12",
                                class: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "micr",
                                      modelValue: unref(micr),
                                      "onUpdate:modelValue": ($event) => isRef(micr) ? micr.value = $event : null,
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "micr",
                                        modelValue: unref(micr),
                                        "onUpdate:modelValue": ($event) => isRef(micr) ? micr.value = $event : null,
                                        "persistent-placeholder": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "12",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "micr" }, "MICR CODE (Find my micr code)")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "12",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "micr",
                                      modelValue: unref(micr),
                                      "onUpdate:modelValue": ($event) => isRef(micr) ? micr.value = $event : null,
                                      "persistent-placeholder": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "12",
                                class: "text-sm"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="mname"${_scopeId5}>BANK NAME &amp; FULL ADDRESS</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "mname" }, "BANK NAME & FULL ADDRESS")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextarea, { placeholder: "Placeholder Text" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextarea, { placeholder: "Placeholder Text" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "12",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "mname" }, "BANK NAME & FULL ADDRESS")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextarea, { placeholder: "Placeholder Text" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "12",
                                class: "text-sm"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="ac"${_scopeId5}>ACCOUNT NUMBER</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "ac" }, "ACCOUNT NUMBER")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "12",
                                class: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "ac",
                                      modelValue: unref(ac),
                                      "onUpdate:modelValue": ($event) => isRef(ac) ? ac.value = $event : null,
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "ac",
                                        modelValue: unref(ac),
                                        "onUpdate:modelValue": ($event) => isRef(ac) ? ac.value = $event : null,
                                        "persistent-placeholder": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "12",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "ac" }, "ACCOUNT NUMBER")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "12",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "ac",
                                      modelValue: unref(ac),
                                      "onUpdate:modelValue": ($event) => isRef(ac) ? ac.value = $event : null,
                                      "persistent-placeholder": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                type: "submit"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` NEXT STEP `);
                                  } else {
                                    return [
                                      createTextVNode(" NEXT STEP ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  block: "",
                                  type: "submit"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" NEXT STEP ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                color: "secondary",
                                type: "reset",
                                variant: "outlined"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Back to Previous `);
                                  } else {
                                    return [
                                      createTextVNode(" Back to Previous ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  block: "",
                                  color: "secondary",
                                  type: "reset",
                                  variant: "outlined"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Back to Previous ")
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
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "12",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { for: "mname" }, "BANK ACCOUNT TYPE ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, { class: "px-4" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, null, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, { class: "" }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "2",
                                                class: "px-5"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCheckbox, {
                                                    modelValue: unref(checkbox),
                                                    "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "10",
                                                class: "my-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("label", { for: "" }, "SAVINGS")
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
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, null, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, { class: "" }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "2",
                                                class: "px-5"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCheckbox, {
                                                    modelValue: unref(checkbox1),
                                                    "onUpdate:modelValue": ($event) => isRef(checkbox1) ? checkbox1.value = $event : null
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "10",
                                                class: "my-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("label", { for: "" }, "CURRENT")
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
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "12",
                            class: "text-sm mt-2"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "mname" }, "IFSC CODE (Find my ifsc code)")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, { class: "px-3" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    sm: "11",
                                    cols: "9"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Include files",
                                        placeholder: "Placeholder Text"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    sm: "1",
                                    cols: "1",
                                    class: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        type: "submit",
                                        class: "text-sm py-5 my-1 d-flex justify-center text-center items-center",
                                        rounded: "none"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" GO ")
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
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "12",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { for: "micr" }, "MICR CODE (Find my micr code)")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "12",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "micr",
                                    modelValue: unref(micr),
                                    "onUpdate:modelValue": ($event) => isRef(micr) ? micr.value = $event : null,
                                    "persistent-placeholder": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
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
                                  createVNode("label", { for: "mname" }, "BANK NAME & FULL ADDRESS")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextarea, { placeholder: "Placeholder Text" })
                                ]),
                                _: 1
                              })
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
                                  createVNode("label", { for: "ac" }, "ACCOUNT NUMBER")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "12",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "ac",
                                    modelValue: unref(ac),
                                    "onUpdate:modelValue": ($event) => isRef(ac) ? ac.value = $event : null,
                                    "persistent-placeholder": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                type: "submit"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" NEXT STEP ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                color: "secondary",
                                type: "reset",
                                variant: "outlined"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Back to Previous ")
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
                    createVNode(VCard, { title: "Bank Details" }, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "12",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "mname" }, "BANK ACCOUNT TYPE ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, { class: "px-4" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "6",
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, null, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, { class: "" }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "2",
                                              class: "px-5"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCheckbox, {
                                                  modelValue: unref(checkbox),
                                                  "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "10",
                                              class: "my-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("label", { for: "" }, "SAVINGS")
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
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "6",
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, null, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, { class: "" }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "2",
                                              class: "px-5"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCheckbox, {
                                                  modelValue: unref(checkbox1),
                                                  "onUpdate:modelValue": ($event) => isRef(checkbox1) ? checkbox1.value = $event : null
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "10",
                                              class: "my-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("label", { for: "" }, "CURRENT")
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
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "12",
                          class: "text-sm mt-2"
                        }, {
                          default: withCtx(() => [
                            createVNode("label", { for: "mname" }, "IFSC CODE (Find my ifsc code)")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(VRow, { class: "px-3" }, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  sm: "11",
                                  cols: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      label: "Include files",
                                      placeholder: "Placeholder Text"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  sm: "1",
                                  cols: "1",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      type: "submit",
                                      class: "text-sm py-5 my-1 d-flex justify-center text-center items-center",
                                      rounded: "none"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" GO ")
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
                        }),
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "12",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "micr" }, "MICR CODE (Find my micr code)")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "12",
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "micr",
                                  modelValue: unref(micr),
                                  "onUpdate:modelValue": ($event) => isRef(micr) ? micr.value = $event : null,
                                  "persistent-placeholder": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
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
                                createVNode("label", { for: "mname" }, "BANK NAME & FULL ADDRESS")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextarea, { placeholder: "Placeholder Text" })
                              ]),
                              _: 1
                            })
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
                                createVNode("label", { for: "ac" }, "ACCOUNT NUMBER")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "12",
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "ac",
                                  modelValue: unref(ac),
                                  "onUpdate:modelValue": ($event) => isRef(ac) ? ac.value = $event : null,
                                  "persistent-placeholder": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              type: "submit"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" NEXT STEP ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              color: "secondary",
                              type: "reset",
                              variant: "outlined"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Back to Previous ")
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
                  createVNode(VCard, { title: "Bank Details" }, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "12",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "mname" }, "BANK ACCOUNT TYPE ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { class: "px-4" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6",
                            class: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, null, {
                                default: withCtx(() => [
                                  createVNode(VCardText, { class: "" }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "2",
                                            class: "px-5"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                modelValue: unref(checkbox),
                                                "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "10",
                                            class: "my-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("label", { for: "" }, "SAVINGS")
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
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6",
                            class: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, null, {
                                default: withCtx(() => [
                                  createVNode(VCardText, { class: "" }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "2",
                                            class: "px-5"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                modelValue: unref(checkbox1),
                                                "onUpdate:modelValue": ($event) => isRef(checkbox1) ? checkbox1.value = $event : null
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "10",
                                            class: "my-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("label", { for: "" }, "CURRENT")
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
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "12",
                        class: "text-sm mt-2"
                      }, {
                        default: withCtx(() => [
                          createVNode("label", { for: "mname" }, "IFSC CODE (Find my ifsc code)")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(VRow, { class: "px-3" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                sm: "11",
                                cols: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    label: "Include files",
                                    placeholder: "Placeholder Text"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                sm: "1",
                                cols: "1",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    type: "submit",
                                    class: "text-sm py-5 my-1 d-flex justify-center text-center items-center",
                                    rounded: "none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" GO ")
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
                      }),
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "12",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "micr" }, "MICR CODE (Find my micr code)")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "12",
                            class: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "micr",
                                modelValue: unref(micr),
                                "onUpdate:modelValue": ($event) => isRef(micr) ? micr.value = $event : null,
                                "persistent-placeholder": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
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
                              createVNode("label", { for: "mname" }, "BANK NAME & FULL ADDRESS")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextarea, { placeholder: "Placeholder Text" })
                            ]),
                            _: 1
                          })
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
                              createVNode("label", { for: "ac" }, "ACCOUNT NUMBER")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "12",
                            class: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "ac",
                                modelValue: unref(ac),
                                "onUpdate:modelValue": ($event) => isRef(ac) ? ac.value = $event : null,
                                "persistent-placeholder": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" NEXT STEP ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            color: "secondary",
                            type: "reset",
                            variant: "outlined"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Back to Previous ")
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-7.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
