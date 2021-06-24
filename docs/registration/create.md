---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ParameterExplain from '../components/parameterExplain.js';

# Create

<table>
<tr class="api">
<td class="api">

```text
POST
```

</td>
<td class="api">

```text
https://order-gateway-api.novogenialab.com/v1/registration/create
```

</td>
</tr>
</table>

This method will allow you to create a new record. The initial status of a successful registration is **Pending**.

# Parameters

<ParameterExplain parameter="dc_code" typ="string">
The distribution code. Is required only for partners.
</ParameterExplain>

<ParameterExplain parameter="gender" typ="string" possibleValues='["male", "female"]'>
The gender of the registered person.
</ParameterExplain>

<ParameterExplain parameter="birthday" typ="string" possibleValues='["YYYY-MM-DD"]'>
The date of birth of the registered person.
</ParameterExplain>

<ParameterExplain parameter="pager_num_records" typ="number" defaultVal="20">

</ParameterExplain>

<ParameterExplain parameter="title" typ="string" defaultVal="">
The title of the registered person, if any.
</ParameterExplain>

<ParameterExplain parameter="first_name" typ="string">
The first name of the registered person.
</ParameterExplain>

<ParameterExplain parameter="last_name" typ="string">
The last name of the registered person.
</ParameterExplain>

<ParameterExplain parameter="order_information" typ="string" defaultVal="">
Additional information can be added for the order.
</ParameterExplain>

<ParameterExplain parameter="previous_order_number" typ="string" defaultVal="">
Previous order nuber can be added if there is any. 
</ParameterExplain>

<ParameterExplain parameter="external_barcode" typ="string" defaultVal="">

</ParameterExplain>

<ParameterExplain parameter="barcode" typ="string" defaultVal="">

</ParameterExplain>

<ParameterExplain parameter="payment_code" typ="string" defaultVal="">

</ParameterExplain>

<ParameterExplain parameter="address" typ="string" defaultVal="">
The address of the registered person.
</ParameterExplain>

<ParameterExplain parameter="address_2" typ="string" defaultVal="">
The second address line of the registered person.
</ParameterExplain>

<ParameterExplain parameter="postcode" typ="string" defaultVal="">
The postcode of the registered person.
</ParameterExplain>

<ParameterExplain parameter="city" typ="string" defaultVal="">
The city of the registered person.
</ParameterExplain>

<ParameterExplain parameter="country" typ="string" defaultVal="">
The country of the registered person.
</ParameterExplain>

<ParameterExplain parameter="email" typ="string" defaultVal="">
The email address of the registered person.
</ParameterExplain>

<ParameterExplain parameter="telephone" typ="string" defaultVal="">
The telephone number of the registered person.
</ParameterExplain>

<ParameterExplain parameter="fax" typ="string" defaultVal="">
The fax number of the registered person.
</ParameterExplain>

<ParameterExplain parameter="language" typ="string" defaultVal="">
The prefered language of the registered person.
</ParameterExplain>

<ParameterExplain parameter="report_goes_to" typ="string" possibleValues='["customer", "partner", "distibution_channel"]'>

</ParameterExplain>

<ParameterExplain parameter="nutrime_goes_to" typ="string" possibleValues='["customer", "partner", "distibution_channel"]'>

</ParameterExplain>

<ParameterExplain parameter="is_download_access" typ="string" defaultVal="no" possibleValues='["yes", "no"]'>

</ParameterExplain>

<ParameterExplain parameter="is_printed_booklet" typ="string" defaultVal="no" possibleValues='["yes", "no"]'>

</ParameterExplain>

<ParameterExplain parameter="categories" typ="string | list" defaultVal="">

</ParameterExplain>

<ParameterExplain parameter="products" typ="string | list" defaultVal="">
Product codes that were ordered. 
</ParameterExplain>

<ParameterExplain parameter="question" typ="map" defaultVal="">
Requiered questions for the choosen products.
</ParameterExplain>

<ParameterExplain parameter="printed_report_delivery_customer" typ="string" defaultVal="no" possibleValues='["yes", "no"]'>

</ParameterExplain>

<ParameterExplain parameter="printed_report_delivery_partner" typ="string" defaultVal="no" possibleValues='["yes", "no"]'>

</ParameterExplain>

<ParameterExplain parameter="printed_report_delivery_distribution_channel" typ="string" defaultVal="no" possibleValues='["yes", "no"]'>

</ParameterExplain>

<ParameterExplain parameter="printed_report_delivery_other" typ="string" defaultVal="no" possibleValues='["yes", "no"]'>

</ParameterExplain>

<ParameterExplain parameter="printed_report_delivery_other_name" typ="string">

</ParameterExplain>

<ParameterExplain parameter="printed_report_delivery_other_street" typ="string">

</ParameterExplain>

<ParameterExplain parameter="printed_report_delivery_other_city" typ="string">

</ParameterExplain>

<ParameterExplain parameter="printed_report_delivery_other_telephone" typ="string">

</ParameterExplain>

<ParameterExplain parameter="printed_report_delivery_other_country" typ="string">

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
const url = 'https://order-gateway-api.novogenialab.com/v1/registration/create';
const obj = {
    dc_code: '1M8VJ',
    title: 'Mr',
    first_name: 'First',
    last_name: 'Last',
    gender: 'male',
    birthday: '1987-07-15',
    previous_order_number: '',
    external_barcode: 'E1234',
    barcode: 'NE1234',
    payment_code: 'PM123',
    order_information: 'Order information',
    address: 'Address',
    address_2: 'Address 2',
    postcode: '80111',
    city: 'HCM',
    country: 'vn',
    email: 'test@gmail.com',
    telephone: '0905 610 493',
    fax: '+F 1234 4321',
    language: 'en',
    report_goes_to: 'customer',
    report_delivery: 'partner',
    nutrime_goes_to: 'distribution_channel',
    is_download_access: 'yes',
    is_printed_booklet: 'yes',
    categories: ['XYSL4'],
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
url = 'https://order-gateway-api.novogenialab.com/v1/registration/create';
obj = {
    'dc_code': '1M8VJ',
    'title': 'Mr',
    'first_name': 'First',
    'last_name': 'Last',
    'gender': 'male',
    'birthday': '1987-07-15',
    'previous_order_number': '',
    'external_barcode': 'E1234',
    'barcode': 'NE1234',
    'payment_code': 'PM123',
    'order_information': 'Order information',
    'address': 'Address',
    'address_2': 'Address 2',
    'postcode': '80111',
    'city': 'HCM',
    'country': 'vn',
    'email': 'test@gmail.com',
    'telephone': '0905 610 493',
    'fax': '+F 1234 4321',
    'language': 'en',
    'report_goes_to': 'customer',
    'report_delivery': 'partner',
    'nutrime_goes_to': 'distribution_channel',
    'is_download_access': 'yes',
    'is_printed_booklet': 'yes',
    'categories': ['XYSL4'],
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
  "registration_code": "YY112713030818",
  "id": 35
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