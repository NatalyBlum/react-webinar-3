import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List(props) {
  return (
    <div className='List'>{
      props.list.map(item =>
        <div key={item.code} className='List-item'>
          <Item item={item} title={props.title} callback={props.func}/>
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  title: PropTypes.node,
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  func: PropTypes.func,
};

List.defaultProps = {
  func: () => {
  },
}

export default React.memo(List);
