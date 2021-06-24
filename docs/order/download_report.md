---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ParameterExplain from '../components/parameterExplain.js';

# Download Report

<table>
<tr class="api">
<td class="api">

```text
GET
```

</td>
<td class="api">

```text
https://order-gateway-api.novogenialab.com/v1/order/download_report
```

</td>
</tr>
</table>

With this method you can download a report which the report <code>id</code> is known.

# Parameters

<ParameterExplain parameter="id" typ="number">
The id of the file you want to get.
</ParameterExplain>

<ParameterExplain parameter="file" typ="string" defaultVal="pdf" possibleValues='["pdf", "xml", "excel"]'>
You can specify the file format.
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
const url = 'https://order-gateway-api.novogenialab.com/v1/order/download_report';
const obj = {
    id: 50,
    file: 'pdf'
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
url = 'https://order-gateway-api.novogenialab.com/v1/order/download_report';
obj = {
    'id': 50,
    'file': 'pdf'
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
Save file to path
```

# Failed Response

```json
{
  "status": "error",
  "error_message": "File not found",
  "error_code": 404
}

{
  "status": "error",
  "error_message": "Unauthorize to download report",
  "error_code": 401
}
```