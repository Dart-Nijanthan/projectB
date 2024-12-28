import styled from 'styled-components';

export const HomeConatiner = styled.div`
  background-color: var(--homeBG);
  padding: 4rem 6rem;
  @media (max-width: 500px) {
    padding: 4rem 2rem;
  }
  & .home-heading-primary {
    color: var(--blue);
    font-size: 4.8rem;
    letter-spacing: -1px;
    text-align: center;
    font-weight: 600;
  }
  & .home-heading-secondary {
    color: var(--textGrey);
    font-size: 1.8rem;
    text-align: center;
    max-width: 70rem;
    margin: 0 auto;
  }

  & .home-desc-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5rem auto 0 auto;
    text-align: center;
    gap: 2rem;
    max-width: 110rem;
    @media (max-width: 950px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 6rem;
    }
  }

  & .home-desc-title {
    font-size: 3.2rem;
    color: var(--blue);
    font-weight: 500;
  }

  & .home-desc {
    font-size: 1.8rem;
    color: var(--textGrey);
    max-width: 60rem;
    margin: 0 auto;
    margin: 2rem 0;
  }

  & .home-desc-btn {
    background-color: var(--orange);
    color: var(--textWhite);
    font-size: 1.8rem;
    padding: 1rem 5rem;
    border: none;
    border-radius: 5rem;
    cursor: pointer;
    display: inline-block;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10rem;
      z-index: -2;
    }

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: #ff4a39;
      transition: all 0.3s;
      z-index: -1;
    }

    &:hover {
      &:before {
        width: 100%;
      }
    }
  }

  & .home-desc-right {
    position: relative;
  }

  & .home-desc-right img,
  .home-desc-right__img-overlay {
    width: 50rem;
    border-radius: 2rem;
    height: 30rem;
    @media (max-width: 380px) {
      width: 38rem;
      height: 27rem;
    }
  }
  & .home-desc-right__img-overlay {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
    position: absolute;
    z-index: 2;
  }
`;
