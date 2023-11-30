/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Подсчет стоимости товара в корзине
   */
  costCalculation() {
    this.setState({
      ...this.state,
      amount: this.state.basket.reduce((acc, item) => {
        acc += item.quantity * item.price;
        return acc;
      }, 0)
    })
  }

  /**
   * Добавление продукта в корзину
   */
  addItem(code) {
    this.setState({
      ...this.state,
      basket: [
        ...this.state.list.filter(item => item.code === code || item.quantity !== 0)
                          .map(item => {
                            if(item.code === code) {
                              item.quantity += 1;
                              return {...item, quantity: item.quantity};
                            } else {
                              return item;
                            }
                          })
      ],
    })
    this.costCalculation();
  };

  /**
   * Удаление продукта из корзины
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      basket: this.state.basket.filter(item => item.code !== code),
      list: this.state.list.map(item => {
        if (item.code === code) {
          item.quantity = 0;
          return {...item, quantity: item.quantity};
        } else {
          return item;
        }
      })
    })
    this.costCalculation();
  };
}

export default Store;
