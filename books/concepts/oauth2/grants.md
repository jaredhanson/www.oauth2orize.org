# Authorization Grants

OAuth 2.0 defines a set of _authorization grants_ which represent the user's
consent to allow an application to access the user's data and information.
OAuth 2.0 specifies four types of authorization grants: [authorization code](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1),
[implicit](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.2),
[password](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.3), and
[client credentials](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.4).

Each grant type uses one or both of the authorization endpoint and token
endpoint.

| Grant Type         | Authorization Endpoint | Token Endpoint |
| ------------------ | ---------------------- | -------------- |
| Authorization Code | &check;                | &check;        |
| Implicit           | &check;                |                |
| Password           |                        | &check;        |
| Client Credentials |                        | &check;        |

Grant types that do not use the authorization endpoint require applications to
handle user credentials directly.  For instance, the user's consent to grant
access is inferred from the act of the user handing over their password to an
application.  While this may be appropriate in certain scenarios, it diminishes
the security benefits of using OAuth, especially when authorizing third-party
applications, and fails to fully inform the user of the consequence of thier
action.

Grant types making use of the authorization endpoint are obtained by sending
authorization requests to the OAuth 2.0 server via redirecting the user's
browser to this endpoint.  The server, rather than the application, is then
handling user credentials as well as obtaining consent, which can be fully
informed.  In other words, the server is an intermediary between the user and
the application.

Using the server as an intermediary is the preferred method for obtaining
authorization, as it takes full advantage of the security benefits offered by
OAuth.  As such, this guide focuses on the authorization code and implict
grants, leaving other types for further reading.

For grant types that use the authorization endpoint, the grant is returned to
the application through a grant plugin supplied by OAuth2orize.  For example,
registering a plugin to issue an authorization code to the application:

```
as.grant(oauth2orize.grant.code(function issue(client, redirectURI, user, authz, cb) {
  // ...
}));
```

Similarly, for grant types that use the token endpoint, the grant is exchanged
for an access token through an exchange plugin supplied by OAuth2orize.  For
example, registering a plugin to exchange an authorization code for an access
token:

```
as.exchange(oauth2orize.exchange.code(function issue(client, code, redirectURI, cb) {
  // ...
}));
```

Corresponding to the table above, OAuth2orize exports a grant plugin for each
grant type that uses the authorization endpoint.

```
oauth2orize.grant.code(...); // Authorization Code Grant
oauth2orize.grant.token(...); // Implicit Grant
```

And OAuth2orize exports an exchange plugin for each grant type that uses the
token endpoint.

```
oauth2orize.exchange.code(...); // Authorization Code Grant
oauth2orize.exchange.password(...); // Password Grant
oauth2orize.exchange.clientCredentials(...); // Client Credentials Grant
```

As this guide progresses and additional OAuth 2.0 concepts are explained, more
details will be provided about how these plugines integrate with the other
aspects of the OAuth2orize toolkit.
