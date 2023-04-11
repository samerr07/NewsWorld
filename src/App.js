import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import NewsPage from "./Components/NewsPage";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/business" element={<NewsPage key="business" category="business"/>} />
        <Route exact path="/general" element={<NewsPage key="general" category="general"/>}/>
        <Route exact path="/health" element={<NewsPage key="health" category="health"/>}/>
        <Route exact path="/science" element={<NewsPage key="science" category="science"/>}/>
        <Route exact path="/sports" element={<NewsPage key="sports" category="sports"/>}/>
        <Route exact path="/technology" element={<NewsPage key="technology" category="technology"/>}/>
        <Route exact path="/entertainment" element={<NewsPage key="entertainment" category="entertainment"/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
