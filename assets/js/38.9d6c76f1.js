(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{463:function(t,s,e){"use strict";e.r(s);var a=e(35),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"setting-up-the-sdk-in-your-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-sdk-in-your-project"}},[t._v("#")]),t._v(" Setting Up The SDK in your Project")]),t._v(" "),e("h2",{attrs:{id:"typescript-typings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typescript-typings"}},[t._v("#")]),t._v(" TypeScript Typings")]),t._v(" "),e("p",[t._v("If you're using "),e("code",[t._v("TypeScript")]),t._v(" please make sure you use all the typings the SDK supplies. As the SDK exposes the SDK on the window you should use the window object supplied by the SDK. This extends the "),e("code",[t._v("Window")]),t._v(" object as well so you can use it for standard window calls.")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" window "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@funfair/wallet-sdk/window'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"setting-it-up-with-angular-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-it-up-with-angular-cli"}},[t._v("#")]),t._v(" Setting it up with angular CLI")]),t._v(" "),e("p",[t._v("To get it to build with the angular CLI compiler you need to add the "),e("code",[t._v("window.ts")]),t._v(" file in your "),e("code",[t._v("files")]),t._v(" object in your "),e("code",[t._v("tsconfig.app.json")]),t._v(". It also seems if you add the "),e("code",[t._v("window.ts")]),t._v(" file angular CLI starts complaining about the "),e("code",[t._v("main.ts")]),t._v(" and the "),e("code",[t._v("polyfill.ts")]),t._v(", so you have to add them in the array as well if you still have them in your angular project. Example below (example "),e("code",[t._v("node_modules")]),t._v(" path shown, make sure you update this if necessary):")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"files"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./main.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./polyfills.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../node_modules/@funfair/wallet-sdk/window.ts"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[e("code",[t._v("TypeScript")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" window "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@funfair/wallet-sdk/window'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("All the other typings can be imported directly from the module itself.")]),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("p",[e("code",[t._v("TypeScript")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  NetworkDetails"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  MessageListeners"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  EventResponse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  FunWalletSdkWindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ChangeNetworkResponse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  PendingTransactionResponse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// loads more")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@funfair/wallet-sdk'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("strong",[t._v("HINT")]),t._v(" it seems "),e("code",[t._v("VSCODE")]),t._v(" has a mind of its own sometimes so if it autocompletes with a long path i.e. "),e("code",[t._v("sdk/src/type...")]),t._v(" just revert it to SDK and it seems to sort itself out.")]),t._v(" "),e("p",[t._v("If you find anything without a type or any issues with it please raise a github issue for us to triage.")]),t._v(" "),e("h2",{attrs:{id:"setting-it-up-with-react"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-it-up-with-react"}},[t._v("#")]),t._v(" Setting it up with react")]),t._v(" "),e("p",[t._v("Coming soon.. the SDK does support it but no dev docs are supplied for the config.")]),t._v(" "),e("h2",{attrs:{id:"setting-it-up-with-vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-it-up-with-vue"}},[t._v("#")]),t._v(" Setting it up with vue")]),t._v(" "),e("p",[t._v("Coming soon.. the SDK does support it but no dev docs are supplied for the config.")]),t._v(" "),e("h2",{attrs:{id:"setting-it-up-with-another-framework"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-it-up-with-another-framework"}},[t._v("#")]),t._v(" Setting it up with another framework")]),t._v(" "),e("p",[t._v("FunWallet SDK supports any frontend framework so it will work with any library you are using, we have just done some examples above of the main ones. Let us know if you like us to add anymore.")])])}),[],!1,null,null,null);s.default=n.exports}}]);