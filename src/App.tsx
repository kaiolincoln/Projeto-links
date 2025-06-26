import { createBrowserRouter } from 'react-router-dom'

import { Admin } from './pages/admin'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Networks } from './pages/networks'
import { ErrorPage } from './pages/error'

import { Private } from './routes/Private'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/admin',
    element:<Private><Admin/></Private>
  },
  {
    path: '/login',
    element:<Login/>
  },
  {
    path: '/networks',
    element:<Private><Networks/></Private>
  },
  {
    path: '*',
    element:<ErrorPage/>
  },
])

export { router };

