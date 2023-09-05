import { useNavigate } from "react-router-dom"
import { useForm } from "../../POS/hooks/useForm"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";



export const Login = () => {
const{ handleLogin }=useContext(AuthContext);
 const navigate=useNavigate();
 const {onInputChange,onResetForm,username,password}=useForm({
  username:'',
  password:''
 })

 const onLogin=(event)=>{
  handleLogin('Oscar Mora')
  event.preventDefault();
  navigate('/',{
    replace:false
  }
  );

 }

  return (
    <>
     <nav className="navbar navbar-expand-lg bg-success" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="home.html">
            <img src={'/logo.png'} width="140px" alt="logo"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
        </div>
      </nav>
    <div className="container">
        
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-4 ">
                <div className="form bg-dark rounded d-flex flex-column p-3 border border-success border-3 ">
                    <input 
                      placeholder="username"
                      type="text" 
                      className="form-control mt-3" 
                      name="username"
                      value={username}
                      onChange={onInputChange}
                      />
                      
                    <input 
                      placeholder="password"
                      type="text" 
                      className="form-control mt-3" 
                      name="password"
                      value={password}
                      onChange={onInputChange}
                      />
                      
                    <button 
                      className="btn btn-success mt-3"
                      onClick={onLogin}
                      >
                      Ingresar
                    </button>
                    <span className="text-warning mt-3">Si aun no tines cuenta <a className="text-warning" href="">Contacta al Admin</a></span>
                    
                </div>
            </div>
        </div>
        
    </div>
    
    
    </>
  )
}
