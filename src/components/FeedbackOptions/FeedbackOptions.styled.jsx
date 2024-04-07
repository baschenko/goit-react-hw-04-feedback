import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const ButtonItem = styled.li`
  margin-right: 20px;
`;

export const StatisticsButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  text-transform: capitalize;
  font-weight: 600;
  &:hover {
    background-color: #14b8f4;
  }

  &:active {
    box-shadow: none;
  }
`;
