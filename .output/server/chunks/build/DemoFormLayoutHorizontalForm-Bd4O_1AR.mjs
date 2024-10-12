import { defineComponent, ref, mergeProps, withCtx, createVNode, unref, isRef, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VForm } from './VForm-Avd0ACPh.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VTextField } from './VTextField-BsyoThCd.mjs';
import { a as VBtn } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFormLayoutHorizontalForm",
  __ssrInlineRender: true,
  setup(__props) {
    const firstName = ref("");
    const email = ref("");
    const referalcode = ref("");
    const mobile = ref();
    ref();
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VForm, mergeProps({ onSubmit: () => {
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "12",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<label for="firstName"${_scopeId4}>NAME AS PER PAN</label>`);
                            } else {
                              return [
                                createVNode("label", { for: "firstName" }, "NAME AS PER PAN")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "12",
                          class: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                id: "firstName",
                                modelValue: unref(firstName),
                                "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                placeholder: "John",
                                "persistent-placeholder": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  id: "firstName",
                                  modelValue: unref(firstName),
                                  "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                  placeholder: "John",
                                  "persistent-placeholder": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                              createVNode("label", { for: "firstName" }, "NAME AS PER PAN")
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
                                id: "firstName",
                                modelValue: unref(firstName),
                                "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                placeholder: "John",
                                "persistent-placeholder": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "12",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<label for="mobile"${_scopeId4}>MOBILE NO</label>`);
                            } else {
                              return [
                                createVNode("label", { for: "mobile" }, "MOBILE NO")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "12",
                          class: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                id: "mobile",
                                modelValue: unref(mobile),
                                "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                type: "number",
                                placeholder: "+1 123 456 7890",
                                "persistent-placeholder": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  id: "mobile",
                                  modelValue: unref(mobile),
                                  "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                  type: "number",
                                  placeholder: "+1 123 456 7890",
                                  "persistent-placeholder": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                              createVNode("label", { for: "mobile" }, "MOBILE NO")
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
                                id: "mobile",
                                modelValue: unref(mobile),
                                "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                type: "number",
                                placeholder: "+1 123 456 7890",
                                "persistent-placeholder": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "12",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<label for="email"${_scopeId4}>EMAIL ID</label>`);
                            } else {
                              return [
                                createVNode("label", { for: "email" }, "EMAIL ID")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "12",
                          class: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                id: "email",
                                modelValue: unref(email),
                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                placeholder: "John@gmail.com",
                                "persistent-placeholder": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  id: "email",
                                  modelValue: unref(email),
                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                  placeholder: "John@gmail.com",
                                  "persistent-placeholder": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                              createVNode("label", { for: "email" }, "EMAIL ID")
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
                                id: "email",
                                modelValue: unref(email),
                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                placeholder: "John@gmail.com",
                                "persistent-placeholder": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    "offset-md": "3",
                    cols: "12",
                    md: "9"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex justify-end text-sm text-primary px-2"${_scopeId3}>change Mail</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex justify-end text-sm text-primary px-2" }, "change Mail")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "12",
                          class: "text-sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<label for="referalcode"${_scopeId4}>REFFERAL CODE</label>`);
                            } else {
                              return [
                                createVNode("label", { for: "referalcode" }, "REFFERAL CODE")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "12",
                          class: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                id: "referalcode",
                                modelValue: unref(referalcode),
                                "onUpdate:modelValue": ($event) => isRef(referalcode) ? referalcode.value = $event : null,
                                placeholder: "12354",
                                "persistent-placeholder": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  id: "referalcode",
                                  modelValue: unref(referalcode),
                                  "onUpdate:modelValue": ($event) => isRef(referalcode) ? referalcode.value = $event : null,
                                  placeholder: "12354",
                                  "persistent-placeholder": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                              createVNode("label", { for: "referalcode" }, "REFFERAL CODE")
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
                                id: "referalcode",
                                modelValue: unref(referalcode),
                                "onUpdate:modelValue": ($event) => isRef(referalcode) ? referalcode.value = $event : null,
                                placeholder: "12354",
                                "persistent-placeholder": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, {
                          "no-gutters": "",
                          class: "px-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      placeholder: "0",
                                      maxlength: "1",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        placeholder: "0",
                                        maxlength: "1",
                                        "persistent-placeholder": ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      placeholder: "0",
                                      maxlength: "1",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        placeholder: "0",
                                        maxlength: "1",
                                        "persistent-placeholder": ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      placeholder: "0",
                                      maxlength: "1",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        placeholder: "0",
                                        maxlength: "1",
                                        "persistent-placeholder": ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      placeholder: "0",
                                      maxlength: "1",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        placeholder: "0",
                                        maxlength: "1",
                                        "persistent-placeholder": ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      placeholder: "0",
                                      maxlength: "1",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        placeholder: "0",
                                        maxlength: "1",
                                        "persistent-placeholder": ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      placeholder: "0",
                                      maxlength: "1",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        placeholder: "0",
                                        maxlength: "1",
                                        "persistent-placeholder": ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "2" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      placeholder: "0",
                                      maxlength: "1",
                                      "persistent-placeholder": ""
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "2" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      placeholder: "0",
                                      maxlength: "1",
                                      "persistent-placeholder": ""
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "2" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      placeholder: "0",
                                      maxlength: "1",
                                      "persistent-placeholder": ""
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "2" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      placeholder: "0",
                                      maxlength: "1",
                                      "persistent-placeholder": ""
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "2" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      placeholder: "0",
                                      maxlength: "1",
                                      "persistent-placeholder": ""
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "2" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      placeholder: "0",
                                      maxlength: "1",
                                      "persistent-placeholder": ""
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
                          createVNode(VRow, {
                            "no-gutters": "",
                            class: "px-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "2" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    placeholder: "0",
                                    maxlength: "1",
                                    "persistent-placeholder": ""
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "2" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    placeholder: "0",
                                    maxlength: "1",
                                    "persistent-placeholder": ""
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "2" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    placeholder: "0",
                                    maxlength: "1",
                                    "persistent-placeholder": ""
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "2" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    placeholder: "0",
                                    maxlength: "1",
                                    "persistent-placeholder": ""
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "2" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    placeholder: "0",
                                    maxlength: "1",
                                    "persistent-placeholder": ""
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "2" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    placeholder: "0",
                                    maxlength: "1",
                                    "persistent-placeholder": ""
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
                  _push3(ssrRenderComponent(VCol, {
                    "offset-md": "3",
                    cols: "12",
                    md: "9"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex justify-end text-sm text-primary px-2"${_scopeId3}>resend OTP</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex justify-end text-sm text-primary px-2" }, "resend OTP")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "pb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          block: "",
                          type: "submit"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` GET OTP `);
                            } else {
                              return [
                                createTextVNode(" GET OTP ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            block: "",
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" GET OTP ")
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "12",
                          class: "text-sm"
                        }, {
                          default: withCtx(() => [
                            createVNode("label", { for: "firstName" }, "NAME AS PER PAN")
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
                              id: "firstName",
                              modelValue: unref(firstName),
                              "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                              placeholder: "John",
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
                            createVNode("label", { for: "mobile" }, "MOBILE NO")
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
                              id: "mobile",
                              modelValue: unref(mobile),
                              "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                              type: "number",
                              placeholder: "+1 123 456 7890",
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
                            createVNode("label", { for: "email" }, "EMAIL ID")
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
                              id: "email",
                              modelValue: unref(email),
                              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                              placeholder: "John@gmail.com",
                              "persistent-placeholder": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      "offset-md": "3",
                      cols: "12",
                      md: "9"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex justify-end text-sm text-primary px-2" }, "change Mail")
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
                            createVNode("label", { for: "referalcode" }, "REFFERAL CODE")
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
                              id: "referalcode",
                              modelValue: unref(referalcode),
                              "onUpdate:modelValue": ($event) => isRef(referalcode) ? referalcode.value = $event : null,
                              placeholder: "12354",
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
                        createVNode(VRow, {
                          "no-gutters": "",
                          class: "px-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "2" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  placeholder: "0",
                                  maxlength: "1",
                                  "persistent-placeholder": ""
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "2" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  placeholder: "0",
                                  maxlength: "1",
                                  "persistent-placeholder": ""
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "2" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  placeholder: "0",
                                  maxlength: "1",
                                  "persistent-placeholder": ""
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "2" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  placeholder: "0",
                                  maxlength: "1",
                                  "persistent-placeholder": ""
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "2" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  placeholder: "0",
                                  maxlength: "1",
                                  "persistent-placeholder": ""
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "2" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  placeholder: "0",
                                  maxlength: "1",
                                  "persistent-placeholder": ""
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
                      "offset-md": "3",
                      cols: "12",
                      md: "9"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex justify-end text-sm text-primary px-2" }, "resend OTP")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "pb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          block: "",
                          type: "submit"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" GET OTP ")
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "12",
                        class: "text-sm"
                      }, {
                        default: withCtx(() => [
                          createVNode("label", { for: "firstName" }, "NAME AS PER PAN")
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
                            id: "firstName",
                            modelValue: unref(firstName),
                            "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                            placeholder: "John",
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
                          createVNode("label", { for: "mobile" }, "MOBILE NO")
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
                            id: "mobile",
                            modelValue: unref(mobile),
                            "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                            type: "number",
                            placeholder: "+1 123 456 7890",
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
                          createVNode("label", { for: "email" }, "EMAIL ID")
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
                            id: "email",
                            modelValue: unref(email),
                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                            placeholder: "John@gmail.com",
                            "persistent-placeholder": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    "offset-md": "3",
                    cols: "12",
                    md: "9"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex justify-end text-sm text-primary px-2" }, "change Mail")
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
                          createVNode("label", { for: "referalcode" }, "REFFERAL CODE")
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
                            id: "referalcode",
                            modelValue: unref(referalcode),
                            "onUpdate:modelValue": ($event) => isRef(referalcode) ? referalcode.value = $event : null,
                            placeholder: "12354",
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
                      createVNode(VRow, {
                        "no-gutters": "",
                        class: "px-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "2" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                placeholder: "0",
                                maxlength: "1",
                                "persistent-placeholder": ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "2" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                placeholder: "0",
                                maxlength: "1",
                                "persistent-placeholder": ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "2" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                placeholder: "0",
                                maxlength: "1",
                                "persistent-placeholder": ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "2" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                placeholder: "0",
                                maxlength: "1",
                                "persistent-placeholder": ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "2" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                placeholder: "0",
                                maxlength: "1",
                                "persistent-placeholder": ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "2" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                placeholder: "0",
                                maxlength: "1",
                                "persistent-placeholder": ""
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
                    "offset-md": "3",
                    cols: "12",
                    md: "9"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex justify-end text-sm text-primary px-2" }, "resend OTP")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "pb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        block: "",
                        type: "submit"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" GET OTP ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/pages/form-layouts/DemoFormLayoutHorizontalForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
