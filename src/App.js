import './App.css';
import { createBrowserRouter, createRoutesFromElements ,Route,RouterProvider } from 'react-router-dom';
import RouteLayout from './components/RouteLayOut';
import { Products } from './components/Products.';
import { Cart } from './components/Cart';




function App() {
 const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RouteLayout/>}>
    <Route index element={<Products/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
  </Route>
 ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
