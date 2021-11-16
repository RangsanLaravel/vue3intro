//สร้าง  vue instance
const app = Vue.createApp({
    data() {
        return {
            product: 'iPhone 13 Pro Max',
            brand:'Apple',
            description: 'New Iphone',
            image: './assets/images/iphone-12-red.png',
            url: 'https://www.itgenius.co.th',
            inStock: true,
            inventory: 10,
            details: ['64GB', '128GB', '256GB'],
            variants: [{
                    id: 1,
                    color: 'Red',
                    image: './assets/images/iphone-12-red.png'
                },
                {
                    id: 2,
                    color: 'Purple',
                    image: './assets/images/iphone-12-purple.png'
                },
                {
                    id: 3,
                    color: 'White',
                    image: './assets/images/iphone-12-white.png'
                }
            ],
            cart: 0

        }
    },
    methods: {
        addToCart() {
            // alert('Hello')
            this.cart += 1
        },
        updateImage(image) {
            this.image = image
        }
    },
    computed:{
        title(){
            return this.brand+' '+ this.product
        }
    },
})