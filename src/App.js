import { Routes, Route } from "react-router-dom";

import Main from "landing/Main";
import Authentication from "pages/Authentication";
import ShopCounter from "pages/ShopCounter";
import Basket from "pages/Basket";
import Order from "pages/Order";
import Sale from "pages/Sale";
import PersonalAccount from "pages/PersonalAccount";
import Product from "pages/Product";
import RequireAuthorization from "contexts/RequireAuthorization";
import {CurrentUserProvider} from "contexts/currentUser";
import CurrentUserChecker from "hoc/CurrentUserChecker";

function App() {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Routes>
          <Route path='/login' element={<Authentication/>}/>
          <Route path='/register' element={<Authentication/>}/>

          <Route element={<RequireAuthorization />}>
          </Route>

          {/*Для разработки роут*/}
          <Route path="/test" element={ <div>Заглушка</div>} />

          {/*Landing и всё что относится к вспомогательной инфе, не приложение*/}
          <Route path="/" element={ <Main /> } />
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

          {/*App:*/}
          <Route path="/shop-counter" element={ <ShopCounter />} />
          <Route path="/product" element={ <Product />} />
          <Route path="/buy" element={ <Basket />} />
          <Route path="/buy/order" element={ <Order />} />
          <Route path="/sale" element={ <Sale />} />
          <Route path="/personal-account" element={ <PersonalAccount />} />
          <Route path="/personal-account/messages" element={ <div>Messages</div>} />

          {/* Authorization */}
          <Route path="auth" element={ <div>Page with authorization</div> } />
        </Routes>
      </CurrentUserChecker>
    </CurrentUserProvider>


  );
}

export default App;
