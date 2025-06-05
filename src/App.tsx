import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/public_pages/Home';
import HomeLayout from './layouts/HomeLayout';
import SignUp from './pages/public_pages/SignUp';
import Apply from './pages/applicant/Apply';
import SignIn from './pages/public_pages/SignIn';
import ResetPassword from './pages/public_pages/ResetPassword';
import ForgotPassword from './pages/public_pages/ForgotPassword';
import ValidateOTP from './pages/public_pages/ValidateOTP';
import AccountHome from './pages/applicant/AccountHome';
import Profile from './pages/applicant/Profile';
import Applications from './pages/applicant/Applications';
import ApplicationDetails from './pages/applicant/ApplicationDetails';
import Success from './pages/public_pages/Success';
import NotFound from './pages/public_pages/NotFound';
import { Toaster } from 'sonner';
import Cookies from 'js-cookie';
import UpdateApplication from './pages/applicant/UpdateApplication';
import UserContactForm from './components/forms/applyLoan/UserContact';
import PersonalInformationForm from './components/forms/applyLoan/PersonalInformation';
import LoanDetailsForm from './components/forms/applyLoan/LoanDetails';
import WorkDetailsForm from './components/forms/applyLoan/Work';

// Admin pages 
import Auth from './pages/admin/Auth';
import Admin from './pages/admin/Admin';
import AdminDashboard from './pages/admin/AdminDashboard';
import Managers from './pages/admin/dashboard/Managers';
import ManagerDetails from './pages/admin/dashboard/ManagerDetails';
import Applicants from './pages/admin/dashboard/Applicants';
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
import ManagerForgotPassword from './pages/manager/auth/ForgotPassword';
import ManagerResetPassword from './pages/manager/auth/ResetPassword';
import ManagerDashboardHome from './pages/manager/dashboard/Home';
import ManagerProfile from './pages/manager/dashboard/Profile';
import ManagerDashboard from './pages/manager/ManagerDashboard';
import Responses from './pages/manager/dashboard/Responses';
import BeforeApplicationBreefing from './pages/applicant/BeforeApplicationBreefing';
import Submitting from './components/forms/applyLoan/Submitting';

const App = () => {

  return (
    <BrowserRouter>
      <Toaster visibleToasts={1} position='top-right' richColors />

      {/**
       * 
       *  Applicant  
       * 
       * */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<HomeLayout><SignUp /></HomeLayout>} />
        <Route path='/signin' element={<HomeLayout><SignIn /></HomeLayout>} />
        <Route path='/forgotpassword' element={<HomeLayout><ForgotPassword /></HomeLayout>} />
        <Route path='/resetpassword' element={<HomeLayout><ResetPassword /></HomeLayout>} />
        <Route path='/verifyotp' element={<HomeLayout><ValidateOTP /></HomeLayout>} />
        <Route path='/apply' element={Cookies.get('applicant-access-token') ? <HomeLayout><Apply /></HomeLayout> : <Navigate replace to='/signin' />}>
          <Route path="overview" element={<BeforeApplicationBreefing />} />
          <Route path="step-1" element={<UserContactForm />} />
          <Route path="step-2" element={<PersonalInformationForm />} />
          <Route path="step-3" element={<WorkDetailsForm />} />
          <Route path="step-4" element={<LoanDetailsForm />} />
          <Route path="submitting" element={<Submitting />} />
        </Route>
        <Route path='/success' element={<HomeLayout><Success /></HomeLayout>} />
        <Route path='/account' element={Cookies.get('applicant-access-token') ? <HomeLayout><AccountHome /></HomeLayout> : <Navigate replace to='/' />}>
          <Route path='' element={<Profile />} />
          <Route path='applications' element={<Applications />} />
          <Route path='application/:id' element={<ApplicationDetails />} />
          <Route path='application/update/:id' element={<UpdateApplication />} />
        </Route>

        {/** 
         * 
         * Manager routes  
         * 
         * */}
        <Route path='/manager' element={<Manager />}>
          <Route path='auth' element={<ManagerAuth />}>
            <Route path='' element={<ManagerSignIn />} />
            <Route path='signin' element={<ManagerSignIn />} />
            <Route path='resetpassword' element={<ManagerResetPassword />} />
            <Route path='forgotpassword' element={<ManagerForgotPassword />} />
          </Route>
          <Route path='' element={Cookies.get('manager-access-token') ? <ManagerDashboard /> : <Navigate replace to="/manager/auth" />}>
            <Route path='' element={<ManagerDashboardHome />} />
            <Route path='home' element={<ManagerDashboardHome />} />
            <Route path='applicants' element={<Applicants />} />
            <Route path='reports' element={<Responses />} />
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
          <Route path='' element={Cookies.get("admin-access-token") ? <AdminDashboard /> : <Navigate replace to={"/admin/auth"} />}>
            <Route path='' element={<AdminDashboardHome />} />
            <Route path='home' element={<AdminDashboardHome />} />
            <Route path='applicants' element={<Applicants />} />
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