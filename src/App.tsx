import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import LayoutUser from './layout/LayoutUser'
// import Hompage from './page/Hompage'
import Shoppage from './page/Shoppage'
import DetailPage from './page/DetailPage'
import AdminList from './page/AdminList'
// import FormProduct from './page/FormProduct'
  import 'react-toastify/dist/ReactToastify.css';
import Hompage from './page/Hompage'
import FormProduct from './page/FormProduct'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<LayoutUser/>}>
          <Route path='' element={<Hompage/>}/>
          <Route path='shop' element={<Shoppage/>}/>
          <Route path='detail/:id' element={<DetailPage/>}/>
          <Route path='admin' element={<AdminList/>}/>
          <Route path='admin/addproduct' element={<FormProduct/>}/>
          <Route path='admin/edit/:id' element={<FormProduct/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
