import { defineComponent, ref, withCtx, openBlock, createBlock, createVNode, toDisplayString, Fragment, renderList, createTextVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard, a as VCardText } from './VCard-BCzimUKB.mjs';
import { V as VForm } from './VForm-Avd0ACPh.mjs';
import { a as VBtn } from './server.mjs';
import './VAvatar-BZtC_Qdy.mjs';
import './form-CtAJx0Pr.mjs';
import './forwardRefs-BSTjJZPU.mjs';
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
  __name: "layoutswitch",
  __ssrInlineRender: true,
  setup(__props) {
    ref("");
    ref("");
    ref("");
    ref("");
    ref("");
    ref("");
    ref(false);
    const cardData = [
      {
        subtitle: "NSE CASH"
      },
      {
        subtitle: "BSE CASE"
      },
      {
        subtitle: "NSE F & O"
      },
      {
        subtitle: "NSE COMMODITY"
      },
      {
        subtitle: "BSE F & O"
      },
      {
        subtitle: "BSE COMMODITY"
      },
      {
        subtitle: "NSE CD"
      },
      {
        subtitle: "BSE CD"
      },
      {
        subtitle: "MCE"
      },
      {
        subtitle: "MSE CD"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Trading Segments" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, {
                          onSubmit: () => {
                          },
                          class: "p-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(cardData, (data) => {
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "12",
                                        md: "6",
                                        key: data
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCard, { class: "" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VRow, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VCol, { cols: "2" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(VCardText, null, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8C57FF" class="size-6"${_scopeId10}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"${_scopeId10}></path></svg>`);
                                                                  } else {
                                                                    return [
                                                                      (openBlock(), createBlock("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        "stroke-width": "1.5",
                                                                        stroke: "#8C57FF",
                                                                        class: "size-6"
                                                                      }, [
                                                                        createVNode("path", {
                                                                          "stroke-linecap": "round",
                                                                          "stroke-linejoin": "round",
                                                                          d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                                        })
                                                                      ]))
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode(VCardText, null, {
                                                                  default: withCtx(() => [
                                                                    (openBlock(), createBlock("svg", {
                                                                      xmlns: "http://www.w3.org/2000/svg",
                                                                      fill: "none",
                                                                      viewBox: "0 0 24 24",
                                                                      "stroke-width": "1.5",
                                                                      stroke: "#8C57FF",
                                                                      class: "size-6"
                                                                    }, [
                                                                      createVNode("path", {
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                                      })
                                                                    ]))
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(VCol, { cols: "7" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(VCardText, null, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(`<div class="text-[#8C57FF] font-bold text-xs mt-1"${_scopeId10}>${ssrInterpolate(data.subtitle)}</div>`);
                                                                  } else {
                                                                    return [
                                                                      createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, toDisplayString(data.subtitle), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode(VCardText, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, toDisplayString(data.subtitle), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(VCol, { cols: "1" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(VCardText, null, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8C57FF" class="size-6"${_scopeId10}><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"${_scopeId10}></path></svg>`);
                                                                  } else {
                                                                    return [
                                                                      (openBlock(), createBlock("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        "stroke-width": "1.5",
                                                                        stroke: "#8C57FF",
                                                                        class: "size-6"
                                                                      }, [
                                                                        createVNode("path", {
                                                                          "stroke-linecap": "round",
                                                                          "stroke-linejoin": "round",
                                                                          d: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                                                                        })
                                                                      ]))
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode(VCardText, null, {
                                                                  default: withCtx(() => [
                                                                    (openBlock(), createBlock("svg", {
                                                                      xmlns: "http://www.w3.org/2000/svg",
                                                                      fill: "none",
                                                                      viewBox: "0 0 24 24",
                                                                      "stroke-width": "1.5",
                                                                      stroke: "#8C57FF",
                                                                      class: "size-6"
                                                                    }, [
                                                                      createVNode("path", {
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        d: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                                                                      })
                                                                    ]))
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VCol, { cols: "2" }, {
                                                            default: withCtx(() => [
                                                              createVNode(VCardText, null, {
                                                                default: withCtx(() => [
                                                                  (openBlock(), createBlock("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    "stroke-width": "1.5",
                                                                    stroke: "#8C57FF",
                                                                    class: "size-6"
                                                                  }, [
                                                                    createVNode("path", {
                                                                      "stroke-linecap": "round",
                                                                      "stroke-linejoin": "round",
                                                                      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                                    })
                                                                  ]))
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VCol, { cols: "7" }, {
                                                            default: withCtx(() => [
                                                              createVNode(VCardText, null, {
                                                                default: withCtx(() => [
                                                                  createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, toDisplayString(data.subtitle), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(VCol, { cols: "1" }, {
                                                            default: withCtx(() => [
                                                              createVNode(VCardText, null, {
                                                                default: withCtx(() => [
                                                                  (openBlock(), createBlock("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    "stroke-width": "1.5",
                                                                    stroke: "#8C57FF",
                                                                    class: "size-6"
                                                                  }, [
                                                                    createVNode("path", {
                                                                      "stroke-linecap": "round",
                                                                      "stroke-linejoin": "round",
                                                                      d: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                                                                    })
                                                                  ]))
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VRow, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VCol, { cols: "2" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VCardText, null, {
                                                              default: withCtx(() => [
                                                                (openBlock(), createBlock("svg", {
                                                                  xmlns: "http://www.w3.org/2000/svg",
                                                                  fill: "none",
                                                                  viewBox: "0 0 24 24",
                                                                  "stroke-width": "1.5",
                                                                  stroke: "#8C57FF",
                                                                  class: "size-6"
                                                                }, [
                                                                  createVNode("path", {
                                                                    "stroke-linecap": "round",
                                                                    "stroke-linejoin": "round",
                                                                    d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                                  })
                                                                ]))
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, { cols: "7" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VCardText, null, {
                                                              default: withCtx(() => [
                                                                createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, toDisplayString(data.subtitle), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(VCol, { cols: "1" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VCardText, null, {
                                                              default: withCtx(() => [
                                                                (openBlock(), createBlock("svg", {
                                                                  xmlns: "http://www.w3.org/2000/svg",
                                                                  fill: "none",
                                                                  viewBox: "0 0 24 24",
                                                                  "stroke-width": "1.5",
                                                                  stroke: "#8C57FF",
                                                                  class: "size-6"
                                                                }, [
                                                                  createVNode("path", {
                                                                    "stroke-linecap": "round",
                                                                    "stroke-linejoin": "round",
                                                                    d: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                                                                  })
                                                                ]))
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCard, { class: "" }, {
                                                default: withCtx(() => [
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, { cols: "2" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VCardText, null, {
                                                            default: withCtx(() => [
                                                              (openBlock(), createBlock("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                "stroke-width": "1.5",
                                                                stroke: "#8C57FF",
                                                                class: "size-6"
                                                              }, [
                                                                createVNode("path", {
                                                                  "stroke-linecap": "round",
                                                                  "stroke-linejoin": "round",
                                                                  d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                                })
                                                              ]))
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, { cols: "7" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VCardText, null, {
                                                            default: withCtx(() => [
                                                              createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, toDisplayString(data.subtitle), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VCol, { cols: "1" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VCardText, null, {
                                                            default: withCtx(() => [
                                                              (openBlock(), createBlock("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                "stroke-width": "1.5",
                                                                stroke: "#8C57FF",
                                                                class: "size-6"
                                                              }, [
                                                                createVNode("path", {
                                                                  "stroke-linecap": "round",
                                                                  "stroke-linejoin": "round",
                                                                  d: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                                                                })
                                                              ]))
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(), createBlock(Fragment, null, renderList(cardData, (data) => {
                                        return createVNode(VCol, {
                                          cols: "12",
                                          md: "6",
                                          key: data
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, { class: "" }, {
                                              default: withCtx(() => [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, { cols: "2" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VCardText, null, {
                                                          default: withCtx(() => [
                                                            (openBlock(), createBlock("svg", {
                                                              xmlns: "http://www.w3.org/2000/svg",
                                                              fill: "none",
                                                              viewBox: "0 0 24 24",
                                                              "stroke-width": "1.5",
                                                              stroke: "#8C57FF",
                                                              class: "size-6"
                                                            }, [
                                                              createVNode("path", {
                                                                "stroke-linecap": "round",
                                                                "stroke-linejoin": "round",
                                                                d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                              })
                                                            ]))
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, { cols: "7" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VCardText, null, {
                                                          default: withCtx(() => [
                                                            createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, toDisplayString(data.subtitle), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VCol, { cols: "1" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VCardText, null, {
                                                          default: withCtx(() => [
                                                            (openBlock(), createBlock("svg", {
                                                              xmlns: "http://www.w3.org/2000/svg",
                                                              fill: "none",
                                                              viewBox: "0 0 24 24",
                                                              "stroke-width": "1.5",
                                                              stroke: "#8C57FF",
                                                              class: "size-6"
                                                            }, [
                                                              createVNode("path", {
                                                                "stroke-linecap": "round",
                                                                "stroke-linejoin": "round",
                                                                d: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                                                              })
                                                            ]))
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 64))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(cardData, (data) => {
                                      return createVNode(VCol, {
                                        cols: "12",
                                        md: "6",
                                        key: data
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, { class: "" }, {
                                            default: withCtx(() => [
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, { cols: "2" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCardText, null, {
                                                        default: withCtx(() => [
                                                          (openBlock(), createBlock("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            "stroke-width": "1.5",
                                                            stroke: "#8C57FF",
                                                            class: "size-6"
                                                          }, [
                                                            createVNode("path", {
                                                              "stroke-linecap": "round",
                                                              "stroke-linejoin": "round",
                                                              d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                            })
                                                          ]))
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { cols: "7" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCardText, null, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, toDisplayString(data.subtitle), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(VCol, { cols: "1" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCardText, null, {
                                                        default: withCtx(() => [
                                                          (openBlock(), createBlock("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            "stroke-width": "1.5",
                                                            stroke: "#8C57FF",
                                                            class: "size-6"
                                                          }, [
                                                            createVNode("path", {
                                                              "stroke-linecap": "round",
                                                              "stroke-linejoin": "round",
                                                              d: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                                                            })
                                                          ]))
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 64))
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
                          createVNode(VForm, {
                            onSubmit: withModifiers(() => {
                            }, ["prevent"]),
                            class: "p-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(cardData, (data) => {
                                    return createVNode(VCol, {
                                      cols: "12",
                                      md: "6",
                                      key: data
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, { class: "" }, {
                                          default: withCtx(() => [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { cols: "2" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VCardText, null, {
                                                      default: withCtx(() => [
                                                        (openBlock(), createBlock("svg", {
                                                          xmlns: "http://www.w3.org/2000/svg",
                                                          fill: "none",
                                                          viewBox: "0 0 24 24",
                                                          "stroke-width": "1.5",
                                                          stroke: "#8C57FF",
                                                          class: "size-6"
                                                        }, [
                                                          createVNode("path", {
                                                            "stroke-linecap": "round",
                                                            "stroke-linejoin": "round",
                                                            d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                          })
                                                        ]))
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "7" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VCardText, null, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, toDisplayString(data.subtitle), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VCol, { cols: "1" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VCardText, null, {
                                                      default: withCtx(() => [
                                                        (openBlock(), createBlock("svg", {
                                                          xmlns: "http://www.w3.org/2000/svg",
                                                          fill: "none",
                                                          viewBox: "0 0 24 24",
                                                          "stroke-width": "1.5",
                                                          stroke: "#8C57FF",
                                                          class: "size-6"
                                                        }, [
                                                          createVNode("path", {
                                                            "stroke-linecap": "round",
                                                            "stroke-linejoin": "round",
                                                            d: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                                                          })
                                                        ]))
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
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
                    createVNode(VCard, { title: "Trading Segments" }, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          onSubmit: withModifiers(() => {
                          }, ["prevent"]),
                          class: "p-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(cardData, (data) => {
                                  return createVNode(VCol, {
                                    cols: "12",
                                    md: "6",
                                    key: data
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, { class: "" }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { cols: "2" }, {
                                                default: withCtx(() => [
                                                  createVNode(VCardText, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        "stroke-width": "1.5",
                                                        stroke: "#8C57FF",
                                                        class: "size-6"
                                                      }, [
                                                        createVNode("path", {
                                                          "stroke-linecap": "round",
                                                          "stroke-linejoin": "round",
                                                          d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                        })
                                                      ]))
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "7" }, {
                                                default: withCtx(() => [
                                                  createVNode(VCardText, null, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, toDisplayString(data.subtitle), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCol, { cols: "1" }, {
                                                default: withCtx(() => [
                                                  createVNode(VCardText, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        "stroke-width": "1.5",
                                                        stroke: "#8C57FF",
                                                        class: "size-6"
                                                      }, [
                                                        createVNode("path", {
                                                          "stroke-linecap": "round",
                                                          "stroke-linejoin": "round",
                                                          d: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                                                        })
                                                      ]))
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
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
                  createVNode(VCard, { title: "Trading Segments" }, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        onSubmit: withModifiers(() => {
                        }, ["prevent"]),
                        class: "p-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(cardData, (data) => {
                                return createVNode(VCol, {
                                  cols: "12",
                                  md: "6",
                                  key: data
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, { class: "" }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "2" }, {
                                              default: withCtx(() => [
                                                createVNode(VCardText, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock("svg", {
                                                      xmlns: "http://www.w3.org/2000/svg",
                                                      fill: "none",
                                                      viewBox: "0 0 24 24",
                                                      "stroke-width": "1.5",
                                                      stroke: "#8C57FF",
                                                      class: "size-6"
                                                    }, [
                                                      createVNode("path", {
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                      })
                                                    ]))
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "7" }, {
                                              default: withCtx(() => [
                                                createVNode(VCardText, null, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "text-[#8C57FF] font-bold text-xs mt-1" }, toDisplayString(data.subtitle), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCol, { cols: "1" }, {
                                              default: withCtx(() => [
                                                createVNode(VCardText, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock("svg", {
                                                      xmlns: "http://www.w3.org/2000/svg",
                                                      fill: "none",
                                                      viewBox: "0 0 24 24",
                                                      "stroke-width": "1.5",
                                                      stroke: "#8C57FF",
                                                      class: "size-6"
                                                    }, [
                                                      createVNode("path", {
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        d: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                                                      })
                                                    ]))
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layoutswitch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
