const productsArray = [
    {
        id: "1",
        title: 'Aspire Flexus Pro Kit 1200mAh',
        imageUrl: "src/productImages/vapeone.png",
        description : 'Some description',
        price: 56.00,
        sliderImg: [
            "src/productImages/vapeone.png",
            'src/productImages/vapeone1.png',
            'src/productImages/vapeone2.png',
            'src/productImages/vapeone3.png',

        ],
        isNew: true

    },
    {
        id: "2",
        title: 'VooPoo Argus P2 Pod Kit 1100mAh',
        imageUrl: "src/productImages/vapetwo.png",
        description : 'Some description',
        price: 65.00,
        sliderImg: [
            "src/productImages/vapetwo.png",
            'src/productImages/vapetwo1.png',
            'src/productImages/vapetwo2.png',
            'src/productImages/vapetwo3.png',

        ],
        isNew: true


    },
    {
        id: "3",
        title: 'Moti Go Pro Pod Kit 1000mAh',
        imageUrl: "src/productImages/vapethree.png",
        description : 'Some description',
        price: 29.50,
        sliderImg: [
            "src/productImages/vapethree.png",
        ],
        isNew: true
    },
    {
        id: "4",
        title: 'VooPoo Drag M100S Kit',
        imageUrl: "src/productImages/vape4.png",
        description : 'Some description',
        price: 125.00,
        sliderImg: [
            "src/productImages/vape4.png",
            'src/productImages/vape4.1.png',
            'src/productImages/vape4.2.png',
            'src/productImages/vape4.3.png',

        ],
        isNew: true
    },
    {
        id: "5",
        title: 'VooPoo Argus P2 Pod Kit 1100mAh',
        imageUrl: "src/productImages/vapetwo.png",
        description : 'Some description',
        price: 65.00,
        sliderImg: [
            "src/productImages/vapetwo.png",
            'src/productImages/vapetwo1.png',
            'src/productImages/vapetwo2.png',
            'src/productImages/vapetwo3.png',

        ],
        isNew: true
    },
]

function getProductData(id){
    let productData = productsArray.find(product => product.id === id)

    if(productData == undefined){
        console.log('Product data does not exist for ID: ' + id)
        return undefined
    }

    return productData
}

export {productsArray , getProductData}