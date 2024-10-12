import { defineComponent, ref, mergeProps, withCtx, createVNode, unref, isRef, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
import { V as VCombobox } from './VCombobox-DmKMa0v_.mjs';
import { a as VBtn } from './server.mjs';
import './VAvatar-BZtC_Qdy.mjs';
import './filter--QOHq2bS.mjs';
import './VTextField-BsyoThCd.mjs';
import './VField-DIVOjxLA.mjs';
import './index-D38G6C1I.mjs';
import './VLabel-CtbqF6Wb.mjs';
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
  __name: "page-9",
  __ssrInlineRender: true,
  setup(__props) {
    const selecteddata = ref("SELECT INCOME PROOF");
    const datas = ["I LIKE TO OPT-OUT NOMINEE", "APRICAN"];
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
                  _push3(ssrRenderComponent(VCard, null, {
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
                                    _push6(`<label for="mname"${_scopeId5}>CHOOSE INCOME PROOF</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "mname" }, "CHOOSE INCOME PROOF")
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
                                    createVNode("label", { for: "mname" }, "CHOOSE INCOME PROOF")
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
                                  createVNode("label", { for: "mname" }, "CHOOSE INCOME PROOF")
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
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "12",
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "mname" }, "CHOOSE INCOME PROOF")
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
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "12",
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "mname" }, "CHOOSE INCOME PROOF")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-9.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
