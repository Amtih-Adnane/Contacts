import "./App.css";
import New from "./Component/OneContact";
import Contacts from "./Component/Contacts";
import Contact from "./Component/Contact";
import { Route, Routes, Link } from "react-router-dom";
import ContactApp from "./Component/ContactApp";
function App() {
  return (
    <div className="App">
      <Contact>
        <Routes>
          <Route path="/" element={<ContactApp />}></Route>
          <Route path="/Add" element={<Contacts />}></Route>
          <Route path="*" element={<ContactApp />}></Route>
        </Routes>
      </Contact>
      {/* <Contact>
        <Contacts />
      </Contact> */}
    </div>
  );
}
export default App;
