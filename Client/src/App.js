import "./App.css";
import Payment from "./Arun/Cart/Payment";
import { BottomNav } from './Abhishek/BottomNav';
import { Home } from './Abhishek/Home';
import data from './Abhishek/cat.json'
import './App.css';
import { BannerComp } from './Abhishek/BannerComp';
import Signup from "./Utkarsh/Authorizations/Signup";
import Login from "./Utkarsh/Authorizations/Login";
import Products from "./Manju/Products";
function App() {
  return (
    <div>
{/* <BottomNav data={data}/>
<BannerComp/> */}
{/* <Home/> */}
{/* <Signup/> */}
{/* <Login/> */}
<Products/>
    </div>
  );
}

export default App;
