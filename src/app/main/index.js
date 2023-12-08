import {memo, useCallback, useEffect, useState} from 'react';
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
    store.actions.catalog.load(skip, productPerPage);
  }, [currentPage]);

  const select = useSelector(state => ({
    list: state.catalog.list,
    currentItem: state.catalog.currentItem,
    countProduct: state.catalog.countProduct,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(10);
  const lastIndex = currentPage * productPerPage;
  const firstIndex = lastIndex - productPerPage;
  const skip = currentPage * productPerPage;
  const currentProduct = select.list.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                                        sum={select.sum}
                                        currentItem={select.currentItem}
                                        />}
                                      />
        <Route  path={'/*'}
                element={<StoreLayout list={select.list}
                                      renderItem={renders.item}
                                      onOpen={callbacks.openModalBasket}
                                      amount={select.amount}
                                      sum={select.sum}
                                      currentPage={currentPage}
                                      paginate={paginate}
                                      productPerPage={productPerPage}
                                      currentProduct={currentProduct}
                                      countProduct={select.countProduct}
                                      />}
                                    />
      </Routes>
    </PageLayout>
  );
}

export default memo(Main);
