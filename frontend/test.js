// here i just extract categories and brand from data for filters

const products = [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 7.17,
      "rating": 4.94,
      "stock": 5,
      "tags": [
        "beauty",
        "mascara"
      ],
      "brand": "Essence",
      "sku": "RCH45Q1A",
      "weight": 2,
      "dimensions": {
        "width": 23.17,
        "height": 14.43,
        "depth": 28.01
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "Low Stock",
      "reviews": [
        {
          "rating": 2,
          "comment": "Very unhappy with my purchase!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "John Doe",
          "reviewerEmail": "john.doe@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Not as described!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Nolan Gonzalez",
          "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Scarlett Wright",
          "reviewerEmail": "scarlett.wright@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 24,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.618Z",
        "updatedAt": "2024-05-23T08:56:21.618Z",
        "barcode": "9164035109868",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    },
    {
      "id": 2,
      "title": "Eyeshadow Palette with Mirror",
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "category": "beauty",
      "price": 19.99,
      "discountPercentage": 5.5,
      "rating": 3.28,
      "stock": 44,
      "tags": [
        "beauty",
        "eyeshadow"
      ],
      "brand": "Glamour Beauty",
      "sku": "MVCFH27F",
      "weight": 3,
      "dimensions": {
        "width": 12.42,
        "height": 8.63,
        "depth": 29.13
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Liam Garcia",
          "reviewerEmail": "liam.garcia@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very disappointed!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Nora Russell",
          "reviewerEmail": "nora.russell@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Elena Baker",
          "reviewerEmail": "elena.baker@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 32,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.618Z",
        "updatedAt": "2024-05-23T08:56:21.618Z",
        "barcode": "2817839095220",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
    },
    {
      "id": 3,
      "title": "Powder Canister",
      "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      "category": "beauty",
      "price": 14.99,
      "discountPercentage": 18.14,
      "rating": 3.82,
      "stock": 59,
      "tags": [
        "beauty",
        "face powder"
      ],
      "brand": "Velvet Touch",
      "sku": "9EN8WLT2",
      "weight": 8,
      "dimensions": {
        "width": 24.16,
        "height": 10.7,
        "depth": 11.07
      },
      "warrantyInformation": "2 year warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Ethan Thompson",
          "reviewerEmail": "ethan.thompson@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Levi Hicks",
          "reviewerEmail": "levi.hicks@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Hazel Gardner",
          "reviewerEmail": "hazel.gardner@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 25,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.618Z",
        "updatedAt": "2024-05-23T08:56:21.618Z",
        "barcode": "0516267971277",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
    },
    {
      "id": 4,
      "title": "Red Lipstick",
      "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      "category": "beauty",
      "price": 12.99,
      "discountPercentage": 19.03,
      "rating": 2.51,
      "stock": 68,
      "tags": [
        "beauty",
        "lipstick"
      ],
      "brand": "Chic Cosmetics",
      "sku": "O5IF1NTA",
      "weight": 5,
      "dimensions": {
        "width": 14.37,
        "height": 13.94,
        "depth": 14.6
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Leo Rivera",
          "reviewerEmail": "leo.rivera@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Oscar Powers",
          "reviewerEmail": "oscar.powers@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Carter Rivera",
          "reviewerEmail": "carter.rivera@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 6,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.619Z",
        "updatedAt": "2024-05-23T08:56:21.619Z",
        "barcode": "9444582199406",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
    },
    {
      "id": 5,
      "title": "Red Nail Polish",
      "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      "category": "beauty",
      "price": 8.99,
      "discountPercentage": 2.46,
      "rating": 3.91,
      "stock": 71,
      "tags": [
        "beauty",
        "nail polish"
      ],
      "brand": "Nail Couture",
      "sku": "YUIIIP4W",
      "weight": 9,
      "dimensions": {
        "width": 8.11,
        "height": 10.89,
        "depth": 29.06
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Leo Rivera",
          "reviewerEmail": "leo.rivera@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Evan Reed",
          "reviewerEmail": "evan.reed@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Evelyn Sanchez",
          "reviewerEmail": "evelyn.sanchez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 46,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.619Z",
        "updatedAt": "2024-05-23T08:56:21.619Z",
        "barcode": "3212847902461",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"
    },
    {
      "id": 6,
      "title": "Calvin Klein CK One",
      "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      "category": "fragrances",
      "price": 49.99,
      "discountPercentage": 0.32,
      "rating": 4.85,
      "stock": 17,
      "tags": [
        "fragrances",
        "perfumes"
      ],
      "brand": "Calvin Klein",
      "sku": "DZM2JQZE",
      "weight": 5,
      "dimensions": {
        "width": 11.53,
        "height": 14.44,
        "depth": 6.81
      },
      "warrantyInformation": "5 year warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Sophia Brown",
          "reviewerEmail": "sophia.brown@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Very disappointed!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Madison Collins",
          "reviewerEmail": "madison.collins@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Poor quality!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Maya Reed",
          "reviewerEmail": "maya.reed@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 20,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.619Z",
        "updatedAt": "2024-05-23T08:56:21.619Z",
        "barcode": "2210136215089",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png"
    },
    {
      "id": 7,
      "title": "Chanel Coco Noir Eau De",
      "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
      "category": "fragrances",
      "price": 129.99,
      "discountPercentage": 18.64,
      "rating": 2.76,
      "stock": 41,
      "tags": [
        "fragrances",
        "perfumes"
      ],
      "brand": "Chanel",
      "sku": "K71HBCGS",
      "weight": 4,
      "dimensions": {
        "width": 21.27,
        "height": 28,
        "depth": 11.89
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 1,
          "comment": "Disappointing product!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Lincoln Kelly",
          "reviewerEmail": "lincoln.kelly@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Lincoln Kelly",
          "reviewerEmail": "lincoln.kelly@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Lucas Allen",
          "reviewerEmail": "lucas.allen@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 5,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.619Z",
        "updatedAt": "2024-05-23T08:56:21.619Z",
        "barcode": "1435582999795",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png"
    },
    {
      "id": 8,
      "title": "Dior J'adore",
      "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
      "category": "fragrances",
      "price": 89.99,
      "discountPercentage": 17.44,
      "rating": 3.31,
      "stock": 91,
      "tags": [
        "fragrances",
        "perfumes"
      ],
      "brand": "Dior",
      "sku": "E70NB03B",
      "weight": 10,
      "dimensions": {
        "width": 21.51,
        "height": 7,
        "depth": 26.51
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Zoe Nicholson",
          "reviewerEmail": "zoe.nicholson@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Addison Wright",
          "reviewerEmail": "addison.wright@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Clara Berry",
          "reviewerEmail": "clara.berry@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 8,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.619Z",
        "updatedAt": "2024-05-23T08:56:21.619Z",
        "barcode": "0887083199279",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png"
    },
    {
      "id": 9,
      "title": "Dolce Shine Eau de",
      "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
      "category": "fragrances",
      "price": 69.99,
      "discountPercentage": 11.47,
      "rating": 2.68,
      "stock": 3,
      "tags": [
        "fragrances",
        "perfumes"
      ],
      "brand": "Dolce & Gabbana",
      "sku": "1NBFK980",
      "weight": 5,
      "dimensions": {
        "width": 17,
        "height": 24.57,
        "depth": 13.3
      },
      "warrantyInformation": "5 year warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "Low Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Xavier Wright",
          "reviewerEmail": "xavier.wright@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Poor quality!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Mila Hernandez",
          "reviewerEmail": "mila.hernandez@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Sophia Brown",
          "reviewerEmail": "sophia.brown@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 9,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.619Z",
        "updatedAt": "2024-05-23T08:56:21.619Z",
        "barcode": "1939383392674",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png"
    },
    {
      "id": 10,
      "title": "Gucci Bloom Eau de",
      "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
      "category": "fragrances",
      "price": 79.99,
      "discountPercentage": 8.9,
      "rating": 2.69,
      "stock": 93,
      "tags": [
        "fragrances",
        "perfumes"
      ],
      "brand": "Gucci",
      "sku": "FFKZ6HOF",
      "weight": 10,
      "dimensions": {
        "width": 22.28,
        "height": 17.81,
        "depth": 27.18
      },
      "warrantyInformation": "No warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Aria Parker",
          "reviewerEmail": "aria.parker@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Natalie Harris",
          "reviewerEmail": "natalie.harris@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Ava Harris",
          "reviewerEmail": "ava.harris@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 10,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "8232190382069",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png"
    },
    {
      "id": 11,
      "title": "Annibale Colombo Bed",
      "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
      "category": "furniture",
      "price": 1899.99,
      "discountPercentage": 0.29,
      "rating": 4.14,
      "stock": 47,
      "tags": [
        "furniture",
        "beds"
      ],
      "brand": "Annibale Colombo",
      "sku": "4KMDTZWF",
      "weight": 3,
      "dimensions": {
        "width": 28.75,
        "height": 26.88,
        "depth": 24.47
      },
      "warrantyInformation": "2 year warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Julian Newton",
          "reviewerEmail": "julian.newton@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Madison Collins",
          "reviewerEmail": "madison.collins@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Clara Berry",
          "reviewerEmail": "clara.berry@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "7113807059215",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png"
    },
    {
      "id": 12,
      "title": "Annibale Colombo Sofa",
      "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
      "category": "furniture",
      "price": 2499.99,
      "discountPercentage": 18.54,
      "rating": 3.08,
      "stock": 16,
      "tags": [
        "furniture",
        "sofas"
      ],
      "brand": "Annibale Colombo",
      "sku": "LUU95CQP",
      "weight": 3,
      "dimensions": {
        "width": 20.97,
        "height": 19.11,
        "depth": 25.81
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Tyler Davis",
          "reviewerEmail": "tyler.davis@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Hannah Robinson",
          "reviewerEmail": "hannah.robinson@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Waste of money!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Madison Collins",
          "reviewerEmail": "madison.collins@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "0426785817074",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png"
    },
    {
      "id": 13,
      "title": "Bedside Table African Cherry",
      "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
      "category": "furniture",
      "price": 299.99,
      "discountPercentage": 9.58,
      "rating": 4.48,
      "stock": 16,
      "tags": [
        "furniture",
        "bedside tables"
      ],
      "brand": "Furniture Co.",
      "sku": "OWPLTZYX",
      "weight": 10,
      "dimensions": {
        "width": 25.43,
        "height": 20.2,
        "depth": 24.95
      },
      "warrantyInformation": "6 months warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "John Doe",
          "reviewerEmail": "john.doe@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Avery Carter",
          "reviewerEmail": "avery.carter@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Evelyn Sanchez",
          "reviewerEmail": "evelyn.sanchez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 5,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "2913244159666",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png"
    },
    {
      "id": 14,
      "title": "Knoll Saarinen Executive Conference Chair",
      "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
      "category": "furniture",
      "price": 499.99,
      "discountPercentage": 15.23,
      "rating": 4.11,
      "stock": 47,
      "tags": [
        "furniture",
        "office chairs"
      ],
      "brand": "Knoll",
      "sku": "RKHVJ4FE",
      "weight": 3,
      "dimensions": {
        "width": 16.59,
        "height": 21.46,
        "depth": 29.07
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Leah Gutierrez",
          "reviewerEmail": "leah.gutierrez@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Nolan Gonzalez",
          "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Waste of money!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Stella Morris",
          "reviewerEmail": "stella.morris@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 5,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "0726316339746",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png"
    },
    {
      "id": 15,
      "title": "Wooden Bathroom Sink With Mirror",
      "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
      "category": "furniture",
      "price": 799.99,
      "discountPercentage": 11.22,
      "rating": 3.26,
      "stock": 95,
      "tags": [
        "furniture",
        "bathroom"
      ],
      "brand": "Bath Trends",
      "sku": "7OLTIEVO",
      "weight": 6,
      "dimensions": {
        "width": 7.32,
        "height": 22.64,
        "depth": 12.37
      },
      "warrantyInformation": "6 months warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Charlotte Lopez",
          "reviewerEmail": "charlotte.lopez@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Would not recommend!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "William Gonzalez",
          "reviewerEmail": "william.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Not worth the price!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Ava Harrison",
          "reviewerEmail": "ava.harrison@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "7839797529453",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png"
    },
    {
      "id": 16,
      "title": "Apple",
      "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
      "category": "groceries",
      "price": 1.99,
      "discountPercentage": 1.97,
      "rating": 2.96,
      "stock": 9,
      "tags": [
        "fruits"
      ],
      "sku": "QTROUV79",
      "weight": 8,
      "dimensions": {
        "width": 8.29,
        "height": 5.58,
        "depth": 12.41
      },
      "warrantyInformation": "2 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Logan Lee",
          "reviewerEmail": "logan.lee@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Elena Long",
          "reviewerEmail": "elena.long@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Not as described!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Grayson Coleman",
          "reviewerEmail": "grayson.coleman@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 44,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "2517819903837",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png"
    },
    {
      "id": 17,
      "title": "Beef Steak",
      "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
      "category": "groceries",
      "price": 12.99,
      "discountPercentage": 17.99,
      "rating": 2.83,
      "stock": 96,
      "tags": [
        "meat"
      ],
      "sku": "BWWA2MSO",
      "weight": 9,
      "dimensions": {
        "width": 23.35,
        "height": 13.48,
        "depth": 26.4
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Ethan Martinez",
          "reviewerEmail": "ethan.martinez@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Disappointing product!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Owen Fisher",
          "reviewerEmail": "owen.fisher@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Scarlett Wright",
          "reviewerEmail": "scarlett.wright@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 21,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "8335515097879",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png"
    },
    {
      "id": 18,
      "title": "Cat Food",
      "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
      "category": "groceries",
      "price": 8.99,
      "discountPercentage": 9.57,
      "rating": 2.88,
      "stock": 13,
      "tags": [
        "pet supplies",
        "cat food"
      ],
      "sku": "C3F8QN6O",
      "weight": 9,
      "dimensions": {
        "width": 15.4,
        "height": 13.97,
        "depth": 25.13
      },
      "warrantyInformation": "3 months warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Mateo Bennett",
          "reviewerEmail": "mateo.bennett@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Aurora Barnes",
          "reviewerEmail": "aurora.barnes@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Ellie Stewart",
          "reviewerEmail": "ellie.stewart@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 48,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "5503491330693",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png"
    },
    {
      "id": 19,
      "title": "Chicken Meat",
      "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
      "category": "groceries",
      "price": 9.99,
      "discountPercentage": 10.46,
      "rating": 4.61,
      "stock": 69,
      "tags": [
        "meat"
      ],
      "sku": "G5YEHW7B",
      "weight": 7,
      "dimensions": {
        "width": 15.96,
        "height": 29.24,
        "depth": 26.25
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Sophia Jones",
          "reviewerEmail": "sophia.jones@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Maya Reed",
          "reviewerEmail": "maya.reed@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Harper Turner",
          "reviewerEmail": "harper.turner@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 46,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "0966223559510",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png",
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png"
    },
    {
      "id": 20,
      "title": "Cooking Oil",
      "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
      "category": "groceries",
      "price": 4.99,
      "discountPercentage": 18.89,
      "rating": 4.01,
      "stock": 22,
      "tags": [
        "cooking essentials"
      ],
      "sku": "Q6ZP1UY8",
      "weight": 8,
      "dimensions": {
        "width": 8.18,
        "height": 27.45,
        "depth": 27.88
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Mason Parker",
          "reviewerEmail": "mason.parker@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Poor quality!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Jonathan Pierce",
          "reviewerEmail": "jonathan.pierce@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Alexander Hernandez",
          "reviewerEmail": "alexander.hernandez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 2,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "6707669443381",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png"
    },
    {
      "id": 21,
      "title": "Cucumber",
      "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
      "category": "groceries",
      "price": 1.49,
      "discountPercentage": 11.44,
      "rating": 4.71,
      "stock": 22,
      "tags": [
        "vegetables"
      ],
      "sku": "6KGF2K6Z",
      "weight": 9,
      "dimensions": {
        "width": 11.04,
        "height": 20.5,
        "depth": 8.18
      },
      "warrantyInformation": "5 year warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Elijah Hill",
          "reviewerEmail": "elijah.hill@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Liam Garcia",
          "reviewerEmail": "liam.garcia@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Ella Cook",
          "reviewerEmail": "ella.cook@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 7,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "2597004869708",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png"
    },
    {
      "id": 22,
      "title": "Dog Food",
      "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
      "category": "groceries",
      "price": 10.99,
      "discountPercentage": 18.15,
      "rating": 2.74,
      "stock": 40,
      "tags": [
        "pet supplies",
        "dog food"
      ],
      "sku": "A6QRCH37",
      "weight": 2,
      "dimensions": {
        "width": 29.39,
        "height": 29.77,
        "depth": 20.54
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Leo Rivera",
          "reviewerEmail": "leo.rivera@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Alexander Jones",
          "reviewerEmail": "alexander.jones@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Addison Wright",
          "reviewerEmail": "addison.wright@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 29,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "7957222289508",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png"
    },
    {
      "id": 23,
      "title": "Eggs",
      "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
      "category": "groceries",
      "price": 2.99,
      "discountPercentage": 5.8,
      "rating": 4.46,
      "stock": 10,
      "tags": [
        "dairy"
      ],
      "sku": "YA617RI7",
      "weight": 4,
      "dimensions": {
        "width": 12.3,
        "height": 10.99,
        "depth": 15.53
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 2,
          "comment": "Very unhappy with my purchase!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Mateo Perez",
          "reviewerEmail": "mateo.perez@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Cameron Perez",
          "reviewerEmail": "cameron.perez@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Aurora Barnes",
          "reviewerEmail": "aurora.barnes@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 43,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "7095702028776",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png"
    },
    {
      "id": 24,
      "title": "Fish Steak",
      "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.",
      "category": "groceries",
      "price": 14.99,
      "discountPercentage": 7,
      "rating": 4.83,
      "stock": 99,
      "tags": [
        "seafood"
      ],
      "sku": "XNIH1MTA",
      "weight": 8,
      "dimensions": {
        "width": 20.14,
        "height": 8.4,
        "depth": 10.01
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Michael Johnson",
          "reviewerEmail": "michael.johnson@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Julian Newton",
          "reviewerEmail": "julian.newton@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Lila Hudson",
          "reviewerEmail": "lila.hudson@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 49,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "4250692197342",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png"
    },
    {
      "id": 25,
      "title": "Green Bell Pepper",
      "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
      "category": "groceries",
      "price": 1.29,
      "discountPercentage": 15.5,
      "rating": 4.28,
      "stock": 89,
      "tags": [
        "vegetables"
      ],
      "sku": "HU7S7VQ0",
      "weight": 7,
      "dimensions": {
        "width": 7.32,
        "height": 14.31,
        "depth": 21.38
      },
      "warrantyInformation": "5 year warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Maya Reed",
          "reviewerEmail": "maya.reed@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Madison Collins",
          "reviewerEmail": "madison.collins@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Ethan Thompson",
          "reviewerEmail": "ethan.thompson@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "7583442707568",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png"
    },
    {
      "id": 26,
      "title": "Green Chili Pepper",
      "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
      "category": "groceries",
      "price": 0.99,
      "discountPercentage": 18.51,
      "rating": 4.43,
      "stock": 8,
      "tags": [
        "vegetables"
      ],
      "sku": "Y4RM3JCB",
      "weight": 2,
      "dimensions": {
        "width": 18.67,
        "height": 21.17,
        "depth": 25.26
      },
      "warrantyInformation": "No warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 2,
          "comment": "Disappointing product!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Mateo Bennett",
          "reviewerEmail": "mateo.bennett@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Natalie Price",
          "reviewerEmail": "natalie.price@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Avery Barnes",
          "reviewerEmail": "avery.barnes@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 43,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "8400326844874",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png"
    },
    {
      "id": 27,
      "title": "Honey Jar",
      "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
      "category": "groceries",
      "price": 6.99,
      "discountPercentage": 1.91,
      "rating": 3.5,
      "stock": 25,
      "tags": [
        "condiments"
      ],
      "sku": "BTBNIIOU",
      "weight": 9,
      "dimensions": {
        "width": 26.53,
        "height": 27.11,
        "depth": 6.63
      },
      "warrantyInformation": "2 year warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Nicholas Bailey",
          "reviewerEmail": "nicholas.bailey@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Gabriel Hayes",
          "reviewerEmail": "gabriel.hayes@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "James Garcia",
          "reviewerEmail": "james.garcia@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "0668665656044",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png"
    },
    {
      "id": 28,
      "title": "Ice Cream",
      "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
      "category": "groceries",
      "price": 5.49,
      "discountPercentage": 7.58,
      "rating": 3.77,
      "stock": 76,
      "tags": [
        "desserts"
      ],
      "sku": "VEZMU1EQ",
      "weight": 5,
      "dimensions": {
        "width": 17.66,
        "height": 24.49,
        "depth": 25.98
      },
      "warrantyInformation": "2 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Elena Baker",
          "reviewerEmail": "elena.baker@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Madeline Simpson",
          "reviewerEmail": "madeline.simpson@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Caleb Nelson",
          "reviewerEmail": "caleb.nelson@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 19,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "9603960319256",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/2.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/3.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png"
    },
    {
      "id": 29,
      "title": "Juice",
      "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
      "category": "groceries",
      "price": 3.99,
      "discountPercentage": 5.45,
      "rating": 3.41,
      "stock": 99,
      "tags": [
        "beverages"
      ],
      "sku": "M2K19S06",
      "weight": 2,
      "dimensions": {
        "width": 8.97,
        "height": 12.26,
        "depth": 15.05
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Leo Rivera",
          "reviewerEmail": "leo.rivera@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Not worth the price!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Ethan Martinez",
          "reviewerEmail": "ethan.martinez@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Max Parker",
          "reviewerEmail": "max.parker@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 26,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "8546824122355",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png"
    },
    {
      "id": 30,
      "title": "Kiwi",
      "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
      "category": "groceries",
      "price": 2.49,
      "discountPercentage": 10.32,
      "rating": 4.37,
      "stock": 1,
      "tags": [
        "fruits"
      ],
      "sku": "0X3NORB9",
      "weight": 8,
      "dimensions": {
        "width": 27.3,
        "height": 7.48,
        "depth": 15.08
      },
      "warrantyInformation": "6 months warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "Low Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Nora Russell",
          "reviewerEmail": "nora.russell@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Dylan Wells",
          "reviewerEmail": "dylan.wells@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Noah Hernandez",
          "reviewerEmail": "noah.hernandez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 8,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "3325493172934",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png"
    },
    {
      "id": 31,
      "title": "Lemon",
      "description": "Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.",
      "category": "groceries",
      "price": 0.79,
      "discountPercentage": 17.81,
      "rating": 4.25,
      "stock": 0,
      "tags": [
        "fruits"
      ],
      "sku": "J074TE3H",
      "weight": 10,
      "dimensions": {
        "width": 25.97,
        "height": 27.47,
        "depth": 6.31
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "Out of Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Lucas Gray",
          "reviewerEmail": "lucas.gray@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Henry Hill",
          "reviewerEmail": "henry.hill@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Elena Long",
          "reviewerEmail": "elena.long@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "6364178053480",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Lemon/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Lemon/thumbnail.png"
    },
    {
      "id": 32,
      "title": "Milk",
      "description": "Fresh and nutritious milk, a staple for various recipes and daily consumption.",
      "category": "groceries",
      "price": 3.49,
      "discountPercentage": 15.09,
      "rating": 3.14,
      "stock": 57,
      "tags": [
        "dairy"
      ],
      "sku": "VOZKMF40",
      "weight": 1,
      "dimensions": {
        "width": 22.42,
        "height": 20.9,
        "depth": 12.48
      },
      "warrantyInformation": "6 months warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Daniel Cook",
          "reviewerEmail": "daniel.cook@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Nora Mills",
          "reviewerEmail": "nora.mills@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Jacob Cooper",
          "reviewerEmail": "jacob.cooper@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 41,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.620Z",
        "updatedAt": "2024-05-23T08:56:21.620Z",
        "barcode": "6340035595037",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Milk/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Milk/thumbnail.png"
    },
    {
      "id": 33,
      "title": "Mulberry",
      "description": "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.",
      "category": "groceries",
      "price": 4.99,
      "discountPercentage": 16.35,
      "rating": 3.19,
      "stock": 79,
      "tags": [
        "fruits"
      ],
      "sku": "0M1K7RRC",
      "weight": 4,
      "dimensions": {
        "width": 11.12,
        "height": 27.3,
        "depth": 27.57
      },
      "warrantyInformation": "3 months warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Leah Henderson",
          "reviewerEmail": "leah.henderson@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Not as described!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Leah Hughes",
          "reviewerEmail": "leah.hughes@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Carter Baker",
          "reviewerEmail": "carter.baker@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 50,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "3327790147313",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Mulberry/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Mulberry/thumbnail.png"
    },
    {
      "id": 34,
      "title": "Nescafe Coffee",
      "description": "Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.",
      "category": "groceries",
      "price": 7.99,
      "discountPercentage": 11.65,
      "rating": 2.54,
      "stock": 22,
      "tags": [
        "beverages",
        "coffee"
      ],
      "sku": "FP5H3065",
      "weight": 9,
      "dimensions": {
        "width": 11.21,
        "height": 24.54,
        "depth": 15.05
      },
      "warrantyInformation": "No warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Nolan Gonzalez",
          "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Carter Baker",
          "reviewerEmail": "carter.baker@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Emily Johnson",
          "reviewerEmail": "emily.johnson@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 8,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "8923332839320",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Nescafe%20Coffee/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Nescafe%20Coffee/thumbnail.png"
    },
    {
      "id": 35,
      "title": "Potatoes",
      "description": "Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.",
      "category": "groceries",
      "price": 2.29,
      "discountPercentage": 4.05,
      "rating": 3.82,
      "stock": 8,
      "tags": [
        "vegetables"
      ],
      "sku": "W4NOBW45",
      "weight": 9,
      "dimensions": {
        "width": 20,
        "height": 6.44,
        "depth": 20.07
      },
      "warrantyInformation": "5 year warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Sophia Brown",
          "reviewerEmail": "sophia.brown@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Would not recommend!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Gabriel Mitchell",
          "reviewerEmail": "gabriel.mitchell@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Elijah Stewart",
          "reviewerEmail": "elijah.stewart@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 29,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "1374727655057",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Potatoes/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Potatoes/thumbnail.png"
    },
    {
      "id": 36,
      "title": "Protein Powder",
      "description": "Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.",
      "category": "groceries",
      "price": 19.99,
      "discountPercentage": 1.58,
      "rating": 3.91,
      "stock": 65,
      "tags": [
        "health supplements"
      ],
      "sku": "BT2QOWKZ",
      "weight": 2,
      "dimensions": {
        "width": 5.62,
        "height": 7.88,
        "depth": 23.48
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 1,
          "comment": "Very dissatisfied!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Logan Lawson",
          "reviewerEmail": "logan.lawson@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Poor quality!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Julian James",
          "reviewerEmail": "julian.james@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very unhappy with my purchase!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Hazel Evans",
          "reviewerEmail": "hazel.evans@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 39,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "2858973742684",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Protein%20Powder/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Protein%20Powder/thumbnail.png"
    },
    {
      "id": 37,
      "title": "Red Onions",
      "description": "Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.",
      "category": "groceries",
      "price": 1.99,
      "discountPercentage": 17.89,
      "rating": 4.08,
      "stock": 86,
      "tags": [
        "vegetables"
      ],
      "sku": "TAF870KJ",
      "weight": 2,
      "dimensions": {
        "width": 14.05,
        "height": 17.13,
        "depth": 14.05
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "James Davis",
          "reviewerEmail": "james.davis@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Would not recommend!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Chloe Morales",
          "reviewerEmail": "chloe.morales@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Very dissatisfied!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Aaron Cook",
          "reviewerEmail": "aaron.cook@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 40,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "5439836346472",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Red%20Onions/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Red%20Onions/thumbnail.png"
    },
    {
      "id": 38,
      "title": "Rice",
      "description": "High-quality rice, a staple for various cuisines and a versatile base for many dishes.",
      "category": "groceries",
      "price": 5.99,
      "discountPercentage": 12.02,
      "rating": 3.94,
      "stock": 49,
      "tags": [
        "grains"
      ],
      "sku": "905JXMXM",
      "weight": 1,
      "dimensions": {
        "width": 28.86,
        "height": 6.26,
        "depth": 11.04
      },
      "warrantyInformation": "2 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Hazel Gardner",
          "reviewerEmail": "hazel.gardner@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Gabriel Adams",
          "reviewerEmail": "gabriel.adams@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Jack Ward",
          "reviewerEmail": "jack.ward@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 18,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "0027455825200",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Rice/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Rice/thumbnail.png"
    },
    {
      "id": 39,
      "title": "Soft Drinks",
      "description": "Assorted soft drinks in various flavors, perfect for refreshing beverages.",
      "category": "groceries",
      "price": 1.99,
      "discountPercentage": 1.88,
      "rating": 4.59,
      "stock": 78,
      "tags": [
        "beverages"
      ],
      "sku": "I1ZNSLXJ",
      "weight": 9,
      "dimensions": {
        "width": 15.73,
        "height": 24.93,
        "depth": 27.19
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Very dissatisfied!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Ella Cook",
          "reviewerEmail": "ella.cook@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Liam Garcia",
          "reviewerEmail": "liam.garcia@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Autumn Gomez",
          "reviewerEmail": "autumn.gomez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 41,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "3523564932164",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Soft%20Drinks/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Soft%20Drinks/thumbnail.png"
    },
    {
      "id": 40,
      "title": "Strawberry",
      "description": "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.",
      "category": "groceries",
      "price": 3.99,
      "discountPercentage": 19.59,
      "rating": 4.5,
      "stock": 9,
      "tags": [
        "fruits"
      ],
      "sku": "LPP7I4JZ",
      "weight": 4,
      "dimensions": {
        "width": 20.82,
        "height": 15.81,
        "depth": 14.89
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Charlotte Lopez",
          "reviewerEmail": "charlotte.lopez@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Grace Green",
          "reviewerEmail": "grace.green@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Disappointing product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Logan Torres",
          "reviewerEmail": "logan.torres@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 38,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "7936749779940",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Strawberry/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Strawberry/thumbnail.png"
    },
    {
      "id": 41,
      "title": "Tissue Paper Box",
      "description": "Convenient tissue paper box for everyday use, providing soft and absorbent tissues.",
      "category": "groceries",
      "price": 2.49,
      "discountPercentage": 15.44,
      "rating": 4.55,
      "stock": 97,
      "tags": [
        "household essentials"
      ],
      "sku": "IQEZWXMJ",
      "weight": 3,
      "dimensions": {
        "width": 24.1,
        "height": 19.74,
        "depth": 5.48
      },
      "warrantyInformation": "6 months warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Stella Morris",
          "reviewerEmail": "stella.morris@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Harper Turner",
          "reviewerEmail": "harper.turner@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Luna Russell",
          "reviewerEmail": "luna.russell@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "0639828085202",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/1.png",
        "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/2.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/thumbnail.png"
    },
    {
      "id": 42,
      "title": "Water",
      "description": "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
      "category": "groceries",
      "price": 0.99,
      "discountPercentage": 13.71,
      "rating": 2.93,
      "stock": 95,
      "tags": [
        "beverages"
      ],
      "sku": "LZG5PPHA",
      "weight": 2,
      "dimensions": {
        "width": 25.46,
        "height": 25.86,
        "depth": 18.06
      },
      "warrantyInformation": "No warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Lillian Simmons",
          "reviewerEmail": "lillian.simmons@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Emily Brown",
          "reviewerEmail": "emily.brown@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Cameron Perez",
          "reviewerEmail": "cameron.perez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 46,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "7625896901250",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Water/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Water/thumbnail.png"
    },
    {
      "id": 43,
      "title": "Decoration Swing",
      "description": "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
      "category": "home-decoration",
      "price": 59.99,
      "discountPercentage": 0.65,
      "rating": 3.56,
      "stock": 62,
      "tags": [
        "home decor",
        "swing"
      ],
      "sku": "MBEK52ST",
      "weight": 8,
      "dimensions": {
        "width": 20.75,
        "height": 11.18,
        "depth": 7.92
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Aria Roberts",
          "reviewerEmail": "aria.roberts@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Caleb Perkins",
          "reviewerEmail": "caleb.perkins@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Aria Roberts",
          "reviewerEmail": "aria.roberts@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 2,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "6434699988216",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/1.png",
        "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/2.png",
        "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/thumbnail.png"
    },
    {
      "id": 44,
      "title": "Family Tree Photo Frame",
      "description": "The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.",
      "category": "home-decoration",
      "price": 29.99,
      "discountPercentage": 1.53,
      "rating": 3.84,
      "stock": 34,
      "tags": [
        "home decor",
        "photo frame"
      ],
      "sku": "EZOJC792",
      "weight": 4,
      "dimensions": {
        "width": 15.46,
        "height": 26.32,
        "depth": 17.1
      },
      "warrantyInformation": "6 months warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 1,
          "comment": "Disappointing product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Logan Torres",
          "reviewerEmail": "logan.torres@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "William Gonzalez",
          "reviewerEmail": "william.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Disappointing product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Amelia Perez",
          "reviewerEmail": "amelia.perez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 16,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "9462569143093",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/thumbnail.png"
    },
    {
      "id": 45,
      "title": "House Showpiece Plant",
      "description": "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
      "category": "home-decoration",
      "price": 39.99,
      "discountPercentage": 19.45,
      "rating": 3.61,
      "stock": 89,
      "tags": [
        "home decor",
        "artificial plants"
      ],
      "sku": "LLNHNIFU",
      "weight": 9,
      "dimensions": {
        "width": 27.15,
        "height": 14.43,
        "depth": 10.05
      },
      "warrantyInformation": "5 year warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Olivia Anderson",
          "reviewerEmail": "olivia.anderson@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Very unhappy with my purchase!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Grace Perry",
          "reviewerEmail": "grace.perry@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Emma Wilson",
          "reviewerEmail": "emma.wilson@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 7,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "1895440764997",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/1.png",
        "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/2.png",
        "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/thumbnail.png"
    },
    {
      "id": 46,
      "title": "Plant Pot",
      "description": "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
      "category": "home-decoration",
      "price": 14.99,
      "discountPercentage": 0.19,
      "rating": 3.33,
      "stock": 70,
      "tags": [
        "home decor",
        "plant accessories"
      ],
      "sku": "M8IWE8MF",
      "weight": 8,
      "dimensions": {
        "width": 16.28,
        "height": 8.72,
        "depth": 18.47
      },
      "warrantyInformation": "2 year warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Harper Turner",
          "reviewerEmail": "harper.turner@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Leah Gutierrez",
          "reviewerEmail": "leah.gutierrez@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Sadie Morales",
          "reviewerEmail": "sadie.morales@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 44,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "4265754153251",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/1.png",
        "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/2.png",
        "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/3.png",
        "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/thumbnail.png"
    },
    {
      "id": 47,
      "title": "Table Lamp",
      "description": "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
      "category": "home-decoration",
      "price": 49.99,
      "discountPercentage": 0.59,
      "rating": 4.56,
      "stock": 84,
      "tags": [
        "home decor",
        "lighting"
      ],
      "sku": "0K9UDIUB",
      "weight": 2,
      "dimensions": {
        "width": 29.6,
        "height": 19.68,
        "depth": 10.12
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Not worth the price!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Mateo Nguyen",
          "reviewerEmail": "mateo.nguyen@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "James Garcia",
          "reviewerEmail": "james.garcia@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Waste of money!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Henry Turner",
          "reviewerEmail": "henry.turner@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 10,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "7764806947768",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/home-decoration/Table%20Lamp/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/home-decoration/Table%20Lamp/thumbnail.png"
    },
    {
      "id": 48,
      "title": "Bamboo Spatula",
      "description": "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
      "category": "kitchen-accessories",
      "price": 7.99,
      "discountPercentage": 4.85,
      "rating": 4.4,
      "stock": 0,
      "tags": [
        "kitchen tools",
        "utensils"
      ],
      "sku": "MYIWU1I6",
      "weight": 4,
      "dimensions": {
        "width": 27.97,
        "height": 21.77,
        "depth": 21.38
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "Out of Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Olivia Anderson",
          "reviewerEmail": "olivia.anderson@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Grayson Coleman",
          "reviewerEmail": "grayson.coleman@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Mia Miller",
          "reviewerEmail": "mia.miller@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 26,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "4736572105219",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Spatula/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Spatula/thumbnail.png"
    },
    {
      "id": 49,
      "title": "Black Aluminium Cup",
      "description": "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
      "category": "kitchen-accessories",
      "price": 5.99,
      "discountPercentage": 9.22,
      "rating": 3.62,
      "stock": 42,
      "tags": [
        "drinkware",
        "cups"
      ],
      "sku": "1CSCC3UH",
      "weight": 8,
      "dimensions": {
        "width": 7.48,
        "height": 23.98,
        "depth": 12.84
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Bella Grant",
          "reviewerEmail": "bella.grant@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Waste of money!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Layla Young",
          "reviewerEmail": "layla.young@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Would not recommend!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Wyatt Perry",
          "reviewerEmail": "wyatt.perry@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 5,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "9830484636197",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/1.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/2.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/thumbnail.png"
    },
    {
      "id": 50,
      "title": "Black Whisk",
      "description": "The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.",
      "category": "kitchen-accessories",
      "price": 9.99,
      "discountPercentage": 16.87,
      "rating": 2.88,
      "stock": 17,
      "tags": [
        "kitchen tools",
        "utensils"
      ],
      "sku": "0TDFNB1Q",
      "weight": 6,
      "dimensions": {
        "width": 21.06,
        "height": 15.46,
        "depth": 13.28
      },
      "warrantyInformation": "5 year warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 1,
          "comment": "Disappointing product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Claire Foster",
          "reviewerEmail": "claire.foster@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Would not buy again!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Sophia Jones",
          "reviewerEmail": "sophia.jones@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Avery Scott",
          "reviewerEmail": "avery.scott@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 30,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "6349276911476",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Whisk/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Whisk/thumbnail.png"
    },
    {
      "id": 51,
      "title": "Boxed Blender",
      "description": "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
      "category": "kitchen-accessories",
      "price": 39.99,
      "discountPercentage": 7.36,
      "rating": 2.73,
      "stock": 81,
      "tags": [
        "kitchen appliances",
        "blenders"
      ],
      "sku": "6HG6U3Q9",
      "weight": 10,
      "dimensions": {
        "width": 16.73,
        "height": 10.93,
        "depth": 14.75
      },
      "warrantyInformation": "3 months warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Sadie Morales",
          "reviewerEmail": "sadie.morales@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very disappointed!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Elijah Hill",
          "reviewerEmail": "elijah.hill@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Owen Sullivan",
          "reviewerEmail": "owen.sullivan@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 18,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "3795471854572",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/1.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/2.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/3.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/thumbnail.png"
    },
    {
      "id": 52,
      "title": "Carbon Steel Wok",
      "description": "The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.",
      "category": "kitchen-accessories",
      "price": 29.99,
      "discountPercentage": 5.89,
      "rating": 2.94,
      "stock": 2,
      "tags": [
        "cookware",
        "woks"
      ],
      "sku": "OOE6KF9I",
      "weight": 4,
      "dimensions": {
        "width": 14.69,
        "height": 11.23,
        "depth": 28.05
      },
      "warrantyInformation": "2 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "Low Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Grace Green",
          "reviewerEmail": "grace.green@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Avery Barnes",
          "reviewerEmail": "avery.barnes@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Aubrey Wagner",
          "reviewerEmail": "aubrey.wagner@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 16,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "9814335139552",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Carbon%20Steel%20Wok/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Carbon%20Steel%20Wok/thumbnail.png"
    },
    {
      "id": 53,
      "title": "Chopping Board",
      "description": "The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.",
      "category": "kitchen-accessories",
      "price": 12.99,
      "discountPercentage": 17.72,
      "rating": 4.82,
      "stock": 53,
      "tags": [
        "kitchen tools",
        "cutting boards"
      ],
      "sku": "B7MZ3JGK",
      "weight": 3,
      "dimensions": {
        "width": 24.38,
        "height": 26.51,
        "depth": 6.93
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 1,
          "comment": "Very disappointed!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Emma Miller",
          "reviewerEmail": "emma.miller@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Nora Mills",
          "reviewerEmail": "nora.mills@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Evelyn Gonzalez",
          "reviewerEmail": "evelyn.gonzalez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 9,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "1812405979802",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Chopping%20Board/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Chopping%20Board/thumbnail.png"
    },
    {
      "id": 54,
      "title": "Citrus Squeezer Yellow",
      "description": "The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.",
      "category": "kitchen-accessories",
      "price": 8.99,
      "discountPercentage": 12.35,
      "rating": 4.18,
      "stock": 59,
      "tags": [
        "kitchen tools",
        "juicers"
      ],
      "sku": "PIUKVEZ4",
      "weight": 9,
      "dimensions": {
        "width": 21.74,
        "height": 7.6,
        "depth": 18.04
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Bella Gonzalez",
          "reviewerEmail": "bella.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Alexander Hernandez",
          "reviewerEmail": "alexander.hernandez@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Not as described!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Ella Cook",
          "reviewerEmail": "ella.cook@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 12,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "2499527422857",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Citrus%20Squeezer%20Yellow/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Citrus%20Squeezer%20Yellow/thumbnail.png"
    },
    {
      "id": 55,
      "title": "Egg Slicer",
      "description": "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
      "category": "kitchen-accessories",
      "price": 6.99,
      "discountPercentage": 9.6,
      "rating": 2.91,
      "stock": 30,
      "tags": [
        "kitchen tools",
        "slicers"
      ],
      "sku": "WG4L41YK",
      "weight": 5,
      "dimensions": {
        "width": 17.18,
        "height": 11.58,
        "depth": 11.79
      },
      "warrantyInformation": "5 year warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Ava Taylor",
          "reviewerEmail": "ava.taylor@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very unhappy with my purchase!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Nicholas Edwards",
          "reviewerEmail": "nicholas.edwards@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "David Martinez",
          "reviewerEmail": "david.martinez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 23,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "1537527680664",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Egg%20Slicer/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Egg%20Slicer/thumbnail.png"
    },
    {
      "id": 56,
      "title": "Electric Stove",
      "description": "The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.",
      "category": "kitchen-accessories",
      "price": 49.99,
      "discountPercentage": 16.64,
      "rating": 4.84,
      "stock": 41,
      "tags": [
        "kitchen appliances",
        "cooktops"
      ],
      "sku": "D88AMROJ",
      "weight": 9,
      "dimensions": {
        "width": 28.07,
        "height": 11.43,
        "depth": 20.68
      },
      "warrantyInformation": "6 months warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Samantha Howard",
          "reviewerEmail": "samantha.howard@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Brayden Hill",
          "reviewerEmail": "brayden.hill@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Very dissatisfied!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Addison Wright",
          "reviewerEmail": "addison.wright@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 8,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "9184442726039",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/1.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/2.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/3.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/thumbnail.png"
    },
    {
      "id": 57,
      "title": "Fine Mesh Strainer",
      "description": "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
      "category": "kitchen-accessories",
      "price": 9.99,
      "discountPercentage": 2.56,
      "rating": 3.7,
      "stock": 13,
      "tags": [
        "kitchen tools",
        "strainers"
      ],
      "sku": "4XB2EHHJ",
      "weight": 6,
      "dimensions": {
        "width": 5.19,
        "height": 9.64,
        "depth": 20.53
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Jack Ward",
          "reviewerEmail": "jack.ward@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "John Doe",
          "reviewerEmail": "john.doe@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Liam Smith",
          "reviewerEmail": "liam.smith@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 32,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "0913686095458",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fine%20Mesh%20Strainer/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fine%20Mesh%20Strainer/thumbnail.png"
    },
    {
      "id": 58,
      "title": "Fork",
      "description": "The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.",
      "category": "kitchen-accessories",
      "price": 3.99,
      "discountPercentage": 14.36,
      "rating": 4.18,
      "stock": 10,
      "tags": [
        "kitchen tools",
        "utensils"
      ],
      "sku": "5XHGD6PF",
      "weight": 6,
      "dimensions": {
        "width": 23.61,
        "height": 25.62,
        "depth": 5.67
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Mia Miller",
          "reviewerEmail": "mia.miller@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Aurora Rodriguez",
          "reviewerEmail": "aurora.rodriguez@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very unhappy with my purchase!",
          "date": "2024-05-23T08:56:21.621Z",
          "reviewerName": "Jacob Cooper",
          "reviewerEmail": "jacob.cooper@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 10,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.621Z",
        "updatedAt": "2024-05-23T08:56:21.621Z",
        "barcode": "8403472856763",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fork/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fork/thumbnail.png"
    },
    {
      "id": 59,
      "title": "Glass",
      "description": "The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.",
      "category": "kitchen-accessories",
      "price": 4.99,
      "discountPercentage": 7.38,
      "rating": 3.06,
      "stock": 68,
      "tags": [
        "drinkware",
        "glasses"
      ],
      "sku": "2RO2KDHM",
      "weight": 5,
      "dimensions": {
        "width": 14.7,
        "height": 18.98,
        "depth": 21.93
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 1,
          "comment": "Waste of money!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Henry Adams",
          "reviewerEmail": "henry.adams@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Hazel Gardner",
          "reviewerEmail": "hazel.gardner@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Very dissatisfied!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Xavier Wright",
          "reviewerEmail": "xavier.wright@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 25,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "1717131152077",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Glass/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Glass/thumbnail.png"
    },
    {
      "id": 60,
      "title": "Grater Black",
      "description": "The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.",
      "category": "kitchen-accessories",
      "price": 10.99,
      "discountPercentage": 3.29,
      "rating": 2.87,
      "stock": 80,
      "tags": [
        "kitchen tools",
        "graters"
      ],
      "sku": "UBA8CV8A",
      "weight": 3,
      "dimensions": {
        "width": 12.6,
        "height": 28.86,
        "depth": 21.12
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Jackson Morales",
          "reviewerEmail": "jackson.morales@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Liam Garcia",
          "reviewerEmail": "liam.garcia@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Oscar Powers",
          "reviewerEmail": "oscar.powers@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 22,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "3884864069212",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Grater%20Black/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Grater%20Black/thumbnail.png"
    },
    {
      "id": 61,
      "title": "Hand Blender",
      "description": "The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.",
      "category": "kitchen-accessories",
      "price": 34.99,
      "discountPercentage": 6.44,
      "rating": 3.71,
      "stock": 8,
      "tags": [
        "kitchen appliances",
        "blenders"
      ],
      "sku": "JZNXDL37",
      "weight": 4,
      "dimensions": {
        "width": 13.3,
        "height": 6.21,
        "depth": 16.77
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Chloe Morales",
          "reviewerEmail": "chloe.morales@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Eleanor Tyler",
          "reviewerEmail": "eleanor.tyler@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Stella Morris",
          "reviewerEmail": "stella.morris@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 7,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "0910668863747",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Hand%20Blender/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Hand%20Blender/thumbnail.png"
    },
    {
      "id": 62,
      "title": "Ice Cube Tray",
      "description": "The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.",
      "category": "kitchen-accessories",
      "price": 5.99,
      "discountPercentage": 0.95,
      "rating": 3.27,
      "stock": 81,
      "tags": [
        "kitchen tools",
        "ice cube trays"
      ],
      "sku": "K0UE7U34",
      "weight": 8,
      "dimensions": {
        "width": 27.19,
        "height": 20.42,
        "depth": 17.45
      },
      "warrantyInformation": "No warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Mia Miller",
          "reviewerEmail": "mia.miller@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Emma Miller",
          "reviewerEmail": "emma.miller@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Isabella Anderson",
          "reviewerEmail": "isabella.anderson@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 11,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "7685066283284",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/thumbnail.png"
    },
    {
      "id": 63,
      "title": "Kitchen Sieve",
      "description": "The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.",
      "category": "kitchen-accessories",
      "price": 7.99,
      "discountPercentage": 9.23,
      "rating": 2.96,
      "stock": 33,
      "tags": [
        "kitchen tools",
        "strainers"
      ],
      "sku": "4U0L9HB6",
      "weight": 5,
      "dimensions": {
        "width": 22.94,
        "height": 11.91,
        "depth": 20.47
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Charlotte Davis",
          "reviewerEmail": "charlotte.davis@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Leah Hughes",
          "reviewerEmail": "leah.hughes@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Daniel Taylor",
          "reviewerEmail": "daniel.taylor@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "4674610806136",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Kitchen%20Sieve/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Kitchen%20Sieve/thumbnail.png"
    },
    {
      "id": 64,
      "title": "Knife",
      "description": "The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.",
      "category": "kitchen-accessories",
      "price": 14.99,
      "discountPercentage": 19.95,
      "rating": 4.31,
      "stock": 59,
      "tags": [
        "kitchen tools",
        "cutlery"
      ],
      "sku": "NHTTZ30W",
      "weight": 7,
      "dimensions": {
        "width": 11.63,
        "height": 23.99,
        "depth": 24.62
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Benjamin Foster",
          "reviewerEmail": "benjamin.foster@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Daniel Taylor",
          "reviewerEmail": "daniel.taylor@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Hannah Robinson",
          "reviewerEmail": "hannah.robinson@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 47,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "8987152038596",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Knife/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Knife/thumbnail.png"
    },
    {
      "id": 65,
      "title": "Lunch Box",
      "description": "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
      "category": "kitchen-accessories",
      "price": 12.99,
      "discountPercentage": 15.33,
      "rating": 2.84,
      "stock": 26,
      "tags": [
        "kitchen tools",
        "storage"
      ],
      "sku": "T4T5IDXP",
      "weight": 1,
      "dimensions": {
        "width": 13.76,
        "height": 18.36,
        "depth": 27.9
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Abigail Rivera",
          "reviewerEmail": "abigail.rivera@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Mason Wright",
          "reviewerEmail": "mason.wright@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Hunter Gordon",
          "reviewerEmail": "hunter.gordon@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 49,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "6294012902550",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Lunch%20Box/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Lunch%20Box/thumbnail.png"
    },
    {
      "id": 66,
      "title": "Microwave Oven",
      "description": "The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.",
      "category": "kitchen-accessories",
      "price": 89.99,
      "discountPercentage": 18.73,
      "rating": 2.71,
      "stock": 27,
      "tags": [
        "kitchen appliances",
        "microwaves"
      ],
      "sku": "7CERPRRE",
      "weight": 8,
      "dimensions": {
        "width": 9.61,
        "height": 25.64,
        "depth": 12.31
      },
      "warrantyInformation": "6 months warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Ava Harrison",
          "reviewerEmail": "ava.harrison@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Liam Gonzalez",
          "reviewerEmail": "liam.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Avery Carter",
          "reviewerEmail": "avery.carter@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 8,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "4567190151518",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/1.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/2.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/3.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/thumbnail.png"
    },
    {
      "id": 67,
      "title": "Mug Tree Stand",
      "description": "The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.",
      "category": "kitchen-accessories",
      "price": 15.99,
      "discountPercentage": 15.21,
      "rating": 4.34,
      "stock": 93,
      "tags": [
        "kitchen tools",
        "organization"
      ],
      "sku": "T4EBCVSS",
      "weight": 7,
      "dimensions": {
        "width": 7.37,
        "height": 13.1,
        "depth": 12
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Not as described!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Mia Miller",
          "reviewerEmail": "mia.miller@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Would not recommend!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Cameron Perez",
          "reviewerEmail": "cameron.perez@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Not worth the price!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Lily Torres",
          "reviewerEmail": "lily.torres@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 36,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "2099756104307",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/1.png",
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/2.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/thumbnail.png"
    },
    {
      "id": 68,
      "title": "Pan",
      "description": "The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.",
      "category": "kitchen-accessories",
      "price": 24.99,
      "discountPercentage": 6.55,
      "rating": 3.4,
      "stock": 40,
      "tags": [
        "cookware",
        "pans"
      ],
      "sku": "3E1WZOKX",
      "weight": 7,
      "dimensions": {
        "width": 19.51,
        "height": 17.96,
        "depth": 23.24
      },
      "warrantyInformation": "3 months warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Chloe Morales",
          "reviewerEmail": "chloe.morales@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Sophia Brown",
          "reviewerEmail": "sophia.brown@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Max Russell",
          "reviewerEmail": "max.russell@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 8,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "8562045288370",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Pan/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Pan/thumbnail.png"
    },
    {
      "id": 69,
      "title": "Plate",
      "description": "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
      "category": "kitchen-accessories",
      "price": 3.99,
      "discountPercentage": 13.03,
      "rating": 3.07,
      "stock": 30,
      "tags": [
        "dinnerware",
        "plates"
      ],
      "sku": "S8T5CGBD",
      "weight": 8,
      "dimensions": {
        "width": 14.77,
        "height": 21.78,
        "depth": 29.1
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Poor quality!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Gavin Stanley",
          "reviewerEmail": "gavin.stanley@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Mateo Bennett",
          "reviewerEmail": "mateo.bennett@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very disappointed!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Elena Long",
          "reviewerEmail": "elena.long@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 2,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "5500686082076",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Plate/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Plate/thumbnail.png"
    },
    {
      "id": 70,
      "title": "Red Tongs",
      "description": "The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.",
      "category": "kitchen-accessories",
      "price": 6.99,
      "discountPercentage": 18.24,
      "rating": 3.22,
      "stock": 15,
      "tags": [
        "kitchen tools",
        "tongs"
      ],
      "sku": "BTNVE4CT",
      "weight": 3,
      "dimensions": {
        "width": 27.38,
        "height": 20.49,
        "depth": 26.65
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 2,
          "comment": "Would not recommend!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Nolan Bryant",
          "reviewerEmail": "nolan.bryant@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Elijah Cruz",
          "reviewerEmail": "elijah.cruz@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Nova Cooper",
          "reviewerEmail": "nova.cooper@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 27,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "5757998756907",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Red%20Tongs/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Red%20Tongs/thumbnail.png"
    },
    {
      "id": 71,
      "title": "Silver Pot With Glass Cap",
      "description": "The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.",
      "category": "kitchen-accessories",
      "price": 39.99,
      "discountPercentage": 4.57,
      "rating": 3.86,
      "stock": 37,
      "tags": [
        "cookware",
        "pots"
      ],
      "sku": "BSFNUA3V",
      "weight": 9,
      "dimensions": {
        "width": 9.58,
        "height": 25.84,
        "depth": 26.13
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Addison Wright",
          "reviewerEmail": "addison.wright@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Not worth the price!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Ava Taylor",
          "reviewerEmail": "ava.taylor@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Avery Scott",
          "reviewerEmail": "avery.scott@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 19,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "6630860592730",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Silver%20Pot%20With%20Glass%20Cap/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Silver%20Pot%20With%20Glass%20Cap/thumbnail.png"
    },
    {
      "id": 72,
      "title": "Slotted Turner",
      "description": "The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.",
      "category": "kitchen-accessories",
      "price": 8.99,
      "discountPercentage": 7.24,
      "rating": 3.77,
      "stock": 36,
      "tags": [
        "kitchen tools",
        "turners"
      ],
      "sku": "HCKJ62ZJ",
      "weight": 4,
      "dimensions": {
        "width": 22.29,
        "height": 24.06,
        "depth": 7.05
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Julian Newton",
          "reviewerEmail": "julian.newton@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Scarlett Wright",
          "reviewerEmail": "scarlett.wright@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Leah Hughes",
          "reviewerEmail": "leah.hughes@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 11,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "4553081799999",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Slotted%20Turner/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Slotted%20Turner/thumbnail.png"
    },
    {
      "id": 73,
      "title": "Spice Rack",
      "description": "The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.",
      "category": "kitchen-accessories",
      "price": 19.99,
      "discountPercentage": 13.78,
      "rating": 4.05,
      "stock": 24,
      "tags": [
        "kitchen tools",
        "organization"
      ],
      "sku": "WFKJQQRD",
      "weight": 8,
      "dimensions": {
        "width": 20.73,
        "height": 6.81,
        "depth": 24.14
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Elena Baker",
          "reviewerEmail": "elena.baker@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Elijah Cruz",
          "reviewerEmail": "elijah.cruz@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Penelope King",
          "reviewerEmail": "penelope.king@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 15,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "9714959799802",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spice%20Rack/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spice%20Rack/thumbnail.png"
    },
    {
      "id": 74,
      "title": "Spoon",
      "description": "The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.",
      "category": "kitchen-accessories",
      "price": 4.99,
      "discountPercentage": 0.93,
      "rating": 3.98,
      "stock": 51,
      "tags": [
        "kitchen tools",
        "utensils"
      ],
      "sku": "PPBAZ4TS",
      "weight": 9,
      "dimensions": {
        "width": 8.45,
        "height": 25.16,
        "depth": 17.43
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Sophia Jones",
          "reviewerEmail": "sophia.jones@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Wyatt Perry",
          "reviewerEmail": "wyatt.perry@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Chloe Roberts",
          "reviewerEmail": "chloe.roberts@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 40,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "9577845433830",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spoon/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spoon/thumbnail.png"
    },
    {
      "id": 75,
      "title": "Tray",
      "description": "The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.",
      "category": "kitchen-accessories",
      "price": 16.99,
      "discountPercentage": 9.93,
      "rating": 3.2,
      "stock": 48,
      "tags": [
        "serveware",
        "trays"
      ],
      "sku": "PCU0I0A1",
      "weight": 8,
      "dimensions": {
        "width": 25.01,
        "height": 5.72,
        "depth": 5.25
      },
      "warrantyInformation": "5 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Lily Lee",
          "reviewerEmail": "lily.lee@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Not worth the price!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Emma Wilson",
          "reviewerEmail": "emma.wilson@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Ava Taylor",
          "reviewerEmail": "ava.taylor@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 10,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "8480335361590",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Tray/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Tray/thumbnail.png"
    },
    {
      "id": 76,
      "title": "Wooden Rolling Pin",
      "description": "The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.",
      "category": "kitchen-accessories",
      "price": 11.99,
      "discountPercentage": 16.94,
      "rating": 4.99,
      "stock": 80,
      "tags": [
        "kitchen tools",
        "baking"
      ],
      "sku": "WHUXD7N8",
      "weight": 7,
      "dimensions": {
        "width": 19.66,
        "height": 19.62,
        "depth": 25.23
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Brayden Hill",
          "reviewerEmail": "brayden.hill@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Would not recommend!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Samantha Howard",
          "reviewerEmail": "samantha.howard@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Ruby Andrews",
          "reviewerEmail": "ruby.andrews@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "8349683798423",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Wooden%20Rolling%20Pin/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Wooden%20Rolling%20Pin/thumbnail.png"
    },
    {
      "id": 77,
      "title": "Yellow Peeler",
      "description": "The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.",
      "category": "kitchen-accessories",
      "price": 5.99,
      "discountPercentage": 17.09,
      "rating": 4.41,
      "stock": 86,
      "tags": [
        "kitchen tools",
        "peelers"
      ],
      "sku": "YR9GLZ3I",
      "weight": 4,
      "dimensions": {
        "width": 17.36,
        "height": 17.41,
        "depth": 27.38
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Harper Garcia",
          "reviewerEmail": "harper.garcia@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Liam Garcia",
          "reviewerEmail": "liam.garcia@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Jacob Cooper",
          "reviewerEmail": "jacob.cooper@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 45,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "1621510537954",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Yellow%20Peeler/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Yellow%20Peeler/thumbnail.png"
    },
    {
      "id": 78,
      "title": "Apple MacBook Pro 14 Inch Space Grey",
      "description": "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
      "category": "laptops",
      "price": 1999.99,
      "discountPercentage": 9.25,
      "rating": 3.13,
      "stock": 39,
      "tags": [
        "laptops",
        "apple"
      ],
      "brand": "Apple",
      "sku": "QDKO6NRJ",
      "weight": 4,
      "dimensions": {
        "width": 12.38,
        "height": 21.55,
        "depth": 27.95
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Hunter Gordon",
          "reviewerEmail": "hunter.gordon@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Emma Wilson",
          "reviewerEmail": "emma.wilson@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "David Martinez",
          "reviewerEmail": "david.martinez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "3883623063065",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png",
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.png",
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"
    },
    {
      "id": 79,
      "title": "Asus Zenbook Pro Dual Screen Laptop",
      "description": "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
      "category": "laptops",
      "price": 1799.99,
      "discountPercentage": 9.21,
      "rating": 3.14,
      "stock": 38,
      "tags": [
        "laptops"
      ],
      "brand": "Asus",
      "sku": "4A9KFMBG",
      "weight": 8,
      "dimensions": {
        "width": 19.67,
        "height": 11.05,
        "depth": 14.32
      },
      "warrantyInformation": "No warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Jack Ward",
          "reviewerEmail": "jack.ward@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very disappointed!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Ava Harris",
          "reviewerEmail": "ava.harris@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Brayden Fleming",
          "reviewerEmail": "brayden.fleming@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "2899455033799",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png",
        "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/2.png",
        "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png"
    },
    {
      "id": 80,
      "title": "Huawei Matebook X Pro",
      "description": "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
      "category": "laptops",
      "price": 1399.99,
      "discountPercentage": 15.25,
      "rating": 4.62,
      "stock": 34,
      "tags": [
        "laptops"
      ],
      "brand": "Huawei",
      "sku": "U2CBNNB0",
      "weight": 9,
      "dimensions": {
        "width": 22.11,
        "height": 11.11,
        "depth": 23.07
      },
      "warrantyInformation": "2 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Samantha Howard",
          "reviewerEmail": "samantha.howard@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Would not buy again!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Daniel Cook",
          "reviewerEmail": "daniel.cook@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.622Z",
          "reviewerName": "Brayden Fleming",
          "reviewerEmail": "brayden.fleming@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.622Z",
        "updatedAt": "2024-05-23T08:56:21.622Z",
        "barcode": "1232723732298",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/1.png",
        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/2.png",
        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png"
    },
    {
      "id": 81,
      "title": "Lenovo Yoga 920",
      "description": "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
      "category": "laptops",
      "price": 1099.99,
      "discountPercentage": 7.77,
      "rating": 2.98,
      "stock": 71,
      "tags": [
        "laptops"
      ],
      "brand": "Lenovo",
      "sku": "MST9WZQY",
      "weight": 7,
      "dimensions": {
        "width": 11.02,
        "height": 14.45,
        "depth": 24.09
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Paisley Bell",
          "reviewerEmail": "paisley.bell@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Lincoln Kelly",
          "reviewerEmail": "lincoln.kelly@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Luna Russell",
          "reviewerEmail": "luna.russell@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.623Z",
        "updatedAt": "2024-05-23T08:56:21.623Z",
        "barcode": "9590995785298",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/1.png",
        "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/2.png",
        "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png"
    },
    {
      "id": 82,
      "title": "New DELL XPS 13 9300 Laptop",
      "description": "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
      "category": "laptops",
      "price": 1499.99,
      "discountPercentage": 11.7,
      "rating": 2.98,
      "stock": 18,
      "tags": [
        "laptops"
      ],
      "brand": "Dell",
      "sku": "XBJJ446X",
      "weight": 10,
      "dimensions": {
        "width": 12.09,
        "height": 6.43,
        "depth": 15.69
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Very disappointed!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Julian Newton",
          "reviewerEmail": "julian.newton@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Grace Perry",
          "reviewerEmail": "grace.perry@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Daniel Taylor",
          "reviewerEmail": "daniel.taylor@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.623Z",
        "updatedAt": "2024-05-23T08:56:21.623Z",
        "barcode": "0358629687929",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/1.png",
        "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/2.png",
        "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/thumbnail.png"
    },
    {
      "id": 83,
      "title": "Blue & Black Check Shirt",
      "description": "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
      "category": "mens-shirts",
      "price": 29.99,
      "discountPercentage": 1.41,
      "rating": 4.19,
      "stock": 44,
      "tags": [
        "clothing",
        "men's shirts"
      ],
      "brand": "Fashion Trends",
      "sku": "6RJDTVCU",
      "weight": 6,
      "dimensions": {
        "width": 17.25,
        "height": 27.31,
        "depth": 20.88
      },
      "warrantyInformation": "No warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Mason Parker",
          "reviewerEmail": "mason.parker@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Avery Perez",
          "reviewerEmail": "avery.perez@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Nathan Reed",
          "reviewerEmail": "nathan.reed@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 4,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.623Z",
        "updatedAt": "2024-05-23T08:56:21.623Z",
        "barcode": "8840720880947",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/thumbnail.png"
    },
    {
      "id": 84,
      "title": "Gigabyte Aorus Men Tshirt",
      "description": "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
      "category": "mens-shirts",
      "price": 24.99,
      "discountPercentage": 12.6,
      "rating": 4.95,
      "stock": 64,
      "tags": [
        "clothing",
        "men's t-shirts"
      ],
      "brand": "Gigabyte",
      "sku": "QA703Y60",
      "weight": 2,
      "dimensions": {
        "width": 8.54,
        "height": 23.52,
        "depth": 5.66
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Logan Lawson",
          "reviewerEmail": "logan.lawson@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Logan Lawson",
          "reviewerEmail": "logan.lawson@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Oscar Powers",
          "reviewerEmail": "oscar.powers@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 4,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.623Z",
        "updatedAt": "2024-05-23T08:56:21.623Z",
        "barcode": "3072645939073",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/thumbnail.png"
    },
    {
      "id": 85,
      "title": "Man Plaid Shirt",
      "description": "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
      "category": "mens-shirts",
      "price": 34.99,
      "discountPercentage": 17.53,
      "rating": 3.66,
      "stock": 65,
      "tags": [
        "clothing",
        "men's shirts"
      ],
      "brand": "Classic Wear",
      "sku": "TWL7HRBB",
      "weight": 1,
      "dimensions": {
        "width": 29.56,
        "height": 29.84,
        "depth": 7.77
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Would not buy again!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Nora Mills",
          "reviewerEmail": "nora.mills@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very disappointed!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Addison Ward",
          "reviewerEmail": "addison.ward@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Emily Brown",
          "reviewerEmail": "emily.brown@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.623Z",
        "updatedAt": "2024-05-23T08:56:21.623Z",
        "barcode": "9383795178668",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/thumbnail.png"
    },
    {
      "id": 86,
      "title": "Man Short Sleeve Shirt",
      "description": "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
      "category": "mens-shirts",
      "price": 19.99,
      "discountPercentage": 8.65,
      "rating": 4.62,
      "stock": 20,
      "tags": [
        "clothing",
        "men's shirts"
      ],
      "brand": "Casual Comfort",
      "sku": "KEVGVDTV",
      "weight": 2,
      "dimensions": {
        "width": 7.11,
        "height": 28.63,
        "depth": 27.54
      },
      "warrantyInformation": "5 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Caleb Nelson",
          "reviewerEmail": "caleb.nelson@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Disappointing product!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Emily Johnson",
          "reviewerEmail": "emily.johnson@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Mila Hernandez",
          "reviewerEmail": "mila.hernandez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.623Z",
        "updatedAt": "2024-05-23T08:56:21.623Z",
        "barcode": "8162805546713",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/thumbnail.png"
    },
    {
      "id": 87,
      "title": "Men Check Shirt",
      "description": "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
      "category": "mens-shirts",
      "price": 27.99,
      "discountPercentage": 14.21,
      "rating": 2.9,
      "stock": 69,
      "tags": [
        "clothing",
        "men's shirts"
      ],
      "brand": "Urban Chic",
      "sku": "L902AU9L",
      "weight": 1,
      "dimensions": {
        "width": 18.43,
        "height": 6.96,
        "depth": 20.73
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 1,
          "comment": "Would not buy again!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Elena Long",
          "reviewerEmail": "elena.long@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very dissatisfied!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Mason Parker",
          "reviewerEmail": "mason.parker@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Sofia Mitchell",
          "reviewerEmail": "sofia.mitchell@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 8,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.623Z",
        "updatedAt": "2024-05-23T08:56:21.623Z",
        "barcode": "1360512025227",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/thumbnail.png"
    },
    {
      "id": 88,
      "title": "Nike Air Jordan 1 Red And Black",
      "description": "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
      "category": "mens-shoes",
      "price": 149.99,
      "discountPercentage": 15.82,
      "rating": 2.77,
      "stock": 15,
      "tags": [
        "footwear",
        "athletic shoes"
      ],
      "brand": "Nike",
      "sku": "84YC5J67",
      "weight": 5,
      "dimensions": {
        "width": 19.29,
        "height": 13.2,
        "depth": 29.13
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 2,
          "comment": "Very unhappy with my purchase!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Victoria McDonald",
          "reviewerEmail": "victoria.mcdonald@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Mason Parker",
          "reviewerEmail": "mason.parker@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Avery Perez",
          "reviewerEmail": "avery.perez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 2,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.623Z",
        "updatedAt": "2024-05-23T08:56:21.623Z",
        "barcode": "0098559139691",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/thumbnail.png"
    },
    {
      "id": 89,
      "title": "Nike Baseball Cleats",
      "description": "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
      "category": "mens-shoes",
      "price": 79.99,
      "discountPercentage": 11.4,
      "rating": 4.01,
      "stock": 14,
      "tags": [
        "footwear",
        "sports cleats"
      ],
      "brand": "Nike",
      "sku": "81LRTRP5",
      "weight": 7,
      "dimensions": {
        "width": 14.83,
        "height": 19.16,
        "depth": 28.98
      },
      "warrantyInformation": "No warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "William Gonzalez",
          "reviewerEmail": "william.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Not worth the price!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Sophia Brown",
          "reviewerEmail": "sophia.brown@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Gabriel Mitchell",
          "reviewerEmail": "gabriel.mitchell@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 3,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.623Z",
        "updatedAt": "2024-05-23T08:56:21.623Z",
        "barcode": "0517654748946",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/thumbnail.png"
    },
    {
      "id": 90,
      "title": "Puma Future Rider Trainers",
      "description": "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
      "category": "mens-shoes",
      "price": 89.99,
      "discountPercentage": 3.64,
      "rating": 4.85,
      "stock": 10,
      "tags": [
        "footwear",
        "casual shoes"
      ],
      "brand": "Puma",
      "sku": "64ORN32I",
      "weight": 8,
      "dimensions": {
        "width": 14.58,
        "height": 25.54,
        "depth": 19.57
      },
      "warrantyInformation": "2 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Lucas Allen",
          "reviewerEmail": "lucas.allen@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Mason Pearson",
          "reviewerEmail": "mason.pearson@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Hunter Gordon",
          "reviewerEmail": "hunter.gordon@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 9,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.623Z",
        "updatedAt": "2024-05-23T08:56:21.623Z",
        "barcode": "3562849555769",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/thumbnail.png"
    },
    {
      "id": 91,
      "title": "Sports Sneakers Off White & Red",
      "description": "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
      "category": "mens-shoes",
      "price": 119.99,
      "discountPercentage": 11.69,
      "rating": 4.92,
      "stock": 73,
      "tags": [
        "footwear",
        "athletic shoes"
      ],
      "brand": "Off White",
      "sku": "8SRWW2RM",
      "weight": 3,
      "dimensions": {
        "width": 10.71,
        "height": 19.23,
        "depth": 19.85
      },
      "warrantyInformation": "6 months warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Not worth the price!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "James Garcia",
          "reviewerEmail": "james.garcia@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very unhappy with my purchase!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Nora Russell",
          "reviewerEmail": "nora.russell@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Aurora Rodriguez",
          "reviewerEmail": "aurora.rodriguez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 5,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.623Z",
        "updatedAt": "2024-05-23T08:56:21.623Z",
        "barcode": "3784445385582",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/thumbnail.png"
    },
    {
      "id": 92,
      "title": "Sports Sneakers Off White Red",
      "description": "Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.",
      "category": "mens-shoes",
      "price": 109.99,
      "discountPercentage": 17.22,
      "rating": 2.95,
      "stock": 75,
      "tags": [
        "footwear",
        "casual shoes"
      ],
      "brand": "Off White",
      "sku": "1SFJZOT2",
      "weight": 4,
      "dimensions": {
        "width": 18.32,
        "height": 19.34,
        "depth": 28.56
      },
      "warrantyInformation": "No warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Madeline Simpson",
          "reviewerEmail": "madeline.simpson@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Mateo Nguyen",
          "reviewerEmail": "mateo.nguyen@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.623Z",
          "reviewerName": "Ethan Fletcher",
          "reviewerEmail": "ethan.fletcher@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 3,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.623Z",
        "updatedAt": "2024-05-23T08:56:21.623Z",
        "barcode": "0839375107303",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/1.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/2.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/3.png",
        "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/4.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/thumbnail.png"
    },
    {
      "id": 93,
      "title": "Brown Leather Belt Watch",
      "description": "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
      "category": "mens-watches",
      "price": 89.99,
      "discountPercentage": 15.01,
      "rating": 4.47,
      "stock": 69,
      "tags": [
        "watches",
        "leather watches"
      ],
      "brand": "Fashion Timepieces",
      "sku": "WGZ21MSA",
      "weight": 10,
      "dimensions": {
        "width": 18.39,
        "height": 10.82,
        "depth": 10.52
      },
      "warrantyInformation": "3 months warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Very dissatisfied!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Oscar Powers",
          "reviewerEmail": "oscar.powers@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Eli Ward",
          "reviewerEmail": "eli.ward@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Stella Hughes",
          "reviewerEmail": "stella.hughes@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 10,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.624Z",
        "updatedAt": "2024-05-23T08:56:21.624Z",
        "barcode": "9559180055872",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/1.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/2.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/thumbnail.png"
    },
    {
      "id": 94,
      "title": "Longines Master Collection",
      "description": "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
      "category": "mens-watches",
      "price": 1499.99,
      "discountPercentage": 0.64,
      "rating": 2.64,
      "stock": 65,
      "tags": [
        "watches",
        "luxury watches"
      ],
      "brand": "Longines",
      "sku": "LA7B9XEV",
      "weight": 2,
      "dimensions": {
        "width": 5.83,
        "height": 12.48,
        "depth": 7.65
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Jack Ward",
          "reviewerEmail": "jack.ward@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Victoria McDonald",
          "reviewerEmail": "victoria.mcdonald@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Mia Rodriguez",
          "reviewerEmail": "mia.rodriguez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.624Z",
        "updatedAt": "2024-05-23T08:56:21.624Z",
        "barcode": "1865008250672",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/1.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/2.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/thumbnail.png"
    },
    {
      "id": 95,
      "title": "Rolex Cellini Date Black Dial",
      "description": "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
      "category": "mens-watches",
      "price": 8999.99,
      "discountPercentage": 14.28,
      "rating": 3.61,
      "stock": 84,
      "tags": [
        "watches",
        "luxury watches"
      ],
      "brand": "Rolex",
      "sku": "J3GPKQW0",
      "weight": 6,
      "dimensions": {
        "width": 12.17,
        "height": 27.99,
        "depth": 10.36
      },
      "warrantyInformation": "5 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Gavin Stanley",
          "reviewerEmail": "gavin.stanley@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Stella Hughes",
          "reviewerEmail": "stella.hughes@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Paisley Bell",
          "reviewerEmail": "paisley.bell@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.624Z",
        "updatedAt": "2024-05-23T08:56:21.624Z",
        "barcode": "8917585155737",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/1.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/2.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/thumbnail.png"
    },
    {
      "id": 96,
      "title": "Rolex Cellini Moonphase",
      "description": "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
      "category": "mens-watches",
      "price": 12999.99,
      "discountPercentage": 5.7,
      "rating": 4.52,
      "stock": 33,
      "tags": [
        "watches",
        "luxury watches"
      ],
      "brand": "Rolex",
      "sku": "LUZDIKKR",
      "weight": 5,
      "dimensions": {
        "width": 28.07,
        "height": 13.43,
        "depth": 10.81
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Sophia Jones",
          "reviewerEmail": "sophia.jones@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Jacob Cooper",
          "reviewerEmail": "jacob.cooper@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Elijah Cruz",
          "reviewerEmail": "elijah.cruz@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.624Z",
        "updatedAt": "2024-05-23T08:56:21.624Z",
        "barcode": "0330714338454",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/1.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/2.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png"
    },
    {
      "id": 97,
      "title": "Rolex Datejust",
      "description": "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
      "category": "mens-watches",
      "price": 10999.99,
      "discountPercentage": 9.69,
      "rating": 4.94,
      "stock": 11,
      "tags": [
        "watches",
        "luxury watches"
      ],
      "brand": "Rolex",
      "sku": "86V20NWJ",
      "weight": 5,
      "dimensions": {
        "width": 9.68,
        "height": 7.29,
        "depth": 5.67
      },
      "warrantyInformation": "6 months warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Max Russell",
          "reviewerEmail": "max.russell@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Jonathan Pierce",
          "reviewerEmail": "jonathan.pierce@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Awesome product!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Asher Scott",
          "reviewerEmail": "asher.scott@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.624Z",
        "updatedAt": "2024-05-23T08:56:21.624Z",
        "barcode": "4957618378388",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/1.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/2.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/thumbnail.png"
    },
    {
      "id": 98,
      "title": "Rolex Submariner Watch",
      "description": "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
      "category": "mens-watches",
      "price": 13999.99,
      "discountPercentage": 0.82,
      "rating": 2.97,
      "stock": 35,
      "tags": [
        "watches",
        "luxury watches"
      ],
      "brand": "Rolex",
      "sku": "XFGRO0O5",
      "weight": 5,
      "dimensions": {
        "width": 5.22,
        "height": 27.59,
        "depth": 16.93
      },
      "warrantyInformation": "No warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 2,
          "comment": "Very dissatisfied!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Emily Brown",
          "reviewerEmail": "emily.brown@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Nova Cooper",
          "reviewerEmail": "nova.cooper@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Would not recommend!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Julian James",
          "reviewerEmail": "julian.james@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.624Z",
        "updatedAt": "2024-05-23T08:56:21.624Z",
        "barcode": "6567997358364",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/1.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/2.png",
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png"
    },
    {
      "id": 99,
      "title": "Amazon Echo Plus",
      "description": "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
      "category": "mobile-accessories",
      "price": 99.99,
      "discountPercentage": 16.3,
      "rating": 3.52,
      "stock": 50,
      "tags": [
        "electronics",
        "smart speakers"
      ],
      "brand": "Amazon",
      "sku": "YHLK4W9V",
      "weight": 7,
      "dimensions": {
        "width": 8.1,
        "height": 7.74,
        "depth": 5.68
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Nora Mills",
          "reviewerEmail": "nora.mills@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Ava Taylor",
          "reviewerEmail": "ava.taylor@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Aria Flores",
          "reviewerEmail": "aria.flores@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.624Z",
        "updatedAt": "2024-05-23T08:56:21.624Z",
        "barcode": "0697313083842",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/1.png",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/2.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/thumbnail.png"
    },
    {
      "id": 100,
      "title": "Apple Airpods",
      "description": "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
      "category": "mobile-accessories",
      "price": 129.99,
      "discountPercentage": 4.82,
      "rating": 4.38,
      "stock": 93,
      "tags": [
        "electronics",
        "wireless earphones"
      ],
      "brand": "Apple",
      "sku": "H76W8TSP",
      "weight": 3,
      "dimensions": {
        "width": 22.62,
        "height": 9.92,
        "depth": 18.15
      },
      "warrantyInformation": "No warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Waste of money!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Aaliyah Hanson",
          "reviewerEmail": "aaliyah.hanson@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Waste of money!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Leah Gutierrez",
          "reviewerEmail": "leah.gutierrez@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Not worth the price!",
          "date": "2024-05-23T08:56:21.624Z",
          "reviewerName": "Jace Smith",
          "reviewerEmail": "jace.smith@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 3,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.624Z",
        "updatedAt": "2024-05-23T08:56:21.624Z",
        "barcode": "3925144121840",
        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/2.png",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png"
    }
  ]

const categories = [...new Set(products.map(item=>(item.category)))]
const brand = [...new Set(products.map(item=>(item.brand)))].filter((x)=>x) // filter to filterout undefined
 
console.log(categories)
console.log(brand)

// convert this into objects
console.log(categories.map((x)=>({value:x,lable:x.split('-').join(' '),checked:false})))
console.log(brand.map((x)=>({value:x,lable:x.split('-').join(' '),checked:false})))

