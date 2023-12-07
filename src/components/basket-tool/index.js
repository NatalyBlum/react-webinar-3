import {memo} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import {numberFormat, plural} from "../../utils";
import { NavLink } from 'react-router-dom';
import './style.css';

function BasketTool({sum, amount, onOpen}) {
  const cn = bem('BasketTool');
  return (
    <div className={cn('wrapper')}>
      <div className={cn('main')}>
        <NavLink to={'/'} className={cn('btn')}>Главная</NavLink>
      </div>
      <div className={cn('label')}>
        <span className={cn()}>В корзине:</span>
        <span className={cn('total')}>
          {amount
            ? `${amount} ${plural(amount, {
              one: 'товар',
              few: 'товара',
              many: 'товаров'
            })} / ${numberFormat(sum)} ₽`
            : `пусто`
          }
        </span>
        <button onClick={onOpen}>Перейти</button>
      </div>
    </div>
  );
}

BasketTool.propTypes = {
  onOpen: PropTypes.func.isRequired,
  sum: PropTypes.number,
  amount: PropTypes.number
};

BasketTool.defaultProps = {
  onOpen: () => {},
  sum: 0,
  amount: 0
}

export default memo(BasketTool);