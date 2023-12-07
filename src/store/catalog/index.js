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
      currentItem: {}
    }
  }

  async load() {
    const response = await fetch('http://example.front.ylab.io/api/v1/articles', {
      method: 'GET',
    });
    const json = await response.json();
    console.log(json);
    this.setState({
      ...this.getState(),
      list: json.result.items
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
