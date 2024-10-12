import { defineComponent, mergeProps, withCtx, unref, createTextVNode, openBlock, createBlock, createVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard } from './VCard-BCzimUKB.mjs';
import { n as VImg, a as VBtn } from './server.mjs';
import './VAvatar-BZtC_Qdy.mjs';
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

const file = '\uFFFDPNG\r\n\n\0\0\0\rIHDR\0\0\0\uFFFD\0\0\0\uFFFD\b\0\0\0	m"H\0\0\0\uFFFDPLTE\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD%+\uFFFD\uFFFD\uFFFD\0U\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDB\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\uFFFD\uFFFD!\0w\uFFFD\x1B,5\uFFFD\uFFFD\uFFFD\0\uFFFD\uFFFD\0P\uFFFD\0f\uFFFD"&\0O\uFFFD\0L\uFFFD\0X\uFFFD\0|\uFFFD\0^\uFFFD\0c\uFFFD\0y\u01C6\uFFFD\uFFFD\uFFFD\uFFFD\0l\uFFFD\0s\uFFFD\0~\uFFFD\uFFFD\uFFFD7\uFFFD\uFFFD2\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD$\uFFFD\uFFFD\0|\uFFFD\uFFFD\uFFFD(\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD6\uFFFD\uFFFDE\uFFFD\uFFFD\\\uFFFD\u0488\uFFFD\uFFFDx\uFFFD\u05CA\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDS\uFFFD\u01E2\uFFFD\uFFFD\uFFFDe\u037Bz\uFFFD\uFFFD\uFFFDu\uFFFD\uFFFD\xBB\uFFFDa\uFFFD\uFFFDn\uFFFD\uFFFD\u0234w\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDx\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDd\uFFFD\u0650\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDD\uFFFD\uFFFD\uFFFD\uFFFDI\uFFFD\uFFFD\u547F\u04F8\uFFFD\uFFFD+\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD}\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDgS\uFFFD\uFFFD\uFFFDXB\0\0\uFFFDIDATx\uFFFD\uFFFD\vW\uFFFD6\uFFFDe\uFFFDq\uFFFD\r;K\uFFFD\u071D\va#	\uFFFDQ\uFFFD--+\u042D\uFFFD\uFFFDv\x1B\uFFFD\uFFFD?fv\uFFFD/\uFFFDr&;2\uFFFD\uFFFD\uFFFD\uFFFD9=\uFFFD\uFFFD\uFFFD[=\uFFFDl\u0242FH\v\uFFFD\uFFFDkja)\uFFFDfX2\uFFFD\uFFFDT\uFFFD\uFFFD$d\uFFFD\uFFFD\uFFFDl\uFFFD!\uFFFD\uFFFD,0\uFFFDCcM,+(\u0172bYbF\uFFFDZ\uFFFDi\uFFFD1\xD2\uFFFD\uFFFD\uFFFD|\uFFFD$B\uFFFD\uFFFD;8z\'\uFFFDu\uFFFD\uFFFDco\uFFFD\uFFFD\uFFFDL\uFFFD\uFFFD\u0663\uFFFD\uAC6C\uFFFD\uFFFD\uFFFDY\uFFFD\uFFFD`\b\uFFFD\uFFFDG\uFFFDaz\u0596\uFFFD\uFFFDg\uFFFD\uFFFD\uFFFD\uFFFDV\uFFFD\uFFFD\uFFFDm\uFFFD./j\x07VmQVr\b\uFFFD#X\uFFFD\uFFFD\uFFFD@\uFFFDC0\uFFFD\uFFFD\uFFFD9\rE\uFFFD\uFFFD8F\uFFFD\uFFFD6=\uFFFD\xF0&\uFFFD\uFFFD\u04867W\uFFFD\uFFFD\uFFFDW\uFFFD<\uFFFD\uFFFDF\uFFFD\uFFFD\uFFFDa\uFFFDQ`\uFFFD\uFFFD!\u04FCk\uFFFD\uFFFD~Ab*3\n\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD(+9\uFFFD\uFFFDkT\uFFFD\uFFFD7\uFFFDf	3\f\uFFFD\uFFFDF[s\uFFFDRX\uFFFD\uFFFD%A\uFFFDt#fx\uFFFD\uFFFDG\uFFFD\uFFFD\uFFFD\r\'\uFFFD\uFFFD\uFFFD\uFFFD\xF6{\uFFFD\uFFFD\uFFFDp\uFFFD\'#\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDw/\uFFFD*\uFFFD\uFFFD\bn\uFFFDM\uFFFDX\uFFFD+\uFFFD).h\uFFFD\uFFFD Bd\uFFFD\uFFFD\uFFFD6\uFFFD\u01E8\uFFFD\uFFFDa\uFFFD-\uFFFD\uFFFD\uFFFD\0\0\0\0\0\0\0Q\uFFFDS\uFFFD\uFFFD\uFFFDT\x07}\uFFFD:`(?`(?`(?`(?`(?`(?`(?`(?\uFFFD[\uFFFDA\u07E9N\uFFFD[}\0\0\0\0\0\0\0\0\0\0\0\0\uFFFDc\uFFFDl\uFFFD\uFFFDt[\u03B4:e;\u0171\x07M\uFFFD\uFFFD\uFFFD\uFFFDt\uFFFDE\u033D\x07}\uFFFDzq\uFFFDaXq\uFFFD\uFFFDVv\uFFFD\uFFFDJC\uFFFD\uFFFD!\uFFFD\uFFFD2\uFFFDd\uFFFD\uFFFD\uFFFD\u0307\uFFFDB\uFFFD\uFFFD8\uFFFD6\uFFFDS@\':-q\uFFFD\uFFFDS$N\uFFFD\uFFFD\xBB\uFFFD\uFFFD$\uFFFD\uFFFDO=\uFFFD\uFFFDI1e+\0\0\0\uFFFD\u0758x`\uFFFDt\uFFFD\uFFFD\uBE84\b6\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDwzf\x07>\uFFFDug?_\uFFFD\uFFFD8\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD;b\uFFFD?\uFFFD\uFFFD\uFFFD7\uFFFD_\uFFFD	\uFFFDz\uFFFD0\uFFFDxxu\uFFFDI\u066D\uFFFD\uFFFD^G\uFFFD\uFFFD\uFFFDzI\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD2\uFFFDy{\uFFFD5W\uFFFD}m\uFFFD\uFFFDj_a\u0760_\uFFFD\uFFFDj\uFFFDQ\uFFFD]\uFFFD\uFFFDj\uFFFD\uFFFDz:\uFFFD\uFFFD#9Y|-\uFFFDi\uFFFDo\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD2(\uFFFD\uFFFDf\uFFFD\uFFFD\uFFFDf\uFFFD\uFFFD"\uFFFDS\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD}\uFFFD\uFFFD\x7Fzj\f8\v\uFFFD_\uFFFD\uFFFD\uFFFD{\uFFFD\uFFFD\uFFFDx\uFFFD2\uFFFD\uFFFD\u0628it\uFFFDv\x7F\uFFFD\b\uFFFD\uFFFD#U\uFFFDZ\uFFFD\uFFFD\uFFFDm\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDJ\uFFFD\uFFFD8\uFFFD6EPK\uFFFD\uFFFDn7/\uFFFD\uFFFD\uFFFDv\uFFFD-\uFFFD\uFFFD\uFFFD\u0585?\uFFFD\uFFFD\uFFFDgL\uFFFD\uFFFD\uFFFDn"OC\u071F\uFFFD_\uFFFD\uFFFDN\uFFFDc\uFFFD2<\uFFFD\b~J\uFFFD\uFFFD\f_1\uFFFDcH~\uFFFD\uFFFD\uFFFDg|\uFFFD\x7F\uFFFD\fSq\f\uFFFD\x7Fd\uFFFD\f%442\x1B2}\uFFFD]\uFFFDb\uFFFD\uFFFD\uFFFD\uFFFD\x1B\uFFFD\uFFFDY\uFFFD1\uFFFDm\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDg\uFFFD2\uFFFDJnE\uFFFD\uFFFD\uFFFDY\u0525\uFFFD\uFFFDh\u062FC\uFFFD\uFFFD\uFFFDY\uFFFD\nZ\uFFFD\uFFFD\uFFFD\uFFFDhq\uFFFD\uFFFD\uFFFD\uFFFD^\uFFFD{\uFFFDGFCd\uFFFD\u037A\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDV\u01E93}9\uFFFD\uFFFDM\uFFFD\u0387\uFFFD\uFFFD7\\\uFFFD\uFFFDX\uFFFD\uFFFD(\uFFFD0W=B}\uFFFD\uFFFD\u0407\uFFFD\f\uFFFD\uFFFD\uFFFDP\f\uFFFDJ\uFFFD\uFFFD{\uFFFDmI\r)\u03FF\uFFFD\uFFFDiw\u04F1t]\uFFFDu\uFFFD\uFFFD\u04FA\uFFFDL\uFFFDi\uFFFD\u04D4	c|)\uFFFD"\uFFFD\uFFFD\uFFFD\uFFFD|c\uFFFD\x07#\uFFFD\uFFFD\uFFFD?\u0177{e\uFFFD5\'89\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFDm_\uFFFD!\uFFFD\b\u01B3\uFFFD\uFFFD\f\u035A.\uFFFD\uFFFDu\uFFFD\uFFFDQ\u0411\uFFFD\uFFFD\xCD-\uFFFDM&\uFFFD\uFFFD\uFFFD\uFFFD~\uFFFD\uFFFD;{</\uFFFD\uFFFD\uFFFD\uFFFDx\uFFFD\uFFFD\uFFFDzO\uFFFD\uFFFD?a\uFFFDvg\uFFFD\u0670\x1B\uFFFD`\uFFFD\uFFFD\uFFFD\uFFFD~s\uFFFD\uFFFD[\uFFFD)\uFFFD\uFFFD\uFFFDj\0\0\0\0\0\0\0 (\uFFFD/^\uFFFD\uFFFD\uFFFDw\uFFFD\uFFFD\uFFFD1\uFFFD"\uFFFD\x07\v\uFFFD}\uFFFD\uFFFD!=\uFFFDPm\uFFFD\uFFFD\uFFFDF"AS\r\uFFFD\x7Fp\uFFFDM)\uFFFD\uFFFDy\uFFFD\uFFFD\uFFFDt\xDC\uFFFDT<\uFFFD\u065B&z\uFFFD&\uFFFD\uFFFD\uFFFD\uFFFD.\uFFFD\uFFFD\uFFFD$Z\uFFFD\uFFFD.\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u58DF\uFFFD0\uFFFD\uFFFD\uFFFD\x7F0\uFFFDKQ<\u04C1\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03AFY\uFFFDD!# \uFFFD\uFFFDZ\uFFFD\nJ\uFFFDf	\uFFFDL\uFFFDA\uFFFD\uFFFD\uFFFD\uFFFD]\uFFFDLo\uFFFDPQ1\uFFFD\uFFFD\uFFFD\uFFFDX\uFFFD"R\uFFFD\uFFFD`\b\uFFFD\uFFFDG\uD5A1\uFFFDe\uFFFD!d[\uFFFDf\uFFFDe\uFFFD%1\uFFFDv`\uFFFD\uFFFD\uFFFDP\uFFFDe\uFFFD+o0C0,=\n\f0s\uFFFD9Z\uFFFDh\x07/Q2\uFFFD\uFFFD\uFFFDbnx\uFFFD\bQ\uFFFDu\uFFFD\uFFFDo1)B\uFFFDn=[\b\uFFFD,0C0,\uFFFDY\uFFFD\uFFFDb<\uFFFD]\uFFFD\uFFFD,\uFFFD\uFFFDtD\uFFFD#\uFFFD\uFFFDVs\uFFFD\uB10A\u0681U\uFFFD\uFFFD2V\uFFFD^y\uFFFD!\uFFFDa\uFFFDQ`\b\uFFFD\uFFFD\x1B\uFFFD\x07\uFFFD5\uFFFD\uFFFD\x1B\uFFFD?\uFFFD\0\0\0\0IEND\uFFFDB`\uFFFD';
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "page-8",
  __ssrInlineRender: true,
  setup(__props) {
    const brokerage = [
      {
        title: "Equity Intraday : 0.03%"
      },
      {
        title: "Equity Delivery :0.30%"
      },
      {
        title: "NSE & BSE Future :0.03%"
      },
      {
        title: "Option :RS 50 per lot"
      },
      {
        title: "MCX Future :0.02%"
      },
      {
        title: "MCX Option :RS 50 per lot"
      },
      {
        title: "Current Future and options RS 10 per lot"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, mergeProps({ class: "" }, _attrs), {
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
                        _push4(ssrRenderComponent(VImg, {
                          src: unref(file),
                          alt: "Coming Soon",
                          "max-width": "200",
                          class: "mx-auto"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { class: "d-flex justify-center text-gray text-xl font-bold" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Traditional Brokerage`);
                            } else {
                              return [
                                createTextVNode("Traditional Brokerage")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(brokerage, (brokerages) => {
                          _push4(ssrRenderComponent(VCol, {
                            key: brokerages,
                            class: "mx-4"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "2",
                                        class: "px-3"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="size-6"${_scopeId6}><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"${_scopeId6}></path></svg>`);
                                          } else {
                                            return [
                                              (openBlock(), createBlock("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                "stroke-width": "1.5",
                                                stroke: "green",
                                                class: "size-6"
                                              }, [
                                                createVNode("path", {
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  d: "m4.5 12.75 6 6 9-13.5"
                                                })
                                              ]))
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, { cols: "8" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<label${_scopeId6}>${ssrInterpolate(brokerages.title)}</label>`);
                                          } else {
                                            return [
                                              createVNode("label", null, toDisplayString(brokerages.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCol, {
                                          cols: "2",
                                          class: "px-3"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              "stroke-width": "1.5",
                                              stroke: "green",
                                              class: "size-6"
                                            }, [
                                              createVNode("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                d: "m4.5 12.75 6 6 9-13.5"
                                              })
                                            ]))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "8" }, {
                                          default: withCtx(() => [
                                            createVNode("label", null, toDisplayString(brokerages.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "2",
                                        class: "px-3"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            "stroke-width": "1.5",
                                            stroke: "green",
                                            class: "size-6"
                                          }, [
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              d: "m4.5 12.75 6 6 9-13.5"
                                            })
                                          ]))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "8" }, {
                                        default: withCtx(() => [
                                          createVNode("label", null, toDisplayString(brokerages.title), 1)
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
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
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
                          createVNode(VImg, {
                            src: unref(file),
                            alt: "Coming Soon",
                            "max-width": "200",
                            class: "mx-auto"
                          }, null, 8, ["src"]),
                          createVNode(VCol, { class: "d-flex justify-center text-gray text-xl font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("Traditional Brokerage")
                            ]),
                            _: 1
                          }),
                          (openBlock(), createBlock(Fragment, null, renderList(brokerage, (brokerages) => {
                            return createVNode(VCol, {
                              key: brokerages,
                              class: "mx-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "2",
                                      class: "px-3"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          "stroke-width": "1.5",
                                          stroke: "green",
                                          class: "size-6"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            d: "m4.5 12.75 6 6 9-13.5"
                                          })
                                        ]))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "8" }, {
                                      default: withCtx(() => [
                                        createVNode("label", null, toDisplayString(brokerages.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64)),
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
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          src: unref(file),
                          alt: "Coming Soon",
                          "max-width": "200",
                          class: "mx-auto"
                        }, null, 8, ["src"]),
                        createVNode(VCol, { class: "d-flex justify-center text-gray text-xl font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("Traditional Brokerage")
                          ]),
                          _: 1
                        }),
                        (openBlock(), createBlock(Fragment, null, renderList(brokerage, (brokerages) => {
                          return createVNode(VCol, {
                            key: brokerages,
                            class: "mx-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "2",
                                    class: "px-3"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        "stroke-width": "1.5",
                                        stroke: "green",
                                        class: "size-6"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          d: "m4.5 12.75 6 6 9-13.5"
                                        })
                                      ]))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "8" }, {
                                    default: withCtx(() => [
                                      createVNode("label", null, toDisplayString(brokerages.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64)),
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
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        src: unref(file),
                        alt: "Coming Soon",
                        "max-width": "200",
                        class: "mx-auto"
                      }, null, 8, ["src"]),
                      createVNode(VCol, { class: "d-flex justify-center text-gray text-xl font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Traditional Brokerage")
                        ]),
                        _: 1
                      }),
                      (openBlock(), createBlock(Fragment, null, renderList(brokerage, (brokerages) => {
                        return createVNode(VCol, {
                          key: brokerages,
                          class: "mx-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "2",
                                  class: "px-3"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      "stroke-width": "1.5",
                                      stroke: "green",
                                      class: "size-6"
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        d: "m4.5 12.75 6 6 9-13.5"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "8" }, {
                                  default: withCtx(() => [
                                    createVNode("label", null, toDisplayString(brokerages.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 64)),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-8.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
