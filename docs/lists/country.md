---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ParameterExplain from '../components/parameterExplain.js';

# Country

<table>
<tr class="api">
<td class="api">

```text
GET
```

</td>
<td class="api">

```text
https://order-gateway-api.novogenialab.com/v1/lists/country
```

</td>
</tr>
</table>

This method will return all countries.

# Parameters

<ParameterExplain parameter="code" typ="string" defaultVal="">
Code of country
</ParameterExplain>

<ParameterExplain parameter="name" typ="string" defaultVal="">
Name of country
</ParameterExplain>

# Example Request

<Tabs
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'Python', value: 'py', },
]
}>
<TabItem value="js">

```jsx
const fetch = require("node-fetch");

const JWT_TOKEN = '[YOUR_JWT_TOKEN]';
const url = 'https://order-gateway-api.novogenialab.com/v1/lists/country';

const options = { method: 'GET', headers: { 'JWT-Token': JWT_TOKEN }};

fetch(url, options).then(res => res.text()).then(response => {
    console.log(JSON.parse(response))
});
```

</TabItem>
<TabItem value="py">

```py
import requests

JWT_TOKEN = '[YOUR_JWT_TOKEN]';
url = 'https://order-gateway-api.novogenialab.com/v1/lists/country';

response = requests.get(
    url,
    headers={'JWT-Token': JWT_TOKEN},
).json()

print(response)
```

</TabItem>
</Tabs>

# Successful Response

```json
{
  "status": "success",
  "records": [
    {
      "code": "en",
      "name": "England"
    },
    {
      "code": "de",
      "name": "Germany"
    }
  ]
}
```

# Failed Response

```json
{
  "status": "error",
  "error_code": 400,
  "error_message": "Unauthorized"
}
```