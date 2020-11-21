import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
  height: 75vh;
`;

export const Title = styled.h1`
  width: 100%;
  color: white;
  font-size: 48px;
  text-align: center;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 18px;
    font-weight: normal;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 20px;
  transition: 300ms;

  @media (max-width: 600px) {
    color: white;
    font-size: 16px;
  }
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
  transition: 300ms;
  border-radius: 0.4rem;

  @media (max-width: 600px) {
    max-width: 100px;
  }
`;

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
