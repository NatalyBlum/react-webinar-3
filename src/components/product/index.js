import {memo, useCallback} from "react";
import {cn as bem} from '@bem-react/classname';
import './style.css';
import useStore from "../../store/use-store";
import PropTypes from "prop-types";
import {numberFormat} from "../../utils";

function Product(props) {

  const cn = bem('Product');
  const store = useStore();
  let id = props.item._id;

  const callbacks = {
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
  }

  return (
    <div className={cn('wrapper')}>
      <div className={cn('descr')}>
      {props.item.description}
      </div>
      <div className={cn('descr')}>
        Страна производитель:
        <span className={cn('data')}>{props.item.madeIn._type}</span>
      </div>
      <div className={cn('descr')}>
        Категория:
        <span className={cn('data')}>{props.item.category._type}</span>
      </div>
      <div className={cn('descr')}>
        Год выпуска:
        <span className={cn('data')}>{props.item.edition}</span>
      </div>
      <div className={cn('weight')}>
        Цена:
        <span className={cn('data')}>{numberFormat(props.item.price)} ₽</span>
      </div>
      <button onClick={() => callbacks.addToBasket(id)}>Добавить</button>
    </div>
  );
}

Product.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
};

export default memo(Product);
