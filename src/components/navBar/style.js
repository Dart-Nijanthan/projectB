import styled from 'styled-components';

export const NavContainer = styled.nav`
  background: linear-gradient(90deg, rgb(74, 144, 226), rgb(80, 201, 195));
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Open Sans', sans-serif;
  padding: 0 6rem;
  position: relative;
  @media (max-width: 500px) {
    padding: 0 2rem;
  }
  & .nav-logo-box img {
    width: 100px;
    height: 80px;
    @media (max-width: 500px) {
      width: 80px;
      height: 60px;
    }
  }
  & .nav-menu-box ul {
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    font-size: 1.8rem;
    display: flex;
    @media (max-width: 700px) {
      display: none;
    }
  }

  & .nav-menu-box a {
    color: var(--textWhite);
    text-decoration: none;
    position: relative;

    :after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 1.5px;
      background-color: var(--blue);
      transition: width 0.3s ease;
    }

    :hover::after {
      width: 100%;
    }
  }

  & .menu-open-icon {
    border: none;
    background: none;
    display: none;
    @media (max-width: 700px) {
      display: block;
    }
  }

  & .nav-menu-box-2 {
    position: fixed;
    background-color: red;
    width: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(90deg, rgb(74, 144, 226), rgb(80, 201, 195));
    z-index: 20;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    opacity: ${(props) => (props.showMenu2 ? '1' : '1')};
    height: ${(props) => (props.showMenu2 ? '20rem' : '0')};
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-out;
    ul {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      list-style: none;
      display: ${(props) => (props.showMenu2 ? 'flex' : 'none')};
    }
    a {
      color: var(--textWhite);
      text-decoration: none;
      font-size: 1.8rem;
    }
  }

  & .menu-close-icon {
    background: none;
    border: none;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: ${(props) => (props.showMenu2 ? 'flex' : 'none')};

    :hover {
      opacity: 0.8;
    }
  }

  & .nav-menu-box-2 a {
    position: relative;
    :after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 1.5px;
      background-color: var(--blue);
      transition: width 0.3s ease;
    }

    :hover::after {
      width: 100%;
    }
  }

  /* @media (max-width: 700px) {
    .nav-menu-box ul {
      display: none;
    }
  } */
`;
