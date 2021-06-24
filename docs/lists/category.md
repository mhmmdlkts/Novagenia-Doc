---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ParameterExplain from '../components/parameterExplain.js';

# Category

<table>
<tr class="api">
<td class="api">

```text
GET
```

</td>
<td class="api">

```text
https://order-gateway-api.novogenialab.com/v1/lists/category
```

</td>
</tr>
</table>

This method will return all available categories.

# Parameters

<ParameterExplain parameter="code" typ="string" defaultVal="">
Category code
</ParameterExplain>

<ParameterExplain parameter="name" typ="string" defaultVal="">
User-Friendly name
</ParameterExplain>

<ParameterExplain parameter="products" typ="string" defaultVal="">
List of products associated with this category
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
const url = 'https://order-gateway-api.novogenialab.com/v1/lists/category';
const obj = {
    code: '24'
}

const options = { method: 'GET', headers: { 'JWT-Token': JWT_TOKEN }, body: obj};

fetch(url, options).then(res => res.text()).then(response => {
    console.log(JSON.parse(response))
});
```

</TabItem>
<TabItem value="py">

```py
import requests

JWT_TOKEN = '[YOUR_JWT_TOKEN]';
url = 'https://order-gateway-api.novogenialab.com/v1/lists/category';
obj = {
    'code': '24'
}

response = requests.get(
    url,
    data=obj,
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
      "code": "DNC-COMPLETE",
      "name": "DNC - Package",
      "products": [
        {"code": "GCWO",  "name": "#GCWO - Nutrients packaging shipping WORLD"},
        {"code": "M5SCH",  "name": "#M5SCH - Schizophrenia Analysis"}
      ]
    },
    {
      "code": "SPDP",
      "name": "#SPDP - Premium Subscription Platinum",
      "products": [
        {"code": "GCAT",  "name": "#GCAT - Nutrients packaging shipping AT"},
        {"code": "GWDE",  "name": "#GWDE - Inhibitors packaging shipping DE"}
      ]
    },
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