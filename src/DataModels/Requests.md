# 登陆
```
url = '/login'
method = POST
request body =     {
      username: string,
      password: string,
      remember: bool
    }
response body =         {
    userid: string,
    username: string,
    iconurl: string,

}
```

* response body type为JSON， 基本上JSON的键值返回string就行。

# 商家获取商品列表
```
url = '/getcommoditylist'
method = GET
request header = {
    context: string(merchant_id)
}
response body = 
[{
    "shop_id": 765432,
    "shop_name":"商店1",
    "value":[
    {
    "commodity_id": 12346,
    "pic_url":"https://images.unsplash.com/photo-1512578659172-63a4634c05ec",
    "description":"商品1详情",
    "quantity": 100,
    "price": 12.5,
    "commodity_name":"abc"
    },
    {
        "commodity_id": 12347,
        "quantity": 100,
        "pic_url":"https://images.unsplash.com/photo-1512578659172-63a4634c05ec",
        "description":"商品2详情",
        "price": 12.5,
        "commodity_name":"abc"
        }
    ]
},
{
    "shop_id": 765433,
    "shop_name":"商店2",
    "value":[
    {
    "commodity_id": 12348,
    "quantity": 100,
    "pic_url":"https://images.unsplash.com/photo-1512578659172-63a4634c05ec",
    "description":"商品3详情",
    "price": 12.5,
    "commodity_name":"abc"
    }
    ]
}
]

```

# 商家获取单个商品

```
url="/getcommodity"
method = GET
request header = {
    context: string(commodity_id)
}

response body = 
    {
        "id": 12345,
        "name":"apple",
        "shop_id": 996145,
        "shop_detail":"五角场分店，在复旦大学。。。隔壁的同济大学对面。",
        "price": 9.9,
        "unit":"g",
        "type": 123,
        "tag": [
            "tag1"
            ,
            "tag2"
        ],
        "inventory": 9999,
        "resource": 
        {"pic_url":"https://images.unsplash.com/photo-1512578659172-63a4634c05ec", "detail_pic_url":"", "detail":"这将会是你一眼就爱上的苹果。（省略1000字）"
        }
    }
```

# 商家获取曾经上架过的已下架商品

```
url="/getoldcommoditylist"
method = GET
request header = {
    context: string(merchant_id)
}

response body = 
    [
    {
        "id": 12345,
        "name":"apple",
        "shop_id": 996145,
        "shop_detail":"五角场分店，在复旦大学。。。隔壁的同济大学对面。",
        "price": 9.9,
        "unit":"g",
        "type": 123,
        "tag": [
            "tag1"
            ,
            "tag2"
        ],
        "inventory": 9999,
        "resource": {"pic_url":"https://images.unsplash.com/photo-1512578659172-63a4634c05ec", "detail_pic_url":"", "detail":"这将会是你一眼就爱上的苹果。（省略1000字）"
        }
    },
    {
        "id": 12346,
        "name":"banana",
        "shop_id": 996146,
        "shop_detail":"五角场分店，在复旦大学。。。隔壁的同济大学对面。",
        "price": 10.9,
        "unit":"g",
        "type": 122,
        "tag": [
            "tag3",
            "tag4"
        ],
        "inventory": 9998,
        "resource": {"pic_url":"https://images.unsplash.com/reserve/RNm0KceQ4Gbpb0xldOe7_DSC_0679_2.JPG", "detail_pic_url":"", "detail":"这将会是你一眼就爱上的香蕉。（省略1000字）"
        }
    }
]
```

# 商家获取指定商品的订单

```
url="/getorders"
method = GET
request header = {
    context: string(commodity_id)
}

response body = 
    [
    待定
    
    ]
```
---

2019.05.16

---
