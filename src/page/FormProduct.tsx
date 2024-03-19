import { useContext, useEffect } from 'react'
import '../style/Form.scss'
import { ProductContext } from '../context/ProductContextProvider'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'



type FormValue = {
    title: string
    category: string
    image: string
    price: number
    oldprice: number
}
const FormProduct = () => {
    const {dispatch} = useContext(ProductContext)
    const {id} = useParams()
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<FormValue>()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormValue> = async(product) =>{
       if(!id){
        document.title = 'Thêm Sản Phẩm'
         try {
            await axios.post(`http://localhost:3000/products`, product);
             dispatch({type: "ADD_PRODUCTS", payload: product})
             toast.success('Add New Product Complete!')
             navigate('/admin')
        } catch (error) {
            console.log(error)
        }
       }else{
            try {
             const {data} = await axios.put(`http://localhost:3000/products/${id}`, product);
             dispatch({type: "EDIT_PRODUCT", payload: product})
             toast.success(`Update ${data.title} Complete!`)
             navigate('/admin')
            } catch (error) {
                console.log(error)
            }
       }
}

    useEffect(()=>{
        if(id){
            (async()=>{
                const {data} = await axios.get(`http://localhost:3000/products/${id}`)
                reset(data)
                document.title = `Sửa Sản Phẩm ${data.title}`
            })()
        }else{
          document.title = "Thêm Sản Phẩm"
        }
    },[id, reset])

  return (
    <>
      <div className='container'>
        <div className="form_inner">
            <h1>{id ? "Update Product" : "Add Product"}</h1>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <div className="inputType">
                        <label>title</label>
                        <input  type="text" {...register('title', {required: true})} />
                        {errors.title && <span className='error'>This field is required</span>}
                </div>
                 <div className="inputType">
                        <label>Category</label>
                        <input  type="text" {...register('category', {required: true})}/>
                        {errors.category && <span className='error'>This field is required</span>}
                </div>
                  <div className="inputType">
                        <label>Image</label>
                        <input  type="text" {...register('image', {required: true})} />
                        {errors.image && <span className='error'>This field is required</span>}
                </div>
                 <div className="inputType">
                        <label>Price</label>
                        <input  type="number" {...register('price', {required: true})} />
                        {errors.price && <span className='error'>This field is required</span>}
                </div>
                 <div className="inputType">
                        <label>Old price</label>
                        <input  type="number" {...register('oldprice')} />
                </div>
                <div className='div_btn'>
                      <button type='submit' className='button'>{id ? "Update Product" : "Add Product"}</button>
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default FormProduct
