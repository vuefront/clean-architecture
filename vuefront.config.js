modules.export = {
    repositories: {
        cms: {
            repositories: [
                'categories',
                // 'posts',
                // 'products'
            ]
        },
        auth: {
            //...
        }
    },
    modules: ['core', 'cart', 'blog'],
    cart: {
        'domain/entities/product': 'modules/cart/domain/entities/product', 
        'data/mappers/product': 'modules/cart/data/mappers/product'
    }
}