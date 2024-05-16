import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeLayout from './layouts/HomeLayout';
import SignUp from './pages/SignUp';
import Apply from './pages/Apply';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<HomeLayout><SignUp /></HomeLayout>} />
        <Route path='/signin' element={<HomeLayout><SignIn /></HomeLayout>} />
        <Route path='/apply' element={<HomeLayout><Apply /></HomeLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;