import {useState} from "react";
import Main from "./Main";

const MainContainerMock = () => {
  const [stringSearch, setStringSearch] = useState('');

  const handleSearch = (v) => {
    setStringSearch(v);
  }

  return (
    <Main
      stringSearch={stringSearch}

      onSearch={handleSearch}
    />
  )
}

export default MainContainerMock;