import React, {useState} from "react";
import PropTypes from "prop-types";
import {NavLink, useNavigate} from "react-router-dom";
import {ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "components/Button";
import ButtonLink from "components/ButtonLink";
import reduceMoney from "helpers/reduceMoney"

import {ReactComponent as DeleteSVG} from "./static/delete.svg";
import cl from "./ShoppingList.module.scss";


const ShoppingList = ({
  listBuy,
  pathToImage,
  onHandleDelete,
  onClickMinus,
  onClickPlus,
}) => {
  const navigate = useNavigate();

  const [selectedIdForDelete, setSelectedIdForDelete] = useState(null);

  return (
    <div>
      {listBuy.map((buy) => (
        <article key={buy.id} className={cl.product}>
          <div
            className={cl.header}
            style={{background: `#fff url(${pathToImage}/${buy.images[0]}) center / contain no-repeat`}}
          >
            <NavLink to={`/buy/${buy.id}`}>
              <h3 className={cl.header__title}>Перейти к товару</h3>
            </NavLink>
          </div>
          <div className={cl.content}>
            <div>
              <ButtonLink
                className={cl.content__title}
                onClick={() => navigate(`/product/${buy.id}`)}
              >
                {buy.title}
              </ButtonLink>
              <h2 className={cl.content__brand}>{buy.brand}</h2>
              <p>Описание: {buy.description}</p>

              <div className={cl.content__top}>
                <div>

                  <p>В наличии: {buy.total}</p>
                  <div className={cl.content__price}>
                    Цена: {reduceMoney(buy.price)} ₽
                  </div>
                </div>
                <div className={cl.content__deleteWrapper}>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteSVG />}
                    onClick={() => {setSelectedIdForDelete(buy.id)}}
                  >
                    Удалить из корзины
                  </Button>
                  <Dialog
                    open={!!selectedIdForDelete}
                    onClose={() => setSelectedIdForDelete(null)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      Вы действительно хотите удалить товар из корзины?
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Удаленный товар будет невозможно восстановить!
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => setSelectedIdForDelete(null)}>НЕТ</Button>
                      <Button
                        onClick={() => {
                          onHandleDelete(selectedIdForDelete);
                          setSelectedIdForDelete(null)
                        }}
                        autoFocus
                      >
                        ДА
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
            </div>

            <div className={cl.content__bottom}>
              <div>
                <ButtonGroup>
                  <Button
                    aria-label="reduce"
                    disabled={buy.count <= 1}
                    onClick={() => onClickMinus(buy)}
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Box  sx={{ p: 2, border: '1px solid #1976D2' , cursor: 'default', width: 70, textAlign: 'center'}}>
                    {buy.count}
                  </Box>
                  <Button
                    aria-label="increase"
                    disabled={buy.count >= buy.total}
                    onClick={() => onClickPlus(buy)}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </div>
              <div className={cl.content__priceWrapper}>
                <div className={cl.content__fullPrice}>
                  {reduceMoney(buy.sumPrice)} ₽
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

ShoppingList.propTypes = {
  listBuy: PropTypes.array,
  pathToImage: PropTypes.string,
  onClickMinus: PropTypes.func,
  onClickPlus: PropTypes.func,
  onHandleDelete: PropTypes.func,
};

ShoppingList.defaultProps = {
  listBuy: [],
  pathToImage: "",
  onClickMinus: () => {},
  onClickPlus: () => {},
  onHandleDelete: () => {},
};


export default ShoppingList;