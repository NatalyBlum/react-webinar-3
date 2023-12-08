import {memo} from 'react';
import Head from "../head";
import BasketTool from "../basket-tool";
import List from "../list";
import Pagination from '../pagination';
import './style.css';

function StoreLayout(props) {

  return (
    <div className='Store-wrap'>
      <Head title='Магазин'/>
      <BasketTool onOpen={props.onOpen}
                  amount={props.amount}
                  sum={props.sum}/>
      <List list={props.currentProduct}
            renderItem={props.renderItem}
            />
      <Pagination productPerPage={props.productPerPage}
                  paginate={props.paginate}
                  currentPage={props.currentPage}
                  countProduct={props.countProduct}
                  />
    </div>
  );
}

export default memo(StoreLayout);
