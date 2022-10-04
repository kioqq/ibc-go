(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{659:function(l,c,d){"use strict";d.r(c);var t=d(0),a=Object(t.a)({},(function(){var l=this,c=l.$createElement,d=l._self._c||c;return d("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[d("h1",{attrs:{id:"integrating-ibc-middleware-into-a-chain"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#integrating-ibc-middleware-into-a-chain"}},[l._v("#")]),l._v(" Integrating IBC middleware into a chain")]),l._v(" "),d("p",[l._v("Learn how to integrate IBC middleware(s) with a base application to your chain. The following document only applies for Cosmos SDK chains.")]),l._v(" "),d("p",[l._v("If the middleware is maintaining its own state and/or processing SDK messages, then it should create and register its SDK module "),d("strong",[l._v("only once")]),l._v(" with the module manager in "),d("code",[l._v("app.go")]),l._v(".")]),l._v(" "),d("p",[l._v("All middleware must be connected to the IBC router and wrap over an underlying base IBC application. An IBC application may be wrapped by many layers of middleware, only the top layer middleware should be hooked to the IBC router, with all underlying middlewares and application getting wrapped by it.")]),l._v(" "),d("p",[l._v("The order of middleware "),d("strong",[l._v("matters")]),l._v(", function calls from IBC to the application travel from top-level middleware to the bottom middleware and then to the application. Function calls from the application to IBC goes through the bottom middleware in order to the top middleware and then to core IBC handlers. Thus the same set of middleware put in different orders may produce different effects.")]),l._v(" "),d("h3",{attrs:{id:"example-integration"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#example-integration"}},[l._v("#")]),l._v(" Example integration")]),l._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYXBwLmdvCgovLyBtaWRkbGV3YXJlIDEgYW5kIG1pZGRsZXdhcmUgMyBhcmUgc3RhdGVmdWwgbWlkZGxld2FyZSwgCi8vIHBlcmhhcHMgaW1wbGVtZW50aW5nIHNlcGFyYXRlIHNkay5Nc2cgYW5kIEhhbmRsZXJzCm13MUtlZXBlciA6PSBtdzEuTmV3S2VlcGVyKHN0b3JlS2V5MSkKbXczS2VlcGVyIDo9IG13My5OZXdLZWVwZXIoc3RvcmVLZXkzKQoKLy8gT25seSBjcmVhdGUgQXBwIE1vZHVsZSAqKm9uY2UqKiBhbmQgcmVnaXN0ZXIgaW4gYXBwIG1vZHVsZQovLyBpZiB0aGUgbW9kdWxlIG1haW50YWlucyBpbmRlcGVuZGVudCBzdGF0ZSBhbmQvb3IgcHJvY2Vzc2VzIHNkay5Nc2dzCmFwcC5tb2R1bGVNYW5hZ2VyID0gbW9kdWxlLk5ld01hbmFnZXIoCiAgICAuLi4KICAgIG13MS5OZXdBcHBNb2R1bGUobXcxS2VlcGVyKSwKICAgIG13My5OZXdBcHBNb2R1bGUobXczS2VlcGVyKSwKICAgIHRyYW5zZmVyLk5ld0FwcE1vZHVsZSh0cmFuc2ZlcktlZXBlciksCiAgICBjdXN0b20uTmV3QXBwTW9kdWxlKGN1c3RvbUtlZXBlcikKKQoKbXcxSUJDTW9kdWxlIDo9IG13MS5OZXdJQkNNb2R1bGUobXcxS2VlcGVyKQptdzJJQkNNb2R1bGUgOj0gbXcyLk5ld0lCQ01vZHVsZSgpIC8vIG1pZGRsZXdhcmUyIGlzIHN0YXRlbGVzcyBtaWRkbGV3YXJlCm13M0lCQ01vZHVsZSA6PSBtdzMuTmV3SUJDTW9kdWxlKG13M0tlZXBlcikKCnNjb3BlZEtlZXBlclRyYW5zZmVyIDo9IGNhcGFiaWxpdHlLZWVwZXIuTmV3U2NvcGVkS2VlcGVyKCZxdW90O3RyYW5zZmVyJnF1b3Q7KQpzY29wZWRLZWVwZXJDdXN0b20xIDo9IGNhcGFiaWxpdHlLZWVwZXIuTmV3U2NvcGVkS2VlcGVyKCZxdW90O2N1c3RvbTEmcXVvdDspCnNjb3BlZEtlZXBlckN1c3RvbTIgOj0gY2FwYWJpbGl0eUtlZXBlci5OZXdTY29wZWRLZWVwZXIoJnF1b3Q7Y3VzdG9tMiZxdW90OykKCi8vIE5PVEU6IElCQyBNb2R1bGVzIG1heSBiZSBpbml0aWFsaXplZCBhbnkgbnVtYmVyIG9mIHRpbWVzIHByb3ZpZGVkIHRoZXkgdXNlIGEgc2VwYXJhdGUKLy8gc2NvcGVkS2VlcGVyIGFuZCB1bmRlcmx5aW5nIHBvcnQuCgovLyBpbml0aWFsaXplIGJhc2UgSUJDIGFwcGxpY2F0aW9ucwovLyBpZiB5b3Ugd2FudCB0byBjcmVhdGUgdHdvIGRpZmZlcmVudCBzdGFja3Mgd2l0aCB0aGUgc2FtZSBiYXNlIGFwcGxpY2F0aW9uLAovLyB0aGV5IG11c3QgYmUgZ2l2ZW4gZGlmZmVyZW50IHNjb3BlZEtlZXBlcnMgYW5kIGFzc2lnbmVkIGRpZmZlcmVudCBwb3J0cy4KdHJhbnNmZXJJQkNNb2R1bGUgOj0gdHJhbnNmZXIuTmV3SUJDTW9kdWxlKHRyYW5zZmVyS2VlcGVyKQpjdXN0b21JQkNNb2R1bGUxIDo9IGN1c3RvbS5OZXdJQkNNb2R1bGUoY3VzdG9tS2VlcGVyLCAmcXVvdDtwb3J0Q3VzdG9tMSZxdW90OykKY3VzdG9tSUJDTW9kdWxlMiA6PSBjdXN0b20uTmV3SUJDTW9kdWxlKGN1c3RvbUtlZXBlciwgJnF1b3Q7cG9ydEN1c3RvbTImcXVvdDspCgovLyBjcmVhdGUgSUJDIHN0YWNrcyBieSBjb21iaW5pbmcgbWlkZGxld2FyZSB3aXRoIGJhc2UgYXBwbGljYXRpb24KLy8gTk9URTogc2luY2UgbWlkZGxld2FyZTIgaXMgc3RhdGVsZXNzIGl0IGRvZXMgbm90IHJlcXVpcmUgYSBLZWVwZXIKLy8gc3RhY2sgMSBjb250YWlucyBtdzEgLSZndDsgbXczIC0mZ3Q7IHRyYW5zZmVyCnN0YWNrMSA6PSBtdzEuTmV3SUJDTWlkZGxld2FyZShtdzMuTmV3SUJDTWlkZGxld2FyZSh0cmFuc2ZlcklCQ01vZHVsZSwgbXczS2VlcGVyKSwgbXcxS2VlcGVyKQovLyBzdGFjayAyIGNvbnRhaW5zIG13MyAtJmd0OyBtdzIgLSZndDsgY3VzdG9tMQpzdGFjazIgOj0gbXczLk5ld0lCQ01pZGRsZXdhcmUobXcyLk5ld0lCQ01pZGRsZXdhcmUoY3VzdG9tSUJDTW9kdWxlMSksIG13M0tlZXBlcikKLy8gc3RhY2sgMyBjb250YWlucyBtdzIgLSZndDsgbXcxIC0mZ3Q7IGN1c3RvbTIKc3RhY2szIDo9IG13Mi5OZXdJQkNNaWRkbGV3YXJlKG13MS5OZXdJQkNNaWRkbGV3YXJlKGN1c3RvbUlCQ01vZHVsZTIsIG13MUtlZXBlcikpCgovLyBhc3NvY2lhdGUgZWFjaCBzdGFjayB3aXRoIHRoZSBtb2R1bGVOYW1lIHByb3ZpZGVkIGJ5IHRoZSB1bmRlcmx5aW5nIHNjb3BlZEtlZXBlcgppYmNSb3V0ZXIgOj0gcG9ydHR5cGVzLk5ld1JvdXRlcigpCmliY1JvdXRlci5BZGRSb3V0ZSgmcXVvdDt0cmFuc2ZlciZxdW90Oywgc3RhY2sxKQppYmNSb3V0ZXIuQWRkUm91dGUoJnF1b3Q7Y3VzdG9tMSZxdW90Oywgc3RhY2syKQppYmNSb3V0ZXIuQWRkUm91dGUoJnF1b3Q7Y3VzdG9tMiZxdW90Oywgc3RhY2szKQphcHAuSUJDS2VlcGVyLlNldFJvdXRlcihpYmNSb3V0ZXIpCg=="}})],1)}),[],!1,null,null,null);c.default=a.exports}}]);