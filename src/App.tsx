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
import UpdateApplication from './pages/teacher/UpdateApplication';

// Admin pages 
import Auth from './pages/admin/Auth';
import Admin from './pages/admin/Admin';
import AdminDashboard from './pages/admin/AdminDashboard';
import Managers from './pages/admin/dashboard/Managers';
import ManagerDetails from './pages/admin/dashboard/ManagerDetails';
import Teachers from './pages/admin/dashboard/Teachers';
import AddManager from './pages/admin/dashboard/AddManager';
import AdminSignIn from './pages/admin/auth/SignIn';
import AdminSignUp from './pages/admin/auth/SignUp';
import AdminForgotPassword from './pages/admin/auth/ForgotPassword';
import AdminResetPassword from './pages/admin/auth/ResetPassword';
import AdminVerifyOTP from './pages/admin/auth/ValidateOTP';
import AdminDashboardHome from './pages/admin/dashboard/Home';
import AdminProfile from './pages/admin/dashboard/Profile';

// Manager pages
import Manager from './pages/manager/Manager';
import ManagerAuth from './pages/manager/Auth';
import Loans from './pages/manager/dashboard/Loans';
import LoanDetails from './pages/manager/dashboard/LoanDetails';
import ManagerSignIn from './pages/manager/auth/SignIn';
import ManagerSignUp from './pages/manager/auth/SignUp';
import ManagerForgotPassword from './pages/manager/auth/ForgotPassword';
import ManagerResetPassword from './pages/manager/auth/ResetPassword';
import ManagerVerifyOTP from './pages/manager/auth/ValidateOTP';
import ManagerDashboardHome from './pages/manager/dashboard/Home';
import ManagerProfile from './pages/manager/dashboard/Profile';
import ManagerDashboard from './pages/manager/ManagerDashboard';

const App = () => {

  return (
    <BrowserRouter>
      <Toaster visibleToasts={1} position='top-right' richColors />

      {/**
       * 
       *  Teacher  
       * 
       * */}
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
          <Route path='application/update/:id' element={<UpdateApplication />} />
        </Route>

        {/** 
         * 
         * Admin routes  
         * 
         * */}
        <Route path='/manager' element={<Manager />}>
          <Route path='auth' element={<ManagerAuth />}>
            <Route path='' element={<ManagerSignIn />} />
            <Route path='signin' element={<ManagerSignIn />} />
            <Route path='signup' element={<ManagerSignUp />} />
            <Route path='verifyotp' element={<ManagerVerifyOTP />} />
            <Route path='resetpassword' element={<ManagerResetPassword />} />
            <Route path='forgotpassword' element={<ManagerForgotPassword />} />
          </Route>
          <Route path='' element={<ManagerDashboard />}>
            <Route path='' element={<ManagerDashboardHome />} />
            <Route path='home' element={<ManagerDashboardHome />} />
            <Route path='teachers' element={<Teachers />} />
            <Route path='loans' element={<Loans />} />
            <Route path='loan/:id' element={<LoanDetails />} />
            <Route path='profile' element={<ManagerProfile />} />
          </Route>
        </Route>

        {/**
         * 
         * Admin routes  
         * 
         * */}
        <Route path='/admin' element={<Admin />}>
          <Route path='auth' element={<Auth />}>
            <Route path='' element={<AdminSignIn />} />
            <Route path='signin' element={<AdminSignIn />} />
            <Route path='signup' element={<AdminSignUp />} />
            <Route path='verifyotp' element={<AdminVerifyOTP />} />
            <Route path='resetpassword' element={<AdminResetPassword />} />
            <Route path='forgotpassword' element={<AdminForgotPassword />} />
          </Route>
          <Route path='' element={<AdminDashboard />}>
            <Route path='' element={<AdminDashboardHome />} />
            <Route path='home' element={<AdminDashboardHome />} />
            <Route path='teachers' element={<Teachers />} />
            <Route path='managers' element={<Managers />} />
            <Route path='managers/add' element={<AddManager />} />
            <Route path='managers/:managerId' element={<ManagerDetails />} />
            <Route path='profile' element={<AdminProfile />} />
          </Route>
        </Route>
        <Route path='*' element={<HomeLayout><NotFound /></HomeLayout>} />
      </Routes>
    </BrowserRouter >
  )
}

export default App;