---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ParameterExplain from '../components/parameterExplain.js';

# List

<table>
<tr class="api">
<td class="api">

```text
GET
```

</td>
<td class="api">

```text
https://order-gateway-api.novogenialab.com/v1/order/list
```

</td>
</tr>
</table>

With this method, the orders your customers have ordered are listed.

# Parameters

<ParameterExplain parameter="sort_key" typ="string" defaultVal="id" possibleValues='["id"]'>
Key to be sorted.
</ParameterExplain>

<ParameterExplain parameter="sort_dir" typ="string" defaultVal="desc" possibleValues='["asc", "desc"]'>
You can specify whether to sort ascending or descending.
</ParameterExplain>

<ParameterExplain parameter="pager_start" typ="number" defaultVal="0">
Since you can reach up to 50 data records at the same time, you can specify in the second query which data records should be started with.
</ParameterExplain>

<ParameterExplain parameter="pager_num_records" typ="number" defaultVal="20">
How many records should be returned at once. The value can be max. 50.
</ParameterExplain>

<ParameterExplain parameter="order_number" typ="string" defaultVal="">
Search by order number.
</ParameterExplain>

<ParameterExplain parameter="external_barcode" typ="string" defaultVal="">
Search by external barcode.
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
const url = 'https://order-gateway-api.novogenialab.com/v1/order/list';
const obj = {
    pager_num_records: 50
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
url = 'https://order-gateway-api.novogenialab.com/v1/order/list';
obj = {
    'pager_num_records': 50
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
  "num_record_matched": 614,
  "records": [
    {
      "id": 10,
      "first_name": "Mr.First name",
      "last_name": "Last Name",
      "external_barcode": "GX12AAA",
      "payment_code": "PM123",
      "distribution_channel": "WKNTE",
      "date_ordered": "2018-10-02T00:15:20Z",
      "current_status": "ADFR1",
      "current_status_message": "All details fully registered",
      "current_status_timestamp": "2018-10-10T05:05:00Z",
      "distribution_channel_name": "GenLife Share Health",
      "order_number": "GX12WW6"
    },
    {
      ...
    },
    ...
  ]
}
```

# Failed Response

```json
{
  "status": "error",
  "error_field": "sort_key",
  "error_message": "Invalid sort key",
  "error_code": 100
}
```