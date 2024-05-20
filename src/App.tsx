import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeLayout from './layouts/HomeLayout';
import SignUp from './pages/SignUp';
import Apply from './pages/teacher/Apply';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import ValidateOTP from './pages/ValidateOTP';
import AccountHome from './pages/teacher/AccountHome';
import Profile from './pages/teacher/Profile';
import Applications from './pages/teacher/Applications';
import ApplicationDetails from './pages/teacher/ApplicationDetails';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import { Toaster } from 'sonner';
import AuthCallbackPage from './pages/AuthCallbackPage';
import Cookies from 'js-cookie';

const App = () => {

  return (
    <BrowserRouter>
      <Toaster visibleToasts={1} position='top-right' richColors />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth-callback' element={<AuthCallbackPage />} />
        <Route path='/signup' element={<HomeLayout><SignUp /></HomeLayout>} />
        <Route path='/signin' element={<HomeLayout><SignIn /></HomeLayout>} />
        <Route path='/forgotpassword' element={<HomeLayout><ForgotPassword /></HomeLayout>} />
        <Route path='/resetpassword' element={<HomeLayout><ResetPassword /></HomeLayout>} />
        <Route path='/verifyotp' element={<HomeLayout><ValidateOTP /></HomeLayout>} />
        <Route 
          path='/apply' 
          element={
            Cookies.get('access-token')
              ? <HomeLayout><Apply /></HomeLayout>
              : <Navigate replace to='/' />
          } 
        />
        <Route path='/success' element={<HomeLayout><Success /></HomeLayout>} />
        <Route
          path='/account'
          element={
            Cookies.get('access-token')
              ? <HomeLayout><AccountHome /></HomeLayout>
              : <Navigate replace to='/' />
          }
        >
          <Route path='' element={<Profile />} />
          <Route path='applications' element={<Applications />} />
          <Route path='application/:id' element={<ApplicationDetails />} />
        </Route>
        <Route path='*' element={<HomeLayout><NotFound /></HomeLayout>} />
      </Routes>
    </BrowserRouter >
  )
}

export default App;