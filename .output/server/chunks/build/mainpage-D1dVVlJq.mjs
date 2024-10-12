import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as VBtn } from './server.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VLabel } from './VLabel-CtbqF6Wb.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
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

const _sfc_main = {
  data() {
    return {
      emailAddress: "",
      isValidEmail: false,
      isError: false,
      isMobileNumberValid: false,
      mobileNumber: "",
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
    }
  }
};
const _imports_0 = "" + buildAssetsURL("new.CbdlZv6Z.jpeg");
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
              _push3(ssrRenderComponent(VCol, { class: "py-1" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span class="text-[#8C57FF] font-bold text-2xl pr-1"${_scopeId3}> Share</span><span class="text-3xl font-bold text-success"${_scopeId3}>.</span><span class="text-[#8C57FF] font-bold text-2xl px-2"${_scopeId3}>Market</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-[#8C57FF] font-bold text-2xl pr-1" }, " Share"),
                      createVNode("span", { class: "text-3xl font-bold text-success" }, "."),
                      createVNode("span", { class: "text-[#8C57FF] font-bold text-2xl px-2" }, "Market")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, { class: "font-bold text-lg text-black py-1" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Open Your Free Demat &amp; <br${_scopeId3}> Trading Account`);
                  } else {
                    return [
                      createTextVNode("Open Your Free Demat & "),
                      createVNode("br"),
                      createTextVNode(" Trading Account")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, { class: "py-1" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VLabel, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Trade on Stocks ETF&#39;s and wealth`);
                        } else {
                          return [
                            createTextVNode("Trade on Stocks ETF's and wealth")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("Trade on Stocks ETF's and wealth")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<!--[-->`);
              ssrRenderList(this == null ? void 0 : this.solidCardData, (data) => {
                _push3(ssrRenderComponent(VCol, {
                  key: data,
                  class: "py-1"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(VCard, {
                        color: data == null ? void 0 : data.cardBg,
                        class: "absolute top-6"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<img${ssrRenderAttr("src", _imports_0)} alt="" class=""${_scopeId4}>`);
                          } else {
                            return [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "",
                                class: ""
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(VCard, {
                          color: data == null ? void 0 : data.cardBg,
                          class: "absolute top-6"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "",
                              class: ""
                            })
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
              _push3(ssrRenderComponent(VCol, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, { class: "static" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="border-b-2 text-black text-[14px] px-2 py-2"${_scopeId4}>Things To Keep Money</div><div class="d-flex align-center mb-6 mt-3 px-2"${_scopeId4}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8C57FF" class="h-5 w-5"${_scopeId4}><path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM7 6V10H11V6H7ZM7 12V14H17V12H7ZM7 16V18H17V16H7ZM13 7V9H17V7H13Z"${_scopeId4}></path></svg><span class="ms-3"${_scopeId4}>PAN and Adhar number</span></div><div class="d-flex align-center mb-6 px-2"${_scopeId4}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8C57FF" class="h-7 w-7"${_scopeId4}><path d="M12 6C12 4.46329 12.5777 3.06151 13.5278 2H6C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V11.917C18.6748 11.9716 18.3407 12 18 12C14.6863 12 12 9.31371 12 6ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17ZM22 6H19V2H17V6H14L18 10L22 6Z"${_scopeId4}></path></svg><span class="ms-3"${_scopeId4}>Any Mobile Number linked to Adhar to receive OTP</span></div><div class="d-flex align-center mb-2 px-2"${_scopeId4}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8C57FF" class="h-5 w-5"${_scopeId4}><path d="M2 20H22V22H2V20ZM4 12H6V19H4V12ZM9 12H11V19H9V12ZM13 12H15V19H13V12ZM18 12H20V19H18V12ZM2 7L12 2L22 7V11H2V7ZM12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z"${_scopeId4}></path></svg><span class="ms-3"${_scopeId4}>Bank Account number and IFSC </span></div>`);
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            class: "py-3"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VBtn, {
                                  block: "",
                                  type: "submit",
                                  to: "/addEmail"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` OPEN FREE ACCOUNT `);
                                    } else {
                                      return [
                                        createTextVNode(" OPEN FREE ACCOUNT ")
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
                                    to: "/addEmail"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" OPEN FREE ACCOUNT ")
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
                            createVNode("div", { class: "border-b-2 text-black text-[14px] px-2 py-2" }, "Things To Keep Money"),
                            createVNode("div", { class: "d-flex align-center mb-6 mt-3 px-2" }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "#8C57FF",
                                class: "h-5 w-5"
                              }, [
                                createVNode("path", { d: "M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM7 6V10H11V6H7ZM7 12V14H17V12H7ZM7 16V18H17V16H7ZM13 7V9H17V7H13Z" })
                              ])),
                              createVNode("span", { class: "ms-3" }, "PAN and Adhar number")
                            ]),
                            createVNode("div", { class: "d-flex align-center mb-6 px-2" }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "#8C57FF",
                                class: "h-7 w-7"
                              }, [
                                createVNode("path", { d: "M12 6C12 4.46329 12.5777 3.06151 13.5278 2H6C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V11.917C18.6748 11.9716 18.3407 12 18 12C14.6863 12 12 9.31371 12 6ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17ZM22 6H19V2H17V6H14L18 10L22 6Z" })
                              ])),
                              createVNode("span", { class: "ms-3" }, "Any Mobile Number linked to Adhar to receive OTP")
                            ]),
                            createVNode("div", { class: "d-flex align-center mb-2 px-2" }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "#8C57FF",
                                class: "h-5 w-5"
                              }, [
                                createVNode("path", { d: "M2 20H22V22H2V20ZM4 12H6V19H4V12ZM9 12H11V19H9V12ZM13 12H15V19H13V12ZM18 12H20V19H18V12ZM2 7L12 2L22 7V11H2V7ZM12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" })
                              ])),
                              createVNode("span", { class: "ms-3" }, "Bank Account number and IFSC ")
                            ]),
                            createVNode(VCol, {
                              cols: "12",
                              class: "py-3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  type: "submit",
                                  to: "/addEmail"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" OPEN FREE ACCOUNT ")
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
                      createVNode(VCard, { class: "static" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b-2 text-black text-[14px] px-2 py-2" }, "Things To Keep Money"),
                          createVNode("div", { class: "d-flex align-center mb-6 mt-3 px-2" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              fill: "#8C57FF",
                              class: "h-5 w-5"
                            }, [
                              createVNode("path", { d: "M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM7 6V10H11V6H7ZM7 12V14H17V12H7ZM7 16V18H17V16H7ZM13 7V9H17V7H13Z" })
                            ])),
                            createVNode("span", { class: "ms-3" }, "PAN and Adhar number")
                          ]),
                          createVNode("div", { class: "d-flex align-center mb-6 px-2" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              fill: "#8C57FF",
                              class: "h-7 w-7"
                            }, [
                              createVNode("path", { d: "M12 6C12 4.46329 12.5777 3.06151 13.5278 2H6C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V11.917C18.6748 11.9716 18.3407 12 18 12C14.6863 12 12 9.31371 12 6ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17ZM22 6H19V2H17V6H14L18 10L22 6Z" })
                            ])),
                            createVNode("span", { class: "ms-3" }, "Any Mobile Number linked to Adhar to receive OTP")
                          ]),
                          createVNode("div", { class: "d-flex align-center mb-2 px-2" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              fill: "#8C57FF",
                              class: "h-5 w-5"
                            }, [
                              createVNode("path", { d: "M2 20H22V22H2V20ZM4 12H6V19H4V12ZM9 12H11V19H9V12ZM13 12H15V19H13V12ZM18 12H20V19H18V12ZM2 7L12 2L22 7V11H2V7ZM12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" })
                            ])),
                            createVNode("span", { class: "ms-3" }, "Bank Account number and IFSC ")
                          ]),
                          createVNode(VCol, {
                            cols: "12",
                            class: "py-3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                type: "submit",
                                to: "/addEmail"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" OPEN FREE ACCOUNT ")
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
                createVNode(VCol, { class: "py-1" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-[#8C57FF] font-bold text-2xl pr-1" }, " Share"),
                    createVNode("span", { class: "text-3xl font-bold text-success" }, "."),
                    createVNode("span", { class: "text-[#8C57FF] font-bold text-2xl px-2" }, "Market")
                  ]),
                  _: 1
                }),
                createVNode(VCol, { class: "font-bold text-lg text-black py-1" }, {
                  default: withCtx(() => [
                    createTextVNode("Open Your Free Demat & "),
                    createVNode("br"),
                    createTextVNode(" Trading Account")
                  ]),
                  _: 1
                }),
                createVNode(VCol, { class: "py-1" }, {
                  default: withCtx(() => [
                    createVNode(VLabel, null, {
                      default: withCtx(() => [
                        createTextVNode("Trade on Stocks ETF's and wealth")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                (openBlock(true), createBlock(Fragment, null, renderList(this == null ? void 0 : this.solidCardData, (data) => {
                  return openBlock(), createBlock(VCol, {
                    key: data,
                    class: "py-1"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        color: data == null ? void 0 : data.cardBg,
                        class: "absolute top-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "",
                            class: ""
                          })
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128)),
                createVNode(VCol, null, {
                  default: withCtx(() => [
                    createVNode(VCard, { class: "static" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border-b-2 text-black text-[14px] px-2 py-2" }, "Things To Keep Money"),
                        createVNode("div", { class: "d-flex align-center mb-6 mt-3 px-2" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "#8C57FF",
                            class: "h-5 w-5"
                          }, [
                            createVNode("path", { d: "M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM7 6V10H11V6H7ZM7 12V14H17V12H7ZM7 16V18H17V16H7ZM13 7V9H17V7H13Z" })
                          ])),
                          createVNode("span", { class: "ms-3" }, "PAN and Adhar number")
                        ]),
                        createVNode("div", { class: "d-flex align-center mb-6 px-2" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "#8C57FF",
                            class: "h-7 w-7"
                          }, [
                            createVNode("path", { d: "M12 6C12 4.46329 12.5777 3.06151 13.5278 2H6C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V11.917C18.6748 11.9716 18.3407 12 18 12C14.6863 12 12 9.31371 12 6ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17ZM22 6H19V2H17V6H14L18 10L22 6Z" })
                          ])),
                          createVNode("span", { class: "ms-3" }, "Any Mobile Number linked to Adhar to receive OTP")
                        ]),
                        createVNode("div", { class: "d-flex align-center mb-2 px-2" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "#8C57FF",
                            class: "h-5 w-5"
                          }, [
                            createVNode("path", { d: "M2 20H22V22H2V20ZM4 12H6V19H4V12ZM9 12H11V19H9V12ZM13 12H15V19H13V12ZM18 12H20V19H18V12ZM2 7L12 2L22 7V11H2V7ZM12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" })
                          ])),
                          createVNode("span", { class: "ms-3" }, "Bank Account number and IFSC ")
                        ]),
                        createVNode(VCol, {
                          cols: "12",
                          class: "py-3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              type: "submit",
                              to: "/addEmail"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" OPEN FREE ACCOUNT ")
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCol, {
            cols: "12",
            md: "6"
          }, {
            default: withCtx(() => [
              createVNode(VCol, { class: "py-1" }, {
                default: withCtx(() => [
                  createVNode("span", { class: "text-[#8C57FF] font-bold text-2xl pr-1" }, " Share"),
                  createVNode("span", { class: "text-3xl font-bold text-success" }, "."),
                  createVNode("span", { class: "text-[#8C57FF] font-bold text-2xl px-2" }, "Market")
                ]),
                _: 1
              }),
              createVNode(VCol, { class: "font-bold text-lg text-black py-1" }, {
                default: withCtx(() => [
                  createTextVNode("Open Your Free Demat & "),
                  createVNode("br"),
                  createTextVNode(" Trading Account")
                ]),
                _: 1
              }),
              createVNode(VCol, { class: "py-1" }, {
                default: withCtx(() => [
                  createVNode(VLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("Trade on Stocks ETF's and wealth")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList(this == null ? void 0 : this.solidCardData, (data) => {
                return openBlock(), createBlock(VCol, {
                  key: data,
                  class: "py-1"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      color: data == null ? void 0 : data.cardBg,
                      class: "absolute top-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          class: ""
                        })
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ]),
                  _: 2
                }, 1024);
              }), 128)),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "static" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "border-b-2 text-black text-[14px] px-2 py-2" }, "Things To Keep Money"),
                      createVNode("div", { class: "d-flex align-center mb-6 mt-3 px-2" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          fill: "#8C57FF",
                          class: "h-5 w-5"
                        }, [
                          createVNode("path", { d: "M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM7 6V10H11V6H7ZM7 12V14H17V12H7ZM7 16V18H17V16H7ZM13 7V9H17V7H13Z" })
                        ])),
                        createVNode("span", { class: "ms-3" }, "PAN and Adhar number")
                      ]),
                      createVNode("div", { class: "d-flex align-center mb-6 px-2" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          fill: "#8C57FF",
                          class: "h-7 w-7"
                        }, [
                          createVNode("path", { d: "M12 6C12 4.46329 12.5777 3.06151 13.5278 2H6C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V11.917C18.6748 11.9716 18.3407 12 18 12C14.6863 12 12 9.31371 12 6ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17ZM22 6H19V2H17V6H14L18 10L22 6Z" })
                        ])),
                        createVNode("span", { class: "ms-3" }, "Any Mobile Number linked to Adhar to receive OTP")
                      ]),
                      createVNode("div", { class: "d-flex align-center mb-2 px-2" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          fill: "#8C57FF",
                          class: "h-5 w-5"
                        }, [
                          createVNode("path", { d: "M2 20H22V22H2V20ZM4 12H6V19H4V12ZM9 12H11V19H9V12ZM13 12H15V19H13V12ZM18 12H20V19H18V12ZM2 7L12 2L22 7V11H2V7ZM12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" })
                        ])),
                        createVNode("span", { class: "ms-3" }, "Bank Account number and IFSC ")
                      ]),
                      createVNode(VCol, {
                        cols: "12",
                        class: "py-3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            type: "submit",
                            to: "/addEmail"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" OPEN FREE ACCOUNT ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mainpage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mainpage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { mainpage as default };
