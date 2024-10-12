import Datepicker from 'vue3-datepicker';
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, a as VBtn } from './server.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
import { V as VLabel } from './VLabel-CtbqF6Wb.mjs';
import { V as VAutocomplete } from './VAutocomplete-Dfgbzjtj.mjs';
import { V as VTextField } from './VTextField-BsyoThCd.mjs';
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
import './VField-DIVOjxLA.mjs';
import './VInput-X9CvPL_3.mjs';

const _sfc_main = {
  components: {
    Datepicker
  },
  data() {
    return {
      selectedDateTime: null,
      language: "en",
      selectedgenderButton: "FEMALE",
      selectedstatusButton: "UN-MARRIED",
      selectedparentButton: "FATHER"
    };
  },
  mounted() {
    const buttons = [
      this.$refs.genderButton1,
      this.$refs.genderButton2,
      this.$refs.genderButton3
    ];
    const statusbutton = [this.$refs.marrietalStatusButton1, this.$refs.marrietalStatusButton2];
    const parentsButton = [this.$refs.parentsButton1, this.$refs.parentsButton2];
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
        this.selectedgenderButton = button;
        console.log("Selected button value:", this.selectedgenderButton.textContent.trim());
      });
    });
    statusbutton.forEach((button) => {
      button.addEventListener("click", () => {
        statusbutton.forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
        this.selectedstatusButton = button;
        console.log("Selected button value:", this.selectedstatusButton.textContent.trim());
      });
    });
    parentsButton.forEach((button) => {
      button.addEventListener("click", () => {
        parentsButton.forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
        this.selectedparentButton = button;
        console.log("Selected button value:", this.selectedparentButton.textContent.trim());
      });
    });
  },
  method() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_datepicker = resolveComponent("datepicker");
  _push(ssrRenderComponent(VRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          md: "6"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, { class: "px-2" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, { class: "px-3" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`KYC detail(1/3)`);
                        } else {
                          return [
                            createTextVNode("KYC detail(1/3)")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "font-bold text-lg pt-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Let&#39;s Get To Know You`);
                        } else {
                          return [
                            createTextVNode("Let's Get To Know You")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "px-3 py-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`This is required to complete your KYC and securely open your demat account`);
                        } else {
                          return [
                            createTextVNode("This is required to complete your KYC and securely open your demat account")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VLabel, { class: "font-bold" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Gender`);
                              } else {
                                return [
                                  createTextVNode("Gender")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("Gender")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VRow, { class: "px-3" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<button class="gender-button"${_scopeId5}> MALE </button><button class="gender-button"${_scopeId5}> FEMALE </button><button class="gender-button"${_scopeId5}> TRANSGENDER </button>`);
                              } else {
                                return [
                                  createVNode("button", {
                                    ref: "genderButton1",
                                    class: "gender-button"
                                  }, " MALE ", 512),
                                  createVNode("button", {
                                    ref: "genderButton2",
                                    class: "gender-button"
                                  }, " FEMALE ", 512),
                                  createVNode("button", {
                                    ref: "genderButton3",
                                    class: "gender-button"
                                  }, " TRANSGENDER ", 512)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode("button", {
                                  ref: "genderButton1",
                                  class: "gender-button"
                                }, " MALE ", 512),
                                createVNode("button", {
                                  ref: "genderButton2",
                                  class: "gender-button"
                                }, " FEMALE ", 512),
                                createVNode("button", {
                                  ref: "genderButton3",
                                  class: "gender-button"
                                }, " TRANSGENDER ", 512)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VLabel, { class: "font-bold" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Marital Status`);
                              } else {
                                return [
                                  createTextVNode("Marital Status")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("Marital Status")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VRow, { class: "px-3" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<button class="gender-button"${_scopeId5}> UN-MARRIED </button><button class="gender-button"${_scopeId5}> MARRIED </button>`);
                              } else {
                                return [
                                  createVNode("button", {
                                    ref: "marrietalStatusButton1",
                                    class: "gender-button"
                                  }, " UN-MARRIED ", 512),
                                  createVNode("button", {
                                    ref: "marrietalStatusButton2",
                                    class: "gender-button"
                                  }, " MARRIED ", 512)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode("button", {
                                  ref: "marrietalStatusButton1",
                                  class: "gender-button"
                                }, " UN-MARRIED ", 512),
                                createVNode("button", {
                                  ref: "marrietalStatusButton2",
                                  class: "gender-button"
                                }, " MARRIED ", 512)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VLabel, { class: "font-bold" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Occupation`);
                              } else {
                                return [
                                  createTextVNode("Occupation")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("Occupation")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VAutocomplete, {
                            items: _ctx.items,
                            placeholder: "Select Occupation"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VAutocomplete, {
                              items: _ctx.items,
                              placeholder: "Select Occupation"
                            }, null, 8, ["items"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VLabel, { class: "font-bold" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Date Of Birth`);
                              } else {
                                return [
                                  createTextVNode("Date Of Birth")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("Date Of Birth")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_datepicker, {
                            modelValue: $data.selectedDateTime,
                            "onUpdate:modelValue": ($event) => $data.selectedDateTime = $event,
                            format: "yyyy-MM-dd HH:mm:ss",
                            language: $data.language,
                            class: "datepick"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_datepicker, {
                              modelValue: $data.selectedDateTime,
                              "onUpdate:modelValue": ($event) => $data.selectedDateTime = $event,
                              format: "yyyy-MM-dd HH:mm:ss",
                              language: $data.language,
                              class: "datepick"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "language"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VLabel, { class: "font-bold" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Parents Name`);
                              } else {
                                return [
                                  createTextVNode("Parents Name")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VLabel, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode("Parents Name")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VRow, { class: "px-3" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<button class="gender-button"${_scopeId5}> FATHER </button><button class="gender-button"${_scopeId5}> MOTHER </button>`);
                              } else {
                                return [
                                  createVNode("button", {
                                    ref: "parentsButton1",
                                    class: "gender-button"
                                  }, " FATHER ", 512),
                                  createVNode("button", {
                                    ref: "parentsButton2",
                                    class: "gender-button"
                                  }, " MOTHER ", 512)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode("button", {
                                  ref: "parentsButton1",
                                  class: "gender-button"
                                }, " FATHER ", 512),
                                createVNode("button", {
                                  ref: "parentsButton2",
                                  class: "gender-button"
                                }, " MOTHER ", 512)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, null, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      class: "pb-20"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VBtn, {
                            block: "",
                            type: "submit",
                            to: "/kycdetails2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` PROCEED `);
                              } else {
                                return [
                                  createTextVNode(" PROCEED ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VBtn, {
                              block: "",
                              type: "submit",
                              to: "/kycdetails2"
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
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, { class: "px-3" }, {
                        default: withCtx(() => [
                          createTextVNode("KYC detail(1/3)")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "font-bold text-lg pt-1" }, {
                        default: withCtx(() => [
                          createTextVNode("Let's Get To Know You")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "px-3 py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("This is required to complete your KYC and securely open your demat account")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VLabel, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("Gender")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { class: "px-3" }, {
                        default: withCtx(() => [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode("button", {
                                ref: "genderButton1",
                                class: "gender-button"
                              }, " MALE ", 512),
                              createVNode("button", {
                                ref: "genderButton2",
                                class: "gender-button"
                              }, " FEMALE ", 512),
                              createVNode("button", {
                                ref: "genderButton3",
                                class: "gender-button"
                              }, " TRANSGENDER ", 512)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VLabel, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("Marital Status")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { class: "px-3" }, {
                        default: withCtx(() => [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode("button", {
                                ref: "marrietalStatusButton1",
                                class: "gender-button"
                              }, " UN-MARRIED ", 512),
                              createVNode("button", {
                                ref: "marrietalStatusButton2",
                                class: "gender-button"
                              }, " MARRIED ", 512)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VLabel, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("Occupation")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VAutocomplete, {
                            items: _ctx.items,
                            placeholder: "Select Occupation"
                          }, null, 8, ["items"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VLabel, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("Date Of Birth")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_datepicker, {
                            modelValue: $data.selectedDateTime,
                            "onUpdate:modelValue": ($event) => $data.selectedDateTime = $event,
                            format: "yyyy-MM-dd HH:mm:ss",
                            language: $data.language,
                            class: "datepick"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "language"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VLabel, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("Parents Name")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, { class: "px-3" }, {
                        default: withCtx(() => [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode("button", {
                                ref: "parentsButton1",
                                class: "gender-button"
                              }, " FATHER ", 512),
                              createVNode("button", {
                                ref: "parentsButton2",
                                class: "gender-button"
                              }, " MOTHER ", 512)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VTextField)
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "pb-20"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            type: "submit",
                            to: "/kycdetails2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" PROCEED ")
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
                createVNode(VCard, { class: "px-2" }, {
                  default: withCtx(() => [
                    createVNode(VCol, { class: "px-3" }, {
                      default: withCtx(() => [
                        createTextVNode("KYC detail(1/3)")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "font-bold text-lg pt-1" }, {
                      default: withCtx(() => [
                        createTextVNode("Let's Get To Know You")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "px-3 py-1" }, {
                      default: withCtx(() => [
                        createTextVNode("This is required to complete your KYC and securely open your demat account")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VLabel, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("Gender")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, { class: "px-3" }, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode("button", {
                              ref: "genderButton1",
                              class: "gender-button"
                            }, " MALE ", 512),
                            createVNode("button", {
                              ref: "genderButton2",
                              class: "gender-button"
                            }, " FEMALE ", 512),
                            createVNode("button", {
                              ref: "genderButton3",
                              class: "gender-button"
                            }, " TRANSGENDER ", 512)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VLabel, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("Marital Status")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, { class: "px-3" }, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode("button", {
                              ref: "marrietalStatusButton1",
                              class: "gender-button"
                            }, " UN-MARRIED ", 512),
                            createVNode("button", {
                              ref: "marrietalStatusButton2",
                              class: "gender-button"
                            }, " MARRIED ", 512)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VLabel, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("Occupation")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VAutocomplete, {
                          items: _ctx.items,
                          placeholder: "Select Occupation"
                        }, null, 8, ["items"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VLabel, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("Date Of Birth")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_datepicker, {
                          modelValue: $data.selectedDateTime,
                          "onUpdate:modelValue": ($event) => $data.selectedDateTime = $event,
                          format: "yyyy-MM-dd HH:mm:ss",
                          language: $data.language,
                          class: "datepick"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "language"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VLabel, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("Parents Name")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, { class: "px-3" }, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode("button", {
                              ref: "parentsButton1",
                              class: "gender-button"
                            }, " FATHER ", 512),
                            createVNode("button", {
                              ref: "parentsButton2",
                              class: "gender-button"
                            }, " MOTHER ", 512)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VTextField)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "pb-20"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          block: "",
                          type: "submit",
                          to: "/kycdetails2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" PROCEED ")
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
              createVNode(VCard, { class: "px-2" }, {
                default: withCtx(() => [
                  createVNode(VCol, { class: "px-3" }, {
                    default: withCtx(() => [
                      createTextVNode("KYC detail(1/3)")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "font-bold text-lg pt-1" }, {
                    default: withCtx(() => [
                      createTextVNode("Let's Get To Know You")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "px-3 py-1" }, {
                    default: withCtx(() => [
                      createTextVNode("This is required to complete your KYC and securely open your demat account")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VLabel, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Gender")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, { class: "px-3" }, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode("button", {
                            ref: "genderButton1",
                            class: "gender-button"
                          }, " MALE ", 512),
                          createVNode("button", {
                            ref: "genderButton2",
                            class: "gender-button"
                          }, " FEMALE ", 512),
                          createVNode("button", {
                            ref: "genderButton3",
                            class: "gender-button"
                          }, " TRANSGENDER ", 512)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VLabel, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Marital Status")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, { class: "px-3" }, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode("button", {
                            ref: "marrietalStatusButton1",
                            class: "gender-button"
                          }, " UN-MARRIED ", 512),
                          createVNode("button", {
                            ref: "marrietalStatusButton2",
                            class: "gender-button"
                          }, " MARRIED ", 512)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VLabel, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Occupation")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VAutocomplete, {
                        items: _ctx.items,
                        placeholder: "Select Occupation"
                      }, null, 8, ["items"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VLabel, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Date Of Birth")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_datepicker, {
                        modelValue: $data.selectedDateTime,
                        "onUpdate:modelValue": ($event) => $data.selectedDateTime = $event,
                        format: "yyyy-MM-dd HH:mm:ss",
                        language: $data.language,
                        class: "datepick"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "language"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VLabel, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Parents Name")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, { class: "px-3" }, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode("button", {
                            ref: "parentsButton1",
                            class: "gender-button"
                          }, " FATHER ", 512),
                          createVNode("button", {
                            ref: "parentsButton2",
                            class: "gender-button"
                          }, " MOTHER ", 512)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VTextField)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "pb-20"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        block: "",
                        type: "submit",
                        to: "/kycdetails2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" PROCEED ")
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/kycdetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kycdetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { kycdetails as default };
