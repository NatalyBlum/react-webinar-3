import { createElement } from "react";

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
   * Добавление новой записи
   */
  addItem() {
    const code = (Math.random() * this.state.list.length * 10).toFixed(2);
    this.setState({
      ...this.state,
      list: [...this.state.list, {code: Number(code), title: 'Новая запись', click: 0}]
    })
  };

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter(item => item.code !== code)
    })
  };

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(e, code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        const wrap = e.target.closest('.Wrap');
        if (item.code === code) {
          item.selected = !item.selected;
         if (item.selected) {
          item.click += 1;
          this.addNode(wrap, item);
         }
        }
        if (item.code !== code) {
          item.selected = false;
        }
        return item;
      })
    })
  }

  addNode(wrap, item) {
    const child = wrap.querySelector('.Click');
      if (child) {
        child.textContent = `| Выделяли ${item.click} раз`;
      } else {
        const child = document.createElement('div');
        child.textContent = `| Выделяли ${item.click} раз`;
        child.classList.add('Click');
        wrap.append(child);
      }
  }
}

export default Store;
