# Authorization Code

The response in an authorization code flow consists of an _authorization code_.
This code denotes the user's authorization, but is itself not directly usable as
a credential to access protected resources.  Rather, the code can be exchanged
for an access token, and that access token can then be used for resource access.


### Security Properties

The authorization code flow has two important security benefits:

1. The authorization server can authenticate the client.
2. Access tokens are issued directly to the client, and do not pass through the user's web browser.