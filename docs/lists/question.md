---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ParameterExplain from '../components/parameterExplain.js';

# Question

<table>
<tr class="api">
<td class="api">

```text
GET
```

</td>
<td class="api">

```text
https://order-gateway-api.novogenialab.com/v1/lists/question
```

</td>
</tr>
</table>

This method will return all questions, and its question code.

# Parameters

<ParameterExplain parameter="code" typ="string" defaultVal="">
Question code
</ParameterExplain>

<ParameterExplain parameter="name" typ="string" defaultVal="">
User-Friendly name
</ParameterExplain>

<ParameterExplain parameter="type" typ="string" defaultVal="" possibleValues='["section", "text", "single-choice", "multi-choice"]'>
Control type
</ParameterExplain>

<ParameterExplain parameter="sort_order" typ="string" defaultVal="">
Ordering
</ParameterExplain>

<ParameterExplain parameter="choices" typ="string" defaultVal="">
Available in case control type = single-choice or multi-choice
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
const url = 'https://order-gateway-api.novogenialab.com/v1/lists/question';

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
url = 'https://order-gateway-api.novogenialab.com/v1/lists/question';

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
      "type": "section",
      "code": null,
      "sort_order": 1,
      "name": "QUESTION"
    },
    {
      "type": "text",
      "code": "Weight",
      "sort_order": 2,
      "name": "Customer Weight (Kg)"
    },
    {
      "type": "single-choice",
      "code": "Ethnicity",
      "sort_order": 3,
      "name": "Customer Ethnicity",
      "choices": [
        {"code": "1", "name": "Asian"},
        {"code": "2", "name": "Africa"}
      ]
    },
    {
      "type": "multi-choice",
      "code": "Diseases",
      "sort_order": 4,
      "name": "Known Diseases",
      "choices": [
        {"code": "disease-a", "name": "Disease A"},
        {"code": "disease-b", "name": "Disease B"},
        {"code": "disease-c", "name": "Disease C"}
      ]
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