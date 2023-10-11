import { useProducts } from "../context/ProductsContext"


function ProductCard({product}) {
    const {deleteProduct} = useProducts()
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <header className="flex justify-between">
            <h1 className="text-1xl font-bold"> {product.name} </h1>
            <div className="flex gap-x-2 items-center">
                <button onClick={ ()=> {
                    deleteProduct(product._id)

                    //console.log(product._id)
                }}>Delete</button>
                <button>Edit</button>

            </div>
        </header>
        <p className="text-slate-300 my-2">
            {product.price}
        </p>
        <p className="text-salte-300 my-2">
            {product.year}
        </p>

    </div>
  )
}

export default ProductCard