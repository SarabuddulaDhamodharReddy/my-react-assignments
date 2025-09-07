import './App.css'
import { createBrowserRouter ,RouterProvider } from 'react-router'
import LayOut from './Components/Assignment-35/LayOut';
import CreateProducts from './Components/Assignment-35/CreateProducts';
import Home from './Components/Assignment-35/Home';
import Products from './Components/Assignment-35/Products';
function App() {
  let routerObj=createBrowserRouter([
    {
      path:"/",
      element:<LayOut/>,
      children:[
        {
          path:"",
          element:<Home/>
        },{
          path:"createProduct",
          element:<CreateProducts/>
        },{
          path:"product",
          element:<Products/>
        }
      ]
    }
  ]);
  return (
    <div className='container-fluid'>
        <RouterProvider router={routerObj}/>
    </div>
  )
}

export default App


// json-server --watch users.json to start the json server