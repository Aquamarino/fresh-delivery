
# 之前的作废

# 1商家获取订单列表

```
url=`/getmerchantorderlist?id=${id}&page=${page}`
method = GET
request query如上

response body = 
    [
    {
        "orderId": 234567,
        "customerId": 234567,
        "customerName":"杰克",
        "status":"已付款",
        "date":"9102年",
        "shopId": 765432,
        "shopName":"大连路分店",
        "totalPrice": 50.0,
        "payMethod":"蚂蚁花呗",
        "discount":"满50减10",
        "delivery":"韵达快递",
        "deliveryId":"139437284",
        "note":"要肉不要香菜。",
        "list":[
            {
                
                "commodityId": 12346,
                "commodityName":"社会主义大菠萝",
                "commodityType":"新鲜水果",
                "commodityPic":"https://images.unsplash.com/photo-1512578659172-63a4634c05ec",
                "quantity":3,
                "price":4.99,
                "unit":"斤"
            },
            {
                
                "commodityId": 1234326,
                "commodityName":"社会主义大菠萝花篮",
                "commodityType":"水果篮子",
                "commodityPic":"https://images.unsplash.com/photo-1512578659172-63a4634c05ec",
                "quantity":1,
                "price":17.00,
                "unit":"篮"
            }
        ]
    }
]
```

# 2商家通过快递单号获取快递详情

```
url=`/getdelivery?id=${id}`
method = GET
request query如上

response body = 
   [
    {
        "date":"5/20 7:30 am",
        "location":"上海",
        "status":"运输中",
        "description":"快件已经到达嘉定集散中心。等待派送。"
    },
    {
        "date":"5/19 6:30 pm",
        "location":"江苏",
        "status":"运输中",
        "description":"快件在花桥集散中心装车，等待发往：嘉定集散中心。"
    },
    {
        "date":"5/18 6:30 pm",
        "location":"江苏",
        "status":"揽收中",
        "description":"快件已揽收。"
    }
]
```


# 3商家通过商品ID获取订单详情

```
url=`/getcommodityorderlist?page=${num}&id=${CommodityId}`
method = GET
request query如上

response body = 
   [
    {
        "orderId": 234567,
        "customerId": 234567,
        "customerName":"杰克",
        "status":"已付款",
        "date":"9102年",
        "shopId": 765432,
        "shopName":"大连路分店",
        "totalPrice": 50.0,
        "payMethod":"蚂蚁花呗",
        "discount":"满50减10",
        "delivery":"韵达快递",
        "deliveryId":"139437284",
        "note":"要肉不要香菜。",
        "list":[
            {
                
                "commodityId": 12346,
                "commodityName":"社会主义大菠萝",
                "commodityType":"新鲜水果",
                "commodityPic":"https://images.unsplash.com/photo-1512578659172-63a4634c05ec",
                "quantity":3,
                "price":4.99,
                "unit":"斤"
            },
            {
                
                "commodityId": 1234326,
                "commodityName":"社会主义大菠萝花篮",
                "commodityType":"水果篮子",
                "commodityPic":"https://images.unsplash.com/photo-1512578659172-63a4634c05ec",
                "quantity":1,
                "price":17.00,
                "unit":"篮"
            }
        ]
    }
]
```


# 4商家通过商品ID获取订单详情

```
url=`/getcommoditycomments/findById?id=${itemId}`
method = GET
request query如上

response body = 
   [
    {
        "customerId":1652768,
        "customerName":"匿名用户123",
        "customerIconHead":"https://s3.amazonaws.com/duolingo-stories-prod/image/0725dbee4aa3b9ea5fd038add4e6f63162dfbd87.svg",
       "comment":"我不喜欢啊我不喜欢啊我不喜欢啊我不喜欢啊我不喜欢啊我不喜欢啊我不喜欢啊我不喜欢啊我不喜欢啊我不喜欢啊我不喜欢啊我不喜欢啊我   "rate":3,
        "comment":"我真的很喜欢这个妃子笑，好好吃。",
        "createTime":"9102/12/12",
        "id":1
    },
    {
        "customerId":16527643,
        "customerName":"匿名用户233",
        "customerIconHead":"https://s3.amazonaws.com/duolingo-stories-prod/image/0725dbee4aa3b9ea5fd038add4e6f63162dfbd87.svg",
        "rate":4,
      不喜欢啊我不喜欢啊",
        "createTime":"9102/12/12",
        "id":1212123
    }
]
```

# 5商家获取近一周销售总量（不分水果）

```
url=`/getsalesdata/`
method = GET
request query如上

response body = 
   [
    {"time": "2019-05-05", "count": 116},
    {"time": "2019-05-06", "count": 129},
    {"time": "2019-05-07", "count": 135},
    {"time": "2019-05-08", "count": 86},
    {"time": "2019-05-09", "count": 73},
    {"time": "2019-05-10", "count": 85},
    {"time": "2019-05-11", "count": 73}
]
```
