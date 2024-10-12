import { useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, V as VIcon } from './server.mjs';
import { _ as _imports_0, a as _imports_1 } from './download-G_sFDMBX.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
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
import './VAvatar-BZtC_Qdy.mjs';

const _sfc_main$1 = {
  data() {
    return {
      otpInputs: ["", "", "", "", "", ""]
      // Adjust based on the length of your OTP
    };
  },
  computed: {
    otpDigits() {
      return Array.from({ length: 6 }, (_, index) => index + 1);
    }
  },
  methods: {
    focusNextInput(index) {
      if (index < this.otpInputs.length - 1) {
        this.$refs.otpInput[index + 1].focus();
      }
    },
    focusPreviousInput(index) {
      if (index > 0) {
        this.$refs.otpInput[index - 1].focus();
      }
    },
    checkAndNavigate() {
      const enteredOTP = this.otpInputs.join("");
      const correctOTP = "123456";
      if (enteredOTP === correctOTP && enteredOTP.length == 6) {
        this.$router.push("/mainpage");
      } else if (enteredOTP.length == 6 && enteredOTP != correctOTP) {
        alert("incorrect OTP");
      } else
        ;
    }
  },
  watch: {
    otpInputs: {
      handler: "checkAndNavigate",
      deep: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))} data-v-aafbcc2f><div class="space-x-4 px-2" data-v-aafbcc2f><!--[-->`);
  ssrRenderList($options.otpDigits, (digit, index) => {
    _push(`<input${ssrRenderAttr("value", $data.otpInputs[index])} class="w-8 h-8 text-center text-sm border border-gray rounded-md" maxlength="1" type="text" pattern="[0-9]" data-v-aafbcc2f>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OtpInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-aafbcc2f"]]);
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main = {
  data() {
    return {
      timerValue: 30,
      // Initial time in seconds
      intervalId: null,
      isRunning: false,
      emailAddress: "",
      isValidEmail: false,
      isError: false,
      isMobileNumberValid: false,
      mobileNumber: "",
      otpLength: 6,
      // length of the OTP
      otpTimer: 0,
      // timer for OTP resend
      otpInterval: null,
      otp6: null
    };
  },
  mounted() {
    this.startOtpTimer();
    this.otp6 == "6";
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
      }
    },
    startOtpTimer() {
      this.otpTimer = 30;
      this.otpInterval = setInterval();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IconBtn = resolveComponent("IconBtn");
  const _component_OtpInput = __nuxt_component_0;
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
                    _push4(ssrRenderComponent(VCol, { class: "font-bold text-lg text-black px-5" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Verify Your Mobile number`);
                        } else {
                          return [
                            createTextVNode("Verify Your Mobile number")
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
                          _push5(` We need to verify your phonepe accountId proceed`);
                        } else {
                          return [
                            createTextVNode(" We need to verify your phonepe accountId proceed")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "font-bold text-black px-5" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Enter OTP Send to 6374586149`);
                        } else {
                          return [
                            createTextVNode(" Enter OTP Send to 6374586149")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_OtpInput, null, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_OtpInput)
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
                      createVNode(VCol, { class: "font-bold text-lg text-black px-5" }, {
                        default: withCtx(() => [
                          createTextVNode("Verify Your Mobile number")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "px-5"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" We need to verify your phonepe accountId proceed")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "font-bold text-black px-5" }, {
                        default: withCtx(() => [
                          createTextVNode(" Enter OTP Send to 6374586149")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_OtpInput)
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
                    createVNode(VCol, { class: "font-bold text-lg text-black px-5" }, {
                      default: withCtx(() => [
                        createTextVNode("Verify Your Mobile number")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "px-5"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" We need to verify your phonepe accountId proceed")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "font-bold text-black px-5" }, {
                      default: withCtx(() => [
                        createTextVNode(" Enter OTP Send to 6374586149")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(_component_OtpInput)
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
                  createVNode(VCol, { class: "font-bold text-lg text-black px-5" }, {
                    default: withCtx(() => [
                      createTextVNode("Verify Your Mobile number")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "px-5"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" We need to verify your phonepe accountId proceed")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "font-bold text-black px-5" }, {
                    default: withCtx(() => [
                      createTextVNode(" Enter OTP Send to 6374586149")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(_component_OtpInput)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/otp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const otp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { otp as default };
