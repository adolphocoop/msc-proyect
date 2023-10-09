import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import {useNavigate, Link} from 'react-router-dom'
import { useEffect } from "react"



function LoginPage() {
  const {register, handleSubmit, formState:{errors}} = useForm()
  const {signin, isAuthenticated, errors:signInErrors } = useAuth();
  const navigate = useNavigate();
  

  useEffect(  ()=>{
    if(isAuthenticated)
        navigate('/products')
    else
        console.log("No esta autenticado.");
}, [isAuthenticated])






  const onSubmit = handleSubmit((data) =>{
    console.log(data)
    signin(data);
  })
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold">Login</h1>
        
        {
                    signInErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 my-2 text-white" key={i}>
                            {error}
                        </div>
                    ))
                }
      <form onSubmit={ onSubmit}>
      <input type="email"
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Email"
                        {
                            ...register("email", {required: true})
                        }
                    />
                    {
                        errors.email && (
                            <p className="text-red-500">Email es requerido.</p>
                        )
                    }
                    <input type="password"
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Password"
                        {
                            ...register("password", {required: true })
                        }
                    />
                    {
                        errors.password && (
                            <p className="text-red-500">Password requerido</p>
                        )
                    }

                    <button className="bg-transparent hover:bg-slate-600 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded"
                        type="submit">Iniciar Sesión</button>
        </form>
        <p className="flex gap-x-2 justify-between">No tienes una cuenta?
           <Link to='/register' className="text-sky-500">Sign up</Link>
        </p>


      </div>
         
    </div>
  )
}

export default LoginPage