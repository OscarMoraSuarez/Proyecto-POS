import { Routes,Route } from "react-router-dom";
import { PosRoutes } from "../POS/routes/PosRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { Login} from "../auth/pages/Login";

export const AppRouter = () => {
  return (
    
    <>
        <Routes>
        <Route path='login' element={<PublicRoutes>
                                      <Login/>
                                    </PublicRoutes>}/>

        <Route path='/*' element={<PrivateRoutes> 
                                      <PosRoutes/>
                                  </PrivateRoutes>} />                                        

        </Routes>

    </>
  )
}
