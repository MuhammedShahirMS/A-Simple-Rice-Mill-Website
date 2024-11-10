import client from 'cms'

const productService = {}

productService.getProducts = () => {
    console.log('Hii', client);
    
    return client
    .getEntries({ content_type: 'product',   'metadata.tags.sys.id[in]': 'pachakam' })
}

export default productService