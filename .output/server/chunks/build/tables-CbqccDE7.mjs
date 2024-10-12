import { useSSRContext, defineComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { V as VTable } from './VTable-DbXYOtR_.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VCard, a as VCardText } from './VCard-BCzimUKB.mjs';
import './server.mjs';
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DemoSimpleTableBasics",
  __ssrInlineRender: true,
  setup(__props) {
    const desserts = [
      {
        dessert: "Frozen Yogurt",
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Ice cream sandwich",
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Eclair",
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Cupcake",
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Gingerbread",
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTable, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-uppercase"${_scopeId}> Desserts(100g Servings) </th><th class="text-uppercase text-center"${_scopeId}> calories </th><th class="text-uppercase text-center"${_scopeId}> Fat(g) </th><th class="text-uppercase text-center"${_scopeId}> Carbs(g) </th><th class="text-uppercase text-center"${_scopeId}> protein(g) </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(desserts, (item) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(item.dessert)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.calories)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.fat)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.carbs)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.protein)}</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-uppercase" }, " Desserts(100g Servings) "),
                  createVNode("th", { class: "text-uppercase text-center" }, " calories "),
                  createVNode("th", { class: "text-uppercase text-center" }, " Fat(g) "),
                  createVNode("th", { class: "text-uppercase text-center" }, " Carbs(g) "),
                  createVNode("th", { class: "text-uppercase text-center" }, " protein(g) ")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(), createBlock(Fragment, null, renderList(desserts, (item) => {
                  return createVNode("tr", {
                    key: item.dessert
                  }, [
                    createVNode("td", null, toDisplayString(item.dessert), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.calories), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.fat), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.carbs), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.protein), 1)
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/pages/tables/DemoSimpleTableBasics.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DemoSimpleTableDensity",
  __ssrInlineRender: true,
  setup(__props) {
    const desserts = [
      {
        dessert: "Frozen Yogurt",
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Ice cream sandwich",
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Eclair",
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Cupcake",
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Gingerbread",
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTable, mergeProps({ density: "compact" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-uppercase"${_scopeId}> Desserts(100g Servings) </th><th class="text-uppercase text-center"${_scopeId}> calories </th><th class="text-uppercase text-center"${_scopeId}> Fat(g) </th><th class="text-uppercase text-center"${_scopeId}> Carbs(g) </th><th class="text-uppercase text-center"${_scopeId}> protein(g) </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(desserts, (item) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(item.dessert)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.calories)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.fat)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.carbs)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.protein)}</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-uppercase" }, " Desserts(100g Servings) "),
                  createVNode("th", { class: "text-uppercase text-center" }, " calories "),
                  createVNode("th", { class: "text-uppercase text-center" }, " Fat(g) "),
                  createVNode("th", { class: "text-uppercase text-center" }, " Carbs(g) "),
                  createVNode("th", { class: "text-uppercase text-center" }, " protein(g) ")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(), createBlock(Fragment, null, renderList(desserts, (item) => {
                  return createVNode("tr", {
                    key: item.dessert
                  }, [
                    createVNode("td", null, toDisplayString(item.dessert), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.calories), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.fat), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.carbs), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.protein), 1)
                  ]);
                }), 64))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/pages/tables/DemoSimpleTableDensity.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DemoSimpleTableFixedHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const desserts = [
      {
        dessert: "Frozen Yogurt",
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Ice cream sandwich",
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Eclair",
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Cupcake",
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Gingerbread",
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTable, mergeProps({
        height: "250",
        "fixed-header": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-uppercase"${_scopeId}> Desserts(100g Servings) </th><th class="text-uppercase text-center"${_scopeId}> calories </th><th class="text-uppercase text-center"${_scopeId}> Fat(g) </th><th class="text-uppercase text-center"${_scopeId}> Carbs(g) </th><th class="text-uppercase text-center"${_scopeId}> protein(g) </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(desserts, (item) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(item.dessert)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.calories)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.fat)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.carbs)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.protein)}</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-uppercase" }, " Desserts(100g Servings) "),
                  createVNode("th", { class: "text-uppercase text-center" }, " calories "),
                  createVNode("th", { class: "text-uppercase text-center" }, " Fat(g) "),
                  createVNode("th", { class: "text-uppercase text-center" }, " Carbs(g) "),
                  createVNode("th", { class: "text-uppercase text-center" }, " protein(g) ")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(), createBlock(Fragment, null, renderList(desserts, (item) => {
                  return createVNode("tr", {
                    key: item.dessert
                  }, [
                    createVNode("td", null, toDisplayString(item.dessert), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.calories), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.fat), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.carbs), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.protein), 1)
                  ]);
                }), 64))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/pages/tables/DemoSimpleTableFixedHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoSimpleTableHeight",
  __ssrInlineRender: true,
  setup(__props) {
    const desserts = [
      {
        dessert: "Frozen Yogurt",
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Ice cream sandwich",
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Eclair",
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Cupcake",
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Gingerbread",
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTable, mergeProps({ height: "250" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-uppercase"${_scopeId}> Desserts(100g Servings) </th><th class="text-uppercase text-center"${_scopeId}> calories </th><th class="text-uppercase text-center"${_scopeId}> Fat(g) </th><th class="text-uppercase text-center"${_scopeId}> Carbs(g) </th><th class="text-uppercase text-center"${_scopeId}> protein(g) </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(desserts, (item) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(item.dessert)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.calories)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.fat)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.carbs)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.protein)}</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-uppercase" }, " Desserts(100g Servings) "),
                  createVNode("th", { class: "text-uppercase text-center" }, " calories "),
                  createVNode("th", { class: "text-uppercase text-center" }, " Fat(g) "),
                  createVNode("th", { class: "text-uppercase text-center" }, " Carbs(g) "),
                  createVNode("th", { class: "text-uppercase text-center" }, " protein(g) ")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(), createBlock(Fragment, null, renderList(desserts, (item) => {
                  return createVNode("tr", {
                    key: item.dessert
                  }, [
                    createVNode("td", null, toDisplayString(item.dessert), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.calories), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.fat), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.carbs), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.protein), 1)
                  ]);
                }), 64))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/pages/tables/DemoSimpleTableHeight.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoSimpleTableTheme",
  __ssrInlineRender: true,
  setup(__props) {
    const desserts = [
      {
        dessert: "Frozen Yogurt",
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Ice cream sandwich",
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Eclair",
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Cupcake",
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Gingerbread",
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTable, mergeProps({ theme: "dark" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-uppercase"${_scopeId}> Desserts(100g Servings) </th><th class="text-uppercase text-center"${_scopeId}> calories </th><th class="text-uppercase text-center"${_scopeId}> Fat(g) </th><th class="text-uppercase text-center"${_scopeId}> Carbs(g) </th><th class="text-uppercase text-center"${_scopeId}> protein(g) </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(desserts, (item) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(item.dessert)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.calories)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.fat)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.carbs)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(item.protein)}</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-uppercase" }, " Desserts(100g Servings) "),
                  createVNode("th", { class: "text-uppercase text-center" }, " calories "),
                  createVNode("th", { class: "text-uppercase text-center" }, " Fat(g) "),
                  createVNode("th", { class: "text-uppercase text-center" }, " Carbs(g) "),
                  createVNode("th", { class: "text-uppercase text-center" }, " protein(g) ")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(), createBlock(Fragment, null, renderList(desserts, (item) => {
                  return createVNode("tr", {
                    key: item.dessert
                  }, [
                    createVNode("td", null, toDisplayString(item.dessert), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.calories), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.fat), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.carbs), 1),
                    createVNode("td", { class: "text-center" }, toDisplayString(item.protein), 1)
                  ]);
                }), 64))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/pages/tables/DemoSimpleTableTheme.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tables",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Basic" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$5, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$5)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { title: "Basic" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$5)
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
                  _push3(ssrRenderComponent(VCard, { title: "Theme" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` use <code${_scopeId4}>theme</code> prop to switch table to the dark theme. `);
                            } else {
                              return [
                                createTextVNode(" use "),
                                createVNode("code", null, "theme"),
                                createTextVNode(" prop to switch table to the dark theme. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$1, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" use "),
                              createVNode("code", null, "theme"),
                              createTextVNode(" prop to switch table to the dark theme. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { title: "Theme" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" use "),
                            createVNode("code", null, "theme"),
                            createTextVNode(" prop to switch table to the dark theme. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1)
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
                  _push3(ssrRenderComponent(VCard, { title: "Density" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` You can show a dense version of the table by using the <code${_scopeId4}>density</code> prop. `);
                            } else {
                              return [
                                createTextVNode(" You can show a dense version of the table by using the "),
                                createVNode("code", null, "density"),
                                createTextVNode(" prop. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$4, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" You can show a dense version of the table by using the "),
                              createVNode("code", null, "density"),
                              createTextVNode(" prop. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$4)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { title: "Density" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" You can show a dense version of the table by using the "),
                            createVNode("code", null, "density"),
                            createTextVNode(" prop. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$4)
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
                  _push3(ssrRenderComponent(VCard, { title: "Height" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` You can set the height of the table by using the <code${_scopeId4}>height</code> prop. `);
                            } else {
                              return [
                                createTextVNode(" You can set the height of the table by using the "),
                                createVNode("code", null, "height"),
                                createTextVNode(" prop. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$2, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" You can set the height of the table by using the "),
                              createVNode("code", null, "height"),
                              createTextVNode(" prop. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$2)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { title: "Height" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" You can set the height of the table by using the "),
                            createVNode("code", null, "height"),
                            createTextVNode(" prop. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$2)
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
                  _push3(ssrRenderComponent(VCard, { title: "Fixed Header" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` You can fix the header of table by using the <code${_scopeId4}>fixed-header</code> prop. `);
                            } else {
                              return [
                                createTextVNode(" You can fix the header of table by using the "),
                                createVNode("code", null, "fixed-header"),
                                createTextVNode(" prop. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$3, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" You can fix the header of table by using the "),
                              createVNode("code", null, "fixed-header"),
                              createTextVNode(" prop. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$3)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { title: "Fixed Header" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" You can fix the header of table by using the "),
                            createVNode("code", null, "fixed-header"),
                            createTextVNode(" prop. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$3)
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
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "Basic" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$5)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "Theme" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" use "),
                          createVNode("code", null, "theme"),
                          createTextVNode(" prop to switch table to the dark theme. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "Density" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" You can show a dense version of the table by using the "),
                          createVNode("code", null, "density"),
                          createTextVNode(" prop. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$4)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "Height" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" You can set the height of the table by using the "),
                          createVNode("code", null, "height"),
                          createTextVNode(" prop. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$2)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "Fixed Header" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" You can fix the header of table by using the "),
                          createVNode("code", null, "fixed-header"),
                          createTextVNode(" prop. ")
                        ]),
                        _: 1
                      }),
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
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tables.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
