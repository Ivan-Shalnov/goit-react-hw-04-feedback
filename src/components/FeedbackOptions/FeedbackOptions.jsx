import PropTypes from 'prop-types';

import { BtnsContainer, Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnsContainer>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </BtnsContainer>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
