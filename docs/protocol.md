# Protocol

OAuth 2.0 is infamous for being notoriously complex and hard to both understand
and implement.  The authors of this guide do not disagree.  Despite this, OAuth
has gained acceptance as an industry standard.  Justified grievances aside,
there is value in adopting standard protocols, and the authors of this guide
believe that to be sufficient rationale for implementing OAuth.  Thankfully,
the authors of this guide are sharing their hard-earned knowledge, gained from
years of experience, to help make this implementation easier.

### Request-Response

At its simplest, OAuth is best understood as a request-response protocol.  An
application makes an _authorization request_ and receives an _authorization
response_.  If successful, the response contains the access token needed to
access an API.  Otherwise, it contains an indication of what went wrong.  In
this way, it is similar to HTTP.

OAuth 2.0 defines two endpoints:

  1. Authorization Endpoint
  
  2. Token Endpoint

These two endpoints are used, either alone or in combination, to send
authorization requests and recieve authorization responses.  This is where the
confusing aspects of OAuth start to creep in.  Unlike HTTP, where a request and
response are paired over a single connection, in OAuth the request and response
are typically sent and received _indirectly_, via redirects in a user's web
browser.

As you proceed through this guide, you will be presented with various ways of
making authorization requests and recieving authorization responses.  These
various ways are also known as _flows_.  Flows that make use of redirects and
indirection can be confusing and overwhelming at first.  When that happens, we
encourage you to focus on the _request_ and _response_, rather than the
redirects themselves.  The guide will call attention to this as needed in order
to help with understanding.

### Authorization Server, Client, and Resource Server

TODO:
