import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import FetchItems from '../components/FetchItems'
import { useSelector } from 'react-redux'
import Fetch from '../components/Fetch'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetchStatus.currentFetchStatus ? <Fetch /> : <Outlet />}
      <Footer></Footer>
    </>
  )
}

export default App
