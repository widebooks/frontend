import { Routes, Route } from "react-router-dom";

import Main from "./landing/Main";

function App() {
  return (
      <Routes>
        {/*Lending*/}
        <Route path="/" element={ <Main /> } />
        {/*App*/}
        <Route path="/app" element={ <div>App</div> } />

        {/* Доп. страницы: Описание */}
          {/* Страница с описанием что делает сервис */}
        <Route path="/info" element={ <div>Info</div> } />
          {/* для партнёров */}
        <Route path="/info/partner" element={ <div>Для партнёров</div> } />
          {/* устройство на работу */}
        <Route path="/info/get-job" element={ <div>Устройство на работу</div> } />
          {/*часто задаваемые вопросы*/}
        <Route path="/info/faq" element={ <div>Faq</div> } />
          {/*тех. поддержка*/}
        <Route path="/info/support" element={ <div>Тех. поддержка</div> } />

        {/* Authorization */}
        <Route path="auth" element={ <div>Page with authorization</div> } />
      </Routes>
  );
}

export default App;
