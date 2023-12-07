import {memo} from 'react';
import Head from "../head";
import BasketTool from "../basket-tool";
import List from "../list";
import useStore from "../../store/use-store";
import './style.css'

function StoreLayout(props) {
  
  return (
    <div className='Store-wrap'>
      <Head title='Магазин'/>
      <BasketTool onOpen={props.onOpen}
                  amount={props.amount}
                  sum={props.sum}/>
      <List list={props.list}
            renderItem={props.renderItem}
            />
    </div>
  );
}

export default memo(StoreLayout);
