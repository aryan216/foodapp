import Bc from "./components/Bc";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Bc/>
        <Pages/>  
      </BrowserRouter>
    </div>
  );
}

export default App;
