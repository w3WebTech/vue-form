import { defineComponent, useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as VBtn } from './server.mjs';
import { V as VRow } from './VRow-PELeuRof.mjs';
import { V as VCol } from './VCol-DQ0BDQfX.mjs';
import { V as VAlert } from './VAlert-BwRJIlJK.mjs';
import { V as VDialog } from './VDialog-rjqrpDhf.mjs';
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
import './VOverlay-CsNFlnFM.mjs';
import './easing-CuhD-vKF.mjs';
import './lazy-BteLhbse.mjs';
import './forwardRefs-BSTjJZPU.mjs';
import './dialog-transition-CRChXgJR.mjs';

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
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEUAAAD////u7u7t7e339/fv7+/+/v77+/vy8vKFhYW4uLj4+Ph1dXV8fHxCQkKZmZnNzc0yMjJXV1ff398LCwvn5+djY2OMjIzGxsZra2sSEhI6OjpSUlKgoKAlJSW+vr6srKwuLi5eXl5KSkoeHh4+Pj7T09NwcHCxsbGJiYmUlJSlpaUREREgICByJaxJAAANbUlEQVR4nO2df2OyLBfHRUBottVytn5sa6trrWu7r/f/9h41UUFFIFDr2fe/uTzxCZXD4XD0ABP1c1F2BM53s+V28+SNV0+b7XK2m0NAsuZDwtoeQobjtRCSMIEbuv3K2u5fcUgw1CC8WwzdaG0tThQoEUIc+rPHoZtrpLdvCLoJk1/h52Pophrr46eLENJgPuYHS7ee5lJCiMD9dQMmiPfthBCG8WHoBlrQS9zah2D1NnTrrOjfKiVk8igTAndDN82a7gANmby8L6EPXodul0W9FpcmKAjBauhWWdWdSAjD2wL0vBVPCFHc8pDZ7tfTyWj1d7petPhf/2KOkILGYeLt/Zh/juQKis4P2KHyiidah+yYCkB8fG3snZcqIQzu65/YTKLCFILMaa0Mn/mhYrIF2BAEw6IJxaHAkSkIcWIommzqAPclISQNrtoCAlprll9pFjfZ0ie0aCr9sWB9MpQ7cF72XXXAuwBBebMu7EPrpnY1hu2ZMBnrw5+mDkxUXPqo8AuKQ6WnUD8UsiNh/Txnphq68Se9U1OvzRenS8v8l/OZ54PKH5epMtdkqnRKrrJTejBFw6XA8ZF5bcn/ZyIgOxGzC6OwFRTXSn02XWlW/cbqwxQFIuIsudxTQmFEWYSdtsZJ6NNQuFA/KE4JRYcbKtgaJ6FPocByR5KrlAjcpUd3fYRQfKLuw6QPsXCNBr03y6opob8w9YTnzAai6yaEvHfzmowW/PNnAuB1EwLeAV0CD/KR7Yj2O4jZNxVxPFvozbkDbyAIiI/P8gMmhJlAfgRQdgSxDwF2Hg7ZoSFMAX6mMff4h8870HWXbfilNk1BIRqz8/gHzVG7WSOYW/Cm8JEjmnncg2Yb3wBhzPloS4970OyHapZFU5AfErceN3ysb4EwWFeRNh43+Z3eAKFPplUkYXI/uQnCv167ckKmiq1c1dBDbSguzqs0awBTZCIlRNcvICUk3C+Ja/5RYOpq9WlKTugP4y5bNfVL+Ev4S/hLODQhtNIsqN8si6akhEEyYabFjBnXJt9BMdMm7EjIPuSD2uR7EFNywvQnIPVxt/CP/MqPq+Vq9Wiqw2sDN+B5/xL+Ev7fEVbjsrdICGmIomh+N48iCBC+OcLk8R59s8jW5/0qH7KvgFB15AHRnjv9v7vz2Dbm8TDQSJIIgu8/ooF1BAZP3ej0S5VX14iYF5ApAo0JMpf6pTqmLM0tAtKSMT0f+dxCnbCxBxM9RTdBCMF3q5EtQTdASI+SXQvf5PoJIdhLrLzFWL9ZIyOkkcSI5z2zEduUsDzPRRSDiy4325LdhZnyMxVMNRFCGhUnNo0WXabkPk06kBZbFYrhtjx0/pN2bN6LiHhem6lsmBY+hMjhG7Sf12VKJ4rRusojv0jTnMCzDNeenr01W8Kwv/YElHzcLsJJ0axOU6B+r6XpIdH5bhtsbjGX2Eg1vYQw+/neifE0xQph1w6pNTEnDF9SCw9gWMJ61jivr8Cc8OwNbmI6KKHD+/CUm3hHoyZ8NiYstl8tyaCE8FNOuDMlpGXaHaQOCbvjBQ27iKoqm6UVxUBVd/dEnEQx+EyF1kxOJN/Lt2dxFs38Us4ZXPD0GqZseN4YSAlXtLjsOk1V/VLud3vLNpYNN3uqbSSq6MVwBhzzZk5DEvoYtQUxEsWhESEWAj8PgxLKZogzwzhN7elFBiWErWPixDDWJu6+SreeDZypsGoM1UwMm3Wsm1oHQ+diRA2I38CMEDdsWH6KnUQxdHLkwmfh/P15Y7RBul1jeHnnIHMPSMMLYiwBgWOVcb8KEFKMVPCmwHtjc16AvilKVaIYrM87N2Cnf+++79fr9fR5V1xS2nu5g5b5ZjKF0t8WbjsXA2KS7YtPD5ku+qGotoaV6x0Nvgbs29joQh7a2rMkIyC0sHArmaiUPus1E8qCPiegZWqchNJ4QbGt/IoJYetNmOot0jBlm7C+oGBEKJmjpFppmAJKo0W/pR6CBn+b1wtQNFU2IbARxYCWtraS7spGzEnrOYphZ1kT0rbKRhX9hCqmuFaNh5CCjqBkqvvgiglDWVOYNvmS+TUSSqNZpXbnp+gVEnYuDeRagGslpIpFfP9geqWEHQsDpU7IKmFv42FHNke1UYHN8RD0VOpBq4gh1WuV3KdJfwL3M2CIqE6l1LlWq0axowSHCkN9qaVeq3og9IvYQ4spon4TptrCsREi+gElhFC72O1uZIQ0PrCEmkZTdN5QxlGq2bgIKU3j18dWQgz+aQJmBRDHQ0jjzFdZtBLyhTnUZJ2QSb/UQwL4cjb13mLKqCDzaTxVI4LC23z0m0s6dKXENepep11uq0ZUirpPgF831VqvWK6P2NdolUvPm1YXySJU2wYCgcFNmOqoUyfPIWHMTYgWRCTE0i+X6V6n1qEzwuIhw7QjvKmuRCOJvsAICBESp7RvIWcKokh3qM+1PwZ0cEJIG94c8Qyqpmhg9mqeP+9pobmhCSER830yxRVTMJg2fKJbjzHBeq1yUjWC0sbi74tidMYQvBsBTgmyGokyrBpBacsosALMFJHtlGrXmtBxVI14aTG4Ifn4DKjRU2ZdXATDVo2g7Utkr+dTsYm/7XmHMtg07NxCsgb4BLNYoEZoraooHEGmAkSo7RLNtABp4KZr+0KzfsDQ+/GzI20PGaY5hWHcljAj1T7EImEyU+qbkAbSHkx0CGho9hqpORLCdrB8H0VvhBR3rMN76VzYbEJxAEJgEgbx6fPxcb0i/RHi1h3dFW0NX7O0QzwhDI75SxzW6FJC1ZGH0q5L9AI9iAUoKqn8/6ikVfaqRiT+g5mnqaYvwOdbBHHlNRxfpD0LxF7VCGA6YVfTKu+U/PsoH8KKKXQ/tyAue9DzUOWBlrWKi/DMiPuqEcAt4KZGyP373jkhNXM01bUMpIRT14S46R1YVpW/j2ooQuz2IZNqNighJq570CGhQtUIiNXzKMzFCMvRgvv3lBiOFipVI5D7S9RLCYUmCITAZdUIWc1za5qdU0hKr00kdFg14sstWq5ZthzZQVhpVXnbXkwo7nVypOEIewK8hJBrohBd6CLs5Sl6lkgYKBOG3CKs0OAuQsOQmYnM+xBzS0TCmrOcsMcevIQQVjvxS9hXLyXs7x5MZU6Y3Inv7GNr1EzYGMXwewXUGg9raw1hdI7unRIfhzcrzS/t8RL1Kl5bsTzC/Zvz2poKUODVLspSGHizMs/b7UPm6e3jsap/r9XLztfyvFOFFKGkj5NjyoQue/AwO82Ly5GXMSE7pEzYtT/JXI/PMSmaVXsC9EToOwR8rdw78qR4h4QOh4lJECin/TskdNeDx3SSPTihux5cwDyPo1dCKGbuYWc9uEdIGMTkWzcEQtV8QoGwXjXCGeALktS3pLVDtSiGal1MkRCIfqlprl2XDmGln/Lvk25saPdLxVoWvKkuQnK6c6O4Qljea0aE8tzsLkJmn6k4EtSONHxIckh7c4pbQgev9BsdoYqthmZZNPVL+EuoT6j0iFc21X1LK8e8BVMiYb9VI9h5qGV2yKlG2K3UukDYc9UIdt7d832n+NWSz0n3Gc9x2hKR0FdZP/TV3eVuUxDMjXJrVXSAaHhCGJjlLarpkdLBCSl2CJjW0hqcUPoGZgsSo/q9E+LGXQwWJUz+BiBsKi9pU0Ju4RCEbgE94WUq/Y+Hfty4FcWehFB9b1UjSlPOggi5hO1yQ9RNdHuZHsTRQp/w8rmFWqkhMz3Fo5g9uUP8jMYxPwTxz9fnQ5f4cfNP5+cfDtPsBQZjIExnYOeN5iSPcZJi63kR9gz5pn6BkITFp+rnJYfyp/0oCJkpVDdV1i/Vm+OXpkZF2F8UozUEaDGaqG3KVhRDozpDzxIJVc8TCC+tGtH6S1owxRMarj39HSCK4Xz98Ek47/YIuQ3I6/Szt0bIF+sAN0jIbSB8TIuF3hohH8c43iAhH618TS5TC82CRbMsmhII2/dbCIR8tO0NGFWNOB8CtXm8VVM8YaBoCnuQL6kSmVWNyNTgalk0pZNfynltwl7lye153oTfab2BN0corhssbo7QD4WY6Q6MklB9v0WNEJ14wvOrFUdHeEEfYvrBEy5CeluEsJabt8w/eCOE6eDxISKG9IbGwzTnrBaSXUBgPd/iUlMNe0iVTJ1filovFZcFUy91JnXKyHWb4gnV/dLs74ZsiKQbtV5qP965xflAw36RzSTxUTFO953Y6MPLf6zLCJsLrr29HuMskbT4Qr0cUlImqKqno6ZjlQvCuKVA83a/nv6d9KjvHQyxC0JgXFrUvp4rdU8tEmoXSneoFyd9aFaG2pHWJeHlo0W5xWFMvXgMahsolKtG8OdRr+ofrbTrwbvS31DHa5OvPbHOzGyJtY4H05pUWtVE+AXU5xY+Z+v+v4GYeC1onZBbf5gZE4Kj4xwlNU3z+VOVkPO7InNCAH7MSjZb1Tuq9aFfLaCZPWyNCQGeiRPG3gXqVyks6wh4/+KLCAkE9G7f/u09aMWGM24yTdg89vH8fpALCCEmIX5dDnW1/tk1B0RwEE8Pjw/7We7QX0CY/OVTEsD5brbcbhynuIr6nMVtIR+ISBhX3gWtRPg/kxCuQqGyrfcAAAAASUVORK5CYII=";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_DialogCloseBtn = resolveComponent("DialogCloseBtn");
  _push(ssrRenderComponent(VRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          md: "6"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, { class: "font-bold text-lg py-1" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Upload Your Pan`);
                  } else {
                    return [
                      createTextVNode("Upload Your Pan")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, { class: "py-1" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Proof of PAN is needed for all investments in India`);
                  } else {
                    return [
                      createTextVNode("Proof of PAN is needed for all investments in India")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                class: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="border border-gray rounded-md h-40"${_scopeId3}>`);
                    _push4(ssrRenderComponent(VCol, { onClick: _ctx.openFileInput }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div${_scopeId4}>`);
                          if (!_ctx.images) {
                            _push5(`<div class="d-flex justify-center items-center text-center py-10"${_scopeId4}><img${ssrRenderAttr("src", _imports_0)} alt="" class="h-10 w-10"${_scopeId4}></div>`);
                          } else {
                            _push5(`<div${_scopeId4}><img${ssrRenderAttr("src", _ctx.images)} alt=""${_scopeId4}></div>`);
                          }
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("div", null, [
                              !_ctx.images ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "d-flex justify-center items-center text-center py-10"
                              }, [
                                createVNode("img", {
                                  src: _imports_0,
                                  alt: "",
                                  class: "h-10 w-10"
                                })
                              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                createVNode("img", {
                                  src: _ctx.images,
                                  alt: ""
                                }, null, 8, ["src"])
                              ]))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`<input type="file" id="fileInput" hidden${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "border border-gray rounded-md h-40" }, [
                        createVNode(VCol, { onClick: _ctx.openFileInput }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              !_ctx.images ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "d-flex justify-center items-center text-center py-10"
                              }, [
                                createVNode("img", {
                                  src: _imports_0,
                                  alt: "",
                                  class: "h-10 w-10"
                                })
                              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                createVNode("img", {
                                  src: _ctx.images,
                                  alt: ""
                                }, null, 8, ["src"])
                              ]))
                            ])
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
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, { class: "text-xs" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VAlert, {
                      border: "start",
                      "border-color": "warning",
                      class: "text-xs"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Please click a horizontal photo of the PAN card and ensure that your name and PAN number are clearly visible. `);
                        } else {
                          return [
                            createTextVNode(" Please click a horizontal photo of the PAN card and ensure that your name and PAN number are clearly visible. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VAlert, {
                        border: "start",
                        "border-color": "warning",
                        class: "text-xs"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Please click a horizontal photo of the PAN card and ensure that your name and PAN number are clearly visible. ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                class: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VBtn, {
                      block: "",
                      type: "submit",
                      onClick: ($event) => _ctx.isDialogVisible = true
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` PROCEED `);
                        } else {
                          return [
                            createTextVNode(" PROCEED ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VBtn, {
                        block: "",
                        type: "submit",
                        onClick: ($event) => _ctx.isDialogVisible = true
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" PROCEED ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VDialog, {
                modelValue: _ctx.isDialogVisible,
                "onUpdate:modelValue": ($event) => _ctx.isDialogVisible = $event,
                width: "500"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_DialogCloseBtn, {
                            variant: "text",
                            size: "default",
                            onClick: ($event) => _ctx.isDialogVisible = false
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="h-12 w-12"${_scopeId5}><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"${_scopeId5}></path></svg>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "red",
                                    class: "h-12 w-12"
                                  }, [
                                    createVNode("path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" })
                                  ]))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, { class: "font-bold text-lg py-1" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`PAN Verification Failed`);
                              } else {
                                return [
                                  createTextVNode("PAN Verification Failed")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, { class: "py-1 align-center text-sm" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`The image you&#39;ve uploaded is not of a valid PAN card. Please share the image of a valid PAN card`);
                              } else {
                                return [
                                  createTextVNode("The image you've uploaded is not of a valid PAN card. Please share the image of a valid PAN card")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            class: "pt-5"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VBtn, {
                                  block: "",
                                  type: "submit",
                                  onClick: ($event) => _ctx.isDialogVisible = true,
                                  to: "/successmessage"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` TRY AGAIN `);
                                    } else {
                                      return [
                                        createTextVNode(" TRY AGAIN ")
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
                                    onClick: ($event) => _ctx.isDialogVisible = true,
                                    to: "/successmessage"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" TRY AGAIN ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_DialogCloseBtn, {
                              variant: "text",
                              size: "default",
                              onClick: ($event) => _ctx.isDialogVisible = false
                            }, null, 8, ["onClick"]),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 24 24",
                                  fill: "red",
                                  class: "h-12 w-12"
                                }, [
                                  createVNode("path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" })
                                ]))
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                              default: withCtx(() => [
                                createTextVNode("PAN Verification Failed")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { class: "py-1 align-center text-sm" }, {
                              default: withCtx(() => [
                                createTextVNode("The image you've uploaded is not of a valid PAN card. Please share the image of a valid PAN card")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              class: "pt-5"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  type: "submit",
                                  onClick: ($event) => _ctx.isDialogVisible = true,
                                  to: "/successmessage"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" TRY AGAIN ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
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
                      createVNode(VCard, null, {
                        default: withCtx(() => [
                          createVNode(_component_DialogCloseBtn, {
                            variant: "text",
                            size: "default",
                            onClick: ($event) => _ctx.isDialogVisible = false
                          }, null, 8, ["onClick"]),
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "red",
                                class: "h-12 w-12"
                              }, [
                                createVNode("path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" })
                              ]))
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                            default: withCtx(() => [
                              createTextVNode("PAN Verification Failed")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { class: "py-1 align-center text-sm" }, {
                            default: withCtx(() => [
                              createTextVNode("The image you've uploaded is not of a valid PAN card. Please share the image of a valid PAN card")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "pt-5"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                type: "submit",
                                onClick: ($event) => _ctx.isDialogVisible = true,
                                to: "/successmessage"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" TRY AGAIN ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
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
                createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                  default: withCtx(() => [
                    createTextVNode("Upload Your Pan")
                  ]),
                  _: 1
                }),
                createVNode(VCol, { class: "py-1" }, {
                  default: withCtx(() => [
                    createTextVNode("Proof of PAN is needed for all investments in India")
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
                          createVNode("div", null, [
                            !_ctx.images ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "d-flex justify-center items-center text-center py-10"
                            }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "",
                                class: "h-10 w-10"
                              })
                            ])) : (openBlock(), createBlock("div", { key: 1 }, [
                              createVNode("img", {
                                src: _ctx.images,
                                alt: ""
                              }, null, 8, ["src"])
                            ]))
                          ])
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
                createVNode(VCol, { class: "text-xs" }, {
                  default: withCtx(() => [
                    createVNode(VAlert, {
                      border: "start",
                      "border-color": "warning",
                      class: "text-xs"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Please click a horizontal photo of the PAN card and ensure that your name and PAN number are clearly visible. ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  class: ""
                }, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      block: "",
                      type: "submit",
                      onClick: ($event) => _ctx.isDialogVisible = true
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" PROCEED ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                }),
                createVNode(VDialog, {
                  modelValue: _ctx.isDialogVisible,
                  "onUpdate:modelValue": ($event) => _ctx.isDialogVisible = $event,
                  width: "500"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogCloseBtn, {
                          variant: "text",
                          size: "default",
                          onClick: ($event) => _ctx.isDialogVisible = false
                        }, null, 8, ["onClick"]),
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              fill: "red",
                              class: "h-12 w-12"
                            }, [
                              createVNode("path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" })
                            ]))
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                          default: withCtx(() => [
                            createTextVNode("PAN Verification Failed")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { class: "py-1 align-center text-sm" }, {
                          default: withCtx(() => [
                            createTextVNode("The image you've uploaded is not of a valid PAN card. Please share the image of a valid PAN card")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          class: "pt-5"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              type: "submit",
                              onClick: ($event) => _ctx.isDialogVisible = true,
                              to: "/successmessage"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" TRY AGAIN ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                default: withCtx(() => [
                  createTextVNode("Upload Your Pan")
                ]),
                _: 1
              }),
              createVNode(VCol, { class: "py-1" }, {
                default: withCtx(() => [
                  createTextVNode("Proof of PAN is needed for all investments in India")
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
                        createVNode("div", null, [
                          !_ctx.images ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "d-flex justify-center items-center text-center py-10"
                          }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "",
                              class: "h-10 w-10"
                            })
                          ])) : (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode("img", {
                              src: _ctx.images,
                              alt: ""
                            }, null, 8, ["src"])
                          ]))
                        ])
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
              createVNode(VCol, { class: "text-xs" }, {
                default: withCtx(() => [
                  createVNode(VAlert, {
                    border: "start",
                    "border-color": "warning",
                    class: "text-xs"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Please click a horizontal photo of the PAN card and ensure that your name and PAN number are clearly visible. ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                class: ""
              }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    block: "",
                    type: "submit",
                    onClick: ($event) => _ctx.isDialogVisible = true
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" PROCEED ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(VDialog, {
                modelValue: _ctx.isDialogVisible,
                "onUpdate:modelValue": ($event) => _ctx.isDialogVisible = $event,
                width: "500"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(_component_DialogCloseBtn, {
                        variant: "text",
                        size: "default",
                        onClick: ($event) => _ctx.isDialogVisible = false
                      }, null, 8, ["onClick"]),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "red",
                            class: "h-12 w-12"
                          }, [
                            createVNode("path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" })
                          ]))
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "font-bold text-lg py-1" }, {
                        default: withCtx(() => [
                          createTextVNode("PAN Verification Failed")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { class: "py-1 align-center text-sm" }, {
                        default: withCtx(() => [
                          createTextVNode("The image you've uploaded is not of a valid PAN card. Please share the image of a valid PAN card")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "pt-5"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            type: "submit",
                            onClick: ($event) => _ctx.isDialogVisible = true,
                            to: "/successmessage"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" TRY AGAIN ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/panupload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const panupload = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { panupload as default };
