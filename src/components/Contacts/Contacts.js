import {
  Container,
  List,
  ListItem,
  ItemBtn,
  Title,
  ItemName,
} from './Contacts.styled';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, onContactsDelete }) => {
  return (
    <Container>
      <Title>Contacts</Title>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <ItemName>{name} : </ItemName>
            <span>{number}</span>
            <ItemBtn
              type="button"
              onClick={() => {
                onContactsDelete(id);
              }}
            >
              Delete
            </ItemBtn>
          </ListItem>
        ))}
      </List>
      ;
    </Container>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onContactsDelete: PropTypes.func.isRequired,
};
