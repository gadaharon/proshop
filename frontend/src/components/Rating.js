import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {Array(5)
        .fill('')
        .map((_, num) => (
          <span key={num}>
            <i
              style={{ color }}
              className={
                value >= num + 1
                  ? 'fas fa-star'
                  : value >= num + 0.5
                  ? 'fas fa-star-half-alt'
                  : 'far fa-star'
              }
            ></i>
          </span>
        ))}
      <span>{text && text}</span>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Rating.defaultProps = {
  color: '#f8e825',
};

export default Rating;
