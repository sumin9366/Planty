import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.7rem 0 0.7rem;

  & .plant-discription {
    padding-left: 0.5rem;

    & .plant-name {
      margin-top: 0.5rem;
      font-size: 1.3rem;
      text-align: center;

      @media (max-width: 768px) {
        font-size: 1.15rem;
      }

      @media (max-width: 576px) {
        font-size: 1rem;
      }
    }
  }

  & a {
    text-decoration: none;
    color: black;
  }
`;

const PlantImg = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor[5]};

  &:hover {
    transition: transform 0.3s;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 170px;
  }

  @media (max-width: 576px) {
    width: 200px;
    height: 140px;
  }
`;

const Card = ({ data, marginLeft, marginRight }) => {
  const { cntntsNo, cntntsSj } = data;
  return (
    <Wrapper style={{ marginLeft: marginLeft, marginRight: marginRight }}>
      <Link to={`/dictionary/${cntntsNo}`}>
        <PlantImg />
        <div className="plant-discription">
          <div className="plant-name">{cntntsSj}</div>
        </div>
      </Link>
    </Wrapper>
  );
};

export default Card;