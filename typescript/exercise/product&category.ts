// initial type 
type categoryType = {
  id: number,
  categoryName: string,
}

type productType = {
  id: number,
  productName: string,
  category: categoryType,
  quantity: number
}


// initial var category and product
const category: categoryType[] = [
  {
  id: 1,
  categoryName: 'electronic'
  },
  {
  id: 2,
  categoryName: 'fashion'
  }
]

const product: productType[] = []


// function add product
const addProduct = (productName: string, idCategory: number, quantity: number): void => {
  const newProduct = {
      id: product.length + 1,
      productName,
      category: {
          id: idCategory,
          categoryName: category.find(cat => cat.id === idCategory)?.categoryName || ''
      },
      quantity
  }
  product.push(newProduct)
  console.log(`Product berhasil ditambahkan`);
}

// function add category
const addCategory = (categoryName: string): void => {
  const newCategory = {
      id: category.length + 1,
      categoryName,
  }
  category.push(newCategory)
  console.log(`berhasil menambah category`);
}

// function edit product
const editProduct = (idProduct: number, productName: string, idCategory: number, quantity: number) => {
  const indexToEdit = product.findIndex((index) => index.id === idProduct)

      if (indexToEdit !== -1) {
      product[indexToEdit].productName = productName;
      product[indexToEdit].category = {
          id: idCategory,
          categoryName: category.find(cat => cat.id === idCategory)?.categoryName || ''
      };
      product[indexToEdit].quantity = quantity;
      console.log(`Produk dengan ID ${idProduct} telah berhasil diubah.`);
  } else {
      console.log(`Produk dengan ID ${idProduct} tidak ditemukan.`);
  }
}

// function filter product by id category
const filterProductByCategory = (idCategory: number): void => {
  const filteredProduct =  product.filter((p) => p.category.id === idCategory)
  console.log(filteredProduct)
}

// function get product and category
const getProduct = (): void => {
  console.log(product)
}
const getCategory = (): void => {
  console.log(category)
}

// testing add product
addProduct('hoodie', 2, 10)
addProduct('ipon 12', 1, 10)
addProduct('ipon 20', 1, 50)

// testing add category
addCategory('makanan')

// testing add product after add category
addProduct('snack', 3, 30)

// testing edit product
editProduct(2, 'samsung j2 prime', 1, 30 )

// testing get product and category
getCategory()
getProduct()

// testing getproductbycategoryid
filterProductByCategory(1)