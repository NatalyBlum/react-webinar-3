import {memo} from 'react';
import './style.css'

function Pagination(props) {

  const pageNumbers = [];
  const currentPage = props.currentPage;

  for (let i = 1; i <= Math.ceil(props.countProduct/props.productPerPage); i ++ ) {
    pageNumbers.push(i);
  }

  const resultArray = pageVisible(pageNumbers, currentPage);

  function pageVisible (pageNumbers, currentPage) {
    const resultArray = [];

    if (currentPage === 1 || currentPage === 2) {
      resultArray.push(1, 2, 3, '...', pageNumbers.length - 1);
    } else if (currentPage === 3) {
      resultArray.push(1, 2, 3, 4, '...', pageNumbers.length - 1);
    } else if (currentPage > 3) {
      const index = pageNumbers.indexOf(currentPage);
      resultArray.push(pageNumbers[0], '...', pageNumbers[index - 1], pageNumbers[index], pageNumbers[index + 1], '...', pageNumbers.length - 1);
    }
    return resultArray;
  }

  return (
    <>
      <ul className='Pagination'>
        {
          resultArray.map((number) => (
            <li className='Pagination-item' key={resultArray.indexOf(number)}>
              { (number === '...') ?
                <span className='Pagination-dots'>{number}</span>
                 :
                 <a href='!#' className='Pagination-link' onClick={() => props.paginate(number)}>
                  <span>{number}</span>
                </a>
              }
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default memo(Pagination);
