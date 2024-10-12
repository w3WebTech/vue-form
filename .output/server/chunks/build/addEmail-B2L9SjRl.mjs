import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, V as VIcon, a as VBtn } from './server.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
import { V as VLabel } from './VLabel-CtbqF6Wb.mjs';
import { V as VTextField } from './VTextField-BsyoThCd.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
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

const _sfc_main = {
  data() {
    return {
      emailAddress: "",
      isValidEmail: false,
      isError: false,
      isMobileNumberValid: false,
      mobileNumber: "",
      emailErrors: []
    };
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.isValidEmail = emailRegex.test(this.emailAddress);
      this.emailErrors = [];
      if (this.isValidEmail == false) {
        this.isError = true;
        this.emailErrors.push("Enter Valid Email");
      } else {
        this.$router.push("/mainpage-2");
      }
    },
    validateMobileNumber() {
      const mobileNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      return mobileNumberRegex.test(this.mobileNumber);
    }
  }
};
const _imports_0 = "" + buildAssetsURL("envelop.D5AtY1lS.jpeg");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IconBtn = resolveComponent("IconBtn");
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
                    _push4(ssrRenderComponent(VRow, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_IconBtn, { class: "" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VIcon, { icon: "ri-arrow-left-line" }, null, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(VIcon, { icon: "ri-arrow-left-line" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_IconBtn, { class: "" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-arrow-left-line" })
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
                                createVNode(_component_IconBtn, { class: "" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-arrow-left-line" })
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
                    _push4(ssrRenderComponent(VRow, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            md: "6",
                            class: "px-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="h-10 w-10"${_scopeId5}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_0,
                                    alt: "",
                                    class: "h-10 w-10"
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
                              class: "px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0,
                                  alt: "",
                                  class: "h-10 w-10"
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VRow, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            md: "6",
                            class: "px-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VLabel, { class: "font-bold text-sm" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Add Email Address`);
                                    } else {
                                      return [
                                        createTextVNode("Add Email Address")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(`<p${_scopeId5}> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br${_scopeId5}>Temporibus fugit alias dignissimos illo repellendus praesentium. </p>`);
                              } else {
                                return [
                                  createVNode(VLabel, { class: "font-bold text-sm" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Add Email Address")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("p", null, [
                                    createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. "),
                                    createVNode("br"),
                                    createTextVNode("Temporibus fugit alias dignissimos illo repellendus praesentium. ")
                                  ])
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
                              class: "px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VLabel, { class: "font-bold text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Add Email Address")
                                  ]),
                                  _: 1
                                }),
                                createVNode("p", null, [
                                  createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. "),
                                  createVNode("br"),
                                  createTextVNode("Temporibus fugit alias dignissimos illo repellendus praesentium. ")
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VRow, { class: "pb-3 px-4" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VTextField, {
                                  modelValue: $data.emailAddress,
                                  "onUpdate:modelValue": ($event) => $data.emailAddress = $event,
                                  "prepend-inner-icon": "ri-mail-line",
                                  label: "Email",
                                  type: "email",
                                  "error-messages": $data.emailErrors,
                                  placeholder: "johndoe@example.com"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VTextField, {
                                    modelValue: $data.emailAddress,
                                    "onUpdate:modelValue": ($event) => $data.emailAddress = $event,
                                    "prepend-inner-icon": "ri-mail-line",
                                    label: "Email",
                                    type: "email",
                                    "error-messages": $data.emailErrors,
                                    placeholder: "johndoe@example.com"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: $data.emailAddress,
                                  "onUpdate:modelValue": ($event) => $data.emailAddress = $event,
                                  "prepend-inner-icon": "ri-mail-line",
                                  label: "Email",
                                  type: "email",
                                  "error-messages": $data.emailErrors,
                                  placeholder: "johndoe@example.com"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
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
                      class: "px-4"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VBtn, {
                            block: "",
                            color: "primary",
                            type: "reset",
                            onClick: $options.validateEmail
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` verify Email Address `);
                              } else {
                                return [
                                  createTextVNode(" verify Email Address ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VBtn, {
                              block: "",
                              color: "primary",
                              type: "reset",
                              onClick: $options.validateEmail
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" verify Email Address ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_IconBtn, { class: "" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-arrow-left-line" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6",
                            class: "px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "",
                                class: "h-10 w-10"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6",
                            class: "px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VLabel, { class: "font-bold text-sm" }, {
                                default: withCtx(() => [
                                  createTextVNode("Add Email Address")
                                ]),
                                _: 1
                              }),
                              createVNode("p", null, [
                                createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. "),
                                createVNode("br"),
                                createTextVNode("Temporibus fugit alias dignissimos illo repellendus praesentium. ")
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { class: "pb-3 px-4" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: $data.emailAddress,
                                "onUpdate:modelValue": ($event) => $data.emailAddress = $event,
                                "prepend-inner-icon": "ri-mail-line",
                                label: "Email",
                                type: "email",
                                "error-messages": $data.emailErrors,
                                placeholder: "johndoe@example.com"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "px-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            color: "primary",
                            type: "reset",
                            onClick: $options.validateEmail
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" verify Email Address ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
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
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_IconBtn, { class: "" }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-arrow-left-line" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "6",
                          class: "px-6"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "",
                              class: "h-10 w-10"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "6",
                          class: "px-6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VLabel, { class: "font-bold text-sm" }, {
                              default: withCtx(() => [
                                createTextVNode("Add Email Address")
                              ]),
                              _: 1
                            }),
                            createVNode("p", null, [
                              createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. "),
                              createVNode("br"),
                              createTextVNode("Temporibus fugit alias dignissimos illo repellendus praesentium. ")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, { class: "pb-3 px-4" }, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: $data.emailAddress,
                              "onUpdate:modelValue": ($event) => $data.emailAddress = $event,
                              "prepend-inner-icon": "ri-mail-line",
                              label: "Email",
                              type: "email",
                              "error-messages": $data.emailErrors,
                              placeholder: "johndoe@example.com"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "px-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          block: "",
                          color: "primary",
                          type: "reset",
                          onClick: $options.validateEmail
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" verify Email Address ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_IconBtn, { class: "" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-arrow-left-line" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "6",
                        class: "px-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "",
                            class: "h-10 w-10"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "6",
                        class: "px-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VLabel, { class: "font-bold text-sm" }, {
                            default: withCtx(() => [
                              createTextVNode("Add Email Address")
                            ]),
                            _: 1
                          }),
                          createVNode("p", null, [
                            createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. "),
                            createVNode("br"),
                            createTextVNode("Temporibus fugit alias dignissimos illo repellendus praesentium. ")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, { class: "pb-3 px-4" }, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: $data.emailAddress,
                            "onUpdate:modelValue": ($event) => $data.emailAddress = $event,
                            "prepend-inner-icon": "ri-mail-line",
                            label: "Email",
                            type: "email",
                            "error-messages": $data.emailErrors,
                            placeholder: "johndoe@example.com"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "px-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        block: "",
                        color: "primary",
                        type: "reset",
                        onClick: $options.validateEmail
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" verify Email Address ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/addEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { addEmail as default };
