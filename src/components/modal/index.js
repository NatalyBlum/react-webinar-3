import React from "react";
import './style.css';
import Item from '../item';
import PropTypes from "prop-types";

function Modal(props) {

  return (
    <div className="Modal">
      <div className="Modal-dialog">
        <div className="Modal-header">
          <h3 className="Modal-title">{props.title}</h3>
          {props.button && <div className="Modal-footer">{props.button}</div>}
        </div>
        <div className="Modal-body">
          <div className="Modal-content">
            {props.basket.map(item =>
              <div className='Modal-item' key={item.code}>
                <Item item={item}
                      title={'Удалить'}
                      callback={props.onDeleteItem}/>
              </div>
            )}
          </div>
          <div className='Modal-total'>
            <p className='Modal-descr'>Итого</p>
            <p className='Modal-amount'>{props.amount} ₽</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  button: PropTypes.node,
  title: PropTypes.node,
  basket: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onDeleteItem: PropTypes.func,
};

Modal.defaultProps = {
  onDeleteItem: () => {
  },
}

export default React.memo(Modal);
