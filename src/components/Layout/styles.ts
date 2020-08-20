import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > main {
    margin: 0 30px;
    display: flex;
    justify-content: center;
  }

  > span {
    margin-top: 52px;
    display: flex;
  }

  .left-column, .right-column, .ad-banner {
    display: unset;
  }

  .middle-column {
    margin: 0 25px 16px;
  }

  @media(max-width: 1180px) {
    > span {
      margin-top: 48px;
    }

    .left-column, .right-column, .ad-banner {
      display: none;
    }
  }
`;