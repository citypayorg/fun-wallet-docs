(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{493:function(e,t,s){"use strict";s.r(t);var a=s(35),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"how-is-the-authentication-secure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-is-the-authentication-secure"}},[e._v("#")]),e._v(" How is the Authentication Secure?")]),e._v(" "),s("p",[e._v("💡 Encryption logic makes it impossible to retrieve the master key without the user's email address and password.\n"),s("br"),e._v("\n       💡 "),s("em",[e._v("The server never knows a user's password.")])]),e._v(" "),s("p",[e._v("💡 If you know the password you can always generate the same master key which encrypted the encrypted private key which is saved on the server.")]),e._v(" "),s("p",[e._v("💡 Your authentication token is a hash of your master key, so you can only get back to that if you can generate a master key using a password.\n"),s("br"),e._v("\n       💡 If this matches what’s on the server, you know this person can be logged in to your dApp.")]),e._v(" "),s("p",[e._v("💡 The server at this point can return the encrypted private key and the IV, and this can only be decrypted using the master key.\n"),s("br"),e._v("\n       💡 Whoop! You have your private key in memory, so you're able to sign data without anyone else seeing it.")])])}),[],!1,null,null,null);t.default=n.exports}}]);