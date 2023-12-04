import React, {useCallback} from 'react';
import List from "./components/list";
import Title from "./components/title";
import Header from "./components/header";
import Controls from "./components/controls";
import Modal from "./components/modal";
import PageLayout from "./components/page-layout";
import './style.css';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  const basket = store.getState().basket;
  const amount = store.getState().amount;
  const isModal = store.getState().isModal;

  const callbacks = {
    onAddItem: useCallback((code) => {
      store.addItem(code);
    }, [store]),

    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onCloseModal: useCallback((code) => {
      store.closeModal(code);
    }, [store]),

    onShowModal: useCallback((code) => {
      store.showModal(code);
    }, [store]),
  }

  return (
    <PageLayout>
      <Title title='Магазин'/>
      <div className='wrapper'>
        <Header title='В корзине:'
                basket={basket}
                amount={amount}
                onDeleteItem={callbacks.onDeleteItem}/>
        <Controls basket={basket}
                  amount={amount}
                  onDeleteItem={callbacks.onDeleteItem}
                  onShowModal={callbacks.onShowModal}/>
      </div>
      {isModal ? <Modal
        title='Корзина'
        basket={basket}
        amount={amount}
        onDeleteItem={callbacks.onDeleteItem}
        button={<button className='Modal-button' onClick={callbacks.onCloseModal}>Закрыть</button>}
      /> : null
      }
      <List title={'Добавить'}
            list={list}
            func={callbacks.onAddItem}/>
    </PageLayout>
  );
}

export default App;
