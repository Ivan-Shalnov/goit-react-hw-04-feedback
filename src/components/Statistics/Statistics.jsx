import PropTypes from 'prop-types';
import gsap from 'gsap';
import { Item } from './Statistics.styled';
import Number from './Number';
import { useRef } from 'react';
import { useEffect } from 'react';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const ref = useRef();
  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, height: 0 },
      {
        keyframes: [
          { height: 'auto', duration: 0.5 },
          { opacity: 1, duration: 0.25 },
        ],
      }
    );
  }, []);
  return (
    <div ref={ref}>
      <Item>
        <div>Good:</div> <Number number={good} />
      </Item>{' '}
      <Item>
        <div>Neutral:</div> <Number number={neutral} />
      </Item>
      <Item>
        <div>Bad:</div> <Number number={bad} />
      </Item>
      <Item>
        <div>Total:</div> <Number number={total} />
      </Item>
      <Item>
        <div>Positive feedback:</div>{' '}
        <Number number={positivePercentage} unit="%" />
      </Item>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
