import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';
// import PropTypes from 'prop-types';
import { FilterLabel, FilterInput, FilterWrapper } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(filterContacts(evt.target.value));
  };

  return (
    <FilterWrapper>
       <FilterLabel>
      Find contacts by name
      <FilterInput type="text" name="filter" onChange={onChange} />
    </FilterLabel>
    </FilterWrapper>
   
  );
}

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
