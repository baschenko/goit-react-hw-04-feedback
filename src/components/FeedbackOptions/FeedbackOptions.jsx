import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonItem,
  ButtonList,
  StatisticsButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <ButtonItem key={option}>
            <StatisticsButton
              type="button"
              data={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </StatisticsButton>
          </ButtonItem>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func,
};
