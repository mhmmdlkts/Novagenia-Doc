---
sidebar_position: 4
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
https://order-gateway-api.novogenialab.com/v1/registration/list
```

</td>
</tr>
</table>

With this method, the users you have registered are listed.

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

<ParameterExplain parameter="filter_text" typ="string" defaultVal="">
With the help of this field you can filter the users with their first name, last name, registration_code and barcode.
</ParameterExplain>

<ParameterExplain parameter="filter_status" typ="string" defaultVal="all" possibleValues='["all", "pending", "processed", "cancelled"]'>
With the help of this field you can filter the users by their status.
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
const url = 'https://order-gateway-api.novogenialab.com/v1/registration/list';
const obj = {
    sort_key: 'id',
    pager_start: 100,
    pager_num_records: 50,
    filter_text: 'Max',
    filter_status: 'cancelled'
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
url = 'https://order-gateway-api.novogenialab.com/v1/registration/list';
obj = {
    'sort_key': 'id',
    'pager_start': 100,
    'pager_num_records': 50,
    'filter_text': 'Max',
    'filter_status': 'cancelled'
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
            "id": 100,
            "order_id": 10,
            "registration_code": "YY041058040818",
            "distribution_channel": "1M8VJ",
            "distribution_channel_text": "Yu-Fan GmbH",
            "gender": "male",
            "birthday": "1987-07-15",
            "title": "Mr",
            "first_name": "First",
            "last_name": "Last",
            "previous_order_number": "NA123456",
            "external_barcode": "E1234",
            "barcode": "NE1234",
            "address": "Address",
            "address_addition": "Address 2",
            "postcode": "80111",
            "city": "HCM",
            "country": "vn",
            "country_text": "VIET NAM",
            "email": "test@gmail.com",
            "payment_code": "321",
            "fax": "+F 1234 4321",
            "phone": "0905610493",
            "language": "en",
            "language_text": "ENGLISH",
            "report_goes_to": "customer",
            "nutrime_goes_to": "distribution_channel",
            "is_download": 1,
            "is_print_booklet": 0,
            "categories": [
                {
                    "text": "#XYSL4 - Day and Night 50ml Lotion 400ml",
                    "code": "XYSL4"
                }
            ],
            "products": [
                {
                    "text": "#M2IBD - Crohn´s disease Analysis",
                    "code": "M2IBD"
                },
                {
                    "text": "#NC2M - Micronutrients 2 months",
                    "code": "NC2M"
                },
                {
                    "text": "#YD50 - Day Cream 50ml",
                    "code": "YD50"
                },
                {
                    "text": "#YLO4 - Body Lotion 400ml",
                    "code": "YLO4"
                },
                {
                    "text": "#YN50 - Night Cream 50ml",
                    "code": "YN50"
                }
            ]
        },
        {
            ...
        },
        ...
    }
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