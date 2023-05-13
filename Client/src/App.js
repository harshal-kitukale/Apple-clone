import { Footer } from "./Abhishek/Footer";
import { Navbar } from "./Abhishek/Navbar";
import "./App.css";

import AllRoutes from "./Routes/AllRoutes";
function App() {
  return (
    <div>
      <Navbar/>
      <br/>
      <br/>
      {/* <br/> */}
      <AllRoutes />
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
