import { z } from 'zod';


export const productSchema = z.object({
    name: z.string({
        required_error: 'Nombre del producto requerido'
    }),
    price: z.number({
        required_error: 'Precio debe ser un numero'
    }),
    year: z.number({
        required_error: 'Anio debe ser un numero'
<<<<<<< HEAD
    }).optional()
});//Fin de productSchema 
=======
    })
})//Fin de productSchema 
>>>>>>> b92d37581b8562947d72ff89cec06af511b02e19
