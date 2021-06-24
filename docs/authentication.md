---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authentication

The Novogenia API uses **[JWT-Tokens](https://jwt.io/introduction)** to authenticate requests. 

```text title="Example JWT-Token"
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

:::note Your Auth Token

If you don't have a JWT-Token, you can **[request](mailto:service@novogenia.com?body=Hallo&subject=JWT-Auth-Token)** one.

:::

All API requests must be made over **[HTTPS](https://en.wikipedia.org/wiki/HTTPS)**. Calls made over plain HTTP will fail. API requests without authentication will also fail.

The auth token must be sent in the header file as follows: <code>headers: { 'JWT-Token': [YOUR_JWT_TOKEN] }</code>

:::danger

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

:::

# Error

If no <code>JWT-Token</code> is found in the headers or if the <code>JWT-Token</code> is not valid, you get the following response.

```json title="Response"
{
    status: 'error',
    error_message: 'Unauthorized',
    error_code: 401
}
```
