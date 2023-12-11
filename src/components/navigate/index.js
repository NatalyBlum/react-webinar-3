import {memo} from "react";
import {cn as bem} from '@bem-react/classname';
import { NavLink } from 'react-router-dom';
import './style.css';

function Navigate() {

  const cn = bem('Navigate');

  return (
    <div className={cn('main')}>
      <NavLink to={'/'} className={cn('btn')}>Главная</NavLink>
    </div>
  );
}

export default memo(Navigate);
