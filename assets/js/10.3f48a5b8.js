(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{488:function(e,t,a){"use strict";a.r(t);var s=a(35),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"blooms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blooms"}},[e._v("#")]),e._v(" Blooms")]),e._v(" "),a("p",[e._v("💡 The basic idea behind the Bloom filter is to hash each new element that goes into the data set, take certain bits from this hash, and then use those bits to fill in parts of a fixed-size bit array (e.g. set certain bits to 1). This bit array is called a bloom filter.")]),e._v(" "),a("p",[e._v("💡 Later, when we want to check if an element is in the set, we simply hash the element and check that the right bits are in the bloom filter. If at least one of the bits is 0, then the element definitely isn’t in our data set! If all of the bits are 1, then the element might be in the data set (false postive)")]),e._v(" "),a("p",[e._v("💡 We use bloom filters to query each new block we get from signalr publisher event.")]),e._v(" "),a("p",[e._v("💡 This can work out if the block has the users ethereum address activity and if the supported erc20 tokens is in that bloom as well meaning we know when to get the users ERC20 token balance.")]),e._v(" "),a("p",[e._v("💡 It’s impossible to see any trace of an ethereum balance change in a block so we go and fetch that balance everytime a new block occurs.")]),e._v(" "),a("p",[e._v("💡 We created a open source lib for other to be able to do this, web3 now uses this internally. This can be found "),a("a",{attrs:{href:"https://www.npmjs.com/package/ethereum-bloom-filters",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);