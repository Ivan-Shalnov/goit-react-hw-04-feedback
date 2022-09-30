import PropTypes from 'prop-types';
import { Container, Title } from './Section.styled';
const Section = ({ title, children }) => {
  return (
    <Container className="section">
      <Title>{title}</Title>
      {children}
    </Container>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
