import {useForm} from 'react-hook-form';
import { useProducts } from '../context/ProductsContext';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
function ProductsFormPage() {
  const { register, handleSubmit, setValue} = useForm();
  const { products, createProduct, getProduct, updateProduct } = useProducts();
  const navigate = useNavigate();
  const params = useParams();

  useEffect( ()=>{
    async function loadProduct(){
    //console.log(params);
    if(params.id) {//si existe en los params un id
    //Obtenemos los datos del producto
    const product = await getProduct(params.id);
    setValue('name', product.name);
    setValue('price', product.price);
    setValue('year', product.year)
  }
}//Fin de loadProduct
loadProduct();
}, [])  //Fin de useEffect

  //console.log(products);

  const onSubmit = handleSubmit( (data) =>{
    //console.log(data);
    if(params.id){//Si hay un parametro en la url actualiza
      updateProduct(params.id, data);
    } else{ //agregar un producto
      createProduct(data);

    }
    navigate('/products')
  })//Fin de onSubmit

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <form onSubmit={onSubmit}>
        <input type="text"
        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md'
        placeholder='Nombre del producto'
        {
          ...register("name")
        }
        autoFocus
        />
        <input type="number" step ="0.10"
        className='w-full bg-zinc-700 text-white py-2 rounded-md my-2 '
        placeholder='Precio del producto'
        {
          ...register("price",{
            valueAsNumber: true, 
          })
        
        }
        />
        <input type='number' max="2023" min="1900" step="1"
        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md'
        placeholder='Año del producto'
        {
          ...register('year',{
            valueAsNumber: true
          })
        }
        />
        <button type='submit'>Guardar</button>

        

      </form>


    </div>
  )
}

export default ProductsFormPage