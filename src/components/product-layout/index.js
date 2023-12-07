import {memo, useEffect, useRef} from 'react';
import Head from "../head";
import BasketTool from "../basket-tool";
import { useParams } from 'react-router-dom';
import Product from '../product';
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";

function ProductLayout(props) {

  let { id } = useParams();
  const store = useStore();

  const useComponentDidMount = () => {
    const ref = useRef();
    useEffect(() => {
      ref.current = true;
    }, []);
    return ref.current;
  };
  const isComponentMounted = useComponentDidMount();

  useEffect(() => {
    store.actions.catalog.loadItem(id);
  }, [id]);


  const select = useSelector(state => ({
    currentItem: state.catalog.currentItem,
  }));

  return (
    <>
      {isComponentMounted &&
      <div>
        <Head title={select.currentItem.title}/>
        <BasketTool onOpen={props.onOpen}
                    amount={props.amount}
                    sum={props.sum}
                  />
        <Product item={select.currentItem}/>
      </div>
      }
    </>

  );
}

export default memo(ProductLayout);
