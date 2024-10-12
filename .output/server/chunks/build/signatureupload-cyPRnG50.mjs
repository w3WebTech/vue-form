import { defineComponent, useSSRContext, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, a as VBtn } from './server.mjs';
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

const _sfc_main = defineComponent({
  data() {
    return {
      fileInput: null,
      images: null,
      isDialogVisible: false
    };
  },
  methods: {
    openFileInput() {
      if (this.fileInput) {
        this.fileInput.click();
      }
    },
    handleFileUpload(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          var _a;
          if (typeof ((_a = e.target) == null ? void 0 : _a.result) === "string") {
            this.images = e.target.result;
          }
        };
        reader.readAsDataURL(file);
      }
    }
  },
  mounted() {
    this.fileInput = this.$refs.fileInput;
  }
});
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
              _push3(ssrRenderComponent(VCard, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, { class: "py-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Signature`);
                        } else {
                          return [
                            createTextVNode("Signature")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "font-bold text-lg py-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Add Your Signature`);
                        } else {
                          return [
                            createTextVNode("Add Your Signature")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "py-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Your SIgnature is required to securely open your demat account`);
                        } else {
                          return [
                            createTextVNode("Your SIgnature is required to securely open your demat account")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      class: ""
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="border border-gray rounded-md h-40"${_scopeId4}>`);
                          _push5(ssrRenderComponent(VCol, { onClick: _ctx.openFileInput }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div${_scopeId5}>Draw your sign in this box...</div>`);
                              } else {
                                return [
                                  createVNode("div", null, "Draw your sign in this box...")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<input type="file" id="fileInput" hidden${_scopeId4}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "border border-gray rounded-md h-40" }, [
                              createVNode(VCol, { onClick: _ctx.openFileInput }, {
                                default: withCtx(() => [
                                  createVNode("div", null, "Draw your sign in this box...")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode("input", {
                                type: "file",
                                ref: "fileInput",
                                id: "fileInput",
                                onChange: _ctx.handleFileUpload,
                                hidden: ""
                              }, null, 40, ["onChange"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      class: "pt-10"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VBtn, {
                            block: "",
                            type: "submit",
                            to: "/segmentactivation"
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
                              to: "/segmentactivation"
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
                      createVNode(VCol, { class: "py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("Signature")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("Add Your Signature")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("Your SIgnature is required to securely open your demat account")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: ""
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border border-gray rounded-md h-40" }, [
                            createVNode(VCol, { onClick: _ctx.openFileInput }, {
                              default: withCtx(() => [
                                createVNode("div", null, "Draw your sign in this box...")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode("input", {
                              type: "file",
                              ref: "fileInput",
                              id: "fileInput",
                              onChange: _ctx.handleFileUpload,
                              hidden: ""
                            }, null, 40, ["onChange"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "pt-10"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            type: "submit",
                            to: "/segmentactivation"
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
                createVNode(VCard, null, {
                  default: withCtx(() => [
                    createVNode(VCol, { class: "py-1" }, {
                      default: withCtx(() => [
                        createTextVNode("Signature")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                      default: withCtx(() => [
                        createTextVNode("Add Your Signature")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { class: "py-1" }, {
                      default: withCtx(() => [
                        createTextVNode("Your SIgnature is required to securely open your demat account")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: ""
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border border-gray rounded-md h-40" }, [
                          createVNode(VCol, { onClick: _ctx.openFileInput }, {
                            default: withCtx(() => [
                              createVNode("div", null, "Draw your sign in this box...")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode("input", {
                            type: "file",
                            ref: "fileInput",
                            id: "fileInput",
                            onChange: _ctx.handleFileUpload,
                            hidden: ""
                          }, null, 40, ["onChange"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "pt-10"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          block: "",
                          type: "submit",
                          to: "/segmentactivation"
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCol, { class: "py-1" }, {
                    default: withCtx(() => [
                      createTextVNode("Signature")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                    default: withCtx(() => [
                      createTextVNode("Add Your Signature")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { class: "py-1" }, {
                    default: withCtx(() => [
                      createTextVNode("Your SIgnature is required to securely open your demat account")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: ""
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "border border-gray rounded-md h-40" }, [
                        createVNode(VCol, { onClick: _ctx.openFileInput }, {
                          default: withCtx(() => [
                            createVNode("div", null, "Draw your sign in this box...")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode("input", {
                          type: "file",
                          ref: "fileInput",
                          id: "fileInput",
                          onChange: _ctx.handleFileUpload,
                          hidden: ""
                        }, null, 40, ["onChange"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "pt-10"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        block: "",
                        type: "submit",
                        to: "/segmentactivation"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signatureupload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signatureupload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { signatureupload as default };
