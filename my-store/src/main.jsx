import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import Bag from './routes/Bag.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import { Provider } from 'react-redux'
import Mystore from './store/index.js'
const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Mystore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
