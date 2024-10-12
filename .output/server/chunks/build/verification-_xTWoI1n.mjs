import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './download-G_sFDMBX.mjs';
import { _ as _export_sfc, V as VIcon, a as VBtn } from './server.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
import { V as VTextField } from './VTextField-BsyoThCd.mjs';
import '../routes/renderer.mjs';
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
import './VLabel-CtbqF6Wb.mjs';
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
      if (this.isValidEmail == false) {
        this.isError = true;
      } else {
        this.$router.push("/verification");
      }
    },
    validateMobileNumber() {
      const mobileNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      console.log(mobileNumberRegex.test(this.mobileNumber), "valid");
      this.isMobileNumberValid = mobileNumberRegex.test(this.mobileNumber);
      if (this.isMobileNumberValid == true) {
        this.$router.push("/otp");
      } else {
        this.emailErrors.push("Enter valid Number");
      }
    }
  }
};
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
              _push3(ssrRenderComponent(VCard, { class: "mx-auto" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VRow, { class: "py-4 px-2" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, {
                            cols: "3",
                            md: "2",
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
                          _push5(ssrRenderComponent(VCol, {
                            cols: "1",
                            md: "1",
                            class: "px-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_IconBtn, { class: "" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VIcon, { icon: "ri-arrow-right-line" }, null, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(VIcon, { icon: "ri-arrow-right-line" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_IconBtn, { class: "" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-arrow-right-line" })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, {
                            cols: "4",
                            md: "2",
                            class: "px-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<img${ssrRenderAttr("src", _imports_1)} alt="" class="h-10 w-10"${_scopeId5}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: _imports_1,
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
                              cols: "3",
                              md: "2",
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
                            }),
                            createVNode(VCol, {
                              cols: "1",
                              md: "1",
                              class: "px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_IconBtn, { class: "" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-arrow-right-line" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "4",
                              md: "2",
                              class: "px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_1,
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
                    _push4(ssrRenderComponent(VCol, { class: "font-bold text-lg text-black px-4" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Use Your PhonePe Account to <br${_scopeId4}> proceed with Share Market`);
                        } else {
                          return [
                            createTextVNode("Use Your PhonePe Account to "),
                            createVNode("br"),
                            createTextVNode(" proceed with Share Market")
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
                                _push6(`<label for="mobile"${_scopeId5}>Enter Mobile Number</label>`);
                              } else {
                                return [
                                  createVNode("label", { for: "mobile" }, "Enter Mobile Number")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            md: "12",
                            class: "pb-0"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VTextField, {
                                  id: "mobile",
                                  modelValue: $data.mobileNumber,
                                  "onUpdate:modelValue": ($event) => $data.mobileNumber = $event,
                                  type: "number",
                                  placeholder: "+91 1234567890",
                                  "error-messages": $data.emailErrors,
                                  "persistent-placeholder": ""
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VTextField, {
                                    id: "mobile",
                                    modelValue: $data.mobileNumber,
                                    "onUpdate:modelValue": ($event) => $data.mobileNumber = $event,
                                    type: "number",
                                    placeholder: "+91 1234567890",
                                    "error-messages": $data.emailErrors,
                                    "persistent-placeholder": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
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
                                createVNode("label", { for: "mobile" }, "Enter Mobile Number")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "12",
                              class: "pb-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "mobile",
                                  modelValue: $data.mobileNumber,
                                  "onUpdate:modelValue": ($event) => $data.mobileNumber = $event,
                                  type: "number",
                                  placeholder: "+91 1234567890",
                                  "error-messages": $data.emailErrors,
                                  "persistent-placeholder": ""
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
                      class: "px-5"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est, dolorum inventore voluptatem animi, sed itaque quibusdam enim assumenda tenetur soluta.`);
                        } else {
                          return [
                            createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est, dolorum inventore voluptatem animi, sed itaque quibusdam enim assumenda tenetur soluta.")
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
                            onClick: $options.validateMobileNumber
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Proceed `);
                              } else {
                                return [
                                  createTextVNode(" Proceed ")
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
                              onClick: $options.validateMobileNumber
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Proceed ")
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
                      createVNode(VRow, { class: "py-4 px-2" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "3",
                            md: "2",
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
                          }),
                          createVNode(VCol, {
                            cols: "1",
                            md: "1",
                            class: "px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_IconBtn, { class: "" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-arrow-right-line" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "4",
                            md: "2",
                            class: "px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: _imports_1,
                                alt: "",
                                class: "h-10 w-10"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "font-bold text-lg text-black px-4" }, {
                        default: withCtx(() => [
                          createTextVNode("Use Your PhonePe Account to "),
                          createVNode("br"),
                          createTextVNode(" proceed with Share Market")
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
                              createVNode("label", { for: "mobile" }, "Enter Mobile Number")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "12",
                            class: "pb-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "mobile",
                                modelValue: $data.mobileNumber,
                                "onUpdate:modelValue": ($event) => $data.mobileNumber = $event,
                                type: "number",
                                placeholder: "+91 1234567890",
                                "error-messages": $data.emailErrors,
                                "persistent-placeholder": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "px-5"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est, dolorum inventore voluptatem animi, sed itaque quibusdam enim assumenda tenetur soluta.")
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
                            onClick: $options.validateMobileNumber
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Proceed ")
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
                createVNode(VCard, { class: "mx-auto" }, {
                  default: withCtx(() => [
                    createVNode(VRow, { class: "py-4 px-2" }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "3",
                          md: "2",
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
                        }),
                        createVNode(VCol, {
                          cols: "1",
                          md: "1",
                          class: "px-6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_IconBtn, { class: "" }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-arrow-right-line" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "4",
                          md: "2",
                          class: "px-6"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_1,
                              alt: "",
                              class: "h-10 w-10"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "font-bold text-lg text-black px-4" }, {
                      default: withCtx(() => [
                        createTextVNode("Use Your PhonePe Account to "),
                        createVNode("br"),
                        createTextVNode(" proceed with Share Market")
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
                            createVNode("label", { for: "mobile" }, "Enter Mobile Number")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "12",
                          class: "pb-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              id: "mobile",
                              modelValue: $data.mobileNumber,
                              "onUpdate:modelValue": ($event) => $data.mobileNumber = $event,
                              type: "number",
                              placeholder: "+91 1234567890",
                              "error-messages": $data.emailErrors,
                              "persistent-placeholder": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "px-5"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est, dolorum inventore voluptatem animi, sed itaque quibusdam enim assumenda tenetur soluta.")
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
                          onClick: $options.validateMobileNumber
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Proceed ")
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
              createVNode(VCard, { class: "mx-auto" }, {
                default: withCtx(() => [
                  createVNode(VRow, { class: "py-4 px-2" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "3",
                        md: "2",
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
                      }),
                      createVNode(VCol, {
                        cols: "1",
                        md: "1",
                        class: "px-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_IconBtn, { class: "" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-arrow-right-line" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "4",
                        md: "2",
                        class: "px-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_1,
                            alt: "",
                            class: "h-10 w-10"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "font-bold text-lg text-black px-4" }, {
                    default: withCtx(() => [
                      createTextVNode("Use Your PhonePe Account to "),
                      createVNode("br"),
                      createTextVNode(" proceed with Share Market")
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
                          createVNode("label", { for: "mobile" }, "Enter Mobile Number")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "12",
                        class: "pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            id: "mobile",
                            modelValue: $data.mobileNumber,
                            "onUpdate:modelValue": ($event) => $data.mobileNumber = $event,
                            type: "number",
                            placeholder: "+91 1234567890",
                            "error-messages": $data.emailErrors,
                            "persistent-placeholder": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "px-5"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est, dolorum inventore voluptatem animi, sed itaque quibusdam enim assumenda tenetur soluta.")
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
                        onClick: $options.validateMobileNumber
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Proceed ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/verification.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const verification = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { verification as default };
