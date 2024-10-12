import { defineComponent, ref, mergeProps, withCtx, createVNode, unref, isRef, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
import { V as VTextField } from './VTextField-BsyoThCd.mjs';
import { V as VCombobox } from './VCombobox-DmKMa0v_.mjs';
import { a as VBtn } from './server.mjs';
import './VAvatar-BZtC_Qdy.mjs';
import './VField-DIVOjxLA.mjs';
import './index-D38G6C1I.mjs';
import './VLabel-CtbqF6Wb.mjs';
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
  __name: "page-4",
  __ssrInlineRender: true,
  setup(__props) {
    const fname = ref("");
    const mname = ref("");
    const gender = ref("");
    ref("");
    ref();
    ref(false);
    const selectedItem = ref("MARRIED");
    const items = ["MARRIED", "SINGLE"];
    const selecteddata = ref("BE");
    const datas = ["BE", "BSC"];
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
                  _push3(ssrRenderComponent(VCard, { title: "YOUR PERSONAL DETAILS" }, {
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
                                    _push6(`<label for="fname"${_scopeId5}>FATHER&#39;S NAME</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "fname" }, "FATHER'S NAME")
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
                                      id: "fname",
                                      modelValue: unref(fname),
                                      "onUpdate:modelValue": ($event) => isRef(fname) ? fname.value = $event : null,
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "fname",
                                        modelValue: unref(fname),
                                        "onUpdate:modelValue": ($event) => isRef(fname) ? fname.value = $event : null,
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
                                    createVNode("label", { for: "fname" }, "FATHER'S NAME")
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
                                      id: "fname",
                                      modelValue: unref(fname),
                                      "onUpdate:modelValue": ($event) => isRef(fname) ? fname.value = $event : null,
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
                                    _push6(`<label for="mname"${_scopeId5}>MOTHER&#39;S NAME</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "mname" }, "MOTHER'S NAME")
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
                                      id: "mname",
                                      modelValue: unref(mname),
                                      "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "mname",
                                        modelValue: unref(mname),
                                        "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
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
                                    createVNode("label", { for: "mname" }, "MOTHER'S NAME")
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
                                      id: "mname",
                                      modelValue: unref(mname),
                                      "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
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
                                    _push6(`<label for="mname"${_scopeId5}>GENDER FROM DIGILOCKER</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "mname" }, "GENDER FROM DIGILOCKER")
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
                                      id: "gender",
                                      modelValue: unref(gender),
                                      "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                      placeholder: "MALE",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "gender",
                                        modelValue: unref(gender),
                                        "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                        placeholder: "MALE",
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
                                    createVNode("label", { for: "mname" }, "GENDER FROM DIGILOCKER")
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
                                      id: "gender",
                                      modelValue: unref(gender),
                                      "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                      placeholder: "MALE",
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
                                    _push6(`<label for="mname"${_scopeId5}>MARRITAL STATUS</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "mname" }, "MARRITAL STATUS")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCombobox, {
                                      modelValue: unref(selectedItem),
                                      "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                                      items,
                                      placeholder: "deployment"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCombobox, {
                                        modelValue: unref(selectedItem),
                                        "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                                        items,
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
                                    createVNode("label", { for: "mname" }, "MARRITAL STATUS")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VCombobox, {
                                      modelValue: unref(selectedItem),
                                      "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                                      items,
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
                                    _push6(`<label for="mname"${_scopeId5}>EDUCATION - QUALIFICATION</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "mname" }, "EDUCATION - QUALIFICATION")
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
                                    createVNode("label", { for: "mname" }, "EDUCATION - QUALIFICATION")
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
                                  createVNode("label", { for: "fname" }, "FATHER'S NAME")
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
                                    id: "fname",
                                    modelValue: unref(fname),
                                    "onUpdate:modelValue": ($event) => isRef(fname) ? fname.value = $event : null,
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
                                  createVNode("label", { for: "mname" }, "MOTHER'S NAME")
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
                                    id: "mname",
                                    modelValue: unref(mname),
                                    "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
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
                                  createVNode("label", { for: "mname" }, "GENDER FROM DIGILOCKER")
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
                                    id: "gender",
                                    modelValue: unref(gender),
                                    "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                    placeholder: "MALE",
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
                                  createVNode("label", { for: "mname" }, "MARRITAL STATUS")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VCombobox, {
                                    modelValue: unref(selectedItem),
                                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                                    items,
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
                                  createVNode("label", { for: "mname" }, "EDUCATION - QUALIFICATION")
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
                    createVNode(VCard, { title: "YOUR PERSONAL DETAILS" }, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "12",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "fname" }, "FATHER'S NAME")
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
                                  id: "fname",
                                  modelValue: unref(fname),
                                  "onUpdate:modelValue": ($event) => isRef(fname) ? fname.value = $event : null,
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
                                createVNode("label", { for: "mname" }, "MOTHER'S NAME")
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
                                  id: "mname",
                                  modelValue: unref(mname),
                                  "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
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
                                createVNode("label", { for: "mname" }, "GENDER FROM DIGILOCKER")
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
                                  id: "gender",
                                  modelValue: unref(gender),
                                  "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                  placeholder: "MALE",
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
                                createVNode("label", { for: "mname" }, "MARRITAL STATUS")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VCombobox, {
                                  modelValue: unref(selectedItem),
                                  "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                                  items,
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
                                createVNode("label", { for: "mname" }, "EDUCATION - QUALIFICATION")
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
                  createVNode(VCard, { title: "YOUR PERSONAL DETAILS" }, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "12",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "fname" }, "FATHER'S NAME")
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
                                id: "fname",
                                modelValue: unref(fname),
                                "onUpdate:modelValue": ($event) => isRef(fname) ? fname.value = $event : null,
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
                              createVNode("label", { for: "mname" }, "MOTHER'S NAME")
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
                                id: "mname",
                                modelValue: unref(mname),
                                "onUpdate:modelValue": ($event) => isRef(mname) ? mname.value = $event : null,
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
                              createVNode("label", { for: "mname" }, "GENDER FROM DIGILOCKER")
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
                                id: "gender",
                                modelValue: unref(gender),
                                "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                placeholder: "MALE",
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
                              createVNode("label", { for: "mname" }, "MARRITAL STATUS")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VCombobox, {
                                modelValue: unref(selectedItem),
                                "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                                items,
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
                              createVNode("label", { for: "mname" }, "EDUCATION - QUALIFICATION")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
