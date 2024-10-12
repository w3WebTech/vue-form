import { useSSRContext, defineComponent, withCtx, createVNode, ref, mergeProps, unref, resolveDynamicComponent, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderVNode } from 'vue/server-renderer';
import { V as VIcon } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-jmK5-THK.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VerticalNavGroup",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: ["nav-group", unref(isOpen) && "open"]
      }, _attrs))}><div class="nav-group-label">`);
      _push(ssrRenderComponent(VIcon, {
        icon: _ctx.item.icon || "ri-checkbox-blank-circle-line",
        class: "nav-item-icon"
      }, null, _parent));
      _push(`<span class="nav-item-title">${ssrInterpolate(_ctx.item.title)}</span><span class="${ssrRenderClass([_ctx.item.badgeClass, "nav-item-badge"])}">${ssrInterpolate(_ctx.item.badgeContent)}</span>`);
      _push(ssrRenderComponent(VIcon, {
        icon: "ri-arrow-right-s-line",
        class: "nav-group-arrow"
      }, null, _parent));
      _push(`</div><div class="nav-group-children-wrapper"><ul class="nav-group-children">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ul></div></li>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNavGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VerticalNavLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: ["nav-link", { disabled: _ctx.item.disable }]
      }, _attrs))}>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.item.to ? unref(__nuxt_component_0) : "a"), {
        to: _ctx.item.to,
        href: _ctx.item.href,
        target: _ctx.item.target
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              icon: _ctx.item.icon || "ri-checkbox-blank-circle-line",
              class: "nav-item-icon"
            }, null, _parent2, _scopeId));
            _push2(`<span class="nav-item-title"${_scopeId}>${ssrInterpolate(_ctx.item.title)}</span><span class="${ssrRenderClass([_ctx.item.badgeClass, "nav-item-badge"])}"${_scopeId}>${ssrInterpolate(_ctx.item.badgeContent)}</span>`);
          } else {
            return [
              createVNode(VIcon, {
                icon: _ctx.item.icon || "ri-checkbox-blank-circle-line",
                class: "nav-item-icon"
              }, null, 8, ["icon"]),
              createVNode("span", { class: "nav-item-title" }, toDisplayString(_ctx.item.title), 1),
              createVNode("span", {
                class: ["nav-item-badge", _ctx.item.badgeClass]
              }, toDisplayString(_ctx.item.badgeContent), 3)
            ];
          }
        }),
        _: 1
      }), _parent);
      _push(`</li>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNavLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VerticalNavSectionTitle",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "nav-section-title" }, _attrs))}><div class="title-wrapper"><span class="title-text">${ssrInterpolate(_ctx.item.heading)}</span></div></li>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNavSectionTitle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NavItems",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, { item: {
        title: "Dashboards",
        badgeContent: "5",
        badgeClass: "bg-error",
        icon: "ri-home-smile-line"
      } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, { item: {
              title: "Analytics",
              to: "/dashboard"
            } }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, { item: {
              title: "CRM",
              href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/dashboards/crm",
              target: "_blank",
              badgeContent: "Pro",
              badgeClass: "bg-light-primary text-primary"
            } }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, { item: {
              title: "ECommerce",
              href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/dashboards/ecommerce",
              target: "_blank",
              badgeContent: "Pro",
              badgeClass: "bg-light-primary text-primary"
            } }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, { item: {
              title: "Academy",
              href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/dashboards/academy",
              target: "_blank",
              badgeContent: "Pro",
              badgeClass: "bg-light-primary text-primary"
            } }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, { item: {
              title: "Logistics",
              href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/dashboards/logistics",
              target: "_blank",
              badgeContent: "Pro",
              badgeClass: "bg-light-primary text-primary"
            } }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, { item: {
                title: "Analytics",
                to: "/dashboard"
              } }),
              createVNode(_sfc_main$2, { item: {
                title: "CRM",
                href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/dashboards/crm",
                target: "_blank",
                badgeContent: "Pro",
                badgeClass: "bg-light-primary text-primary"
              } }, null, 8, ["item"]),
              createVNode(_sfc_main$2, { item: {
                title: "ECommerce",
                href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/dashboards/ecommerce",
                target: "_blank",
                badgeContent: "Pro",
                badgeClass: "bg-light-primary text-primary"
              } }, null, 8, ["item"]),
              createVNode(_sfc_main$2, { item: {
                title: "Academy",
                href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/dashboards/academy",
                target: "_blank",
                badgeContent: "Pro",
                badgeClass: "bg-light-primary text-primary"
              } }, null, 8, ["item"]),
              createVNode(_sfc_main$2, { item: {
                title: "Logistics",
                href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/dashboards/logistics",
                target: "_blank",
                badgeContent: "Pro",
                badgeClass: "bg-light-primary text-primary"
              } }, null, 8, ["item"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { item: {
        title: "Front Pages",
        icon: "ri-file-copy-line",
        badgeContent: "Pro",
        badgeClass: "bg-light-primary text-primary"
      } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, { item: {
              title: "Landing",
              href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/front-pages/landing-page",
              target: "_blank"
            } }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, { item: {
              title: "Pricing",
              href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/front-pages/pricing",
              target: "_blank"
            } }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, { item: {
              title: "Payment",
              href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/front-pages/payment",
              target: "_blank"
            } }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, { item: {
              title: "Checkout",
              href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/front-pages/checkout",
              target: "_blank"
            } }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, { item: {
              title: "Help Center",
              href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/front-pages/help-center",
              target: "_blank"
            } }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, { item: {
                title: "Landing",
                href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/front-pages/landing-page",
                target: "_blank"
              } }, null, 8, ["item"]),
              createVNode(_sfc_main$2, { item: {
                title: "Pricing",
                href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/front-pages/pricing",
                target: "_blank"
              } }, null, 8, ["item"]),
              createVNode(_sfc_main$2, { item: {
                title: "Payment",
                href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/front-pages/payment",
                target: "_blank"
              } }, null, 8, ["item"]),
              createVNode(_sfc_main$2, { item: {
                title: "Checkout",
                href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/front-pages/checkout",
                target: "_blank"
              } }, null, 8, ["item"]),
              createVNode(_sfc_main$2, { item: {
                title: "Help Center",
                href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/front-pages/help-center",
                target: "_blank"
              } }, null, 8, ["item"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { item: {
        heading: "Apps & Pages"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Permissions",
        icon: "ri-lock-2-line",
        href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/apps/permissions",
        target: "_blank",
        badgeContent: "Pro",
        badgeClass: "bg-light-primary text-primary"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Email",
        icon: "ri-mail-line",
        href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/apps/email",
        target: "_blank",
        badgeContent: "Pro",
        badgeClass: "bg-light-primary text-primary"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Chat",
        icon: "ri-wechat-line",
        href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/apps/chat",
        target: "_blank",
        badgeContent: "Pro",
        badgeClass: "bg-light-primary text-primary"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Calendar",
        icon: "ri-calendar-line",
        href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/apps/calendar",
        target: "_blank",
        badgeContent: "Pro",
        badgeClass: "bg-light-primary text-primary"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Account Settings",
        icon: "ri-user-settings-line",
        to: "/account-settings"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Login",
        icon: "ri-login-box-line",
        to: "/login"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Register",
        icon: "ri-user-add-line",
        to: "/register"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { item: {
        heading: "User Interface"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Typography",
        icon: "ri-text",
        to: "/typography"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Icons",
        icon: "ri-remixicon-line",
        to: "/icons"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Cards",
        icon: "ri-bar-chart-box-line",
        to: "/cards"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { item: {
        heading: "My Pages"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "mobile verification",
        icon: "ri-arrow-right-double-line",
        to: "/verification"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "camera",
        icon: "ri-arrow-right-double-line",
        to: "/camera"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "devicedata",
        icon: "ri-arrow-right-double-line",
        to: "/devicedata"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "G-2",
        icon: "ri-arrow-right-double-line",
        to: "/fpage"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Module",
        icon: "ri-arrow-right-double-line",
        to: "/module"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { item: {
        heading: "Forms & Tables"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Form Layouts",
        icon: "ri-layout-4-line",
        to: "/form-layouts"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Form Validation",
        icon: "ri-checkbox-multiple-line",
        href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/forms/form-validation",
        target: "_blank",
        badgeContent: "Pro",
        badgeClass: "bg-light-primary text-primary"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Form Wizard",
        icon: "ri-git-commit-line",
        href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/forms/form-wizard-numbered",
        target: "_blank",
        badgeContent: "Pro",
        badgeClass: "bg-light-primary text-primary"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Tables",
        icon: "ri-table-alt-line",
        to: "/tables"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { item: {
        heading: "Others"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Access Control",
        icon: "ri-shield-line",
        href: "https://demos.themeselection.com/materio-vuetify-nuxtjs-admin-template/demo-1/access-control",
        target: "_blank",
        badgeContent: "Pro",
        badgeClass: "bg-light-primary text-primary"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Documentation",
        icon: "ri-article-line",
        href: "https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/documentation/",
        target: "_blank"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Raise Support",
        href: "https://github.com/themeselection/materio-vuetify-nuxtjs-admin-template-free/issues",
        icon: "ri-lifebuoy-line",
        target: "_blank"
      } }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/NavItems.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
