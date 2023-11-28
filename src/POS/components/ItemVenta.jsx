import { useForm } from "../hooks";

export const ItemVenta = () => {
  
   
  const {onInputChange,onResetForm,cantidad}=useForm({
    cantidad:1
  });

  
  return (
    <>
        <tr className="table-active">
            <th scope="row">
                <div className="d-flex align-items-center">
                    <img src={`/assets/products/Pepsi lata269ml.jpg`} alt="Imagen del producto" className="me-2" style={{width: '50px',height:'50px', objectFit:'contain'}}/>
                    <span style={{display: 'inline-block', marginLeft:'10px'}}>pepsi lata 350ml</span>
                </div>
                </th>
                <td>
                    <button className="btn btn-success">+</button>
                    <input 
                        onChange={onInputChange}  
                        type="text" 
                        className="text-center" 
                        name="cantidad1"  
                        value={cantidad}/>
                    <button className="btn btn-danger">-</button>
                </td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>3500</td>
        </tr>
    </>
  )
}
