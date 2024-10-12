import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, isRef, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
import { V as VForm } from './VForm-Avd0ACPh.mjs';
import { V as VTextField } from './VTextField-BsyoThCd.mjs';
import { a as VBtn } from './server.mjs';
import './VAvatar-BZtC_Qdy.mjs';
import './form-CtAJx0Pr.mjs';
import './forwardRefs-BSTjJZPU.mjs';
import './VField-DIVOjxLA.mjs';
import './index-D38G6C1I.mjs';
import './VLabel-CtbqF6Wb.mjs';
import './VInput-X9CvPL_3.mjs';
import './easing-CuhD-vKF.mjs';
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
  __name: "Page-3",
  __ssrInlineRender: true,
  setup(__props) {
    ref("");
    const adhar = ref("");
    ref("");
    const dateofbirth = ref("");
    ref();
    ref(false);
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
                  _push3(ssrRenderComponent(VCard, { title: "PAN DETAILS" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, { onSubmit: () => {
                        } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, { class: "px-5" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "12",
                                      class: "p-[2px]"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VRow, { class: "px-4" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, {
                                                  sm: "11",
                                                  cols: "9"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        label: "Include files",
                                                        placeholder: "Placeholder Text"
                                                      }, null, _parent9, _scopeId8));
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
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  sm: "1",
                                                  cols: "1",
                                                  class: ""
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VBtn, {
                                                        type: "submit",
                                                        class: "text-sm py-5 px-3 my-1 d-flex justify-center items-center text-center",
                                                        rounded: "none"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(` verify `);
                                                          } else {
                                                            return [
                                                              createTextVNode(" verify ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VBtn, {
                                                          type: "submit",
                                                          class: "text-sm py-5 px-3 my-1 d-flex justify-center items-center text-center",
                                                          rounded: "none"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" verify ")
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
                                                        class: "text-sm py-5 px-3 my-1 d-flex justify-center items-center text-center",
                                                        rounded: "none"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" verify ")
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
                                            createVNode(VRow, { class: "px-4" }, {
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
                                                      class: "text-sm py-5 px-3 my-1 d-flex justify-center items-center text-center",
                                                      rounded: "none"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" verify ")
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
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "12",
                                            class: "text-sm"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<label for="dateofbirth"${_scopeId7}>DATE OF BIRTH</label>`);
                                              } else {
                                                return [
                                                  createVNode("label", { for: "dateofbirth" }, "DATE OF BIRTH")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "12",
                                            class: ""
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  id: "dateofbirth",
                                                  modelValue: unref(dateofbirth),
                                                  "onUpdate:modelValue": ($event) => isRef(dateofbirth) ? dateofbirth.value = $event : null,
                                                  placeholder: "DD - MM - YYYY",
                                                  "persistent-placeholder": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    id: "dateofbirth",
                                                    modelValue: unref(dateofbirth),
                                                    "onUpdate:modelValue": ($event) => isRef(dateofbirth) ? dateofbirth.value = $event : null,
                                                    placeholder: "DD - MM - YYYY",
                                                    "persistent-placeholder": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "12",
                                              class: "text-sm"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("label", { for: "dateofbirth" }, "DATE OF BIRTH")
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
                                                  id: "dateofbirth",
                                                  modelValue: unref(dateofbirth),
                                                  "onUpdate:modelValue": ($event) => isRef(dateofbirth) ? dateofbirth.value = $event : null,
                                                  placeholder: "DD - MM - YYYY",
                                                  "persistent-placeholder": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "12",
                                            class: "text-sm"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<label for="adhar"${_scopeId7}>AADHAAR NUMBER (LAST 4 DIGIT)</label>`);
                                              } else {
                                                return [
                                                  createVNode("label", { for: "adhar" }, "AADHAAR NUMBER (LAST 4 DIGIT)")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "12",
                                            class: ""
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  id: "adhar",
                                                  modelValue: unref(adhar),
                                                  "onUpdate:modelValue": ($event) => isRef(adhar) ? adhar.value = $event : null,
                                                  placeholder: "1234 5678 1234",
                                                  "persistent-placeholder": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    id: "adhar",
                                                    modelValue: unref(adhar),
                                                    "onUpdate:modelValue": ($event) => isRef(adhar) ? adhar.value = $event : null,
                                                    placeholder: "1234 5678 1234",
                                                    "persistent-placeholder": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "12",
                                              class: "text-sm"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("label", { for: "adhar" }, "AADHAAR NUMBER (LAST 4 DIGIT)")
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
                                                  id: "adhar",
                                                  modelValue: unref(adhar),
                                                  "onUpdate:modelValue": ($event) => isRef(adhar) ? adhar.value = $event : null,
                                                  placeholder: "1234 5678 1234",
                                                  "persistent-placeholder": ""
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
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "12",
                                        class: "p-[2px]"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, { class: "px-4" }, {
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
                                                    class: "text-sm py-5 px-3 my-1 d-flex justify-center items-center text-center",
                                                    rounded: "none"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" verify ")
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
                                              createVNode("label", { for: "dateofbirth" }, "DATE OF BIRTH")
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
                                                id: "dateofbirth",
                                                modelValue: unref(dateofbirth),
                                                "onUpdate:modelValue": ($event) => isRef(dateofbirth) ? dateofbirth.value = $event : null,
                                                placeholder: "DD - MM - YYYY",
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
                                              createVNode("label", { for: "adhar" }, "AADHAAR NUMBER (LAST 4 DIGIT)")
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
                                                id: "adhar",
                                                modelValue: unref(adhar),
                                                "onUpdate:modelValue": ($event) => isRef(adhar) ? adhar.value = $event : null,
                                                placeholder: "1234 5678 1234",
                                                "persistent-placeholder": ""
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
                            } else {
                              return [
                                createVNode(VRow, { class: "px-5" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "12",
                                      class: "p-[2px]"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, { class: "px-4" }, {
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
                                                  class: "text-sm py-5 px-3 my-1 d-flex justify-center items-center text-center",
                                                  rounded: "none"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" verify ")
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
                                            createVNode("label", { for: "dateofbirth" }, "DATE OF BIRTH")
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
                                              id: "dateofbirth",
                                              modelValue: unref(dateofbirth),
                                              "onUpdate:modelValue": ($event) => isRef(dateofbirth) ? dateofbirth.value = $event : null,
                                              placeholder: "DD - MM - YYYY",
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
                                            createVNode("label", { for: "adhar" }, "AADHAAR NUMBER (LAST 4 DIGIT)")
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
                                              id: "adhar",
                                              modelValue: unref(adhar),
                                              "onUpdate:modelValue": ($event) => isRef(adhar) ? adhar.value = $event : null,
                                              placeholder: "1234 5678 1234",
                                              "persistent-placeholder": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        _push4(ssrRenderComponent(VRow, { class: "my-1 px-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      block: "",
                                      type: "submit",
                                      class: "text-sm"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` FAST MODE <br${_scopeId6}>(via digilocker otp) `);
                                        } else {
                                          return [
                                            createTextVNode(" FAST MODE "),
                                            createVNode("br"),
                                            createTextVNode("(via digilocker otp) ")
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
                                        class: "text-sm"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" FAST MODE "),
                                          createVNode("br"),
                                          createTextVNode("(via digilocker otp) ")
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
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      block: "",
                                      type: "submit",
                                      class: "text-sm"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` NEXT STEP <br${_scopeId6}>(via proof upload) `);
                                        } else {
                                          return [
                                            createTextVNode(" NEXT STEP "),
                                            createVNode("br"),
                                            createTextVNode("(via proof upload) ")
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
                                        class: "text-sm"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" NEXT STEP "),
                                          createVNode("br"),
                                          createTextVNode("(via proof upload) ")
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
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      block: "",
                                      type: "submit",
                                      class: "text-sm"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" FAST MODE "),
                                        createVNode("br"),
                                        createTextVNode("(via digilocker otp) ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      block: "",
                                      type: "submit",
                                      class: "text-sm"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" NEXT STEP "),
                                        createVNode("br"),
                                        createTextVNode("(via proof upload) ")
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
                        _push4(ssrRenderComponent(VRow, { class: "my-1 px-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
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
                                          _push7(` Back to Previous `);
                                        } else {
                                          return [
                                            createTextVNode(" Back to Previous ")
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
                                          createTextVNode(" Back to Previous ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VForm, {
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, { class: "px-5" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "12",
                                    class: "p-[2px]"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, { class: "px-4" }, {
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
                                                class: "text-sm py-5 px-3 my-1 d-flex justify-center items-center text-center",
                                                rounded: "none"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" verify ")
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
                                          createVNode("label", { for: "dateofbirth" }, "DATE OF BIRTH")
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
                                            id: "dateofbirth",
                                            modelValue: unref(dateofbirth),
                                            "onUpdate:modelValue": ($event) => isRef(dateofbirth) ? dateofbirth.value = $event : null,
                                            placeholder: "DD - MM - YYYY",
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
                                          createVNode("label", { for: "adhar" }, "AADHAAR NUMBER (LAST 4 DIGIT)")
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
                                            id: "adhar",
                                            modelValue: unref(adhar),
                                            "onUpdate:modelValue": ($event) => isRef(adhar) ? adhar.value = $event : null,
                                            placeholder: "1234 5678 1234",
                                            "persistent-placeholder": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          createVNode(VRow, { class: "my-1 px-6" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    block: "",
                                    type: "submit",
                                    class: "text-sm"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" FAST MODE "),
                                      createVNode("br"),
                                      createTextVNode("(via digilocker otp) ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    block: "",
                                    type: "submit",
                                    class: "text-sm"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" NEXT STEP "),
                                      createVNode("br"),
                                      createTextVNode("(via proof upload) ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, { class: "my-1 px-6" }, {
                            default: withCtx(() => [
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { title: "PAN DETAILS" }, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          onSubmit: withModifiers(() => {
                          }, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode(VRow, { class: "px-5" }, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "12",
                                  class: "p-[2px]"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, { class: "px-4" }, {
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
                                              class: "text-sm py-5 px-3 my-1 d-flex justify-center items-center text-center",
                                              rounded: "none"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" verify ")
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
                                        createVNode("label", { for: "dateofbirth" }, "DATE OF BIRTH")
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
                                          id: "dateofbirth",
                                          modelValue: unref(dateofbirth),
                                          "onUpdate:modelValue": ($event) => isRef(dateofbirth) ? dateofbirth.value = $event : null,
                                          placeholder: "DD - MM - YYYY",
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
                                        createVNode("label", { for: "adhar" }, "AADHAAR NUMBER (LAST 4 DIGIT)")
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
                                          id: "adhar",
                                          modelValue: unref(adhar),
                                          "onUpdate:modelValue": ($event) => isRef(adhar) ? adhar.value = $event : null,
                                          placeholder: "1234 5678 1234",
                                          "persistent-placeholder": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        createVNode(VRow, { class: "my-1 px-6" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  type: "submit",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" FAST MODE "),
                                    createVNode("br"),
                                    createTextVNode("(via digilocker otp) ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  type: "submit",
                                  class: "text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" NEXT STEP "),
                                    createVNode("br"),
                                    createTextVNode("(via proof upload) ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, { class: "my-1 px-6" }, {
                          default: withCtx(() => [
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "PAN DETAILS" }, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        onSubmit: withModifiers(() => {
                        }, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(VRow, { class: "px-5" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "12",
                                class: "p-[2px]"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, { class: "px-4" }, {
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
                                            class: "text-sm py-5 px-3 my-1 d-flex justify-center items-center text-center",
                                            rounded: "none"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" verify ")
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
                                      createVNode("label", { for: "dateofbirth" }, "DATE OF BIRTH")
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
                                        id: "dateofbirth",
                                        modelValue: unref(dateofbirth),
                                        "onUpdate:modelValue": ($event) => isRef(dateofbirth) ? dateofbirth.value = $event : null,
                                        placeholder: "DD - MM - YYYY",
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
                                      createVNode("label", { for: "adhar" }, "AADHAAR NUMBER (LAST 4 DIGIT)")
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
                                        id: "adhar",
                                        modelValue: unref(adhar),
                                        "onUpdate:modelValue": ($event) => isRef(adhar) ? adhar.value = $event : null,
                                        placeholder: "1234 5678 1234",
                                        "persistent-placeholder": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                      createVNode(VRow, { class: "my-1 px-6" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                type: "submit",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" FAST MODE "),
                                  createVNode("br"),
                                  createTextVNode("(via digilocker otp) ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                type: "submit",
                                class: "text-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" NEXT STEP "),
                                  createVNode("br"),
                                  createTextVNode("(via proof upload) ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { class: "my-1 px-6" }, {
                        default: withCtx(() => [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Page-3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
