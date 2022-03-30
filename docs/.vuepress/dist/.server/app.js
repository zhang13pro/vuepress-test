"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vueRouter = require("vue-router");
var vue = require("vue");
require("@vue/devtools-api");
var core = require("@vueuse/core");
var nprogress$1 = require("nprogress");
var serverRenderer = require("vue/server-renderer");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var nprogress__namespace = /* @__PURE__ */ _interopNamespace(nprogress$1);
const ClientOnly = vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const pagesComponents = {
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$5;
  })),
  "v-198d0bf5": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _1_html$2;
  })),
  "v-1847770d": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _10_html$2;
  })),
  "v-19fc4fac": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _11_html$2;
  })),
  "v-1bb1284b": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _12_html$2;
  })),
  "v-1d6600ea": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _13_html$2;
  })),
  "v-1f1ad989": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_html$2;
  })),
  "v-20cfb228": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _15_html$2;
  })),
  "v-22848ac7": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _16_html$2;
  })),
  "v-24396366": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _17_html$2;
  })),
  "v-25ee3c05": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _18_html$2;
  })),
  "v-27a314a4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _19_html$2;
  })),
  "v-1b41e494": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _2_html$2;
  })),
  "v-4d2db24e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _20_html$2;
  })),
  "v-4ee28aed": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _21_html$2;
  })),
  "v-5097638c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _22_html$2;
  })),
  "v-524c3c2b": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _23_html$2;
  })),
  "v-540114ca": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _24_html$2;
  })),
  "v-55b5ed69": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _25_html$2;
  })),
  "v-1cf6bd33": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _3_html$2;
  })),
  "v-1eab95d2": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _4_html$2;
  })),
  "v-20606e71": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _5_html$2;
  })),
  "v-22154710": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _6_html$2;
  })),
  "v-23ca1faf": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _7_html$2;
  })),
  "v-257ef84e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _8_html$2;
  })),
  "v-2733d0ed": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _9_html$2;
  })),
  "v-2d0a9a6d": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$3;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$2;
  }))
};
const pagesData$1 = {
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html$1;
  }).then(({ data: data2 }) => data2),
  "v-198d0bf5": () => Promise.resolve().then(function() {
    return _1_html;
  }).then(({ data: data2 }) => data2),
  "v-1847770d": () => Promise.resolve().then(function() {
    return _10_html;
  }).then(({ data: data2 }) => data2),
  "v-19fc4fac": () => Promise.resolve().then(function() {
    return _11_html;
  }).then(({ data: data2 }) => data2),
  "v-1bb1284b": () => Promise.resolve().then(function() {
    return _12_html;
  }).then(({ data: data2 }) => data2),
  "v-1d6600ea": () => Promise.resolve().then(function() {
    return _13_html;
  }).then(({ data: data2 }) => data2),
  "v-1f1ad989": () => Promise.resolve().then(function() {
    return _14_html;
  }).then(({ data: data2 }) => data2),
  "v-20cfb228": () => Promise.resolve().then(function() {
    return _15_html;
  }).then(({ data: data2 }) => data2),
  "v-22848ac7": () => Promise.resolve().then(function() {
    return _16_html;
  }).then(({ data: data2 }) => data2),
  "v-24396366": () => Promise.resolve().then(function() {
    return _17_html;
  }).then(({ data: data2 }) => data2),
  "v-25ee3c05": () => Promise.resolve().then(function() {
    return _18_html;
  }).then(({ data: data2 }) => data2),
  "v-27a314a4": () => Promise.resolve().then(function() {
    return _19_html;
  }).then(({ data: data2 }) => data2),
  "v-1b41e494": () => Promise.resolve().then(function() {
    return _2_html;
  }).then(({ data: data2 }) => data2),
  "v-4d2db24e": () => Promise.resolve().then(function() {
    return _20_html;
  }).then(({ data: data2 }) => data2),
  "v-4ee28aed": () => Promise.resolve().then(function() {
    return _21_html;
  }).then(({ data: data2 }) => data2),
  "v-5097638c": () => Promise.resolve().then(function() {
    return _22_html;
  }).then(({ data: data2 }) => data2),
  "v-524c3c2b": () => Promise.resolve().then(function() {
    return _23_html;
  }).then(({ data: data2 }) => data2),
  "v-540114ca": () => Promise.resolve().then(function() {
    return _24_html;
  }).then(({ data: data2 }) => data2),
  "v-55b5ed69": () => Promise.resolve().then(function() {
    return _25_html;
  }).then(({ data: data2 }) => data2),
  "v-1cf6bd33": () => Promise.resolve().then(function() {
    return _3_html;
  }).then(({ data: data2 }) => data2),
  "v-1eab95d2": () => Promise.resolve().then(function() {
    return _4_html;
  }).then(({ data: data2 }) => data2),
  "v-20606e71": () => Promise.resolve().then(function() {
    return _5_html;
  }).then(({ data: data2 }) => data2),
  "v-22154710": () => Promise.resolve().then(function() {
    return _6_html;
  }).then(({ data: data2 }) => data2),
  "v-23ca1faf": () => Promise.resolve().then(function() {
    return _7_html;
  }).then(({ data: data2 }) => data2),
  "v-257ef84e": () => Promise.resolve().then(function() {
    return _8_html;
  }).then(({ data: data2 }) => data2),
  "v-2733d0ed": () => Promise.resolve().then(function() {
    return _9_html;
  }).then(({ data: data2 }) => data2),
  "v-2d0a9a6d": () => Promise.resolve().then(function() {
    return index_html;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html;
  }).then(({ data: data2 }) => data2)
};
const pagesData = vue.ref(pagesData$1);
const pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = vue.ref(pageDataEmpty);
const usePageData = () => pageData;
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const usePageFrontmatter = () => {
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const pageHeadTitleSymbol = Symbol("");
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const routeLocaleSymbol = Symbol("");
const useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const siteData$1 = {
  "base": "/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [],
  "locales": {}
};
const siteData = vue.ref(siteData$1);
const useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page = usePageData();
    key = page.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout;
  }))
};
process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
const dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
const isLinkMailto = (link) => /^mailto:/.test(link);
const isLinkTel = (link) => /^tel:/.test(link);
const isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
const removeEndingSlash = (str) => str.replace(/\/$/, "");
const removeLeadingSlash = (str) => str.replace(/^\//, "");
const resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
const withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${removeLeadingSlash(url)}`;
};
const resolvers = vue.reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver === null || pageDataResolver === void 0 ? void 0 : pageDataResolver());
    return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  resolvePageHeadTitle: (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`,
  resolvePageLang: (pageData2) => pageData2.lang || "en",
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  resolveSiteLocaleData: (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale])
});
var vars$3 = "";
var externalLinkIcon = "";
const svg = vue.h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = vue.defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = vue.computed(() => {
      var _a;
      return (_a = props.locales[routeLocale.value]) !== null && _a !== void 0 ? _a : {
        openInNewWindow: "open in new window"
      };
    });
    return () => vue.h("span", [
      svg,
      vue.h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = { "/": { "openInNewWindow": "open in new window" } };
var clientAppEnhance0 = defineClientAppEnhance(({ app }) => {
  app.component("ExternalLinkIcon", vue.h(ExternalLinkIcon, { locales }));
});
var vars$2 = "";
var mediumZoom = "";
var clientAppEnhance1 = defineClientAppEnhance(({ app, router }) => {
  return;
});
const themeData$1 = {
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
};
const themeData = vue.ref(themeData$1);
const useThemeData = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a;
  return __spreadValues(__spreadValues({}, theme), (_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale]);
};
var clientAppEnhance2 = defineClientAppEnhance(({ app }) => {
  const themeData2 = useThemeData();
  const routeLocale = app._context.provides[routeLocaleSymbol];
  const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
});
const _sfc_main$P = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${serverRenderer.ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
var CodeGroup = vue.defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = vue.ref(-1);
    const tabRefs = vue.ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a;
      const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return vue.h("div", { class: "code-group" }, [
        vue.h("div", { class: "code-group__nav" }, vue.h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return vue.h("li", { class: "code-group__li" }, vue.h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const __default__$1 = vue.defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$O = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
}));
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = vue.inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = core.usePreferredDark();
  const darkStorage = core.useStorage("vuepress-color-scheme", "auto");
  const isDarkMode = vue.computed({
    get() {
      if (!themeLocale.value.darkMode) {
        return false;
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  vue.provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  vue.onMounted(() => {
    vue.watch(isDarkMode, update, { immediate: true });
  });
  vue.onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = vueRouter.useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(__spreadValues({
    hash: route.hash,
    query: route.query,
    params: route.params
  }, resolvedRedirectObj));
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(item);
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = vue.computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  vue.provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a, _b, _c, _d;
  const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) !== null && _c !== void 0 ? _c : themeLocale.sidebarDepth) !== null && _d !== void 0 ? _d : 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = vueRouter.useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a;
    let childItem;
    if (isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return __spreadProps(__spreadValues({}, childItem), {
        children: childItem.children.map((item2) => handleChildItem(item2))
      });
    }
    if (childItem.link === route.path) {
      const headers = ((_a = page.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return __spreadProps(__spreadValues({}, childItem), {
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      });
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a;
  const route = vueRouter.useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
var index = "";
var clientAppEnhance3 = defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", _sfc_main$P);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", _sfc_main$O);
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    if (SearchComponent) {
      return vue.h(SearchComponent);
    }
    return null;
  });
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
var clientAppEnhance4 = ({ app }) => {
  app.component("lg-js-03", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return lgJs03$1;
  })));
};
const clientAppEnhances = [
  clientAppEnhance0,
  clientAppEnhance1,
  clientAppEnhance2,
  clientAppEnhance3,
  clientAppEnhance4
];
function r(r2, e, n) {
  var i, t, o;
  e === void 0 && (e = 50), n === void 0 && (n = {});
  var a = (i = n.isImmediate) != null && i, u = (t = n.callback) != null && t, c = n.maxWait, v = Date.now(), l = [];
  function f() {
    if (c !== void 0) {
      var r3 = Date.now() - v;
      if (r3 + e >= c)
        return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    o !== void 0 && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
var vars$1 = "";
var backToTop = "";
const BackToTop = vue.defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = vue.ref(0);
    const show = vue.computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    vue.onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = vue.h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => vue.h(vue.Transition, {
      name: "back-to-top"
    }, () => show.value ? backToTopEl : null);
  }
});
const clientAppRootComponents = [
  BackToTop
];
var clientAppSetup0 = defineClientAppSetup(() => {
  return;
});
var vars = "";
var nprogress = "";
const useNprogress = () => {
  vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    nprogress__namespace.configure({ showSpinner: false });
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress__namespace.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress__namespace.done();
    });
  });
};
var clientAppSetup1 = defineClientAppSetup(() => {
  useNprogress();
});
var clientAppSetup2 = defineClientAppSetup(() => {
  setupDarkMode();
  setupSidebarItems();
});
const clientAppSetups = [
  clientAppSetup0,
  clientAppSetup1,
  clientAppSetup2
];
const routeItems = [
  ["v-8daa1a0e", "/", { "title": "\u6D4B\u8BD5" }, ["/index.html", "/readme.md"]],
  ["v-198d0bf5", "/js/1.html", { "title": "01 | \u4EE3\u7801\u57FA\u672C\u529F\u6D4B\u8BD5\uFF08\u4E0A\uFF09\uFF1AJS \u7684\u6570\u636E\u7C7B\u578B\u4F60\u4E86\u89E3\u591A\u5C11\uFF1F" }, ["/js/1", "/js/1.md"]],
  ["v-1847770d", "/js/10.html", { "title": "10 | \u6570\u7EC4\u6392\u5E8F\uFF08\u4E0A\uFF09\uFF1A\u5982\u4F55\u7528 JS \u5B9E\u73B0\u5404\u79CD\u6570\u7EC4\u6392\u5E8F\uFF1F" }, ["/js/10", "/js/10.md"]],
  ["v-19fc4fac", "/js/11.html", { "title": "11 | \u6570\u7EC4\u6392\u5E8F\uFF08\u4E0B\uFF09\uFF1Asort \u6392\u5E8F\u65B9\u6CD5\u7684\u5B9E\u73B0\u539F\u7406" }, ["/js/11", "/js/11.md"]],
  ["v-1bb1284b", "/js/12.html", { "title": "12 | \u8FDB\u9636\u7EC3\u4E60\uFF1A\u5E26\u4F60\u624B\u5199 JS \u6570\u7EC4\u591A\u4E2A\u65B9\u6CD5\u7684\u5E95\u5C42\u5B9E\u73B0" }, ["/js/12", "/js/12.md"]],
  ["v-1d6600ea", "/js/13.html", { "title": "13 | \u5F02\u6B65\u7F16\u7A0B\uFF08\u4E0A\uFF09\uFF1AJS \u5F02\u6B65\u7F16\u7A0B\u90FD\u6709\u54EA\u4E9B\u65B9\u6848\uFF1F" }, ["/js/13", "/js/13.md"]],
  ["v-1f1ad989", "/js/14.html", { "title": "14 | \u5F02\u6B65\u7F16\u7A0B\uFF08\u4E2D\uFF09\uFF1A\u5982\u4F55\u6DF1\u5165\u7406\u89E3\u5F02\u6B65\u7F16\u7A0B\u7684\u6838\u5FC3 Promise\uFF1F" }, ["/js/14", "/js/14.md"]],
  ["v-20cfb228", "/js/15.html", { "title": "15 | \u5F02\u6B65\u7F16\u7A0B\uFF08\u4E0B\uFF09\uFF1A\u5982\u4F55\u7406\u89E3 Generator\u3001Async/await \u7B49\u5F02\u6B65\u7F16\u7A0B\u7684\u8BED\u6CD5\u7CD6\uFF1F" }, ["/js/15", "/js/15.md"]],
  ["v-22848ac7", "/js/16.html", { "title": "16 | \u8FDB\u9636\u7EC3\u4E60\uFF08\u4E0A\uFF09\uFF1A\u600E\u6837\u8F7B\u677E\u5B9E\u73B0\u4E00\u4E2A EventEmitter\uFF1F" }, ["/js/16", "/js/16.md"]],
  ["v-24396366", "/js/17.html", { "title": "17 | \u8FDB\u9636\u7EC3\u4E60\uFF08\u4E0B\uFF09\uFF1A\u5982\u4F55\u5B9E\u73B0\u7B26\u5408 Promise/A+ \u89C4\u8303\u7684 Promise\uFF1F" }, ["/js/17", "/js/17.md"]],
  ["v-25ee3c05", "/js/18.html", { "title": "18 | \u5783\u573E\u56DE\u6536\uFF1A\u91CA\u653E\u5185\u5B58\uFF0C\u63D0\u5347\u6D4F\u89C8\u5668\u9875\u9762\u6027\u80FD" }, ["/js/18", "/js/18.md"]],
  ["v-27a314a4", "/js/19.html", { "title": "19 | \u4E8B\u4EF6\u8F6E\u8BE2\uFF1A\u5982\u4F55\u7406\u89E3\u6D4F\u89C8\u5668\u4E2D\u7684 EventLoop\uFF1F" }, ["/js/19", "/js/19.md"]],
  ["v-1b41e494", "/js/2.html", { "title": "02 | \u4EE3\u7801\u57FA\u672C\u529F\u6D4B\u8BD5\uFF08\u4E0B\uFF09\uFF1A\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2A\u6DF1\u6D45\u62F7\u8D1D\uFF1F" }, ["/js/2", "/js/2.md"]],
  ["v-4d2db24e", "/js/20.html", { "title": "20 | \u539F\u7406\u89E3\u6790\uFF1AJS \u4EE3\u7801\u662F\u5982\u4F55\u88AB\u6D4F\u89C8\u5668\u5F15\u64CE\u7F16\u8BD1\u3001\u6267\u884C\u7684\uFF1F" }, ["/js/20", "/js/20.md"]],
  ["v-4ee28aed", "/js/21.html", { "title": "21 | \u5F15\u64CE\u8FDB\u9636\uFF08\u4E0A\uFF09\uFF1A\u63A2\u7A76\u5B8F\u4EFB\u52A1 & \u5FAE\u4EFB\u52A1\u7684\u8FD0\u884C\u673A\u5236" }, ["/js/21", "/js/21.md"]],
  ["v-5097638c", "/js/22.html", { "title": "22 | \u5F15\u64CE\u8FDB\u9636\uFF08\u4E0B\uFF09\uFF1A\u5982\u4F55\u7406\u89E3 Process.nextTick \u7684\u539F\u7406\uFF1F" }, ["/js/22", "/js/22.md"]],
  ["v-524c3c2b", "/js/23.html", { "title": "\u5F69\u86CB 1 | \u5982\u4F55\u5E94\u5BF9\u5927\u5382\u9762\u8BD5\u5B98\u7684\u7075\u9B42\u62F7\u95EE\uFF1F" }, ["/js/23", "/js/23.md"]],
  ["v-540114ca", "/js/24.html", { "title": "\u5F69\u86CB 2 | \u524D\u7AEF\u5F00\u53D1\u5982\u4F55\u6709\u9488\u5BF9\u6027\u5730\u5B66\u4E60\u7B97\u6CD5\uFF1F" }, ["/js/24", "/js/24.md"]],
  ["v-55b5ed69", "/js/25.html", { "title": "\u7ED3\u675F\u8BED | \u9762\u5411\u672A\u6765\uFF0C\u6211\u4EEC\u8BE5\u5982\u4F55\u63D0\u5347\u81EA\u5DF1\uFF1F" }, ["/js/25", "/js/25.md"]],
  ["v-1cf6bd33", "/js/3.html", { "title": "03 | \u7EE7\u627F\u5B9E\u73B0\uFF1A\u63A2\u7A76 JS \u5E38\u89C1\u7684 6 \u79CD\u7EE7\u627F\u65B9\u5F0F" }, ["/js/3", "/js/3.md"]],
  ["v-1eab95d2", "/js/4.html", { "title": "04 | \u7EE7\u627F\u8FDB\u9636\uFF1A\u5982\u4F55\u5B9E\u73B0 new\u3001apply\u3001call\u3001bind \u7684\u5E95\u5C42\u903B\u8F91\uFF1F" }, ["/js/4", "/js/4.md"]],
  ["v-20606e71", "/js/5.html", { "title": "05 | \u51FD\u6570\u90A3\u4E9B\u4E8B\uFF1AJS \u95ED\u5305\u96BE\u70B9\u5256\u6790" }, ["/js/5", "/js/5.md"]],
  ["v-22154710", "/js/6.html", { "title": "06 | \u8FDB\u9636\u7EC3\u4E60\uFF1A\u5E26\u4F60\u4E00\u8D77\u5B9E\u73B0 JSON.Stringify \u65B9\u6CD5" }, ["/js/6", "/js/6.md"]],
  ["v-23ca1faf", "/js/7.html", { "title": "07 | \u6570\u7EC4\u539F\u7406\uFF08\u4E0A\uFF09\uFF1A\u5E2E\u4F60\u68B3\u7406\u773C\u82B1\u7F2D\u4E71\u7684\u6570\u7EC4 API" }, ["/js/7", "/js/7.md"]],
  ["v-257ef84e", "/js/8.html", { "title": "08 | \u6570\u7EC4\u539F\u7406\uFF08\u4E2D\uFF09\uFF1A\u5982\u4F55\u7406\u89E3 JS \u7684\u7C7B\u6570\u7EC4\uFF1F" }, ["/js/8", "/js/8.md"]],
  ["v-2733d0ed", "/js/9.html", { "title": "09 | \u6570\u7EC4\u539F\u7406\uFF08\u4E0B\uFF09\uFF1A\u5B9E\u73B0\u6570\u7EC4\u6241\u5E73\u5316\u7684 6 \u79CD\u65B9\u5F0F" }, ["/js/9", "/js/9.md"]],
  ["v-2d0a9a6d", "/js/", { "title": "\u5F00\u7BC7\u8BCD | \u6253\u597D JS \u57FA\u77F3\uFF0C\u8D70\u7A33\u524D\u7AEF\u8FDB\u9636\u4E4B\u8DEF" }, ["/js/index.html", "/js/readme.md"]],
  ["v-3706649a", "/404.html", { "title": "" }, ["/404"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
const historyCreator = vueRouter.createMemoryHistory;
const createVueRouter = () => {
  const router = vueRouter.createRouter({
    history: historyCreator(removeEndingSlash(siteData.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  return router;
};
const setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const setupGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolvers.resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvers.resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = vue.computed(() => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvers.resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvers.resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
const setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const appCreator = vue.createSSRApp;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => vue.h(comp))
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$N = {};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h1><h2 id="\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6</h2><p><code>&lt;lg-js-03 /&gt; </code>\u4F5C\u7EC4\u4EF6\u540D</p><p>dev---ok\u2705</p><p>HMR---ok\u2705</p><p>build---ok\u2705</p><!--]-->`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.html.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
var index_html$4 = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$t]]);
var index_html$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$M = {};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="_01-\u4EE3\u7801\u57FA\u672C\u529F\u6D4B\u8BD5-\u4E0A-js-\u7684\u6570\u636E\u7C7B\u578B\u4F60\u4E86\u89E3\u591A\u5C11" tabindex="-1"><a class="header-anchor" href="#_01-\u4EE3\u7801\u57FA\u672C\u529F\u6D4B\u8BD5-\u4E0A-js-\u7684\u6570\u636E\u7C7B\u578B\u4F60\u4E86\u89E3\u591A\u5C11" aria-hidden="true">#</a> 01 | \u4EE3\u7801\u57FA\u672C\u529F\u6D4B\u8BD5\uFF08\u4E0A\uFF09\uFF1AJS \u7684\u6570\u636E\u7C7B\u578B\u4F60\u4E86\u89E3\u591A\u5C11\uFF1F</h1><p>\u5728\u7B2C\u4E00\u8BB2\u6211\u8981\u4E3A\u4F60\u4ECB\u7ECD\u7684\u662F JS \u6570\u636E\u7C7B\u578B\u7684\u76F8\u5173\u77E5\u8BC6\u3002</p><p>\u4F5C\u4E3A JavaScript \u7684\u5165\u95E8\u7EA7\u77E5\u8BC6\u70B9\uFF0CJS \u6570\u636E\u7C7B\u578B\u5728\u6574\u4E2A JavaScript \u7684\u5B66\u4E60\u8FC7\u7A0B\u4E2D\u5176\u5B9E\u5C24\u4E3A\u91CD\u8981\u3002\u56E0\u4E3A\u5728 JavaScript \u7F16\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u7ECF\u5E38\u4F1A\u9047\u5230\u8FB9\u754C\u6570\u636E\u7C7B\u578B\u6761\u4EF6\u5224\u65AD\u95EE\u9898\uFF0C\u5F88\u591A\u4EE3\u7801\u53EA\u6709\u5728\u67D0\u79CD\u7279\u5B9A\u7684\u6570\u636E\u7C7B\u578B\u4E0B\uFF0C\u624D\u80FD\u53EF\u9760\u5730\u6267\u884C\u3002</p><p>\u5C24\u5176\u5728\u5927\u5382\u9762\u8BD5\u4E2D\uFF0C\u7ECF\u5E38\u9700\u8981\u4F60\u73B0\u573A\u624B\u5199\u4EE3\u7801\uFF0C\u56E0\u6B64\u4F60\u5F88\u6709\u5FC5\u8981\u63D0\u524D\u8003\u8651\u597D\u6570\u636E\u7C7B\u578B\u7684\u8FB9\u754C\u5224\u65AD\u95EE\u9898\uFF0C\u5E76\u5728\u4F60\u7684 JavaScript \u903B\u8F91\u7F16\u5199\u524D\u8FDB\u884C\u524D\u7F6E\u5224\u65AD\uFF0C\u8FD9\u6837\u624D\u80FD\u8BA9\u9762\u8BD5\u5B98\u770B\u5230\u4F60\u4E25\u8C28\u7684\u7F16\u7A0B\u903B\u8F91\u548C\u6DF1\u5165\u601D\u8003\u7684\u80FD\u529B\uFF0C\u9762\u8BD5\u624D\u53EF\u4EE5\u52A0\u5206\u3002</p><p>\u56E0\u6B64\uFF0C\u8FD9\u4E00\u8BB2\u6211\u5C06\u4ECE\u6570\u636E\u7C7B\u578B\u7684\u6982\u5FF5\u3001\u68C0\u6D4B\u65B9\u6CD5\u3001\u8F6C\u6362\u65B9\u6CD5\u51E0\u4E2A\u65B9\u9762\uFF0C\u5E2E\u4F60\u68B3\u7406\u548C\u6DF1\u5165\u5B66\u4E60 JavaScript \u7684\u6570\u636E\u7C7B\u578B\u7684\u77E5\u8BC6\u70B9\u3002</p><p>\u6211\u5E0C\u671B\u901A\u8FC7\u672C\u8BB2\u7684\u5B66\u4E60\uFF0C\u4F60\u80FD\u591F\u719F\u7EC3\u638C\u63E1\u6570\u636E\u7C7B\u578B\u7684\u5224\u65AD\u4EE5\u53CA\u8F6C\u6362\u7B49\u76F8\u5173\u77E5\u8BC6\u70B9\uFF0C\u5E76\u4E14\u5728\u9047\u5230\u6570\u636E\u7C7B\u578B\u5224\u65AD\u4EE5\u53CA\u6570\u636E\u7C7B\u578B\u7684\u9690\u5F0F\u8F6C\u6362\u7B49\u95EE\u9898\u65F6\u53EF\u4EE5\u8F7B\u677E\u5E94\u5BF9\u3002</p><h2 id="\u6570\u636E\u7C7B\u578B\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B\u6982\u5FF5" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B\u6982\u5FF5</h2><p>JavaScript \u7684\u6570\u636E\u7C7B\u578B\u6709\u4E0B\u56FE\u6240\u793A\u7684 8 \u79CD\uFF1A <img src="https://cdn.jsdelivr.net/gh/zhang13pro/blogImg/img/20220327171933.png" alt="\u6570\u636E\u7C7B\u578B"></p><p>\u5176\u4E2D\uFF0C\u524D 7 \u79CD\u7C7B\u578B\u4E3A\u57FA\u7840\u7C7B\u578B\uFF0C\u6700\u540E 1 \u79CD\uFF08Object\uFF09\u4E3A\u5F15\u7528\u7C7B\u578B\uFF0C\u4E5F\u662F\u4F60\u9700\u8981\u91CD\u70B9\u5173\u6CE8\u7684\uFF0C\u56E0\u4E3A\u5B83\u5728\u65E5\u5E38\u5DE5\u4F5C\u4E2D\u662F\u4F7F\u7528\u5F97\u6700\u9891\u7E41\uFF0C\u4E5F\u662F\u9700\u8981\u5173\u6CE8\u6700\u591A\u6280\u672F\u7EC6\u8282\u7684\u6570\u636E\u7C7B\u578B\u3002</p><p>\u800C\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF08Object\uFF09\u53C8\u5206\u4E3A\u56FE\u4E0A\u8FD9\u51E0\u79CD\u5E38\u89C1\u7684\u7C7B\u578B\uFF1AArray - \u6570\u7EC4\u5BF9\u8C61\u3001RegExp - \u6B63\u5219\u5BF9\u8C61\u3001Date - \u65E5\u671F\u5BF9\u8C61\u3001Math - \u6570\u5B66\u51FD\u6570\u3001Function - \u51FD\u6570\u5BF9\u8C61\u3002</p><p>\u5728\u8FD9\u91CC\uFF0C\u6211\u60F3\u5148\u8BF7\u4F60\u91CD\u70B9\u4E86\u89E3\u4E0B\u9762\u4E24\u70B9\uFF0C\u56E0\u4E3A\u5404\u79CD JavaScript \u7684\u6570\u636E\u7C7B\u578B\u6700\u540E\u90FD\u4F1A\u5728\u521D\u59CB\u5316\u4E4B\u540E\u653E\u5728\u4E0D\u540C\u7684\u5185\u5B58\u4E2D\uFF0C\u56E0\u6B64\u4E0A\u9762\u7684\u6570\u636E\u7C7B\u578B\u5927\u81F4\u53EF\u4EE5\u5206\u6210\u4E24\u7C7B\u6765\u8FDB\u884C\u5B58\u50A8\uFF1A</p><ol><li><p>\u57FA\u7840\u7C7B\u578B\u5B58\u50A8\u5728<strong>\u6808\u5185\u5B58</strong>\uFF0C\u88AB\u5F15\u7528\u6216\u62F7\u8D1D\u65F6\uFF0C\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5B8C\u5168\u76F8\u7B49\u7684\u53D8\u91CF\uFF1B</p></li><li><p>\u5F15\u7528\u7C7B\u578B\u5B58\u50A8\u5728<strong>\u5806\u5185\u5B58</strong>\uFF0C\u5B58\u50A8\u7684\u662F\u5730\u5740\uFF0C\u591A\u4E2A\u5F15\u7528\u6307\u5411\u540C\u4E00\u4E2A\u5730\u5740\uFF0C\u8FD9\u91CC\u4F1A\u6D89\u53CA\u4E00\u4E2A\u201C\u5171\u4EAB\u201D\u7684\u6982\u5FF5\u3002</p></li></ol><p>\u5173\u4E8E\u5F15\u7528\u7C7B\u578B\u4E0B\u9762\u76F4\u63A5\u901A\u8FC7\u4E24\u6BB5\u4EE3\u7801\u6765\u8BB2\u89E3\uFF0C\u8BA9\u4F60\u6DF1\u5165\u7406\u89E3\u4E00\u4E0B\u6838\u5FC3\u201C\u5171\u4EAB\u201D\u7684\u6982\u5FF5\u3002</p><p>\u9898\u76EE\u4E00\uFF1A\u521D\u51FA\u8305\u5E90</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;lee&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> a
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">//\u7B2C\u4E00\u4E2A console</span>
b<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;son&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">//\u7B2C\u4E8C\u4E2A console</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">//\u7B2C\u4E09\u4E2A console</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u9053\u9898\u6BD4\u8F83\u7B80\u5355\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u7B2C\u4E00\u4E2A console \u6253\u51FA\u6765 name \u662F &#39;lee&#39;\uFF0C\u8FD9\u5E94\u8BE5\u6CA1\u4EC0\u4E48\u7591\u95EE\uFF1B\u4F46\u662F\u5728\u6267\u884C\u4E86 b.name=&#39;son&#39; \u4E4B\u540E\uFF0C\u7ED3\u679C\u4F60\u4F1A\u53D1\u73B0 a \u548C b \u7684\u5C5E\u6027 name \u90FD\u662F &#39;son&#39;\uFF0C\u7B2C\u4E8C\u4E2A\u548C\u7B2C\u4E09\u4E2A\u6253\u5370\u7ED3\u679C\u662F\u4E00\u6837\u7684\uFF0C\u8FD9\u91CC\u5C31\u4F53\u73B0\u4E86\u5F15\u7528\u7C7B\u578B\u7684\u201C\u5171\u4EAB\u201D\u7684\u7279\u6027\uFF0C\u5373\u8FD9\u4E24\u4E2A\u503C\u90FD\u5B58\u5728\u540C\u4E00\u5757\u5185\u5B58\u4E2D\u5171\u4EAB\uFF0C\u4E00\u4E2A\u53D1\u751F\u4E86\u6539\u53D8\uFF0C\u53E6\u5916\u4E00\u4E2A\u4E5F\u968F\u4E4B\u8DDF\u7740\u53D8\u5316\u3002</p><p>\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728 Chrome \u63A7\u5236\u53F0\u6572\u4E00\u904D\uFF0C\u6DF1\u5165\u7406\u89E3\u4E00\u4E0B\u8FD9\u90E8\u5206\u6982\u5FF5\u3002\u4E0B\u9762\u6211\u4EEC\u518D\u770B\u4E00\u6BB5\u4EE3\u7801\uFF0C\u5B83\u662F\u6BD4\u9898\u76EE\u4E00\u7A0D\u590D\u6742\u4E00\u4E9B\u7684\u5BF9\u8C61\u5C5E\u6027\u53D8\u5316\u95EE\u9898\u3002</p><p>\u9898\u76EE\u4E8C\uFF1A\u6E10\u5165\u4F73\u5883</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Julia&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  o<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">24</span>
  o <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Kath&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> o
<span class="token punctuation">}</span>

<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">change</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// \u6CE8\u610F\u8FD9\u91CC\u6CA1\u6709 new\uFF0C\u540E\u9762 new \u76F8\u5173\u4F1A\u6709\u4E13\u95E8\u6587\u7AE0\u8BB2\u89E3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// \u7B2C\u4E00\u4E2A console</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// \u7B2C\u4E8C\u4E2A console</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u8FD9\u9053\u9898\u6D89\u53CA\u4E86 function\uFF0C\u4F60\u901A\u8FC7\u4E0A\u8FF0\u4EE3\u7801\u53EF\u4EE5\u770B\u5230\u7B2C\u4E00\u4E2A console \u7684\u7ED3\u679C\u662F 30\uFF0Cb \u6700\u540E\u6253\u5370\u7ED3\u679C\u662F {name: &quot;Kath&quot;, age: 30}\uFF1B\u7B2C\u4E8C\u4E2A console \u7684\u8FD4\u56DE\u7ED3\u679C\u662F 24\uFF0C\u800C a \u6700\u540E\u7684\u6253\u5370\u7ED3\u679C\u662F {name: &quot;Julia&quot;, age: 24}\u3002</p><p>\u662F\u4E0D\u662F\u548C\u4F60\u9884\u60F3\u7684\u6709\u4E9B\u533A\u522B\uFF1F\u4F60\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u91CC\u7684 function \u548C return \u5E26\u6765\u4E86\u4E0D\u4E00\u6837\u7684\u4E1C\u897F\u3002</p><p>\u539F\u56E0\u5728\u4E8E\uFF1A\u51FD\u6570\u4F20\u53C2\u8FDB\u6765\u7684 o\uFF0C\u4F20\u9012\u7684\u662F\u5BF9\u8C61\u5728\u5806\u4E2D\u7684\u5185\u5B58\u5730\u5740\u503C\uFF0C\u901A\u8FC7\u8C03\u7528 o.age = 24\uFF08\u7B2C 7 \u884C\u4EE3\u7801\uFF09\u786E\u5B9E\u6539\u53D8\u4E86 a \u5BF9\u8C61\u7684 age \u5C5E\u6027\uFF1B12 \u884C\u628A\u53C2\u6570 o \u7684\u5730\u5740\u91CD\u65B0\u8FD4\u56DE\u4E86\uFF0C\u5C06 {name: &quot;Kath&quot;, age: 30} \u5B58\u5165\u5176\u4E2D\uFF0C\u6700\u540E\u8FD4\u56DE b \u7684\u503C\u5C31\u53D8\u6210\u4E86 {name: &quot;Kath&quot;, age: 30}\u3002\u800C\u5982\u679C\u628A\u7B2C 12 \u884C\u53BB\u6389\uFF0C\u90A3\u4E48 b \u5C31\u4F1A\u8FD4\u56DE undefined\u3002\u8FD9\u91CC\u4F60\u53EF\u4EE5\u518D\u4ED4\u7EC6\u7422\u78E8\u4E00\u4E0B\u3002</p><p>\u8BB2\u5B8C\u6570\u636E\u7C7B\u578B\u7684\u57FA\u672C\u6982\u5FF5\uFF0C\u6211\u4EEC\u7EE7\u7EED\u770B\u4E0B\u4E00\u90E8\u5206\uFF0C\u5982\u4F55\u5BF9\u6570\u636E\u7C7B\u578B\u8FDB\u884C\u68C0\u6D4B\uFF0C\u8FD9\u4E5F\u662F\u6BD4\u8F83\u91CD\u8981\u7684\u95EE\u9898\u3002</p><h2 id="\u6570\u636E\u7C7B\u578B\u68C0\u6D4B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B\u68C0\u6D4B" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B\u68C0\u6D4B</h2><p>\u6570\u636E\u7C7B\u578B\u68C0\u6D4B\u4E5F\u662F\u9762\u8BD5\u8FC7\u7A0B\u4E2D\u7ECF\u5E38\u4F1A\u9047\u5230\u7684\u95EE\u9898\uFF0C\u6BD4\u5982\uFF1A\u5982\u4F55\u5224\u65AD\u662F\u5426\u4E3A\u6570\u7EC4\uFF1F\u8BA9\u4F60\u5199\u4E00\u6BB5\u4EE3\u7801\u628A JavaScript \u7684\u5404\u79CD\u6570\u636E\u7C7B\u578B\u5224\u65AD\u51FA\u6765\uFF0C\u7B49\u7B49\u3002\u7C7B\u4F3C\u7684\u9898\u76EE\u4F1A\u5F88\u591A\uFF0C\u800C\u4E14\u5728\u5E73\u5E38\u5199\u4EE3\u7801\u8FC7\u7A0B\u4E2D\u6211\u4EEC\u4E5F\u4F1A\u7ECF\u5E38\u7528\u5230\u3002</p><p>\u6211\u4E5F\u7ECF\u5E38\u5728\u9762\u8BD5\u4E00\u4E9B\u5019\u9009\u4EBA\u7684\u65F6\u5019\uFF0C\u6709\u4E9B\u56DE\u7B54\u6BD4\u5982\u201C\u7528 typeof \u6765\u5224\u65AD\u201D\uFF0C\u7136\u540E\u5C31\u6CA1\u6709\u5176\u4ED6\u7B54\u6848\u4E86\uFF0C\u4F46\u8FD9\u6837\u7684\u56DE\u7B54\u662F\u4E0D\u80FD\u4EE4\u9762\u8BD5\u5B98\u6EE1\u610F\u7684\uFF0C\u56E0\u4E3A\u4ED6\u8981\u8003\u5BDF\u4F60\u5BF9 JS \u7684\u6570\u636E\u7C7B\u578B\u7406\u89E3\u7684\u6DF1\u5EA6\uFF0C\u6240\u4EE5\u6211\u4EEC\u5148\u8981\u505A\u5230\u7684\u662F\u5BF9\u5404\u79CD\u6570\u636E\u7C7B\u578B\u7684\u5224\u65AD\u65B9\u6CD5\u4E86\u7136\u4E8E\u80F8\uFF0C\u7136\u540E\u518D\u8FDB\u884C\u5F52\u7EB3\u603B\u7ED3\uFF0C\u7ED9\u9762\u8BD5\u5B98\u4E00\u4E2A\u6EE1\u610F\u7684\u7B54\u6848\u3002</p><p>\u6570\u636E\u7C7B\u578B\u7684\u5224\u65AD\u65B9\u6CD5\u5176\u5B9E\u6709\u5F88\u591A\u79CD\uFF0C\u6BD4\u5982 typeof \u548C instanceof\uFF0C\u4E0B\u9762\u6211\u6765\u91CD\u70B9\u4ECB\u7ECD\u4E09\u79CD\u5728\u5DE5\u4F5C\u4E2D\u7ECF\u5E38\u4F1A\u9047\u5230\u7684\u6570\u636E\u7C7B\u578B\u68C0\u6D4B\u65B9\u6CD5\u3002</p><h3 id="\u7B2C\u4E00\u79CD\u5224\u65AD\u65B9\u6CD5-typeof" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u79CD\u5224\u65AD\u65B9\u6CD5-typeof" aria-hidden="true">#</a> \u7B2C\u4E00\u79CD\u5224\u65AD\u65B9\u6CD5\uFF1Atypeof</h3><p>\u8FD9\u662F\u6BD4\u8F83\u5E38\u7528\u7684\u4E00\u79CD\uFF0C\u90A3\u4E48\u6211\u4EEC\u901A\u8FC7\u4E00\u6BB5\u4EE3\u7801\u6765\u5FEB\u901F\u56DE\u987E\u4E00\u4E0B\u8FD9\u4E2A\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token number">1</span> <span class="token comment">// &#39;number&#39;</span>
<span class="token keyword">typeof</span> <span class="token string">&quot;1&quot;</span> <span class="token comment">// &#39;string&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">undefined</span> <span class="token comment">// &#39;undefined&#39;</span>
<span class="token keyword">typeof</span> <span class="token boolean">true</span> <span class="token comment">// &#39;boolean&#39;</span>
<span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;symbol&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> console <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> console<span class="token punctuation">.</span>log <span class="token comment">// &#39;function&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4F60\u53EF\u4EE5\u770B\u5230\uFF0C\u524D 6 \u4E2A\u90FD\u662F\u57FA\u7840\u6570\u636E\u7C7B\u578B\uFF0C\u800C\u4E3A\u4EC0\u4E48\u7B2C 6 \u4E2A null \u7684 typeof \u662F &#39;object&#39; \u5462\uFF1F\u8FD9\u91CC\u8981\u548C\u4F60\u5F3A\u8C03\u4E00\u4E0B\uFF0C\u867D\u7136 typeof null \u4F1A\u8F93\u51FA object\uFF0C\u4F46\u8FD9\u53EA\u662F JS \u5B58\u5728\u7684\u4E00\u4E2A\u60A0\u4E45 Bug\uFF0C\u4E0D\u4EE3\u8868 null \u5C31\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF0C\u5E76\u4E14 null \u672C\u8EAB\u4E5F\u4E0D\u662F\u5BF9\u8C61\u3002\u56E0\u6B64\uFF0Cnull \u5728 typeof \u4E4B\u540E\u8FD4\u56DE\u7684\u662F\u6709\u95EE\u9898\u7684\u7ED3\u679C\uFF0C\u4E0D\u80FD\u4F5C\u4E3A\u5224\u65AD null \u7684\u65B9\u6CD5\u3002\u5982\u679C\u4F60\u9700\u8981\u5728 if \u8BED\u53E5\u4E2D\u5224\u65AD\u662F\u5426\u4E3A null\uFF0C\u76F4\u63A5\u901A\u8FC7 \u2018===null\u2019\u6765\u5224\u65AD\u5C31\u597D\u3002</p><p>\u6B64\u5916\u8FD8\u8981\u6CE8\u610F\uFF0C\u5F15\u7528\u6570\u636E\u7C7B\u578B Object\uFF0C\u7528 typeof \u6765\u5224\u65AD\u7684\u8BDD\uFF0C\u9664\u4E86 function \u4F1A\u5224\u65AD\u4E3A OK \u4EE5\u5916\uFF0C\u5176\u4F59\u90FD\u662F &#39;object&#39;\uFF0C\u662F\u65E0\u6CD5\u5224\u65AD\u51FA\u6765\u7684\u3002</p><h3 id="\u7B2C\u4E8C\u79CD\u5224\u65AD\u65B9\u6CD5-instanceof" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u79CD\u5224\u65AD\u65B9\u6CD5-instanceof" aria-hidden="true">#</a> \u7B2C\u4E8C\u79CD\u5224\u65AD\u65B9\u6CD5\uFF1Ainstanceof</h3><p>\u60F3\u5FC5 instanceof \u7684\u65B9\u6CD5\u4F60\u4E5F\u542C\u8BF4\u8FC7\uFF0C\u6211\u4EEC new \u4E00\u4E2A\u5BF9\u8C61\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u65B0\u5BF9\u8C61\u5C31\u662F\u5B83\u539F\u578B\u94FE\u7EE7\u627F\u4E0A\u9762\u7684\u5BF9\u8C61\u4E86\uFF0C\u901A\u8FC7 instanceof \u6211\u4EEC\u80FD\u5224\u65AD\u8FD9\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u4E4B\u524D\u90A3\u4E2A\u6784\u9020\u51FD\u6570\u751F\u6210\u7684\u5BF9\u8C61\uFF0C\u8FD9\u6837\u5C31\u57FA\u672C\u53EF\u4EE5\u5224\u65AD\u51FA\u8FD9\u4E2A\u65B0\u5BF9\u8C61\u7684\u6570\u636E\u7C7B\u578B\u3002\u4E0B\u9762\u901A\u8FC7\u4EE3\u7801\u6765\u4E86\u89E3\u4E00\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">Car</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> benz <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
benz <span class="token keyword">instanceof</span> <span class="token class-name">Car</span> <span class="token comment">// true</span>
<span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;Mercedes Benz&quot;</span><span class="token punctuation">)</span>
car <span class="token keyword">instanceof</span> <span class="token class-name">String</span> <span class="token comment">// true</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;Covid-19&quot;</span>
str <span class="token keyword">instanceof</span> <span class="token class-name">String</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u9762\u5C31\u662F\u7528 instanceof \u65B9\u6CD5\u5224\u65AD\u6570\u636E\u7C7B\u578B\u7684\u5927\u81F4\u6D41\u7A0B\uFF0C\u90A3\u4E48\u5982\u679C\u8BA9\u4F60\u81EA\u5DF1\u5B9E\u73B0\u4E00\u4E2A instanceof \u7684\u5E95\u5C42\u5B9E\u73B0\uFF0C\u5E94\u8BE5\u600E\u4E48\u5199\u5462\uFF1F\u8BF7\u770B\u4E0B\u9762\u7684\u4EE3\u7801\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD9\u91CC\u5148\u7528 typeof \u6765\u5224\u65AD\u57FA\u7840\u6570\u636E\u7C7B\u578B\uFF0C\u5982\u679C\u662F\uFF0C\u76F4\u63A5\u8FD4\u56DE false</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> left <span class="token operator">!==</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">||</span> left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token comment">// getProtypeOf \u662F Object \u5BF9\u8C61\u81EA\u5E26\u7684 API\uFF0C\u80FD\u591F\u62FF\u5230\u53C2\u6570\u7684\u539F\u578B\u5BF9\u8C61</span>
  <span class="token keyword">let</span> proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5FAA\u73AF\u5F80\u4E0B\u5BFB\u627E\uFF0C\u76F4\u5230\u627E\u5230\u76F8\u540C\u7684\u539F\u578B\u5BF9\u8C61</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>proto <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>proto <span class="token operator">===</span> right<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">//\u627E\u5230\u76F8\u540C\u539F\u578B\u5BF9\u8C61\uFF0C\u8FD4\u56DE true</span>
    proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeof</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u9A8C\u8BC1\u4E00\u4E0B\u81EA\u5DF1\u5B9E\u73B0\u7684 myInstanceof \u662F\u5426 OK</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Number<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> Number<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u73B0\u5728\u4F60\u77E5\u9053\u4E86\u4E24\u79CD\u5224\u65AD\u6570\u636E\u7C7B\u578B\u7684\u65B9\u6CD5\uFF0C\u90A3\u4E48\u5B83\u4EEC\u4E4B\u95F4\u6709\u4EC0\u4E48\u5DEE\u5F02\u5462\uFF1F\u6211\u603B\u7ED3\u4E86\u4E0B\u9762\u4E24\u70B9\uFF1A</p><ol><li><p>instanceof \u53EF\u4EE5\u51C6\u786E\u5730\u5224\u65AD\u590D\u6742\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF0C\u4F46\u662F\u4E0D\u80FD\u6B63\u786E\u5224\u65AD\u57FA\u7840\u6570\u636E\u7C7B\u578B\uFF1B</p></li><li><p>\u800C typeof \u4E5F\u5B58\u5728\u5F0A\u7AEF\uFF0C\u5B83\u867D\u7136\u53EF\u4EE5\u5224\u65AD\u57FA\u7840\u6570\u636E\u7C7B\u578B\uFF08null \u9664\u5916\uFF09\uFF0C\u4F46\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B\u4E2D\uFF0C\u9664\u4E86 function \u7C7B\u578B\u4EE5\u5916\uFF0C\u5176\u4ED6\u7684\u4E5F\u65E0\u6CD5\u5224\u65AD\u3002</p></li></ol><p>\u603B\u4E4B\uFF0C\u4E0D\u7BA1\u5355\u72EC\u7528 typeof \u8FD8\u662F instanceof\uFF0C\u90FD\u4E0D\u80FD\u6EE1\u8DB3\u6240\u6709\u573A\u666F\u7684\u9700\u6C42\uFF0C\u800C\u53EA\u80FD\u901A\u8FC7\u4E8C\u8005\u6DF7\u5199\u7684\u65B9\u5F0F\u6765\u5224\u65AD\u3002\u4F46\u662F\u8FD9\u79CD\u65B9\u5F0F\u5224\u65AD\u51FA\u6765\u7684\u5176\u5B9E\u4E5F\u53EA\u662F\u5927\u591A\u6570\u60C5\u51B5\uFF0C\u5E76\u4E14\u5199\u8D77\u6765\u4E5F\u6BD4\u8F83\u96BE\u53D7\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BD5\u7740\u5199\u4E00\u4E0B\u3002</p><p>\u5176\u5B9E\u6211\u4E2A\u4EBA\u8FD8\u662F\u6BD4\u8F83\u63A8\u8350\u4E0B\u9762\u7684\u7B2C\u4E09\u79CD\u65B9\u6CD5\uFF0C\u76F8\u6BD4\u4E0A\u8FF0\u4E24\u4E2A\u800C\u8A00\uFF0C\u80FD\u66F4\u597D\u5730\u89E3\u51B3\u6570\u636E\u7C7B\u578B\u68C0\u6D4B\u95EE\u9898\u3002</p><h3 id="\u7B2C\u4E09\u79CD\u5224\u65AD\u65B9\u6CD5-object-prototype-tostring" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u79CD\u5224\u65AD\u65B9\u6CD5-object-prototype-tostring" aria-hidden="true">#</a> \u7B2C\u4E09\u79CD\u5224\u65AD\u65B9\u6CD5\uFF1AObject.prototype.toString</h3><p>toString() \u662F Object \u7684\u539F\u578B\u65B9\u6CD5\uFF0C\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7EDF\u4E00\u8FD4\u56DE\u683C\u5F0F\u4E3A \u201C[object Xxx]\u201D \u7684\u5B57\u7B26\u4E32\uFF0C\u5176\u4E2D Xxx \u5C31\u662F\u5BF9\u8C61\u7684\u7C7B\u578B\u3002\u5BF9\u4E8E Object \u5BF9\u8C61\uFF0C\u76F4\u63A5\u8C03\u7528 toString() \u5C31\u80FD\u8FD4\u56DE [object Object]\uFF1B\u800C\u5BF9\u4E8E\u5176\u4ED6\u5BF9\u8C61\uFF0C\u5219\u9700\u8981\u901A\u8FC7 call \u6765\u8C03\u7528\uFF0C\u624D\u80FD\u8FD4\u56DE\u6B63\u786E\u7684\u7C7B\u578B\u4FE1\u606F\u3002\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u4EE3\u7801\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Object]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u540C\u4E0A\u7ED3\u679C\uFF0C\u52A0\u4E0A call \u4E5F ok</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Number]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object String]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Boolean]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Function]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">//&quot;[object Null]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">//&quot;[object Undefined]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">123</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span> <span class="token comment">//&quot;[object RegExp]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//&quot;[object Date]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//&quot;[object Array]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span> <span class="token comment">//&quot;[object HTMLDocument]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span> <span class="token comment">//&quot;[object Window]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4ECE\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u53EF\u4EE5\u770B\u51FA\uFF0CObject.prototype.toString.call() \u53EF\u4EE5\u5F88\u597D\u5730\u5224\u65AD\u5F15\u7528\u7C7B\u578B\uFF0C\u751A\u81F3\u53EF\u4EE5\u628A document \u548C window \u90FD\u533A\u5206\u5F00\u6765\u3002</p><p>\u4F46\u662F\u5728\u5199\u5224\u65AD\u6761\u4EF6\u7684\u65F6\u5019\u4E00\u5B9A\u8981\u6CE8\u610F\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u6700\u540E\u8FD4\u56DE\u7EDF\u4E00\u5B57\u7B26\u4E32\u683C\u5F0F\u4E3A &quot;[object Xxx]&quot; \uFF0C\u800C\u8FD9\u91CC\u5B57\u7B26\u4E32\u91CC\u9762\u7684 &quot;Xxx&quot; \uFF0C\u7B2C\u4E00\u4E2A\u9996\u5B57\u6BCD\u8981\u5927\u5199\uFF08\u6CE8\u610F\uFF1A\u4F7F\u7528 typeof \u8FD4\u56DE\u7684\u662F\u5C0F\u5199\uFF09\uFF0C\u8FD9\u91CC\u9700\u8981\u591A\u52A0\u7559\u610F\u3002</p><p>\u90A3\u4E48\u4E0B\u9762\u6765\u5B9E\u73B0\u4E00\u4E2A\u5168\u5C40\u901A\u7528\u7684\u6570\u636E\u7C7B\u578B\u5224\u65AD\u65B9\u6CD5\uFF0C\u6765\u52A0\u6DF1\u4F60\u7684\u7406\u89E3\uFF0C\u4EE3\u7801\u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> obj
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">!==</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5148\u8FDB\u884C typeof \u5224\u65AD\uFF0C\u5982\u679C\u662F\u57FA\u7840\u6570\u636E\u7C7B\u578B\uFF0C\u76F4\u63A5\u8FD4\u56DE</span>
    <span class="token keyword">return</span> type
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5BF9\u4E8E typeof \u8FD4\u56DE\u7ED3\u679C\u662F object \u7684\uFF0C\u518D\u8FDB\u884C\u5982\u4E0B\u7684\u5224\u65AD\uFF0C\u6B63\u5219\u8FD4\u56DE\u7ED3\u679C</span>
  <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\[object (\\S+)\\]$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;$1&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u6CE8\u610F\u6B63\u5219\u4E2D\u95F4\u6709\u4E2A\u7A7A\u683C</span>
<span class="token punctuation">}</span>
<span class="token punctuation">;</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">_ \u4EE3\u7801\u9A8C\u8BC1\uFF0C\u9700\u8981\u6CE8\u610F\u5927\u5C0F\u5199\uFF0C\u54EA\u4E9B\u662F typeof \u5224\u65AD\uFF0C\u54EA\u4E9B\u662F toString \u5224\u65AD\uFF1F\u601D\u8003\u4E0B _</span><span class="token regex-delimiter">/</span></span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &quot;Array&quot; typeof []\u662F object\uFF0C\u56E0\u6B64 toString \u8FD4\u56DE</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;string&quot; typeof \u76F4\u63A5\u8FD4\u56DE</span>
<span class="token function">getType</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span> <span class="token comment">// &quot;Window&quot; toString \u8FD4\u56DE</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// &quot;Null&quot;\u9996\u5B57\u6BCD\u5927\u5199\uFF0Ctypeof null \u662F object\uFF0C\u9700 toString \u6765\u5224\u65AD</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// &quot;undefined&quot; typeof \u76F4\u63A5\u8FD4\u56DE</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;undefined&quot; typeof \u76F4\u63A5\u8FD4\u56DE</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// &quot;function&quot; typeof \u80FD\u5224\u65AD\uFF0C\u56E0\u6B64\u9996\u5B57\u6BCD\u5C0F\u5199</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">123</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span> <span class="token comment">//&quot;RegExp&quot; toString \u8FD4\u56DE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u5230\u8FD9\u91CC\uFF0C\u6570\u636E\u7C7B\u578B\u68C0\u6D4B\u7684\u4E09\u79CD\u65B9\u6CD5\u5C31\u4ECB\u7ECD\u5B8C\u4E86\uFF0C\u6700\u540E\u4E5F\u7ED9\u51FA\u6765\u4E86\u793A\u4F8B\u4EE3\u7801\uFF0C\u5E0C\u671B\u4F60\u53EF\u4EE5\u5BF9\u6BD4\u7740\u6765\u5B66\u4E60\u3001\u4F7F\u7528\uFF0C\u5E76\u4E14\u4E0D\u65AD\u52A0\u6DF1\u8BB0\u5FC6\uFF0C\u4EE5\u4FBF\u9047\u5230\u95EE\u9898\u65F6\u4E0D\u4F1A\u624B\u5FD9\u811A\u4E71\u3002\u4F60\u5982\u679C\u4E00\u904D\u8BB0\u4E0D\u4F4F\u53EF\u4EE5\u591A\u6B21\u6765\u56DE\u770B\u5DE9\u56FA\uFF0C\u76F4\u5230\u628A\u4E0A\u9762\u7684\u4EE3\u7801\u90FD\u80FD\u5168\u90E8\u7406\u89E3\uFF0C\u5E76\u4E14\u628A\u51E0\u4E2A\u7279\u6B8A\u7684\u95EE\u9898\u90FD\u5F3A\u5316\u8BB0\u5FC6\uFF0C\u8FD9\u6837\u672A\u6765\u4F60\u53BB\u505A\u7C7B\u4F3C\u9898\u76EE\u624D\u4E0D\u4F1A\u6709\u95EE\u9898\u3002</p><p>\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u672C\u8BB2\u7684\u6700\u540E\u4E00\u90E8\u5206\uFF1A\u6570\u636E\u7C7B\u578B\u7684\u8F6C\u6362\u3002</p><h2 id="\u6570\u636E\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B\u8F6C\u6362</h2><p>\u5728\u65E5\u5E38\u7684\u4E1A\u52A1\u5F00\u53D1\u4E2D\uFF0C\u7ECF\u5E38\u4F1A\u9047\u5230 JavaScript \u6570\u636E\u7C7B\u578B\u8F6C\u6362\u95EE\u9898\uFF0C\u6709\u7684\u65F6\u5019\u9700\u8981\u6211\u4EEC\u4E3B\u52A8\u8FDB\u884C\u5F3A\u5236\u8F6C\u6362\uFF0C\u800C\u6709\u7684\u65F6\u5019 JavaScript \u4F1A\u8FDB\u884C\u9690\u5F0F\u8F6C\u6362\uFF0C\u9690\u5F0F\u8F6C\u6362\u7684\u65F6\u5019\u5C31\u9700\u8981\u6211\u4EEC\u591A\u52A0\u7559\u5FC3\u3002</p><p>\u90A3\u4E48\u8FD9\u90E8\u5206\u90FD\u4F1A\u6D89\u53CA\u54EA\u4E9B\u5185\u5BB9\u5462\uFF1F\u6211\u4EEC\u5148\u770B\u4E00\u6BB5\u4EE3\u7801\uFF0C\u4E86\u89E3\u4E0B\u5927\u81F4\u7684\u60C5\u51B5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;123&#39;</span> <span class="token operator">==</span> <span class="token number">123</span> <span class="token comment">// false or true?</span>
<span class="token string">&#39;&#39;</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token comment">// false or true?</span>
<span class="token string">&#39;&#39;</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token comment">// false or true?</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token comment">// false or true?</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// false or true?</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token operator">!</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// false or true?</span>
<span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token comment">//  false or true?</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// \u8FD4\u56DE\u4EC0\u4E48\uFF1F</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">//  \u8FD4\u56DE\u4EC0\u4E48\uFF1F</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u4EC0\u4E48\uFF1F</span>
<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">+</span><span class="token number">10</span> <span class="token comment">//  \u8FD4\u56DE\u4EC0\u4E48\uFF1F</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>toPrimitive<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token number">200</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token number">300</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj <span class="token operator">+</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u91CC\u6253\u5370\u51FA\u6765\u662F\u591A\u5C11\uFF1F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u4E0A\u9762\u8FD9 12 \u4E2A\u95EE\u9898\u76F8\u4FE1\u4F60\u5E76\u4E0D\u964C\u751F\uFF0C\u57FA\u672C\u6DB5\u76D6\u4E86\u6211\u4EEC\u5E73\u5E38\u5BB9\u6613\u758F\u6F0F\u7684\u4E00\u4E9B\u60C5\u51B5\uFF0C\u8FD9\u5C31\u662F\u5728\u505A\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u65F6\u7ECF\u5E38\u4F1A\u9047\u5230\u7684\u5F3A\u5236\u8F6C\u6362\u548C\u9690\u5F0F\u8F6C\u6362\u7684\u65B9\u5F0F\uFF0C\u90A3\u4E48\u4E0B\u9762\u6211\u5C31\u56F4\u7ED5\u6570\u636E\u7C7B\u578B\u7684\u4E24\u79CD\u8F6C\u6362\u65B9\u5F0F\u8BE6\u7EC6\u8BB2\u89E3\u4E00\u4E0B\uFF0C\u5E0C\u671B\u53EF\u4EE5\u4E3A\u4F60\u63D0\u4F9B\u4E00\u4E9B\u501F\u9274\u3002</p><h3 id="\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u5F3A\u5236\u7C7B\u578B\u8F6C\u6362</h3><p>\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\u65B9\u5F0F\u5305\u62EC Number()\u3001parseInt()\u3001parseFloat()\u3001toString()\u3001String()\u3001Boolean()\uFF0C\u8FD9\u51E0\u79CD\u65B9\u6CD5\u90FD\u6BD4\u8F83\u7C7B\u4F3C\uFF0C\u901A\u8FC7\u5B57\u9762\u610F\u601D\u53EF\u4EE5\u5F88\u5BB9\u6613\u7406\u89E3\uFF0C\u90FD\u662F\u901A\u8FC7\u81EA\u8EAB\u7684\u65B9\u6CD5\u6765\u8FDB\u884C\u6570\u636E\u7C7B\u578B\u7684\u5F3A\u5236\u8F6C\u6362\u3002\u4E0B\u9762\u6211\u5217\u4E3E\u4E00\u4E9B\u6765\u8BE6\u7EC6\u8BF4\u660E\u3002</p><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u7B2C 8 \u884C\u7684\u7ED3\u679C\u662F 0\uFF0C\u7B2C 9 \u884C\u7684\u7ED3\u679C\u540C\u6837\u662F 0\uFF0C\u7B2C 10 \u884C\u7684\u7ED3\u679C\u662F NaN\u3002\u8FD9\u4E9B\u90FD\u662F\u5F88\u660E\u663E\u7684\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\uFF0C\u56E0\u4E3A\u7528\u5230\u4E86 Number() \u548C parseInt()\u3002</p><p>\u5176\u5B9E\u4E0A\u8FF0\u51E0\u4E2A\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\u7684\u539F\u7406\u5927\u81F4\u76F8\u540C\uFF0C\u4E0B\u9762\u6211\u6311\u4E24\u4E2A\u6BD4\u8F83\u6709\u4EE3\u8868\u6027\u7684\u65B9\u6CD5\u8FDB\u884C\u8BB2\u89E3\u3002</p><h4 id="number-\u65B9\u6CD5\u7684\u5F3A\u5236\u8F6C\u6362\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#number-\u65B9\u6CD5\u7684\u5F3A\u5236\u8F6C\u6362\u89C4\u5219" aria-hidden="true">#</a> Number() \u65B9\u6CD5\u7684\u5F3A\u5236\u8F6C\u6362\u89C4\u5219</h4><ul><li>\u5982\u679C\u662F\u5E03\u5C14\u503C\uFF0Ctrue \u548C false \u5206\u522B\u88AB\u8F6C\u6362\u4E3A 1 \u548C 0\uFF1B</li><li>\u5982\u679C\u662F\u6570\u5B57\uFF0C\u8FD4\u56DE\u81EA\u8EAB\uFF1B</li><li>\u5982\u679C\u662F null\uFF0C\u8FD4\u56DE 0\uFF1B</li><li>\u5982\u679C\u662F undefined\uFF0C\u8FD4\u56DE \xA0NaN\uFF1B</li><li>\u5982\u679C\u662F\u5B57\u7B26\u4E32\uFF0C\u9075\u5FAA\u4EE5\u4E0B\u89C4\u5219\uFF1A\u5982\u679C\u5B57\u7B26\u4E32\u4E2D\u53EA\u5305\u542B\u6570\u5B57\uFF08\u6216\u8005\u662F \xA00X\xA0/\xA00x\xA0 \u5F00\u5934\u7684\u5341\u516D\u8FDB\u5236\u6570\u5B57\u5B57\u7B26\u4E32\uFF0C\u5141\u8BB8\u5305\u542B\u6B63\u8D1F\u53F7\uFF09\uFF0C\u5219\u5C06\u5176\u8F6C\u6362\u4E3A\u5341\u8FDB\u5236\uFF1B\u5982\u679C\u5B57\u7B26\u4E32\u4E2D\u5305\u542B\u6709\u6548\u7684\u6D6E\u70B9\u683C\u5F0F\uFF0C\u5C06\u5176\u8F6C\u6362\u4E3A\u6D6E\u70B9\u6570\u503C\uFF1B\u5982\u679C\u662F\u7A7A\u5B57\u7B26\u4E32\uFF0C\u5C06\u5176\u8F6C\u6362\u4E3A 0\uFF1B\u5982\u679C\u4E0D\u662F\u4EE5\u4E0A\u683C\u5F0F\u7684\u5B57\u7B26\u4E32\uFF0C\u5747\u8FD4\u56DE \xA0NaN\uFF1B</li><li>\u5982\u679C\u662F Symbol\uFF0C\u629B\u51FA\u9519\u8BEF\uFF1B</li><li>\u5982\u679C\u662F\u5BF9\u8C61\uFF0C\u5E76\u4E14\u90E8\u7F72\u4E86 [Symbol.toPrimitive] \uFF0C\u90A3\u4E48\u8C03\u7528\u6B64\u65B9\u6CD5\uFF0C\u5426\u5219\u8C03\u7528\u5BF9\u8C61\u7684 \xA0valueOf()\xA0 \u65B9\u6CD5\uFF0C\u7136\u540E\u4F9D\u636E\u524D\u9762\u7684\u89C4\u5219\u8F6C\u6362\u8FD4\u56DE\u7684\u503C\uFF1B\u5982\u679C\u8F6C\u6362\u7684\u7ED3\u679C\u662F \xA0NaN\xA0\uFF0C\u5219\u8C03\u7528\u5BF9\u8C61\u7684 \xA0toString()\xA0 \u65B9\u6CD5\uFF0C\u518D\u6B21\u4F9D\u7167\u524D\u9762\u7684\u987A\u5E8F\u8F6C\u6362\u8FD4\u56DE\u5BF9\u5E94\u7684\u503C\uFF08Object \u8F6C\u6362\u89C4\u5219\u4F1A\u5728\u4E0B\u9762\u7EC6\u8BB2\uFF09\u3002</li></ul><p>\u4E0B\u9762\u901A\u8FC7\u4E00\u6BB5\u4EE3\u7801\u6765\u8BF4\u660E\u4E0A\u8FF0\u89C4\u5219\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Number</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;0111&quot;</span><span class="token punctuation">)</span> <span class="token comment">//111</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">//0</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token comment">//0</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;1a&quot;</span><span class="token punctuation">)</span> <span class="token comment">//NaN</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0x11</span><span class="token punctuation">)</span> <span class="token comment">//-17</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;0X11&quot;</span><span class="token punctuation">)</span> <span class="token comment">//17</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5176\u4E2D\uFF0C\u6211\u5206\u522B\u5217\u4E3E\u4E86\u6BD4\u8F83\u5E38\u89C1\u7684 Number \u8F6C\u6362\u7684\u4F8B\u5B50\uFF0C\u5B83\u4EEC\u90FD\u4F1A\u628A\u5BF9\u5E94\u7684\u975E\u6570\u5B57\u7C7B\u578B\u8F6C\u6362\u6210\u6570\u5B57\u7C7B\u578B\uFF0C\u800C\u6709\u4E00\u4E9B\u5B9E\u5728\u65E0\u6CD5\u8F6C\u6362\u6210\u6570\u5B57\u7684\uFF0C\u6700\u540E\u53EA\u80FD\u8F93\u51FA NaN \u7684\u7ED3\u679C\u3002</p><h4 id="boolean-\u65B9\u6CD5\u7684\u5F3A\u5236\u8F6C\u6362\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#boolean-\u65B9\u6CD5\u7684\u5F3A\u5236\u8F6C\u6362\u89C4\u5219" aria-hidden="true">#</a> Boolean() \u65B9\u6CD5\u7684\u5F3A\u5236\u8F6C\u6362\u89C4\u5219</h4><p>\u8FD9\u4E2A\u65B9\u6CD5\u7684\u89C4\u5219\u662F\uFF1A\u9664\u4E86 undefined\u3001 null\u3001 false\u3001 &#39;&#39;\u3001 0\uFF08\u5305\u62EC +0\uFF0C-0\uFF09\u3001 NaN \u8F6C\u6362\u51FA\u6765\u662F false\uFF0C\u5176\u4ED6\u90FD\u662F true\u3002</p><p>\u8FD9\u4E2A\u89C4\u5219\u5E94\u8BE5\u5F88\u597D\u7406\u89E3\uFF0C\u6CA1\u6709\u90A3\u4E48\u591A\u6761\u6761\u6846\u6846\uFF0C\u6211\u4EEC\u8FD8\u662F\u901A\u8FC7\u4EE3\u7801\u6765\u5F62\u6210\u8BA4\u77E5\uFF0C\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">//false</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">//false</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">//false</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">//false</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5176\u4F59\u7684 parseInt()\u3001parseFloat()\u3001toString()\u3001String() \u8FD9\u51E0\u4E2A\u65B9\u6CD5\uFF0C\u4F60\u53EF\u4EE5\u6309\u7167\u6211\u7684\u65B9\u5F0F\u53BB\u6574\u7406\u4E00\u4E0B\u89C4\u5219\uFF0C\u5728\u8FD9\u91CC\u4E0D\u5360\u8FC7\u591A\u7BC7\u5E45\u4E86\u3002</p><h3 id="\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u9690\u5F0F\u7C7B\u578B\u8F6C\u6362</h3><p>\u51E1\u662F\u901A\u8FC7\u903B\u8F91\u8FD0\u7B97\u7B26 (&amp;&amp;\u3001 ||\u3001 !)\u3001\u8FD0\u7B97\u7B26 (+\u3001-\u3001*\u3001/)\u3001\u5173\u7CFB\u64CD\u4F5C\u7B26 (&gt;\u3001 &lt;\u3001 &lt;= \u3001&gt;=)\u3001\u76F8\u7B49\u8FD0\u7B97\u7B26 (==) \u6216\u8005 if/while \u6761\u4EF6\u7684\u64CD\u4F5C\uFF0C\u5982\u679C\u9047\u5230\u4E24\u4E2A\u6570\u636E\u7C7B\u578B\u4E0D\u4E00\u6837\u7684\u60C5\u51B5\uFF0C\u90FD\u4F1A\u51FA\u73B0\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u3002\u8FD9\u91CC\u4F60\u9700\u8981\u91CD\u70B9\u5173\u6CE8\u4E00\u4E0B\uFF0C\u56E0\u4E3A\u6BD4\u8F83\u9690\u853D\uFF0C\u7279\u522B\u5BB9\u6613\u8BA9\u4EBA\u5FFD\u89C6\u3002</p><p>\u4E0B\u9762\u7740\u91CD\u8BB2\u89E3\u4E00\u4E0B\u65E5\u5E38\u7528\u5F97\u6BD4\u8F83\u591A\u7684\u201C==\u201D\u548C\u201C+\u201D\u8FD9\u4E24\u4E2A\u7B26\u53F7\u7684\u9690\u5F0F\u8F6C\u6362\u89C4\u5219\u3002</p><h4 id="\u7684\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u7684\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u89C4\u5219" aria-hidden="true">#</a> &#39;==&#39; \u7684\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u89C4\u5219</h4><ul><li>\u5982\u679C\u7C7B\u578B\u76F8\u540C\uFF0C\u65E0\u987B\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\uFF1B</li><li>\u5982\u679C\u5176\u4E2D\u4E00\u4E2A\u64CD\u4F5C\u503C\u662F null \u6216\u8005 undefined\uFF0C\u90A3\u4E48\u53E6\u4E00\u4E2A\u64CD\u4F5C\u7B26\u5FC5\u987B\u4E3A null \u6216\u8005 undefined\uFF0C\u624D\u4F1A\u8FD4\u56DE true\uFF0C\u5426\u5219\u90FD\u8FD4\u56DE false\uFF1B</li><li>\u5982\u679C\u5176\u4E2D\u4E00\u4E2A\u662F Symbol \u7C7B\u578B\uFF0C\u90A3\u4E48\u8FD4\u56DE false\uFF1B</li><li>\u4E24\u4E2A\u64CD\u4F5C\u503C\u5982\u679C\u4E3A string \u548C number \u7C7B\u578B\uFF0C\u90A3\u4E48\u5C31\u4F1A\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A number\uFF1B</li><li>\u5982\u679C\u4E00\u4E2A\u64CD\u4F5C\u503C\u662F boolean\uFF0C\u90A3\u4E48\u8F6C\u6362\u6210 number\uFF1B</li><li>\u5982\u679C\u4E00\u4E2A\u64CD\u4F5C\u503C\u4E3A object \u4E14\u53E6\u4E00\u65B9\u4E3A string\u3001number \u6216\u8005 symbol\uFF0C\u5C31\u4F1A\u628A object \u8F6C\u4E3A\u539F\u59CB\u7C7B\u578B\u518D\u8FDB\u884C\u5224\u65AD\uFF08\u8C03\u7528 object \u7684 valueOf/toString \u65B9\u6CD5\u8FDB\u884C\u8F6C\u6362\uFF09\u3002</li><li>\u5982\u679C\u76F4\u63A5\u6B7B\u8BB0\u8FD9\u4E9B\u7406\u8BBA\u4F1A\u6709\u70B9\u61F5\uFF0C\u6211\u4EEC\u8FD8\u662F\u76F4\u63A5\u770B\u4EE3\u7801\uFF0C\u8FD9\u6837\u66F4\u5BB9\u6613\u7406\u89E3\u4E00\u4E9B\uFF0C\u5982\u4E0B\u6240\u793A\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token comment">// true \u89C4\u5219 2</span>
<span class="token keyword">null</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token comment">// false \u89C4\u5219 2</span>
<span class="token string">&quot;&quot;</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token comment">// false \u89C4\u5219 2</span>
<span class="token string">&quot;&quot;</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token comment">// true \u89C4\u5219 4 \u5B57\u7B26\u4E32\u8F6C\u9690\u5F0F\u8F6C\u6362\u6210 Number \u4E4B\u540E\u518D\u5BF9\u6BD4</span>
<span class="token string">&quot;123&quot;</span> <span class="token operator">==</span> <span class="token number">123</span> <span class="token comment">// true \u89C4\u5219 4 \u5B57\u7B26\u4E32\u8F6C\u9690\u5F0F\u8F6C\u6362\u6210 Number \u4E4B\u540E\u518D\u5BF9\u6BD4</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token boolean">false</span> <span class="token comment">// true e \u89C4\u5219 \u5E03\u5C14\u578B\u9690\u5F0F\u8F6C\u6362\u6210 Number \u4E4B\u540E\u518D\u5BF9\u6BD4</span>
<span class="token number">1</span> <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token comment">// true e \u89C4\u5219 \u5E03\u5C14\u578B\u9690\u5F0F\u8F6C\u6362\u6210 Number \u4E4B\u540E\u518D\u5BF9\u6BD4</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token function-variable function">valueOf</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token operator">++</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6CE8\u610F\u8FD9\u91CC a \u53C8\u53EF\u4EE5\u7B49\u4E8E 1\u30012\u30013</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">//true f \u89C4\u5219 Object \u9690\u5F0F\u8F6C\u6362</span>
<span class="token comment">// \u6CE8\uFF1A\u4F46\u662F\u6267\u884C\u8FC7 3 \u904D\u4E4B\u540E\uFF0C\u518D\u91CD\u65B0\u6267\u884C a==3 \u6216\u4E4B\u524D\u7684\u6570\u5B57\u5C31\u662F false\uFF0C\u56E0\u4E3A value \u5DF2\u7ECF\u52A0\u4E0A\u53BB\u4E86\uFF0C\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u4E00\u4E0B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u5BF9\u7167\u7740\u8FD9\u4E2A\u89C4\u5219\u770B\u5B8C\u4E0A\u9762\u7684\u4EE3\u7801\u548C\u6CE8\u89E3\u4E4B\u540E\uFF0C\u4F60\u53EF\u4EE5\u518D\u56DE\u8FC7\u5934\u505A\u4E00\u4E0B\u6211\u5728\u8BB2\u89E3\u201C\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u201D\u4E4B\u524D\u7684\u90A3 12 \u9053\u9898\u76EE\uFF0C\u662F\u4E0D\u662F\u5C31\u5F88\u5BB9\u6613\u89E3\u51B3\u4E86\uFF1F</p><h4 id="\u7684\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u89C4\u5219-1" tabindex="-1"><a class="header-anchor" href="#\u7684\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u89C4\u5219-1" aria-hidden="true">#</a> &#39;+&#39; \u7684\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u89C4\u5219</h4><p>&#39;+&#39; \u53F7\u64CD\u4F5C\u7B26\uFF0C\u4E0D\u4EC5\u53EF\u4EE5\u7528\u4F5C\u6570\u5B57\u76F8\u52A0\uFF0C\u8FD8\u53EF\u4EE5\u7528\u4F5C\u5B57\u7B26\u4E32\u62FC\u63A5\u3002\u4EC5\u5F53 &#39;+&#39; \u53F7\u4E24\u8FB9\u90FD\u662F\u6570\u5B57\u65F6\uFF0C\u8FDB\u884C\u7684\u662F\u52A0\u6CD5\u8FD0\u7B97\uFF1B\u5982\u679C\u4E24\u8FB9\u90FD\u662F\u5B57\u7B26\u4E32\uFF0C\u5219\u76F4\u63A5\u62FC\u63A5\uFF0C\u65E0\u987B\u8FDB\u884C\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u3002</p><p>\u9664\u4E86\u4E0A\u8FF0\u6BD4\u8F83\u5E38\u89C4\u7684\u60C5\u51B5\u5916\uFF0C\u8FD8\u6709\u4E00\u4E9B\u7279\u6B8A\u7684\u89C4\u5219\uFF0C\u5982\u4E0B\u6240\u793A\u3002</p><ul><li>\u5982\u679C\u5176\u4E2D\u6709\u4E00\u4E2A\u662F\u5B57\u7B26\u4E32\uFF0C\u53E6\u5916\u4E00\u4E2A\u662F undefined\u3001null \u6216\u5E03\u5C14\u578B\uFF0C\u5219\u8C03\u7528 toString() \u65B9\u6CD5\u8FDB\u884C\u5B57\u7B26\u4E32\u62FC\u63A5\uFF1B\u5982\u679C\u662F\u7EAF\u5BF9\u8C61\u3001\u6570\u7EC4\u3001\u6B63\u5219\u7B49\uFF0C\u5219\u9ED8\u8BA4\u8C03\u7528\u5BF9\u8C61\u7684\u8F6C\u6362\u65B9\u6CD5\u4F1A\u5B58\u5728\u4F18\u5148\u7EA7\uFF08\u4E0B\u4E00\u8BB2\u4F1A\u4E13\u95E8\u4ECB\u7ECD\uFF09\uFF0C\u7136\u540E\u518D\u8FDB\u884C\u62FC\u63A5\u3002</li><li>\u5982\u679C\u5176\u4E2D\u6709\u4E00\u4E2A\u662F\u6570\u5B57\uFF0C\u53E6\u5916\u4E00\u4E2A\u662F undefined\u3001null\u3001\u5E03\u5C14\u578B\u6216\u6570\u5B57\uFF0C\u5219\u4F1A\u5C06\u5176\u8F6C\u6362\u6210\u6570\u5B57\u8FDB\u884C\u52A0\u6CD5\u8FD0\u7B97\uFF0C\u5BF9\u8C61\u7684\u60C5\u51B5\u8FD8\u662F\u53C2\u8003\u4E0A\u4E00\u6761\u89C4\u5219\u3002</li><li>\u5982\u679C\u5176\u4E2D\u4E00\u4E2A\u662F\u5B57\u7B26\u4E32\u3001\u4E00\u4E2A\u662F\u6570\u5B57\uFF0C\u5219\u6309\u7167\u5B57\u7B26\u4E32\u89C4\u5219\u8FDB\u884C\u62FC\u63A5\u3002</li></ul><p>\u4E0B\u9762\u8FD8\u662F\u7ED3\u5408\u4EE3\u7801\u6765\u7406\u89E3\u4E0A\u8FF0\u89C4\u5219\uFF0C\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token comment">// 3 \u5E38\u89C4\u60C5\u51B5</span>
<span class="token string">&quot;1&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;2&quot;</span> <span class="token comment">// &#39;12&#39; \u5E38\u89C4\u60C5\u51B5</span>
<span class="token comment">// \u4E0B\u9762\u770B\u4E00\u4E0B\u7279\u6B8A\u60C5\u51B5</span>
<span class="token string">&quot;1&quot;</span> <span class="token operator">+</span> <span class="token keyword">undefined</span> <span class="token comment">// &quot;1undefined&quot; \u89C4\u5219 1\uFF0Cundefined \u8F6C\u6362\u5B57\u7B26\u4E32</span>
<span class="token string">&quot;1&quot;</span> <span class="token operator">+</span> <span class="token keyword">null</span> <span class="token comment">// &quot;1null&quot; \u89C4\u5219 1\uFF0Cnull \u8F6C\u6362\u5B57\u7B26\u4E32</span>
<span class="token string">&quot;1&quot;</span> <span class="token operator">+</span> <span class="token boolean">true</span> <span class="token comment">// &quot;1true&quot; \u89C4\u5219 1\uFF0Ctrue \u8F6C\u6362\u5B57\u7B26\u4E32</span>
<span class="token string">&quot;1&quot;</span> <span class="token operator">+</span> <span class="token number">1n</span> <span class="token comment">// &#39;11&#39; \u6BD4\u8F83\u7279\u6B8A\u5B57\u7B26\u4E32\u548C BigInt \u76F8\u52A0\uFF0CBigInt \u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</span>
<span class="token number">1</span> <span class="token operator">+</span> <span class="token keyword">undefined</span> <span class="token comment">// NaN \u89C4\u5219 2\uFF0Cundefined \u8F6C\u6362\u6570\u5B57\u76F8\u52A0 NaN</span>
<span class="token number">1</span> <span class="token operator">+</span> <span class="token keyword">null</span> <span class="token comment">// 1 \u89C4\u5219 2\uFF0Cnull \u8F6C\u6362\u4E3A 0</span>
<span class="token number">1</span> <span class="token operator">+</span> <span class="token boolean">true</span> <span class="token comment">// 2 \u89C4\u5219 2\uFF0Ctrue \u8F6C\u6362\u4E3A 1\uFF0C\u4E8C\u8005\u76F8\u52A0\u4E3A 2</span>
<span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1n</span> <span class="token comment">// \u9519\u8BEF \u4E0D\u80FD\u628A BigInt \u548C Number \u7C7B\u578B\u76F4\u63A5\u6DF7\u5408\u76F8\u52A0</span>
<span class="token string">&quot;1&quot;</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token comment">// &#39;13&#39; \u89C4\u5219 3\uFF0C\u5B57\u7B26\u4E32\u62FC\u63A5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u6574\u4F53\u6765\u770B\uFF0C\u5982\u679C\u6570\u636E\u4E2D\u6709\u5B57\u7B26\u4E32\uFF0CJavaScript \u7C7B\u578B\u8F6C\u6362\u8FD8\u662F\u66F4\u503E\u5411\u4E8E\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\uFF0C\u56E0\u4E3A\u7B2C\u4E09\u6761\u89C4\u5219\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u5728\u5B57\u7B26\u4E32\u548C\u6570\u5B57\u76F8\u52A0\u7684\u8FC7\u7A0B\u4E2D\u6700\u540E\u8FD4\u56DE\u7684\u8FD8\u662F\u5B57\u7B26\u4E32\uFF0C\u8FD9\u91CC\u9700\u8981\u5173\u6CE8\u4E00\u4E0B\u3002</p><p>\u4E86\u89E3\u4E86 &#39;+&#39; \u7684\u8F6C\u6362\u89C4\u5219\u540E\uFF0C\u6211\u4EEC\u6700\u540E\u518D\u770B\u4E00\u4E0B Object \u7684\u8F6C\u6362\u89C4\u5219\u3002</p><h4 id="object-\u7684\u8F6C\u6362\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#object-\u7684\u8F6C\u6362\u89C4\u5219" aria-hidden="true">#</a> Object \u7684\u8F6C\u6362\u89C4\u5219</h4><p>\u5BF9\u8C61\u8F6C\u6362\u7684\u89C4\u5219\uFF0C\u4F1A\u5148\u8C03\u7528\u5185\u7F6E\u7684 [ToPrimitive] \u51FD\u6570\uFF0C\u5176\u89C4\u5219\u903B\u8F91\u5982\u4E0B\uFF1A</p><ul><li>\u5982\u679C\u90E8\u7F72\u4E86 Symbol.toPrimitive \u65B9\u6CD5\uFF0C\u4F18\u5148\u8C03\u7528\u518D\u8FD4\u56DE\uFF1B</li><li>\u8C03\u7528 valueOf()\uFF0C\u5982\u679C\u8F6C\u6362\u4E3A\u57FA\u7840\u7C7B\u578B\uFF0C\u5219\u8FD4\u56DE\uFF1B</li><li>\u8C03\u7528 toString()\uFF0C\u5982\u679C\u8F6C\u6362\u4E3A\u57FA\u7840\u7C7B\u578B\uFF0C\u5219\u8FD4\u56DE\uFF1B</li><li>\u5982\u679C\u90FD\u6CA1\u6709\u8FD4\u56DE\u57FA\u7840\u7C7B\u578B\uFF0C\u4F1A\u62A5\u9519\u3002</li></ul><p>\u76F4\u63A5\u7406\u89E3\u6709\u4E9B\u6666\u6DA9\uFF0C\u8FD8\u662F\u76F4\u63A5\u6765\u770B\u4EE3\u7801\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u81EA\u5DF1\u6572\u4E00\u904D\u6765\u52A0\u6DF1\u5370\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;3&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>toPrimitive<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">4</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA 5</span>
<span class="token comment">// \u56E0\u4E3A\u6709 Symbol.toPrimitive\uFF0C\u5C31\u4F18\u5148\u6267\u884C\u8FD9\u4E2A\uFF1B\u5982\u679C Symbol.toPrimitive \u8FD9\u6BB5\u4EE3\u7801\u5220\u6389\uFF0C\u5219\u6267\u884C valueOf \u6253\u5370\u7ED3\u679C\u4E3A 3\uFF1B\u5982\u679C valueOf \u4E5F\u53BB\u6389\uFF0C\u5219\u8C03\u7528 toString \u8FD4\u56DE&#39;31&#39;(\u5B57\u7B26\u4E32\u62FC\u63A5)</span>
<span class="token comment">// \u518D\u770B\u4E24\u4E2A\u7279\u6B8A\u7684 case\uFF1A</span>
<span class="token number">10</span> <span class="token operator">+</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// &quot;10[object Object]&quot;\uFF0C\u6CE8\u610F\uFF1A{}\u4F1A\u9ED8\u8BA4\u8C03\u7528 valueOf \u662F{}\uFF0C\u4E0D\u662F\u57FA\u7840\u7C7B\u578B\u7EE7\u7EED\u8F6C\u6362\uFF0C\u8C03\u7528 toString\uFF0C\u8FD4\u56DE\u7ED3\u679C&quot;[object Object]&quot;\uFF0C\u4E8E\u662F\u548C 10 \u8FDB\u884C&#39;+&#39;\u8FD0\u7B97\uFF0C\u6309\u7167\u5B57\u7B26\u4E32\u62FC\u63A5\u89C4\u5219\u6765\uFF0C\u53C2\u8003&#39;+&#39;\u7684\u89C4\u5219 C</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">10</span>
<span class="token comment">// &quot;1,2,,4,510&quot;\uFF0C\u6CE8\u610F[1,2,undefined,4,5]\u4F1A\u9ED8\u8BA4\u5148\u8C03\u7528 valueOf \u7ED3\u679C\u8FD8\u662F\u8FD9\u4E2A\u6570\u7EC4\uFF0C\u4E0D\u662F\u57FA\u7840\u6570\u636E\u7C7B\u578B\u7EE7\u7EED\u8F6C\u6362\uFF0C\u4E5F\u8FD8\u662F\u8C03\u7528 toString\uFF0C\u8FD4\u56DE&quot;1,2,,4,5&quot;\uFF0C\u7136\u540E\u518D\u548C 10 \u8FDB\u884C\u8FD0\u7B97\uFF0C\u8FD8\u662F\u6309\u7167\u5B57\u7B26\u4E32\u62FC\u63A5\u89C4\u5219\uFF0C\u53C2\u8003&#39;+&#39;\u7684\u7B2C 3 \u6761\u89C4\u5219</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u5173\u4E8E Object \u7684\u8F6C\u5316\uFF0C\u5C31\u8BB2\u89E3\u5230\u8FD9\u91CC\uFF0C\u5E0C\u671B\u4F60\u53EF\u4EE5\u6DF1\u523B\u4F53\u4F1A\u4E00\u4E0B\u4E0A\u9762\u8BB2\u7684\u539F\u7406\u548C\u5185\u5BB9\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u4EE5\u4E0A\u5C31\u662F\u672C\u8BB2\u7684\u5185\u5BB9\u4E86\uFF0C\u5728\u8FD9\u4E00\u8BB2\u4E2D\uFF0C\u6211\u4EEC\u4ECE\u4E09\u4E2A\u65B9\u9762\u5B66\u4E60\u4E86\u6570\u636E\u7C7B\u578B\u76F8\u5173\u5185\u5BB9\uFF0C\u4E0B\u9762\u6574\u4F53\u56DE\u987E\u4E00\u4E0B\u3002</p><p>\u6570\u636E\u7C7B\u578B\u7684\u57FA\u672C\u6982\u5FF5\uFF1A\u8FD9\u662F\u5FC5\u987B\u638C\u63E1\u7684\u77E5\u8BC6\u70B9\uFF0C\u4F5C\u4E3A\u6DF1\u5165\u7406\u89E3 JavaScript \u7684\u57FA\u7840\u3002</p><p>\u6570\u636E\u7C7B\u578B\u7684\u5224\u65AD\u65B9\u6CD5\uFF1Atypeof \u548C instanceof\uFF0C\u4EE5\u53CA Object.prototype.toString \u7684\u5224\u65AD\u6570\u636E\u7C7B\u578B\u3001\u624B\u5199 instanceof \u4EE3\u7801\u7247\u6BB5\uFF0C\u8FD9\u4E9B\u662F\u65E5\u5E38\u5F00\u53D1\u4E2D\u7ECF\u5E38\u4F1A\u9047\u5230\u7684\uFF0C\u56E0\u6B64\u4F60\u9700\u8981\u597D\u597D\u638C\u63E1\u3002</p><p>\u6570\u636E\u7C7B\u578B\u7684\u8F6C\u6362\u65B9\u5F0F\uFF1A\u4E24\u79CD\u6570\u636E\u7C7B\u578B\u7684\u8F6C\u6362\u65B9\u5F0F\uFF0C\u65E5\u5E38\u5199\u4EE3\u7801\u8FC7\u7A0B\u4E2D\u9690\u5F0F\u8F6C\u6362\u9700\u8981\u591A\u7559\u610F\uFF0C\u5982\u679C\u7406\u89E3\u4E0D\u5230\u4F4D\uFF0C\u5F88\u5BB9\u6613\u5F15\u8D77\u5728\u7F16\u7801\u8FC7\u7A0B\u4E2D\u7684 bug\uFF0C\u5F97\u5230\u4E00\u4E9B\u610F\u60F3\u4E0D\u5230\u7684\u7ED3\u679C\u3002</p><p>\u5BF9\u4E8E\u672C\u8BB2\u5185\u5BB9\uFF0C\u5982\u679C\u4F60\u6709\u4E0D\u6E05\u695A\u7684\u5730\u65B9\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u7559\u8A00\uFF0C\u6211\u4EEC\u4E00\u8D77\u63A2\u8BA8\u3001\u8FDB\u6B65\u3002</p><p>\u4E0B\u4E00\u8BB2\u6211\u4F1A\u5728\u672C\u8BB2\u5185\u5BB9\u7684\u57FA\u7840\u4E0A\uFF0C\u4E3A\u4F60\u8BE6\u7EC6\u4ECB\u7ECD\u624B\u5199\u4E00\u4E2A\u6DF1\u6D45\u62F7\u8D1D\u4EE3\u7801\u7684\u5B8C\u6574\u601D\u8DEF\u4EE5\u53CA\u4EE3\u7801\u7684\u5B9E\u73B0\u3002\u6211\u4EEC\u4E0B\u4E00\u8BB2\u89C1\u3002</p><!--]-->`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/1.html.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
var _1_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$s]]);
var _1_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _1_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$L = {};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_010 = vue.resolveComponent("lg-js-010");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_010, _attrs, null, _parent));
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/10.html.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
var _10_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$r]]);
var _10_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _10_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$K = {};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_011 = vue.resolveComponent("lg-js-011");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_011, _attrs, null, _parent));
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/11.html.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
var _11_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$q]]);
var _11_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _11_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$J = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_012 = vue.resolveComponent("lg-js-012");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_012, _attrs, null, _parent));
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/12.html.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
var _12_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$p]]);
var _12_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _12_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$I = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_013 = vue.resolveComponent("lg-js-013");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_013, _attrs, null, _parent));
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/13.html.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
var _13_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$o]]);
var _13_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _13_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$H = {};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_014 = vue.resolveComponent("lg-js-014");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_014, _attrs, null, _parent));
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/14.html.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
var _14_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$n]]);
var _14_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _14_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$G = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_015 = vue.resolveComponent("lg-js-015");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_015, _attrs, null, _parent));
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/15.html.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
var _15_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$m]]);
var _15_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _15_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$F = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_016 = vue.resolveComponent("lg-js-016");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_016, _attrs, null, _parent));
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/16.html.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
var _16_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$l]]);
var _16_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _16_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_017 = vue.resolveComponent("lg-js-017");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_017, _attrs, null, _parent));
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/17.html.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var _17_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$k]]);
var _17_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _17_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$D = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_018 = vue.resolveComponent("lg-js-018");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_018, _attrs, null, _parent));
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/18.html.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var _18_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$j]]);
var _18_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _18_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$C = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_019 = vue.resolveComponent("lg-js-019");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_019, _attrs, null, _parent));
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/19.html.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var _19_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$i]]);
var _19_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _19_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="_02-\u4EE3\u7801\u57FA\u672C\u529F\u6D4B\u8BD5-\u4E0B-\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2A\u6DF1\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#_02-\u4EE3\u7801\u57FA\u672C\u529F\u6D4B\u8BD5-\u4E0B-\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2A\u6DF1\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> 02 | \u4EE3\u7801\u57FA\u672C\u529F\u6D4B\u8BD5\uFF08\u4E0B\uFF09\uFF1A\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2A\u6DF1\u6D45\u62F7\u8D1D\uFF1F</h1><p>\u4E0A\u4E00\u8BB2\u6211\u4EEC\u4ECB\u7ECD\u4E86 JS \u7684\u4E24\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u5206\u522B\u662F\u57FA\u7840\u6570\u636E\u7C7B\u578B\u548C\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF0C\u4F60\u53EF\u4EE5\u56DE\u5FC6\u4E00\u4E0B\u6211\u63D0\u5230\u7684\u91CD\u70B9\u5185\u5BB9\u3002\u90A3\u4E48\u8FD9\u4E00\u8BB2\u8981\u804A\u7684\u6D45\u62F7\u8D1D\u548C\u6DF1\u62F7\u8D1D\uFF0C\u5176\u5B9E\u5C31\u662F\u56F4\u7ED5\u7740\u8FD9\u4E24\u79CD\u6570\u636E\u7C7B\u578B\u5C55\u5F00\u7684\u3002</p><p>\u6211\u628A\u6DF1\u6D45\u62F7\u8D1D\u5355\u72EC\u4F5C\u4E3A\u4E00\u8BB2\u6765\u4E13\u95E8\u8BB2\u89E3\uFF0C\u662F\u56E0\u4E3A\u5728 JavaScript \u7684\u7F16\u7A0B\u4E2D\u7ECF\u5E38\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u590D\u5236\uFF0C\u4EC0\u4E48\u65F6\u5019\u7528\u6DF1\u62F7\u8D1D\u3001\u4EC0\u4E48\u65F6\u5019\u7528\u6D45\u62F7\u8D1D\uFF0C\u662F\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u9700\u8981\u601D\u8003\u7684\uFF1B\u540C\u65F6\u6DF1\u6D45\u62F7\u8D1D\u4E5F\u662F\u524D\u7AEF\u9762\u8BD5\u4E2D\u6BD4\u8F83\u9AD8\u9891\u7684\u9898\u76EE\u3002</p><p>\u4F46\u662F\u6211\u5728\u9762\u8BD5\u5019\u9009\u4EBA\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u53D1\u73B0\u6709\u5F88\u591A\u540C\u5B66\u90FD\u6CA1\u6709\u641E\u61C2\u6DF1\u62F7\u8D1D\u548C\u6D45\u62F7\u8D1D\u7684\u533A\u522B\u548C\u5B9A\u4E49\u3002\u6700\u8FD1\u6211\u4E5F\u5728\u4E00\u4E9B\u5173\u4E8E JavaScript \u7684\u6280\u672F\u6587\u7AE0\u4E2D\u53D1\u73B0\uFF0C\u91CC\u9762\u5F88\u591A\u5173\u4E8E\u6DF1\u6D45\u62F7\u8D1D\u7684\u4EE3\u7801\u5199\u5F97\u6BD4\u8F83\u7B80\u964B\uFF0C\u4ECE\u9762\u8BD5\u5B98\u7684\u89D2\u5EA6\u6765\u8BB2\uFF0C\u7B80\u964B\u7684\u7B54\u6848\u662F\u4E0D\u592A\u80FD\u8BA9\u4EBA\u6EE1\u610F\u7684\u3002</p><p>\u56E0\u6B64\uFF0C\u6DF1\u5165\u5B66\u4E60\u8FD9\u90E8\u5206\u77E5\u8BC6\u6709\u52A9\u4E8E\u63D0\u9AD8\u4F60\u624B\u5199 JS \u7684\u80FD\u529B\uFF0C\u4EE5\u53CA\u5BF9\u4E00\u4E9B\u8FB9\u754C\u7279\u6B8A\u60C5\u51B5\u7684\u6DF1\u5165\u601D\u8003\u80FD\u529B\uFF0C\u8FD9\u4E00\u8BB2\u6211\u4F1A\u7ED3\u5408\u6700\u57FA\u7840\u4F46\u662F\u53C8\u5BB9\u6613\u5199\u4E0D\u597D\u7684\u7684\u9898\u76EE\u6765\u5E2E\u52A9\u4F60\u63D0\u5347\u3002</p><p>\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u6211\u5148\u629B\u51FA\u6765\u4E24\u4E2A\u95EE\u9898\uFF0C\u4F60\u53EF\u4EE5\u601D\u8003\u4E00\u4E0B\u3002</p><ol><li><p>\u62F7\u8D1D\u4E00\u4E2A\u5F88\u591A\u5D4C\u5957\u7684\u5BF9\u8C61\u600E\u4E48\u5B9E\u73B0\uFF1F</p></li><li><p>\u5728\u9762\u8BD5\u5B98\u773C\u4E2D\uFF0C\u5199\u6210\u4EC0\u4E48\u6837\u7684\u6DF1\u62F7\u8D1D\u4EE3\u7801\u624D\u80FD\u7B97\u5408\u683C\uFF1F</p></li></ol><p>\u5E26\u7740\u8FD9\u4E24\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u5148\u6765\u770B\u4E0B\u6D45\u62F7\u8D1D\u7684\u76F8\u5173\u5185\u5BB9\u3002</p><h2 id="\u6D45\u62F7\u8D1D\u7684\u539F\u7406\u548C\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6D45\u62F7\u8D1D\u7684\u539F\u7406\u548C\u5B9E\u73B0" aria-hidden="true">#</a> \u6D45\u62F7\u8D1D\u7684\u539F\u7406\u548C\u5B9E\u73B0</h2><p>\u5BF9\u4E8E\u6D45\u62F7\u8D1D\u7684\u5B9A\u4E49\u6211\u4EEC\u53EF\u4EE5\u521D\u6B65\u7406\u89E3\u4E3A\uFF1A</p><p>\u81EA\u5DF1\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u6765\u63A5\u53D7\u4F60\u8981\u91CD\u65B0\u590D\u5236\u6216\u5F15\u7528\u7684\u5BF9\u8C61\u503C\u3002\u5982\u679C\u5BF9\u8C61\u5C5E\u6027\u662F\u57FA\u672C\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u590D\u5236\u7684\u5C31\u662F\u57FA\u672C\u7C7B\u578B\u7684\u503C\u7ED9\u65B0\u5BF9\u8C61\uFF1B\u4F46\u5982\u679C\u5C5E\u6027\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF0C\u590D\u5236\u7684\u5C31\u662F\u5185\u5B58\u4E2D\u7684\u5730\u5740\uFF0C\u5982\u679C\u5176\u4E2D\u4E00\u4E2A\u5BF9\u8C61\u6539\u53D8\u4E86\u8FD9\u4E2A\u5185\u5B58\u4E2D\u7684\u5730\u5740\uFF0C\u80AF\u5B9A\u4F1A\u5F71\u54CD\u5230\u53E6\u4E00\u4E2A\u5BF9\u8C61\u3002</p><p>\u4E0B\u9762\u6211\u603B\u7ED3\u4E86\u4E00\u4E9B JavaScript \u63D0\u4F9B\u7684\u6D45\u62F7\u8D1D\u65B9\u6CD5\uFF0C\u4E00\u8D77\u6765\u770B\u770B\u54EA\u4E9B\u65B9\u6CD5\u80FD\u5B9E\u73B0\u4E0A\u8FF0\u5B9A\u4E49\u6240\u63CF\u8FF0\u7684\u8FC7\u7A0B\u3002</p><h3 id="\u65B9\u6CD5\u4E00-object-assign" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00-object-assign" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00\uFF1Aobject.assign</h3><p>object.assign \u662F ES6 \u4E2D object \u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u7528\u4E8E JS \u5BF9\u8C61\u7684\u5408\u5E76\u7B49\u591A\u4E2A\u7528\u9014\uFF0C\u5176\u4E2D\u4E00\u4E2A\u7528\u9014\u5C31\u662F\u53EF\u4EE5\u8FDB\u884C\u6D45\u62F7\u8D1D\u3002\u8BE5\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u62F7\u8D1D\u7684\u76EE\u6807\u5BF9\u8C61\uFF0C\u540E\u9762\u7684\u53C2\u6570\u662F\u62F7\u8D1D\u7684\u6765\u6E90\u5BF9\u8C61\uFF08\u4E5F\u53EF\u4EE5\u662F\u591A\u4E2A\u6765\u6E90\uFF09\u3002</p><blockquote><p>object.assign \u7684\u8BED\u6CD5\u4E3A\uFF1AObject.assign(target, ...sources)</p></blockquote><p>object.assign \u7684\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> target <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> source <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token comment">// { a: { b: 1 } };</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u901A\u8FC7 object.assign \u6211\u4EEC\u7684\u786E\u7B80\u5355\u5B9E\u73B0\u4E86\u4E00\u4E2A\u6D45\u62F7\u8D1D\uFF0C\u201Ctarget\u201D\u5C31\u662F\u6211\u4EEC\u65B0\u62F7\u8D1D\u7684\u5BF9\u8C61\uFF0C\u4E0B\u9762\u518D\u770B\u4E00\u4E2A\u548C\u4E0A\u9762\u4E0D\u592A\u4E00\u6837\u7684\u4F8B\u5B50\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> target <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> source <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token comment">// { a: { b: 10 } };</span>
source<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token comment">// { a: { b: 10 } };</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token comment">// { a: { b: 10 } };</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4ECE\u4E0A\u9762\u4EE3\u7801\u4E2D\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u9996\u5148\u901A\u8FC7 Object.assign \u5C06 source \u62F7\u8D1D\u5230 target \u5BF9\u8C61\u4E2D\uFF0C\u7136\u540E\u6211\u4EEC\u5C1D\u8BD5\u5C06 source \u5BF9\u8C61\u4E2D\u7684 b \u5C5E\u6027\u7531 2 \u4FEE\u6539\u4E3A 10\u3002\u901A\u8FC7\u63A7\u5236\u53F0\u53EF\u4EE5\u53D1\u73B0\uFF0C\u6253\u5370\u7ED3\u679C\u4E2D\uFF0C\u4E09\u4E2A target \u91CC\u7684 b \u5C5E\u6027\u90FD\u53D8\u4E3A 10 \u4E86\uFF0C\u8BC1\u660E Object.assign \u6682\u65F6\u5B9E\u73B0\u4E86\u6211\u4EEC\u60F3\u8981\u7684\u62F7\u8D1D\u6548\u679C\u3002</p><p>\u4F46\u662F\u4F7F\u7528 object.assign \u65B9\u6CD5\u6709\u51E0\u70B9\u9700\u8981\u6CE8\u610F\uFF1A</p><ol><li>\u5B83\u4E0D\u4F1A\u62F7\u8D1D\u5BF9\u8C61\u7684\u7EE7\u627F\u5C5E\u6027\uFF1B</li><li>\u5B83\u4E0D\u4F1A\u62F7\u8D1D\u5BF9\u8C61\u7684\u4E0D\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\uFF1B</li><li>\u53EF\u4EE5\u62F7\u8D1D Symbol \u7C7B\u578B\u7684\u5C5E\u6027\u3002</li></ol><p>\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3A\uFF1AObject.assign \u5FAA\u73AF\u904D\u5386\u539F\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u901A\u8FC7\u590D\u5236\u7684\u65B9\u5F0F\u5C06\u5176\u8D4B\u503C\u7ED9\u76EE\u6807\u5BF9\u8C61\u7684\u76F8\u5E94\u5C5E\u6027\uFF0C\u6765\u770B\u4E00\u4E0B\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4EE5\u9A8C\u8BC1\u5B83\u53EF\u4EE5\u62F7\u8D1D Symbol \u7C7B\u578B\u7684\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">sym</span><span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> <span class="token string">&quot;innumerable&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> obj1<span class="token punctuation">)</span>
obj1<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;obj1&quot;</span><span class="token punctuation">,</span> obj1<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;obj2&quot;</span><span class="token punctuation">,</span> obj2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u63A7\u5236\u53F0\u6253\u5370\u7684\u7ED3\u679C\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/zhang13pro/blogImg/img/20220327174058.png" alt="\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027"></p><p>\u4ECE\u4E0A\u9762\u7684\u6837\u4F8B\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u5229\u7528 object.assign \u4E5F\u53EF\u4EE5\u62F7\u8D1D Symbol \u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u4F46\u662F\u5982\u679C\u5230\u4E86\u5BF9\u8C61\u7684\u7B2C\u4E8C\u5C42\u5C5E\u6027 obj1.a.b \u8FD9\u91CC\u7684\u65F6\u5019\uFF0C\u524D\u8005\u503C\u7684\u6539\u53D8\u4E5F\u4F1A\u5F71\u54CD\u540E\u8005\u7684\u7B2C\u4E8C\u5C42\u5C5E\u6027\u7684\u503C\uFF0C\u8BF4\u660E\u5176\u4E2D\u4F9D\u65E7\u5B58\u5728\u7740\u8BBF\u95EE\u5171\u540C\u5806\u5185\u5B58\u7684\u95EE\u9898\uFF0C\u4E5F\u5C31\u662F\u8BF4\u8FD9\u79CD\u65B9\u6CD5\u8FD8\u4E0D\u80FD\u8FDB\u4E00\u6B65\u590D\u5236\uFF0C\u800C\u53EA\u662F\u5B8C\u6210\u4E86\u6D45\u62F7\u8D1D\u7684\u529F\u80FD\u3002</p><h3 id="\u65B9\u6CD5\u4E8C-\u6269\u5C55\u8FD0\u7B97\u7B26\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C-\u6269\u5C55\u8FD0\u7B97\u7B26\u65B9\u5F0F" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C\uFF1A\u6269\u5C55\u8FD0\u7B97\u7B26\u65B9\u5F0F</h3><p>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5229\u7528 JS \u7684\u6269\u5C55\u8FD0\u7B97\u7B26\uFF0C\u5728\u6784\u9020\u5BF9\u8C61\u7684\u540C\u65F6\u5B8C\u6210\u6D45\u62F7\u8D1D\u7684\u529F\u80FD\u3002</p><blockquote><p>\u6269\u5C55\u8FD0\u7B97\u7B26\u7684\u8BED\u6CD5\u4E3A\uFF1Alet cloneObj = { ...obj };</p></blockquote><p>\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">_ \u5BF9\u8C61\u7684\u62F7\u8D1D _</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>obj<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">//{a:2,b:{c:1}} console.log(obj2); //{a:1,b:{c:1}}</span>
obj<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">//{a:2,b:{c:2}} console.log(obj2); //{a:1,b:{c:2}}</span>
<span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">_ \u6570\u7EC4\u7684\u62F7\u8D1D _</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u8DDF arr.slice()\u662F\u4E00\u6837\u7684\u6548\u679C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6269\u5C55\u8FD0\u7B97\u7B26 \u548C object.assign \u6709\u540C\u6837\u7684\u7F3A\u9677\uFF0C\u4E5F\u5C31\u662F\u5B9E\u73B0\u7684\u6D45\u62F7\u8D1D\u7684\u529F\u80FD\u5DEE\u4E0D\u591A\uFF0C\u4F46\u662F\u5982\u679C\u5C5E\u6027\u90FD\u662F\u57FA\u672C\u7C7B\u578B\u7684\u503C\uFF0C\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u8FDB\u884C\u6D45\u62F7\u8D1D\u4F1A\u66F4\u52A0\u65B9\u4FBF\u3002</p><h3 id="\u65B9\u6CD5\u4E09-concat-\u62F7\u8D1D\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E09-concat-\u62F7\u8D1D\u6570\u7EC4" aria-hidden="true">#</a> \u65B9\u6CD5\u4E09\uFF1Aconcat \u62F7\u8D1D\u6570\u7EC4</h3><p>\u6570\u7EC4\u7684 concat \u65B9\u6CD5\u5176\u5B9E\u4E5F\u662F\u6D45\u62F7\u8D1D\uFF0C\u6240\u4EE5\u8FDE\u63A5\u4E00\u4E2A\u542B\u6709\u5F15\u7528\u7C7B\u578B\u7684\u6570\u7EC4\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u4FEE\u6539\u539F\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u7684\u5C5E\u6027\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u5F71\u54CD\u62F7\u8D1D\u4E4B\u540E\u8FDE\u63A5\u7684\u6570\u7EC4\u3002\u4E0D\u8FC7 concat \u53EA\u80FD\u7528\u4E8E\u6570\u7EC4\u7684\u6D45\u62F7\u8D1D\uFF0C\u4F7F\u7528\u573A\u666F\u6BD4\u8F83\u5C40\u9650\u3002\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> newArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
newArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">// [ 1, 2, 3 ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span> <span class="token comment">// [ 1, 100, 3 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u65B9\u6CD5\u56DB-slice-\u62F7\u8D1D\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u56DB-slice-\u62F7\u8D1D\u6570\u7EC4" aria-hidden="true">#</a> \u65B9\u6CD5\u56DB\uFF1Aslice \u62F7\u8D1D\u6570\u7EC4</h3><p>slice \u65B9\u6CD5\u4E5F\u6BD4\u8F83\u6709\u5C40\u9650\u6027\uFF0C\u56E0\u4E3A\u5B83\u4EC5\u4EC5\u9488\u5BF9\u6570\u7EC4\u7C7B\u578B\u3002slice \u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u5BF9\u8C61\uFF0C\u8FD9\u4E00\u5BF9\u8C61\u7531\u8BE5\u65B9\u6CD5\u7684\u524D\u4E24\u4E2A\u53C2\u6570\u6765\u51B3\u5B9A\u539F\u6570\u7EC4\u622A\u53D6\u7684\u5F00\u59CB\u548C\u7ED3\u675F\u65F6\u95F4\uFF0C\u662F\u4E0D\u4F1A\u5F71\u54CD\u548C\u6539\u53D8\u539F\u59CB\u6570\u7EC4\u7684\u3002</p><blockquote><p>slice \u7684\u8BED\u6CD5\u4E3A\uFF1Aarr.slice(begin, end);</p></blockquote><p>\u6211\u4EEC\u6765\u770B\u4E00\u4E0B slice \u600E\u4E48\u4F7F\u7528\uFF0C\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> newArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
newArr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token number">1000</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">//[ 1, 2, { val: 1000 } ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u8FD9\u5C31\u662F\u6D45\u62F7\u8D1D\u7684\u9650\u5236\u6240\u5728\u4E86\u2014\u2014\u5B83\u53EA\u80FD\u62F7\u8D1D\u4E00\u5C42\u5BF9\u8C61\u3002\u5982\u679C\u5B58\u5728\u5BF9\u8C61\u7684\u5D4C\u5957\uFF0C\u90A3\u4E48\u6D45\u62F7\u8D1D\u5C06\u65E0\u80FD\u4E3A\u529B\u3002\u56E0\u6B64\u6DF1\u62F7\u8D1D\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u800C\u751F\u7684\uFF0C\u5B83\u80FD\u89E3\u51B3\u591A\u5C42\u5BF9\u8C61\u5D4C\u5957\u95EE\u9898\uFF0C\u5F7B\u5E95\u5B9E\u73B0\u62F7\u8D1D\u3002\u8FD9\u4E00\u8BB2\u7684\u540E\u9762\u6211\u4F1A\u4ECB\u7ECD\u6DF1\u62F7\u8D1D\u76F8\u5173\u7684\u5185\u5BB9\u3002</p><h2 id="\u624B\u5DE5\u5B9E\u73B0\u4E00\u4E2A\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u624B\u5DE5\u5B9E\u73B0\u4E00\u4E2A\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u624B\u5DE5\u5B9E\u73B0\u4E00\u4E2A\u6D45\u62F7\u8D1D</h2><p>\u6839\u636E\u4EE5\u4E0A\u5BF9\u6D45\u62F7\u8D1D\u7684\u7406\u89E3\uFF0C\u5982\u679C\u8BA9\u4F60\u81EA\u5DF1\u5B9E\u73B0\u4E00\u4E2A\u6D45\u62F7\u8D1D\uFF0C\u5927\u81F4\u7684\u601D\u8DEF\u5206\u4E3A\u4E24\u70B9\uFF1A</p><ol><li><p>\u5BF9\u57FA\u7840\u7C7B\u578B\u505A\u4E00\u4E2A\u6700\u57FA\u672C\u7684\u4E00\u4E2A\u62F7\u8D1D\uFF1B</p></li><li><p>\u5BF9\u5F15\u7528\u7C7B\u578B\u5F00\u8F9F\u4E00\u4E2A\u65B0\u7684\u5B58\u50A8\uFF0C\u5E76\u4E14\u62F7\u8D1D\u4E00\u5C42\u5BF9\u8C61\u5C5E\u6027\u3002</p></li></ol><p>\u90A3\u4E48\uFF0C\u56F4\u7ED5\u7740\u8FD9\u4E24\u4E2A\u601D\u8DEF\uFF0C\u8BF7\u4F60\u8DDF\u7740\u6211\u7684\u64CD\u4F5C\uFF0C\u81EA\u5DF1\u6765\u5B9E\u73B0\u4E00\u4E2A\u6D45\u62F7\u8D1D\u5427\uFF0C\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">shallowClone</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">&amp;&amp;</span> target <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cloneTarget <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> prop <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cloneTarget<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> target<span class="token punctuation">[</span>prop<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cloneTarget
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4ECE\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u53EF\u4EE5\u770B\u51FA\uFF0C\u5229\u7528\u7C7B\u578B\u5224\u65AD\uFF0C\u9488\u5BF9\u5F15\u7528\u7C7B\u578B\u7684\u5BF9\u8C61\u8FDB\u884C for \u5FAA\u73AF\u904D\u5386\u5BF9\u8C61\u5C5E\u6027\u8D4B\u503C\u7ED9\u76EE\u6807\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u57FA\u672C\u5C31\u53EF\u4EE5\u624B\u5DE5\u5B9E\u73B0\u4E00\u4E2A\u6D45\u62F7\u8D1D\u7684\u4EE3\u7801\u4E86\u3002</p><p>\u90A3\u4E48\u4E86\u89E3\u4E86\u5B9E\u73B0\u6D45\u62F7\u8D1D\u4EE3\u7801\u7684\u601D\u8DEF\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u518D\u770B\u770B\u6DF1\u62F7\u8D1D\u662F\u600E\u4E48\u5B9E\u73B0\u7684\u3002</p><h2 id="\u6DF1\u62F7\u8D1D\u7684\u539F\u7406\u548C\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u62F7\u8D1D\u7684\u539F\u7406\u548C\u5B9E\u73B0" aria-hidden="true">#</a> \u6DF1\u62F7\u8D1D\u7684\u539F\u7406\u548C\u5B9E\u73B0</h2><p>\u6D45\u62F7\u8D1D\u53EA\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u590D\u5236\u4E86\u539F\u6709\u5BF9\u8C61\u7684\u57FA\u672C\u7C7B\u578B\u7684\u503C\uFF0C\u800C\u5F15\u7528\u6570\u636E\u7C7B\u578B\u53EA\u62F7\u8D1D\u4E86\u4E00\u5C42\u5C5E\u6027\uFF0C\u518D\u6DF1\u5C42\u7684\u8FD8\u662F\u65E0\u6CD5\u8FDB\u884C\u62F7\u8D1D\u3002\u6DF1\u62F7\u8D1D\u5219\u4E0D\u540C\uFF0C\u5BF9\u4E8E\u590D\u6742\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF0C\u5176\u5728\u5806\u5185\u5B58\u4E2D\u5B8C\u5168\u5F00\u8F9F\u4E86\u4E00\u5757\u5185\u5B58\u5730\u5740\uFF0C\u5E76\u5C06\u539F\u6709\u7684\u5BF9\u8C61\u5B8C\u5168\u590D\u5236\u8FC7\u6765\u5B58\u653E\u3002</p><p>\u8FD9\u4E24\u4E2A\u5BF9\u8C61\u662F\u76F8\u4E92\u72EC\u7ACB\u3001\u4E0D\u53D7\u5F71\u54CD\u7684\uFF0C\u5F7B\u5E95\u5B9E\u73B0\u4E86\u5185\u5B58\u4E0A\u7684\u5206\u79BB\u3002\u603B\u7684\u6765\u8BF4\uFF0C\u6DF1\u62F7\u8D1D\u7684\u539F\u7406\u53EF\u4EE5\u603B\u7ED3\u5982\u4E0B\uFF1A</p><blockquote><p>\u5C06\u4E00\u4E2A\u5BF9\u8C61\u4ECE\u5185\u5B58\u4E2D\u5B8C\u6574\u5730\u62F7\u8D1D\u51FA\u6765\u4E00\u4EFD\u7ED9\u76EE\u6807\u5BF9\u8C61\uFF0C\u5E76\u4ECE\u5806\u5185\u5B58\u4E2D\u5F00\u8F9F\u4E00\u4E2A\u5168\u65B0\u7684\u7A7A\u95F4\u5B58\u653E\u65B0\u5BF9\u8C61\uFF0C\u4E14\u65B0\u5BF9\u8C61\u7684\u4FEE\u6539\u5E76\u4E0D\u4F1A\u6539\u53D8\u539F\u5BF9\u8C61\uFF0C\u4E8C\u8005\u5B9E\u73B0\u771F\u6B63\u7684\u5206\u79BB\u3002</p></blockquote><p>\u73B0\u5728\u539F\u7406\u4F60\u77E5\u9053\u4E86\uFF0C\u90A3\u4E48\u600E\u4E48\u53BB\u5B9E\u73B0\u6DF1\u62F7\u8D1D\u5462\uFF1F\u6211\u4E5F\u603B\u7ED3\u4E86\u51E0\u79CD\u65B9\u6CD5\u5206\u4EAB\u7ED9\u4F60\u3002</p><h3 id="\u65B9\u6CD5\u4E00-\u4E5E\u4E10\u7248-json-stringify" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00-\u4E5E\u4E10\u7248-json-stringify" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00\uFF1A\u4E5E\u4E10\u7248\uFF08JSON.stringify\uFF09</h3><p>JSON.stringify() \u662F\u76EE\u524D\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u6700\u7B80\u5355\u7684\u6DF1\u62F7\u8D1D\u65B9\u6CD5\uFF0C\u5176\u5B9E\u5C31\u662F\u628A\u4E00\u4E2A\u5BF9\u8C61\u5E8F\u5217\u5316\u6210\u4E3A JSON \u7684\u5B57\u7B26\u4E32\uFF0C\u5E76\u5C06\u5BF9\u8C61\u91CC\u9762\u7684\u5185\u5BB9\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\uFF0C\u6700\u540E\u518D\u7528 JSON.parse() \u7684\u65B9\u6CD5\u5C06 JSON \u5B57\u7B26\u4E32\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>\uFF1B
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>\uFF1B
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//{a:1,b:[1,2,3]}</span>
obj1<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span>\uFF1B
obj1<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//{a:2,b:[1,2,3,4]}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//{a:1,b:[1,2,3]}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u770B\u5230\uFF0C\u901A\u8FC7 JSON.stringify \u53EF\u4EE5\u521D\u6B65\u5B9E\u73B0\u4E00\u4E2A\u5BF9\u8C61\u7684\u6DF1\u62F7\u8D1D\uFF0C\u901A\u8FC7\u6539\u53D8 obj1 \u7684 b \u5C5E\u6027\uFF0C\u5176\u5B9E\u53EF\u4EE5\u770B\u51FA obj2 \u8FD9\u4E2A\u5BF9\u8C61\u4E5F\u4E0D\u53D7\u5F71\u54CD\u3002</p><p>\u4F46\u662F\u4F7F\u7528 JSON.stringify \u5B9E\u73B0\u6DF1\u62F7\u8D1D\u8FD8\u662F\u6709\u4E00\u4E9B\u5730\u65B9\u503C\u5F97\u6CE8\u610F\uFF0C\u6211\u603B\u7ED3\u4E0B\u6765\u4E3B\u8981\u6709\u8FD9\u51E0\u70B9\uFF1A</p><ol><li>\u62F7\u8D1D\u7684\u5BF9\u8C61\u7684\u503C\u4E2D\u5982\u679C\u6709\u51FD\u6570\u3001undefined\u3001symbol \u8FD9\u51E0\u79CD\u7C7B\u578B\uFF0C\u7ECF\u8FC7 JSON.stringify \u5E8F\u5217\u5316\u4E4B\u540E\u7684\u5B57\u7B26\u4E32\u4E2D\u8FD9\u4E2A\u952E\u503C\u5BF9\u4F1A\u6D88\u5931\uFF1B</li><li>\u62F7\u8D1D Date \u5F15\u7528\u7C7B\u578B\u4F1A\u53D8\u6210\u5B57\u7B26\u4E32\uFF1B</li><li>\u65E0\u6CD5\u62F7\u8D1D\u4E0D\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\uFF1B</li><li>\u65E0\u6CD5\u62F7\u8D1D\u5BF9\u8C61\u7684\u539F\u578B\u94FE\uFF1B</li><li>\u62F7\u8D1D RegExp \u5F15\u7528\u7C7B\u578B\u4F1A\u53D8\u6210\u7A7A\u5BF9\u8C61\uFF1B</li><li>\u5BF9\u8C61\u4E2D\u542B\u6709 NaN\u3001Infinity \u4EE5\u53CA -Infinity\uFF0CJSON \u5E8F\u5217\u5316\u7684\u7ED3\u679C\u4F1A\u53D8\u6210 null\uFF1B</li><li>\u65E0\u6CD5\u62F7\u8D1D\u5BF9\u8C61\u7684\u5FAA\u73AF\u5E94\u7528\uFF0C\u5373\u5BF9\u8C61\u6210\u73AF (obj[key] = obj)\u3002</li></ol><p>\u9488\u5BF9\u8FD9\u4E9B\u5B58\u5728\u7684\u95EE\u9898\uFF0C\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u7740\u7528\u4E0B\u9762\u7684\u8FD9\u6BB5\u4EE3\u7801\u4EB2\u81EA\u6267\u884C\u4E00\u904D\uFF0C\u6765\u770B\u770B\u5982\u6B64\u590D\u6742\u7684\u5BF9\u8C61\uFF0C\u5982\u679C\u7528 JSON.stringify \u5B9E\u73B0\u6DF1\u62F7\u8D1D\u4F1A\u51FA\u73B0\u4EC0\u4E48\u60C5\u51B5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Obj</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>und <span class="token operator">=</span> <span class="token keyword">undefined</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">123</span><span class="token regex-delimiter">/</span></span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token number">NaN</span> <span class="token operator">=</span> <span class="token number">NaN</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>infinity <span class="token operator">=</span> <span class="token number">Infinity</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>sym <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Obj</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> <span class="token string">&quot;innumerable&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;innumerable&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;obj1&quot;</span><span class="token punctuation">,</span> obj1<span class="token punctuation">)</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;obj2&quot;</span><span class="token punctuation">,</span> obj2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u901A\u8FC7\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u53EF\u4EE5\u770B\u5230\u6267\u884C\u7ED3\u679C\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/zhang13pro/blogImg/img/20220327175110.png" alt="JSON.stringify"></p><p>\u4F7F\u7528 JSON.stringify \u65B9\u6CD5\u5B9E\u73B0\u6DF1\u62F7\u8D1D\u5BF9\u8C61\uFF0C\u867D\u7136\u5230\u76EE\u524D\u4E3A\u6B62\u8FD8\u6709\u5F88\u591A\u65E0\u6CD5\u5B9E\u73B0\u7684\u529F\u80FD\uFF0C\u4F46\u662F\u8FD9\u79CD\u65B9\u6CD5\u8DB3\u4EE5\u6EE1\u8DB3\u65E5\u5E38\u7684\u5F00\u53D1\u9700\u6C42\uFF0C\u5E76\u4E14\u662F\u6700\u7B80\u5355\u548C\u5FEB\u6377\u7684\u3002\u800C\u5BF9\u4E8E\u5176\u4ED6\u7684\u4E5F\u8981\u5B9E\u73B0\u6DF1\u62F7\u8D1D\u7684\uFF0C\u6BD4\u8F83\u9EBB\u70E6\u7684\u5C5E\u6027\u5BF9\u5E94\u7684\u6570\u636E\u7C7B\u578B\uFF0CJSON.stringify \u6682\u65F6\u8FD8\u662F\u65E0\u6CD5\u6EE1\u8DB3\u7684\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u4E0B\u9762\u7684\u51E0\u79CD\u65B9\u6CD5\u4E86\u3002</p><h3 id="\u65B9\u6CD5\u4E8C-\u57FA\u7840\u7248-\u624B\u5199\u9012\u5F52\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C-\u57FA\u7840\u7248-\u624B\u5199\u9012\u5F52\u5B9E\u73B0" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C\uFF1A\u57FA\u7840\u7248\uFF08\u624B\u5199\u9012\u5F52\u5B9E\u73B0\uFF09</h3><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u5B9E\u73B0 deepClone \u51FD\u6570\u5C01\u88C5\u7684\u4F8B\u5B50\uFF0C\u901A\u8FC7 for in \u904D\u5386\u4F20\u5165\u53C2\u6570\u7684\u5C5E\u6027\u503C\uFF0C\u5982\u679C\u503C\u662F\u5F15\u7528\u7C7B\u578B\u5219\u518D\u6B21\u9012\u5F52\u8C03\u7528\u8BE5\u51FD\u6570\uFF0C\u5982\u679C\u662F\u57FA\u7840\u6570\u636E\u7C7B\u578B\u5C31\u76F4\u63A5\u590D\u5236\uFF0C\u4EE3\u7801\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> cloneObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u904D\u5386</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cloneObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//\u662F\u5BF9\u8C61\u5C31\u518D\u6B21\u8C03\u7528\u8BE5\u51FD\u6570\u9012\u5F52</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      cloneObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token comment">//\u57FA\u672C\u7C7B\u578B\u7684\u8BDD\u76F4\u63A5\u590D\u5236\u503C</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> cloneObj
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
obj1<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span> <span class="token comment">// {a:{b:1}}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u867D\u7136\u5229\u7528\u9012\u5F52\u80FD\u5B9E\u73B0\u4E00\u4E2A\u6DF1\u62F7\u8D1D\uFF0C\u4F46\u662F\u540C\u4E0A\u9762\u7684 JSON.stringify \u4E00\u6837\uFF0C\u8FD8\u662F\u6709\u4E00\u4E9B\u95EE\u9898\u6CA1\u6709\u5B8C\u5168\u89E3\u51B3\uFF0C\u4F8B\u5982\uFF1A</p><ol><li>\u8FD9\u4E2A\u6DF1\u62F7\u8D1D\u51FD\u6570\u5E76\u4E0D\u80FD\u590D\u5236\u4E0D\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\u4EE5\u53CA Symbol \u7C7B\u578B\uFF1B</li><li>\u8FD9\u79CD\u65B9\u6CD5\u53EA\u662F\u9488\u5BF9\u666E\u901A\u7684\u5F15\u7528\u7C7B\u578B\u7684\u503C\u505A\u9012\u5F52\u590D\u5236\uFF0C\u800C\u5BF9\u4E8E Array\u3001Date\u3001RegExp\u3001Error\u3001Function \u8FD9\u6837\u7684\u5F15\u7528\u7C7B\u578B\u5E76\u4E0D\u80FD\u6B63\u786E\u5730\u62F7\u8D1D\uFF1B</li><li>\u5BF9\u8C61\u7684\u5C5E\u6027\u91CC\u9762\u6210\u73AF\uFF0C\u5373\u5FAA\u73AF\u5F15\u7528\u6CA1\u6709\u89E3\u51B3\u3002</li></ol><p>\u8FD9\u79CD\u57FA\u7840\u7248\u672C\u7684\u5199\u6CD5\u4E5F\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EF\u4EE5\u5E94\u5BF9\u5927\u90E8\u5206\u7684\u5E94\u7528\u60C5\u51B5\u3002\u4F46\u662F\u4F60\u5728\u9762\u8BD5\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u53EA\u80FD\u5199\u51FA\u8FD9\u6837\u7684\u4E00\u4E2A\u6709\u7F3A\u9677\u7684\u6DF1\u62F7\u8D1D\u65B9\u6CD5\uFF0C\u6709\u53EF\u80FD\u4E0D\u4F1A\u901A\u8FC7\u3002</p><p>\u6240\u4EE5\u4E3A\u4E86\u201C\u62EF\u6551\u201D\u8FD9\u4E9B\u7F3A\u9677\uFF0C\u4E0B\u9762\u6211\u5E26\u4F60\u4E00\u8D77\u770B\u770B\u6539\u8FDB\u7684\u7248\u672C\uFF0C\u4EE5\u4FBF\u4E8E\u4F60\u53EF\u4EE5\u5728\u9762\u8BD5\u79CD\u5448\u73B0\u51FA\u66F4\u597D\u7684\u6DF1\u62F7\u8D1D\u65B9\u6CD5\uFF0C\u8D62\u5F97\u9762\u8BD5\u5B98\u7684\u9752\u7750\u3002</p><h3 id="\u65B9\u6CD5\u4E09-\u6539\u8FDB\u7248-\u6539\u8FDB\u540E\u9012\u5F52\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E09-\u6539\u8FDB\u7248-\u6539\u8FDB\u540E\u9012\u5F52\u5B9E\u73B0" aria-hidden="true">#</a> \u65B9\u6CD5\u4E09\uFF1A\u6539\u8FDB\u7248\uFF08\u6539\u8FDB\u540E\u9012\u5F52\u5B9E\u73B0\uFF09</h3><p>\u9488\u5BF9\u4E0A\u9762\u51E0\u4E2A\u5F85\u89E3\u51B3\u95EE\u9898\uFF0C\u6211\u5148\u901A\u8FC7\u56DB\u70B9\u76F8\u5173\u7684\u7406\u8BBA\u544A\u8BC9\u4F60\u5206\u522B\u5E94\u8BE5\u600E\u4E48\u505A\u3002</p><ol><li>\u9488\u5BF9\u80FD\u591F\u904D\u5386\u5BF9\u8C61\u7684\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\u4EE5\u53CA Symbol \u7C7B\u578B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 Reflect.ownKeys \u65B9\u6CD5\uFF1B</li><li>\u5F53\u53C2\u6570\u4E3A Date\u3001RegExp \u7C7B\u578B\uFF0C\u5219\u76F4\u63A5\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u5B9E\u4F8B\u8FD4\u56DE\uFF1B</li><li>\u5229\u7528 Object \u7684 getOwnPropertyDescriptors \u65B9\u6CD5\u53EF\u4EE5\u83B7\u5F97\u5BF9\u8C61\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684\u7279\u6027\uFF0C\u987A\u4FBF\u7ED3\u5408 Object \u7684 create \u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u5E76\u7EE7\u627F\u4F20\u5165\u539F\u5BF9\u8C61\u7684\u539F\u578B\u94FE\uFF1B</li><li>\u5229\u7528 WeakMap \u7C7B\u578B\u4F5C\u4E3A Hash \u8868\uFF0C\u56E0\u4E3A WeakMap \u662F\u5F31\u5F15\u7528\u7C7B\u578B\uFF0C\u53EF\u4EE5\u6709\u6548\u9632\u6B62\u5185\u5B58\u6CC4\u6F0F\uFF08\u4F60\u53EF\u4EE5\u5173\u6CE8\u4E00\u4E0B Map \u548C weakMap \u7684\u5173\u952E\u533A\u522B\uFF0C\u8FD9\u91CC\u8981\u7528 weakMap\uFF09\uFF0C\u4F5C\u4E3A\u68C0\u6D4B\u5FAA\u73AF\u5F15\u7528\u5F88\u6709\u5E2E\u52A9\uFF0C\u5982\u679C\u5B58\u5728\u5FAA\u73AF\uFF0C\u5219\u5F15\u7528\u76F4\u63A5\u8FD4\u56DE WeakMap \u5B58\u50A8\u7684\u503C\u3002</li></ol><p>\u5173\u4E8E\u7B2C 4 \u70B9\u7684 WeakMap\uFF0C\u8FD9\u91CC\u6211\u4E0D\u8FDB\u884C\u8FC7\u591A\u7684\u79D1\u666E\u8BB2\u89E3\u4E86\uFF0C\u4F60\u5982\u679C\u4E0D\u6E05\u695A\u53EF\u4EE5\u81EA\u5DF1\u518D\u901A\u8FC7\u76F8\u5173\u8D44\u6599\u4E86\u89E3\u4E00\u4E0B\u3002\u6211\u4E5F\u7ECF\u5E38\u5728\u7ED9\u4EBA\u9762\u8BD5\u4E2D\u770B\u5230\u6709\u4EBA\u4F7F\u7528 WeakMap \u6765\u89E3\u51B3\u5FAA\u73AF\u5F15\u7528\u95EE\u9898\uFF0C\u4F46\u662F\u5F88\u591A\u89E3\u91CA\u90FD\u662F\u4E0D\u591F\u6E05\u6670\u7684\u3002</p><p>\u5F53\u4F60\u4E0D\u592A\u4E86\u89E3 WeakMap \u7684\u771F\u6B63\u4F5C\u7528\u65F6\uFF0C\u6211\u5EFA\u8BAE\u4F60\u4E0D\u8981\u5728\u9762\u8BD5\u4E2D\u5199\u51FA\u8FD9\u6837\u7684\u4EE3\u7801\uFF0C\u5982\u679C\u53EA\u662F\u6B7B\u8BB0\u786C\u80CC\uFF0C\u4F1A\u7ED9\u81EA\u5DF1\u6316\u5751\u7684\u3002\u56E0\u4E3A\u4F60\u5199\u7684\u6BCF\u4E00\u884C\u4EE3\u7801\u90FD\u662F\u9700\u8981\u7ECF\u8FC7\u6DF1\u601D\u719F\u8651\u5E76\u4E14\u975E\u5E38\u6E05\u6670\u660E\u767D\u7684\uFF0C\u8FD9\u6837\u4F60\u624D\u80FD\u7ECF\u5F97\u4F4F\u9762\u8BD5\u5B98\u7684\u63A8\u6572\u3002</p><p>\u5F53\u7136\uFF0C\u5982\u679C\u4F60\u5728\u8003\u8651\u5230\u5FAA\u73AF\u5F15\u7528\u7684\u95EE\u9898\u4E4B\u540E\uFF0C\u8FD8\u80FD\u7528 WeakMap \u6765\u5F88\u597D\u5730\u89E3\u51B3\uFF0C\u5E76\u4E14\u5411\u9762\u8BD5\u5B98\u89E3\u91CA\u8FD9\u6837\u505A\u7684\u76EE\u7684\uFF0C\u90A3\u4E48\u4F60\u6240\u5C55\u793A\u7684\u4EE3\u7801\uFF0C\u4EE5\u53CA\u4F60\u5BF9\u95EE\u9898\u601D\u8003\u7684\u5168\u9762\u6027\uFF0C\u5728\u9762\u8BD5\u5B98\u773C\u4E2D\u5E94\u8BE5\u7B97\u662F\u5408\u683C\u7684\u4E86\u3002</p><p>\u90A3\u4E48\u9488\u5BF9\u4E0A\u9762\u8FD9\u51E0\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u6765\u770B\u4E0B\u6539\u8FDB\u540E\u7684\u9012\u5F52\u5B9E\u73B0\u7684\u6DF1\u62F7\u8D1D\u4EE3\u7801\u5E94\u8BE5\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF0C\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isComplexDataType</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> obj <span class="token operator">!==</span> <span class="token keyword">null</span>
<span class="token keyword">const</span> <span class="token function-variable function">deepClone</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>obj<span class="token punctuation">,</span> hash <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Date<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// \u65E5\u671F\u5BF9\u8C61\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u65E5\u671F\u5BF9\u8C61</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>constructor <span class="token operator">===</span> RegExp<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">//\u6B63\u5219\u5BF9\u8C61\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u6B63\u5219\u5BF9\u8C61</span>
  <span class="token comment">//\u5982\u679C\u5FAA\u73AF\u5F15\u7528\u4E86\u5C31\u7528 weakMap \u6765\u89E3\u51B3</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>hash<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> hash<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
  <span class="token keyword">let</span> allDesc <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
  <span class="token comment">//\u904D\u5386\u4F20\u5165\u53C2\u6570\u6240\u6709\u952E\u7684\u7279\u6027</span>
  <span class="token keyword">let</span> cloneObj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">,</span> allDesc<span class="token punctuation">)</span>
  <span class="token comment">//\u7EE7\u627F\u539F\u578B\u94FE</span>
  hash<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> cloneObj<span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cloneObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span>
      <span class="token function">isComplexDataType</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span>
        <span class="token operator">?</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> hash<span class="token punctuation">)</span>
        <span class="token operator">:</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> cloneObj
<span class="token punctuation">}</span>
<span class="token comment">// \u4E0B\u9762\u662F\u9A8C\u8BC1\u4EE3\u7801</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">str</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">boolean</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">unf</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token literal-property property">nul</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6211\u662F\u4E00\u4E2A\u5BF9\u8C61&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">func</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u662F\u4E00\u4E2A\u51FD\u6570&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">reg</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;/\u6211\u662F\u4E00\u4E2A\u6B63\u5219/ig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;innumerable&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>loop <span class="token operator">=</span> obj <span class="token comment">// \u8BBE\u7F6E loop \u6210\u5FAA\u73AF\u5F15\u7528\u7684\u5C5E\u6027</span>
<span class="token keyword">let</span> cloneObj <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
cloneObj<span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;obj&quot;</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;cloneObj&quot;</span><span class="token punctuation">,</span> cloneObj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>\u6211\u4EEC\u770B\u4E00\u4E0B\u7ED3\u679C\uFF0CcloneObj \u5728 obj \u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u4E86\u4E00\u6B21\u6DF1\u62F7\u8D1D\uFF0CcloneObj \u91CC\u7684 arr \u6570\u7EC4\u8FDB\u884C\u4E86\u4FEE\u6539\uFF0C\u5E76\u672A\u5F71\u54CD\u5230 obj.arr \u7684\u53D8\u5316\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p>\u4ECE\u8FD9\u5F20\u622A\u56FE\u7684\u7ED3\u679C\u53EF\u4EE5\u770B\u51FA\uFF0C\u6539\u8FDB\u7248\u7684 deepClone \u51FD\u6570\u5DF2\u7ECF\u5BF9\u57FA\u7840\u7248\u7684\u90A3\u51E0\u4E2A\u95EE\u9898\u8FDB\u884C\u4E86\u6539\u8FDB\uFF0C\u4E5F\u9A8C\u8BC1\u4E86\u6211\u4E0A\u9762\u63D0\u5230\u7684\u90A3\u56DB\u70B9\u7406\u8BBA\u3002</p><p>\u90A3\u4E48\u5230\u8FD9\u91CC\uFF0C\u6DF1\u62F7\u8D1D\u7684\u76F8\u5173\u5185\u5BB9\u5C31\u4ECB\u7ECD\u5F97\u5DEE\u4E0D\u591A\u4E86\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u8FD9\u4E00\u8BB2\uFF0C\u6211\u4EEC\u63A2\u8BA8\u4E86\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2A\u6DF1\u6D45\u62F7\u8D1D\u3002\u5728\u65E5\u5E38\u7684\u5F00\u53D1\u4E2D\uFF0C\u7531\u4E8E\u5F00\u53D1\u8005\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E9B\u73B0\u6210\u7684\u5E93\u6765\u5B9E\u73B0\u6DF1\u62F7\u8D1D\uFF0C\u6240\u4EE5\u5F88\u591A\u4EBA\u5BF9\u5982\u4F55\u5B9E\u73B0\u6DF1\u62F7\u8D1D\u7684\u7EC6\u8282\u95EE\u9898\u5E76\u4E0D\u6E05\u695A\u3002\u4F46\u662F\u5982\u679C\u4ED4\u7EC6\u7814\u7A76\u4F60\u5C31\u4F1A\u53D1\u73B0\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u5BF9\u4E8E\u4F60\u6DF1\u5165\u4E86\u89E3 JS \u5E95\u5C42\u7684\u539F\u7406\u6709\u5F88\u5927\u5E2E\u52A9\u3002\u5982\u679C\u672A\u6765\u4F60\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u4E00\u4E2A\u524D\u7AEF\u76F8\u5173\u7684\u5DE5\u5177\u6216\u8005\u5E93\uFF0C\u5BF9 JS \u7406\u89E3\u7684\u6DF1\u5EA6\u4F1A\u51B3\u5B9A\u4F60\u80FD\u628A\u8FD9\u4E2A\u4E1C\u897F\u505A\u5F97\u6709\u591A\u597D\u3002</p><p>\u5176\u5B9E\u5230\u6700\u540E\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u81EA\u5DF1\u5B8C\u6574\u5B9E\u73B0\u4E00\u4E2A\u6DF1\u62F7\u8D1D\uFF0C\u8FD8\u662F\u8003\u5BDF\u4E86\u4E0D\u5C11\u7684\u77E5\u8BC6\u70B9\u548C\u7F16\u7A0B\u80FD\u529B\uFF0C\u603B\u7ED3\u4E0B\u6765\u5927\u81F4\u5206\u4E3A\u8FD9\u51E0\u70B9\uFF0C\u8BF7\u770B\u4E0B\u56FE\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/zhang13pro/blogImg/img/20220327175545.png" alt="\u77E5\u8BC6\u70B9"></p><p>\u53EF\u4EE5\u770B\u5230\u901A\u8FC7\u8FD9\u4E00\u4E2A\u95EE\u9898\u80FD\u8003\u5BDF\u7684\u80FD\u529B\u6709\u5F88\u591A\uFF0C\u56E0\u6B64\u5343\u4E07\u4E0D\u8981\u7528\u6700\u4F4E\u7684\u6807\u51C6\u6765\u8981\u6C42\u81EA\u5DF1\uFF0C\u5E94\u8BE5\u7528\u7C7B\u4F3C\u7684\u65B9\u6CD5\u53BB\u5206\u6790\u6BCF\u4E2A\u95EE\u9898\u6DF1\u5165\u8003\u5BDF\u7684\u7A76\u7ADF\u662F\u4EC0\u4E48\uFF0C\u8FD9\u6837\u624D\u80FD\u66F4\u597D\u5730\u53BB\u5168\u9762\u63D0\u5347\u81EA\u5DF1\u7684\u57FA\u672C\u529F\u3002</p><p>\u5173\u4E8E\u6DF1\u6D45\u62F7\u8D1D\u5982\u679C\u4F60\u6709\u4E0D\u6E05\u695A\u7684\u5730\u65B9\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u7559\u8A00\uFF0C\u6700\u597D\u7684\u5EFA\u8BAE\u8FD8\u662F\u8981\u591A\u52A8\u624B\uFF0C\u4E0D\u6E05\u695A\u7684\u5730\u65B9\u81EA\u5DF1\u6572\u4E00\u904D\u4EE3\u7801\uFF0C\u8FD9\u6837\u624D\u80FD\u52A0\u6DF1\u5370\u8C61\uFF0C\u7136\u540E\u66F4\u5BB9\u6613\u5730\u53BB\u6D88\u5316\u8FD9\u90E8\u5206\u5185\u5BB9\u3002</p><p>\u4E0B\u4E00\u8BB2\uFF0C\u6211\u4EEC\u5C06\u8FCE\u6765\u7EE7\u627F\u65B9\u5F0F\u7684\u5B66\u4E60\uFF0C\u8FD9\u90E8\u5206\u77E5\u8BC6\u4E5F\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u4F60\u9700\u8981\u719F\u7EC3\u638C\u63E1\u5E76\u7406\u89E3\u5176\u539F\u7406\u3002\u4E5F\u6B22\u8FCE\u4F60\u63D0\u524D\u9884\u4E60\u76F8\u5173\u77E5\u8BC6\uFF0C\u8FD9\u6837\u624D\u80FD\u5728\u4E0D\u540C\u7684\u89D2\u5EA6\u6709\u6240\u6536\u83B7\u3002\u4E0B\u4E00\u8BB2\u518D\u89C1\u3002</p><!--]-->`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/2.html.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var _2_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$h]]);
var _2_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _2_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$A = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_020 = vue.resolveComponent("lg-js-020");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_020, _attrs, null, _parent));
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/20.html.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var _20_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$g]]);
var _20_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _20_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_021 = vue.resolveComponent("lg-js-021");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_021, _attrs, null, _parent));
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/21.html.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var _21_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$f]]);
var _21_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _21_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_022 = vue.resolveComponent("lg-js-022");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_022, _attrs, null, _parent));
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/22.html.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var _22_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$e]]);
var _22_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _22_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_023 = vue.resolveComponent("lg-js-023");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_023, _attrs, null, _parent));
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/23.html.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var _23_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$d]]);
var _23_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _23_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_024 = vue.resolveComponent("lg-js-024");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_024, _attrs, null, _parent));
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/24.html.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var _24_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$c]]);
var _24_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _24_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_025 = vue.resolveComponent("lg-js-025");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_025, _attrs, null, _parent));
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/25.html.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var _25_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$b]]);
var _25_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _25_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="_03-\u7EE7\u627F\u5B9E\u73B0-\u63A2\u7A76-js-\u5E38\u89C1\u7684-6-\u79CD\u7EE7\u627F\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_03-\u7EE7\u627F\u5B9E\u73B0-\u63A2\u7A76-js-\u5E38\u89C1\u7684-6-\u79CD\u7EE7\u627F\u65B9\u5F0F" aria-hidden="true">#</a> 03 | \u7EE7\u627F\u5B9E\u73B0\uFF1A\u63A2\u7A76 JS \u5E38\u89C1\u7684 6 \u79CD\u7EE7\u627F\u65B9\u5F0F</h1><p>\u8FD9\u4E00\u8BB2\u6211\u8981\u5E26\u4F60\u4E00\u8D77\u63A2\u7A76 JavaScript \u7684\u7EE7\u627F\u65B9\u5F0F\u3002</p><p>\u6211\u5148\u6765\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u7EE7\u627F\u7684\u6982\u5FF5\u3002\u7EE7\u627F\u662F\u9762\u5411\u5BF9\u8C61\u7684\uFF0C\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u6211\u4EEC\u53EF\u4EE5\u66F4\u597D\u5730\u590D\u7528\u4EE5\u524D\u7684\u5F00\u53D1\u4EE3\u7801\uFF0C\u7F29\u77ED\u5F00\u53D1\u7684\u5468\u671F\u3001\u63D0\u5347\u5F00\u53D1\u6548\u7387\u3002</p><p>\u7EE7\u627F\u5728\u5404\u79CD\u7F16\u7A0B\u8BED\u8A00\u4E2D\u90FD\u5145\u5F53\u7740\u81F3\u5173\u91CD\u8981\u7684\u89D2\u8272\uFF0C\u7279\u522B\u662F\u5728 JavaScript \u4E2D\uFF0C\u5B83\u5929\u751F\u7684\u7075\u6D3B\u6027\uFF0C\u4F7F\u5E94\u7528\u573A\u666F\u66F4\u52A0\u4E30\u5BCC\u3002JavaScript \u7684\u7EE7\u627F\u4E5F\u7ECF\u5E38\u4F1A\u5728\u7528\u5728\u524D\u7AEF\u5DE5\u7A0B\u57FA\u7840\u5E93\u7684\u5E95\u5C42\u642D\u5EFA\u4E0A\u9762\uFF0C\u5728\u6574\u4E2A JavaScript \u7684\u5B66\u4E60\u4E2D\u5C24\u4E3A\u91CD\u8981\u3002</p><p>\u56E0\u6B64\uFF0C\u6211\u5E0C\u671B\u8FD9\u4E00\u8BB2\uFF0C\u80FD\u8BA9\u4F60\u5BF9 JavaScript \u7684\u7EE7\u627F\u6709\u66F4\u6DF1\u4E00\u6B65\u7684\u7406\u89E3\uFF0C\u66F4\u52A0\u5F97\u5FC3\u5E94\u624B\u5730\u8FD0\u7528\u5728\u4E1A\u52A1\u4EE3\u7801\u4E2D\uFF0C\u5E76\u53EF\u4EE5\u8F7B\u677E\u638C\u63E1\u548C JavaScript \u7EE7\u627F\u76F8\u5173\u7684\u9762\u8BD5\u9898\u76EE\u3002</p><p>\u90A3\u4E48\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u4F60\u66F4\u597D\u5730\u7406\u89E3\u672C\u8BB2\u7684\u5185\u5BB9\uFF0C\u5728\u8BFE\u7A0B\u5F00\u59CB\u524D\u8BF7\u4F60\u5148\u601D\u8003\u51E0\u4E2A\u95EE\u9898\uFF1A</p><ol><li><p>JS \u7684\u7EE7\u627F\u5230\u5E95\u6709\u591A\u5C11\u79CD\u5B9E\u73B0\u65B9\u5F0F\u5462\uFF1F</p></li><li><p>ES6 \u7684 extends \u5173\u952E\u5B57\u662F\u7528\u54EA\u79CD\u7EE7\u627F\u65B9\u5F0F\u5B9E\u73B0\u7684\u5462\uFF1F</p></li></ol><p>\u662F\u4E0D\u662F\u8FD9\u51E0\u4E2A\u95EE\u9898\u5E76\u4E0D\u662F\u90A3\u4E48\u5BB9\u6613\u5730\u56DE\u7B54\u51FA\u6765\uFF1F\u90A3\u4E48\u6211\u4EEC\u5E26\u7740\u601D\u8003\uFF0C\u5F00\u59CB\u5B66\u4E60\u3002</p><h2 id="\u7EE7\u627F\u6982\u5FF5\u7684\u63A2\u7A76" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F\u6982\u5FF5\u7684\u63A2\u7A76" aria-hidden="true">#</a> \u7EE7\u627F\u6982\u5FF5\u7684\u63A2\u7A76</h2><p>\u8BF4\u5230\u7EE7\u627F\u7684\u6982\u5FF5\uFF0C\u9996\u5148\u8981\u8BF4\u4E00\u4E2A\u7ECF\u5178\u7684\u4F8B\u5B50\u3002</p><p>\u5148\u5B9A\u4E49\u4E00\u4E2A\u7C7B\uFF08Class\uFF09\u53EB\u6C7D\u8F66\uFF0C\u6C7D\u8F66\u7684\u5C5E\u6027\u5305\u62EC\u989C\u8272\u3001\u8F6E\u80CE\u3001\u54C1\u724C\u3001\u901F\u5EA6\u3001\u6392\u6C14\u91CF\u7B49\uFF0C\u7531\u6C7D\u8F66\u8FD9\u4E2A\u7C7B\u53EF\u4EE5\u6D3E\u751F\u51FA\u201C\u8F7F\u8F66\u201D\u548C\u201C\u8D27\u8F66\u201D\u4E24\u4E2A\u7C7B\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5728\u6C7D\u8F66\u7684\u57FA\u7840\u5C5E\u6027\u4E0A\uFF0C\u4E3A\u8F7F\u8F66\u6DFB\u52A0\u4E00\u4E2A\u540E\u5907\u53A2\u3001\u7ED9\u8D27\u8F66\u6DFB\u52A0\u4E00\u4E2A\u5927\u8D27\u7BB1\u3002\u8FD9\u6837\u8F7F\u8F66\u548C\u8D27\u8F66\u5C31\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u4F46\u662F\u4E8C\u8005\u90FD\u5C5E\u4E8E\u6C7D\u8F66\u8FD9\u4E2A\u7C7B\uFF0C\u8FD9\u6837\u4ECE\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u5C31\u80FD\u8BE6\u7EC6\u8BF4\u660E\u6C7D\u8F66\u3001\u8F7F\u8F66\u4EE5\u53CA\u5361\u8F66\u4E4B\u95F4\u7684\u7EE7\u627F\u5173\u7CFB\u3002</p><p>\u7EE7\u627F\u53EF\u4EE5\u4F7F\u5F97\u5B50\u7C7B\u522B\u5177\u6709\u7236\u7C7B\u7684\u5404\u79CD\u65B9\u6CD5\u548C\u5C5E\u6027\uFF0C\u6BD4\u5982\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\u201C\u8F7F\u8F66\u201D \u548C \u201C\u8D27\u8F66\u201D \u5206\u522B\u7EE7\u627F\u4E86\u6C7D\u8F66\u7684\u5C5E\u6027\uFF0C\u800C\u4E0D\u9700\u8981\u518D\u6B21\u5728\u201C\u8F7F\u8F66\u201D\u4E2D\u5B9A\u4E49\u6C7D\u8F66\u5DF2\u7ECF\u6709\u7684\u5C5E\u6027\u3002\u5728\u201C\u8F7F\u8F66\u201D\u7EE7\u627F\u201C\u6C7D\u8F66\u201D\u7684\u540C\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u91CD\u65B0\u5B9A\u4E49\u6C7D\u8F66\u7684\u67D0\u4E9B\u5C5E\u6027\uFF0C\u5E76\u91CD\u5199\u6216\u8986\u76D6\u67D0\u4E9B\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F7F\u5176\u83B7\u5F97\u4E0E\u201C\u6C7D\u8F66\u201D\u8FD9\u4E2A\u7236\u7C7B\u4E0D\u540C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><p>\u7EE7\u627F\u7684\u57FA\u672C\u6982\u5FF5\u5C31\u521D\u6B65\u4ECB\u7ECD\u8FD9\u4E9B\uFF0C\u4E0B\u9762\u6211\u4EEC\u5C31\u6765\u770B\u770B JavaScript \u4E2D\u90FD\u6709\u54EA\u4E9B\u5B9E\u73B0\u7EE7\u627F\u7684\u65B9\u6CD5\u3002</p><h2 id="js-\u5B9E\u73B0\u7EE7\u627F\u7684\u51E0\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#js-\u5B9E\u73B0\u7EE7\u627F\u7684\u51E0\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> JS \u5B9E\u73B0\u7EE7\u627F\u7684\u51E0\u79CD\u65B9\u5F0F</h2><h3 id="\u7B2C\u4E00\u79CD-\u539F\u578B\u94FE\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u79CD-\u539F\u578B\u94FE\u7EE7\u627F" aria-hidden="true">#</a> \u7B2C\u4E00\u79CD\uFF1A\u539F\u578B\u94FE\u7EE7\u627F</h3><p>\u539F\u578B\u94FE\u7EE7\u627F\u662F\u6BD4\u8F83\u5E38\u89C1\u7684\u7EE7\u627F\u65B9\u5F0F\u4E4B\u4E00\uFF0C\u5176\u4E2D\u6D89\u53CA\u7684\u6784\u9020\u51FD\u6570\u3001\u539F\u578B\u548C\u5B9E\u4F8B\uFF0C\u4E09\u8005\u4E4B\u95F4\u5B58\u5728\u7740\u4E00\u5B9A\u7684\u5173\u7CFB\uFF0C\u5373\u6BCF\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u90FD\u6709\u4E00\u4E2A\u539F\u578B\u5BF9\u8C61\uFF0C\u539F\u578B\u5BF9\u8C61\u53C8\u5305\u542B\u4E00\u4E2A\u6307\u5411\u6784\u9020\u51FD\u6570\u7684\u6307\u9488\uFF0C\u800C\u5B9E\u4F8B\u5219\u5305\u542B\u4E00\u4E2A\u539F\u578B\u5BF9\u8C61\u7684\u6307\u9488\u3002</p><p>\u4E0B\u9762\u6211\u4EEC\u7ED3\u5408\u4EE3\u7801\u6765\u4E86\u89E3\u4E00\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;parent1&quot;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>play <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Child1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&quot;child2&quot;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Child1</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Child1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u770B\u4F3C\u6CA1\u6709\u95EE\u9898\uFF0C\u867D\u7136\u7236\u7C7B\u7684\u65B9\u6CD5\u548C\u5C5E\u6027\u90FD\u80FD\u591F\u8BBF\u95EE\uFF0C\u4F46\u5176\u5B9E\u6709\u4E00\u4E2A\u6F5C\u5728\u7684\u95EE\u9898\uFF0C\u6211\u518D\u4E3E\u4E2A\u4F8B\u5B50\u6765\u8BF4\u660E\u8FD9\u4E2A\u95EE\u9898\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s1<span class="token punctuation">.</span>play<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>play<span class="token punctuation">,</span> s2<span class="token punctuation">.</span>play<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u5728\u63A7\u5236\u53F0\u6267\u884C\u4E4B\u540E\uFF0C\u8F93\u51FA\u4E24\u4E2A <code>[1,2,3,4]</code>\u3002</p><p>\u660E\u660E\u6211\u53EA\u6539\u53D8\u4E86 s1 \u7684 play \u5C5E\u6027\uFF0C\u4E3A\u4EC0\u4E48 s2 \u4E5F\u8DDF\u7740\u53D8\u4E86\u5462\uFF1F\u539F\u56E0\u5F88\u7B80\u5355\uFF0C\u56E0\u4E3A\u4E24\u4E2A\u5B9E\u4F8B\u4F7F\u7528\u7684\u662F\u540C\u4E00\u4E2A\u539F\u578B\u5BF9\u8C61\u3002\u5B83\u4EEC\u7684\u5185\u5B58\u7A7A\u95F4\u662F\u5171\u4EAB\u7684\uFF0C\u5F53\u4E00\u4E2A\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u53E6\u5916\u4E00\u4E2A\u4E5F\u968F\u4E4B\u8FDB\u884C\u4E86\u53D8\u5316\uFF0C\u8FD9\u5C31\u662F\u4F7F\u7528\u539F\u578B\u94FE\u7EE7\u627F\u65B9\u5F0F\u7684\u4E00\u4E2A\u7F3A\u70B9\u3002</p><p>\u90A3\u4E48\u8981\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\u8BDD\uFF0C\u6211\u4EEC\u5C31\u5F97\u518D\u770B\u770B\u5176\u4ED6\u7684\u7EE7\u627F\u65B9\u5F0F\uFF0C\u4E0B\u9762\u6211\u4EEC\u770B\u770B\u80FD\u89E3\u51B3\u539F\u578B\u5C5E\u6027\u5171\u4EAB\u95EE\u9898\u7684\u7B2C\u4E8C\u79CD\u65B9\u6CD5\u3002</p><h3 id="\u7B2C\u4E8C\u79CD-\u6784\u9020\u51FD\u6570\u7EE7\u627F-\u501F\u52A9-call" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u79CD-\u6784\u9020\u51FD\u6570\u7EE7\u627F-\u501F\u52A9-call" aria-hidden="true">#</a> \u7B2C\u4E8C\u79CD\uFF1A\u6784\u9020\u51FD\u6570\u7EE7\u627F\uFF08\u501F\u52A9 call\uFF09</h3><p>\u76F4\u63A5\u901A\u8FC7\u4EE3\u7801\u6765\u4E86\u89E3\uFF0C\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;parent1&quot;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent1</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Parent1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&quot;child1&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> child <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span> <span class="token comment">// \u6CA1\u95EE\u9898</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u4F1A\u62A5\u9519</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u6267\u884C\u4E0A\u9762\u7684\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u53EF\u4EE5\u5F97\u5230\u8FD9\u6837\u7684\u7ED3\u679C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Child1 <span class="token punctuation">{</span>name: <span class="token string">&#39;parent1&#39;</span>, type: <span class="token string">&#39;child1&#39;</span><span class="token punctuation">}</span>
  name: <span class="token string">&quot;parent1&quot;</span>
  type: <span class="token string">&quot;child1&quot;</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>Prototype<span class="token punctuation">]</span><span class="token punctuation">]</span>: Object
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\u6700\u540E\u6253\u5370\u7684 child \u5728\u63A7\u5236\u53F0\u663E\u793A\uFF0C\u9664\u4E86 Child1 \u7684\u5C5E\u6027 type \u4E4B\u5916\uFF0C\u4E5F\u7EE7\u627F\u4E86 Parent1 \u7684\u5C5E\u6027 name\u3002\u8FD9\u6837\u5199\u7684\u65F6\u5019\u5B50\u7C7B\u867D\u7136\u80FD\u591F\u62FF\u5230\u7236\u7C7B\u7684\u5C5E\u6027\u503C\uFF0C\u89E3\u51B3\u4E86\u7B2C\u4E00\u79CD\u7EE7\u627F\u65B9\u5F0F\u7684\u5F0A\u7AEF\uFF0C\u4F46\u95EE\u9898\u662F\uFF0C\u7236\u7C7B\u539F\u578B\u5BF9\u8C61\u4E2D\u4E00\u65E6\u5B58\u5728\u7236\u7C7B\u4E4B\u524D\u81EA\u5DF1\u5B9A\u4E49\u7684\u65B9\u6CD5\uFF0C\u90A3\u4E48\u5B50\u7C7B\u5C06\u65E0\u6CD5\u7EE7\u627F\u8FD9\u4E9B\u65B9\u6CD5\u3002\u8FD9\u79CD\u60C5\u51B5\u7684\u63A7\u5236\u53F0\u6267\u884C\u7ED3\u679C\u5982\u4E0B\u6240\u793A\u3002</p><div class="custom-container danger"><p class="custom-container-title">TypeError</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">VM1944</span><span class="token operator">:</span><span class="token number">31</span> Uncaught TypeError<span class="token operator">:</span> child<span class="token punctuation">.</span>getName is not a <span class="token keyword">function</span> at <span class="token operator">&lt;</span>anonymous<span class="token operator">&gt;</span><span class="token operator">:</span><span class="token number">31</span><span class="token operator">:</span><span class="token number">21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><p>\u56E0\u6B64\uFF0C\u4ECE\u4E0A\u9762\u7684\u7ED3\u679C\u5C31\u53EF\u4EE5\u770B\u5230\u6784\u9020\u51FD\u6570\u5B9E\u73B0\u7EE7\u627F\u7684\u4F18\u7F3A\u70B9\uFF0C\u5B83\u4F7F\u7236\u7C7B\u7684\u5F15\u7528\u5C5E\u6027\u4E0D\u4F1A\u88AB\u5171\u4EAB\uFF0C\u4F18\u5316\u4E86\u7B2C\u4E00\u79CD\u7EE7\u627F\u65B9\u5F0F\u7684\u5F0A\u7AEF\uFF1B\u4F46\u662F\u968F\u4E4B\u800C\u6765\u7684\u7F3A\u70B9\u4E5F\u6BD4\u8F83\u660E\u663E\u2014\u2014\u53EA\u80FD\u7EE7\u627F\u7236\u7C7B\u7684\u5B9E\u4F8B\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4E0D\u80FD\u7EE7\u627F\u539F\u578B\u5C5E\u6027\u6216\u8005\u65B9\u6CD5\u3002</p><p>\u4E0A\u9762\u7684\u4E24\u79CD\u7EE7\u627F\u65B9\u5F0F\u5404\u6709\u4F18\u7F3A\u70B9\uFF0C\u90A3\u4E48\u7ED3\u5408\u4E8C\u8005\u7684\u4F18\u70B9\uFF0C\u4E8E\u662F\u5C31\u4EA7\u751F\u4E86\u4E0B\u9762\u8FD9\u79CD\u7EC4\u5408\u7684\u7EE7\u627F\u65B9\u5F0F\u3002</p><h3 id="\u7B2C\u4E09\u79CD-\u7EC4\u5408\u7EE7\u627F-\u524D\u4E24\u79CD\u7EC4\u5408" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u79CD-\u7EC4\u5408\u7EE7\u627F-\u524D\u4E24\u79CD\u7EC4\u5408" aria-hidden="true">#</a> \u7B2C\u4E09\u79CD\uFF1A\u7EC4\u5408\u7EE7\u627F\uFF08\u524D\u4E24\u79CD\u7EC4\u5408\uFF09</h3><p>\u8FD9\u79CD\u65B9\u5F0F\u7ED3\u5408\u4E86\u524D\u4E24\u79CD\u7EE7\u627F\u65B9\u5F0F\u7684\u4F18\u7F3A\u70B9\uFF0C\u7ED3\u5408\u8D77\u6765\u7684\u7EE7\u627F\uFF0C\u4EE3\u7801\u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;parent3&quot;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>play <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent3</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Child3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7B2C\u4E8C\u6B21\u8C03\u7528 Parent3()</span>
  <span class="token function">Parent3</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&quot;child3&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7B2C\u4E00\u6B21\u8C03\u7528 Parent3()</span>
<span class="token class-name">Child3</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u624B\u52A8\u6302\u4E0A\u6784\u9020\u5668\uFF0C\u6307\u5411\u81EA\u5DF1\u7684\u6784\u9020\u51FD\u6570</span>
<span class="token class-name">Child3</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Child3
<span class="token keyword">var</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> s4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s3<span class="token punctuation">.</span>play<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s3<span class="token punctuation">.</span>play<span class="token punctuation">,</span> s4<span class="token punctuation">.</span>play<span class="token punctuation">)</span> <span class="token comment">// \u4E0D\u4E92\u76F8\u5F71\u54CD</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s3<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u6B63\u5E38\u8F93\u51FA&#39;parent3&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s4<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u6B63\u5E38\u8F93\u51FA&#39;parent3&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u6267\u884C\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u53EF\u4EE5\u770B\u5230\u63A7\u5236\u53F0\u7684\u8F93\u51FA\u7ED3\u679C\uFF0C\u4E4B\u524D\u65B9\u6CD5\u4E00\u548C\u65B9\u6CD5\u4E8C\u7684\u95EE\u9898\u90FD\u5F97\u4EE5\u89E3\u51B3\u3002</p><p>\u4F46\u662F\u8FD9\u91CC\u53C8\u589E\u52A0\u4E86\u4E00\u4E2A\u65B0\u95EE\u9898\uFF1A\u901A\u8FC7\u6CE8\u91CA\u6211\u4EEC\u53EF\u4EE5\u770B\u5230 Parent3 \u6267\u884C\u4E86\u4E24\u6B21\uFF0C\u7B2C\u4E00\u6B21\u662F\u6539\u53D8 Child3 \u7684 prototype \u7684\u65F6\u5019\uFF0C\u7B2C\u4E8C\u6B21\u662F\u901A\u8FC7 call \u65B9\u6CD5\u8C03\u7528 Parent3 \u7684\u65F6\u5019\uFF0C\u90A3\u4E48 Parent3 \u591A\u6784\u9020\u4E00\u6B21\u5C31\u591A\u8FDB\u884C\u4E86\u4E00\u6B21\u6027\u80FD\u5F00\u9500\uFF0C\u8FD9\u662F\u6211\u4EEC\u4E0D\u613F\u770B\u5230\u7684\u3002</p><p>\u90A3\u4E48\u662F\u5426\u6709\u66F4\u597D\u7684\u529E\u6CD5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5462\uFF1F\u8BF7\u4F60\u518D\u5F80\u4E0B\u5B66\u4E60\uFF0C\u4E0B\u9762\u7684\u7B2C\u516D\u79CD\u7EE7\u627F\u65B9\u5F0F\u53EF\u4EE5\u66F4\u597D\u5730\u89E3\u51B3\u8FD9\u91CC\u7684\u95EE\u9898\u3002</p><p>\u4E0A\u9762\u4ECB\u7ECD\u7684\u66F4\u591A\u662F\u56F4\u7ED5\u7740\u6784\u9020\u51FD\u6570\u7684\u65B9\u5F0F\uFF0C\u90A3\u4E48\u5BF9\u4E8E JavaScript \u7684\u666E\u901A\u5BF9\u8C61\uFF0C\u600E\u4E48\u5B9E\u73B0\u7EE7\u627F\u5462\uFF1F</p><h3 id="\u7B2C\u56DB\u79CD-\u539F\u578B\u5F0F\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u56DB\u79CD-\u539F\u578B\u5F0F\u7EE7\u627F" aria-hidden="true">#</a> \u7B2C\u56DB\u79CD\uFF1A\u539F\u578B\u5F0F\u7EE7\u627F</h3><p>\u8FD9\u91CC\u4E0D\u5F97\u4E0D\u63D0\u5230\u7684\u5C31\u662F ES5 \u91CC\u9762\u7684 Object.create \u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF1A\u4E00\u662F\u7528\u4F5C\u65B0\u5BF9\u8C61\u539F\u578B\u7684\u5BF9\u8C61\u3001\u4E8C\u662F\u4E3A\u65B0\u5BF9\u8C61\u5B9A\u4E49\u989D\u5916\u5C5E\u6027\u7684\u5BF9\u8C61\uFF08\u53EF\u9009\u53C2\u6570\uFF09\u3002</p><p>\u6211\u4EEC\u901A\u8FC7\u4E00\u6BB5\u4EE3\u7801\uFF0C\u770B\u770B\u666E\u901A\u5BF9\u8C61\u662F\u600E\u4E48\u5B9E\u73B0\u7684\u7EE7\u627F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> parent4 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;parent4&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">friends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;p1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;p2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;p3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person4 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>parent4<span class="token punctuation">)</span>
person4<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;tom&quot;</span>
person4<span class="token punctuation">.</span>friends<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;jerry&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> person5 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>parent4<span class="token punctuation">)</span>
person5<span class="token punctuation">.</span>friends<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;lucy&quot;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person4<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person4<span class="token punctuation">.</span>name <span class="token operator">===</span> person4<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person5<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person4<span class="token punctuation">.</span>friends<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person5<span class="token punctuation">.</span>friends<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u901A\u8FC7 Object.create \u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u666E\u901A\u5BF9\u8C61\u7684\u7EE7\u627F\uFF0C\u4E0D\u4EC5\u4EC5\u80FD\u7EE7\u627F\u5C5E\u6027\uFF0C\u540C\u6837\u4E5F\u53EF\u4EE5\u7EE7\u627F getName \u7684\u65B9\u6CD5\uFF0C\u8BF7\u770B\u8FD9\u6BB5\u4EE3\u7801\u7684\u6267\u884C\u7ED3\u679C\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/zhang13pro/blogImg/img/20220327180856.png" alt="\u539F\u578B\u5F0F\u7EE7\u627F"></p><p>\u7B2C\u4E00\u4E2A\u7ED3\u679C\u201Ctom\u201D\uFF0C\u6BD4\u8F83\u5BB9\u6613\u7406\u89E3\uFF0Cperson4 \u7EE7\u627F\u4E86 parent4 \u7684 name \u5C5E\u6027\uFF0C\u4F46\u662F\u5728\u8FD9\u4E2A\u57FA\u7840\u4E0A\u53C8\u8FDB\u884C\u4E86\u81EA\u5B9A\u4E49\u3002</p><p>\u7B2C\u4E8C\u4E2A\u662F\u7EE7\u627F\u8FC7\u6765\u7684 getName \u65B9\u6CD5\u68C0\u67E5\u81EA\u5DF1\u7684 name \u662F\u5426\u548C\u5C5E\u6027\u91CC\u9762\u7684\u503C\u4E00\u6837\uFF0C\u7B54\u6848\u662F true\u3002</p><p>\u7B2C\u4E09\u4E2A\u7ED3\u679C\u201Cparent4\u201D\u4E5F\u6BD4\u8F83\u5BB9\u6613\u7406\u89E3\uFF0Cperson5 \u7EE7\u627F\u4E86 parent4 \u7684 name \u5C5E\u6027\uFF0C\u6CA1\u6709\u8FDB\u884C\u8986\u76D6\uFF0C\u56E0\u6B64\u8F93\u51FA\u7236\u5BF9\u8C61\u7684\u5C5E\u6027\u3002</p><p>\u6700\u540E\u4E24\u4E2A\u8F93\u51FA\u7ED3\u679C\u662F\u4E00\u6837\u7684\uFF0C\u8BB2\u5230\u8FD9\u91CC\u4F60\u5E94\u8BE5\u53EF\u4EE5\u8054\u60F3\u5230 02 \u8BB2\u4E2D\u6D45\u62F7\u8D1D\u7684\u77E5\u8BC6\u70B9\uFF0C\u5173\u4E8E\u5F15\u7528\u6570\u636E\u7C7B\u578B\u201C\u5171\u4EAB\u201D\u7684\u95EE\u9898\uFF0C\u5176\u5B9E Object.create \u65B9\u6CD5\u662F\u53EF\u4EE5\u4E3A\u4E00\u4E9B\u5BF9\u8C61\u5B9E\u73B0\u6D45\u62F7\u8D1D\u7684\u3002</p><p>\u90A3\u4E48\u5173\u4E8E\u8FD9\u79CD\u7EE7\u627F\u65B9\u5F0F\u7684\u7F3A\u70B9\u4E5F\u5F88\u660E\u663E\uFF0C\u591A\u4E2A\u5B9E\u4F8B\u7684\u5F15\u7528\u7C7B\u578B\u5C5E\u6027\u6307\u5411\u76F8\u540C\u7684\u5185\u5B58\uFF0C\u5B58\u5728\u7BE1\u6539\u7684\u53EF\u80FD\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u770B\u4E00\u4E0B\u5728\u8FD9\u4E2A\u7EE7\u627F\u57FA\u7840\u4E0A\u8FDB\u884C\u4F18\u5316\u4E4B\u540E\u7684\u53E6\u4E00\u79CD\u7EE7\u627F\u65B9\u5F0F\u2014\u2014\u5BC4\u751F\u5F0F\u7EE7\u627F\u3002</p><h3 id="\u7B2C\u4E94\u79CD-\u5BC4\u751F\u5F0F\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E94\u79CD-\u5BC4\u751F\u5F0F\u7EE7\u627F" aria-hidden="true">#</a> \u7B2C\u4E94\u79CD\uFF1A\u5BC4\u751F\u5F0F\u7EE7\u627F</h3><p>\u4F7F\u7528\u539F\u578B\u5F0F\u7EE7\u627F\u53EF\u4EE5\u83B7\u5F97\u4E00\u4EFD\u76EE\u6807\u5BF9\u8C61\u7684\u6D45\u62F7\u8D1D\uFF0C\u7136\u540E\u5229\u7528\u8FD9\u4E2A\u6D45\u62F7\u8D1D\u7684\u80FD\u529B\u518D\u8FDB\u884C\u589E\u5F3A\uFF0C\u6DFB\u52A0\u4E00\u4E9B\u65B9\u6CD5\uFF0C\u8FD9\u6837\u7684\u7EE7\u627F\u65B9\u5F0F\u5C31\u53EB\u4F5C\u5BC4\u751F\u5F0F\u7EE7\u627F\u3002</p><p>\u867D\u7136\u5176\u4F18\u7F3A\u70B9\u548C\u539F\u578B\u5F0F\u7EE7\u627F\u4E00\u6837\uFF0C\u4F46\u662F\u5BF9\u4E8E\u666E\u901A\u5BF9\u8C61\u7684\u7EE7\u627F\u65B9\u5F0F\u6765\u8BF4\uFF0C\u5BC4\u751F\u5F0F\u7EE7\u627F\u76F8\u6BD4\u4E8E\u539F\u578B\u5F0F\u7EE7\u627F\uFF0C\u8FD8\u662F\u5728\u7236\u7C7B\u57FA\u7840\u4E0A\u6DFB\u52A0\u4E86\u66F4\u591A\u7684\u65B9\u6CD5\u3002\u90A3\u4E48\u6211\u4EEC\u770B\u4E00\u4E0B\u4EE3\u7801\u662F\u600E\u4E48\u5B9E\u73B0\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> parent5 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;parent5&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">friends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;p1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;p2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;p3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token parameter">original</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> clone <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span>
  clone<span class="token punctuation">.</span><span class="token function-variable function">getFriends</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>friends
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> clone
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person5 <span class="token operator">=</span> <span class="token function">clone</span><span class="token punctuation">(</span>parent5<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person5<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person5<span class="token punctuation">.</span><span class="token function">getFriends</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u901A\u8FC7\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230 person5 \u662F\u901A\u8FC7\u5BC4\u751F\u5F0F\u7EE7\u627F\u751F\u6210\u7684\u5B9E\u4F8B\uFF0C\u5B83\u4E0D\u4EC5\u4EC5\u6709 getName \u7684\u65B9\u6CD5\uFF0C\u800C\u4E14\u53EF\u4EE5\u770B\u5230\u5B83\u6700\u540E\u4E5F\u62E5\u6709\u4E86 getFriends \u7684\u65B9\u6CD5\u3002</p><p>\u4ECE\u6700\u540E\u7684\u8F93\u51FA\u7ED3\u679C\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0Cperson5 \u901A\u8FC7 clone \u7684\u65B9\u6CD5\uFF0C\u589E\u52A0\u4E86 getFriends \u7684\u65B9\u6CD5\uFF0C\u4ECE\u800C\u4F7F person5 \u8FD9\u4E2A\u666E\u901A\u5BF9\u8C61\u5728\u7EE7\u627F\u8FC7\u7A0B\u4E2D\u53C8\u589E\u52A0\u4E86\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u8FD9\u6837\u7684\u7EE7\u627F\u65B9\u5F0F\u5C31\u662F\u5BC4\u751F\u5F0F\u7EE7\u627F\u3002</p><p>\u6211\u5728\u4E0A\u9762\u7B2C\u4E09\u79CD\u7EC4\u5408\u7EE7\u627F\u65B9\u5F0F\u4E2D\u63D0\u5230\u4E86\u4E00\u4E9B\u5F0A\u7AEF\uFF0C\u5373\u4E24\u6B21\u8C03\u7528\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\u9020\u6210\u6D6A\u8D39\uFF0C\u4E0B\u9762\u8981\u4ECB\u7ECD\u7684\u5BC4\u751F\u7EC4\u5408\u7EE7\u627F\u5C31\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p><h3 id="\u7B2C\u516D\u79CD-\u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u516D\u79CD-\u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F" aria-hidden="true">#</a> \u7B2C\u516D\u79CD\uFF1A\u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F</h3><p>\u7ED3\u5408\u7B2C\u56DB\u79CD\u4E2D\u63D0\u53CA\u7684\u7EE7\u627F\u65B9\u5F0F\uFF0C\u89E3\u51B3\u666E\u901A\u5BF9\u8C61\u7684\u7EE7\u627F\u95EE\u9898\u7684 Object.create \u65B9\u6CD5\uFF0C\u6211\u4EEC\u5728\u524D\u9762\u8FD9\u51E0\u79CD\u7EE7\u627F\u65B9\u5F0F\u7684\u4F18\u7F3A\u70B9\u57FA\u7840\u4E0A\u8FDB\u884C\u6539\u9020\uFF0C\u5F97\u51FA\u4E86\u5BC4\u751F\u7EC4\u5408\u5F0F\u7684\u7EE7\u627F\u65B9\u5F0F\uFF0C\u8FD9\u4E5F\u662F\u6240\u6709\u7EE7\u627F\u65B9\u5F0F\u91CC\u9762\u76F8\u5BF9\u6700\u4F18\u7684\u7EE7\u627F\u65B9\u5F0F\uFF0C\u4EE3\u7801\u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token parameter">parent<span class="token punctuation">,</span> child</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD9\u91CC\u6539\u7528 Object.create \u5C31\u53EF\u4EE5\u51CF\u5C11\u7EC4\u5408\u7EE7\u627F\u4E2D\u591A\u8FDB\u884C\u4E00\u6B21\u6784\u9020\u7684\u8FC7\u7A0B</span>
  child<span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>parent<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
  child<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> child
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Parent6</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;parent6&quot;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>play <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token class-name">Parent6</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Child6</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Parent6</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>friends <span class="token operator">=</span> <span class="token string">&quot;child5&quot;</span>
<span class="token punctuation">}</span>

<span class="token function">clone</span><span class="token punctuation">(</span>Parent6<span class="token punctuation">,</span> Child6<span class="token punctuation">)</span>

<span class="token class-name">Child6</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getFriends</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>friends
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child6</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person6<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person6<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person6<span class="token punctuation">.</span><span class="token function">getFriends</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u901A\u8FC7\u8FD9\u6BB5\u4EE3\u7801\u53EF\u4EE5\u770B\u51FA\u6765\uFF0C\u8FD9\u79CD\u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F\u65B9\u5F0F\uFF0C\u57FA\u672C\u53EF\u4EE5\u89E3\u51B3\u524D\u51E0\u79CD\u7EE7\u627F\u65B9\u5F0F\u7684\u7F3A\u70B9\uFF0C\u8F83\u597D\u5730\u5B9E\u73B0\u4E86\u7EE7\u627F\u60F3\u8981\u7684\u7ED3\u679C\uFF0C\u540C\u65F6\u4E5F\u51CF\u5C11\u4E86\u6784\u9020\u6B21\u6570\uFF0C\u51CF\u5C11\u4E86\u6027\u80FD\u7684\u5F00\u9500\uFF0C\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u4E0A\u9762\u8FD9\u4E00\u6BB5\u4EE3\u7801\u7684\u6267\u884C\u7ED3\u679C\u3002</p><p>\u53EF\u4EE5\u770B\u5230 person6 \u6253\u5370\u51FA\u6765\u7684\u7ED3\u679C\uFF0C\u5C5E\u6027\u90FD\u5F97\u5230\u4E86\u7EE7\u627F\uFF0C\u65B9\u6CD5\u4E5F\u6CA1\u95EE\u9898\uFF0C\u53EF\u4EE5\u8F93\u51FA\u9884\u671F\u7684\u7ED3\u679C\u3002</p><p>\u6574\u4F53\u770B\u4E0B\u6765\uFF0C\u8FD9\u516D\u79CD\u7EE7\u627F\u65B9\u5F0F\u4E2D\uFF0C\u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F\u662F\u8FD9\u516D\u79CD\u91CC\u9762\u6700\u4F18\u7684\u7EE7\u627F\u65B9\u5F0F\u3002\u53E6\u5916\uFF0CES6 \u8FD8\u63D0\u4F9B\u4E86\u7EE7\u627F\u7684\u5173\u952E\u5B57 extends\uFF0C\u6211\u4EEC\u518D\u770B\u4E0B extends \u7684\u5E95\u5C42\u5B9E\u73B0\u7EE7\u627F\u7684\u903B\u8F91\u3002</p><h3 id="es6-\u7684-extends-\u5173\u952E\u5B57\u5B9E\u73B0\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#es6-\u7684-extends-\u5173\u952E\u5B57\u5B9E\u73B0\u903B\u8F91" aria-hidden="true">#</a> ES6 \u7684 extends \u5173\u952E\u5B57\u5B9E\u73B0\u903B\u8F91</h3><p>\u6211\u4EEC\u53EF\u4EE5\u5229\u7528 ES6 \u91CC\u7684 extends \u7684\u8BED\u6CD5\u7CD6\uFF0C\u4F7F\u7528\u5173\u952E\u8BCD\u5F88\u5BB9\u6613\u76F4\u63A5\u5B9E\u73B0 JavaScript \u7684\u7EE7\u627F\uFF0C\u4F46\u662F\u5982\u679C\u60F3\u6DF1\u5165\u4E86\u89E3 extends \u8BED\u6CD5\u7CD6\u662F\u600E\u4E48\u5B9E\u73B0\u7684\uFF0C\u5C31\u5F97\u6DF1\u5165\u7814\u7A76 extends \u7684\u5E95\u5C42\u903B\u8F91\u3002</p><p>\u6211\u4EEC\u5148\u770B\u4E0B\u7528\u5229\u7528 extends \u5982\u4F55\u76F4\u63A5\u5B9E\u73B0\u7EE7\u627F\uFF0C\u4EE3\u7801\u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  <span class="token comment">// \u539F\u578B\u65B9\u6CD5</span>
  <span class="token comment">// \u5373 Person.prototype.getName = function() { }</span>
  <span class="token comment">// \u4E0B\u9762\u53EF\u4EE5\u7B80\u5199\u4E3A getName() {...}</span>
  <span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Person:&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Gamer</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B50\u7C7B\u4E2D\u5B58\u5728\u6784\u9020\u51FD\u6570\uFF0C\u5219\u9700\u8981\u5728\u4F7F\u7528\u201Cthis\u201D\u4E4B\u524D\u9996\u5148\u8C03\u7528 super()\u3002</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> asuna <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Gamer</span><span class="token punctuation">(</span><span class="token string">&quot;Asuna&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
asuna<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u6210\u529F\u8BBF\u95EE\u5230\u7236\u7C7B\u7684\u65B9\u6CD5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u56E0\u4E3A\u6D4F\u89C8\u5668\u7684\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u5982\u679C\u9047\u5230\u4E0D\u652F\u6301 ES6 \u7684\u6D4F\u89C8\u5668\uFF0C\u90A3\u4E48\u5C31\u5F97\u5229\u7528 babel \u8FD9\u4E2A\u7F16\u8BD1\u5DE5\u5177\uFF0C\u5C06 ES6 \u7684\u4EE3\u7801\u7F16\u8BD1\u6210 ES5\uFF0C\u8BA9\u4E00\u4E9B\u4E0D\u652F\u6301\u65B0\u8BED\u6CD5\u7684\u6D4F\u89C8\u5668\u4E5F\u80FD\u8FD0\u884C\u3002</p><p>\u90A3\u4E48\u6700\u540E extends \u7F16\u8BD1\u6210\u4E86\u4EC0\u4E48\u6837\u5B50\u5462\uFF1F\u6211\u4EEC\u770B\u4E00\u4E0B\u8F6C\u8BD1\u4E4B\u540E\u7684\u4EE3\u7801\u7247\u6BB5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">__possibleConstructorReturn</span> <span class="token punctuation">(</span><span class="token parameter">self<span class="token punctuation">,</span> call</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">return</span> call <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> call <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> call <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token operator">?</span> call <span class="token operator">:</span> self<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">__inherits</span> <span class="token punctuation">(</span><span class="token parameter">subClass<span class="token punctuation">,</span> superClass</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD9\u91CC\u53EF\u4EE5\u770B\u5230</span>
  subClass<span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>superClass <span class="token operator">&amp;&amp;</span> superClass<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">constructor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> subClass<span class="token punctuation">,</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>superClass<span class="token punctuation">)</span> Object<span class="token punctuation">.</span>setPrototypeOf <span class="token operator">?</span> Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>subClass<span class="token punctuation">,</span> superClass<span class="token punctuation">)</span> <span class="token operator">:</span> subClass<span class="token punctuation">.</span><span class="token operator">**</span>proto<span class="token operator">**</span> <span class="token operator">=</span> superClass<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">Parent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">Parent</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9A8C\u8BC1\u662F\u5426\u662F Parent \u6784\u9020\u51FA\u6765\u7684 this</span>
  <span class="token function">__classCallCheck</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> Parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> Child <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">__Parent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">__inherits</span><span class="token punctuation">(</span>Child<span class="token punctuation">,</span> __Parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">Child</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">__classCallCheck</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> Child<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">__possibleConstructorReturn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>Child<span class="token punctuation">.</span><span class="token operator">**</span>proto<span class="token operator">**</span> <span class="token operator">||</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>Child<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
  <span class="token keyword">return</span> Child<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span>Parent<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u4ECE\u4E0A\u9762\u7F16\u8BD1\u5B8C\u6210\u7684\u6E90\u7801\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u5B83\u91C7\u7528\u7684\u4E5F\u662F\u5BC4\u751F\u7EC4\u5408\u7EE7\u627F\u65B9\u5F0F\uFF0C\u56E0\u6B64\u4E5F\u8BC1\u660E\u4E86\u8FD9\u79CD\u65B9\u5F0F\u662F\u8F83\u4F18\u7684\u89E3\u51B3\u7EE7\u627F\u7684\u65B9\u5F0F\u3002</p><p>\u5230\u8FD9\u91CC\uFF0CJavaScript \u4E2D\u5B9E\u73B0\u7EE7\u627F\u7684\u65B9\u5F0F\u4E5F\u57FA\u672C\u8BB2\u89E3\u5DEE\u4E0D\u591A\u4E86\uFF0C\u672C\u8BFE\u65F6\u4E5F\u5C06\u544A\u4E00\u6BB5\u843D\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u4E0B\u9762\u6211\u5C06 JavaScript \u7684\u7EE7\u627F\u65B9\u5F0F\u505A\u4E86\u4E2A\u603B\u7ED3\u7684\u8111\u56FE\uFF0C\u65B9\u4FBF\u4F60\u66F4\u6E05\u6670\u5730\u56DE\u987E\u672C\u8BFE\u65F6\u6240\u8BB2\u7684\u5185\u5BB9\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/zhang13pro/blogImg/img/20220327181543.png" alt="\u77E5\u8BC6\u70B9"></p><p>\u901A\u8FC7 Object.create \u6765\u5212\u5206\u4E0D\u540C\u7684\u7EE7\u627F\u65B9\u5F0F\uFF0C\u6700\u540E\u7684\u5BC4\u751F\u5F0F\u7EC4\u5408\u7EE7\u627F\u65B9\u5F0F\u662F\u901A\u8FC7\u7EC4\u5408\u7EE7\u627F\u6539\u9020\u4E4B\u540E\u7684\u6700\u4F18\u7EE7\u627F\u65B9\u5F0F\uFF0C\u800C extends \u7684\u8BED\u6CD5\u7CD6\u548C\u5BC4\u751F\u7EC4\u5408\u7EE7\u627F\u7684\u65B9\u5F0F\u57FA\u672C\u7C7B\u4F3C\u3002</p><p>\u7EFC\u4E0A\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u4E0D\u540C\u7684\u7EE7\u627F\u65B9\u5F0F\u6709\u4E0D\u540C\u7684\u4F18\u7F3A\u70B9\uFF0C\u6211\u4EEC\u9700\u8981\u6DF1\u5165\u4E86\u89E3\u5404\u79CD\u65B9\u5F0F\u7684\u4F18\u7F3A\u70B9\uFF0C\u8FD9\u6837\u624D\u80FD\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\uFF0C\u9009\u62E9\u6700\u9002\u5408\u5F53\u524D\u573A\u666F\u7684\u7EE7\u627F\u65B9\u5F0F\u3002</p><p>\u5728\u65E5\u5E38\u7684\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u4E2D\uFF0C\u5F00\u53D1\u8005\u5F80\u5F80\u4F1A\u5FFD\u89C6\u5BF9\u7EE7\u627F\u76F8\u5173\u7684\u7CFB\u7EDF\u6027\u5B66\u4E60\uFF0C\u4F46\u56E0\u4E3A\u7EE7\u627F\u7684\u65B9\u6CD5\u6BD4\u8F83\u591A\uFF0C\u6BCF\u4E2A\u5B9E\u73B0\u7684\u65B9\u6CD5\u7EC6\u8282\u4E5F\u6BD4\u8F83\u96F6\u6563\uFF0C\u5F88\u591A\u5F00\u53D1\u8005\u5F88\u96BE\u6709\u4E00\u4E2A\u7CFB\u7EDF\u7684\u3001\u6574\u4F53\u7684\u8BA4\u8BC6\uFF0C\u9020\u6210\u6548\u7387\u4F4E\u4E0B\uFF0C\u4EE5\u53CA\u4EE3\u7801\u80FD\u529B\u96BE\u4EE5\u8FDB\u4E00\u6B65\u63D0\u5347\u7B49\u95EE\u9898\u3002</p><p>\u56E0\u6B64\u6211\u5E0C\u671B\u901A\u8FC7\u8FD9\u4E00\u8BB2\u7684\u5B66\u4E60\uFF0C\u4F60\u80FD\u5F88\u597D\u5730\u638C\u63E1 JavaScript \u7684\u7EE7\u627F\u65B9\u5F0F\uFF0C\u4EE5\u4FBF\u5728\u5F00\u53D1\u4E2D\u89C4\u907F\u6211\u6240\u8BF4\u7684\u8FD9\u4E9B\u95EE\u9898\u3002</p><p>\u5728\u540E\u7EED\u7684\u8BFE\u65F6\u4E2D\uFF0C\u6211\u5C06\u7EE7\u7EED\u5E26\u9886\u4F60\u5C1D\u8BD5\u4E00\u4E9B\u548C\u7EE7\u627F\u76F8\u5173\u7684 API \u65B9\u6CD5\u7684\u5B9E\u73B0\uFF0C\u6BD4\u5982 call\u3001apply \u7B49\u3002\u540C\u65F6\u5E0C\u671B\u4F60\u591A\u52A8\u624B\u7EC3\u4E60\u4EE5\u719F\u7EC3\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u4E5F\u6B22\u8FCE\u4F60\u5728\u4E0B\u65B9\u7559\u8A00\u8BA8\u8BBA\u81EA\u5DF1\u5728\u5B66\u4E60\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u56F0\u60D1\uFF0C\u4EE5\u53CA\u5B66\u4E60\u611F\u609F\u7B49\uFF0C\u8BA9\u6211\u4EEC\u5171\u540C\u8FDB\u6B65\u3002</p><p>\u6211\u4EEC\u4E0B\u4E00\u8BB2\u518D\u89C1~</p><!--]-->`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/3.html.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var _3_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$a]]);
var _3_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _3_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="_04-\u7EE7\u627F\u8FDB\u9636-\u5982\u4F55\u5B9E\u73B0-new\u3001apply\u3001call\u3001bind-\u7684\u5E95\u5C42\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#_04-\u7EE7\u627F\u8FDB\u9636-\u5982\u4F55\u5B9E\u73B0-new\u3001apply\u3001call\u3001bind-\u7684\u5E95\u5C42\u903B\u8F91" aria-hidden="true">#</a> 04 | \u7EE7\u627F\u8FDB\u9636\uFF1A\u5982\u4F55\u5B9E\u73B0 new\u3001apply\u3001call\u3001bind \u7684\u5E95\u5C42\u903B\u8F91\uFF1F</h1><p>\u6211\u5728\u4E0A\u4E00\u8BB2\u4ECB\u7ECD\u4E86\u7EE7\u627F\u7684\u6982\u5FF5\uFF0C\u540C\u65F6\u4F60\u4E5F\u53EF\u4EE5\u770B\u5230\uFF0C\u5176\u4E2D\u7EFC\u5408\u4F7F\u7528\u4E86 new\u3001apply \u4EE5\u53CA call \u7684\u65B9\u6CD5\uFF0C\u90A3\u4E48\u8FD9\u4E00\u8BB2\u6211\u4EEC\u5C31\u56F4\u7ED5\u8FD9\u51E0\u4E2A\u65B9\u6CD5\u8FDB\u884C\u66F4\u6DF1\u5165\u7684\u8BB2\u89E3\uFF0C\u4EE5\u4FBF\u4E8E\u4F60\u6E05\u695A\u8FD9\u51E0\u4E2A\u6838\u5FC3\u65B9\u6CD5\u7684\u5B9E\u73B0\u601D\u8DEF\uFF0C\u66F4\u597D\u5730\u53BB\u7406\u89E3\u7EE7\u627F\u7684\u539F\u7406\u3002</p><p>JavaScript \u4E2D\u7684 apply\u3001call \u548C bind \u65B9\u6CD5\u662F\u524D\u7AEF\u4EE3\u7801\u5F00\u53D1\u4E2D\u76F8\u5F53\u91CD\u8981\u7684\u6982\u5FF5\uFF0C\u5E76\u4E14\u4E0E this \u7684\u6307\u5411\u5BC6\u5207\u76F8\u5173\u3002\u5F88\u591A\u4EBA\u5BF9\u5B83\u4EEC\u7684\u7406\u89E3\u8FD8\u6BD4\u8F83\u6D45\u663E\uFF0C\u5982\u679C\u4F60\u60F3\u62E5\u6709\u624E\u5B9E\u7684 JavaScript \u7F16\u7A0B\u57FA\u7840\uFF0C\u90A3\u4E48\u5FC5\u987B\u8981\u4E86\u89E3\u8FD9\u4E9B\u57FA\u7840\u5E38\u7528\u7684\u65B9\u6CD5\u3002\u5E0C\u671B\u901A\u8FC7\u8FD9\u4E00\u8BB2\u7684\u5B66\u4E60\uFF0C\u4F60\u53EF\u4EE5\u5F7B\u5E95\u638C\u63E1\u5B83\u4EEC\u3002</p><p>\u4E3A\u4E86\u65B9\u4FBF\u4F60\u66F4\u597D\u5730\u7406\u89E3\u672C\u8BB2\u7684\u5185\u5BB9\uFF0C\u5728\u8BFE\u7A0B\u5F00\u59CB\u524D\u8BF7\u4F60\u5148\u601D\u8003\u51E0\u4E2A\u95EE\u9898\uFF1A</p><p>\u7528\u4EC0\u4E48\u6837\u7684\u601D\u8DEF\u53EF\u4EE5 new \u5173\u952E\u8BCD\uFF1F</p><p>apply\u3001call\u3001bind \u8FD9\u4E09\u4E2A\u65B9\u6CD5\u4E4B\u95F4\u6709\u4EC0\u4E48\u533A\u522B?</p><p>\u600E\u6837\u5B9E\u73B0\u4E00\u4E2A apply \u6216\u8005 call \u7684\u65B9\u6CD5\uFF1F</p><p>\u5E26\u7740\u8FD9\u51E0\u4E2A\u601D\u8003\uFF0C\u6211\u4EEC\u5F00\u59CB\u672C\u8BFE\u65F6\u7684\u5B66\u4E60\u5427\u3002</p><h2 id="\u65B9\u6CD5\u7684\u57FA\u672C\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u7684\u57FA\u672C\u4ECB\u7ECD" aria-hidden="true">#</a> \u65B9\u6CD5\u7684\u57FA\u672C\u4ECB\u7ECD</h2><p>new \u539F\u7406\u4ECB\u7ECD new \u5173\u952E\u8BCD\u7684\u4E3B\u8981\u4F5C\u7528\u5C31\u662F\u6267\u884C\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u3001\u8FD4\u56DE\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u5728 new \u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6839\u636E\u6784\u9020\u51FD\u6570\u7684\u60C5\u51B5\uFF0C\u6765\u786E\u5B9A\u662F\u5426\u53EF\u4EE5\u63A5\u53D7\u53C2\u6570\u7684\u4F20\u9012\u3002\u4E0B\u9762\u6211\u4EEC\u901A\u8FC7\u4E00\u6BB5\u4EE3\u7801\u6765\u770B\u4E00\u4E2A\u7B80\u5355\u7684 new \u7684\u4F8B\u5B50\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Jack&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// Jack</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u6BD4\u8F83\u5BB9\u6613\u7406\u89E3\uFF0C\u4ECE\u8F93\u51FA\u7ED3\u679C\u53EF\u4EE5\u770B\u51FA\uFF0Cp \u662F\u4E00\u4E2A\u901A\u8FC7 person \u8FD9\u4E2A\u6784\u9020\u51FD\u6570\u751F\u6210\u7684\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5E94\u8BE5\u5F88\u5BB9\u6613\u7406\u89E3\u3002\u90A3\u4E48 new \u5728\u8FD9\u4E2A\u751F\u6210\u5B9E\u4F8B\u7684\u8FC7\u7A0B\u4E2D\u5230\u5E95\u8FDB\u884C\u4E86\u54EA\u4E9B\u6B65\u9AA4\u6765\u5B9E\u73B0\u5462\uFF1F\u603B\u7ED3\u4E0B\u6765\u5927\u81F4\u5206\u4E3A\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4\u3002</p><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF1B</p><p>\u5C06\u6784\u9020\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u8D4B\u7ED9\u65B0\u5BF9\u8C61\uFF08this \u6307\u5411\u65B0\u5BF9\u8C61\uFF09\uFF1B</p><p>\u6267\u884C\u6784\u9020\u51FD\u6570\u4E2D\u7684\u4EE3\u7801\uFF08\u4E3A\u8FD9\u4E2A\u65B0\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\uFF09\uFF1B</p><p>\u8FD4\u56DE\u65B0\u5BF9\u8C61\u3002</p><p>\u90A3\u4E48\u95EE\u9898\u6765\u4E86\uFF0C\u5982\u679C\u4E0D\u7528 new \u8FD9\u4E2A\u5173\u952E\u8BCD\uFF0C\u7ED3\u5408\u4E0A\u9762\u7684\u4EE3\u7801\u6539\u9020\u4E00\u4E0B\uFF0C\u53BB\u6389 new\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\u6837\u7684\u53D8\u5316\u5462\uFF1F\u6211\u4EEC\u518D\u6765\u770B\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u3002</p><p>\u590D\u5236\u4EE3\u7801 function Person(){ this.name = &#39;Jack&#39;; } var p = Person(); console.log(p) // undefined console.log(name) // Jack console.log(p.name) // &#39;name&#39; of undefined \u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u6CA1\u6709\u4F7F\u7528 new \u8FD9\u4E2A\u5173\u952E\u8BCD\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u5C31\u662F undefined\u3002\u5176\u4E2D\u7531\u4E8E JavaScript \u4EE3\u7801\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B this \u7684\u6307\u5411\u662F window\uFF0C\u90A3\u4E48 name \u7684\u8F93\u51FA\u7ED3\u679C\u5C31\u4E3A Jack\uFF0C\u8FD9\u662F\u4E00\u79CD\u4E0D\u5B58\u5728 new \u5173\u952E\u8BCD\u7684\u60C5\u51B5\u3002</p><p>\u90A3\u4E48\u5F53\u6784\u9020\u51FD\u6570\u4E2D\u6709 return \u4E00\u4E2A\u5BF9\u8C61\u7684\u64CD\u4F5C\uFF0C\u7ED3\u679C\u53C8\u4F1A\u662F\u4EC0\u4E48\u6837\u5B50\u5462\uFF1F\u6211\u4EEC\u518D\u6765\u770B\u4E00\u6BB5\u5728\u4E0A\u9762\u7684\u57FA\u7840\u4E0A\u6539\u9020\u8FC7\u7684\u4EE3\u7801\u3002</p><p>\u590D\u5236\u4EE3\u7801 function Person(){ this.name = &#39;Jack&#39;; return {age: 18} } var p = new Person(); console.log(p) // {age: 18} console.log(p.name) // undefined console.log(p.age) // 18 \u901A\u8FC7\u8FD9\u6BB5\u4EE3\u7801\u53C8\u53EF\u4EE5\u770B\u51FA\uFF0C\u5F53\u6784\u9020\u51FD\u6570\u6700\u540E return \u51FA\u6765\u7684\u662F\u4E00\u4E2A\u548C this \u65E0\u5173\u7684\u5BF9\u8C61\u65F6\uFF0Cnew \u547D\u4EE4\u4F1A\u76F4\u63A5\u8FD4\u56DE\u8FD9\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u800C\u4E0D\u662F\u901A\u8FC7 new \u6267\u884C\u6B65\u9AA4\u751F\u6210\u7684 this \u5BF9\u8C61\u3002</p><p>\u4F46\u662F\u8FD9\u91CC\u8981\u6C42\u6784\u9020\u51FD\u6570\u5FC5\u987B\u662F\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5982\u679C\u8FD4\u56DE\u7684\u4E0D\u662F\u5BF9\u8C61\uFF0C\u90A3\u4E48\u8FD8\u662F\u4F1A\u6309\u7167 new \u7684\u5B9E\u73B0\u6B65\u9AA4\uFF0C\u8FD4\u56DE\u65B0\u751F\u6210\u7684\u5BF9\u8C61\u3002\u63A5\u4E0B\u6765\u8FD8\u662F\u5728\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u7684\u57FA\u7840\u4E4B\u4E0A\u7A0D\u5FAE\u6539\u52A8\u4E00\u4E0B\u3002</p><p>\u590D\u5236\u4EE3\u7801 function Person(){ this.name = &#39;Jack&#39;; return &#39;tom&#39;; } var p = new Person(); console.log(p) // {name: &#39;Jack&#39;} console.log(p.name) // Jack \u53EF\u4EE5\u770B\u51FA\uFF0C\u5F53\u6784\u9020\u51FD\u6570\u4E2D return \u7684\u4E0D\u662F\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u90A3\u4E48\u5B83\u8FD8\u662F\u4F1A\u6839\u636E new \u5173\u952E\u8BCD\u7684\u6267\u884C\u903B\u8F91\uFF0C\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF08\u7ED1\u5B9A\u4E86\u6700\u65B0 this\uFF09\uFF0C\u6700\u540E\u8FD4\u56DE\u51FA\u6765\u3002</p><p>\u56E0\u6B64\u6211\u4EEC\u603B\u7ED3\u4E00\u4E0B\uFF1Anew \u5173\u952E\u8BCD\u6267\u884C\u4E4B\u540E\u603B\u662F\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8981\u4E48\u662F\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u8981\u4E48\u662F return \u8BED\u53E5\u6307\u5B9A\u7684\u5BF9\u8C61\u3002</p><p>\u5218\u70E8\u7684 js.png</p><p>\u597D\u4E86\uFF0Cnew \u8FD9\u4E2A\u5173\u952E\u8BCD\u5185\u5BB9\u57FA\u672C\u5C31\u8BB2\u5230\u8FD9\u91CC\u4E86\uFF0C\u6211\u4EEC\u518D\u770B\u4E00\u4E0B apply \u548C call \u7684\u57FA\u672C\u539F\u7406\u3002</p><p>apply &amp; call &amp; bind \u539F\u7406\u4ECB\u7ECD \u5148\u6765\u4E86\u89E3\u4E00\u4E0B\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u7684\u57FA\u672C\u60C5\u51B5\uFF0Ccall\u3001apply \u548C bind \u662F\u6302\u5728 Function \u5BF9\u8C61\u4E0A\u7684\u4E09\u4E2A\u65B9\u6CD5\uFF0C\u8C03\u7528\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u7684\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570\u3002</p><p>\u8BF7\u770B\u8FD9\u4E09\u4E2A\u51FD\u6570\u7684\u57FA\u672C\u8BED\u6CD5\u3002</p><p>\u590D\u5236\u4EE3\u7801 func.call(thisArg, param1, param2, ...) func.apply(thisArg, [param1,param2,...]) func.bind(thisArg, param1, param2, ...) \u5176\u4E2D func \u662F\u8981\u8C03\u7528\u7684\u51FD\u6570\uFF0CthisArg \u4E00\u822C\u4E3A this \u6240\u6307\u5411\u7684\u5BF9\u8C61\uFF0C\u540E\u9762\u7684 param1\u30012 \u4E3A\u51FD\u6570 func \u7684\u591A\u4E2A\u53C2\u6570\uFF0C\u5982\u679C func \u4E0D\u9700\u8981\u53C2\u6570\uFF0C\u5219\u540E\u9762\u7684 param1\u30012 \u53EF\u4EE5\u4E0D\u5199\u3002</p><p>\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u5171\u6709\u7684\u3001\u6BD4\u8F83\u660E\u663E\u7684\u4F5C\u7528\u5C31\u662F\uFF0C\u90FD\u53EF\u4EE5\u6539\u53D8\u51FD\u6570 func \u7684 this \u6307\u5411\u3002call \u548C apply \u7684\u533A\u522B\u5728\u4E8E\uFF0C\u4F20\u53C2\u7684\u5199\u6CD5\u4E0D\u540C\uFF1Aapply \u7684\u7B2C 2 \u4E2A\u53C2\u6570\u4E3A\u6570\u7EC4\uFF1B call \u5219\u662F\u4ECE\u7B2C 2 \u4E2A\u81F3\u7B2C N \u4E2A\u90FD\u662F\u7ED9 func \u7684\u4F20\u53C2\uFF1B\u800C bind \u548C\u8FD9\u4E24\u4E2A\uFF08call\u3001apply\uFF09\u53C8\u4E0D\u540C\uFF0Cbind \u867D\u7136\u6539\u53D8\u4E86 func \u7684 this \u6307\u5411\uFF0C\u4F46\u4E0D\u662F\u9A6C\u4E0A\u6267\u884C\uFF0C\u800C\u8FD9\u4E24\u4E2A\uFF08call\u3001apply\uFF09\u662F\u5728\u6539\u53D8\u4E86\u51FD\u6570\u7684 this \u6307\u5411\u4E4B\u540E\u7ACB\u9A6C\u6267\u884C\u3002</p><p>\u8FD9\u51E0\u4E2A\u65B9\u6CD5\u7684\u533A\u522B\u548C\u539F\u7406\u57FA\u672C\u8BB2\u6E05\u695A\u4E86\uFF0C\u4F46\u662F\u7406\u89E3\u8D77\u6765\u662F\u4E0D\u662F\u5F88\u62BD\u8C61\u5462\uFF1F\u90A3\u4E48\u6211\u4E3E\u4E2A\u5F62\u8C61\u7684\u4F8B\u5B50\u518D\u914D\u5408\u7740\u4EE3\u7801\u4E00\u8D77\u770B\u4E0B\u3002</p><p>\u4F8B\u5982\uFF0C\u751F\u6D3B\u4E2D\u6211\u4E0D\u7ECF\u5E38\u505A\u996D\uFF0C\u5BB6\u91CC\u6CA1\u6709\u9505\uFF0C\u5468\u672B\u7A81\u7136\u60F3\u7ED9\u81EA\u5DF1\u505A\u4E2A\u996D\u5C1D\u5C1D\u3002\u4F46\u662F\u5BB6\u91CC\u6CA1\u6709\u9505\uFF0C\u800C\u6211\u53C8\u4E0D\u60F3\u51FA\u53BB\u4E70\uFF0C\u6240\u4EE5\u5C31\u95EE\u9694\u58C1\u90BB\u5C45\u501F\u4E86\u4E00\u4E2A\u9505\u6765\u7528\uFF0C\u8FD9\u6837\u505A\u4E86\u996D\uFF0C\u53C8\u8282\u7701\u4E86\u5F00\u9500\uFF0C\u4E00\u4E3E\u4E24\u5F97\u3002</p><p>\u5BF9\u5E94\u5728\u7A0B\u5E8F\u4E2D\uFF1AA \u5BF9\u8C61\u6709\u4E2A getName \u7684\u65B9\u6CD5\uFF0CB \u5BF9\u8C61\u4E5F\u9700\u8981\u4E34\u65F6\u4F7F\u7528\u540C\u6837\u7684\u65B9\u6CD5\uFF0C\u90A3\u4E48\u8FD9\u65F6\u5019\u6211\u4EEC\u662F\u5355\u72EC\u4E3A B \u5BF9\u8C61\u6269\u5C55\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u8FD8\u662F\u501F\u7528\u4E00\u4E0B A \u5BF9\u8C61\u7684\u65B9\u6CD5\u5462\uFF1F\u5F53\u7136\u662F\u53EF\u4EE5\u501F\u7528 A \u5BF9\u8C61\u7684 getName \u65B9\u6CD5\uFF0C\u65E2\u8FBE\u5230\u4E86\u76EE\u7684\uFF0C\u53C8\u8282\u7701\u91CD\u590D\u5B9A\u4E49\uFF0C\u8282\u7EA6\u5185\u5B58\u7A7A\u95F4\u3002</p><p>\u4E3A\u4E86\u66F4\u597D\u5730\u638C\u63E1\u8FD9\u90E8\u5206\u6982\u5FF5\uFF0C\u6211\u4EEC\u7ED3\u5408\u4E00\u6BB5\u4EE3\u7801\u518D\u6DF1\u5165\u7406\u89E3\u4E00\u4E0B\u8FD9\u51E0\u4E2A\u65B9\u6CD5\u3002</p><p>\u590D\u5236\u4EE3\u7801 let a = { name: &#39;jack&#39;, getName: function(msg) { return msg + this.name; } } let b = { name: &#39;lily&#39; } console.log(a.getName(&#39;hello~&#39;)); // hello~jack console.log(a.getName.call(b, &#39;hi~&#39;)); // hi~lily console.log(a.getName.apply(b, [&#39;hi~&#39;])) // hi~lily let name = a.getName.bind(b, &#39;hello~&#39;); console.log(name()); // hello~lily \u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u6267\u884C\u7684\u7ED3\u679C\u4E2D\u53EF\u4EE5\u53D1\u73B0\uFF0C\u4F7F\u7528\u8FD9\u4E09\u79CD\u65B9\u5F0F\u90FD\u53EF\u4EE5\u8FBE\u6210\u6211\u4EEC\u60F3\u8981\u7684\u76EE\u6807\uFF0C\u5373\u901A\u8FC7\u6539\u53D8 this \u7684\u6307\u5411\uFF0C\u8BA9 b \u5BF9\u8C61\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 a \u5BF9\u8C61\u4E2D\u7684 getName \u65B9\u6CD5\u3002\u4ECE\u7ED3\u679C\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u6700\u540E\u4E09\u4E2A\u65B9\u6CD5\u8F93\u51FA\u7684\u90FD\u662F\u548C lily \u76F8\u5173\u7684\u6253\u5370\u7ED3\u679C\uFF0C\u6EE1\u8DB3\u4E86\u6211\u4EEC\u7684\u9884\u671F\u3002</p><p>\u5173\u4E8E\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u7684\u539F\u7406\u76F8\u5173\u5148\u4ECB\u7ECD\u5230\u8FD9\u91CC\uFF0C\u6211\u4EEC\u518D\u770B\u770B\u8FD9\u51E0\u4E2A\u65B9\u6CD5\u7684\u4F7F\u7528\u573A\u666F\u3002</p><p>\u65B9\u6CD5\u7684\u5E94\u7528\u573A\u666F \u4E0B\u9762\u51E0\u79CD\u5E94\u7528\u573A\u666F\uFF0C\u4F60\u591A\u52A0\u4F53\u4F1A\u5C31\u53EF\u4EE5\u53D1\u73B0\u5B83\u4EEC\u7684\u7406\u5FF5\u90FD\u662F\u201C\u501F\u7528\u201D\u65B9\u6CD5\u7684\u601D\u8DEF\u3002\u6211\u4EEC\u6765\u770B\u770B\u90FD\u6709\u54EA\u4E9B\u3002</p><p>\u5224\u65AD\u6570\u636E\u7C7B\u578B \u7528 Object.prototype.toString \u6765\u5224\u65AD\u7C7B\u578B\u662F\u6700\u5408\u9002\u7684\uFF0C\u501F\u7528\u5B83\u6211\u4EEC\u51E0\u4E4E\u53EF\u4EE5\u5224\u65AD\u6240\u6709\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u6211\u5728 01 \u8BB2\u6570\u636E\u7C7B\u578B\u7684\u5224\u65AD\u4E2D\u6709\u4ECB\u7ECD\u8FC7\uFF0C\u6211\u5C06\u5F53\u65F6\u603B\u7ED3\u7684\u7528\u6765\u5224\u65AD\u6570\u636E\u7C7B\u578B\u7684\u90A3\u90E8\u5206\u4EE3\u7801\u7C98\u8D34\u5728\u4E0B\u9762\u4E86\uFF0C\u4F60\u53EF\u4EE5\u56DE\u5FC6\u4E00\u4E0B\u3002</p><p>\u590D\u5236\u4EE3\u7801 function getType(obj){ let type = typeof obj; if (type !== &quot;object&quot;) { return type; } return Object.prototype.toString.call(obj).replace(/^$/, &#39;$1&#39;); } \u7ED3\u5408\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4EE5\u53CA\u5728\u524D\u9762\u8BB2\u7684 call \u7684\u65B9\u6CD5\u7684 \u201C\u501F\u7528\u201D \u601D\u8DEF\uFF0C\u90A3\u4E48\u5224\u65AD\u6570\u636E\u7C7B\u578B\u5C31\u662F\u501F\u7528\u4E86 Object \u7684\u539F\u578B\u94FE\u4E0A\u7684 toString \u65B9\u6CD5\uFF0C\u6700\u540E\u8FD4\u56DE\u7528\u6765\u5224\u65AD\u4F20\u5165\u7684 obj \u7684\u5B57\u7B26\u4E32\uFF0C\u6765\u786E\u5B9A\u6700\u540E\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u518D\u591A\u505A\u8BB2\u89E3\u4E86\u3002</p><p>\u7C7B\u6570\u7EC4\u501F\u7528\u65B9\u6CD5 \u7C7B\u6570\u7EC4\u76F8\u5173\u77E5\u8BC6\u6211\u4F1A\u5728\u7B2C\u4E8C\u4E2A\u6A21\u5757\u201C\u6DF1\u5165\u6570\u7EC4\u201D\u4E2D\u8BE6\u7EC6\u4ECB\u7ECD\uFF0C\u8FD9\u91CC\u5148\u7B80\u5355\u8BF4\u4E00\u4E0B\uFF0C\u7C7B\u6570\u7EC4\u56E0\u4E3A\u4E0D\u662F\u771F\u6B63\u7684\u6570\u7EC4\uFF0C\u6240\u6709\u6CA1\u6709\u6570\u7EC4\u7C7B\u578B\u4E0A\u81EA\u5E26\u7684\u79CD\u79CD\u65B9\u6CD5\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C31\u53EF\u4EE5\u5229\u7528\u4E00\u4E9B\u65B9\u6CD5\u53BB\u501F\u7528\u6570\u7EC4\u7684\u65B9\u6CD5\uFF0C\u6BD4\u5982\u501F\u7528\u6570\u7EC4\u7684 push \u65B9\u6CD5\uFF0C\u770B\u4E0B\u9762\u7684\u4E00\u6BB5\u4EE3\u7801\u3002</p><p>\u590D\u5236\u4EE3\u7801 var arrayLike = { 0: &#39;java&#39;, 1: &#39;script&#39;, length: 2 } Array.prototype.push.call(arrayLike, &#39;jack&#39;, &#39;lily&#39;); console.log(typeof arrayLike); // &#39;object&#39; console.log(arrayLike); // {0: &quot;java&quot;, 1: &quot;script&quot;, 2: &quot;jack&quot;, 3: &quot;lily&quot;, length: 4} \u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u770B\u5230\uFF0CarrayLike \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6A21\u62DF\u6570\u7EC4\u7684\u4E00\u4E2A\u7C7B\u6570\u7EC4\u3002\u4ECE\u6570\u636E\u7C7B\u578B\u4E0A\u770B\uFF0C\u5B83\u662F\u4E00\u4E2A\u5BF9\u8C61\u3002\u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u7528 typeof \u6765\u5224\u65AD\u8F93\u51FA\u7684\u662F &#39;object&#39;\uFF0C\u5B83\u81EA\u8EAB\u662F\u4E0D\u4F1A\u6709\u6570\u7EC4\u7684 push \u65B9\u6CD5\u7684\uFF0C\u8FD9\u91CC\u6211\u4EEC\u5C31\u7528 call \u7684\u65B9\u6CD5\u6765\u501F\u7528 Array \u539F\u578B\u94FE\u4E0A\u7684 push \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E2A\u7C7B\u6570\u7EC4\u7684 push \u65B9\u6CD5\uFF0C\u7ED9 arrayLike \u6DFB\u52A0\u65B0\u7684\u5143\u7D20\u3002</p><p>\u4ECE\u4E0A\u9762\u7684\u63A7\u5236\u53F0\u53EF\u4EE5\u770B\u51FA\uFF0Cpush \u6EE1\u8DB3\u4E86\u6211\u4EEC\u60F3\u8981\u5B9E\u73B0\u6DFB\u52A0\u5143\u7D20\u7684\u8BC9\u6C42\u3002</p><p>\u83B7\u53D6\u6570\u7EC4\u7684\u6700\u5927 / \u6700\u5C0F\u503C \u6211\u4EEC\u53EF\u4EE5\u7528 apply \u6765\u5B9E\u73B0\u6570\u7EC4\u4E2D\u5224\u65AD\u6700\u5927 / \u6700\u5C0F\u503C\uFF0Capply \u76F4\u63A5\u4F20\u9012\u6570\u7EC4\u4F5C\u4E3A\u8C03\u7528\u65B9\u6CD5\u7684\u53C2\u6570\uFF0C\u4E5F\u53EF\u4EE5\u51CF\u5C11\u4E00\u6B65\u5C55\u5F00\u6570\u7EC4\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 Math.max\u3001Math.min \u6765\u83B7\u53D6\u6570\u7EC4\u7684\u6700\u5927\u503C / \u6700\u5C0F\u503C\uFF0C\u8BF7\u770B\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u3002</p><p>\u590D\u5236\u4EE3\u7801 let arr = [13, 6, 10, 11, 16]; const max = Math.max.apply(Math, arr); const min = Math.min.apply(Math, arr);</p><p>console.log(max); // 16 console.log(min); // 6 \u7EE7\u627F \u6211\u4EEC\u5728\u4E0A\u4E00\u8BB2\u4E2D\u8BF4\u5230\u4E86\u7EE7\u627F\uFF0C\u5B83\u4E0E new\u3001call \u5171\u540C\u5B9E\u73B0\u4E86\u5404\u79CD\u5404\u6837\u7684\u7EE7\u627F\u65B9\u5F0F\u3002\u90A3\u4E48\u4E0B\u9762\u6211\u4EEC\u7ED3\u5408\u7740\u8FD9\u4E00\u8BB2\u7684\u5185\u5BB9\u518D\u6765\u56DE\u987E\u4E00\u4E0B\u7EC4\u5408\u7EE7\u627F\u65B9\u5F0F\uFF0C\u4EE3\u7801\u5982\u4E0B\u3002</p><p>\u590D\u5236\u4EE3\u7801 function Parent3 () { this.name = &#39;parent3&#39;; this.play = [1, 2, 3]; }</p><p>Parent3.prototype.getName = function () { return this.name; } function Child3() { Parent3.call(this); this.type = &#39;child3&#39;; }</p><p>Child3.prototype = new Parent3(); Child3.prototype.constructor = Child3; var s3 = new Child3(); console.log(s3.getName()); // &#39;parent3&#39; \u5173\u4E8E\u7EE7\u627F\u7684\u5185\u5BB9\u5728\u8FD9\u91CC\u5C31\u4E0D\u8FC7\u591A\u8BB2\u89E3\u4E86\uFF0C\u53E6\u5916\u8FD9\u4E9B\u65B9\u6CD5\u7C7B\u4F3C\u7684\u5E94\u7528\u573A\u666F\u8FD8\u6709\u5F88\u591A\uFF0C\u5173\u952E\u5728\u4E8E\u5B83\u4EEC\u501F\u7528\u65B9\u6CD5\u7684\u7406\u5FF5\uFF0C\u5982\u679C\u5BF9\u8FD9\u90E8\u5206\u5185\u5BB9\u4E0D\u7406\u89E3\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u518D\u591A\u770B\u51E0\u904D\u3002</p><p>\u5982\u4F55\u81EA\u5DF1\u5B9E\u73B0\u8FD9\u4E9B\u65B9\u6CD5 \u5728\u4E92\u8054\u7F51\u5927\u5382\u7684\u9762\u8BD5\u4E2D\uFF0C\u624B\u5199\u5B9E\u73B0 new\u3001call\u3001apply\u3001bind \u4E00\u76F4\u662F\u6BD4\u8F83\u9AD8\u9891\u7684\u9898\u76EE\uFF0C\u7ED3\u5408\u672C\u8BB2\u7684\u5185\u5BB9\uFF0C\u6211\u4EEC\u4E00\u8D77\u6765\u624B\u5DE5\u5B9E\u73B0\u4E00\u4E0B\u8FD9\u51E0\u4E2A\u65B9\u6CD5\u3002</p><p>new \u7684\u5B9E\u73B0 \u6211\u4EEC\u521A\u624D\u5728\u8BB2 new \u7684\u539F\u7406\u65F6\uFF0C\u4ECB\u7ECD\u4E86\u6267\u884C new \u7684\u8FC7\u7A0B\u3002\u90A3\u4E48\u6765\u770B\u4E0B\u5728\u8FD9\u8FC7\u7A0B\u4E2D\uFF0Cnew \u88AB\u8C03\u7528\u540E\u5927\u81F4\u505A\u4E86\u54EA\u51E0\u4EF6\u4E8B\u60C5\u3002</p><p>\u8BA9\u5B9E\u4F8B\u53EF\u4EE5\u8BBF\u95EE\u5230\u79C1\u6709\u5C5E\u6027\uFF1B</p><p>\u8BA9\u5B9E\u4F8B\u53EF\u4EE5\u8BBF\u95EE\u6784\u9020\u51FD\u6570\u539F\u578B\uFF08constructor.prototype\uFF09\u6240\u5728\u539F\u578B\u94FE\u4E0A\u7684\u5C5E\u6027\uFF1B</p><p>\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u7684\u6700\u540E\u7ED3\u679C\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B\u3002</p><p>\u90A3\u4E48\u8BF7\u4F60\u601D\u8003\u4E00\u4E0B\uFF0C\u81EA\u5DF1\u5B9E\u73B0 new \u7684\u4EE3\u7801\u5E94\u8BE5\u5982\u4F55\u5199\u5462\uFF1F\u4E0B\u9762\u6211\u7ED9\u4F60\u4E00\u4E2A\u601D\u8DEF\u3002</p><p>\u590D\u5236\u4EE3\u7801 function _new(ctor, ...args) { if(typeof ctor !== &#39;function&#39;) { throw &#39;ctor must be a function&#39;; } let obj = new Object(); obj.<strong>proto</strong> = Object.create(ctor.prototype); let res = ctor.apply(obj, [...args]);</p><pre><code>let isObject = typeof res === &#39;object&#39; &amp;&amp; res !== null;
let isFunction = typeof res === &#39;function&#39;;
return isObject || isFunction ? res : obj;
</code></pre><p>}; \u63A5\u4E0B\u6765\u6211\u4EEC\u518D\u770B\u770B apply \u548C call \u7684\u5B9E\u73B0\u65B9\u6CD5\u3002</p><p>apply \u548C call \u7684\u5B9E\u73B0 \u7531\u4E8E apply \u548C call \u57FA\u672C\u539F\u7406\u662F\u5DEE\u4E0D\u591A\u7684\uFF0C\u53EA\u662F\u53C2\u6570\u5B58\u5728\u533A\u522B\uFF0C\u56E0\u6B64\u6211\u4EEC\u5C06\u8FD9\u4E24\u4E2A\u7684\u5B9E\u73B0\u65B9\u6CD5\u653E\u5728\u4E00\u8D77\u8BB2\u3002</p><p>\u4F9D\u7136\u662F\u7ED3\u5408\u65B9\u6CD5\u201C\u501F\u7528\u201D\u7684\u539F\u7406\uFF0C\u6211\u4EEC\u4E00\u8D77\u6765\u601D\u8003\u4E00\u4E0B\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5982\u4F55\u5B9E\u73B0\uFF0C\u8BF7\u770B\u4E0B\u9762\u5B9E\u73B0\u7684\u4EE3\u7801\u3002</p><p>\u590D\u5236\u4EE3\u7801 Function.prototype.call = function (context, ...args) { var context = context || window; context.fn = this; var result = eval(&#39;context.fn(...args)&#39;); delete context.fn return result; } Function.prototype.apply = function (context, args) { let context = context || window; context.fn = this; let result = eval(&#39;context.fn(...args)&#39;); delete context.fn return result; } \u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u770B\u51FA\uFF0C\u5B9E\u73B0 call \u548C apply \u7684\u5173\u952E\u5C31\u5728 eval \u8FD9\u884C\u4EE3\u7801\u3002\u5176\u4E2D\u663E\u793A\u4E86\u7528 context \u8FD9\u4E2A\u4E34\u65F6\u53D8\u91CF\u6765\u6307\u5B9A\u4E0A\u4E0B\u6587\uFF0C\u7136\u540E\u8FD8\u662F\u901A\u8FC7\u6267\u884C eval \u6765\u6267\u884C context.fn \u8FD9\u4E2A\u51FD\u6570\uFF0C\u6700\u540E\u8FD4\u56DE result\u3002</p><p>\u8981\u6CE8\u610F\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u548C bind \u7684\u533A\u522B\u5C31\u5728\u4E8E\uFF0C\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u662F\u76F4\u63A5\u8FD4\u56DE\u6267\u884C\u7ED3\u679C\uFF0C\u800C bind \u65B9\u6CD5\u662F\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u56E0\u6B64\u8FD9\u91CC\u76F4\u63A5\u7528 eval \u6267\u884C\u5F97\u5230\u7ED3\u679C\u3002</p><p>\u5982\u679C\u8BA9\u4F60\u53BB\u6267\u884C\uFF0C\u8FD9\u4E2A\u533A\u522B\u4E00\u5B9A\u8981\u591A\u52A0\u6CE8\u610F\u3002\u7D27\u63A5\u7740\u6211\u4EEC\u5C31\u6765\u770B\u4E0B bind \u7684\u5B9E\u73B0\u3002</p><p>bind \u7684\u5B9E\u73B0 \u7ED3\u5408\u4E0A\u9762\u4E24\u4E2A\u65B9\u6CD5\u7684\u5B9E\u73B0\uFF0Cbind \u7684\u5B9E\u73B0\u601D\u8DEF\u57FA\u672C\u548C apply \u4E00\u6837\uFF0C\u4F46\u662F\u5728\u6700\u540E\u5B9E\u73B0\u8FD4\u56DE\u7ED3\u679C\u8FD9\u91CC\uFF0Cbind \u548C apply \u6709\u7740\u6BD4\u8F83\u5927\u7684\u5DEE\u5F02\uFF0Cbind \u4E0D\u9700\u8981\u76F4\u63A5\u6267\u884C\uFF0C\u56E0\u6B64\u4E0D\u518D\u9700\u8981\u7528 eval \uFF0C\u800C\u662F\u9700\u8981\u901A\u8FC7\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u7684\u65B9\u5F0F\u5C06\u7ED3\u679C\u8FD4\u56DE\uFF0C\u4E4B\u540E\u518D\u901A\u8FC7\u6267\u884C\u8FD9\u4E2A\u7ED3\u679C\uFF0C\u5F97\u5230\u60F3\u8981\u7684\u6267\u884C\u6548\u679C\u3002</p><p>\u90A3\u4E48\uFF0C\u7ED3\u5408\u8FD9\u4E2A\u601D\u8DEF\uFF0C\u6211\u4EEC\u770B\u4E0B bind \u8FD9\u4E2A\u65B9\u6CD5\u7684\u5E95\u5C42\u903B\u8F91\u5B9E\u73B0\u7684\u4EE3\u7801\u662F\u4EC0\u4E48\u6837\u7684\uFF0C\u5982\u4E0B\u6240\u793A\u3002</p><p>\u590D\u5236\u4EE3\u7801 Function.prototype.bind = function (context, ...args) { if (typeof this !== &quot;function&quot;) { throw new Error(&quot;this must be a function&quot;); } var self = this; var fbound = function () { self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments))); } if(this.prototype) { fbound.prototype = Object.create(this.prototype); } return fbound; } \u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u5B9E\u73B0 bind \u7684\u6838\u5FC3\u5728\u4E8E\u8FD4\u56DE\u7684\u65F6\u5019\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u6545\u8FD9\u91CC\u7684 fbound \u9700\u8981\u8FD4\u56DE\uFF0C\u4F46\u662F\u5728\u8FD4\u56DE\u7684\u8FC7\u7A0B\u4E2D\u539F\u578B\u94FE\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\u4E0D\u80FD\u4E22\u5931\u3002\u56E0\u6B64\u8FD9\u91CC\u9700\u8981\u7528 Object.create \u65B9\u6CD5\uFF0C\u5C06 this.prototype \u4E0A\u9762\u7684\u5C5E\u6027\u6302\u5230 fbound \u7684\u539F\u578B\u4E0A\u9762\uFF0C\u6700\u540E\u518D\u8FD4\u56DE fbound\u3002\u8FD9\u6837\u8C03\u7528 bind \u65B9\u6CD5\u63A5\u6536\u5230\u51FD\u6570\u7684\u5BF9\u8C61\uFF0C\u518D\u901A\u8FC7\u6267\u884C\u63A5\u6536\u7684\u51FD\u6570\uFF0C\u5373\u53EF\u5F97\u5230\u60F3\u8981\u7684\u7ED3\u679C\u3002</p><p>\u90A3\u4E48\u8BB2\u5230\u8FD9\u91CC\uFF0C\u4F60\u662F\u4E0D\u662F\u5DF2\u7ECF\u6E05\u695A\u4E86 new\u3001apply\u3001call\u3001bind \u8FD9\u4E9B\u65B9\u6CD5\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u5462\uFF1F\u5982\u679C\u8FD8\u662F\u4E00\u77E5\u534A\u89E3\uFF0C\u6211\u5EFA\u8BAE\u4F60\u591A\u52A8\u624B\u5B9E\u8DF5\u51E0\u6B21\u3002</p><p>\u603B\u7ED3 \u8FD9\u4E00\u8BB2\u7684\u5185\u5BB9\u5C31\u4ECB\u7ECD\u5B8C\u4E86\u3002\u6211\u4EEC\u901A\u8FC7\u539F\u7406\u4EE5\u53CA\u5BF9\u5E95\u5C42\u903B\u8F91\u7684\u5256\u6790\uFF0C\u4ECB\u7ECD\u4E86\u65E5\u5E38\u5F00\u53D1\u4E2D\u7ECF\u5E38\u7528\u7684 new\u3001apply\u3001call\u3001bind \u8FD9\u51E0\u79CD\u65B9\u6CD5\uFF0C\u6700\u540E\u5E26\u4F60\u4E00\u8D77\u52A8\u624B\u8FDB\u884C\u4E86\u5B9E\u8DF5\u3002</p><p>\u7EFC\u4E0A\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u8FD9\u51E0\u4E2A\u65B9\u6CD5\u662F\u6709\u533A\u522B\u548C\u8054\u7CFB\u7684\uFF0C\u901A\u8FC7\u4E0B\u9762\u7684\u8868\u683C\u6211\u4EEC\u518D\u6765\u68B3\u7406\u4E00\u4E0B\u8FD9\u4E9B\u65B9\u6CD5\u7684\u5F02\u540C\u70B9\uFF0C\u5E0C\u671B\u4F60\u53EF\u4EE5\u66F4\u597D\u5730\u7406\u89E3\u3002</p><p>\u56FE\u7247 5.png</p><p>\u5728\u65E5\u5E38\u7684\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u4E2D\uFF0C\u5927\u5BB6\u5F80\u5F80\u4F1A\u5FFD\u89C6\u5BF9\u8FD9\u4E9B\u65B9\u6CD5\u7684\u7CFB\u7EDF\u6027\u5B66\u4E60\uFF0C\u5176\u5B9E\u8FD9\u4E9B\u65B9\u6CD5\u5728\u9AD8\u7EA7 JavaScript \u7F16\u7A0B\u4E2D\u7ECF\u5E38\u51FA\u73B0\uFF0C\u5C24\u5176\u662F\u4F60\u53BB\u770B\u4E00\u4E9B\u6BD4\u8F83\u597D\u7684\u5F00\u6E90\u9879\u76EE\uFF0C\u7ECF\u5E38\u4F1A\u901A\u8FC7\u201C\u501F\u7528\u201D\u7684\u65B9\u5F0F\u53BB\u590D\u7528\u5DF2\u6709\u7684\u65B9\u6CD5\uFF0C\u6765\u8282\u7EA6\u5185\u5B58\u3001\u4F18\u5316\u4EE3\u7801\u3002</p><p>\u800C\u4E14\u8FD9\u4E9B\u65B9\u6CD5\u7684\u5E95\u5C42\u903B\u8F91\u7684\u5B9E\u73B0\uFF0C\u5728\u4E92\u8054\u7F51\u5927\u5382\u7684\u524D\u7AEF\u9762\u8BD5\u4E2D\u51FA\u73B0\u7684\u9891\u7387\u4E5F\u6BD4\u8F83\u9AD8\uFF0C\u6BCF\u4E2A\u5B9E\u73B0\u7684\u65B9\u6CD5\u7EC6\u8282\u4E5F\u6BD4\u8F83\u96F6\u6563\uFF0C\u5F88\u591A\u5F00\u53D1\u8005\u5F88\u96BE\u6709\u4E00\u4E2A\u7CFB\u7EDF\u7684\u3001\u6574\u4F53\u7684\u5B66\u4E60\uFF0C\u9020\u6210\u4E86\u5728\u9762\u8BD5\u8FC7\u7A0B\u4E2D\u9047\u5230\u6B64\u7C7B\u624B\u5199\u5E95\u5C42 API \u7B49\u95EE\u9898\u65F6\uFF0C\u5BB9\u6613\u4E34\u573A\u53D1\u6035\u3002</p><p>\u56E0\u6B64\u6211\u5E0C\u671B\u901A\u8FC7\u8FD9\u4E00\u8BB2\u7684\u5B66\u4E60\uFF0C\u4F60\u80FD\u5F88\u597D\u5730\u638C\u63E1\u8FD9\u90E8\u5206\u5185\u5BB9\uFF0C\u4EE5\u4FBF\u5728\u9762\u8BD5\u4E2D\u9047\u5230\u8FD9\u7C7B\u9898\u76EE\u7684\u65F6\u5019\u80FD\u591F\u8F7B\u677E\u5E94\u5BF9\u3002</p><p>\u5728\u540E\u7EED\u7684\u8BFE\u65F6\u4E2D\uFF0C\u6211\u5C06\u7EE7\u7EED\u5E26\u9886\u4F60\u6DF1\u5165\u6316\u6398\u95ED\u5305\u7684\u539F\u7406\u548C\u5E95\u5C42\u77E5\u8BC6\u3002\u540C\u65F6\u5E0C\u671B\u4F60\u591A\u52A8\u624B\u7EC3\u4E60\u4EE5\u719F\u7EC3\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u4E5F\u6B22\u8FCE\u4F60\u5728\u4E0B\u65B9\u7559\u8A00\u8BA8\u8BBA\u81EA\u5DF1\u5728\u5B66\u4E60\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u56F0\u60D1\uFF0C\u4EE5\u53CA\u5B66\u4E60\u611F\u609F\u7B49\uFF0C\u8BA9\u6211\u4EEC\u5171\u540C\u8FDB\u6B65\u3002</p><p>\u6211\u4EEC\u4E0B\u4E00\u8BFE\u65F6\u518D\u89C1~</p><!--]-->`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/4.html.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var _4_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$9]]);
var _4_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _4_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_05 = vue.resolveComponent("lg-js-05");
  _push(`<!--[--><h1 id="_05-\u51FD\u6570\u90A3\u4E9B\u4E8B-js-\u95ED\u5305\u96BE\u70B9\u5256\u6790" tabindex="-1"><a class="header-anchor" href="#_05-\u51FD\u6570\u90A3\u4E9B\u4E8B-js-\u95ED\u5305\u96BE\u70B9\u5256\u6790" aria-hidden="true">#</a> 05 | \u51FD\u6570\u90A3\u4E9B\u4E8B\uFF1AJS \u95ED\u5305\u96BE\u70B9\u5256\u6790</h1>`);
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_05, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/5.html.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var _5_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$8]]);
var _5_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _5_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_06 = vue.resolveComponent("lg-js-06");
  _push(`<!--[--><h1 id="_06-\u8FDB\u9636\u7EC3\u4E60-\u5E26\u4F60\u4E00\u8D77\u5B9E\u73B0-json-stringify-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_06-\u8FDB\u9636\u7EC3\u4E60-\u5E26\u4F60\u4E00\u8D77\u5B9E\u73B0-json-stringify-\u65B9\u6CD5" aria-hidden="true">#</a> 06 | \u8FDB\u9636\u7EC3\u4E60\uFF1A\u5E26\u4F60\u4E00\u8D77\u5B9E\u73B0 JSON.Stringify \u65B9\u6CD5</h1>`);
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_06, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/6.html.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var _6_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$7]]);
var _6_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _6_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_07 = vue.resolveComponent("lg-js-07");
  _push(`<!--[--><h1 id="_07-\u6570\u7EC4\u539F\u7406-\u4E0A-\u5E2E\u4F60\u68B3\u7406\u773C\u82B1\u7F2D\u4E71\u7684\u6570\u7EC4-api" tabindex="-1"><a class="header-anchor" href="#_07-\u6570\u7EC4\u539F\u7406-\u4E0A-\u5E2E\u4F60\u68B3\u7406\u773C\u82B1\u7F2D\u4E71\u7684\u6570\u7EC4-api" aria-hidden="true">#</a> 07 | \u6570\u7EC4\u539F\u7406\uFF08\u4E0A\uFF09\uFF1A\u5E2E\u4F60\u68B3\u7406\u773C\u82B1\u7F2D\u4E71\u7684\u6570\u7EC4 API</h1>`);
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_07, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/7.html.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var _7_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$6]]);
var _7_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _7_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_08 = vue.resolveComponent("lg-js-08");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_08, _attrs, null, _parent));
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/8.html.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var _8_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$5]]);
var _8_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _8_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_lg_js_09 = vue.resolveComponent("lg-js-09");
  _push(serverRenderer.ssrRenderComponent(_component_lg_js_09, _attrs, null, _parent));
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/9.html.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var _9_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$4]]);
var _9_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _9_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u5F00\u7BC7\u8BCD-\u6253\u597D-js-\u57FA\u77F3-\u8D70\u7A33\u524D\u7AEF\u8FDB\u9636\u4E4B\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u5F00\u7BC7\u8BCD-\u6253\u597D-js-\u57FA\u77F3-\u8D70\u7A33\u524D\u7AEF\u8FDB\u9636\u4E4B\u8DEF" aria-hidden="true">#</a> \u5F00\u7BC7\u8BCD | \u6253\u597D JS \u57FA\u77F3\uFF0C\u8D70\u7A33\u524D\u7AEF\u8FDB\u9636\u4E4B\u8DEF</h1><p>\u4F60\u597D\uFF0C\u6211\u662F\u82E5\u79BB\uFF0C\u4ECE\u4E8B Web \u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u5C06\u8FD1 9 \u5E74\uFF0C\u524D\u7F8E\u56E2\u524D\u7AEF\u6280\u672F\u4E13\u5BB6\u3002</p><p>\u6211\u5728\u7F8E\u56E2\u5DE5\u4F5C\u671F\u95F4\uFF0C\u8D1F\u8D23\u548C\u53C2\u4E0E\u8FC7\u201C\u5230\u5BB6\u201D\u201C\u56E2\u8D2D\u201D\u53CA\u201C\u7535\u5F71\u201D\u7B49\u4E1A\u52A1\u7684\u524D\u7AEF\u7814\u53D1\uFF0C\u4EE5\u53CA\u56E2\u961F\u642D\u5EFA\u3002\u5176\u95F4\uFF0C\u6211\u8FD8\u81F4\u529B\u4E8E\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u3001\u8D28\u91CF\u4FDD\u8BC1\u3001\u6548\u7387\u63D0\u5347\u3001\u8DE8\u7AEF\u878D\u5408\u7B49\u65B9\u5411\u7684\u7814\u7A76\uFF0C\u5E76\u4E14\u90FD\u6709\u4E00\u5B9A\u7684\u6280\u672F\u843D\u5730\uFF0C\u5F97\u5230\u4E86\u8D85\u51FA\u9884\u671F\u7684\u7ED3\u679C\u3002</p><p>\u6211\u4E5F\u6301\u7EED\u4E3A\u516C\u53F8\u8FDB\u884C\u524D\u7AEF\u5C97\u4F4D\u7684\u793E\u62DB\u3001\u6821\u62DB\u9762\u8BD5\u8FD1 6 \u5E74\u591A\uFF0C\u9762\u8BD5\u5019\u9009\u4EBA\u8FD1\u5343\u4EBA\uFF0C\u6DF1\u8C19\u5927\u5382\u9762\u8BD5\u5957\u8DEF\u53CA\u5B9A\u7EA7\u4E4B\u9053\uFF0C\u56E0\u6B64\u4E5F\u603B\u7ED3\u4E86\u5F88\u591A\u524D\u7AEF\u9762\u8BD5\u7ECF\u9A8C\u3001\u6280\u672F\u63D0\u5347\u5FC3\u5F97\uFF0C\u5E0C\u671B\u901A\u8FC7\u8FD9\u4E2A\u4E13\u680F\u5206\u4EAB\u7ED9\u4F60\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60\u8FD9\u95E8\u8BFE" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60\u8FD9\u95E8\u8BFE" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60\u8FD9\u95E8\u8BFE</h2><p>\u968F\u7740\u524D\u7AEF\u6280\u672F\u7684\u65E5\u65B0\u6708\u5F02\uFF0C\u524D\u7AEF\u5E94\u7528\u7684\u590D\u6742\u5EA6\u65E5\u76CA\u63D0\u5347\u3002\u4E0E\u6B64\u540C\u65F6\uFF0C\u5E02\u573A\u4E0A\u5BF9\u4E8E\u524D\u7AEF\u4EBA\u624D\u7684\u8981\u6C42\u4E5F\u6108\u52A0\u4E25\u683C\u3002</p><p>\u901A\u8FC7\u62DB\u8058\u7F51\u7AD9\u53EF\u4EE5\u770B\u51FA\uFF0C\u5927\u5382\u666E\u904D\u8981\u6C42\u524D\u7AEF\u4EBA\u624D\u7CBE\u901A JavaScript\uFF0C\u5176\u4ED6\u5404\u79CD\u9AD8\u85AA\u5C97\u4F4D\u4E5F\u4E0D\u4E4F\u201C\u7406\u89E3\u5E76\u638C\u63E1 JavaScript\u201D\u7B49\u5B57\u773C\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/zhang13pro/blogImg/img/20220327170637.png" alt="\u62DB\u8058\u8981\u6C42"></p><p>\u4F5C\u4E3A\u524D\u7AEF\u4EBA\uFF0C\u6211\u4EEC\u5FC5\u987B\u8BA4\u8BC6\u5230\u8FD9\u6837\u4E00\u4E2A\u73B0\u72B6\uFF1A\u60F3\u8981\u5728\u8FD9\u4E00\u9886\u57DF\u8D70\u5F97\u957F\u8FDC\uFF0C\u5C31\u5FC5\u987B\u5177\u5907\u624E\u5B9E\u7684 JavaScript \u7F16\u7801\u80FD\u529B\uFF0C\u5B83\u65E2\u662F\u524D\u7AEF\u4EBA\u7684\u81EA\u68C0\u6E05\u5355\uFF0C\u66F4\u662F\u8FDB\u9636\u7684\u5FC5\u4FEE\u8BFE\u3002</p><p>\u800C\u7ECF\u8FC7\u591A\u5E74\u7684\u9762\u8BD5\u62DB\u8058\uFF0C\u6211\u53D1\u73B0\u4E86\u4E00\u4E2A\u201C\u901A\u75C5\u201D\uFF1A\u5F88\u5927\u4E00\u90E8\u5206\u5019\u9009\u4EBA\u7684\u6280\u672F\u6C34\u5E73\uFF0C\u53EA\u505C\u7559\u5728\u524D\u7AEF\u6846\u67B6\uFF08\u5982 Vue\u3001React\uFF09API \u7684\u4F7F\u7528\u5C42\u9762\uFF0C\u5BF9\u4E8E\u6846\u67B6\u7684\u6E90\u7801\u903B\u8F91\u4E00\u77E5\u534A\u89E3\uFF0C\u751A\u81F3\u5BF9\u6E90\u7801\u7684\u601D\u8DEF\u4E5F\u53EA\u662F\u4F9D\u9760\u6B7B\u8BB0\u786C\u80CC\uFF0C\u5F88\u5C11\u613F\u610F\u82B1\u65F6\u95F4\u53BB\u6DF1\u5165\u7814\u7A76\u539F\u751F JavaScript \u7684\u5E95\u5C42\u903B\u8F91\uFF0C\u56E0\u6B64\u9020\u6210\u4E86\u4E00\u7CFB\u5217\u7684\u95EE\u9898\uFF1A</p><ol><li>\u5BF9\u6846\u67B6\u7684\u6E90\u7801\u7406\u89E3\u8D77\u6765\u6BD4\u8F83\u56F0\u96BE\uFF0C\u5BFC\u81F4\u5728\u7F16\u7801\u8FC7\u7A0B\u4E2D\u53EA\u4F1A\u5199\u4E1A\u52A1\u903B\u8F91\uFF0C\u5374\u53C8\u4E0D\u6CE8\u91CD\u4EE3\u7801\u6027\u80FD\uFF1B</li><li>\u53EA\u4F1A\u7B80\u5355\u5730\u8C03\u7528 JS \u6846\u67B6\u7684 API\uFF0C\u800C\u5BF9\u4E8E\u590D\u6742\u7684\u3001\u975E\u5E38\u4F9D\u8D56\u539F\u751F JavaScript \u5B9E\u73B0\u7684\u7EC4\u4EF6\uFF0C\u5B9E\u73B0\u7684\u8FC7\u7A0B\u5F88\u5403\u529B\uFF0C\u751A\u81F3\u96BE\u4EE5\u5B8C\u6210\u5F00\u53D1\u9700\u6C42\uFF1B</li><li>\u5DE5\u4F5C\u4E2D\u5F80\u5F80\u9700\u8981\u901A\u8FC7\u9605\u8BFB\u522B\u4EBA\u7684\u4EE3\u7801\u53BB\u4E86\u89E3\u5F53\u524D\u9879\u76EE\u72B6\u51B5\uFF0C\u800C\u5BF9\u4E8E\u516C\u53F8\u5185\u5176\u4ED6\u4EBA\u81EA\u7814\u7684\u524D\u7AEF\u7EC4\u4EF6\u7684\u5B9E\u73B0\u65B9\u5F0F\u548C\u539F\u7406\uFF0C\u7406\u89E3\u8D77\u6765\u53C8\u8F83\u4E3A\u56F0\u96BE\uFF0C\u66F4\u522B\u8BF4\u5728\u8FD9\u4E2A\u57FA\u7840\u4E0A\u8FDB\u884C\u7EF4\u62A4\u4E86\u3002</li></ol><p>\u4E5F\u6B63\u662F\u8FD9\u4E9B\u95EE\u9898\uFF0C\u5F80\u5F80\u8BA9\u521D\u7EA7\u5F00\u53D1\u8005\u5728\u4E1A\u52A1\u573A\u666F\u91CC\u9762\u65E0\u6CD5\u5448\u73B0\u4F18\u79C0\u7684\u5DE5\u4F5C\u8868\u73B0\uFF0C\u505A\u51FA\u66F4\u591A\u7684\u521B\u65B0\uFF0C\u66F4\u4F55\u51B5\u5F00\u53D1\u51FA\u66F4\u9AD8\u6548\u7684\u524D\u7AEF\u5DE5\u5177\u3002</p><p>\u5F88\u663E\u7136\uFF0C\u6B63\u662F\u81EA\u8EAB\u7684\u6280\u672F\u5DEE\u5F02\uFF0C\u5BFC\u81F4\u4E86\u8FD9\u4E9B\u4EBA\u804C\u4E1A\u53D1\u5C55\u505C\u6EDE\u4E0D\u524D\u2014\u2014\u804C\u7EA7\u664B\u5347\u3001\u9762\u8BD5\u5927\u5382\u65E0\u679C\u3002</p><p>\u5C24\u5176\u662F\u60F3\u8FDB\u5927\u5382\u7684\u524D\u7AEF\u540C\u5B66\uFF0C\u5982\u679C\u80FD\u529B\u4EC5\u4EC5\u505C\u7559\u5728\u4F7F\u7528\u5C42\u9762\uFF0C\u662F\u5F88\u96BE\u901A\u8FC7\u5927\u5382\u5C42\u5C42\u8003\u6838\u7684\uFF0C\u56E0\u4E3A\u9762\u8BD5\u5B98\u5C06\u4F1A\u901A\u8FC7\u6DF1\u6316\u6280\u672F\u80CC\u540E\u7684\u5B9E\u73B0\u539F\u7406\uFF0C\u6765\u5224\u65AD\u4F60\u5BF9\u6280\u672F\u7684\u638C\u63E1\u7A0B\u5EA6\uFF0C\u4EE5\u53CA\u662F\u5426\u5BF9\u6280\u672F\u6709\u94BB\u7814\u7CBE\u795E\u3002\u5982\u679C\u4F60\u53EA\u662F\u4EE5\u719F\u7EC3\u4F7F\u7528 Vue \u6216\u8005 React \u6846\u67B6\u4F5C\u4E3A\u9760\u5C71\uFF0C\u800C JavaScript \u6280\u672F\u57FA\u7840\u80FD\u529B\u4E0D\u8FC7\u5173\uFF0C\u90A3\u4E48\u5C06\u5728\u884C\u4E1A\u4E2D\u4E3E\u6B65\u7EF4\u8270\u3002</p><p>\u81F3\u6B64\uFF0C\u4EE5\u6211\u591A\u5E74\u7684\u4ECE\u4E1A\u7ECF\u9A8C\u548C\u62DB\u8058\u7ECF\u9A8C\u6765\u770B\uFF0C\u672A\u6765\u4E92\u8054\u7F51\u884C\u4E1A\u5BF9\u5019\u9009\u4EBA\u7684\u80FD\u529B\u8981\u6C42\u53EA\u4F1A\u8D8A\u6765\u8D8A\u9AD8\uFF0C\u603B\u7ED3\u4E0B\u6765\u5C31\u662F\uFF1A\u624E\u5B9E\u638C\u63E1\u5E76\u52A0\u5F3A\u539F\u751F JavaScript \u7684\u6838\u5FC3\u539F\u7406\u53CA\u7F16\u7801\u529F\u5E95\u3001\u6DF1\u5165\u7406\u89E3\u524D\u7AEF\u6846\u67B6\u6E90\u4EE3\u7801\uFF0C\u5BF9\u4E8E\u63D0\u5347\u81EA\u5DF1\u7684\u524D\u7AEF\u6280\u672F\u80FD\u529B\u3001\u63D0\u9AD8\u804C\u4E1A\u751F\u6DAF\u5929\u82B1\u677F\u662F\u975E\u5E38\u6709\u5FC5\u8981\u7684\u3002</p><h2 id="\u6211\u8981\u5E26\u4F60\u600E\u4E48\u5B66" tabindex="-1"><a class="header-anchor" href="#\u6211\u8981\u5E26\u4F60\u600E\u4E48\u5B66" aria-hidden="true">#</a> \u6211\u8981\u5E26\u4F60\u600E\u4E48\u5B66</h2><p>\u90A3\u4E48\uFF0C\u600E\u6837\u624D\u80FD\u6709\u6548\u5730\u63D0\u5347\u539F\u751F JS \u80FD\u529B\uFF0C\u4ECE\u800C\u6446\u8131\u4E0A\u9762\u6240\u8BF4\u7684\u90A3\u4E9B\u56F0\u5883\u5462\uFF1F</p><p>\u8FD9\u4E2A\u4E13\u680F\u5C31\u662F\u4E3A\u5E2E\u4F60\u592F\u5B9E\u524D\u7AEF JavaScript \u6838\u5FC3\u57FA\u7840\u77E5\u8BC6\u800C\u5199\u5C31\u3002\u6211\u5C06\u56F4\u7ED5\u57FA\u7840\u539F\u7406\u3001\u6570\u7EC4\u3001\u5F02\u6B65\u7F16\u7A0B\u3001V8 \u5F15\u64CE\u51E0\u4E2A\u6838\u5FC3\u77E5\u8BC6\u70B9\u5C55\u5F00\uFF0C\u901A\u8FC7 4 \u4E2A\u6A21\u5757\u300122 \u8BB2\u5185\u5BB9\uFF0C\u5E26\u4F60\u6DF1\u6316 JavaScript \u5E95\u5C42\u539F\u7406\u3002</p><p>\u6A21\u5757\u4E00\uFF0C\u6211\u4F1A\u6DF1\u5165\u8BB2\u89E3 JavaScript \u6570\u636E\u7C7B\u578B\u3001\u7EE7\u627F\u3001\u95ED\u5305\u7B49\u6838\u5FC3\u57FA\u7840\u77E5\u8BC6\uFF0C\u5206\u6790\u5B83\u4EEC\u7684\u5E95\u5C42\u539F\u7406\u3002\u8FD9\u662F\u6784\u5EFA\u524D\u7AEF\u5DE5\u5177\u7684\u57FA\u7840\uFF0C\u53EA\u6709\u638C\u63E1\u597D\u8FD9\u90E8\u5206\u5185\u5BB9\uFF0C\u4F60\u624D\u80FD\u4E3A\u4EE5\u540E\u7684\u7F16\u7801\u80FD\u529B\u6253\u4E0B\u57FA\u7840\u3002</p><p>\u5E76\u4E14\u8FD9\u5176\u4E2D\u7684\u4E00\u4E9B\u77E5\u8BC6\u70B9\uFF0C\u6BD4\u5982\u6DF1\u6D45\u62F7\u8D1D\u548C\u81EA\u5DF1\u624B\u5DE5\u5B9E\u73B0 JSON.Stringify \u8FD9\u6837\u7684\u9898\u76EE\uFF0C\u662F\u5927\u5382\u9762\u8BD5\u5B98\u7ECF\u5E38\u4F1A\u95EE\u5230\u7684\u5185\u5BB9\uFF0C\u6240\u4EE5\u8FD9\u90E8\u5206\u6211\u5C06\u4EE5\u8FDB\u9636\u7EC3\u4E60\u7684\u5F62\u5F0F\u5E2E\u4F60\u8F7B\u677E\u638C\u63E1\u3002</p><p>\u6A21\u5757\u4E8C\uFF0C\u6211\u4F1A\u4ECB\u7ECD JavaScript \u7684\u6570\u7EC4\u76F8\u5173\u77E5\u8BC6\u3002\u8981\u77E5\u9053\uFF0C\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\uFF0C\u6570\u7EC4\u662F\u7ECF\u5E38\u4F1A\u7528\u5230\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u4F7F\u7528\u548C\u51FA\u73B0\u9891\u7387\u975E\u5E38\u4E4B\u9AD8\u3002\u6240\u4EE5\u6211\u4F1A\u4ECE\u6570\u7EC4\u539F\u7406\u3001\u6570\u7EC4\u6392\u5E8F\u4E24\u5927\u65B9\u5411\u5E26\u4F60\u4E86\u89E3\u5B83\uFF0C\u6BD4\u5982\u68B3\u7406\u6570\u7EC4 API\u3001\u5B9E\u73B0\u6570\u7EC4\u6241\u5E73\u5316\uFF0C\u4EE5\u53CA\u6570\u7EC4 sort \u65B9\u6CD5\u3002</p><p>\u638C\u63E1\u8FD9\u90E8\u5206\u77E5\u8BC6\uFF0C\u4F60\u53EF\u4EE5\u5728\u6BCF\u6B21\u5199\u524D\u7AEF\u4E1A\u52A1\u903B\u8F91\u3001\u5904\u7406\u4E00\u4E9B\u6570\u7EC4\u6570\u636E\u7684\u65F6\u5019\uFF0C\u4E0D\u7528\u518D\u53BB\u7FFB\u770B\u76F8\u5173\u7684\u6570\u7EC4 API \u6587\u6863\uFF0C\u4ECE\u800C\u63D0\u5347\u4F60\u7684\u5F00\u53D1\u6548\u7387\u3002</p><p>\u6B64\u5916\uFF0C\u7531\u4E8E Javascript \u8BED\u8A00\u7684\u6267\u884C\u73AF\u5883\u662F\u201C\u5355\u7EBF\u7A0B\u201D\uFF0C\u5982\u679C\u6709\u591A\u4E2A\u4EFB\u52A1\uFF0C\u5C31\u5FC5\u987B\u6392\u961F\uFF0C\u524D\u9762\u4E00\u4E2A\u4EFB\u52A1\u5B8C\u6210\uFF0C\u518D\u6267\u884C\u540E\u9762\u7684\u4EFB\u52A1\uFF0C\u56E0\u6B64\u5728\u6D4F\u89C8\u5668\u7AEF\u6BD4\u8F83\u8017\u65F6\u7684\u64CD\u4F5C\u90FD\u5E94\u8BE5\u8FDB\u884C\u5F02\u6B65\u64CD\u4F5C\u6765\u51CF\u5C11\u7B49\u5F85\u65F6\u95F4\u3002\u7531\u6B64\u53EF\u89C1\uFF0C\u5F02\u6B65\u7F16\u7A0B\u5728\u6D4F\u89C8\u5668\u7AEF\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u5982\u679C\u4E0D\u91C7\u7528\u5F02\u6B65\u7F16\u7A0B\u6A21\u5F0F\uFF0C\u5927\u91CF\u7684\u540C\u6B65\u4EE3\u7801\u4F1A\u9020\u6210\u6D4F\u89C8\u5668\u7684\u6027\u80FD\u6025\u5267\u4E0B\u964D\u3002</p><p>\u56E0\u6B64\uFF0C\u6A21\u5757\u4E09\u4F1A\u4ECE JavaScript \u6700\u57FA\u7840\u7684\u5F02\u6B65\u7F16\u7A0B\u65B9\u5F0F\u8BB2\u8D77\uFF0C\u6BD4\u5982 Promise\u3001Async/await\u3001Co \u7B49\u3002\u5F53\u638C\u63E1\u4E86 JavaScript \u5F02\u6B65\u7F16\u7A0B\u6E90\u7801\u7CBE\u9AD3\uFF0C\u4F60\u5C31\u53EF\u4EE5\u6446\u8131\u524D\u7AEF\u4EE3\u7801\u7684\u201C\u56DE\u8C03\u5730\u72F1\u201D\uFF0C\u66F4\u4F18\u96C5\u5730\u5B9E\u73B0\u5E76\u89E3\u51B3\u4E1A\u52A1\u573A\u666F\u7684\u590D\u6742\u95EE\u9898\u3001\u63D0\u5347\u9875\u9762\u6027\u80FD\u3002</p><p>\u6A21\u5757\u56DB\u662F\u6D4F\u89C8\u5668\u6838\u5FC3 V8 \u5F15\u64CE\u76F8\u5173\u7684\u5185\u5BB9\uFF0C\u5B83\u662F\u6267\u884C JavaScript \u4EE3\u7801\u7684\u7A0B\u5E8F\u6216\u89E3\u91CA\u5668\uFF0C\u53EF\u4EE5\u4F7F\u5F97 JS \u7684\u6267\u884C\u6027\u80FD\u5927\u5E45\u63D0\u5347\uFF0C\u8FD9\u4E5F\u662F\u76EE\u524D\u5927\u591A\u6570\u6D4F\u89C8\u5668\u666E\u904D\u4F7F\u7528\u7684\u5F15\u64CE\u3002</p><p>\u8FD9\u4E00\u6A21\u5757\u6211\u4F1A\u901A\u8FC7\u8BB2\u89E3\u6D4F\u89C8\u5668\u5783\u573E\u56DE\u6536\u673A\u5236\u3001\u6D4F\u89C8\u5668\u6838\u5FC3\u5F15\u64CE\u7684\u5DE5\u4F5C\u903B\u8F91\u7B49\u5185\u5BB9\uFF0C\u5E2E\u52A9\u4F60\u7406\u89E3 JavaScript \u4EE3\u7801\u662F\u5982\u4F55\u88AB V8 \u5F15\u64CE\u7F16\u8BD1\u548C\u6267\u884C\u7684\u3002\u8FD9\u5BF9\u4E8E\u5199\u51FA\u9AD8\u6027\u80FD\u7684 JavaScript \u4EE3\u7801\u5E2E\u52A9\u751A\u5927\u3002</p><p>\u5728\u6700\u540E\u7684\u5F69\u86CB\u90E8\u5206\uFF0C\u6211\u4E5F\u4F1A\u5E26\u4F60\u5256\u6790\u4E00\u4E9B\u4E92\u8054\u7F51\u5927\u5382\u7684\u9762\u8BD5\u9898\u76EE\uFF0C\u8BA9\u4F60\u771F\u6B63\u4E86\u89E3\u4E92\u8054\u7F51\u5927\u5382\u7684\u804C\u7EA7\u4F53\u7CFB\u548C\u9762\u8BD5\u5B9A\u7EA7\u6807\u51C6\uFF0C\u68B3\u7406\u9762\u8BD5\u601D\u8DEF\u548C\u524D\u7AEF\u77E5\u8BC6\u7684\u5B66\u4E60\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u81EA\u8EAB\u7684\u7A81\u7834\u548C\u63D0\u5347\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u6BCF\u4E00\u4E2A\u6A21\u5757\u7684\u6700\u540E\u6211\u90FD\u4F1A\u4E13\u95E8\u62FF\u51FA 1~2 \u8BB2\u6765\u5E26\u4F60\u5B9E\u64CD\uFF0C\u624B\u628A\u624B\u5E2E\u52A9\u4F60\u5B9E\u8DF5\uFF0C\u6BD4\u5982\u5B9E\u73B0\u4E00\u4E2A JSON.Stringify \u65B9\u6CD5\u3001\u624B\u5199 JS \u6570\u7EC4\u591A\u4E2A API \u7684\u5E95\u5C42\u5B9E\u73B0\u3001\u5B9E\u73B0\u4E00\u4E2A EventEmitter \u7B49\u3002\u8FD9\u79CD\u66F4\u8D34\u5408\u5B9E\u8DF5\u7684\u5B66\u4E60\u65B9\u5F0F\uFF0C\u4F1A\u6BD4\u4F60\u5929\u5929\u62B1\u7740\u7F16\u7A0B\u7684\u4E66\u5543\uFF0C\u5B66\u4E60\u6548\u7387\u8981\u9AD8\u5F88\u591A\u3002</p><ul><li>\u57FA\u77F3</li><li>\u6DF1\u5165\u6570\u7EC4</li><li>\u5F02\u6B65\u7F16\u7A0B</li><li>JS \u5F15\u64CE</li><li>\u5F69\u86CB</li></ul><h2 id="\u8BB2\u5E08\u5BC4\u8BED" tabindex="-1"><a class="header-anchor" href="#\u8BB2\u5E08\u5BC4\u8BED" aria-hidden="true">#</a> \u8BB2\u5E08\u5BC4\u8BED</h2><p>\u524D\u7AEF\u6280\u672F\u7684\u5FEB\u901F\u53D1\u5C55\u548C\u5145\u6EE1\u5E0C\u671B\u7684\u524D\u666F\uFF0C\u4E5F\u5438\u5F15\u4E86\u66F4\u591A\u4EBA\u52A0\u5165\u524D\u7AEF\u5DE5\u7A0B\u5E08\u7684\u884C\u5217\uFF0C\u5404\u79CD\u524D\u7AEF\u65B0\u6280\u672F\u3001\u65B0\u6846\u67B6\u7684\u51FA\u73B0\uFF0C\u4E5F\u5728\u8003\u9A8C\u524D\u7AEF\u5DE5\u7A0B\u5E08\u7684\u80FD\u529B\u3002\u90A3\u4E48\u5982\u4F55\u63D0\u5347\u6280\u672F\u80FD\u529B\u3001\u5EFA\u7ACB\u81EA\u5DF1\u7684\u201C\u6838\u5FC3\u7ADE\u4E89\u529B\u201D\uFF0C\u662F\u6BCF\u4E00\u4F4D\u4F18\u79C0\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08\u5E94\u8BE5\u601D\u8003\u7684\u95EE\u9898\u3002</p><p>\u5E0C\u671B\u4F60\u4E0D\u4EC5\u8DDF\u7740\u6211\u7684\u601D\u8DEF\u53BB\u7406\u89E3\u5185\u5BB9\u672C\u8EAB\uFF0C\u8FD8\u80FD\u5728\u5B66\u4E60\u8FC7\u7A0B\u4E2D\u5728 IDE \u91CC\u9762\u4EB2\u81EA\u52A8\u624B\u5B9E\u73B0\u4E00\u904D\uFF0C\u4ECE\u800C\u6DF1\u523B\u4F53\u4F1A\u7A0B\u5E8F\u5B9E\u73B0\u903B\u8F91\u7684\u4E00\u4E9B\u7EC6\u8282\uFF0C\u8FDB\u800C\u52A0\u6DF1\u5BF9\u6BCF\u4E00\u90E8\u5206\u77E5\u8BC6\u70B9\u7684\u7406\u89E3\uFF0C\u505A\u5230\u878D\u4F1A\u8D2F\u901A\u3002</p><p>\u4F60\u4E5F\u4E0D\u59A8\u7ED9\u81EA\u5DF1\u517B\u6210\u4E00\u4E2A\u597D\u4E60\u60EF\uFF0C\u6BCF\u770B\u5B8C\u4E00\u7BC7\u6587\u7AE0\u5C31\u5BF9\u77E5\u8BC6\u70B9\u8FDB\u884C\u603B\u7ED3\uFF0C\u5F62\u6210\u81EA\u5DF1\u7684\u5B66\u4E60\u601D\u7EF4\u8111\u56FE\uFF0C\u7B49\u5230\u5B66\u5B8C\u5168\u90E8\u8BFE\u7A0B\u4EE5\u540E\u518D\u6765\u56DE\u987E\uFF0C\u4EE5\u4FBF\u52A0\u6DF1\u77E5\u8BC6\u7406\u89E3\u3002</p><p>\u5E0C\u671B\u8FD9\u4E2A\u4E13\u680F\uFF0C\u80FD\u591F\u5E26\u4F60\u4E86\u89E3\u539F\u751F JS \u7684\u5E95\u5C42\u539F\u7406\uFF0C\u66F4\u597D\u5730\u638C\u63E1 JS \u6846\u67B6\u6E90\u7801\u7684\u4EE3\u7801\u5B9E\u73B0\u903B\u8F91\uFF0C\u5728\u5199\u4E1A\u52A1\u4EE3\u7801\u65F6\u53EF\u4EE5\u505A\u5230\u6E38\u5203\u6709\u4F59\uFF0C\u63D0\u5347\u5DE5\u4F5C\u6548\u7387\uFF0C\u52A0\u5F3A\u81EA\u8EAB\u6280\u672F\u50A8\u5907\uFF0C\u62FF\u9AD8\u85AA\uFF0C\u8FDB\u5927\u5382\uFF01</p><!--]-->`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/js/index.html.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var index_html$2 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$3]]);
var index_html$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/404.html.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var _404_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$2]]);
var _404_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404_html$1
}, Symbol.toStringTag, { value: "Module" }));
const data$r = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "\u6D4B\u8BD5",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u7EC4\u4EF6",
      "slug": "\u7EC4\u4EF6",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "readme.md"
};
var index_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$r
}, Symbol.toStringTag, { value: "Module" }));
const data$q = {
  "key": "v-198d0bf5",
  "path": "/js/1.html",
  "title": "01 | \u4EE3\u7801\u57FA\u672C\u529F\u6D4B\u8BD5\uFF08\u4E0A\uFF09\uFF1AJS \u7684\u6570\u636E\u7C7B\u578B\u4F60\u4E86\u89E3\u591A\u5C11\uFF1F",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u6570\u636E\u7C7B\u578B\u6982\u5FF5",
      "slug": "\u6570\u636E\u7C7B\u578B\u6982\u5FF5",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6570\u636E\u7C7B\u578B\u68C0\u6D4B",
      "slug": "\u6570\u636E\u7C7B\u578B\u68C0\u6D4B",
      "children": [
        {
          "level": 3,
          "title": "\u7B2C\u4E00\u79CD\u5224\u65AD\u65B9\u6CD5\uFF1Atypeof",
          "slug": "\u7B2C\u4E00\u79CD\u5224\u65AD\u65B9\u6CD5-typeof",
          "children": []
        },
        {
          "level": 3,
          "title": "\u7B2C\u4E8C\u79CD\u5224\u65AD\u65B9\u6CD5\uFF1Ainstanceof",
          "slug": "\u7B2C\u4E8C\u79CD\u5224\u65AD\u65B9\u6CD5-instanceof",
          "children": []
        },
        {
          "level": 3,
          "title": "\u7B2C\u4E09\u79CD\u5224\u65AD\u65B9\u6CD5\uFF1AObject.prototype.toString",
          "slug": "\u7B2C\u4E09\u79CD\u5224\u65AD\u65B9\u6CD5-object-prototype-tostring",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u6570\u636E\u7C7B\u578B\u8F6C\u6362",
      "slug": "\u6570\u636E\u7C7B\u578B\u8F6C\u6362",
      "children": [
        {
          "level": 3,
          "title": "\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362",
          "slug": "\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362",
          "children": []
        },
        {
          "level": 3,
          "title": "\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362",
          "slug": "\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u603B\u7ED3",
      "slug": "\u603B\u7ED3",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "js/1.md"
};
var _1_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$q
}, Symbol.toStringTag, { value: "Module" }));
const data$p = {
  "key": "v-1847770d",
  "path": "/js/10.html",
  "title": "10 | \u6570\u7EC4\u6392\u5E8F\uFF08\u4E0A\uFF09\uFF1A\u5982\u4F55\u7528 JS \u5B9E\u73B0\u5404\u79CD\u6570\u7EC4\u6392\u5E8F\uFF1F",
  "lang": "en-US",
  "frontmatter": {
    "title": "10 | \u6570\u7EC4\u6392\u5E8F\uFF08\u4E0A\uFF09\uFF1A\u5982\u4F55\u7528 JS \u5B9E\u73B0\u5404\u79CD\u6570\u7EC4\u6392\u5E8F\uFF1F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/10.md"
};
var _10_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$p
}, Symbol.toStringTag, { value: "Module" }));
const data$o = {
  "key": "v-19fc4fac",
  "path": "/js/11.html",
  "title": "11 | \u6570\u7EC4\u6392\u5E8F\uFF08\u4E0B\uFF09\uFF1Asort \u6392\u5E8F\u65B9\u6CD5\u7684\u5B9E\u73B0\u539F\u7406",
  "lang": "en-US",
  "frontmatter": {
    "title": "11 | \u6570\u7EC4\u6392\u5E8F\uFF08\u4E0B\uFF09\uFF1Asort \u6392\u5E8F\u65B9\u6CD5\u7684\u5B9E\u73B0\u539F\u7406"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/11.md"
};
var _11_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$o
}, Symbol.toStringTag, { value: "Module" }));
const data$n = {
  "key": "v-1bb1284b",
  "path": "/js/12.html",
  "title": "12 | \u8FDB\u9636\u7EC3\u4E60\uFF1A\u5E26\u4F60\u624B\u5199 JS \u6570\u7EC4\u591A\u4E2A\u65B9\u6CD5\u7684\u5E95\u5C42\u5B9E\u73B0",
  "lang": "en-US",
  "frontmatter": {
    "title": "12 | \u8FDB\u9636\u7EC3\u4E60\uFF1A\u5E26\u4F60\u624B\u5199 JS \u6570\u7EC4\u591A\u4E2A\u65B9\u6CD5\u7684\u5E95\u5C42\u5B9E\u73B0"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/12.md"
};
var _12_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$n
}, Symbol.toStringTag, { value: "Module" }));
const data$m = {
  "key": "v-1d6600ea",
  "path": "/js/13.html",
  "title": "13 | \u5F02\u6B65\u7F16\u7A0B\uFF08\u4E0A\uFF09\uFF1AJS \u5F02\u6B65\u7F16\u7A0B\u90FD\u6709\u54EA\u4E9B\u65B9\u6848\uFF1F",
  "lang": "en-US",
  "frontmatter": {
    "title": "13 | \u5F02\u6B65\u7F16\u7A0B\uFF08\u4E0A\uFF09\uFF1AJS \u5F02\u6B65\u7F16\u7A0B\u90FD\u6709\u54EA\u4E9B\u65B9\u6848\uFF1F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/13.md"
};
var _13_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$m
}, Symbol.toStringTag, { value: "Module" }));
const data$l = {
  "key": "v-1f1ad989",
  "path": "/js/14.html",
  "title": "14 | \u5F02\u6B65\u7F16\u7A0B\uFF08\u4E2D\uFF09\uFF1A\u5982\u4F55\u6DF1\u5165\u7406\u89E3\u5F02\u6B65\u7F16\u7A0B\u7684\u6838\u5FC3 Promise\uFF1F",
  "lang": "en-US",
  "frontmatter": {
    "title": "14 | \u5F02\u6B65\u7F16\u7A0B\uFF08\u4E2D\uFF09\uFF1A\u5982\u4F55\u6DF1\u5165\u7406\u89E3\u5F02\u6B65\u7F16\u7A0B\u7684\u6838\u5FC3 Promise\uFF1F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/14.md"
};
var _14_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$l
}, Symbol.toStringTag, { value: "Module" }));
const data$k = {
  "key": "v-20cfb228",
  "path": "/js/15.html",
  "title": "15 | \u5F02\u6B65\u7F16\u7A0B\uFF08\u4E0B\uFF09\uFF1A\u5982\u4F55\u7406\u89E3 Generator\u3001Async/await \u7B49\u5F02\u6B65\u7F16\u7A0B\u7684\u8BED\u6CD5\u7CD6\uFF1F",
  "lang": "en-US",
  "frontmatter": {
    "title": "15 | \u5F02\u6B65\u7F16\u7A0B\uFF08\u4E0B\uFF09\uFF1A\u5982\u4F55\u7406\u89E3 Generator\u3001Async/await \u7B49\u5F02\u6B65\u7F16\u7A0B\u7684\u8BED\u6CD5\u7CD6\uFF1F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/15.md"
};
var _15_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$k
}, Symbol.toStringTag, { value: "Module" }));
const data$j = {
  "key": "v-22848ac7",
  "path": "/js/16.html",
  "title": "16 | \u8FDB\u9636\u7EC3\u4E60\uFF08\u4E0A\uFF09\uFF1A\u600E\u6837\u8F7B\u677E\u5B9E\u73B0\u4E00\u4E2A EventEmitter\uFF1F",
  "lang": "en-US",
  "frontmatter": {
    "title": "16 | \u8FDB\u9636\u7EC3\u4E60\uFF08\u4E0A\uFF09\uFF1A\u600E\u6837\u8F7B\u677E\u5B9E\u73B0\u4E00\u4E2A EventEmitter\uFF1F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/16.md"
};
var _16_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$j
}, Symbol.toStringTag, { value: "Module" }));
const data$i = {
  "key": "v-24396366",
  "path": "/js/17.html",
  "title": "17 | \u8FDB\u9636\u7EC3\u4E60\uFF08\u4E0B\uFF09\uFF1A\u5982\u4F55\u5B9E\u73B0\u7B26\u5408 Promise/A+ \u89C4\u8303\u7684 Promise\uFF1F",
  "lang": "en-US",
  "frontmatter": {
    "title": "17 | \u8FDB\u9636\u7EC3\u4E60\uFF08\u4E0B\uFF09\uFF1A\u5982\u4F55\u5B9E\u73B0\u7B26\u5408 Promise/A+ \u89C4\u8303\u7684 Promise\uFF1F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/17.md"
};
var _17_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$i
}, Symbol.toStringTag, { value: "Module" }));
const data$h = {
  "key": "v-25ee3c05",
  "path": "/js/18.html",
  "title": "18 | \u5783\u573E\u56DE\u6536\uFF1A\u91CA\u653E\u5185\u5B58\uFF0C\u63D0\u5347\u6D4F\u89C8\u5668\u9875\u9762\u6027\u80FD",
  "lang": "en-US",
  "frontmatter": {
    "title": "18 | \u5783\u573E\u56DE\u6536\uFF1A\u91CA\u653E\u5185\u5B58\uFF0C\u63D0\u5347\u6D4F\u89C8\u5668\u9875\u9762\u6027\u80FD"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/18.md"
};
var _18_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$h
}, Symbol.toStringTag, { value: "Module" }));
const data$g = {
  "key": "v-27a314a4",
  "path": "/js/19.html",
  "title": "19 | \u4E8B\u4EF6\u8F6E\u8BE2\uFF1A\u5982\u4F55\u7406\u89E3\u6D4F\u89C8\u5668\u4E2D\u7684 EventLoop\uFF1F",
  "lang": "en-US",
  "frontmatter": {
    "title": "19 | \u4E8B\u4EF6\u8F6E\u8BE2\uFF1A\u5982\u4F55\u7406\u89E3\u6D4F\u89C8\u5668\u4E2D\u7684 EventLoop\uFF1F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/19.md"
};
var _19_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$g
}, Symbol.toStringTag, { value: "Module" }));
const data$f = {
  "key": "v-1b41e494",
  "path": "/js/2.html",
  "title": "02 | \u4EE3\u7801\u57FA\u672C\u529F\u6D4B\u8BD5\uFF08\u4E0B\uFF09\uFF1A\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2A\u6DF1\u6D45\u62F7\u8D1D\uFF1F",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u6D45\u62F7\u8D1D\u7684\u539F\u7406\u548C\u5B9E\u73B0",
      "slug": "\u6D45\u62F7\u8D1D\u7684\u539F\u7406\u548C\u5B9E\u73B0",
      "children": [
        {
          "level": 3,
          "title": "\u65B9\u6CD5\u4E00\uFF1Aobject.assign",
          "slug": "\u65B9\u6CD5\u4E00-object-assign",
          "children": []
        },
        {
          "level": 3,
          "title": "\u65B9\u6CD5\u4E8C\uFF1A\u6269\u5C55\u8FD0\u7B97\u7B26\u65B9\u5F0F",
          "slug": "\u65B9\u6CD5\u4E8C-\u6269\u5C55\u8FD0\u7B97\u7B26\u65B9\u5F0F",
          "children": []
        },
        {
          "level": 3,
          "title": "\u65B9\u6CD5\u4E09\uFF1Aconcat \u62F7\u8D1D\u6570\u7EC4",
          "slug": "\u65B9\u6CD5\u4E09-concat-\u62F7\u8D1D\u6570\u7EC4",
          "children": []
        },
        {
          "level": 3,
          "title": "\u65B9\u6CD5\u56DB\uFF1Aslice \u62F7\u8D1D\u6570\u7EC4",
          "slug": "\u65B9\u6CD5\u56DB-slice-\u62F7\u8D1D\u6570\u7EC4",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u624B\u5DE5\u5B9E\u73B0\u4E00\u4E2A\u6D45\u62F7\u8D1D",
      "slug": "\u624B\u5DE5\u5B9E\u73B0\u4E00\u4E2A\u6D45\u62F7\u8D1D",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6DF1\u62F7\u8D1D\u7684\u539F\u7406\u548C\u5B9E\u73B0",
      "slug": "\u6DF1\u62F7\u8D1D\u7684\u539F\u7406\u548C\u5B9E\u73B0",
      "children": [
        {
          "level": 3,
          "title": "\u65B9\u6CD5\u4E00\uFF1A\u4E5E\u4E10\u7248\uFF08JSON.stringify\uFF09",
          "slug": "\u65B9\u6CD5\u4E00-\u4E5E\u4E10\u7248-json-stringify",
          "children": []
        },
        {
          "level": 3,
          "title": "\u65B9\u6CD5\u4E8C\uFF1A\u57FA\u7840\u7248\uFF08\u624B\u5199\u9012\u5F52\u5B9E\u73B0\uFF09",
          "slug": "\u65B9\u6CD5\u4E8C-\u57FA\u7840\u7248-\u624B\u5199\u9012\u5F52\u5B9E\u73B0",
          "children": []
        },
        {
          "level": 3,
          "title": "\u65B9\u6CD5\u4E09\uFF1A\u6539\u8FDB\u7248\uFF08\u6539\u8FDB\u540E\u9012\u5F52\u5B9E\u73B0\uFF09",
          "slug": "\u65B9\u6CD5\u4E09-\u6539\u8FDB\u7248-\u6539\u8FDB\u540E\u9012\u5F52\u5B9E\u73B0",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u603B\u7ED3",
      "slug": "\u603B\u7ED3",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "js/2.md"
};
var _2_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$f
}, Symbol.toStringTag, { value: "Module" }));
const data$e = {
  "key": "v-4d2db24e",
  "path": "/js/20.html",
  "title": "20 | \u539F\u7406\u89E3\u6790\uFF1AJS \u4EE3\u7801\u662F\u5982\u4F55\u88AB\u6D4F\u89C8\u5668\u5F15\u64CE\u7F16\u8BD1\u3001\u6267\u884C\u7684\uFF1F",
  "lang": "en-US",
  "frontmatter": {
    "title": "20 | \u539F\u7406\u89E3\u6790\uFF1AJS \u4EE3\u7801\u662F\u5982\u4F55\u88AB\u6D4F\u89C8\u5668\u5F15\u64CE\u7F16\u8BD1\u3001\u6267\u884C\u7684\uFF1F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/20.md"
};
var _20_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$e
}, Symbol.toStringTag, { value: "Module" }));
const data$d = {
  "key": "v-4ee28aed",
  "path": "/js/21.html",
  "title": "21 | \u5F15\u64CE\u8FDB\u9636\uFF08\u4E0A\uFF09\uFF1A\u63A2\u7A76\u5B8F\u4EFB\u52A1 & \u5FAE\u4EFB\u52A1\u7684\u8FD0\u884C\u673A\u5236",
  "lang": "en-US",
  "frontmatter": {
    "title": "21 | \u5F15\u64CE\u8FDB\u9636\uFF08\u4E0A\uFF09\uFF1A\u63A2\u7A76\u5B8F\u4EFB\u52A1 & \u5FAE\u4EFB\u52A1\u7684\u8FD0\u884C\u673A\u5236"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/21.md"
};
var _21_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$d
}, Symbol.toStringTag, { value: "Module" }));
const data$c = {
  "key": "v-5097638c",
  "path": "/js/22.html",
  "title": "22 | \u5F15\u64CE\u8FDB\u9636\uFF08\u4E0B\uFF09\uFF1A\u5982\u4F55\u7406\u89E3 Process.nextTick \u7684\u539F\u7406\uFF1F",
  "lang": "en-US",
  "frontmatter": {
    "title": "22 | \u5F15\u64CE\u8FDB\u9636\uFF08\u4E0B\uFF09\uFF1A\u5982\u4F55\u7406\u89E3 Process.nextTick \u7684\u539F\u7406\uFF1F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/22.md"
};
var _22_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$c
}, Symbol.toStringTag, { value: "Module" }));
const data$b = {
  "key": "v-524c3c2b",
  "path": "/js/23.html",
  "title": "\u5F69\u86CB 1 | \u5982\u4F55\u5E94\u5BF9\u5927\u5382\u9762\u8BD5\u5B98\u7684\u7075\u9B42\u62F7\u95EE\uFF1F",
  "lang": "en-US",
  "frontmatter": {
    "title": "\u5F69\u86CB 1 | \u5982\u4F55\u5E94\u5BF9\u5927\u5382\u9762\u8BD5\u5B98\u7684\u7075\u9B42\u62F7\u95EE\uFF1F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/23.md"
};
var _23_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$b
}, Symbol.toStringTag, { value: "Module" }));
const data$a = {
  "key": "v-540114ca",
  "path": "/js/24.html",
  "title": "\u5F69\u86CB 2 | \u524D\u7AEF\u5F00\u53D1\u5982\u4F55\u6709\u9488\u5BF9\u6027\u5730\u5B66\u4E60\u7B97\u6CD5\uFF1F",
  "lang": "en-US",
  "frontmatter": {
    "title": "\u5F69\u86CB 2 | \u524D\u7AEF\u5F00\u53D1\u5982\u4F55\u6709\u9488\u5BF9\u6027\u5730\u5B66\u4E60\u7B97\u6CD5\uFF1F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/24.md"
};
var _24_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$a
}, Symbol.toStringTag, { value: "Module" }));
const data$9 = {
  "key": "v-55b5ed69",
  "path": "/js/25.html",
  "title": "\u7ED3\u675F\u8BED | \u9762\u5411\u672A\u6765\uFF0C\u6211\u4EEC\u8BE5\u5982\u4F55\u63D0\u5347\u81EA\u5DF1\uFF1F",
  "lang": "en-US",
  "frontmatter": {
    "title": "\u7ED3\u675F\u8BED | \u9762\u5411\u672A\u6765\uFF0C\u6211\u4EEC\u8BE5\u5982\u4F55\u63D0\u5347\u81EA\u5DF1\uFF1F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/25.md"
};
var _25_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$9
}, Symbol.toStringTag, { value: "Module" }));
const data$8 = {
  "key": "v-1cf6bd33",
  "path": "/js/3.html",
  "title": "03 | \u7EE7\u627F\u5B9E\u73B0\uFF1A\u63A2\u7A76 JS \u5E38\u89C1\u7684 6 \u79CD\u7EE7\u627F\u65B9\u5F0F",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u7EE7\u627F\u6982\u5FF5\u7684\u63A2\u7A76",
      "slug": "\u7EE7\u627F\u6982\u5FF5\u7684\u63A2\u7A76",
      "children": []
    },
    {
      "level": 2,
      "title": "JS \u5B9E\u73B0\u7EE7\u627F\u7684\u51E0\u79CD\u65B9\u5F0F",
      "slug": "js-\u5B9E\u73B0\u7EE7\u627F\u7684\u51E0\u79CD\u65B9\u5F0F",
      "children": [
        {
          "level": 3,
          "title": "\u7B2C\u4E00\u79CD\uFF1A\u539F\u578B\u94FE\u7EE7\u627F",
          "slug": "\u7B2C\u4E00\u79CD-\u539F\u578B\u94FE\u7EE7\u627F",
          "children": []
        },
        {
          "level": 3,
          "title": "\u7B2C\u4E8C\u79CD\uFF1A\u6784\u9020\u51FD\u6570\u7EE7\u627F\uFF08\u501F\u52A9 call\uFF09",
          "slug": "\u7B2C\u4E8C\u79CD-\u6784\u9020\u51FD\u6570\u7EE7\u627F-\u501F\u52A9-call",
          "children": []
        },
        {
          "level": 3,
          "title": "\u7B2C\u4E09\u79CD\uFF1A\u7EC4\u5408\u7EE7\u627F\uFF08\u524D\u4E24\u79CD\u7EC4\u5408\uFF09",
          "slug": "\u7B2C\u4E09\u79CD-\u7EC4\u5408\u7EE7\u627F-\u524D\u4E24\u79CD\u7EC4\u5408",
          "children": []
        },
        {
          "level": 3,
          "title": "\u7B2C\u56DB\u79CD\uFF1A\u539F\u578B\u5F0F\u7EE7\u627F",
          "slug": "\u7B2C\u56DB\u79CD-\u539F\u578B\u5F0F\u7EE7\u627F",
          "children": []
        },
        {
          "level": 3,
          "title": "\u7B2C\u4E94\u79CD\uFF1A\u5BC4\u751F\u5F0F\u7EE7\u627F",
          "slug": "\u7B2C\u4E94\u79CD-\u5BC4\u751F\u5F0F\u7EE7\u627F",
          "children": []
        },
        {
          "level": 3,
          "title": "\u7B2C\u516D\u79CD\uFF1A\u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F",
          "slug": "\u7B2C\u516D\u79CD-\u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F",
          "children": []
        },
        {
          "level": 3,
          "title": "ES6 \u7684 extends \u5173\u952E\u5B57\u5B9E\u73B0\u903B\u8F91",
          "slug": "es6-\u7684-extends-\u5173\u952E\u5B57\u5B9E\u73B0\u903B\u8F91",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u603B\u7ED3",
      "slug": "\u603B\u7ED3",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "js/3.md"
};
var _3_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$8
}, Symbol.toStringTag, { value: "Module" }));
const data$7 = {
  "key": "v-1eab95d2",
  "path": "/js/4.html",
  "title": "04 | \u7EE7\u627F\u8FDB\u9636\uFF1A\u5982\u4F55\u5B9E\u73B0 new\u3001apply\u3001call\u3001bind \u7684\u5E95\u5C42\u903B\u8F91\uFF1F",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u65B9\u6CD5\u7684\u57FA\u672C\u4ECB\u7ECD",
      "slug": "\u65B9\u6CD5\u7684\u57FA\u672C\u4ECB\u7ECD",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "js/4.md"
};
var _4_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$7
}, Symbol.toStringTag, { value: "Module" }));
const data$6 = {
  "key": "v-20606e71",
  "path": "/js/5.html",
  "title": "05 | \u51FD\u6570\u90A3\u4E9B\u4E8B\uFF1AJS \u95ED\u5305\u96BE\u70B9\u5256\u6790",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/5.md"
};
var _5_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$6
}, Symbol.toStringTag, { value: "Module" }));
const data$5 = {
  "key": "v-22154710",
  "path": "/js/6.html",
  "title": "06 | \u8FDB\u9636\u7EC3\u4E60\uFF1A\u5E26\u4F60\u4E00\u8D77\u5B9E\u73B0 JSON.Stringify \u65B9\u6CD5",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/6.md"
};
var _6_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$5
}, Symbol.toStringTag, { value: "Module" }));
const data$4 = {
  "key": "v-23ca1faf",
  "path": "/js/7.html",
  "title": "07 | \u6570\u7EC4\u539F\u7406\uFF08\u4E0A\uFF09\uFF1A\u5E2E\u4F60\u68B3\u7406\u773C\u82B1\u7F2D\u4E71\u7684\u6570\u7EC4 API",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/7.md"
};
var _7_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$4
}, Symbol.toStringTag, { value: "Module" }));
const data$3 = {
  "key": "v-257ef84e",
  "path": "/js/8.html",
  "title": "08 | \u6570\u7EC4\u539F\u7406\uFF08\u4E2D\uFF09\uFF1A\u5982\u4F55\u7406\u89E3 JS \u7684\u7C7B\u6570\u7EC4\uFF1F",
  "lang": "en-US",
  "frontmatter": {
    "title": "08 | \u6570\u7EC4\u539F\u7406\uFF08\u4E2D\uFF09\uFF1A\u5982\u4F55\u7406\u89E3 JS \u7684\u7C7B\u6570\u7EC4\uFF1F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/8.md"
};
var _8_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$3
}, Symbol.toStringTag, { value: "Module" }));
const data$2 = {
  "key": "v-2733d0ed",
  "path": "/js/9.html",
  "title": "09 | \u6570\u7EC4\u539F\u7406\uFF08\u4E0B\uFF09\uFF1A\u5B9E\u73B0\u6570\u7EC4\u6241\u5E73\u5316\u7684 6 \u79CD\u65B9\u5F0F",
  "lang": "en-US",
  "frontmatter": {
    "title": "09 | \u6570\u7EC4\u539F\u7406\uFF08\u4E0B\uFF09\uFF1A\u5B9E\u73B0\u6570\u7EC4\u6241\u5E73\u5316\u7684 6 \u79CD\u65B9\u5F0F"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "js/9.md"
};
var _9_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$2
}, Symbol.toStringTag, { value: "Module" }));
const data$1 = {
  "key": "v-2d0a9a6d",
  "path": "/js/",
  "title": "\u5F00\u7BC7\u8BCD | \u6253\u597D JS \u57FA\u77F3\uFF0C\u8D70\u7A33\u524D\u7AEF\u8FDB\u9636\u4E4B\u8DEF",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60\u8FD9\u95E8\u8BFE",
      "slug": "\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60\u8FD9\u95E8\u8BFE",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6211\u8981\u5E26\u4F60\u600E\u4E48\u5B66",
      "slug": "\u6211\u8981\u5E26\u4F60\u600E\u4E48\u5B66",
      "children": []
    },
    {
      "level": 2,
      "title": "\u8BB2\u5E08\u5BC4\u8BED",
      "slug": "\u8BB2\u5E08\u5BC4\u8BED",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "js/readme.md"
};
var index_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$1
}, Symbol.toStringTag, { value: "Module" }));
const data = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "layout": "404"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": null
};
var _404_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-container" }, _attrs))}><div class="theme-default-content"><h1>404</h1><blockquote>${serverRenderer.ssrInterpolate(getMsg())}</blockquote>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: vue.unref(homeLink) }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(vue.unref(homeText))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(vue.unref(homeText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/404.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$l
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Content = vue.resolveComponent("Content");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-default-content custom" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeContent.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$j = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = vue.computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(features).length) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "features" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(features), (feature) => {
          _push(`<div class="feature"><h2>${serverRenderer.ssrInterpolate(feature.title)}</h2><p>${serverRenderer.ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFeatures.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = vue.computed(() => frontmatter.value.footer);
    const footerHtml = vue.computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(footer)) {
        _push(`<!--[-->`);
        if (vue.unref(footerHtml)) {
          _push(`<div class="footer">${vue.unref(footer)}</div>`);
        } else {
          _push(`<div class="footer">${serverRenderer.ssrInterpolate(vue.unref(footer))}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFooter.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __default__ = vue.defineComponent({
  inheritAttrs: false
});
const _sfc_main$h = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = vueRouter.useRoute();
    const site = useSiteData();
    const { item } = vue.toRefs(props);
    const hasHttpProtocol = vue.computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = vue.computed(() => isLinkMailto(item.value.link) || isLinkTel(item.value.link));
    const linkTarget = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const isRouterLink = vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = vue.computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = vue.computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
      if (vue.unref(isRouterLink)) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
          class: { "router-link-active": vue.unref(isActive) },
          to: vue.unref(item).link,
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              _push2(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
              serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "before"),
                vue.createTextVNode(" " + vue.toDisplayString(vue.unref(item).text) + " ", 1),
                vue.renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "external-link",
          href: vue.unref(item).link,
          rel: vue.unref(linkRel),
          target: vue.unref(linkTarget),
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        _push(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(isBlankTarget)) {
          _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
}));
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/AutoLink.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = vue.computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroText = vue.computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = vue.computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = vue.computed(() => {
      if (!isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value)
        return null;
      const img = vue.h("img", {
        src: withBase(heroImage.value),
        alt: heroAlt.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, () => img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hero" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(HomeHeroImage, null, null, _parent));
      if (vue.unref(heroText)) {
        _push(`<h1 id="main-title">${serverRenderer.ssrInterpolate(vue.unref(heroText))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(tagline)) {
        _push(`<p class="description">${serverRenderer.ssrInterpolate(vue.unref(tagline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(actions).length) {
        _push(`<p class="actions"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(actions), (action) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$h, {
            key: action.text,
            class: ["action-button", [action.type]],
            item: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeHero.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "home" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$g, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(HomeContent, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Home.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = vue.computed(() => themeLocale.value.home || routeLocale.value);
    const navbarBrandTitle = vue.computed(() => siteLocale.value.title);
    const navbarBrandLogo = vue.computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = vue.h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, () => img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({ to: vue.unref(navbarBrandLink) }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavbarBrandLogo, null, null, _parent2, _scopeId));
            if (vue.unref(navbarBrandTitle)) {
              _push2(`<span class="${serverRenderer.ssrRenderClass([{ "can-hide": vue.unref(navbarBrandLogo) }, "site-name"])}"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(navbarBrandTitle))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.createVNode(NavbarBrandLogo),
              vue.unref(navbarBrandTitle) ? (vue.openBlock(), vue.createBlock("span", {
                key: 0,
                class: ["site-name", { "can-hide": vue.unref(navbarBrandLogo) }]
              }, vue.toDisplayString(vue.unref(navbarBrandTitle)), 3)) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarBrand.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = vue.toRefs(props);
    const dropdownAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const open = vue.ref(false);
    const route = vueRouter.useRoute();
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["navbar-dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="navbar-dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="arrow down"></span></button><button class="navbar-dropdown-title-mobile" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="${serverRenderer.ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$d, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="navbar-dropdown"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
              _push2(`<li class="navbar-dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="navbar-dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$h, { item: child }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="navbar-dropdown-subitem"${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$h, { item: grandchild }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(serverRenderer.ssrRenderComponent(_sfc_main$h, { item: child }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              vue.withDirectives(vue.createVNode("ul", { class: "navbar-dropdown" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                  return vue.openBlock(), vue.createBlock("li", {
                    key: child.text,
                    class: "navbar-dropdown-item"
                  }, [
                    child.children ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                      vue.createVNode("h4", { class: "navbar-dropdown-subtitle" }, [
                        child.link ? (vue.openBlock(), vue.createBlock(_sfc_main$h, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(child.text), 1))
                      ]),
                      vue.createVNode("ul", { class: "navbar-dropdown-subitem-wrapper" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(child.children, (grandchild) => {
                          return vue.openBlock(), vue.createBlock("li", {
                            key: grandchild.link,
                            class: "navbar-dropdown-subitem"
                          }, [
                            vue.createVNode(_sfc_main$h, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (vue.openBlock(), vue.createBlock(_sfc_main$h, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [vue.vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarDropdown.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unknown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = vue.computed(() => themeLocale.value.repo);
      const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = vue.computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = vue.computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return vue.computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return __spreadProps(__spreadValues({}, item), {
          children: item.children.map(resolveNavbarItem)
        });
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = vue.computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(navbarLinks).length) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "navbar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(navbarLinks), (item) => {
          _push(`<div class="navbar-item">`);
          if (item.children) {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$c, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$h, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarItems.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-dark-button",
        title: vue.unref(themeLocale).toggleDarkMode
      }, _attrs))}><svg style="${serverRenderer.ssrRenderStyle(!vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${serverRenderer.ssrRenderStyle(vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-sidebar-button",
        title: vue.unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = vue.ref(null);
    const navbarBrand = vue.ref(null);
    const linksWrapperMaxWidth = vue.ref(0);
    const linksWrapperStyle = vue.computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const enableDarkMode = vue.computed(() => themeLocale.value.darkMode);
    vue.onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavbarSearch = vue.resolveComponent("NavbarSearch");
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(`<span>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`</span><div class="navbar-items-wrapper" style="${serverRenderer.ssrRenderStyle(vue.unref(linksWrapperStyle))}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$b, { class: "can-hide" }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (vue.unref(enableDarkMode)) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$a, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (vue.unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(serverRenderer.ssrRenderComponent(_sfc_main$h, {
          class: "meta-item-label",
          item: vue.unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).lastUpdatedText)}: </span>`);
        _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="meta-item-info"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(lastUpdated))}</span>`);
            } else {
              return [
                vue.createVNode("span", { class: "meta-item-info" }, vue.toDisplayString(vue.unref(lastUpdated)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(contributors) && vue.unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${serverRenderer.ssrRenderAttr("title", `email: ${contributor.email}`)}>${serverRenderer.ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== vue.unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(prevNavLink) || vue.unref(nextNavLink)) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (vue.unref(prevNavLink)) {
          _push(`<span class="prev">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$h, { item: vue.unref(prevNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(nextNavLink)) {
          _push(`<span class="next">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$h, { item: vue.unref(nextNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$6, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Page.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = vue.toRefs(props);
    const route = vueRouter.useRoute();
    const router = vueRouter.useRouter();
    const isActive = vue.computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = vue.computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpen = vue.ref(true);
    const onClick = vue.ref(void 0);
    if (item.value.collapsible) {
      isOpen.value = isActive.value;
      onClick.value = () => {
        isOpen.value = !isOpen.value;
      };
      router.afterEach(() => {
        isOpen.value = isActive.value;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SidebarItem = vue.resolveComponent("SidebarItem", true);
      _push(`<li${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (vue.unref(item).link) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$h, {
          class: vue.unref(itemClass),
          item: vue.unref(item)
        }, null, _parent));
      } else {
        _push(`<p tabindex="0" class="${serverRenderer.ssrRenderClass(vue.unref(itemClass))}">${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(item).collapsible) {
          _push(`<span class="${serverRenderer.ssrRenderClass([isOpen.value ? "down" : "right", "arrow"])}"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      }
      if ((_a = vue.unref(item).children) == null ? void 0 : _a.length) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$d, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${serverRenderer.ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="sidebar-item-children"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
                _push2(serverRenderer.ssrRenderComponent(_component_SidebarItem, {
                  key: `${vue.unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: vue.unref(depth) + 1
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                vue.withDirectives(vue.createVNode("ul", { class: "sidebar-item-children" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                    return vue.openBlock(), vue.createBlock(_component_SidebarItem, {
                      key: `${vue.unref(depth)}${child.text}${child.link}`,
                      item: child,
                      depth: vue.unref(depth) + 1
                    }, null, 8, ["item", "depth"]);
                  }), 128))
                ], 512), [
                  [vue.vShow, isOpen.value]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarItems = useSidebarItems();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(sidebarItems).length) {
        _push(`<ul${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(sidebarItems), (item) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$4, {
            key: item.link || item.text,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItems.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$b, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$3, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = vue.computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const containerClass = vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    vue.onMounted(() => {
      const router = vueRouter.useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["theme-container", vue.unref(containerClass)]
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        if (vue.unref(shouldShowNavbar)) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$8, null, {
            before: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-after")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="sidebar-mask"></div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$2, null, {
          top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "page", {}, () => {
        if (vue.unref(frontmatter).home) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$f, null, null, _parent));
        } else {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$5, vue.mergeProps({
            key: vue.unref(page).path
          }, _attrs), {
            top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-top")
                ];
              }
            }),
            bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-bottom")
                ];
              }
            }),
            _: 3
          }, _parent));
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    "data-v-1605a430": "",
    class: "rich-text-wrap"
  }, _attrs))}><p data-nodeid="18315" class=""> \u6211\u4EEC\u4E0A\u4E00\u8BB2\u4ECB\u7ECD\u4E86 call\u3001apply\u3001bind \u7B49\u65B9\u6CD5\u7684\u5B9E\u73B0\uFF0C\u800C\u5728\u8FD9\u4E00\u8BB2\u4E2D\u6211\u5C06\u4F1A\u5E26\u4F60\u4E00\u8D77\u5256\u6790\u95ED\u5305\u8FD9\u4E2A\u96BE\u70B9\u3002 </p><p data-nodeid="18316"> JavaScript \u4E2D\u7684\u95ED\u5305\u662F\u76F8\u5F53\u91CD\u8981\u7684\u6982\u5FF5\uFF0C\u5E76\u4E14\u4E0E\u4F5C\u7528\u57DF\u76F8\u5173\u77E5\u8BC6\u7684\u6307\u5411\u5BC6\u5207\u76F8\u5173\uFF0C\u5728\u5927\u5382\u7684\u524D\u7AEF\u9762\u8BD5\u8FC7\u7A0B\u4E2D\u7ECF\u5E38\u4F1A\u88AB\u63D0\u53CA\u3002\u56E0\u6B64\u5E0C\u671B\u901A\u8FC7\u8FD9\u4E00\u8BB2\u7684\u5B66\u4E60\uFF0C\u4F60\u80FD\u591F\u5F7B\u5E95\u638C\u63E1\u5B83\u3002 </p><p data-nodeid="18317">\u6309\u7167\u60EF\u4F8B\uFF0C\u5728\u8BFE\u7A0B\u5F00\u59CB\u524D\u8BF7\u4F60\u5148\u601D\u8003\u51E0\u4E2A\u95EE\u9898\u3002</p><ol data-nodeid="18318"><li data-nodeid="18319"><p data-nodeid="18320">JavaScript \u4E2D\u7684\u4F5C\u7528\u57DF\u662F\u4EC0\u4E48\u610F\u601D?</p></li><li data-nodeid="18321"><p data-nodeid="18322">\u95ED\u5305\u4F1A\u5728\u54EA\u4E9B\u573A\u666F\u4E2D\u4F7F\u7528\uFF1F</p></li><li data-nodeid="18323"><p data-nodeid="18324"> \u901A\u8FC7\u5B9A\u65F6\u5668\u5FAA\u73AF\u8F93\u51FA\u81EA\u589E\u7684\u6570\u5B57\u901A\u8FC7 JS \u7684\u4EE3\u7801\u5982\u4F55\u5B9E\u73B0\uFF1F </p></li></ol><p data-nodeid="18325"> \u5728\u8BB2\u95ED\u5305\u4E4B\u524D\uFF0C\u6211\u8981\u5E26\u4F60\u770B\u4E00\u4E0B\u4F5C\u7528\u57DF\u76F8\u5173\u7684\u77E5\u8BC6\u70B9\uFF0C\u4EE5\u4FBF\u4F60\u66F4\u597D\u5730\u7406\u89E3\u672C\u8BB2\u5185\u5BB9\u3002 </p><h3 data-nodeid="18326">\u4F5C\u7528\u57DF\u57FA\u672C\u4ECB\u7ECD</h3><p data-nodeid="18327"> JavaScript \u7684\u4F5C\u7528\u57DF\u901A\u4FD7\u6765\u8BB2\uFF0C\u5C31\u662F\u6307\u53D8\u91CF\u80FD\u591F\u88AB\u8BBF\u95EE\u5230\u7684\u8303\u56F4\uFF0C\u5728 JavaScript \u4E2D\u4F5C\u7528\u57DF\u4E5F\u5206\u4E3A\u597D\u51E0\u79CD\uFF0CES5 \u4E4B\u524D\u53EA\u6709\u5168\u5C40\u4F5C\u7528\u57DF\u548C\u51FD\u6570\u4F5C\u7528\u57DF\u4E24\u79CD\u3002ES6 \u51FA\u73B0\u4E4B\u540E\uFF0C\u53C8\u65B0\u589E\u4E86\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u4E0B\u9762\u6211\u4EEC\u5C31\u6765\u770B\u4E0B\u8FD9\u4E09\u79CD\u4F5C\u7528\u57DF\u7684\u6982\u5FF5\uFF0C\u4E3A\u95ED\u5305\u7684\u5B66\u4E60\u6253\u597D\u57FA\u7840\u3002 </p><h4 data-nodeid="18328">\u5168\u5C40\u4F5C\u7528\u57DF</h4><p data-nodeid="18329"> \u5728\u7F16\u7A0B\u8BED\u8A00\u4E2D\uFF0C\u4E0D\u8BBA Java \u4E5F\u597D\uFF0CJavaScript \u4E5F\u7F62\uFF0C\u53D8\u91CF\u4E00\u822C\u90FD\u4F1A\u5206\u4E3A\u5168\u5C40\u53D8\u91CF\u548C\u5C40\u90E8\u53D8\u91CF\u4E24\u79CD\u3002\u90A3\u4E48\u53D8\u91CF\u5B9A\u4E49\u5728\u51FD\u6570\u5916\u90E8\uFF0C\u4EE3\u7801\u6700\u524D\u9762\u7684\u4E00\u822C\u60C5\u51B5\u4E0B\u90FD\u662F\u5168\u5C40\u53D8\u91CF\u3002 </p><p data-nodeid="18330"> \u5728 JavaScript \u4E2D\uFF0C\u5168\u5C40\u53D8\u91CF\u662F\u6302\u8F7D\u5728 window \u5BF9\u8C61\u4E0B\u7684\u53D8\u91CF\uFF0C\u6240\u4EE5\u5728\u7F51\u9875\u4E2D\u7684\u4EFB\u4F55\u4F4D\u7F6E\u4F60\u90FD\u53EF\u4EE5\u4F7F\u7528\u5E76\u4E14\u8BBF\u95EE\u5230\u8FD9\u4E2A\u5168\u5C40\u53D8\u91CF\u3002\u4E0B\u9762\u901A\u8FC7\u770B\u4E00\u6BB5\u4EE3\u7801\u6765\u8BF4\u660E\u4E00\u4E0B\u4EC0\u4E48\u662F\u5168\u5C40\u7684\u4F5C\u7528\u57DF\u3002 </p><div class="course-code-area"><div class="copy-btn"><div class="copy-icon"></div> \u590D\u5236\u4EE3\u7801 </div><pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-keyword">var</span> globalName = <span class="hljs-string">&#39;global&#39;</span>;
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getName</span>(<span class="hljs-params"></span>) </span>{ 
</div></li><li><div class="code-word">  <span class="hljs-built_in">console</span>.log(globalName) <span class="hljs-comment">// global</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">var</span> name = <span class="hljs-string">&#39;inner&#39;</span>
</div></li><li><div class="code-word">  <span class="hljs-built_in">console</span>.log(name) <span class="hljs-comment">// inner</span>
</div></li><li><div class="code-word">} 
</div></li><li><div class="code-word">getName();
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(name); <span class="hljs-comment">// </span>
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(globalName); <span class="hljs-comment">//global</span>
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setName</span>(<span class="hljs-params"></span>)</span>{ 
</div></li><li><div class="code-word">  vName = <span class="hljs-string">&#39;setName&#39;</span>;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">setName();
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(vName); <span class="hljs-comment">// setName</span>
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">window</span>.vName) <span class="hljs-comment">// setName</span>
</div></li></ol></code></pre></div><p data-nodeid="18332"> \u4ECE\u8FD9\u6BB5\u4EE3\u7801\u4E2D\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0CglobalName \u8FD9\u4E2A\u53D8\u91CF\u65E0\u8BBA\u5728\u4EC0\u4E48\u5730\u65B9\u90FD\u662F\u53EF\u4EE5\u88AB\u8BBF\u95EE\u5230\u7684\uFF0C\u6240\u4EE5\u5B83\u5C31\u662F\u5168\u5C40\u53D8\u91CF\u3002\u800C\u5728 getName \u51FD\u6570\u4E2D\u4F5C\u4E3A\u5C40\u90E8\u53D8\u91CF\u7684 name \u53D8\u91CF\u662F\u4E0D\u5177\u5907\u8FD9\u79CD\u80FD\u529B\u7684\u3002 </p><p data-nodeid="18333"> \u5982\u679C\u5728 JavaScript \u4E2D\u6240\u6709\u6CA1\u6709\u7ECF\u8FC7\u5B9A\u4E49\uFF0C\u800C\u76F4\u63A5\u88AB\u8D4B\u503C\u7684\u53D8\u91CF\u9ED8\u8BA4\u5C31\u662F\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\uFF0C\u6BD4\u5982\u4E0A\u9762\u4EE3\u7801\u4E2D setName \u51FD\u6570\u91CC\u9762\u7684 vName \u53D8\u91CF\u4E00\u6837\u3002 </p><p data-nodeid="18334"> \u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\u5168\u5C40\u53D8\u91CF\u4E5F\u662F\u62E5\u6709\u5168\u5C40\u7684\u4F5C\u7528\u57DF\uFF0C\u65E0\u8BBA\u4F60\u5728\u4F55\u5904\u90FD\u53EF\u4EE5\u4F7F\u7528\u5B83\uFF0C\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u8F93\u5165 window.vName \u7684\u65F6\u5019\uFF0C\u5C31\u53EF\u4EE5\u8BBF\u95EE\u5230 window \u4E0A\u6240\u6709\u5168\u5C40\u53D8\u91CF\u3002 </p><p data-nodeid="18335"> \u5F53\u7136\u5168\u5C40\u4F5C\u7528\u57DF\u6709\u76F8\u5E94\u7684\u7F3A\u70B9\uFF0C\u6211\u4EEC\u5B9A\u4E49\u5F88\u591A\u5168\u5C40\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u4F1A\u5BB9\u6613\u5F15\u8D77\u53D8\u91CF\u547D\u540D\u7684\u51B2\u7A81\uFF0C\u6240\u4EE5\u5728\u5B9A\u4E49\u53D8\u91CF\u7684\u65F6\u5019\u5E94\u8BE5\u6CE8\u610F\u4F5C\u7528\u57DF\u7684\u95EE\u9898\u3002 </p><h4 data-nodeid="18336">\u51FD\u6570\u4F5C\u7528\u57DF</h4><p data-nodeid="18337"> \u5728 JavaScript \u4E2D\uFF0C\u51FD\u6570\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u53EB\u4F5C\u51FD\u6570\u53D8\u91CF\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53EA\u80FD\u5728\u51FD\u6570\u5185\u90E8\u624D\u80FD\u8BBF\u95EE\u5230\u5B83\uFF0C\u6240\u4EE5\u5B83\u7684\u4F5C\u7528\u57DF\u4E5F\u5C31\u662F\u51FD\u6570\u7684\u5185\u90E8\uFF0C\u79F0\u4E3A\u51FD\u6570\u4F5C\u7528\u57DF\uFF0C\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u4E00\u6BB5\u4EE3\u7801\u3002 </p><div class="course-code-area"><div class="copy-btn"><div class="copy-icon"></div> \u590D\u5236\u4EE3\u7801 </div><pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getName</span> (<span class="hljs-params"></span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">var</span> name = <span class="hljs-string">&#39;inner&#39;</span>;
</div></li><li><div class="code-word">  <span class="hljs-built_in">console</span>.log(name); <span class="hljs-comment">//inner</span>
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">getName();
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(name);
</div></li></ol></code></pre></div><p data-nodeid="18339"> \u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0Cname \u8FD9\u4E2A\u53D8\u91CF\u662F\u5728 getName \u51FD\u6570\u4E2D\u8FDB\u884C\u5B9A\u4E49\u7684\uFF0C\u6240\u4EE5 name \u662F\u4E00\u4E2A\u5C40\u90E8\u7684\u53D8\u91CF\uFF0C\u5B83\u7684\u4F5C\u7528\u57DF\u5C31\u662F\u5728 getName \u8FD9\u4E2A\u51FD\u6570\u91CC\u8FB9\uFF0C\u4E5F\u79F0\u4F5C\u51FD\u6570\u4F5C\u7528\u57DF\u3002 </p><p data-nodeid="18340"> \u9664\u4E86\u8FD9\u4E2A\u51FD\u6570\u5185\u90E8\uFF0C\u5176\u4ED6\u5730\u65B9\u90FD\u662F\u4E0D\u80FD\u8BBF\u95EE\u5230\u5B83\u7684\u3002\u540C\u65F6\uFF0C\u5F53\u8FD9\u4E2A\u51FD\u6570\u88AB\u6267\u884C\u5B8C\u4E4B\u540E\uFF0C\u8FD9\u4E2A\u5C40\u90E8\u53D8\u91CF\u4E5F\u76F8\u5E94\u4F1A\u88AB\u9500\u6BC1\u3002\u6240\u4EE5\u4F60\u4F1A\u770B\u5230\u5728 getName \u51FD\u6570\u5916\u9762\u7684 name \u662F\u8BBF\u95EE\u4E0D\u5230\u7684\u3002 </p><p data-nodeid="18341">\u4E0B\u9762\u518D\u6765\u770B\u6700\u540E\u4E00\u4E2A\u5757\u7EA7\u4F5C\u7528\u57DF\u3002</p><h4 data-nodeid="18342">\u5757\u7EA7\u4F5C\u7528\u57DF</h4><p data-nodeid="18343"> ES6 \u4E2D\u65B0\u589E\u4E86\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u6700\u76F4\u63A5\u7684\u8868\u73B0\u5C31\u662F\u65B0\u589E\u7684 let \u5173\u952E\u8BCD\uFF0C\u4F7F\u7528 let \u5173\u952E\u8BCD\u5B9A\u4E49\u7684\u53D8\u91CF\u53EA\u80FD\u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\u88AB\u8BBF\u95EE\uFF0C\u6709\u201C\u6682\u65F6\u6027\u6B7B\u533A\u201D\u7684\u7279\u70B9\uFF0C\u4E5F\u5C31\u662F\u8BF4\u8FD9\u4E2A\u53D8\u91CF\u5728\u5B9A\u4E49\u4E4B\u524D\u662F\u4E0D\u80FD\u88AB\u4F7F\u7528\u7684\u3002 </p><p data-nodeid="18344"> \u542C\u8D77\u6765\u597D\u50CF\u8FD8\u4E0D\u662F\u5F88\u80FD\u7406\u89E3\u5757\u7EA7\u4F5C\u7528\u57DF\u7684\u610F\u601D\uFF0C\u90A3\u4E48\u6211\u4EEC\u6765\u4E3E\u4E2A\u66F4\u5F62\u8C61\u4F8B\u5B50\uFF0C\u770B\u770B\u5230\u5E95\u54EA\u4E9B\u624D\u662F\u5757\u7EA7\u4F5C\u7528\u57DF\u5462\uFF1F\u5176\u5B9E\u5C31\u662F\u5728 JS \u7F16\u7801\u8FC7\u7A0B\u4E2D if \u8BED\u53E5\u53CA for \u8BED\u53E5\u540E\u9762 {...} \u8FD9\u91CC\u9762\u6240\u5305\u62EC\u7684\uFF0C\u5C31\u662F\u5757\u7EA7\u4F5C\u7528\u57DF\u3002 </p><p data-nodeid="18345">\u4E0B\u9762\u7ED3\u5408\u4E00\u6BB5\u4EE3\u7801\u6765\u8BF4\u660E\u3002</p><div class="course-code-area"><div class="copy-btn"><div class="copy-icon"></div> \u590D\u5236\u4EE3\u7801 </div><pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-built_in">console</span>.log(a) <span class="hljs-comment">//a is not defined</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">if</span>(<span class="hljs-literal">true</span>){
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> a = <span class="hljs-string">&#39;123&#39;</span>\uFF1B
</div></li><li><div class="code-word">  <span class="hljs-built_in">console</span>.log(a)\uFF1B <span class="hljs-comment">// 123</span>
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(a) <span class="hljs-comment">//a is not defined</span>
</div></li></ol></code></pre></div><p data-nodeid="18347"> \u4ECE\u8FD9\u6BB5\u4EE3\u7801\u53EF\u4EE5\u770B\u51FA\uFF0C\u53D8\u91CF a \u662F\u5728 if \u8BED\u53E5{...} \u4E2D\u7531 let\xA0\u5173\u952E\u8BCD\u8FDB\u884C\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u6240\u4EE5\u5B83\u7684\u4F5C\u7528\u57DF\u662F if \u8BED\u53E5\u62EC\u53F7\u4E2D\u7684\u90A3\u90E8\u5206\uFF0C\u800C\u5728\u5916\u9762\u8FDB\u884C\u8BBF\u95EE a \u53D8\u91CF\u662F\u4F1A\u62A5\u9519\u7684\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u4E0D\u662F\u5B83\u7684\u4F5C\u7528\u57DF\u3002\u6240\u4EE5\u5728 if \u4EE3\u7801\u5757\u7684\u524D\u540E\u8F93\u51FA a \u8FD9\u4E2A\u53D8\u91CF\u7684\u7ED3\u679C\uFF0C\u63A7\u5236\u53F0\u4F1A\u663E\u793A a \u5E76\u6CA1\u6709\u5B9A\u4E49\u3002 </p><p data-nodeid="18348"> \u90A3\u4E48\u6709\u4E86\u4E0A\u9762\u8FD9\u51E0\u79CD\u4F5C\u7528\u57DF\u7684\u6982\u5FF5\u505A\u94FA\u57AB\u4E4B\u540E\uFF0C\u4E0B\u9762\u6211\u4EEC\u5C31\u53EF\u4EE5\u6765\u5B66\u4E60\u95ED\u5305\u7684\u6982\u5FF5\u3002 </p><h3 data-nodeid="18349">\u4EC0\u4E48\u662F\u95ED\u5305\uFF1F</h3><p data-nodeid="18350">\u5148\u6765\u770B\u4E0B\u7EA2\u5B9D\u4E66\u4E0A\u548C MDN \u4E0A\u7ED9\u51FA\u7684\u95ED\u5305\u7684\u6982\u5FF5\u3002</p><blockquote data-nodeid="18351"><p data-nodeid="18352"> \u7EA2\u5B9D\u4E66\u95ED\u5305\u7684\u5B9A\u4E49\uFF1A\u95ED\u5305\u662F\u6307\u6709\u6743\u8BBF\u95EE\u53E6\u5916\u4E00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u7684\u51FD\u6570\u3002<br> MDN\uFF1A\u4E00\u4E2A\u51FD\u6570\u548C\u5BF9\u5176\u5468\u56F4\u72B6\u6001\u7684\u5F15\u7528\u6346\u7ED1\u5728\u4E00\u8D77\uFF08\u6216\u8005\u8BF4\u51FD\u6570\u88AB\u5F15\u7528\u5305\u56F4\uFF09\uFF0C\u8FD9\u6837\u7684\u7EC4\u5408\u5C31\u662F\u95ED\u5305\uFF08closure\uFF09\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u95ED\u5305\u8BA9\u4F60\u53EF\u4EE5\u5728\u4E00\u4E2A\u5185\u5C42\u51FD\u6570\u4E2D\u8BBF\u95EE\u5230\u5176\u5916\u5C42\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u3002 </p></blockquote><p data-nodeid="18353"> \u4E4D\u4E00\u770B\u4E0A\u9762\u7684\u4E24\u4E2A\u6BD4\u8F83\u5B98\u65B9\u7684\u5B9A\u4E49\uFF0C\u5F88\u96BE\u8BA9\u4EBA\u7406\u89E3\u6E05\u6670\uFF0C\u5C24\u5176\u662F MDN \u7684\u5173\u4E8E\u95ED\u5305\u7684\u5B9A\u4E49\uFF0C\u771F\u7684\u6BD4\u8F83\u8BA9\u4EBA\u201C\u5934\u6655\u201D\uFF0C\u90A3\u4E48\u73B0\u5728\u5C31\u548C\u4F60\u8BF4\u8BF4\u6211\u662F\u600E\u4E48\u7406\u89E3\u7684\u3002 </p><h4 data-nodeid="18354">\u95ED\u5305\u7684\u57FA\u672C\u6982\u5FF5</h4><p data-nodeid="18355"> \u6211\u5728\u8FD9\u91CC\u5148\u901A\u4FD7\u5730\u8BB2\u89E3\u4E00\u4E0B\uFF1A\u95ED\u5305\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u53EF\u4EE5\u8BBF\u95EE\u5176\u4ED6\u51FD\u6570\u5185\u90E8\u53D8\u91CF\u7684<strong data-nodeid="18451">\u51FD\u6570</strong>\u3002\u5373\u4E00\u4E2A\u5B9A\u4E49\u5728\u51FD\u6570\u5185\u90E8\u7684\u51FD\u6570\uFF0C\u6216\u8005\u76F4\u63A5\u8BF4\u95ED\u5305\u662F\u4E2A\u5185\u5D4C\u51FD\u6570\u4E5F\u53EF\u4EE5\u3002 </p><p data-nodeid="18356"> \u56E0\u4E3A\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u51FD\u6570\u5185\u90E8\u53D8\u91CF\u662F\u65E0\u6CD5\u5728\u5916\u90E8\u8BBF\u95EE\u7684\uFF08\u5373\u5168\u5C40\u53D8\u91CF\u548C\u5C40\u90E8\u53D8\u91CF\u7684\u533A\u522B\uFF09\uFF0C\u56E0\u6B64\u4F7F\u7528\u95ED\u5305\u7684\u4F5C\u7528\uFF0C\u5C31\u5177\u5907\u5B9E\u73B0\u4E86\u80FD\u5728\u5916\u90E8\u8BBF\u95EE\u67D0\u4E2A\u51FD\u6570\u5185\u90E8\u53D8\u91CF\u7684\u529F\u80FD\uFF0C\u8BA9\u8FD9\u4E9B\u5185\u90E8\u53D8\u91CF\u7684\u503C\u59CB\u7EC8\u53EF\u4EE5\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\u3002\u4E0B\u9762\u6211\u4EEC\u901A\u8FC7\u4EE3\u7801\u5148\u6765\u770B\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u3002 </p><div class="course-code-area"><div class="copy-btn"><div class="copy-icon"></div> \u590D\u5236\u4EE3\u7801 </div><pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fun1</span>(<span class="hljs-params"></span>) </span>{
</div></li><li><div class="code-word">	<span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>;
</div></li><li><div class="code-word">	<span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
</div></li><li><div class="code-word">		<span class="hljs-built_in">console</span>.log(a);
</div></li><li><div class="code-word">	};
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">fun1();
</div></li><li><div class="code-word"><span class="hljs-keyword">var</span> result = fun1();
</div></li><li><div class="code-word">result();  <span class="hljs-comment">// 1</span>
</div></li></ol></code></pre></div><p data-nodeid="18358"> \u7ED3\u5408\u95ED\u5305\u7684\u6982\u5FF5\uFF0C\u6211\u4EEC\u628A\u8FD9\u6BB5\u4EE3\u7801\u653E\u5230\u63A7\u5236\u53F0\u6267\u884C\u4E00\u4E0B\uFF0C\u5C31\u53EF\u4EE5\u53D1\u73B0\u6700\u540E\u8F93\u51FA\u7684\u7ED3\u679C\u662F 1\uFF08\u5373 a \u53D8\u91CF\u7684\u503C\uFF09\u3002\u90A3\u4E48\u53EF\u4EE5\u5F88\u6E05\u695A\u5730\u53D1\u73B0\uFF0Ca \u53D8\u91CF\u4F5C\u4E3A\u4E00\u4E2A fun1 \u51FD\u6570\u7684\u5185\u90E8\u53D8\u91CF\uFF0C\u6B63\u5E38\u60C5\u51B5\u4E0B\u4F5C\u4E3A\u51FD\u6570\u5185\u7684\u5C40\u90E8\u53D8\u91CF\uFF0C\u662F\u65E0\u6CD5\u88AB\u5916\u90E8\u8BBF\u95EE\u5230\u7684\u3002\u4F46\u662F\u901A\u8FC7\u95ED\u5305\uFF0C\u6211\u4EEC\u6700\u540E\u8FD8\u662F\u53EF\u4EE5\u62FF\u5230 a \u53D8\u91CF\u7684\u503C\u3002 </p><p data-nodeid="18359"> \u73B0\u5728\u7ED3\u5408\u7740\u4E0A\u9762\u90A3\u6BB5\u95ED\u5305\u7684\u6982\u5FF5\uFF0C\u4F60\u662F\u5426\u80FD\u5F88\u6E05\u6670\u5730\u4E86\u89E3\u95ED\u5305\u7684\u4F5C\u7528\u4E86\u5462\uFF1F\u4E0D\u6E05\u695A\u7684\u8BDD\uFF0C\u53EF\u4EE5\u518D\u591A\u4F53\u4F1A\u4E00\u4E0B\u8FD9\u6BB5\u4EE3\u7801\u3002 </p><h4 data-nodeid="18360">\u95ED\u5305\u4EA7\u751F\u7684\u539F\u56E0</h4><p data-nodeid="18361"> \u6211\u4EEC\u5728\u524D\u9762\u4ECB\u7ECD\u4E86\u4F5C\u7528\u57DF\u7684\u6982\u5FF5\uFF0C\u90A3\u4E48\u4F60\u8FD8\u9700\u8981\u660E\u767D\u4F5C\u7528\u57DF\u94FE\u7684\u57FA\u672C\u6982\u5FF5\u3002\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u5F53\u8BBF\u95EE\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u4EE3\u7801\u89E3\u91CA\u5668\u4F1A\u9996\u5148\u5728\u5F53\u524D\u7684\u4F5C\u7528\u57DF\u67E5\u627E\uFF0C\u5982\u679C\u6CA1\u627E\u5230\uFF0C\u5C31\u53BB\u7236\u7EA7\u4F5C\u7528\u57DF\u53BB\u67E5\u627E\uFF0C\u76F4\u5230\u627E\u5230\u8BE5\u53D8\u91CF\u6216\u8005\u4E0D\u5B58\u5728\u7236\u7EA7\u4F5C\u7528\u57DF\u4E2D\uFF0C\u8FD9\u6837\u7684\u94FE\u8DEF\u5C31\u662F\u4F5C\u7528\u57DF\u94FE\u3002 </p><p data-nodeid="18362"> \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6BCF\u4E00\u4E2A\u5B50\u51FD\u6570\u90FD\u4F1A\u62F7\u8D1D\u4E0A\u7EA7\u7684\u4F5C\u7528\u57DF\uFF0C\u5F62\u6210\u4E00\u4E2A\u4F5C\u7528\u57DF\u7684\u94FE\u6761\u3002\u90A3\u4E48\u6211\u4EEC\u8FD8\u662F\u901A\u8FC7\u4E0B\u9762\u7684\u4EE3\u7801\u6765\u8BE6\u7EC6\u8BF4\u660E\u4E00\u4E0B\u4F5C\u7528\u57DF\u94FE\u3002 </p><div class="course-code-area"><div class="copy-btn"><div class="copy-icon"></div> \u590D\u5236\u4EE3\u7801 </div><pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>;
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fun1</span>(<span class="hljs-params"></span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>
</div></li><li><div class="code-word">  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fun2</span>(<span class="hljs-params"></span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-keyword">var</span> a = <span class="hljs-number">3</span>;
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(a);<span class="hljs-comment">//3</span>
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">}
</div></li></ol></code></pre></div><p data-nodeid="18364"> \u4ECE\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0Cfun1 \u51FD\u6570\u7684\u4F5C\u7528\u57DF\u6307\u5411\u5168\u5C40\u4F5C\u7528\u57DF\uFF08window\uFF09\u548C\u5B83\u81EA\u5DF1\u672C\u8EAB\uFF1Bfun2 \u51FD\u6570\u7684\u4F5C\u7528\u57DF\u6307\u5411\u5168\u5C40\u4F5C\u7528\u57DF \uFF08window\uFF09\u3001fun1 \u548C\u5B83\u672C\u8EAB\uFF1B\u800C\u4F5C\u7528\u57DF\u662F\u4ECE\u6700\u5E95\u5C42\u5411\u4E0A\u627E\uFF0C\u76F4\u5230\u627E\u5230\u5168\u5C40\u4F5C\u7528\u57DF window \u4E3A\u6B62\uFF0C\u5982\u679C\u5168\u5C40\u8FD8\u6CA1\u6709\u7684\u8BDD\u5C31\u4F1A\u62A5\u9519\u3002 </p><p data-nodeid="18365"> \u90A3\u4E48\u8FD9\u5C31\u5F88\u5F62\u8C61\u5730\u8BF4\u660E\u4E86\u4EC0\u4E48\u662F\u4F5C\u7528\u57DF\u94FE\uFF0C\u5373\u5F53\u524D\u51FD\u6570\u4E00\u822C\u90FD\u4F1A\u5B58\u5728\u4E0A\u5C42\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u7684\u5F15\u7528\uFF0C\u90A3\u4E48\u4ED6\u4EEC\u5C31\u5F62\u6210\u4E86\u4E00\u6761\u4F5C\u7528\u57DF\u94FE\u3002 </p><p data-nodeid="18366"> \u7531\u6B64\u53EF\u89C1\uFF0C\u95ED\u5305\u4EA7\u751F\u7684\u672C\u8D28\u5C31\u662F\uFF1A<strong data-nodeid="18465">\u5F53\u524D\u73AF\u5883\u4E2D\u5B58\u5728\u6307\u5411\u7236\u7EA7\u4F5C\u7528\u57DF\u7684\u5F15\u7528</strong>\u3002\u90A3\u4E48\u8FD8\u662F\u62FF\u4E0A\u7684\u4EE3\u7801\u4E3E\u4F8B\u3002 </p><div class="course-code-area"><div class="copy-btn"><div class="copy-icon"></div> \u590D\u5236\u4EE3\u7801 </div><pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fun1</span>(<span class="hljs-params"></span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>
</div></li><li><div class="code-word">  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fun2</span>(<span class="hljs-params"></span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(a);  <span class="hljs-comment">//2</span>
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> fun2;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-keyword">var</span> result = fun1();
</div></li><li><div class="code-word">result();
</div></li></ol></code></pre></div><p data-nodeid="18368"><img src="https://s0.lgstatic.com/i/image2/M01/06/F3/Cip5yGAGp-qABNSNAAUwQ25mVao838.png" alt="\u5218\u70E8\u7684js.png" data-nodeid="18468"></p><p data-nodeid="18369"> \u4ECE\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u53EF\u4EE5\u770B\u51FA\uFF0C\u8FD9\u91CC result \u4F1A\u62FF\u5230\u7236\u7EA7\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\uFF0C\u8F93\u51FA 2\u3002\u56E0\u4E3A\u5728\u5F53\u524D\u73AF\u5883\u4E2D\uFF0C\u542B\u6709\u5BF9 fun2 \u51FD\u6570\u7684\u5F15\u7528\uFF0Cfun2 \u51FD\u6570\u6070\u6070\u5F15\u7528\u4E86 window\u3001fun1 \u548C fun2 \u7684\u4F5C\u7528\u57DF\u3002\u56E0\u6B64 fun2 \u51FD\u6570\u662F\u53EF\u4EE5\u8BBF\u95EE\u5230 fun1 \u51FD\u6570\u7684\u4F5C\u7528\u57DF\u7684\u53D8\u91CF\u3002 </p><p data-nodeid="18370"> \u90A3\u662F\u4E0D\u662F\u53EA\u6709\u8FD4\u56DE\u51FD\u6570\u624D\u7B97\u662F\u4EA7\u751F\u4E86\u95ED\u5305\u5462\uFF1F\u5176\u5B9E\u4E5F\u4E0D\u662F\uFF0C\u56DE\u5230\u95ED\u5305\u7684\u672C\u8D28\uFF0C<strong data-nodeid="18475">\u6211\u4EEC\u53EA\u9700\u8981\u8BA9\u7236\u7EA7\u4F5C\u7528\u57DF\u7684\u5F15\u7528\u5B58\u5728\u5373\u53EF</strong>\uFF0C\u56E0\u6B64\u8FD8\u53EF\u4EE5\u8FD9\u4E48\u6539\u4EE3\u7801\uFF0C\u5982\u4E0B\u6240\u793A\u3002 </p><div class="course-code-area"><div class="copy-btn"><div class="copy-icon"></div> \u590D\u5236\u4EE3\u7801 </div><pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-keyword">var</span> fun3;
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fun1</span>(<span class="hljs-params"></span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>
</div></li><li><div class="code-word">  fun3 = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(a);
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">fun1();
</div></li><li><div class="code-word">fun3();
</div></li></ol></code></pre></div><p data-nodeid="18372"> \u53EF\u4EE5\u770B\u51FA\uFF0C\u5176\u4E2D\u5B9E\u73B0\u7684\u7ED3\u679C\u548C\u524D\u4E00\u6BB5\u4EE3\u7801\u7684\u6548\u679C\u5176\u5B9E\u662F\u4E00\u6837\u7684\uFF0C\u5C31\u662F\u5728\u7ED9 fun3 \u51FD\u6570\u8D4B\u503C\u540E\uFF0Cfun3 \u51FD\u6570\u5C31\u62E5\u6709\u4E86 window\u3001fun1 \u548C fun3 \u672C\u8EAB\u8FD9\u51E0\u4E2A\u4F5C\u7528\u57DF\u7684\u8BBF\u95EE\u6743\u9650\uFF1B\u7136\u540E\u8FD8\u662F\u4ECE\u4E0B\u5F80\u4E0A\u67E5\u627E\uFF0C\u76F4\u5230\u627E\u5230 fun1 \u7684\u4F5C\u7528\u57DF\u4E2D\u5B58\u5728 a \u8FD9\u4E2A\u53D8\u91CF\uFF1B\u56E0\u6B64\u8F93\u51FA\u7684\u7ED3\u679C\u8FD8\u662F 2\uFF0C\u6700\u540E\u4EA7\u751F\u4E86\u95ED\u5305\uFF0C\u5F62\u5F0F\u53D8\u4E86\uFF0C\u672C\u8D28\u6CA1\u6709\u6539\u53D8\u3002 </p><p data-nodeid="18373"> \u56E0\u6B64\u6700\u540E\u8FD4\u56DE\u7684\u4E0D\u7BA1\u662F\u4E0D\u662F\u51FD\u6570\uFF0C\u4E5F\u90FD\u4E0D\u80FD\u8BF4\u660E\u6CA1\u6709\u4EA7\u751F\u95ED\u5305\u3002\u8BB2\u5230\u8FD9\u91CC\u4F60\u8FD9\u91CC\u53EF\u4EE5\u518D\u6DF1\u5165\u4F53\u4F1A\u4E00\u4E0B\u95ED\u5305\u7684\u5185\u6DB5\u3002 </p><h4 data-nodeid="18374">\u95ED\u5305\u7684\u8868\u73B0\u5F62\u5F0F</h4><p data-nodeid="18375"> \u90A3\u4E48\u660E\u767D\u4E86\u95ED\u5305\u7684\u672C\u8D28\u4E4B\u540E\uFF0C\u6211\u4EEC\u6765\u770B\u770B\u95ED\u5305\u7684\u8868\u73B0\u5F62\u5F0F\u53CA\u5E94\u7528\u573A\u666F\u5230\u5E95\u6709\u54EA\u4E9B\u5462\uFF1F\u6211\u603B\u7ED3\u4E86\u5927\u6982\u6709\u56DB\u79CD\u573A\u666F\u3002 </p><p data-nodeid="18376"><strong data-nodeid="18484">1</strong>. \u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E0A\u9762\u8BB2\u539F\u56E0\u7684\u65F6\u5019\u5DF2\u7ECF\u8BF4\u8FC7\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u8D58\u8FF0\u4E86\u3002 </p><p data-nodeid="18377"><strong data-nodeid="18489">2</strong>. \u5728\u5B9A\u65F6\u5668\u3001\u4E8B\u4EF6\u76D1\u542C\u3001Ajax \u8BF7\u6C42\u3001Web Workers \u6216\u8005\u4EFB\u4F55\u5F02\u6B65\u4E2D\uFF0C\u53EA\u8981\u4F7F\u7528\u4E86\u56DE\u8C03\u51FD\u6570\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u5728\u4F7F\u7528\u95ED\u5305\u3002\u8BF7\u770B\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u8FD9\u4E9B\u90FD\u662F\u5E73\u5E38\u5F00\u53D1\u4E2D\u7528\u5230\u7684\u5F62\u5F0F\u3002 </p><div class="course-code-area"><div class="copy-btn"><div class="copy-icon"></div> \u590D\u5236\u4EE3\u7801 </div><pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-comment">// \u5B9A\u65F6\u5668</span>
</div></li><li><div class="code-word">setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">handler</span>(<span class="hljs-params"></span>)</span>{
</div></li><li><div class="code-word">  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;1&#39;</span>);
</div></li><li><div class="code-word">}\uFF0C<span class="hljs-number">1000</span>);
</div></li><li><div class="code-word"><span class="hljs-comment">// \u4E8B\u4EF6\u76D1\u542C</span>
</div></li><li><div class="code-word">$(<span class="hljs-string">&#39;#app&#39;</span>).click(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
</div></li><li><div class="code-word">  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;Event Listener&#39;</span>);
</div></li><li><div class="code-word">});
</div></li></ol></code></pre></div><p data-nodeid="18379"><strong data-nodeid="18494">3</strong>. \u4F5C\u4E3A\u51FD\u6570\u53C2\u6570\u4F20\u9012\u7684\u5F62\u5F0F\uFF0C\u6BD4\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\u3002 </p><div class="course-code-area"><div class="copy-btn"><div class="copy-icon"></div> \u590D\u5236\u4EE3\u7801 </div><pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>;
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)</span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>;
</div></li><li><div class="code-word">  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span>(<span class="hljs-params"></span>)</span>{
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(a);
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  bar(baz);
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params">fn</span>)</span>{
</div></li><li><div class="code-word">  <span class="hljs-comment">// \u8FD9\u5C31\u662F\u95ED\u5305</span>
</div></li><li><div class="code-word">  fn();
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">foo();  <span class="hljs-comment">// \u8F93\u51FA2\uFF0C\u800C\u4E0D\u662F1</span>
</div></li></ol></code></pre></div><p data-nodeid="18381"><strong data-nodeid="18499">4</strong>. IIFE\uFF08\u7ACB\u5373\u6267\u884C\u51FD\u6570\uFF09\uFF0C\u521B\u5EFA\u4E86\u95ED\u5305\uFF0C\u4FDD\u5B58\u4E86\u5168\u5C40\u4F5C\u7528\u57DF\uFF08window\uFF09\u548C\u5F53\u524D\u51FD\u6570\u7684\u4F5C\u7528\u57DF\uFF0C\u56E0\u6B64\u53EF\u4EE5\u8F93\u51FA\u5168\u5C40\u7684\u53D8\u91CF\uFF0C\u5982\u4E0B\u6240\u793A\u3002 </p><div class="course-code-area"><div class="copy-btn"><div class="copy-icon"></div> \u590D\u5236\u4EE3\u7801 </div><pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>;
</div></li><li><div class="code-word">(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">IIFE</span>(<span class="hljs-params"></span>)</span>{
</div></li><li><div class="code-word">  <span class="hljs-built_in">console</span>.log(a);  <span class="hljs-comment">// \u8F93\u51FA2</span>
</div></li><li><div class="code-word">})();
</div></li></ol></code></pre></div><p data-nodeid="18383"> IIFE \u8FD9\u4E2A\u51FD\u6570\u4F1A\u7A0D\u5FAE\u6709\u4E9B\u7279\u6B8A\uFF0C\u7B97\u662F\u4E00\u79CD\u81EA\u6267\u884C\u533F\u540D\u51FD\u6570\uFF0C\u8FD9\u4E2A\u533F\u540D\u51FD\u6570\u62E5\u6709\u72EC\u7ACB\u7684\u4F5C\u7528\u57DF\u3002\u8FD9\u4E0D\u4EC5\u53EF\u4EE5\u907F\u514D\u4E86\u5916\u754C\u8BBF\u95EE\u6B64 IIFE \u4E2D\u7684\u53D8\u91CF\uFF0C\u800C\u4E14\u53C8\u4E0D\u4F1A\u6C61\u67D3\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u6211\u4EEC\u7ECF\u5E38\u80FD\u5728\u9AD8\u7EA7\u7684 JavaScript \u7F16\u7A0B\u4E2D\u770B\u89C1\u6B64\u7C7B\u51FD\u6570\u3002 </p><p data-nodeid="18384"> \u4EE5\u4E0A\u5173\u4E8E\u95ED\u5305\u7684\u57FA\u672C\u6982\u5FF5\u3001\u4EA7\u751F\u7684\u539F\u56E0\u53CA\u8868\u73B0\u5F62\u5F0F\u8FD9\u4E09\u4E2A\u65B9\u9762\uFF0C\u4F60\u5DF2\u7ECF\u6709\u4E86\u4E00\u5B9A\u7684\u4E86\u89E3\u3002\u90A3\u4E48\u6700\u540E\u4E00\u90E8\u5206\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u6BD4\u8F83\u5E38\u89C1\u7684\u5F00\u53D1\u5E94\u7528\u573A\u666F\u3002 </p><h3 data-nodeid="18385">\u5982\u4F55\u89E3\u51B3\u5FAA\u73AF\u8F93\u51FA\u95EE\u9898\uFF1F</h3><p data-nodeid="18386"> \u5728\u4E92\u8054\u7F51\u5927\u5382\u7684\u9762\u8BD5\u4E2D\uFF0C\u89E3\u51B3\u5FAA\u73AF\u8F93\u51FA\u95EE\u9898\u662F\u6BD4\u8F83\u9AD8\u9891\u7684\u9762\u8BD5\u9898\uFF0C\u4E00\u822C\u90FD\u4F1A\u7ED9\u4E00\u6BB5\u8FD9\u6837\u7684\u4EE3\u7801\u8BA9\u4F60\u6765\u89E3\u91CA\uFF0C\u90A3\u4E48\u7ED3\u5408\u672C\u8BFE\u65F6\u6240\u8BB2\u7684\u5185\u5BB9\uFF0C\u6211\u4EEC\u5728\u8FD9\u91CC\u4E00\u8D77\u770B\u770B\u8FD9\u4E2A\u9898\u76EE\uFF0C\u4EE3\u7801\u5982\u4E0B\u3002 </p><div class="course-code-area"><div class="copy-btn"><div class="copy-icon"></div> \u590D\u5236\u4EE3\u7801 </div><pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">1</span>; i &lt;= <span class="hljs-number">5</span>; i ++){
</div></li><li><div class="code-word">  setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(i)
</div></li><li><div class="code-word">  }, <span class="hljs-number">0</span>)
</div></li><li><div class="code-word">}
</div></li></ol></code></pre></div><p data-nodeid="18388"> \u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u6267\u884C\u4E4B\u540E\uFF0C\u4ECE\u63A7\u5236\u53F0\u6267\u884C\u7684\u7ED3\u679C\u53EF\u4EE5\u770B\u51FA\u6765\uFF0C\u7ED3\u679C\u8F93\u51FA\u7684\u662F 5 \u4E2A 6\uFF0C\u90A3\u4E48\u4E00\u822C\u9762\u8BD5\u5B98\u90FD\u4F1A\u5148\u95EE\u4E3A\u4EC0\u4E48\u90FD\u662F 6\uFF1F\u6211\u60F3\u8BA9\u4F60\u5B9E\u73B0\u8F93\u51FA 1\u30012\u30013\u30014\u30015 \u7684\u8BDD\u600E\u4E48\u529E\u5462\uFF1F </p><p data-nodeid="18389"> \u56E0\u6B64\u7ED3\u5408\u672C\u8BB2\u6240\u5B66\u7684\u77E5\u8BC6\u6211\u4EEC\u6765\u601D\u8003\u4E00\u4E0B\uFF0C\u5E94\u8BE5\u600E\u4E48\u7ED9\u9762\u8BD5\u5B98\u4E00\u4E2A\u6EE1\u610F\u7684\u89E3\u91CA\u3002\u4F60\u53EF\u4EE5\u56F4\u7ED5\u8FD9\u4E24\u70B9\u6765\u56DE\u7B54\u3002 </p><ol data-nodeid="18390"><li data-nodeid="18391"><p data-nodeid="18392"> setTimeout \u4E3A\u5B8F\u4EFB\u52A1\uFF0C\u7531\u4E8E JS \u4E2D\u5355\u7EBF\u7A0B eventLoop \u673A\u5236\uFF0C\u5728\u4E3B\u7EBF\u7A0B\u540C\u6B65\u4EFB\u52A1\u6267\u884C\u5B8C\u540E\u624D\u53BB\u6267\u884C\u5B8F\u4EFB\u52A1\uFF0C\u56E0\u6B64\u5FAA\u73AF\u7ED3\u675F\u540E setTimeout \u4E2D\u7684\u56DE\u8C03\u624D\u4F9D\u6B21\u6267\u884C\u3002 </p></li><li data-nodeid="18393"><p data-nodeid="18394"> \u56E0\u4E3A setTimeout \u51FD\u6570\u4E5F\u662F\u4E00\u79CD\u95ED\u5305\uFF0C\u5F80\u4E0A\u627E\u5B83\u7684\u7236\u7EA7\u4F5C\u7528\u57DF\u94FE\u5C31\u662F window\uFF0C\u53D8\u91CF i \u4E3A window \u4E0A\u7684\u5168\u5C40\u53D8\u91CF\uFF0C\u5F00\u59CB\u6267\u884C setTimeout \u4E4B\u524D\u53D8\u91CF i \u5DF2\u7ECF\u5C31\u662F 6 \u4E86\uFF0C\u56E0\u6B64\u6700\u540E\u8F93\u51FA\u7684\u8FDE\u7EED\u5C31\u90FD\u662F 6\u3002 </p></li></ol><p data-nodeid="18395"> \u90A3\u4E48\u6211\u4EEC\u518D\u6765\u770B\u770B\u5982\u4F55\u6309\u987A\u5E8F\u4F9D\u6B21\u8F93\u51FA 1\u30012\u30013\u30014\u30015 \u5462\uFF1F </p><h4 data-nodeid="18396">\u5229\u7528 IIFE</h4><p data-nodeid="18397"> \u53EF\u4EE5\u5229\u7528 IIFE\uFF08\u7ACB\u5373\u6267\u884C\u51FD\u6570\uFF09\uFF0C\u5F53\u6BCF\u6B21 for \u5FAA\u73AF\u65F6\uFF0C\u628A\u6B64\u65F6\u7684\u53D8\u91CF i \u4F20\u9012\u5230\u5B9A\u65F6\u5668\u4E2D\uFF0C\u7136\u540E\u6267\u884C\uFF0C\u6539\u9020\u4E4B\u540E\u7684\u4EE3\u7801\u5982\u4E0B\u3002 </p><div class="course-code-area"><div class="copy-btn"><div class="copy-icon"></div> \u590D\u5236\u4EE3\u7801 </div><pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">1</span>;i &lt;= <span class="hljs-number">5</span>;i++){
</div></li><li><div class="code-word">  (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">j</span>)</span>{
</div></li><li><div class="code-word">    setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">timer</span>(<span class="hljs-params"></span>)</span>{
</div></li><li><div class="code-word">      <span class="hljs-built_in">console</span>.log(j)
</div></li><li><div class="code-word">    }, <span class="hljs-number">0</span>)
</div></li><li><div class="code-word">  })(i)
</div></li><li><div class="code-word">}
</div></li></ol></code></pre></div><p data-nodeid="18399"> \u53EF\u4EE5\u770B\u5230\uFF0C\u901A\u8FC7\u8FD9\u6837\u6539\u9020\u4F7F\u7528 IIFE\uFF08\u7ACB\u5373\u6267\u884C\u51FD\u6570\uFF09\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5E8F\u53F7\u7684\u4F9D\u6B21\u8F93\u51FA\u3002 </p><h4 data-nodeid="18400">\u4F7F\u7528 ES6 \u4E2D\u7684 let</h4><p data-nodeid="18401"> ES6 \u4E2D\u65B0\u589E\u7684 let \u5B9A\u4E49\u53D8\u91CF\u7684\u65B9\u5F0F\uFF0C\u4F7F\u5F97 ES6 \u4E4B\u540E JS \u53D1\u751F\u9769\u547D\u6027\u7684\u53D8\u5316\uFF0C\u8BA9 JS \u6709\u4E86\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u4EE3\u7801\u7684\u4F5C\u7528\u57DF\u4EE5\u5757\u7EA7\u4E3A\u5355\u4F4D\u8FDB\u884C\u6267\u884C\u3002\u901A\u8FC7\u6539\u9020\u540E\u7684\u4EE3\u7801\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u4E0A\u9762\u60F3\u8981\u7684\u7ED3\u679C\u3002 </p><div class="course-code-area"><div class="copy-btn"><div class="copy-icon"></div> \u590D\u5236\u4EE3\u7801 </div><pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> i = <span class="hljs-number">1</span>; i &lt;= <span class="hljs-number">5</span>; i++){
</div></li><li><div class="code-word">  setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(i);
</div></li><li><div class="code-word">  },<span class="hljs-number">0</span>)
</div></li><li><div class="code-word">}
</div></li></ol></code></pre></div><p data-nodeid="18403"> \u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u770B\u51FA\uFF0C\u901A\u8FC7 let \u5B9A\u4E49\u53D8\u91CF\u7684\u65B9\u5F0F\uFF0C\u91CD\u65B0\u5B9A\u4E49 i \u53D8\u91CF\uFF0C\u5219\u53EF\u4EE5\u7528\u6700\u5C11\u7684\u6539\u52A8\u6210\u672C\uFF0C\u89E3\u51B3\u8BE5\u95EE\u9898\u3002 </p><h4 data-nodeid="18404">\u5B9A\u65F6\u5668\u4F20\u5165\u7B2C\u4E09\u4E2A\u53C2\u6570</h4><p data-nodeid="18405"> setTimeout \u4F5C\u4E3A\u7ECF\u5E38\u4F7F\u7528\u7684\u5B9A\u65F6\u5668\uFF0C\u5B83\u662F\u5B58\u5728\u7B2C\u4E09\u4E2A\u53C2\u6570\u7684\uFF0C\u65E5\u5E38\u5DE5\u4F5C\u4E2D\u6211\u4EEC\u7ECF\u5E38\u4F7F\u7528\u7684\u4E00\u822C\u662F\u524D\u4E24\u4E2A\uFF0C\u4E00\u4E2A\u662F\u56DE\u8C03\u51FD\u6570\uFF0C\u53E6\u5916\u4E00\u4E2A\u662F\u65F6\u95F4\uFF0C\u800C\u7B2C\u4E09\u4E2A\u53C2\u6570\u7528\u5F97\u6BD4\u8F83\u5C11\u3002\u90A3\u4E48\u7ED3\u5408\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u8C03\u6574\u5B8C\u4E4B\u540E\u7684\u4EE3\u7801\u5982\u4E0B\u3002 </p><div class="course-code-area"><div class="copy-btn"><div class="copy-icon"></div> \u590D\u5236\u4EE3\u7801 </div><pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i=<span class="hljs-number">1</span>;i&lt;=<span class="hljs-number">5</span>;i++){
</div></li><li><div class="code-word">  setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">j</span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(j)
</div></li><li><div class="code-word">  }, <span class="hljs-number">0</span>, i)
</div></li><li><div class="code-word">}
</div></li></ol></code></pre></div><p data-nodeid="18407"> \u4ECE\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u7B2C\u4E09\u4E2A\u53C2\u6570\u7684\u4F20\u9012\uFF0C\u53EF\u4EE5\u6539\u53D8 setTimeout \u7684\u6267\u884C\u903B\u8F91\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6211\u4EEC\u60F3\u8981\u7684\u7ED3\u679C\uFF0C\u8FD9\u4E5F\u662F\u4E00\u79CD\u89E3\u51B3\u5FAA\u73AF\u8F93\u51FA\u95EE\u9898\u7684\u9014\u5F84\u3002 </p><h3 data-nodeid="18408">\u603B\u7ED3</h3><p data-nodeid="18409"> \u5230\u8FD9\u91CC\uFF0C\u672C\u8BB2\u7684\u5185\u5BB9\u5C31\u5DEE\u4E0D\u591A\u7ED3\u675F\u4E86\u3002\u8FD9\u4E00\u8BB2\u6211\u901A\u8FC7\u539F\u7406\u7ED3\u5408\u5B9E\u8DF5\u7684\u65B9\u5F0F\uFF0C\u5C06\u95ED\u5305\u76F8\u5173\u7684\u77E5\u8BC6\u70B9\u4E32\u8D77\u6765\u5256\u6790\u4E86\u4E00\u904D\u3002\u4F60\u53EF\u4EE5\u770B\u5230\uFF0C\u5176\u5B9E\u95ED\u5305\u7684\u77E5\u8BC6\u6574\u4F53\u4E0A\u6765\u8BF4\u8FD8\u662F\u6BD4\u8F83\u590D\u6742\u7684\uFF0C\u5B83\u4F9D\u8D56\u4E00\u4E9B\u76F8\u5173\u7684\u4E0A\u6E38\u77E5\u8BC6\u70B9\u3002 </p><p data-nodeid="18410"> \u53E6\u5916\uFF0C\u5728\u65E5\u5E38\u7684\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u4E2D\uFF0C\u5F00\u53D1\u8005\u5F80\u5F80\u4F1A\u5FFD\u89C6\u5BF9\u8FD9\u90E8\u5206\u77E5\u8BC6\u7684\u7CFB\u7EDF\u6027\u5B66\u4E60\uFF0C\u5176\u5B9E\u95ED\u5305\u7684\u4F7F\u7528\u5728\u65E5\u5E38\u7684 JavaScript \u7F16\u7A0B\u4E2D\u7ECF\u5E38\u51FA\u73B0\uFF0C\u4F7F\u7528\u7684\u573A\u666F\u7279\u522B\u591A\u800C\u4E14\u590D\u6742\u3002\u7531\u4E8E\u95ED\u5305\u4F1A\u4F7F\u4E00\u4E9B\u53D8\u91CF\u4E00\u76F4\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\u4E0D\u4F1A\u81EA\u52A8\u91CA\u653E\uFF0C\u6240\u4EE5\u5982\u679C\u5927\u91CF\u4F7F\u7528\u7684\u8BDD\u5C31\u4F1A\u6D88\u8017\u5927\u91CF\u5185\u5B58\uFF0C\u4ECE\u800C\u5F71\u54CD\u7F51\u9875\u6027\u80FD\u3002\u56E0\u6B64\uFF0C\u4F60\u66F4\u5E94\u8BE5\u6DF1\u5165\u7406\u89E3\u95ED\u5305\u7684\u539F\u7406\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u4EA4\u4ED8\u7684\u4EE3\u7801\u6027\u80FD\u66F4\u597D\u3002 </p><p data-nodeid="18411" class="te-preview-highlight"> \u4E0B\u4E00\u8BB2\uFF0C\u6211\u5C06\u5E26\u9886\u4F60\u5B9E\u73B0\u4E00\u4E2A JSON.stringify\u3002\u540C\u65F6\u5E0C\u671B\u4F60\u591A\u52A8\u624B\u7EC3\u4E60\uFF0C\u4E5F\u6B22\u8FCE\u4F60\u5728\u4E0B\u65B9\u7559\u8A00\uFF0C\u8BF4\u8BF4\u81EA\u5DF1\u7684\u5B66\u4E60\u611F\u609F\uFF0C\u52A0\u6CB9\uFF01 </p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/lg-js-03.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var lgJs03 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
var lgJs03$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": lgJs03
}, Symbol.toStringTag, { value: "Module" }));
exports.createVueApp = createVueApp;
