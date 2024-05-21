import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center min-h-screen'>
        <Outlet />
    </div>
  )
}

export default Admin