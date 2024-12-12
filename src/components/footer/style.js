import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 4rem;
  background: linear-gradient(135deg, rgb(0, 21, 41), rgb(0, 64, 128));

  h2 {
    font-size: 2rem;
    color: var(--yellow);
    margin-bottom: 1rem;
  }

  hr {
    height: 1px;
    border: none;
    color: #ffd4206e;
    background-color: #ffd4206e;
  }

  p,
  a {
    color: var(--textWhite);
    font-size: 1.4rem;
  }

  & .footer-top {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    justify-items: center;
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3rem;
    }
  }

  & .footer-left {
    @media (max-width: 500px) {
      text-align: center;
    }
  }

  & .footer-middle ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  & .footer-middle a {
    display: inline-block;
    padding: 1rem 2rem;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: 0.15rem;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    border: 1px solid var(--yellow);
    text-decoration: none;
    width: 12rem;
    text-align: center;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
    }

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: var(--yellow);
      transition: all 0.3s;
      z-index: -1;
    }

    &:hover {
      color: #000000;
      &:before {
        width: 100%;
      }
    }
  }

  & .footer-social-media__icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    cursor: pointer;
    svg {
      transition: all 0.2s ease;
    }
    svg:hover {
      scale: 1.2;
    }
  }

  & .footer-bottom {
    text-align: center;
  }
`;
