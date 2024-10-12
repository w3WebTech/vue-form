import { defineComponent, ref, mergeProps, withCtx, createVNode, unref, isRef, openBlock, createBlock, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard, a as VCardText } from './VCard-BCzimUKB.mjs';
import { V as VCombobox } from './VCombobox-DmKMa0v_.mjs';
import { V as VTextarea } from './VTextarea-DId7pJKv.mjs';
import { V as VTextField } from './VTextField-BsyoThCd.mjs';
import { a as VBtn } from './server.mjs';
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
import './VLabel-CtbqF6Wb.mjs';
import './VField-DIVOjxLA.mjs';
import './VInput-X9CvPL_3.mjs';
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
  __name: "page-5",
  __ssrInlineRender: true,
  setup(__props) {
    ref("");
    const mname = ref("");
    ref("");
    ref("");
    ref(false);
    ref("MARRIED");
    const selecteddata = ref("INDIAN");
    const datas = ["INDIAN", "APRICAN"];
    ref(false);
    ref(true);
    ref("Password");
    ref("wqfasds");
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
                  _push3(ssrRenderComponent(VCard, { title: "YOUR ADDRESS DETAILS" }, {
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
                                    _push6(`<label for="mname"${_scopeId5}>NATIONALITY</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "mname" }, "NATIONALITY")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCombobox, {
                                      modelValue: unref(selecteddata),
                                      "onUpdate:modelValue": ($event) => isRef(selecteddata) ? selecteddata.value = $event : null,
                                      items: datas,
                                      placeholder: "deployment"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCombobox, {
                                        modelValue: unref(selecteddata),
                                        "onUpdate:modelValue": ($event) => isRef(selecteddata) ? selecteddata.value = $event : null,
                                        items: datas,
                                        placeholder: "deployment"
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
                                    createVNode("label", { for: "mname" }, "NATIONALITY")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VCombobox, {
                                      modelValue: unref(selecteddata),
                                      "onUpdate:modelValue": ($event) => isRef(selecteddata) ? selecteddata.value = $event : null,
                                      items: datas,
                                      placeholder: "deployment"
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
                                    _push6(`<label for="mname"${_scopeId5}>PERMANENT ADDRESS FROM DIGILOCKER</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "mname" }, "PERMANENT ADDRESS FROM DIGILOCKER")
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
                                    createVNode("label", { for: "mname" }, "PERMANENT ADDRESS FROM DIGILOCKER")
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
                                    _push6(`<label for="mname"${_scopeId5}>CITY / AREA</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "mname" }, "CITY / AREA")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "mname",
                                      modelValue: unref(mname),
                                      "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                      placeholder: "dindigul",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "mname",
                                        modelValue: unref(mname),
                                        "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                        placeholder: "dindigul",
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
                                    createVNode("label", { for: "mname" }, "CITY / AREA")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "mname",
                                      modelValue: unref(mname),
                                      "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                      placeholder: "dindigul",
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
                        _push4(ssrRenderComponent(VRow, { class: "px-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="mname"${_scopeId5}>STATE</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "mname" }, "STATE")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="mname"${_scopeId5}>PINCODE</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "mname" }, "PINCODE")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "mname" }, "STATE")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "mname" }, "PINCODE")
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
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "mname",
                                      modelValue: unref(mname),
                                      "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                      placeholder: "TAMIL NADU",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "mname",
                                        modelValue: unref(mname),
                                        "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                        placeholder: "TAMIL NADU",
                                        "persistent-placeholder": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "mname",
                                      modelValue: unref(mname),
                                      "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                      placeholder: "613601",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "mname",
                                        modelValue: unref(mname),
                                        "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                        placeholder: "613601",
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
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "mname",
                                      modelValue: unref(mname),
                                      "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                      placeholder: "TAMIL NADU",
                                      "persistent-placeholder": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "mname",
                                      modelValue: unref(mname),
                                      "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                      placeholder: "613601",
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
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "my-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, { class: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "2" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCardText, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8C57FF" class="size-6"${_scopeId8}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"${_scopeId8}></path></svg>`);
                                                    } else {
                                                      return [
                                                        (openBlock(), createBlock("svg", {
                                                          xmlns: "http://www.w3.org/2000/svg",
                                                          fill: "none",
                                                          viewBox: "0 0 24 24",
                                                          "stroke-width": "1.5",
                                                          stroke: "#8C57FF",
                                                          class: "size-6"
                                                        }, [
                                                          createVNode("path", {
                                                            "stroke-linecap": "round",
                                                            "stroke-linejoin": "round",
                                                            d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                          })
                                                        ]))
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCardText, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        "stroke-width": "1.5",
                                                        stroke: "#8C57FF",
                                                        class: "size-6"
                                                      }, [
                                                        createVNode("path", {
                                                          "stroke-linecap": "round",
                                                          "stroke-linejoin": "round",
                                                          d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                        })
                                                      ]))
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "10" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCardText, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="text-[#8C57FF] font-bold text-xs mt-1"${_scopeId8}> COMMUNICATION SANE AS PERMANENT ADDRESS </div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, " COMMUNICATION SANE AS PERMANENT ADDRESS ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCardText, null, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, " COMMUNICATION SANE AS PERMANENT ADDRESS ")
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
                                            createVNode(VCol, { cols: "2" }, {
                                              default: withCtx(() => [
                                                createVNode(VCardText, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock("svg", {
                                                      xmlns: "http://www.w3.org/2000/svg",
                                                      fill: "none",
                                                      viewBox: "0 0 24 24",
                                                      "stroke-width": "1.5",
                                                      stroke: "#8C57FF",
                                                      class: "size-6"
                                                    }, [
                                                      createVNode("path", {
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                      })
                                                    ]))
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "10" }, {
                                              default: withCtx(() => [
                                                createVNode(VCardText, null, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, " COMMUNICATION SANE AS PERMANENT ADDRESS ")
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
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "2" }, {
                                            default: withCtx(() => [
                                              createVNode(VCardText, null, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    "stroke-width": "1.5",
                                                    stroke: "#8C57FF",
                                                    class: "size-6"
                                                  }, [
                                                    createVNode("path", {
                                                      "stroke-linecap": "round",
                                                      "stroke-linejoin": "round",
                                                      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                    })
                                                  ]))
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "10" }, {
                                            default: withCtx(() => [
                                              createVNode(VCardText, null, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, " COMMUNICATION SANE AS PERMANENT ADDRESS ")
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
                                createVNode(VCard, { class: "" }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "2" }, {
                                          default: withCtx(() => [
                                            createVNode(VCardText, null, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock("svg", {
                                                  xmlns: "http://www.w3.org/2000/svg",
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  "stroke-width": "1.5",
                                                  stroke: "#8C57FF",
                                                  class: "size-6"
                                                }, [
                                                  createVNode("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                  })
                                                ]))
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "10" }, {
                                          default: withCtx(() => [
                                            createVNode(VCardText, null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, " COMMUNICATION SANE AS PERMANENT ADDRESS ")
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
                                  createVNode("label", { for: "mname" }, "NATIONALITY")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VCombobox, {
                                    modelValue: unref(selecteddata),
                                    "onUpdate:modelValue": ($event) => isRef(selecteddata) ? selecteddata.value = $event : null,
                                    items: datas,
                                    placeholder: "deployment"
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
                                  createVNode("label", { for: "mname" }, "PERMANENT ADDRESS FROM DIGILOCKER")
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
                                  createVNode("label", { for: "mname" }, "CITY / AREA")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "mname",
                                    modelValue: unref(mname),
                                    "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                    placeholder: "dindigul",
                                    "persistent-placeholder": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { for: "mname" }, "STATE")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { for: "mname" }, "PINCODE")
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
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "mname",
                                    modelValue: unref(mname),
                                    "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                    placeholder: "TAMIL NADU",
                                    "persistent-placeholder": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "mname",
                                    modelValue: unref(mname),
                                    "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                    placeholder: "613601",
                                    "persistent-placeholder": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "my-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { class: "" }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "2" }, {
                                        default: withCtx(() => [
                                          createVNode(VCardText, null, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                "stroke-width": "1.5",
                                                stroke: "#8C57FF",
                                                class: "size-6"
                                              }, [
                                                createVNode("path", {
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                })
                                              ]))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "10" }, {
                                        default: withCtx(() => [
                                          createVNode(VCardText, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, " COMMUNICATION SANE AS PERMANENT ADDRESS ")
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
                    createVNode(VCard, { title: "YOUR ADDRESS DETAILS" }, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "12",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "mname" }, "NATIONALITY")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VCombobox, {
                                  modelValue: unref(selecteddata),
                                  "onUpdate:modelValue": ($event) => isRef(selecteddata) ? selecteddata.value = $event : null,
                                  items: datas,
                                  placeholder: "deployment"
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
                                createVNode("label", { for: "mname" }, "PERMANENT ADDRESS FROM DIGILOCKER")
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
                                createVNode("label", { for: "mname" }, "CITY / AREA")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "mname",
                                  modelValue: unref(mname),
                                  "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                  placeholder: "dindigul",
                                  "persistent-placeholder": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "mname" }, "STATE")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "mname" }, "PINCODE")
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
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "mname",
                                  modelValue: unref(mname),
                                  "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                  placeholder: "TAMIL NADU",
                                  "persistent-placeholder": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "mname",
                                  modelValue: unref(mname),
                                  "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                  placeholder: "613601",
                                  "persistent-placeholder": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          class: "my-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, { class: "" }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "2" }, {
                                      default: withCtx(() => [
                                        createVNode(VCardText, null, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              "stroke-width": "1.5",
                                              stroke: "#8C57FF",
                                              class: "size-6"
                                            }, [
                                              createVNode("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                              })
                                            ]))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "10" }, {
                                      default: withCtx(() => [
                                        createVNode(VCardText, null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, " COMMUNICATION SANE AS PERMANENT ADDRESS ")
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
                  createVNode(VCard, { title: "YOUR ADDRESS DETAILS" }, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "12",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "mname" }, "NATIONALITY")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VCombobox, {
                                modelValue: unref(selecteddata),
                                "onUpdate:modelValue": ($event) => isRef(selecteddata) ? selecteddata.value = $event : null,
                                items: datas,
                                placeholder: "deployment"
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
                              createVNode("label", { for: "mname" }, "PERMANENT ADDRESS FROM DIGILOCKER")
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
                              createVNode("label", { for: "mname" }, "CITY / AREA")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "mname",
                                modelValue: unref(mname),
                                "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                placeholder: "dindigul",
                                "persistent-placeholder": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "mname" }, "STATE")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "mname" }, "PINCODE")
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
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "mname",
                                modelValue: unref(mname),
                                "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                placeholder: "TAMIL NADU",
                                "persistent-placeholder": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "mname",
                                modelValue: unref(mname),
                                "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                placeholder: "613601",
                                "persistent-placeholder": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "my-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, { class: "" }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "2" }, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            "stroke-width": "1.5",
                                            stroke: "#8C57FF",
                                            class: "size-6"
                                          }, [
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                            })
                                          ]))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "10" }, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, " COMMUNICATION SANE AS PERMANENT ADDRESS ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-5.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
