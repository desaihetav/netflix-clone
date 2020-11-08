import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  max-width: 950px;
  justify-content: center;
  height: 100%;
  margin: 10px auto;
  padding: 0 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  height: 60px;
  border: 0;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 12px 26px;
  font-size: 26px;
  border: 0;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
    padding: 14px 30px;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;

export const Text = styled.p`
  font-size: 18px;
  color: white;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
