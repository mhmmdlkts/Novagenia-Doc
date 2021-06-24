---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ParameterExplain from '../components/parameterExplain.js';

# Get

<table>
<tr class="api">
<td class="api">

```text
GET
```

</td>
<td class="api">

```text
https://order-gateway-api.novogenialab.com/v1/order/get
```

</td>
</tr>
</table>

With this method you can get all the values from a order for which the <code>id</code> is known.

:::note

Data only available for certain partners.

:::

# Parameters

<ParameterExplain parameter="id" typ="number">
The id of the order you want to get.
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
const url = 'https://order-gateway-api.novogenialab.com/v1/order/get';
const obj = {
    id: 24
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
url = 'https://order-gateway-api.novogenialab.com/v1/order/get';
obj = {
    'id': 24
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
  "record": {
    "id": 10,
    "order_number": "GX12WW6",
    "external_barcode": "GX12AAA",
    "distribution_channel": "WKNTE",
    "first_name": "Mr.First name",
    "last_name": "Last Name",
    "address": "120 Street",
    "address_addition": "125 Street",
    "city": "City",
    "fax": "+123",
    "gender": "female",
    "country": "AT",
    "email": "mail@mail.com",
    "payment_code": "NK123",
    "phone": "+840912145",
    "postcode": "7777",
    "current_status": "ADFR1",
    "current_status": "All details fully registered",
    "current_status_timestamp": "2018-10-10T05:05:00Z",
    "date_ordered": "2018-10-02T00:15:20Z",
    "printed_report_delivery_customer": true,
    "printed_report_delivery_partner": true,
    "printed_report_delivery_distribution_channel": true,
    "printed_report_delivery_other": false,
    "printed_report_delivery_other_name": "",
    "printed_report_delivery_other_city": "",
    "printed_report_delivery_other_street": "",
    "printed_report_delivery_other_telephone": "",
    "printed_report_delivery_other_postcode": "",
    "printed_report_delivery_other_country": "",
    "reports": [
      {
        "id": 1,
        "name": "GX12AAA.pdf",
        "available_files": [
          "pdf","xml","excel"
        ],
      }
    ],
    "categories": [
      {
        "code": "cate_1",
        "name": "#Category 1"
      },
      {
        "code": "Z - OLD - DNA+Premium Analyse Female",
        "name": "Z - OLD - DNA+Premium Analyse Female"
      }
    ],
    "products": [
      {
        "code": "B6TRI",
        "name": "#B6TRI - Trisomy Analysis"
      },
      {
        "code": "GBAT",
        "name": "#GBAT - Cosmetic packaging shipping AT"
      },
      {
        "code": "A2SUP",
        "name": "#A2SUP - Dog Analysis - Light Version"
      },
      {
        "code": "GBCH",
        "name": "#GBCH - Cosmetic packaging shipping CH"
      },
      {
        "code": "B4PRE",
        "name": "#B4PRE - Pregnancy Analysis"
      },
      {
        "code": "C1SNP6",
        "name": "#C1SNP6 - SNP Panel"
      },
      {
        "code": "GR129",
        "name": "#GR129 - Report printing shipping 29"
      },
      {
        "code": "C1SNP1",
        "name": "#C1SNP1 - SNP Panel"
      },
      {
        "code": "GSCA",
        "name": "#GSCA - Subscription packaging shipping CHN AM"
      },
      {
        "code": "L1WSP",
        "name": "#L1WSP - Weight loss programm Pharma"
      }
    ],
    "status": [
      {
        "timestamp": "2018-08-13T00:00:00Z",
        "code": "ADFR1",
        "name": "All details fully registered"
      }
    ],
    "menu_portal": {
      "kcal_to_lose_execise": "334",
      "weight": "70",
      "height": "165",
      "kcal_carbohydrates": "51",
      "kcal_protein": "20",
      "target_weight": "60",
      "kcal_fat": "29",
      "date_of_birth": "1981-03-20T00:00:00Z",
      "id_activity_level": "1",
      "kcal_to_lose_diet": "532",
      "num_meal_per_day": "3"
      "login_code": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
  }
}
```

# Failed Response

```json
{
  "status": "error",
  "error_field": "id",
  "error_message": "Order does not exist",
  "error_code": 100
}
```