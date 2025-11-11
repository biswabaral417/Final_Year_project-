import './App.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { provideRoutes } from './router/provideRoutes'

function App() {

    const router=createBrowserRouter(provideRoutes())
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
