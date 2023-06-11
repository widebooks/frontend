import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import flatMap from "lodash/flatMap";
import ShoppingList from "./ShoppingList";
import {PATH_BOOKS_MODEL_FRONT} from "constants";

import mockShoppingList from "./mock/mockShoppingList";

export default {
  title: "Pages/Basket/ShoppingList",
  component: ShoppingList,
  argTypes: {},
  decorators: [
    Story => (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={(
           <div style={{backgroundColor: "#bbdefb", padding: '60px', minHeight: '100vh'}}>
             <Story />
           </div>
          )} />
        </Routes>
      </BrowserRouter>
    ),
  ],
};

const Template = args => {
  const [list, setList] = useState(mockShoppingList)


  return (
    <ShoppingList
      {...args}
      listBuy={list}
      onHandleDelete={(id) => setList(v => v.filter(v => v.id !== id))}
      onClickMinus={(buy) => setList(list => flatMap(list, (v => {
        if (v.id === buy.id) {
          return {...v, count: --v.count}
        }
        return v;
      })))}
      onClickPlus={(buy) => setList(list => flatMap(list, (v => {
        if (v.id === buy.id) {
          return {...v, count: ++v.count}
        }
        return v;
      })))}
    />
  );
};

export const Default = {
  render: args => <Template {...args}/>,
  args: {
    pathToImage: PATH_BOOKS_MODEL_FRONT
  }
};
