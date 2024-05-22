import { Outlet } from 'react-router-dom'

const Manager = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center min-h-screen'>
        <Outlet />
    </div>
  )
}

export default Manager