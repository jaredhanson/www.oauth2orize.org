# Endpoints

OAuth 2.0 servers expose two endpoints: an authorization endpoint and a token
endpoint.

The authorization endpoint is used to interact with the user and obtain
permission to grant access.  This interaction occurs in the user's browser.
Applications send authorization requests to the OAuth 2.0 server by redirecting
the user's browser to this endpoint.  Once the server receives the request, it
interacts with the user via a series of HTML pages, to log the user in and
obtain the user's consent.

The token endpoint is used by the application to obtain access tokens, after the
user has granted access.

OAuth2orize provides a [Express](https://expressjs.com/) middleware to implement
these endpoints.

```js
var as = oauth2orize.createServer();

app.get('/authorize',
  server.authorize(validate, authorize),
  function interact(req, res) {
    // ...
  });
  
app.post('/token',
  passport.authenticate(['basic', 'oauth2-client-password'], { session: false }),
  as.token(),
  as.errorHandler());
```

As this guide progresses and additional OAuth 2.0 concepts are explained, more
details will be provided about how the middleware integrates with the
OAuth2orize toolkit.
