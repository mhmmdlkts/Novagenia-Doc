---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ParameterExplain from '../components/parameterExplain.js';

# Update

<table>
<tr class="api">
<td class="api">

```text
POST
```

</td>
<td class="api">

```text
https://order-gateway-api.novogenialab.com/v1/registration/update
```

</td>
</tr>
</table>

This method will allow you to update all the values from a record. 

# Parameters

All parameters that were made available in **[create](docs/registration/create.md)** can also be used here. All parameters except <code>id</code> are optional.

<ParameterExplain parameter="id" typ="number">
The id of the record you want to update.
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
const url = 'https://order-gateway-api.novogenialab.com/v1/registration/update';
const obj = {
    id: 100,
    dc_code: '1M8VJ',
    language: 'en',
    products: ['M2IBD', 'NC2M'],
    questions: {
        Weight: 72,
        Height: 173,
        JobActivity: 3,
        BabyName: 'Mr. Baby',
        MedicalHistory: [40, 41, 42]
    }
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
url = 'https://order-gateway-api.novogenialab.com/v1/registration/update';
obj = {
    'id': 100,
    'dc_code': '1M8VJ',
    'language': 'en',
    'products': ['M2IBD', 'NC2M'],
    'questions': {
        'Weight': 72,
        'Height': 173,
        'JobActivity': 3,
        'BabyName': 'Mr. Baby',
        'MedicalHistory': [40, 41, 42]
    }
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
    "error_field": "dc_code",
    "error_message": "Invalid distribution channel",
    "error_code": 100
}
```