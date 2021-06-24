---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ParameterExplain from '../components/parameterExplain.js';

# Cancel

<table>
<tr class="api">
<td class="api">

```text
POST
```

</td>
<td class="api">

```text
https://order-gateway-api.novogenialab.com/v1/registration/cancel
```

</td>
</tr>
</table>

This method will allow you to cancel a record.

:::note

You can only cancel **pending** and **processed** registrations.

:::


# Parameters

<ParameterExplain parameter="id" typ="number">
The id of the record you want to cancel.
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
const url = 'https://order-gateway-api.novogenialab.com/v1/registration/cancel';
const obj = {
    id: 100
}

const options = { method: 'POST', headers: { 'JWT-Token': JWT_TOKEN }, body: obj};

fetch(url, options).then(res => res.text()).then(response => {
    console.log(JSON.parse(response))
});
```

</TabItem>
<TabItem value="py">

```py
import requests

JWT_TOKEN = '[YOUR_JWT_TOKEN]';
url = 'https://order-gateway-api.novogenialab.com/v1/registration/cancel';
obj = {
    'id': 100
}

response = requests.post(
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
  "id": 100
}
```

# Failed Response

```json
{
    "status": "error",
    "error_field": "id",
    "error_message": "Invalid registration",
    "error_code": 100
}
```