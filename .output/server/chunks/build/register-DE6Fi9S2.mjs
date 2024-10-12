import { _ as __nuxt_component_0 } from './nuxt-link-jmK5-THK.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as authV1MaskLight, b as authV1MaskDark, _ as _sfc_main$1, c as authV1Tree, d as authV1Tree2 } from './auth-v1-tree-CgfkYKla.mjs';
import { l as logo } from './logo-Cki8HXon.mjs';
import { V as VCard, b as VCardItem, c as VCardTitle, a as VCardText } from './VCard-BCzimUKB.mjs';
import { V as VForm } from './VForm-Avd0ACPh.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VTextField } from './VTextField-BsyoThCd.mjs';
import { V as VCheckbox } from './VCheckbox-BI5TDaTk.mjs';
import { V as VLabel } from './VLabel-CtbqF6Wb.mjs';
import { J as useTheme, a as VBtn, n as VImg } from './server.mjs';
import { V as VDivider } from './VDivider-UF-z31IW.mjs';
import './VAvatar-BZtC_Qdy.mjs';
import './form-CtAJx0Pr.mjs';
import './forwardRefs-BSTjJZPU.mjs';
import './VField-DIVOjxLA.mjs';
import './index-D38G6C1I.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      username: "",
      email: "",
      password: "",
      privacyPolicies: false
    });
    const vuetifyTheme = useTheme();
    const authThemeMask = computed(() => {
      return vuetifyTheme.global.name.value === "light" ? authV1MaskLight : authV1MaskDark;
    });
    const isPasswordVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-wrapper d-flex align-center justify-center pa-4" }, _attrs))}>`);
      _push(ssrRenderComponent(VCard, {
        class: "auth-card pa-4 pt-7",
        "max-width": "448"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { class: "justify-center" }, {
              prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex"${_scopeId2}><div${_scopeId2}>${unref(logo)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex" }, [
                      createVNode("div", { innerHTML: unref(logo) }, null, 8, ["innerHTML"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "font-weight-semibold text-2xl text-uppercase" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Materio `);
                      } else {
                        return [
                          createTextVNode(" Materio ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "font-weight-semibold text-2xl text-uppercase" }, {
                      default: withCtx(() => [
                        createTextVNode(" Materio ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "pt-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 font-weight-semibold mb-1"${_scopeId2}> Adventure starts here \u{1F680} </h5><p class="mb-0"${_scopeId2}> Make your app management easy and fun! </p>`);
                } else {
                  return [
                    createVNode("h5", { class: "text-h5 font-weight-semibold mb-1" }, " Adventure starts here \u{1F680} "),
                    createVNode("p", { class: "mb-0" }, " Make your app management easy and fun! ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, { onSubmit: () => {
                  } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).username,
                                      "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                      label: "Username",
                                      placeholder: "Johndoe"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(form).username,
                                        "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                        label: "Username",
                                        placeholder: "Johndoe"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).email,
                                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                      label: "Email",
                                      placeholder: "johndoe@email.com",
                                      type: "email"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(form).email,
                                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                        label: "Email",
                                        placeholder: "johndoe@email.com",
                                        type: "email"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).password,
                                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                      label: "Password",
                                      placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                      type: unref(isPasswordVisible) ? "text" : "password",
                                      "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                      "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex align-center mt-1 mb-4"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VCheckbox, {
                                      id: "privacy-policy",
                                      modelValue: unref(form).privacyPolicies,
                                      "onUpdate:modelValue": ($event) => unref(form).privacyPolicies = $event,
                                      inline: ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VLabel, {
                                      for: "privacy-policy",
                                      style: { "opacity": "1" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span class="me-1"${_scopeId6}>I agree to</span><a href="javascript:void(0)" class="text-primary"${_scopeId6}>privacy policy &amp; terms</a>`);
                                        } else {
                                          return [
                                            createVNode("span", { class: "me-1" }, "I agree to"),
                                            createVNode("a", {
                                              href: "javascript:void(0)",
                                              class: "text-primary"
                                            }, "privacy policy & terms")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      block: "",
                                      type: "submit",
                                      to: "/"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Sign up `);
                                        } else {
                                          return [
                                            createTextVNode(" Sign up ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(form).password,
                                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                        label: "Password",
                                        placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                        type: unref(isPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                        "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                      createVNode("div", { class: "d-flex align-center mt-1 mb-4" }, [
                                        createVNode(VCheckbox, {
                                          id: "privacy-policy",
                                          modelValue: unref(form).privacyPolicies,
                                          "onUpdate:modelValue": ($event) => unref(form).privacyPolicies = $event,
                                          inline: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VLabel, {
                                          for: "privacy-policy",
                                          style: { "opacity": "1" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "me-1" }, "I agree to"),
                                            createVNode("a", {
                                              href: "javascript:void(0)",
                                              class: "text-primary"
                                            }, "privacy policy & terms")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode(VBtn, {
                                        block: "",
                                        type: "submit",
                                        to: "/"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Sign up ")
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
                                class: "text-center text-base"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span${_scopeId5}>Already have an account?</span>`);
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      class: "text-primary ms-2",
                                      to: "login"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Sign in instead `);
                                        } else {
                                          return [
                                            createTextVNode(" Sign in instead ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("span", null, "Already have an account?"),
                                      createVNode(_component_NuxtLink, {
                                        class: "text-primary ms-2",
                                        to: "login"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Sign in instead ")
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
                                class: "d-flex align-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VDivider, null, null, _parent6, _scopeId5));
                                    _push6(`<span class="mx-4"${_scopeId5}>or</span>`);
                                    _push6(ssrRenderComponent(VDivider, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VDivider),
                                      createVNode("span", { class: "mx-4" }, "or"),
                                      createVNode(VDivider)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "text-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$1, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$1)
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
                                      modelValue: unref(form).username,
                                      "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                      label: "Username",
                                      placeholder: "Johndoe"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(form).email,
                                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                      label: "Email",
                                      placeholder: "johndoe@email.com",
                                      type: "email"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(form).password,
                                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                      label: "Password",
                                      placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                      type: unref(isPasswordVisible) ? "text" : "password",
                                      "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                      "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                    createVNode("div", { class: "d-flex align-center mt-1 mb-4" }, [
                                      createVNode(VCheckbox, {
                                        id: "privacy-policy",
                                        modelValue: unref(form).privacyPolicies,
                                        "onUpdate:modelValue": ($event) => unref(form).privacyPolicies = $event,
                                        inline: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VLabel, {
                                        for: "privacy-policy",
                                        style: { "opacity": "1" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "me-1" }, "I agree to"),
                                          createVNode("a", {
                                            href: "javascript:void(0)",
                                            class: "text-primary"
                                          }, "privacy policy & terms")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode(VBtn, {
                                      block: "",
                                      type: "submit",
                                      to: "/"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Sign up ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "text-center text-base"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Already have an account?"),
                                    createVNode(_component_NuxtLink, {
                                      class: "text-primary ms-2",
                                      to: "login"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Sign in instead ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "d-flex align-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VDivider),
                                    createVNode("span", { class: "mx-4" }, "or"),
                                    createVNode(VDivider)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$1)
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
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(form).username,
                                    "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                    label: "Username",
                                    placeholder: "Johndoe"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(form).email,
                                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                    label: "Email",
                                    placeholder: "johndoe@email.com",
                                    type: "email"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(form).password,
                                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                    label: "Password",
                                    placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                    type: unref(isPasswordVisible) ? "text" : "password",
                                    "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                    "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                  createVNode("div", { class: "d-flex align-center mt-1 mb-4" }, [
                                    createVNode(VCheckbox, {
                                      id: "privacy-policy",
                                      modelValue: unref(form).privacyPolicies,
                                      "onUpdate:modelValue": ($event) => unref(form).privacyPolicies = $event,
                                      inline: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VLabel, {
                                      for: "privacy-policy",
                                      style: { "opacity": "1" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "me-1" }, "I agree to"),
                                        createVNode("a", {
                                          href: "javascript:void(0)",
                                          class: "text-primary"
                                        }, "privacy policy & terms")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(VBtn, {
                                    block: "",
                                    type: "submit",
                                    to: "/"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Sign up ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                class: "text-center text-base"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Already have an account?"),
                                  createVNode(_component_NuxtLink, {
                                    class: "text-primary ms-2",
                                    to: "login"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Sign in instead ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                class: "d-flex align-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VDivider),
                                  createVNode("span", { class: "mx-4" }, "or"),
                                  createVNode(VDivider)
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                class: "text-center"
                              }, {
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VForm, {
                      onSubmit: withModifiers(() => {
                      }, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(form).username,
                                  "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                  label: "Username",
                                  placeholder: "Johndoe"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(form).email,
                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                  label: "Email",
                                  placeholder: "johndoe@email.com",
                                  type: "email"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(form).password,
                                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                  label: "Password",
                                  placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                  type: unref(isPasswordVisible) ? "text" : "password",
                                  "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                  "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                createVNode("div", { class: "d-flex align-center mt-1 mb-4" }, [
                                  createVNode(VCheckbox, {
                                    id: "privacy-policy",
                                    modelValue: unref(form).privacyPolicies,
                                    "onUpdate:modelValue": ($event) => unref(form).privacyPolicies = $event,
                                    inline: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VLabel, {
                                    for: "privacy-policy",
                                    style: { "opacity": "1" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "me-1" }, "I agree to"),
                                      createVNode("a", {
                                        href: "javascript:void(0)",
                                        class: "text-primary"
                                      }, "privacy policy & terms")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(VBtn, {
                                  block: "",
                                  type: "submit",
                                  to: "/"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Sign up ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              class: "text-center text-base"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Already have an account?"),
                                createVNode(_component_NuxtLink, {
                                  class: "text-primary ms-2",
                                  to: "login"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Sign in instead ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              class: "d-flex align-center"
                            }, {
                              default: withCtx(() => [
                                createVNode(VDivider),
                                createVNode("span", { class: "mx-4" }, "or"),
                                createVNode(VDivider)
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              class: "text-center"
                            }, {
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
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, { class: "justify-center" }, {
                prepend: withCtx(() => [
                  createVNode("div", { class: "d-flex" }, [
                    createVNode("div", { innerHTML: unref(logo) }, null, 8, ["innerHTML"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "font-weight-semibold text-2xl text-uppercase" }, {
                    default: withCtx(() => [
                      createTextVNode(" Materio ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, { class: "pt-2" }, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 font-weight-semibold mb-1" }, " Adventure starts here \u{1F680} "),
                  createVNode("p", { class: "mb-0" }, " Make your app management easy and fun! ")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VForm, {
                    onSubmit: withModifiers(() => {
                    }, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(form).username,
                                "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                label: "Username",
                                placeholder: "Johndoe"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                label: "Email",
                                placeholder: "johndoe@email.com",
                                type: "email"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(form).password,
                                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                label: "Password",
                                placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                type: unref(isPasswordVisible) ? "text" : "password",
                                "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                              createVNode("div", { class: "d-flex align-center mt-1 mb-4" }, [
                                createVNode(VCheckbox, {
                                  id: "privacy-policy",
                                  modelValue: unref(form).privacyPolicies,
                                  "onUpdate:modelValue": ($event) => unref(form).privacyPolicies = $event,
                                  inline: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VLabel, {
                                  for: "privacy-policy",
                                  style: { "opacity": "1" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "me-1" }, "I agree to"),
                                    createVNode("a", {
                                      href: "javascript:void(0)",
                                      class: "text-primary"
                                    }, "privacy policy & terms")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode(VBtn, {
                                block: "",
                                type: "submit",
                                to: "/"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Sign up ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "text-center text-base"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Already have an account?"),
                              createVNode(_component_NuxtLink, {
                                class: "text-primary ms-2",
                                to: "login"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Sign in instead ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "d-flex align-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VDivider),
                              createVNode("span", { class: "mx-4" }, "or"),
                              createVNode(VDivider)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "text-center"
                          }, {
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
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VImg, {
        class: "auth-footer-start-tree d-none d-md-block",
        src: unref(authV1Tree),
        width: 250
      }, null, _parent));
      _push(ssrRenderComponent(VImg, {
        src: unref(authV1Tree2),
        class: "auth-footer-end-tree d-none d-md-block",
        width: 350
      }, null, _parent));
      _push(ssrRenderComponent(VImg, {
        class: "auth-footer-mask d-none d-md-block",
        src: unref(authThemeMask)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
