// import TaskInfo from "./Components/Assignment-34/TaskInfo"
// export default function App() {
//   return (
//     <div>
//       <TaskInfo/>
//     </div>
//   )
// }


import './App.css'
import { createBrowserRouter ,RouterProvider } from 'react-router'
import LayOut from './Components/Assignment-36/LayOut';
import CreateProducts from './Components/Assignment-36/CreateProducts';
import Home from './Components/Assignment-36/Home';
import Products from './Components/Assignment-36/Products';
export default function App() {
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




// json-server --watch users.json to start the json server
//rfce