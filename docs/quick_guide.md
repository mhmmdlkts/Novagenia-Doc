---
sidebar_position: 2
---

# Quick Guide

## Registration

Gather all the needed data from the customer and the ordered products. You can check all required and optional parameters **[here](/docs/registration/create)**. Don't forget to generate a barcode and pair it with that specific order. After registration, Novogenia checks the given data after confirmation the status changes from pending to processed. You can check the information and status with the **[here](/docs/registration/get)** API.

## Shipment

The barcoded test kits are being send to the customer.

## Saliva Sample

The customer readies the test kits and ships them to the laboratory.

## At Novogenia

When Novogenia gets the samples. The status will be updated. You can obtain all different statuses **[here](/docs/lists/status)**. Novogenia will set up an Order Object and an ID, with which you can reach the Object, those will be written in <code>order-id</code>.

### Order

An order contains all the prime information of the customer and sample. You can get the order object with **[this](/docs/order/get)** method.

## Analyzing

The sample will be analyzed by our team of professionals.

## Result

When the analysis is completed, the results will be documented in three different file types: PDF, XML and Excel. With **[this](/docs/order/download_report)** method, you can download the report in a file format you prefer. Novogenia will notify the customer that analysis is completed.

![Quick Guide](/img/novogenia_workflow.png)