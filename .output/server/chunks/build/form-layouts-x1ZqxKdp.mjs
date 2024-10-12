import { useSSRContext, defineComponent, withCtx, createVNode, ref, mergeProps, unref, isRef, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$5 } from './DemoFormLayoutHorizontalForm-Bd4O_1AR.mjs';
import { V as VForm } from './VForm-Avd0ACPh.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VTextField } from './VTextField-BsyoThCd.mjs';
import { V as VCheckbox } from './VCheckbox-BI5TDaTk.mjs';
import { a as VBtn } from './server.mjs';
import { V as VCard, a as VCardText } from './VCard-BCzimUKB.mjs';
import './form-CtAJx0Pr.mjs';
import './forwardRefs-BSTjJZPU.mjs';
import './VField-DIVOjxLA.mjs';
import './index-D38G6C1I.mjs';
import './VLabel-CtbqF6Wb.mjs';
import './VInput-X9CvPL_3.mjs';
import './easing-CuhD-vKF.mjs';
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
import './VAvatar-BZtC_Qdy.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DemoFormLayoutHorizontalFormWithIcons",
  __ssrInlineRender: true,
  setup(__props) {
    const firstName = ref("");
    const email = ref("");
    const mobile = ref();
    const password = ref();
    const checkbox = ref(false);
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
                        _push4(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="firstNameHorizontalIcons"${_scopeId5}>First Name</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "firstNameHorizontalIcons" }, "First Name")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "firstNameHorizontalIcons",
                                      modelValue: unref(firstName),
                                      "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                      "prepend-inner-icon": "ri-user-line",
                                      placeholder: "John",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "firstNameHorizontalIcons",
                                        modelValue: unref(firstName),
                                        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                        "prepend-inner-icon": "ri-user-line",
                                        placeholder: "John",
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
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "firstNameHorizontalIcons" }, "First Name")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "firstNameHorizontalIcons",
                                      modelValue: unref(firstName),
                                      "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                      "prepend-inner-icon": "ri-user-line",
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { for: "firstNameHorizontalIcons" }, "First Name")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "firstNameHorizontalIcons",
                                    modelValue: unref(firstName),
                                    "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                    "prepend-inner-icon": "ri-user-line",
                                    placeholder: "John",
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="emailHorizontalIcons"${_scopeId5}>Email</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "emailHorizontalIcons" }, "Email")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "emailHorizontalIcons",
                                      modelValue: unref(email),
                                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                      "prepend-inner-icon": "ri-mail-line",
                                      placeholder: "johndoe@email.com",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "emailHorizontalIcons",
                                        modelValue: unref(email),
                                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                        "prepend-inner-icon": "ri-mail-line",
                                        placeholder: "johndoe@email.com",
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
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "emailHorizontalIcons" }, "Email")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "emailHorizontalIcons",
                                      modelValue: unref(email),
                                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                      "prepend-inner-icon": "ri-mail-line",
                                      placeholder: "johndoe@email.com",
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
                      } else {
                        return [
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { for: "emailHorizontalIcons" }, "Email")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "emailHorizontalIcons",
                                    modelValue: unref(email),
                                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                    "prepend-inner-icon": "ri-mail-line",
                                    placeholder: "johndoe@email.com",
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="mobileHorizontalIcons"${_scopeId5}>Mobile</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "mobileHorizontalIcons" }, "Mobile")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "mobileHorizontalIcons",
                                      modelValue: unref(mobile),
                                      "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                      type: "number",
                                      "prepend-inner-icon": "ri-smartphone-line",
                                      placeholder: "+1 123 456 7890",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "mobileHorizontalIcons",
                                        modelValue: unref(mobile),
                                        "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                        type: "number",
                                        "prepend-inner-icon": "ri-smartphone-line",
                                        placeholder: "+1 123 456 7890",
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
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "mobileHorizontalIcons" }, "Mobile")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "mobileHorizontalIcons",
                                      modelValue: unref(mobile),
                                      "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                      type: "number",
                                      "prepend-inner-icon": "ri-smartphone-line",
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { for: "mobileHorizontalIcons" }, "Mobile")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "mobileHorizontalIcons",
                                    modelValue: unref(mobile),
                                    "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                    type: "number",
                                    "prepend-inner-icon": "ri-smartphone-line",
                                    placeholder: "+1 123 456 7890",
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="passwordHorizontalIcons"${_scopeId5}>Password</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "passwordHorizontalIcons" }, "Password")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "passwordHorizontalIcons",
                                      modelValue: unref(password),
                                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                      "prepend-inner-icon": "ri-lock-line",
                                      autocomplete: "on",
                                      type: "password",
                                      placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "passwordHorizontalIcons",
                                        modelValue: unref(password),
                                        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                        "prepend-inner-icon": "ri-lock-line",
                                        autocomplete: "on",
                                        type: "password",
                                        placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
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
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "passwordHorizontalIcons" }, "Password")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "passwordHorizontalIcons",
                                      modelValue: unref(password),
                                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                      "prepend-inner-icon": "ri-lock-line",
                                      autocomplete: "on",
                                      type: "password",
                                      placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
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
                      } else {
                        return [
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { for: "passwordHorizontalIcons" }, "Password")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "passwordHorizontalIcons",
                                    modelValue: unref(password),
                                    "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                    "prepend-inner-icon": "ri-lock-line",
                                    autocomplete: "on",
                                    type: "password",
                                    placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    "offset-md": "3",
                    cols: "12",
                    md: "9"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          label: "Remember me"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCheckbox, {
                            modelValue: unref(checkbox),
                            "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                            label: "Remember me"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    "offset-md": "3",
                    cols: "12",
                    md: "9",
                    class: "d-flex gap-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "secondary",
                          type: "reset",
                          variant: "outlined"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Reset `);
                            } else {
                              return [
                                createTextVNode(" Reset ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "secondary",
                            type: "reset",
                            variant: "outlined"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset ")
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
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "firstNameHorizontalIcons" }, "First Name")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "firstNameHorizontalIcons",
                                  modelValue: unref(firstName),
                                  "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                  "prepend-inner-icon": "ri-user-line",
                                  placeholder: "John",
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
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "emailHorizontalIcons" }, "Email")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "emailHorizontalIcons",
                                  modelValue: unref(email),
                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                  "prepend-inner-icon": "ri-mail-line",
                                  placeholder: "johndoe@email.com",
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
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "mobileHorizontalIcons" }, "Mobile")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "mobileHorizontalIcons",
                                  modelValue: unref(mobile),
                                  "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                  type: "number",
                                  "prepend-inner-icon": "ri-smartphone-line",
                                  placeholder: "+1 123 456 7890",
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
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "passwordHorizontalIcons" }, "Password")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "passwordHorizontalIcons",
                                  modelValue: unref(password),
                                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                  "prepend-inner-icon": "ri-lock-line",
                                  autocomplete: "on",
                                  type: "password",
                                  placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
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
                    }),
                    createVNode(VCol, {
                      "offset-md": "3",
                      cols: "12",
                      md: "9"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          label: "Remember me"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      "offset-md": "3",
                      cols: "12",
                      md: "9",
                      class: "d-flex gap-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, { type: "submit" }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "secondary",
                          type: "reset",
                          variant: "outlined"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset ")
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
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "firstNameHorizontalIcons" }, "First Name")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "firstNameHorizontalIcons",
                                modelValue: unref(firstName),
                                "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                "prepend-inner-icon": "ri-user-line",
                                placeholder: "John",
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
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "emailHorizontalIcons" }, "Email")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "emailHorizontalIcons",
                                modelValue: unref(email),
                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                "prepend-inner-icon": "ri-mail-line",
                                placeholder: "johndoe@email.com",
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
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "mobileHorizontalIcons" }, "Mobile")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "mobileHorizontalIcons",
                                modelValue: unref(mobile),
                                "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                type: "number",
                                "prepend-inner-icon": "ri-smartphone-line",
                                placeholder: "+1 123 456 7890",
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
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "passwordHorizontalIcons" }, "Password")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "passwordHorizontalIcons",
                                modelValue: unref(password),
                                "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                "prepend-inner-icon": "ri-lock-line",
                                autocomplete: "on",
                                type: "password",
                                placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
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
                  }),
                  createVNode(VCol, {
                    "offset-md": "3",
                    cols: "12",
                    md: "9"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCheckbox, {
                        modelValue: unref(checkbox),
                        "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                        label: "Remember me"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    "offset-md": "3",
                    cols: "12",
                    md: "9",
                    class: "d-flex gap-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, { type: "submit" }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "secondary",
                        type: "reset",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset ")
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/pages/form-layouts/DemoFormLayoutHorizontalFormWithIcons.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DemoFormLayoutMultipleColumn",
  __ssrInlineRender: true,
  setup(__props) {
    const firstName = ref("");
    const lastName = ref("");
    const city = ref("");
    const country = ref("");
    const company = ref("");
    const email = ref("");
    const checkbox = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VForm, mergeProps({ onSubmit: () => {
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(firstName),
                          "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                          label: "First Name",
                          placeholder: "John"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(firstName),
                            "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                            label: "First Name",
                            placeholder: "John"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(lastName),
                          "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                          label: "Last Name",
                          placeholder: "Doe"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(lastName),
                            "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                            label: "Last Name",
                            placeholder: "Doe"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          label: "Email",
                          placeholder: "johndoe@email.com"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(email),
                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                            label: "Email",
                            placeholder: "johndoe@email.com"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(city),
                          "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
                          label: "City",
                          placeholder: "New York"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(city),
                            "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
                            label: "City",
                            placeholder: "New York"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(country),
                          "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                          label: "Country",
                          placeholder: "United States"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(country),
                            "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                            label: "Country",
                            placeholder: "United States"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(company),
                          "onUpdate:modelValue": ($event) => isRef(company) ? company.value = $event : null,
                          label: "Company",
                          placeholder: "Pixinvent"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(company),
                            "onUpdate:modelValue": ($event) => isRef(company) ? company.value = $event : null,
                            label: "Company",
                            placeholder: "Pixinvent"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          label: "Remember me"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCheckbox, {
                            modelValue: unref(checkbox),
                            "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                            label: "Remember me"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "d-flex gap-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          type: "reset",
                          color: "secondary",
                          variant: "outlined"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Reset `);
                            } else {
                              return [
                                createTextVNode(" Reset ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            type: "reset",
                            color: "secondary",
                            variant: "outlined"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset ")
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
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(firstName),
                          "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                          label: "First Name",
                          placeholder: "John"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(lastName),
                          "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                          label: "Last Name",
                          placeholder: "Doe"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          label: "Email",
                          placeholder: "johndoe@email.com"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(city),
                          "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
                          label: "City",
                          placeholder: "New York"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(country),
                          "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                          label: "Country",
                          placeholder: "United States"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(company),
                          "onUpdate:modelValue": ($event) => isRef(company) ? company.value = $event : null,
                          label: "Company",
                          placeholder: "Pixinvent"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          label: "Remember me"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "d-flex gap-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, { type: "submit" }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          type: "reset",
                          color: "secondary",
                          variant: "outlined"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset ")
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
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(firstName),
                        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                        label: "First Name",
                        placeholder: "John"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(lastName),
                        "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                        label: "Last Name",
                        placeholder: "Doe"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(email),
                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                        label: "Email",
                        placeholder: "johndoe@email.com"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(city),
                        "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
                        label: "City",
                        placeholder: "New York"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(country),
                        "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                        label: "Country",
                        placeholder: "United States"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(company),
                        "onUpdate:modelValue": ($event) => isRef(company) ? company.value = $event : null,
                        label: "Company",
                        placeholder: "Pixinvent"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VCheckbox, {
                        modelValue: unref(checkbox),
                        "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                        label: "Remember me"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "d-flex gap-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, { type: "submit" }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        type: "reset",
                        color: "secondary",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset ")
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/pages/form-layouts/DemoFormLayoutMultipleColumn.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoFormLayoutVerticalForm",
  __ssrInlineRender: true,
  setup(__props) {
    const firstName = ref("");
    const email = ref("");
    const mobile = ref();
    const password = ref();
    const checkbox = ref(false);
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
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(firstName),
                          "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                          label: "First Name",
                          placeholder: "John"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(firstName),
                            "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                            label: "First Name",
                            placeholder: "John"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          label: "Email",
                          type: "email",
                          placeholder: "johndoe@example.com"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(email),
                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                            label: "Email",
                            type: "email",
                            placeholder: "johndoe@example.com"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(mobile),
                          "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                          label: "Mobile",
                          placeholder: "+1 123 456 7890",
                          type: "number"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(mobile),
                            "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                            label: "Mobile",
                            placeholder: "+1 123 456 7890",
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(password),
                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                          label: "Password",
                          autocomplete: "on",
                          type: "password",
                          placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(password),
                            "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                            label: "Password",
                            autocomplete: "on",
                            type: "password",
                            placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          label: "Remember me"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCheckbox, {
                            modelValue: unref(checkbox),
                            "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                            label: "Remember me"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "d-flex gap-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          type: "reset",
                          color: "secondary",
                          variant: "outlined"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Reset `);
                            } else {
                              return [
                                createTextVNode(" Reset ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            type: "reset",
                            color: "secondary",
                            variant: "outlined"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset ")
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
                        createVNode(VTextField, {
                          modelValue: unref(firstName),
                          "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                          label: "First Name",
                          placeholder: "John"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          label: "Email",
                          type: "email",
                          placeholder: "johndoe@example.com"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(mobile),
                          "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                          label: "Mobile",
                          placeholder: "+1 123 456 7890",
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(password),
                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                          label: "Password",
                          autocomplete: "on",
                          type: "password",
                          placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          label: "Remember me"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "d-flex gap-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, { type: "submit" }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          type: "reset",
                          color: "secondary",
                          variant: "outlined"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset ")
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
                      createVNode(VTextField, {
                        modelValue: unref(firstName),
                        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                        label: "First Name",
                        placeholder: "John"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(email),
                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                        label: "Email",
                        type: "email",
                        placeholder: "johndoe@example.com"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(mobile),
                        "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                        label: "Mobile",
                        placeholder: "+1 123 456 7890",
                        type: "number"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(password),
                        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                        label: "Password",
                        autocomplete: "on",
                        type: "password",
                        placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VCheckbox, {
                        modelValue: unref(checkbox),
                        "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                        label: "Remember me"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "d-flex gap-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, { type: "submit" }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        type: "reset",
                        color: "secondary",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset ")
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/pages/form-layouts/DemoFormLayoutVerticalForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoFormLayoutVerticalFormWithIcons",
  __ssrInlineRender: true,
  setup(__props) {
    const firstName = ref("");
    const email = ref("");
    const mobile = ref();
    const password = ref();
    const checkbox = ref(false);
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
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(firstName),
                          "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                          "prepend-inner-icon": "ri-user-line",
                          label: "First Name",
                          placeholder: "John"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(firstName),
                            "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                            "prepend-inner-icon": "ri-user-line",
                            label: "First Name",
                            placeholder: "John"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          "prepend-inner-icon": "ri-mail-line",
                          label: "Email",
                          type: "email",
                          placeholder: "johndoe@example.com"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(email),
                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                            "prepend-inner-icon": "ri-mail-line",
                            label: "Email",
                            type: "email",
                            placeholder: "johndoe@example.com"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(mobile),
                          "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                          "prepend-inner-icon": "ri-smartphone-line",
                          label: "Mobile",
                          placeholder: "+1 123 456 7890",
                          type: "number"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(mobile),
                            "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                            "prepend-inner-icon": "ri-smartphone-line",
                            label: "Mobile",
                            placeholder: "+1 123 456 7890",
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(password),
                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                          "prepend-inner-icon": "ri-lock-line",
                          label: "Password",
                          autocomplete: "on",
                          type: "password",
                          placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(password),
                            "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                            "prepend-inner-icon": "ri-lock-line",
                            label: "Password",
                            autocomplete: "on",
                            type: "password",
                            placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          label: "Remember me"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCheckbox, {
                            modelValue: unref(checkbox),
                            "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                            label: "Remember me"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          type: "submit",
                          class: "me-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "secondary",
                          type: "reset",
                          variant: "outlined"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Reset `);
                            } else {
                              return [
                                createTextVNode(" Reset ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            type: "submit",
                            class: "me-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "secondary",
                            type: "reset",
                            variant: "outlined"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset ")
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
                        createVNode(VTextField, {
                          modelValue: unref(firstName),
                          "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                          "prepend-inner-icon": "ri-user-line",
                          label: "First Name",
                          placeholder: "John"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          "prepend-inner-icon": "ri-mail-line",
                          label: "Email",
                          type: "email",
                          placeholder: "johndoe@example.com"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(mobile),
                          "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                          "prepend-inner-icon": "ri-smartphone-line",
                          label: "Mobile",
                          placeholder: "+1 123 456 7890",
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(password),
                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                          "prepend-inner-icon": "ri-lock-line",
                          label: "Password",
                          autocomplete: "on",
                          type: "password",
                          placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          label: "Remember me"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          type: "submit",
                          class: "me-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "secondary",
                          type: "reset",
                          variant: "outlined"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset ")
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
                      createVNode(VTextField, {
                        modelValue: unref(firstName),
                        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                        "prepend-inner-icon": "ri-user-line",
                        label: "First Name",
                        placeholder: "John"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(email),
                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                        "prepend-inner-icon": "ri-mail-line",
                        label: "Email",
                        type: "email",
                        placeholder: "johndoe@example.com"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(mobile),
                        "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                        "prepend-inner-icon": "ri-smartphone-line",
                        label: "Mobile",
                        placeholder: "+1 123 456 7890",
                        type: "number"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(password),
                        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                        "prepend-inner-icon": "ri-lock-line",
                        label: "Password",
                        autocomplete: "on",
                        type: "password",
                        placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VCheckbox, {
                        modelValue: unref(checkbox),
                        "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                        label: "Remember me"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        type: "submit",
                        class: "me-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "secondary",
                        type: "reset",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset ")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/pages/form-layouts/DemoFormLayoutVerticalFormWithIcons.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form-layouts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Horizontal Form" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$5, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$5)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5)
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
                    createVNode(VCard, { title: "Horizontal Form" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5)
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Horizontal Form with Icons" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$4, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$4)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4)
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
                    createVNode(VCard, { title: "Horizontal Form with Icons" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4)
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Vertical Form" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$2, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
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
                    createVNode(VCard, { title: "Vertical Form" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2)
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Vertical Form with Icons" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$1, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1)
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
                    createVNode(VCard, { title: "Vertical Form with Icons" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1)
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
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Multiple Column" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$3, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$3)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3)
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
                    createVNode(VCard, { title: "Multiple Column" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$3)
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
                  createVNode(VCard, { title: "Horizontal Form" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5)
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
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "Horizontal Form with Icons" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$4)
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
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "Vertical Form" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2)
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
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "Vertical Form with Icons" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1)
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
                  createVNode(VCard, { title: "Multiple Column" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$3)
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/form-layouts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
