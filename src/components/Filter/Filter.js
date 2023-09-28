import { Container } from './Filter.styled';
import PropTypes from 'prop-types';
// import { List, ListItem, ItemName } from './Filter.styled';

export const Filter = ({ onFilterName, filter }) => {
  return (
    <Container>
      <h2>Find contacts by name</h2>
      <label>
        <input
          type="text"
          placeholder="Find..."
          onChange={e => {
            onFilterName(e.target.value);
          }}
        ></input>
      </label>
    </Container>
  );
};

Filter.propTypes = {
  filter: PropTypes.array.isRequired,
  onFilterName: PropTypes.func.isRequired,
};
