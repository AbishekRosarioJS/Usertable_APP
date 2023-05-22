import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBeers } from '../redux/actions';
import Pagination from './Pagination';

const BeerTable = () => {
  const beers = useSelector((state) => state.beers);
  const error = useSelector((state) => state.error);
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBeers(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    dispatch(fetchBeers(page));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <table className="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Name</th>
            <th>Tagline</th>
            <th>First Brewed</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {beers.map((beer) => (
            <tr key={beer.id}>
              <td>{beer.name}</td>
              <td>{beer.tagline}</td>
              <td>{beer.first_brewed}</td>
              <td>{beer.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BeerTable;

