# Leader And Follower Communication

## Introduction

Since the wallet can't trust the dapp hosting the client, it can't pass sensitive data through to the SDK because that is hosted on the dapp and would mean the dapp could get access to that sensitive data like the private key, which would be an unacceptable security compromise. The 'Leader and Follower' solution allows communication between the `leader` and the `follower` without the dapp being able to intercept the data, allowing the wallet to have 2 instances of itself running for reasons described below.

If iframes are removed from the DOM it kills the instance and when added back to the DOM it reloads itself, also if you move an iframe using JavaScript it also reloads itself - so there is no such thing as `magic iframes`.

As the wallet needs to be authenticated and then never reloaded due to it holding the users private key in memory, this causes a bit of a problem. Front-end apps of today use awesome frameworks like angular & react - so developers want to take advantage of lazy loading and general solid approaches. If you just had one instance which never got removed from the DOM it would only work on a very basic web app hence where `leader` and `follower` comes in.

## What Is A Leader Instance

The `leader` is the authenticated instance which never gets removed from the DOM or moved. The `leader` is the communication window which speaks to the SDK. This is in charge of spawning up a new `follower` instance and runs the show. Your dapp will only ever speak to the leader when it does any SDK calls. All event listeners and messages will be sent to the parent from the `leader`. You **MUST** only ever have `1` leader and the SDK will throw errors if you ever have more then one.

The `leader` instance will be in a `iframe` hidden away in the start of the `<body>` and invisible. Once the user has logged in the event [`authenticationCompleted`](#authenticationcompleted) is fired and the leader is completely authenticated. Any sensitive data passed between the leader and the follower is RSA encrypted so nobody can decrypt it, _including_ the dapp. The leader will keep everything in sync going forward (like nonces, blocks etc).

You should never use the `leader` instance to show the standard UI as it doesn't route to certain views as its mainly used for the communication, approval modals, KYC process and player protection. If you want to show any other wallet UI please use a `follower` instance to do that.

## What Is A Follower

The follower is an instance you can spawn and destroy whenever you want. This is what you would use to show content on the UI for the wallet. You can only ever have `1 leader` and `1 follower`, due to synchronisation being essential. This is a fixed limit.

You must only ever show this when the [`authenticationCompleted`](#authenticationcompleted) event has fired and you know the leader instance is authenticated. You can also check this by using the [`isAuthenticated`](#isauthenticated) SDK method. This again is all shown in the wallet integration test app.

## Secure communications between the leader and follower

The leader and the follower communicate using the [`Broadcast Channel Api`](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) or via cookies. Safari and Edge do not support the native `Broadcast Channel Api` so they communicate through saving cookies and reading cookies.

<img :src="$withBase('/leader-follower-authentication-flow.png')" >

As you can see in the above flow all data passed between the instances is encrypted, meaning if someone did get to that data it's useless without the RSA private key. This private key is never exposed and held in memory within the instances.

## How is the leader and follower communication service?

💡 Encrypted every message between leader > follower and follower > leader,

💡 Even if the dapp could snoop (which it can not) the messages will be a blob of data without the RSA private key which is held in the instances memory, which means its a useless blob of data.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 💡 Dapp can not get to that as its protected by cross site scripting and standard internet security.
<br/>

💡 Broadcast API is something supported in most browsers but Safari and Edge.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 💡 This only can broadcast to it's own domain, for example `wallet.funfair.io` can only speak to `wallet.funfair.io` so it’s never exposed to anyone else.

💡 Due to safari we had to write our own broadcast logic for them which uses cookies to read and write values to each instance again protected by the domain.

💡 As its client side code is holding the private key in memory there is no physical trace of it anywhere after you refresh, minus the encrypted session data which is useless without all the other encrypted data as its double encrypted. This is also removed when you close the tab.
