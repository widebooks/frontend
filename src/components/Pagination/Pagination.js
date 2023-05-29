import PropTypes from "prop-types";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import cl from "./Pagination.module.scss";

const BasicPagination = ({
  countPage,
  currentPage,
  onChangePage
}) => {
  return (
    <div className={cl.pagination}>
      <Stack spacing={2}>
        <Pagination
          count={countPage}
          page={currentPage}
          color="primary"
          onChange={onChangePage}
        />
      </Stack>
    </div>
  );
}

BasicPagination.propTypes = {
  countPage: PropTypes.number,
  currentPage: PropTypes.number,
  onChangePage: PropTypes.array,
};

BasicPagination.defaultProps = {
  countPage: 10,
  currentPage: 1,
  onChangePage: () => {},
};

export default BasicPagination