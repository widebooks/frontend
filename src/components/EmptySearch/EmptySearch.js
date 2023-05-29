import cn from "classnames";
import { ReactComponent as BookWithCrossDeleteSymbol } from "./static/bookWithCrossDeleteSymbol.svg";

import cl from "./EmptySearch.module.scss";

const EmptySearch = ({
  className
}) => {

  return (
    <div className={cn(cl.empty, className)}>
      <BookWithCrossDeleteSymbol className={cl.empty__svg}/>
      <div className={cl.empty__text}>
        По заданным фильтрам нет подходящей книги. Можете посмотреть товар другого жанра или измениить название
      </div>
    </div>
  )
}

export default EmptySearch;