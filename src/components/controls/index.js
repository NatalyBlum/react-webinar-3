import React, {useState, getState} from "react";
import Modal from '../modal';
import PropTypes from "prop-types";
import './style.css';

function Controls(props) {

  const [isModal, setModal] = useState(false);

  const callbacks = {
    showModal: () => {
      setModal(true);
    },
    closeModal: () => {
      setModal(false);
    }
  }

  return (
    <div className='Controls'>
      <button onClick={callbacks.showModal}>Перейти</button>
      {isModal ? <Modal
        title='Корзина'
        basket={props.basket}
        amount={props.amount}
        onDeleteItem={props.onDeleteItem}
        button={<button onClick={callbacks.closeModal}>Закрыть</button>}
      /> : null
      }
    </div>
  )
}

Controls.propTypes = {
  amount: PropTypes.number,
  basket: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  showModal: PropTypes.func,
};

Controls.defaultProps = {
  onDeleteItem: () => {
  },
}

export default React.memo(Controls);
