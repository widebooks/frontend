import { Routes, Route } from "react-router-dom";

import Main from "./landing/Main";

function App() {
  return (
      <Routes>
        {/*Lending*/}
        <Route path="/" element={ <Main /> } />
        {/*Main App*/}
        <Route path="auth" element={ <div>Page with authorization</div> } />
      </Routes>
  );
}

export default App;
