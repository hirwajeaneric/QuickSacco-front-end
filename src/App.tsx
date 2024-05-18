import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeLayout from './layouts/HomeLayout';
import SignUp from './pages/SignUp';
import Apply from './pages/Apply';
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<HomeLayout><SignUp /></HomeLayout>} />
        <Route path='/signin' element={<HomeLayout><SignIn /></HomeLayout>} />
        <Route path='/forgotpassword' element={<HomeLayout><ForgotPassword /></HomeLayout>} />
        <Route path='/resetpassword' element={<HomeLayout><ResetPassword /></HomeLayout>} />
        <Route path='/verifyotp' element={<HomeLayout><ValidateOTP /></HomeLayout>} />
        <Route path='/apply' element={<HomeLayout><Apply /></HomeLayout>} />
        <Route path='/success' element={<HomeLayout><Success /></HomeLayout>} />
        <Route path='/notfound' element={<HomeLayout><NotFound /></HomeLayout>} />
        <Route path='/account' element={<HomeLayout><AccountHome /></HomeLayout>}>
          <Route path='' element={<Profile />} />
          <Route path='applications' element={<Applications />} />
          <Route path='application/:id' element={<ApplicationDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;