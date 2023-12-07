import {memo, useCallback, useEffect} from 'react';
import React from 'react'
import Item from "../../components/item";
import PageLayout from "../../components/page-layout";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import { Route, Routes } from 'react-router-dom';
import ProductLayout from '../../components/product-layout';
import StoreLayout from '../../components/store-layout';

function Main() {

  const store = useStore();

  useEffect(() => {
    store.actions.catalog.load();
  }, []);

  const select = useSelector(state => ({
    list: state.catalog.list,
    amount: state.basket.amount,
    sum: state.basket.sum
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  }

  const renders = {
    item: useCallback((item) => {
      return <Item item={item} onAdd={callbacks.addToBasket}/>
    }, [callbacks.addToBasket]),
  };

  return (
    <PageLayout>
      <Routes>
        <Route  path={`/item/:id`}
                element={<ProductLayout list={select.list}
                                        onOpen={callbacks.openModalBasket}
                                        amount={select.amount}
                                        sum={select.sum}/>}
                                        />
        <Route  path={'/*'}
                element={<StoreLayout list={select.list}
                                      renderItem={renders.item}
                                      onOpen={callbacks.openModalBasket}
                                      amount={select.amount}
                                      sum={select.sum}
                                      />}
                                    />
      </Routes>
    </PageLayout>
  );
}

export default memo(Main);
