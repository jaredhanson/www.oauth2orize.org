# Overview

[OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749) is an authorization
framework that allows applications to gain access to an API.  This access is
granted with the consent of the user whose information is protected by the API.
Once granted, the application can the use the API to create and modify data that
the user has permitted the application to access.

OAuth2orize is a toolkit for building OAuth 2.0 servers.  OAuth2orize provides
[Express](https://expressjs.com/) middleware used to implement OAuth 2.0
endpoints.  These endpoints allow applications to request authorization and
obtain tokens.  Additionally, OAuth2orize provides a pluggable suite of grants
and exchanges which correspond to the extensible set of authorization grants
defined by OAuth 2.0.

This guide provides an overview of OAuth 2.0.  As a framework, OAuth 2.0 is
highly extensible with many optional components, leaving numerous implementation
details to the developer.   This guide focuses on the fundamental and most
commonly used aspects of OAuth 2.0.  By reading this guide, you will gain an
understanding of how OAuth 2.0 works, and how to use OAuth2orize to build a
functional OAuth 2.0 server.
