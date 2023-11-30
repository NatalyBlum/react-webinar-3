import React, {useCallback} from 'react';
import List from "./components/list";
import Title from "./components/title";
import Header from "./components/header";
import PageLayout from "./components/page-layout";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  const basket = store.getState().basket;
  const amount = store.getState().amount;

  const callbacks = {
    onAddItem: useCallback((code) => {
      store.addItem(code);
    }, [store]),

    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),
  }

  return (
    <PageLayout>
      <Title title='Магазин'/>
      <Header title='В корзине:'
              basket={basket}
              amount={amount}
              onDeleteItem={callbacks.onDeleteItem}/>
      <List list={list}
            onAddItem={callbacks.onAddItem}/>
    </PageLayout>
  );
}

export default App;
