import PropTypes from "prop-types";
import Button from "components/Button";

import cl from "./ConfirmOrder.module.scss";

const ConfirmOrder = ({
                        buy,
                        infoBuyer,
                        onOrder
                      }) => {

  return (
    <div className={cl.container}>
      <div className={cl.text}>
        <p>Все шаги пройдены.</p>
        <p>Вы можете перепроверить информацию на пройденных шагах и подветрдить заказ.</p>
        <Button onClick={() => onOrder(buy, infoBuyer)}>
          Сделать заказ
        </Button>
      </div>
    </div>
  );
}

ConfirmOrder.propTypes = {
  buy: PropTypes.object,
  infoBuyer: PropTypes.object,
  onOrder: PropTypes.func,
}

ConfirmOrder.defaultProps = {
  buy: {},
  infoBuyer: {},
  onOrder:() => {},
};

export default ConfirmOrder;