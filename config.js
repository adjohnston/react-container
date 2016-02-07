System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "main.js",
      "npm:react-dom@0.14.7",
      "input-example.js",
      "container.js",
      "button-example.js",
      "npm:react@0.14.7",
      "span.js",
      "npm:react-dom@0.14.7/index",
      "npm:react@0.14.7/react",
      "npm:react@0.14.7/lib/ReactDOM",
      "npm:react@0.14.7/lib/React",
      "npm:react@0.14.7/lib/ReactCurrentOwner",
      "npm:react@0.14.7/lib/ReactVersion",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:react@0.14.7/lib/ReactReconciler",
      "npm:react@0.14.7/lib/renderSubtreeIntoContainer",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:react@0.14.7/lib/ReactDOMTextComponent",
      "npm:react@0.14.7/lib/ReactPerf",
      "npm:fbjs@0.6.1/lib/warning",
      "npm:react@0.14.7/lib/ReactInstanceHandles",
      "npm:react@0.14.7/lib/ReactDefaultInjection",
      "npm:react@0.14.7/lib/ReactUpdates",
      "npm:react@0.14.7/lib/ReactMount",
      "npm:react@0.14.7/lib/findDOMNode",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:react@0.14.7/lib/ReactDOMServer",
      "npm:react@0.14.7/lib/ReactIsomorphic",
      "npm:react@0.14.7/lib/deprecated",
      "npm:react@0.14.7/lib/ReactRef",
      "npm:react@0.14.7/lib/ReactComponentBrowserEnvironment",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:react@0.14.7/lib/DOMChildrenOperations",
      "npm:react@0.14.7/lib/escapeTextContentForBrowser",
      "npm:react@0.14.7/lib/ReactRootIndex",
      "npm:fbjs@0.6.1/lib/emptyFunction",
      "npm:react@0.14.7/lib/ClientReactRootIndex",
      "npm:react@0.14.7/lib/ServerReactRootIndex",
      "npm:react@0.14.7/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.7/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.7/lib/ReactInstanceMap",
      "npm:react@0.14.7/lib/shouldUpdateReactComponent",
      "npm:react@0.14.7/lib/ReactInjection",
      "npm:react@0.14.7/lib/ReactReconcileTransaction",
      "npm:react@0.14.7/lib/SVGDOMPropertyConfig",
      "npm:react@0.14.7/lib/ReactMarkupChecksum",
      "npm:fbjs@0.6.1/lib/containsNode",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:react@0.14.7/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.7/lib/ReactElement",
      "npm:fbjs@0.6.1/lib/emptyObject",
      "npm:react@0.14.7/lib/DOMPropertyOperations",
      "npm:react@0.14.7/lib/setTextContent",
      "npm:react@0.14.7/lib/validateDOMNesting",
      "npm:react@0.14.7/lib/BeforeInputEventPlugin",
      "npm:react@0.14.7/lib/DefaultEventPluginOrder",
      "npm:react@0.14.7/lib/EnterLeaveEventPlugin",
      "npm:react@0.14.7/lib/ChangeEventPlugin",
      "npm:react@0.14.7/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.7/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.7/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.7/lib/ReactDOMComponent",
      "npm:react@0.14.7/lib/ReactEventListener",
      "npm:react@0.14.7/lib/SelectEventPlugin",
      "npm:react@0.14.7/lib/SimpleEventPlugin",
      "npm:react@0.14.7/lib/ReactDefaultPerf",
      "npm:react@0.14.7/lib/PooledClass",
      "npm:react@0.14.7/lib/Transaction",
      "npm:react@0.14.7/lib/CallbackQueue",
      "npm:react@0.14.7/lib/DOMProperty",
      "npm:react@0.14.7/lib/ReactUpdateQueue",
      "npm:react@0.14.7/lib/setInnerHTML",
      "npm:react@0.14.7/lib/instantiateReactComponent",
      "npm:react@0.14.7/lib/ReactChildren",
      "npm:react@0.14.7/lib/ReactServerRendering",
      "npm:react@0.14.7/lib/ReactComponent",
      "npm:react@0.14.7/lib/ReactClass",
      "npm:react@0.14.7/lib/ReactElementValidator",
      "npm:react@0.14.7/lib/ReactPropTypes",
      "npm:react@0.14.7/lib/ReactDOMFactories",
      "npm:react@0.14.7/lib/onlyChild",
      "npm:process@0.11.2",
      "npm:react@0.14.7/lib/ReactDOMIDOperations",
      "npm:react@0.14.7/lib/Danger",
      "npm:react@0.14.7/lib/ReactOwner",
      "npm:react@0.14.7/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.7/lib/adler32",
      "npm:react@0.14.7/lib/ViewportMetrics",
      "npm:fbjs@0.6.1/lib/keyOf",
      "npm:react@0.14.7/lib/isTextInputElement",
      "npm:react@0.14.7/lib/ReactDOMButton",
      "npm:react@0.14.7/lib/getEventTarget",
      "npm:fbjs@0.6.1/lib/shallowEqual",
      "npm:fbjs@0.6.1/lib/getUnboundedScrollPosition",
      "npm:fbjs@0.6.1/lib/getActiveElement",
      "npm:react@0.14.7/lib/getEventCharCode",
      "npm:react@0.14.7/lib/ReactEmptyComponent",
      "npm:fbjs@0.6.1/lib/isTextNode",
      "npm:react@0.14.7/lib/ReactEventEmitterMixin",
      "npm:react@0.14.7/lib/FallbackCompositionState",
      "npm:react@0.14.7/lib/quoteAttributeValueForBrowser",
      "npm:react@0.14.7/lib/SyntheticCompositionEvent",
      "npm:react@0.14.7/lib/SyntheticMouseEvent",
      "npm:react@0.14.7/lib/SyntheticInputEvent",
      "npm:react@0.14.7/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.7/lib/SyntheticFocusEvent",
      "npm:react@0.14.7/lib/SyntheticClipboardEvent",
      "npm:react@0.14.7/lib/SyntheticTouchEvent",
      "npm:react@0.14.7/lib/ReactDefaultPerfAnalysis",
      "npm:react@0.14.7/lib/SyntheticUIEvent",
      "npm:fbjs@0.6.1/lib/performanceNow",
      "npm:react@0.14.7/lib/SyntheticWheelEvent",
      "npm:react@0.14.7/lib/SyntheticDragEvent",
      "npm:react@0.14.7/lib/canDefineProperty",
      "npm:react@0.14.7/lib/ReactMultiChild",
      "npm:fbjs@0.6.1/lib/EventListener",
      "npm:react@0.14.7/lib/EventPluginHub",
      "npm:react@0.14.7/lib/ReactNativeComponent",
      "npm:react@0.14.7/lib/ReactComponentEnvironment",
      "npm:react@0.14.7/lib/ReactInputSelection",
      "npm:react@0.14.7/lib/EventConstants",
      "npm:react@0.14.7/lib/EventPluginRegistry",
      "npm:react@0.14.7/lib/EventPropagators",
      "npm:react@0.14.7/lib/SyntheticEvent",
      "npm:react@0.14.7/lib/AutoFocusUtils",
      "npm:react@0.14.7/lib/isEventSupported",
      "npm:react@0.14.7/lib/CSSPropertyOperations",
      "npm:react@0.14.7/lib/ReactDOMTextarea",
      "npm:react@0.14.7/lib/ReactDOMInput",
      "npm:react@0.14.7/lib/ReactDOMOption",
      "npm:react@0.14.7/lib/ReactDOMSelect",
      "npm:react@0.14.7/lib/ReactCompositeComponent",
      "npm:react@0.14.7/lib/ReactServerBatchingStrategy",
      "npm:react@0.14.7/lib/getIteratorFn",
      "npm:fbjs@0.6.1/lib/mapObject",
      "npm:react@0.14.7/lib/ReactPropTypeLocationNames",
      "npm:fbjs@0.6.1/lib/keyMirror",
      "npm:react@0.14.7/lib/traverseAllChildren",
      "npm:react@0.14.7/lib/ReactServerRenderingTransaction",
      "npm:react@0.14.7/lib/ReactNoopUpdateQueue",
      "npm:react@0.14.7/lib/ReactPropTypeLocations",
      "npm:fbjs@0.6.1/lib/isNode",
      "npm:process@0.11.2/browser",
      "npm:react@0.14.7/lib/getEventKey",
      "npm:fbjs@0.6.1/lib/performance",
      "npm:fbjs@0.6.1/lib/createNodesFromMarkup",
      "npm:fbjs@0.6.1/lib/getMarkupWrap",
      "npm:react@0.14.7/lib/getTextContentAccessor",
      "npm:react@0.14.7/lib/getEventModifierState",
      "npm:react@0.14.7/lib/forEachAccumulated",
      "npm:fbjs@0.6.1/lib/focusNode",
      "npm:react@0.14.7/lib/CSSProperty",
      "npm:fbjs@0.6.1/lib/camelizeStyleName",
      "npm:fbjs@0.6.1/lib/hyphenateStyleName",
      "npm:react@0.14.7/lib/dangerousStyleValue",
      "npm:react@0.14.7/lib/ReactErrorUtils",
      "npm:react@0.14.7/lib/ReactChildReconciler",
      "npm:react@0.14.7/lib/flattenChildren",
      "npm:react@0.14.7/lib/EventPluginUtils",
      "npm:react@0.14.7/lib/ReactDOMSelection",
      "npm:react@0.14.7/lib/accumulateInto",
      "npm:fbjs@0.6.1/lib/memoizeStringOnly",
      "npm:react@0.14.7/lib/LinkedValueUtils",
      "npm:fbjs@0.6.1/lib/camelize",
      "npm:react@0.14.7/lib/getNodeForCharacterOffset",
      "npm:fbjs@0.6.1/lib/hyphenate",
      "npm:fbjs@0.6.1/lib/createArrayFromMixed",
      "npm:fbjs@0.6.1/lib/toArray"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "clean-css": "npm:clean-css@3.4.9",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "normalize.css": "npm:normalize.css@3.0.3",
    "react": "npm:react@0.14.7",
    "react-dom": "npm:react-dom@0.14.7",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:clean-css@3.4.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@0.14.7": {
      "react": "npm:react@0.14.7"
    },
    "npm:react@0.14.7": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
