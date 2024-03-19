/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useRef, useState } from 'react'
import '../style/Admin.scss'
import { ProductContext } from '../context/ProductContextProvider'
import axios from 'axios'
import { IProduct } from '../interfaces/IProduct'
import { Link } from 'react-router-dom'
import Dialog from '../components/Dialog'
import { toast } from 'react-toastify'
const AdminList = () => {
    const {products, dispatch, formatVnd} = useContext(ProductContext)
    const [dialog, setDialog] = useState({
        message: "",
        status: false
    })
    const idProductRef = useRef()
    const handleDialog =(message: string, status: boolean)=>{
        setDialog({
            message: message,
            status: status
        })
    }
    useEffect(()=>{
        (async ()=>{
            try {
                const {data} = await axios.get(`http://localhost:3000/products`)
                dispatch({type: "SET_PRODUCTS", payload: data})
                document.title = 'Sản phẩm Admin'
            } catch (error) {
                console.log(error)
            }
        })()
    },[])

    const onHandleRemove = async (id: any)=>{
       idProductRef.current = id
       const {data} = await axios.get(`http://localhost:3000/products/${idProductRef.current}`)
       handleDialog(`Are you sure to delete ${data.title} have a id: ${data.id}`, true)
      
    }
    const conFirmDialog = async(choose: boolean)=>{
        if(choose){
            await axios.delete(`http://localhost:3000/products/${idProductRef.current}`)
            dispatch({type: "DELETE_PRODUCT", payload: idProductRef.current})
            toast.success(`Delete complete!`)
            handleDialog('',false)
        }else{
            handleDialog('', false)
        }
    }
  return (
    <>
    
    <div className="container">
    <div className="admin_list_inner">
        
    <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Product Name</th>
        <th>Image</th>
        <th>Category</th>
        <th>Price</th>
        <th>Oldprice</th>
        <th>  <Link className='addnew' to={`addproduct`}>
                Add New Product
            </Link></th>
      </tr>
    </thead>
    <thead></thead>
    <tbody>
        {products.value.map((item: IProduct, index: number)=>(
            <tr key={index}>
            <td >{item.id}</td>
            <td style={{fontWeight: 'bold'}}>{item.title}</td>
            <td><img src={item.image} width={50} alt="" /></td>
            <td style={{color: '#9F9F9F'}}>{item.category}</td>
            <td>{formatVnd.format(item.price)}</td>
            <td>{formatVnd.format(item.oldprice || item.price)}</td>
            <td>
                <div className="action_table">
                    <button onClick={()=> onHandleRemove(item.id)}>Delete</button>
                    <Link to={`edit/${item.id}`}>Edit</Link>
                </div>
            </td>
            </tr>
        ))}
    </tbody>
  </table>
  <table></table>
    </div>
    </div>
   {dialog.status && <Dialog onDialog={conFirmDialog} message={dialog.message}/>}
    </>
  )
}

export default AdminList
