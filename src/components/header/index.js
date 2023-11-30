import React from "react";
import PropTypes from "prop-types";
import Controls from "../controls";
import {plural} from '../../utils.js'
import './style.css';

function Header(props) {
  return (
    <div className='Header-wrapper'>
      <div className='Header-title'>{props.title}</div>
      <div className='Header-data'>
        {props.basket.length > 0 ? `${props.basket.length} ${plural(props.basket.length, {
            one: 'товар',
            few: 'товара',
            many: 'товаров',
          })} / ${props.amount} ₽`
        : 'пусто'}
      </div>
      <Controls basket={props.basket}
                amount={props.amount}
                onDeleteItem={props.onDeleteItem}/>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.node,
  amount: PropTypes.number,
  basket: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onDeleteItem: PropTypes.func,
};

Header.defaultProps = {
  onDeleteItem: () => {
  },
}

export default React.memo(Header);
