import cn from "classnames";
import { ReactComponent as BookWithCrossDeleteSymbol } from "./static/bookWithCrossDeleteSymbol.svg";

import cl from "./EmptySearch.module.scss";
import PropTypes from "prop-types";

const EmptySearch = ({
  title,
  className
}) => {

  return (
    <div className={cn(cl.empty, className)}>
      <BookWithCrossDeleteSymbol className={cl.empty__svg}/>
      <div className={cl.empty__text}>
        {title}
      </div>
    </div>
  )
}

EmptySearch.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

EmptySearch.defaultProps = {
  title: "По заданным фильтрам нет подходящей книги. Можете посмотреть товар другого жанра или измениить название",
};


export default EmptySearch;