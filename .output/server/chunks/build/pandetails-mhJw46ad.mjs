import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, a as VBtn } from './server.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VTextField } from './VTextField-BsyoThCd.mjs';
import { V as VCheckbox } from './VCheckbox-BI5TDaTk.mjs';
import { V as VDialog } from './VDialog-rjqrpDhf.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
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
import './VField-DIVOjxLA.mjs';
import './index-D38G6C1I.mjs';
import './VLabel-CtbqF6Wb.mjs';
import './VInput-X9CvPL_3.mjs';
import './form-CtAJx0Pr.mjs';
import './easing-CuhD-vKF.mjs';
import './forwardRefs-BSTjJZPU.mjs';
import './VCheckboxBtn-JiRxhpjI.mjs';
import './VOverlay-CsNFlnFM.mjs';
import './lazy-BteLhbse.mjs';
import './dialog-transition-CRChXgJR.mjs';
import './VAvatar-BZtC_Qdy.mjs';

const _sfc_main = {
  data() {
    return {
      panNumber: "",
      checkbox: false,
      checkbox1: false,
      isDialogVisible: false,
      emailErrors: [],
      solidCardData: [
        {
          cardBg: "#8C57FF",
          title: "Facebook Card",
          icon: "ri-facebook-circle-line",
          text: "You've read about the importance of being courageous, rebellious and imaginative. These are all vital ingredients.",
          avatarName: "Eugene Clarke",
          likes: "3.2k",
          share: "49"
        }
      ]
    };
  },
  methods: {
    proceed() {
      if (this.checkbox == true && this.checkbox1 == true && this.panNumber != "") {
        this.isDialogVisible = true;
      } else {
        this.emailErrors.push("enter PAN Number");
      }
    },
    open() {
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
              _push3(ssrRenderComponent(VCol, { class: "font-bold text-lg py-1" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Fill Your PAN Details`);
                  } else {
                    return [
                      createTextVNode("Fill Your PAN Details")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, { class: "py-1" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`);
                  } else {
                    return [
                      createTextVNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                class: "py-1 px-1"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "12",
                      class: "text-sm"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<label for="panNumber"${_scopeId4}>Enter PAN</label>`);
                        } else {
                          return [
                            createVNode("label", { for: "panNumber" }, "Enter PAN")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            id: "panNumber",
                            modelValue: $data.panNumber,
                            "onUpdate:modelValue": ($event) => $data.panNumber = $event,
                            placeholder: "fewyge3674",
                            "persistent-placeholder": "",
                            "error-messages": $data.emailErrors
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              id: "panNumber",
                              modelValue: $data.panNumber,
                              "onUpdate:modelValue": ($event) => $data.panNumber = $event,
                              placeholder: "fewyge3674",
                              "persistent-placeholder": "",
                              "error-messages": $data.emailErrors
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, {
                        cols: "12",
                        md: "12",
                        class: "text-sm"
                      }, {
                        default: withCtx(() => [
                          createVNode("label", { for: "panNumber" }, "Enter PAN")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            id: "panNumber",
                            modelValue: $data.panNumber,
                            "onUpdate:modelValue": ($event) => $data.panNumber = $event,
                            placeholder: "fewyge3674",
                            "persistent-placeholder": "",
                            "error-messages": $data.emailErrors
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, { class: "" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VRow, { cols: "12" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, { cols: "1" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCheckbox, {
                                  modelValue: this.checkbox,
                                  "onUpdate:modelValue": ($event) => this.checkbox = $event
                                }, null, _parent6, _scopeId5));
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
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, {
                            cols: "11",
                            class: "mt-2 text-justify"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`I agree Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis molestias necessitatibus. Dolores dolor reiciendis, consequuntur laborum, eum illo suscipit! Id.`);
                              } else {
                                return [
                                  createTextVNode("I agree Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis molestias necessitatibus. Dolores dolor reiciendis, consequuntur laborum, eum illo suscipit! Id.")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
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
                                createTextVNode("I agree Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis molestias necessitatibus. Dolores dolor reiciendis, consequuntur laborum, eum illo suscipit! Id.")
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
                              createTextVNode("I agree Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis molestias necessitatibus. Dolores dolor reiciendis, consequuntur laborum, eum illo suscipit! Id.")
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
              _push3(ssrRenderComponent(VCol, { class: "" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VRow, { cols: "12" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, { cols: "1" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCheckbox, {
                                  modelValue: this.checkbox1,
                                  "onUpdate:modelValue": ($event) => this.checkbox1 = $event
                                }, null, _parent6, _scopeId5));
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
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, {
                            cols: "11",
                            class: "mt-2 text-justify"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`I agree Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis molestias ..`);
                              } else {
                                return [
                                  createTextVNode("I agree Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis molestias ..")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
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
                                createTextVNode("I agree Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis molestias ..")
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
                              createTextVNode("I agree Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis molestias ..")
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
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                class: "pt-5"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VBtn, {
                      block: "",
                      type: "submit",
                      onClick: $options.proceed
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` PROCEED `);
                        } else {
                          return [
                            createTextVNode(" PROCEED ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VBtn, {
                        block: "",
                        type: "submit",
                        onClick: $options.proceed
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" PROCEED ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VDialog, {
                modelValue: $data.isDialogVisible,
                "onUpdate:modelValue": ($event) => $data.isDialogVisible = $event,
                width: "500"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, { class: "py-3" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, { class: "text-xl font-bold text-black d-flex justify-center py-1" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Proceed With PAN`);
                              } else {
                                return [
                                  createTextVNode("Proceed With PAN")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, { class: "text-xl font-bold text-black d-flex justify-center py-1" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`AURTDDSJ3243VNDSF`);
                              } else {
                                return [
                                  createTextVNode("AURTDDSJ3243VNDSF")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, { class: "d-flex justify-center text-center items-center py-1" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum minus animi blanditiis sit quae quod expedita totam rerum, magnam iste nam, accusantium officiis quis quaerat iure ea voluptatibus dignissimos nisi! `);
                              } else {
                                return [
                                  createTextVNode(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum minus animi blanditiis sit quae quod expedita totam rerum, magnam iste nam, accusantium officiis quis quaerat iure ea voluptatibus dignissimos nisi! ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VBtn, {
                                  block: "",
                                  type: "submit",
                                  to: "/panupload"
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
                                    to: "/panupload"
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
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            class: "pb-12"
                          }, {
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
                                      _push7(` CHANGE PAN `);
                                    } else {
                                      return [
                                        createTextVNode(" CHANGE PAN ")
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
                                      createTextVNode(" CHANGE PAN ")
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
                            createVNode(VCol, { class: "text-xl font-bold text-black d-flex justify-center py-1" }, {
                              default: withCtx(() => [
                                createTextVNode("Proceed With PAN")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { class: "text-xl font-bold text-black d-flex justify-center py-1" }, {
                              default: withCtx(() => [
                                createTextVNode("AURTDDSJ3243VNDSF")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { class: "d-flex justify-center text-center items-center py-1" }, {
                              default: withCtx(() => [
                                createTextVNode(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum minus animi blanditiis sit quae quod expedita totam rerum, magnam iste nam, accusantium officiis quis quaerat iure ea voluptatibus dignissimos nisi! ")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  type: "submit",
                                  to: "/panupload"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" PROCEED ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              class: "pb-12"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  color: "secondary",
                                  type: "reset",
                                  variant: "outlined"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" CHANGE PAN ")
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
                      createVNode(VCard, { class: "py-3" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { class: "text-xl font-bold text-black d-flex justify-center py-1" }, {
                            default: withCtx(() => [
                              createTextVNode("Proceed With PAN")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { class: "text-xl font-bold text-black d-flex justify-center py-1" }, {
                            default: withCtx(() => [
                              createTextVNode("AURTDDSJ3243VNDSF")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { class: "d-flex justify-center text-center items-center py-1" }, {
                            default: withCtx(() => [
                              createTextVNode(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum minus animi blanditiis sit quae quod expedita totam rerum, magnam iste nam, accusantium officiis quis quaerat iure ea voluptatibus dignissimos nisi! ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                type: "submit",
                                to: "/panupload"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" PROCEED ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "pb-12"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                color: "secondary",
                                type: "reset",
                                variant: "outlined"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" CHANGE PAN ")
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
                createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                  default: withCtx(() => [
                    createTextVNode("Fill Your PAN Details")
                  ]),
                  _: 1
                }),
                createVNode(VCol, { class: "py-1" }, {
                  default: withCtx(() => [
                    createTextVNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  class: "py-1 px-1"
                }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      md: "12",
                      class: "text-sm"
                    }, {
                      default: withCtx(() => [
                        createVNode("label", { for: "panNumber" }, "Enter PAN")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          id: "panNumber",
                          modelValue: $data.panNumber,
                          "onUpdate:modelValue": ($event) => $data.panNumber = $event,
                          placeholder: "fewyge3674",
                          "persistent-placeholder": "",
                          "error-messages": $data.emailErrors
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
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
                            createTextVNode("I agree Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis molestias necessitatibus. Dolores dolor reiciendis, consequuntur laborum, eum illo suscipit! Id.")
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
                            createTextVNode("I agree Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis molestias ..")
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
                  class: "pt-5"
                }, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      block: "",
                      type: "submit",
                      onClick: $options.proceed
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" PROCEED ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                }),
                createVNode(VDialog, {
                  modelValue: $data.isDialogVisible,
                  "onUpdate:modelValue": ($event) => $data.isDialogVisible = $event,
                  width: "500"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, { class: "py-3" }, {
                      default: withCtx(() => [
                        createVNode(VCol, { class: "text-xl font-bold text-black d-flex justify-center py-1" }, {
                          default: withCtx(() => [
                            createTextVNode("Proceed With PAN")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { class: "text-xl font-bold text-black d-flex justify-center py-1" }, {
                          default: withCtx(() => [
                            createTextVNode("AURTDDSJ3243VNDSF")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { class: "d-flex justify-center text-center items-center py-1" }, {
                          default: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum minus animi blanditiis sit quae quod expedita totam rerum, magnam iste nam, accusantium officiis quis quaerat iure ea voluptatibus dignissimos nisi! ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              type: "submit",
                              to: "/panupload"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" PROCEED ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          class: "pb-12"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              color: "secondary",
                              type: "reset",
                              variant: "outlined"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" CHANGE PAN ")
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
                }, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                default: withCtx(() => [
                  createTextVNode("Fill Your PAN Details")
                ]),
                _: 1
              }),
              createVNode(VCol, { class: "py-1" }, {
                default: withCtx(() => [
                  createTextVNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                class: "py-1 px-1"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "12",
                    class: "text-sm"
                  }, {
                    default: withCtx(() => [
                      createVNode("label", { for: "panNumber" }, "Enter PAN")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        id: "panNumber",
                        modelValue: $data.panNumber,
                        "onUpdate:modelValue": ($event) => $data.panNumber = $event,
                        placeholder: "fewyge3674",
                        "persistent-placeholder": "",
                        "error-messages": $data.emailErrors
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
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
                          createTextVNode("I agree Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis molestias necessitatibus. Dolores dolor reiciendis, consequuntur laborum, eum illo suscipit! Id.")
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
                          createTextVNode("I agree Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis molestias ..")
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
                class: "pt-5"
              }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    block: "",
                    type: "submit",
                    onClick: $options.proceed
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" PROCEED ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(VDialog, {
                modelValue: $data.isDialogVisible,
                "onUpdate:modelValue": ($event) => $data.isDialogVisible = $event,
                width: "500"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "py-3" }, {
                    default: withCtx(() => [
                      createVNode(VCol, { class: "text-xl font-bold text-black d-flex justify-center py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("Proceed With PAN")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "text-xl font-bold text-black d-flex justify-center py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("AURTDDSJ3243VNDSF")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "d-flex justify-center text-center items-center py-1" }, {
                        default: withCtx(() => [
                          createTextVNode(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum minus animi blanditiis sit quae quod expedita totam rerum, magnam iste nam, accusantium officiis quis quaerat iure ea voluptatibus dignissimos nisi! ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            type: "submit",
                            to: "/panupload"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" PROCEED ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "pb-12"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            color: "secondary",
                            type: "reset",
                            variant: "outlined"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" CHANGE PAN ")
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
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pandetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pandetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { pandetails as default };
