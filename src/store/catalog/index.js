import {codeGenerator} from "../../utils";
import StoreModule from "../module";

class Catalog extends StoreModule {

  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0)
  }

  initState() {
    return {
      list: [],
      currentItem: {},
      countProduct: 0,
    }
  }

  async load(skip, productPerPage) {
    const response = await fetch(`http://example.front.ylab.io/api/v1/articles?limit=${productPerPage}&skip=${skip}&fields=items(_id, title, price, edition, description),count`, {
      method: 'GET',
    });
    const json = await response.json();
    this.setState({
      ...this.getState(),
      list: json.result.items,
      countProduct: json.result.count
    }, 'Загружены товары из АПИ');
  }

  async loadItem(id) {
    const response = await fetch(`http://example.front.ylab.io/api/v1/articles/${id}`, {
      method: 'GET',
    });
    const json = await response.json();
    this.setState({
      ...this.getState(),
      currentItem: json.result
    }, 'Загружены товары из АПИ');
  }
}

export default Catalog;
