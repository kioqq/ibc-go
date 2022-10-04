(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{638:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-003-ics27-acknowledgement-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-003-ics27-acknowledgement-format"}},[e._v("#")]),e._v(" ADR 003: ICS27 Acknowledgement Format")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("January 28th, 2022: Initial Draft")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Accepted")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Upon receiving an IBC packet, an IBC application can optionally return an acknowledgement.\nThis acknowledgement will be hashed and written into state. Thus any changes to the information included in an acknowledgement are state machine breaking.")]),e._v(" "),a("p",[e._v("ICS27 executes transactions on behalf of a controller chain. Information such as the message result or message error may be returned from other SDK modules outside the control of the ICS27 module.\nIt might be very valuable to return message execution information inside the ICS27 acknowledgement so that controller chain interchain account auth modules can act upon this information.\nOnly determinstic information returned from the message execution is allowed to be returned in the packet acknowledgement otherwise the network will halt due to a fork in the expected app hash.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("At the time of this writing, Tendermint includes the following information in the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/release/v0.34.13/types/results.go#L47-#L53",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABCI.ResponseDeliverTx"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gZGV0ZXJtaW5pc3RpY1Jlc3BvbnNlRGVsaXZlclR4IHN0cmlwcyBub24tZGV0ZXJtaW5pc3RpYyBmaWVsZHMgZnJvbQovLyBSZXNwb25zZURlbGl2ZXJUeCBhbmQgcmV0dXJucyBhbm90aGVyIFJlc3BvbnNlRGVsaXZlclR4LgpmdW5jIGRldGVybWluaXN0aWNSZXNwb25zZURlbGl2ZXJUeChyZXNwb25zZSAqYWJjaS5SZXNwb25zZURlbGl2ZXJUeCkgKmFiY2kuUmVzcG9uc2VEZWxpdmVyVHggewoJcmV0dXJuICZhbXA7YWJjaS5SZXNwb25zZURlbGl2ZXJUeHsKCQlDb2RlOiAgICAgIHJlc3BvbnNlLkNvZGUsCgkJRGF0YTogICAgICByZXNwb25zZS5EYXRhLAoJCUdhc1dhbnRlZDogcmVzcG9uc2UuR2FzV2FudGVkLAoJCUdhc1VzZWQ6ICAgcmVzcG9uc2UuR2FzVXNlZCwKCX0KfQo="}}),e._v(" "),a("h3",{attrs:{id:"successful-acknowledgements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#successful-acknowledgements"}},[e._v("#")]),e._v(" Successful acknowledgements")]),e._v(" "),a("p",[e._v("Successful acknowledgements should return information about the transaction execution.\nGiven the determinstic fields in the "),a("code",[e._v("abci.ResponseDeliverTx")]),e._v(", the transaction "),a("code",[e._v("Data")]),e._v(" can be used to indicate information about the transaction execution.\nThe "),a("code",[e._v("abci.ResponseDeliverTx.Data")]),e._v(" will be set in the ICS27 packet acknowledgement upon successful transaction execution.")]),e._v(" "),a("p",[e._v("The format for the "),a("code",[e._v("abci.ResponseDeliverTx.Data")]),e._v(" is constructed by the SDK.")]),e._v(" "),a("p",[e._v("At the time of this writing, the next major release of the SDK will change the format for constructing the transaction response data.")]),e._v(" "),a("h4",{attrs:{id:"v0-45-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v0-45-format"}},[e._v("#")]),e._v(" v0.45 format")]),e._v(" "),a("p",[e._v("The current version, v0.45 constructs the transaction response as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICAgIHByb3RvLk1hcnNoYWwoJmFtcDtzZGsuVHhNc2dEYXRhewogICAgICAgIERhdGE6IFtdKnNkay5Nc2dEYXRhe21zZ1Jlc3BvbnNlcy4uLn0sIAogICAgfQo="}}),e._v(" "),a("p",[e._v("Where "),a("code",[e._v("msgResponses")]),e._v(" is a slice of "),a("code",[e._v("*sdk.MsgData")]),e._v(".\nThe "),a("code",[e._v("MsgData.MsgType")]),e._v(" contains the "),a("code",[e._v("sdk.MsgTypeURL")]),e._v(" of the "),a("code",[e._v("sdk.Msg")]),e._v(" being executed.\nThe "),a("code",[e._v("MsgData.Data")]),e._v(" contains the proto marshaled "),a("code",[e._v("MsgResponse")]),e._v(" for the associated message executed.")]),e._v(" "),a("h4",{attrs:{id:"next-major-version-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-major-version-format"}},[e._v("#")]),e._v(" Next major version format")]),e._v(" "),a("p",[e._v("The next major version will construct the transaction response as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go ",base64:"ICAgIHByb3RvLk1hcnNoYWwoJmFtcDtzZGsuVHhNc2dEYXRhewogICAgICAgIE1zZ1Jlc3BvbnNlczogW10qY29kZWN0eXBlcy5Bbnl7bXNnUmVzcG9uc2VzLi4ufSwgCiAgICB9Cg=="}}),e._v(" "),a("p",[e._v("Where "),a("code",[e._v("msgResponses")]),e._v(" is a slice of the "),a("code",[e._v("MsgResponse")]),e._v("s packed into "),a("code",[e._v("Any")]),e._v("s.")]),e._v(" "),a("h4",{attrs:{id:"forwards-compatible-approach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forwards-compatible-approach"}},[e._v("#")]),e._v(" Forwards compatible approach")]),e._v(" "),a("p",[e._v("A forwards compatible approach was deemed infeasible.\nThe "),a("code",[e._v("handler")]),e._v(" provided by the "),a("code",[e._v("MsgServiceRouter")]),e._v(" will only include the "),a("code",[e._v("*sdk.Result")]),e._v(" and an error (if one occurred).\nIn v0.45 of the SDK, the "),a("code",[e._v("*sdk.Result.Data")]),e._v(" will contain the MsgResponse marshaled data.\nHowever, the MsgResponse is not packed and marshaled as a "),a("code",[e._v("*codectypes.Any")]),e._v(", thus making it impossible from a generalized point of view to unmarshal the bytes.\nIf the bytes could be unmarshaled, then they could be packed into an "),a("code",[e._v("*codectypes.Any")]),e._v(" in anticipation of the upcoming format.")]),e._v(" "),a("p",[e._v("Intercepting the MsgResponse before it becomes marshaled requires replicating this "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/dfd47f5b449f558a855da284a9a7eabbfbad435d/baseapp/msg_service_router.go#L109-#L128",target:"_blank",rel:"noopener noreferrer"}},[e._v("code"),a("OutboundLink")],1),e._v(".\nIt may not even be possible to replicate the linked code. The method handler would need to be accessed somehow.")]),e._v(" "),a("p",[e._v("For these reasons it is deemed infeasible to attempt a fowards compatible approach.")]),e._v(" "),a("p",[e._v("ICA auth developers can interpret which format was used when constructing the transaction response by checking if the "),a("code",[e._v("sdk.TxMsgData.Data")]),e._v(" field is non-empty.\nIf the "),a("code",[e._v("sdk.TxMsgData.Data")]),e._v(" field is not empty then the format for v0.45 was used, otherwise ICA auth developers can assume the transaction response uses the newer format.")]),e._v(" "),a("h4",{attrs:{id:"decision-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision-2"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("Replicate the transaction response format as provided by the current SDK verison.\nWhen the SDK version changes, adjust the transaction response format to use the updated transaction response format.\nInclude the transaction response bytes in the result channel acknowledgement.")]),e._v(" "),a("p",[e._v("A test has been "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0-beta1/modules/apps/27-interchain-accounts/host/ibc_module_test.go#L716-#L774",target:"_blank",rel:"noopener noreferrer"}},[e._v("written"),a("OutboundLink")],1),e._v(" to fail if the "),a("code",[e._v("MsgResponse")]),e._v(" is no longer included in consensus.")]),e._v(" "),a("h3",{attrs:{id:"error-acknowledgements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-acknowledgements"}},[e._v("#")]),e._v(" Error acknowledgements")]),e._v(" "),a("p",[e._v("As indicated above, the "),a("code",[e._v("abci.ResponseDeliverTx.Code")]),e._v(" is determinstic.\nUpon transaction execution errors, an error acknowledgement should be returned including the abci code.")]),e._v(" "),a("p",[e._v("A test has been "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0-beta1/modules/apps/27-interchain-accounts/host/types/ack_test.go#L41-#L82",target:"_blank",rel:"noopener noreferrer"}},[e._v("written"),a("OutboundLink")],1),e._v(" to fail if the ABCI code is no longer determinstic.")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("blockquote",[a("p",[e._v('This section describes the consequences, after applying the decision. All consequences should be summarized here, not just the "positive" ones.')])]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("interchain account auth modules can act upon transaction results without requiring a query module")]),e._v(" "),a("li",[e._v("transaction results align with those returned by execution of a normal SDK message.")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("the security assumptions of this decision rest on the inclusion of the ABCI error code and the Msg response in the ResponseDeliverTx hash created by Tendermint")]),e._v(" "),a("li",[e._v("events are non-determinstic and cannot be included in the packet acknowledgement")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("p",[e._v("No neutral consequences.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);