# User-Agent Flows

The recommended way for an application to use OAuth and obtain access tokens, is
to request authorization through an external user agent, typically the user's
web browser.

When using user-agent-based flows, an application sends an authorization request
and receives an authorization response _indirectly_, by redirecting the user
to the authorization server via a web browser.  The authorization request is
received by the authorization server on its _authorization endpoint_.  The
authorization resposne is sent to the client at its _redirect endpoint_ (also
known as a _callback URL_).

Because the request and response are received indirectly via the user agent, the
authorization server has the opportunity to interact with the user by rendering
web pages and collecting input via forms.  Commonly, the authorization server
will prompt the user to authenticate (if not already logged in) and obtain the
user's consent for the permissions the application is requesting.  These prompts
interleve a series of HTTP requests to and from the users browser, _between_ the
authorization request and response.
