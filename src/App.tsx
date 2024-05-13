import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import HomeLayout from './layouts/HomeLayout';
import SignUp from './pages/SignUp';
import Apply from './pages/Apply';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout showHero><Home /></HomeLayout>} />
        <Route path='/about' element={<HomeLayout><AboutUs /></HomeLayout>} />
        <Route path='/signup' element={<HomeLayout><SignUp /></HomeLayout>} />
        <Route path='/apply' element={<HomeLayout><Apply /></HomeLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;