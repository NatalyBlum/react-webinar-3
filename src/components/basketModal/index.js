import React from "react";
import './style.css';
import List from '../list';
import {formatPrice} from '../../utils.js';
import PropTypes from "prop-types";

function BasketModal(props) {

  return (
    <div className="BasketModal-body">
      <div className="BasketModal-content">
        <List title={'Удалить'}
              list={props.basket}
              func={props.onDeleteItem} />
      </div>
      <div className='BasketModal-total'>
        <p className='BasketModal-descr'>Итого</p>
        <p className='BasketModal-amount'>{formatPrice(props.amount)} ₽</p>
      </div>
    </div>
  );
}

BasketModal.propTypes = {
  amount: PropTypes.number,
  basket: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onDeleteItem: PropTypes.func,
};

BasketModal.defaultProps = {
  onDeleteItem: () => {
  },
}

export default React.memo(BasketModal);
