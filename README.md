# apollo-server-modules-demo

This repo is an example of using the modules array in Apollo Server 2.0 to segement features of your graphql server.

## Install

```
git clone https://github.com/heyMP/apollo-server-modules-demo.git
cd apollo-server-modules-demo
npm install
npm run dev
```

## Subscriptions not working

I can not get subscriptions to work using the [modules array in the configuration options](https://github.com/heyMP/apollo-server-modules-demo/blob/master/index.js#L4-L6).
I'm implementing the PubSub that comes with Apollo Server.
When I attempt to run a subscription query:
```
subscription {
  message
}
```
I recieve the following error:
```
{
  "error": {
    "message": "Subscription field must return Async Iterable. Received: undefined"
  }
}
```
