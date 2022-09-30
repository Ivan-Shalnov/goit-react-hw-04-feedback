import React from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { Container, Unit } from './Number.styled';
class Number extends React.Component {
  state = {
    prev: '',
    next: this.props.number,
  };
  ref = React.createRef();
  selector = gsap.utils.selector(this.ref);
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.number !== this.props.number) {
      this.setState({ prev: prevProps.number, next: this.props.number });

      return null;
    }
    if (prevState !== this.state) {
      this.animation.revert();
      this.animation = gsap.to(this.selector('.char'), {
        yPercent: -100,
        stagger: 0.2,
      });
    }
  }
  componentDidMount() {
    this.animation = gsap.to(this.selector('.char'), {
      yPercent: -100,
      delay: 1.25,
      stagger: 0.2,
    });
  }
  createMarkup(number) {
    return number
      .toString()
      .split('')
      .map((char, idx) => (
        <div className="char" key={idx}>
          {char}
        </div>
      ));
  }
  render() {
    return (
      <div>
        <Container ref={this.ref}>
          <div className="prev">{this.createMarkup(this.state.prev)}</div>
          <div className="next">{this.createMarkup(this.state.next)}</div>
        </Container>
        {this.props.unit && <Unit>{this.props.unit}</Unit>}
      </div>
    );
  }
}
Number.propTypes = {
  number: PropTypes.number.isRequired,
  unit: PropTypes.string,
};
export default Number;
