import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
    center / cover no-repeat;

  @media (max-width: 600px) {
    width: 100vw;
    height: auto;
  }
`;
// ${({ dontShowOnSmallViewPort }) =>
//       dontShowOnSmallViewPort && `background: none;`}

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Feature = styled(Container)`
  flex-direction: column;
  align-items: normal;
  justify-content: center;
  width: 40%;
  height: 80vh;

  @media (max-width: 1000px) {
    width: 80%;
    align-items: normal;
    height: 60vh;
  }
`;

export const FeatureCallOut = styled.p`
  color: white;
  font-size: 44px;
  font-weight: bold;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin-bottom: 0;
  margin-top: -30vh;

  @media (max-width: 1000px) {
    font-size: 2rem;
    margin-top: auto;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 18px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  color: d5d5d5;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    background-color: white;
  }

  @media (max-width: 600px) {
    bottom: 0;
  }
`;

export const MoreButton = styled(PlayButton)`
  margin-left: 20px;
  color: #e6e6e6;
  background-color: rgba(109, 109, 110, 0.7);

  &:hover {
    background-color: rgba(109, 109, 110, 0.4);
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }
`;

export const Link = styled.p`
  color: ${({ active }) => (active === "true" ? "white" : "#e5e5e5")};
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #b3b3b3;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 0.3rem;

  &:focus {
    outline: none;
  }
`;

export const Dropdown = styled.div`
  display: none;
  background-color: black;
  position: absolute;
  padding: 10px;
  width: 150px;
  top: 32px;
  right: 10px;
  z-index: 1;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;
    padding: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link}, ${Picture} {
      cursor: default;
      border-radius: 0.3rem;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 0;
    margin-top: 0;
    font-weight: 500;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  margin-right: 10px;

  padding: ${({ active }) => (active === true ? "0 10px" : "0")};
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  width: ${({ active }) => (active === true ? "250px" : "0px")};

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin-right: 10px;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }

  &:focus {
    outline: none;
  }
`;

export const Profile = styled.div`
  display; flex;
  align-items: center;
  
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown}{
    display: flex;
    flex-direction: column;
  }
`;
