import client from 'cms'

const productService = {}

productService.getProducts = () => {
    console.log('Hii', client);
    
    return client
    .getEntries({ content_type: 'product' })
}

export default productService