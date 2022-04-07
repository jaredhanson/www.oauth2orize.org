# Use Case

To begin our journey in understanding OAuth 2.0, let's analyze a scenario that
illustrates the problem that OAuth 2.0 solves.

Alice has a checking account at Alpha Bank.  As part of its online banking
platform, Alpha Bank provides an API by which customer financial data, including
Alice's, can be accessed.  This API enables an ecosystem of third-party
services.

Budgetify is one of those third-party services, which helps customers like Alice
manage spending and savings.  By integrating with Alpha Bank's API, Budgetify is
able to automatically analyze transactions, providing Alice with intelligent
recommendations on how to reduce or eliminate recurring expenses.

In the time before OAuth, this integration would require Alice to hand over her
username and password to Budgetify.  Since Alice has been rightfully warned to
never share her password with third parties, which she heeds, she is unable to
benefit from Budgetify's recommendations.

If Alice ignores the warning, she's placing a high degree of trust in Budgetify.
She's relying on Budgetify to securely store her password, a task which is
difficult to ensure given it needs to be available in cleartext.  Since her
password grants full access to her account, she's expecting Budgetify to use it
only for the purpose of reading transactions, and not to transfer money.  The
list of concerns only grows from here.  Clearly, this security model leaves a
lot to be desired.

OAuth addresses this problem by issuing Budgetify an application-specific
credential, known as an _access token_, rather than requiring Budgetify to use
a user credential such as a password.  Budgetify obtains an access token by
making an authorization request to Alpha Bank.  This authorization request is
sent to Alpha Bank's _authorization server_, which is a part of Alpha Bank's
website.

When Alpha Bank's authorization server receives an authorization request, it is
responsible for two primary functions:
  1. Logging Alice in.
  2. Obtaining Alice's consent to allow Budgetify access to her account.
  
