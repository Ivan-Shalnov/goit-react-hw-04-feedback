import React from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { Container, Unit } from './Number.styled';
import { useEffect } from 'react';
import { useRef } from 'react';

const Number = ({ number, unit }) => {
  const containerRef = useRef();
  const prevNumber = useRef('');
  useEffect(() => {
    prevNumber.current = number;
  }, [number]);
  useEffect(() => {
    const chars = containerRef.current.querySelectorAll('.char');
    const animDelay = !prevNumber.current ? 0.5 : 0;
    const animation = gsap.to(chars, {
      yPercent: -100,
      delay: animDelay,
      stagger: 0.2,
    });
    return () => animation.revert();
  }, [number]);

  return (
    <div>
      <Container ref={containerRef}>
        <div className="prev">{createMarkup(prevNumber.current)}</div>
        <div className="next">{createMarkup(number)}</div>
      </Container>
      {unit && <Unit>{unit}</Unit>}
    </div>
  );
};
Number.propTypes = {
  number: PropTypes.number.isRequired,
  unit: PropTypes.string,
};
function createMarkup(value) {
  return value
    .toString()
    .split('')
    .map((char, idx) => (
      <div className="char" key={idx}>
        {char}
      </div>
    ));
}
export default Number;
