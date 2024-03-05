import Home from './pages/Home';
import Register from './pages/Register';
import Product from './pages/Product';
import Content from './pages/Content';
import Styleimg from './pages/Styleimg';
import Signup from './pages/Signup';
import Signin from './pages/Signin';


import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="product" element={<Product/>}/>
            <Route path="content" element={<Content/>}/>
            <Route path="styleimg" element={<Styleimg/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="signin" element={<Signin/>}/>


          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
