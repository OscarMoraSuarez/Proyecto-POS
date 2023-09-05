import { AuthProvider } from './auth/context/AuthProvider';
import { AppRouter } from './router/AppRouter';

export const PosApp = () => {
  return (
    <>
        
        <AuthProvider>
          <AppRouter/>
        </AuthProvider>
    </>
    
  )
}
