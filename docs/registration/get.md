---
sidebar_position: 5
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
https://order-gateway-api.novogenialab.com/v1/registration/get
```

</td>
</tr>
</table>

With this method you can get all the values from a user for which the <code>id</code> is known.

# Parameters

<ParameterExplain parameter="id" typ="number">
The id of the record you want to get.
</ParameterExplain>

# Example Request

<Tabs
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'Python', value: 'py', }]
}>
<TabItem value="js">

```jsx
const fetch = require("node-fetch");

const JWT_TOKEN = '[YOUR_JWT_TOKEN]';
const url = 'https://order-gateway-api.novogenialab.com/v1/registration/get';
const obj = {
    id: 1
}

const options = { method: 'GET', headers: { 'JWT-Token': JWT_TOKEN }, params: obj};

fetch(url, options).then(res => res.text()).then(response => {
    console.log(JSON.parse(response))
});
```

</TabItem>
<TabItem value="py">

```py
import requests

JWT_TOKEN = '[YOUR_JWT_TOKEN]';
url = 'https://order-gateway-api.novogenialab.com/v1/registration/get';

obj = {
    'id': 1
}

response = requests.get(
    url,
    params=obj,
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
    "id": 1,
    "order_id": 10,
    "registration_code": "YY041058040818",
    "distribution_channel": "1M8VJ",
    "distribution_channel_text": "Yu-Fan GmbH",
    "gender": "male",
    "birthday": "1987-07-15",
    "title": "Mr",
    "first_name": "First",
    "last_name": "Last",
    "order_info": "",
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
    "printed_report_delivery_customer": false,
    "printed_report_delivery_distribution_channel": true,
    "printed_report_delivery_partner": false,
    "printed_report_delivery_other": true,
    "printed_report_delivery_other_name": "Do Ngoc Hai",
    "printed_report_delivery_other_street": "449 TC",
    "printed_report_delivery_other_city": "HCM",
    "printed_report_delivery_other_telephone": "+849509000975",
    "printed_report_delivery_other_postcode": "7777",
    "printed_report_delivery_other_country": "US",
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
    ],
    "questions": [
      {
        "answer": [
          {
            "text": "Arteriosklerose",
            "value": "40"
          },
          {
            "text": "Arthrose",
            "value": "41"
          },
          {
            "text": "Asthma",
            "value": "42"
          }
        ],
        "code": "MedicalHistory",
        "question": "Erkrankungen/Leiden (Teil2)"
      },
      {
        "answer": "Mr. Baby",
        "code": "BabyName",
        "question": "Vorname des Kindes"
      },
      {
        "answer": {
          "text": "aktiv",
          "value": "3"
        },
        "code": "JOBACTIVITY",
        "question": "Körperliche Aktivität in der Arbeit/Freizeit"
      },
      {
        "answer": "72",
        "code": "Weight",
        "question": "Körpergewicht (kg)"
      },
      {
        "answer": "173",
        "code": "Height",
        "question": "Körpergröße (cm)"
      }
    ],
  }
}
```

# Failed Response

```json
{
    "status": "error",
    "error_field": "id",
    "error_message": "Registration does not exist",
    "error_code": 100
}
```