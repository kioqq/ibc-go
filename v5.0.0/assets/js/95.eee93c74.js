(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{658:function(e,t,n){"use strict";n.r(t);var a=n(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",{attrs:{synopsis:""}},[e._v("Learn about IBC, its components, and IBC use cases.")]),e._v(" "),n("h2",{attrs:{id:"what-is-the-interblockchain-communication-protocol-ibc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-interblockchain-communication-protocol-ibc"}},[e._v("#")]),e._v(" What is the Interblockchain Communication Protocol (IBC)?")]),e._v(" "),n("p",[e._v("This document serves as a guide for developers who want to write their own Inter-Blockchain\nCommunication protocol (IBC) applications for custom use cases.")]),e._v(" "),n("blockquote",[n("p",[e._v("IBC applications must be written as self-contained modules.")])]),e._v(" "),n("p",[e._v("Due to the modular design of the IBC protocol, IBC\napplication developers do not need to be concerned with the low-level details of clients,\nconnections, and proof verification.")]),e._v(" "),n("p",[e._v("This brief explanation of the lower levels of the\nstack gives application developers a broad understanding of the IBC\nprotocol. Abstraction layer details for channels and ports are most relevant for application developers and describe how to define custom packets and "),n("code",[e._v("IBCModule")]),e._v(" callbacks.")]),e._v(" "),n("p",[e._v("The requirements to have your module interact over IBC are:")]),e._v(" "),n("ul",[n("li",[e._v("Bind to a port or ports.")]),e._v(" "),n("li",[e._v("Define your packet data.")]),e._v(" "),n("li",[e._v("Use the default acknowledgment struct provided by core IBC or optionally define a custom acknowledgment struct.")]),e._v(" "),n("li",[e._v("Standardize an encoding of the packet data.")]),e._v(" "),n("li",[e._v("Implement the "),n("code",[e._v("IBCModule")]),e._v(" interface.")])]),e._v(" "),n("p",[e._v("Read on for a detailed explanation of how to write a self-contained IBC application module.")]),e._v(" "),n("h2",{attrs:{id:"components-overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#components-overview"}},[e._v("#")]),e._v(" Components Overview")]),e._v(" "),n("h3",{attrs:{id:"clients"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clients"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/02-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clients"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("IBC clients are on-chain light clients. Each light client is identified by a unique client-id.\nIBC clients track the consensus states of other blockchains, along with the proof spec necessary to\nproperly verify proofs against the client's consensus state. A client can be associated with any number\nof connections to the counterparty chain. The client identifier is auto generated using the client type\nand the global client counter appended in the format: "),n("code",[e._v("{client-type}-{N}")]),e._v(".")]),e._v(" "),n("p",[e._v("A "),n("code",[e._v("ClientState")]),e._v(" should contain chain specific and light client specific information necessary for verifying updates\nand upgrades to the IBC client. The "),n("code",[e._v("ClientState")]),e._v(" may contain information such as chain-id, latest height, proof specs,\nunbonding periods or the status of the light client. The "),n("code",[e._v("ClientState")]),e._v(" should not contain information that\nis specific to a given block at a certain height, this is the function of the "),n("code",[e._v("ConsensusState")]),e._v(". Each "),n("code",[e._v("ConsensusState")]),e._v("\nshould be associated with a unique block and should be referenced using a height. IBC clients are given a\nclient identifier prefixed store to store their associated client state and consensus states along with\nany metadata associated with the consensus states. Consensus states are stored using their associated height.")]),e._v(" "),n("p",[e._v("The supported IBC clients are:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/06-solomachine",target:"_blank",rel:"noopener noreferrer"}},[e._v("Solo Machine light client"),n("OutboundLink")],1),e._v(": Devices such as phones, browsers, or laptops.")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint light client"),n("OutboundLink")],1),e._v(": The default for Cosmos SDK-based chains.")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/09-localhost",target:"_blank",rel:"noopener noreferrer"}},[e._v("Localhost (loopback) client"),n("OutboundLink")],1),e._v(": Useful for\ntesting, simulation, and relaying packets to modules on the same application.")])]),e._v(" "),n("h3",{attrs:{id:"ibc-client-heights"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ibc-client-heights"}},[e._v("#")]),e._v(" IBC Client Heights")]),e._v(" "),n("p",[e._v("IBC Client Heights are represented by the struct:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBIZWlnaHQgc3RydWN0IHsKICAgUmV2aXNpb25OdW1iZXIgdWludDY0CiAgIFJldmlzaW9uSGVpZ2h0IHVpbnQ2NAp9Cg=="}}),e._v(" "),n("p",[e._v("The "),n("code",[e._v("RevisionNumber")]),e._v(" represents the revision of the chain that the height is representing.\nA revision typically represents a continuous, monotonically increasing range of block-heights.\nThe "),n("code",[e._v("RevisionHeight")]),e._v(" represents the height of the chain within the given revision.")]),e._v(" "),n("p",[e._v("On any reset of the "),n("code",[e._v("RevisionHeight")]),e._v("—for example, when hard-forking a Tendermint chain—\nthe "),n("code",[e._v("RevisionNumber")]),e._v(" will get incremented. This allows IBC clients to distinguish between a\nblock-height "),n("code",[e._v("n")]),e._v(" of a previous revision of the chain (at revision "),n("code",[e._v("p")]),e._v(") and block-height "),n("code",[e._v("n")]),e._v(" of the current\nrevision of the chain (at revision "),n("code",[e._v("e")]),e._v(").")]),e._v(" "),n("p",[n("code",[e._v("Height")]),e._v("s that share the same revision number can be compared by simply comparing their respective "),n("code",[e._v("RevisionHeight")]),e._v("s.\n"),n("code",[e._v("Height")]),e._v("s that do not share the same revision number will only be compared using their respective "),n("code",[e._v("RevisionNumber")]),e._v("s.\nThus a height "),n("code",[e._v("h")]),e._v(" with revision number "),n("code",[e._v("e+1")]),e._v(" will always be greater than a height "),n("code",[e._v("g")]),e._v(" with revision number "),n("code",[e._v("e")]),e._v(",\n"),n("strong",[e._v("REGARDLESS")]),e._v(" of the difference in revision heights.")]),e._v(" "),n("p",[e._v("Ex:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"SGVpZ2h0e1JldmlzaW9uTnVtYmVyOiAzLCBSZXZpc2lvbkhlaWdodDogMH0gJmd0OyBIZWlnaHR7UmV2aXNpb25OdW1iZXI6IDIsIFJldmlzaW9uSGVpZ2h0OiAxMDAwMDAwMDAwMDB9Cg=="}}),e._v(" "),n("p",[e._v("When a Tendermint chain is running a particular revision, relayers can simply submit headers and proofs with the revision number\ngiven by the chain's "),n("code",[e._v("chainID")]),e._v(", and the revision height given by the Tendermint block height. When a chain updates using a hard-fork\nand resets its block-height, it is responsible for updating its "),n("code",[e._v("chainID")]),e._v(" to increment the revision number.\nIBC Tendermint clients then verifies the revision number against their "),n("code",[e._v("chainID")]),e._v(" and treat the "),n("code",[e._v("RevisionHeight")]),e._v(" as the Tendermint block-height.")]),e._v(" "),n("p",[e._v("Tendermint chains wishing to use revisions to maintain persistent IBC connections even across height-resetting upgrades must format their "),n("code",[e._v("chainID")]),e._v("s\nin the following manner: "),n("code",[e._v("{chainID}-{revision_number}")]),e._v(". On any height-resetting upgrade, the "),n("code",[e._v("chainID")]),e._v(" "),n("strong",[e._v("MUST")]),e._v(" be updated with a higher revision number\nthan the previous value.")]),e._v(" "),n("p",[e._v("Ex:")]),e._v(" "),n("ul",[n("li",[e._v("Before upgrade "),n("code",[e._v("chainID")]),e._v(": "),n("code",[e._v("gaiamainnet-3")])]),e._v(" "),n("li",[e._v("After upgrade "),n("code",[e._v("chainID")]),e._v(": "),n("code",[e._v("gaiamainnet-4")])])]),e._v(" "),n("p",[e._v("Clients that do not require revisions, such as the solo-machine client, simply hardcode "),n("code",[e._v("0")]),e._v(" into the revision number whenever they\nneed to return an IBC height when implementing IBC interfaces and use the "),n("code",[e._v("RevisionHeight")]),e._v(" exclusively.")]),e._v(" "),n("p",[e._v("Other client-types can implement their own logic to verify the IBC heights that relayers provide in their "),n("code",[e._v("Update")]),e._v(", "),n("code",[e._v("Misbehavior")]),e._v(", and\n"),n("code",[e._v("Verify")]),e._v(" functions respectively.")]),e._v(" "),n("p",[e._v("The IBC interfaces expect an "),n("code",[e._v("ibcexported.Height")]),e._v(" interface, however all clients must use the concrete implementation provided in\n"),n("code",[e._v("02-client/types")]),e._v(" and reproduced above.")]),e._v(" "),n("h3",{attrs:{id:"connections"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/03-connection",target:"_blank",rel:"noopener noreferrer"}},[e._v("Connections"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Connections encapsulate two "),n("code",[e._v("ConnectionEnd")]),e._v(" objects on two separate blockchains. Each\n"),n("code",[e._v("ConnectionEnd")]),e._v(" is associated with a client of the other blockchain (for example, the counterparty blockchain).\nThe connection handshake is responsible for verifying that the light clients on each chain are\ncorrect for their respective counterparties. Connections, once established, are responsible for\nfacilitating all cross-chain verifications of IBC state. A connection can be associated with any\nnumber of channels.")]),e._v(" "),n("h3",{attrs:{id:"proofs-and-paths"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proofs-and-paths"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/23-commitment",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proofs"),n("OutboundLink")],1),e._v(" and "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/24-host",target:"_blank",rel:"noopener noreferrer"}},[e._v("Paths"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("In IBC, blockchains do not directly pass messages to each other over the network. Instead, to\ncommunicate, a blockchain commits some state to a specifically defined path that is reserved for a\nspecific message type and a specific counterparty. For example, for storing a specific connectionEnd as part\nof a handshake or a packet intended to be relayed to a module on the counterparty chain. A relayer\nprocess monitors for updates to these paths and relays messages by submitting the data stored\nunder the path and a proof to the counterparty chain.")]),e._v(" "),n("p",[e._v("Proofs are passed from core IBC to light-clients as bytes. It is up to light client implementation to interpret these bytes appropriately.")]),e._v(" "),n("ul",[n("li",[e._v("The paths that all IBC implementations must use for committing IBC messages is defined in\n"),n("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/core/ics-024-host-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-24 Host State Machine Requirements"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[e._v("The proof format that all implementations must be able to produce and verify is defined in "),n("a",{attrs:{href:"https://github.com/confio/ics23",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-23 Proofs"),n("OutboundLink")],1),e._v(" implementation.")])]),e._v(" "),n("h3",{attrs:{id:"capabilities"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#capabilities"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/core/ocap.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Capabilities"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("IBC is intended to work in execution environments where modules do not necessarily trust each\nother. Thus, IBC must authenticate module actions on ports and channels so that only modules with the\nappropriate permissions can use them.")]),e._v(" "),n("p",[e._v("This module authentication is accomplished using a "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/architecture/adr-003-dynamic-capability-store.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("dynamic\ncapability store"),n("OutboundLink")],1),e._v(". Upon binding to a port or\ncreating a channel for a module, IBC returns a dynamic capability that the module must claim in\norder to use that port or channel. The dynamic capability module prevents other modules from using that port or channel since\nthey do not own the appropriate capability.")]),e._v(" "),n("p",[e._v("While this background information is useful, IBC modules do not need to interact at all with\nthese lower-level abstractions. The relevant abstraction layer for IBC application developers is\nthat of channels and ports. IBC applications must be written as self-contained "),n("strong",[e._v("modules")]),e._v(".")]),e._v(" "),n("p",[e._v("A module on one blockchain can communicate with other modules on other blockchains by sending,\nreceiving, and acknowledging packets through channels that are uniquely identified by the\n"),n("code",[e._v("(channelID, portID)")]),e._v(" tuple.")]),e._v(" "),n("p",[e._v("A useful analogy is to consider IBC modules as internet applications on\na computer. A channel can then be conceptualized as an IP connection, with the IBC portID being\nanalogous to an IP port and the IBC channelID being analogous to an IP address. Thus, a single\ninstance of an IBC module can communicate on the same port with any number of other modules and\nIBC correctly routes all packets to the relevant module using the (channelID, portID tuple). An\nIBC module can also communicate with another IBC module over multiple ports, with each\n"),n("code",[e._v("(portID<->portID)")]),e._v(" packet stream being sent on a different unique channel.")]),e._v(" "),n("h3",{attrs:{id:"ports"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ports"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/05-port",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ports"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("An IBC module can bind to any number of ports. Each port must be identified by a unique "),n("code",[e._v("portID")]),e._v(".\nSince IBC is designed to be secure with mutually distrusted modules operating on the same ledger,\nbinding a port returns a dynamic object capability. In order to take action on a particular port\n(for example, an open channel with its portID), a module must provide the dynamic object capability to the IBC\nhandler. This requirement prevents a malicious module from opening channels with ports it does not own. Thus,\nIBC modules are responsible for claiming the capability that is returned on "),n("code",[e._v("BindPort")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"channels"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#channels"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/04-channel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Channels"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("An IBC channel can be established between two IBC ports. Currently, a port is exclusively owned by a\nsingle module. IBC packets are sent over channels. Just as IP packets contain the destination IP\naddress and IP port, and the source IP address and source IP port, IBC packets contain\nthe destination portID and channelID, and the source portID and channelID. This packet structure enables IBC to\ncorrectly route packets to the destination module while allowing modules receiving packets to\nknow the sender module.")]),e._v(" "),n("p",[e._v("A channel can be "),n("code",[e._v("ORDERED")]),e._v(", where packets from a sending module must be processed by the\nreceiving module in the order they were sent. Or a channel can be "),n("code",[e._v("UNORDERED")]),e._v(", where packets\nfrom a sending module are processed in the order they arrive (might be in a different order than they were sent).")]),e._v(" "),n("p",[e._v("Modules can choose which channels they wish to communicate over with, thus IBC expects modules to\nimplement callbacks that are called during the channel handshake. These callbacks can do custom\nchannel initialization logic. If any callback returns an error, the channel handshake fails. Thus, by\nreturning errors on callbacks, modules can programmatically reject and accept channels.")]),e._v(" "),n("p",[e._v("The channel handshake is a 4-step handshake. Briefly, if a given chain A wants to open a channel with\nchain B using an already established connection:")]),e._v(" "),n("ol",[n("li",[e._v("chain A sends a "),n("code",[e._v("ChanOpenInit")]),e._v(" message to signal a channel initialization attempt with chain B.")]),e._v(" "),n("li",[e._v("chain B sends a "),n("code",[e._v("ChanOpenTry")]),e._v(" message to try opening the channel on chain A.")]),e._v(" "),n("li",[e._v("chain A sends a "),n("code",[e._v("ChanOpenAck")]),e._v(" message to mark its channel end status as open.")]),e._v(" "),n("li",[e._v("chain B sends a "),n("code",[e._v("ChanOpenConfirm")]),e._v(" message to mark its channel end status as open.")])]),e._v(" "),n("p",[e._v("If all handshake steps are successful, the channel is opened on both sides. At each step in the handshake, the module\nassociated with the "),n("code",[e._v("ChannelEnd")]),e._v(" executes its callback. So\non "),n("code",[e._v("ChanOpenInit")]),e._v(", the module on chain A executes its callback "),n("code",[e._v("OnChanOpenInit")]),e._v(".")]),e._v(" "),n("p",[e._v("The channel identifier is auto derived in the format: "),n("code",[e._v("channel-{N}")]),e._v(" where N is the next sequence to be used.")]),e._v(" "),n("p",[e._v("Just as ports came with dynamic capabilities, channel initialization returns a dynamic capability\nthat the module "),n("strong",[e._v("must")]),e._v(" claim so that they can pass in a capability to authenticate channel actions\nlike sending packets. The channel capability is passed into the callback on the first parts of the\nhandshake; either "),n("code",[e._v("OnChanOpenInit")]),e._v(" on the initializing chain or "),n("code",[e._v("OnChanOpenTry")]),e._v(" on the other chain.")]),e._v(" "),n("h4",{attrs:{id:"closing-channels"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#closing-channels"}},[e._v("#")]),e._v(" Closing channels")]),e._v(" "),n("p",[e._v("Closing a channel occurs in 2 handshake steps as defined in "),n("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 04"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[n("code",[e._v("ChanCloseInit")]),e._v(" closes a channel on the executing chain if the channel exists, it is not\nalready closed and the connection it exists upon is OPEN. Channels can only be closed by a\ncalling module or in the case of a packet timeout on an ORDERED channel.")]),e._v(" "),n("p",[n("code",[e._v("ChanCloseConfirm")]),e._v(" is a response to a counterparty channel executing "),n("code",[e._v("ChanCloseInit")]),e._v(". The channel\non the executing chain closes if the channel exists, the channel is not already closed,\nthe connection the channel exists upon is OPEN and the executing chain successfully verifies\nthat the counterparty channel has been closed.")]),e._v(" "),n("h3",{attrs:{id:"packets"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#packets"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/04-channel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Packets"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Modules communicate with each other by sending packets over IBC channels. All\nIBC packets contain the destination "),n("code",[e._v("portID")]),e._v(" and "),n("code",[e._v("channelID")]),e._v(" along with the source "),n("code",[e._v("portID")]),e._v(" and\n"),n("code",[e._v("channelID")]),e._v(". This packet structure allows modules to know the sender module of a given packet. IBC packets\ncontain a sequence to optionally enforce ordering.")]),e._v(" "),n("p",[e._v("IBC packets also contain a "),n("code",[e._v("TimeoutHeight")]),e._v(" and a "),n("code",[e._v("TimeoutTimestamp")]),e._v(" that determine the deadline before the receiving module must process a packet.")]),e._v(" "),n("p",[e._v("Modules send custom application data to each other inside the "),n("code",[e._v("Data []byte")]),e._v(" field of the IBC packet.\nThus, packet data is opaque to IBC handlers. It is incumbent on a sender module to encode\ntheir application-specific packet information into the "),n("code",[e._v("Data")]),e._v(" field of packets. The receiver\nmodule must decode that "),n("code",[e._v("Data")]),e._v(" back to the original application data.")]),e._v(" "),n("h3",{attrs:{id:"receipts-and-timeouts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#receipts-and-timeouts"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/04-channel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Receipts and Timeouts"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Since IBC works over a distributed network and relies on potentially faulty relayers to relay messages between ledgers,\nIBC must handle the case where a packet does not get sent to its destination in a timely manner or at all. Packets must\nspecify a non-zero value for timeout height ("),n("code",[e._v("TimeoutHeight")]),e._v(") or timeout timestamp ("),n("code",[e._v("TimeoutTimestamp")]),e._v(" ) after which a packet can no longer be successfully received on the destination chain.")]),e._v(" "),n("ul",[n("li",[e._v("The "),n("code",[e._v("timeoutHeight")]),e._v(" indicates a consensus height on the destination chain after which the packet is no longer be processed, and instead counts as having timed-out.")]),e._v(" "),n("li",[e._v("The "),n("code",[e._v("timeoutTimestamp")]),e._v(" indicates a timestamp on the destination chain after which the packet is no longer be processed, and instead counts as having timed-out.")])]),e._v(" "),n("p",[e._v("If the timeout passes without the packet being successfully received, the packet can no longer be\nreceived on the destination chain. The sending module can timeout the packet and take appropriate actions.")]),e._v(" "),n("p",[e._v("If the timeout is reached, then a proof of packet timeout can be submitted to the original chain. The original chain can then perform\napplication-specific logic to timeout the packet, perhaps by rolling back the packet send changes (refunding senders any locked funds, etc.).")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("In ORDERED channels, a timeout of a single packet in the channel causes the channel to close.")]),e._v(" "),n("ul",[n("li",[e._v("If packet sequence "),n("code",[e._v("n")]),e._v(" times out, then a packet at sequence "),n("code",[e._v("k > n")]),e._v(" cannot be received without violating the contract of ORDERED channels that packets are processed in the order that they are sent.")]),e._v(" "),n("li",[e._v("Since ORDERED channels enforce this invariant, a proof that sequence "),n("code",[e._v("n")]),e._v(" has not been received on the destination chain by the specified timeout of packet "),n("code",[e._v("n")]),e._v(" is sufficient to timeout packet "),n("code",[e._v("n")]),e._v(" and close the channel.")])])]),e._v(" "),n("li",[n("p",[e._v("In UNORDERED channels, the application-specific timeout logic for that packet is applied and the channel is not closed.")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Packets can be received in any order.")])]),e._v(" "),n("li",[n("p",[e._v("IBC writes a packet receipt for each sequence receives in the UNORDERED channel. This receipt does not contain information; it is simply a marker intended to signify that the UNORDERED channel has received a packet at the specified sequence.")])]),e._v(" "),n("li",[n("p",[e._v("To timeout a packet on an UNORDERED channel, a proof is required that a packet receipt "),n("strong",[e._v("does not exist")]),e._v(" for the packet's sequence by the specified timeout.")])])])])]),e._v(" "),n("p",[e._v("For this reason, most modules should use UNORDERED channels as they require fewer liveness guarantees to function effectively for users of that channel.")]),e._v(" "),n("h3",{attrs:{id:"acknowledgments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgments"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/04-channel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acknowledgments"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Modules can also choose to write application-specific acknowledgments upon processing a packet. Acknowledgments can be done:")]),e._v(" "),n("ul",[n("li",[e._v("Synchronously on "),n("code",[e._v("OnRecvPacket")]),e._v(" if the module processes packets as soon as they are received from IBC module.")]),e._v(" "),n("li",[e._v("Asynchronously if module processes packets at some later point after receiving the packet.")])]),e._v(" "),n("p",[e._v("This acknowledgment data is opaque to IBC much like the packet "),n("code",[e._v("Data")]),e._v(" and is treated by IBC as a simple byte string "),n("code",[e._v("[]byte")]),e._v(". Receiver modules must encode their acknowledgment so that the sender module can decode it correctly. The encoding must be negotiated between the two parties during version negotiation in the channel handshake.")]),e._v(" "),n("p",[e._v("The acknowledgment can encode whether the packet processing succeeded or failed, along with additional information that allows the sender module to take appropriate action.")]),e._v(" "),n("p",[e._v("After the acknowledgment has been written by the receiving chain, a relayer relays the acknowledgment back to the original sender module.")]),e._v(" "),n("p",[e._v("The original sender module then executes application-specific acknowledgment logic using the contents of the acknowledgment.")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("After an acknowledgement fails, packet-send changes can be rolled back (for example, refunding senders in ICS20).")])]),e._v(" "),n("li",[n("p",[e._v("After an acknowledgment is received successfully on the original sender on the chain, the corresponding packet commitment is deleted since it is no longer needed.")])])]),e._v(" "),n("h2",{attrs:{id:"further-readings-and-specs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-readings-and-specs"}},[e._v("#")]),e._v(" Further Readings and Specs")]),e._v(" "),n("p",[e._v("If you want to learn more about IBC, check the following specifications:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC specification overview"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{hide:"",id:"next"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),n("p",{attrs:{hide:""}},[e._v("Learn about how to "),n("RouterLink",{attrs:{to:"/ibc/integration.html"}},[e._v("integrate")]),e._v(" IBC to your application")],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);