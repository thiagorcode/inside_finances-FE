import styled from 'styled-components';

export const Resume = styled.div`
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 0;
    border-bottom: 0.1px solid rgba(181, 181, 181, 0.3);
    color: #b8bfdc;
    width: 100%;
  }

  button {
    margin-top: 1rem;
  }
  svg {
    color: #b8bfdc;
    font-size: 38px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 1.3rem;
    font-weight: bold;
  }
  span:last-child {
    font-size: 0.82rem;
    margin-top: 0.3rem;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Spiral = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 28px;
  margin-bottom: 25px;
  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #fff;

    font-size: 32px;
  }

  span:last-child {
    color: #00c614;
    font-weight: 400;
    font-size: 14px;
  }
`;

export const BoxTypeValues = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    background-color: #3c404e;
    border-radius: 4px;
    padding: 15px 13px;
    display: flex;
    align-items: center;
    transition: box-shadow 0.2s;

    :hover {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    :first-child svg {
      color: #00c614;
    }
    :last-child svg {
      color: #ff0404;
    }
  }

  svg {
  }
`;
