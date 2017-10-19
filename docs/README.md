# Introduction

OAuth 2.0 is an authorization framework that allows applications to request and
obtain access to APIs and other online services.  The access that an application
obtains can be limited to a specific set of permissions.  In a familiar social
networking scenario, a user might allow an application to post messages to her
timeline while restricting this permission from other applications.

The permissions a user grants to each application are recorded, allowing them to
be modified or revoked later.  For example, if a user discovers that an
application is posting unwanted mnessages, that permission can be revoked,
preventing the application from doing so in the future.  If a user loses her
phone, access to all applications installed on that device can be revoked, while
applications on other devices continue to operate normally.

OAuth 2.0 [specifies](https://tools.ietf.org/html/rfc6749) a flexible and
extensible protocol, which provides a variety of mechanisms by which an
application can obtain access.  This flexibility allows OAuth to be used in
almost any scenario.  However, it is often a cause of confusion, because it is
not always clear what mechanisms are appropriate in what situations.

Implementing OAuth properly allows services to enhance security, while giving
users more control over their privacy and the applications they use to access
online services.  However, if not understood and implemented improperly, OAuth
can be a vector for security exploits.

This guide seeks to clarify some of the confusion surrounding OAuth, while
illustrating how to build an OAuth 2.0 authorization server using OAuth2orize
and [Node.js](https://nodejs.org/).
