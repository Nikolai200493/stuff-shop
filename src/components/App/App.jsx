import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import AppRoutes from '../Routes/Routes'
import Sidebar from '../Sidebar/Sidebar'
import { getCategories } from '../../features/categories/categoriesSlice'
import Home from '../Home/Home'
import { getProducts } from '../../features/products/productsSlice'
import UserForm from '../User/UserForm'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      <UserForm />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App
