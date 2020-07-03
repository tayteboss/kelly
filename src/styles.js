import styled from "styled-components";

const GlobalStyles = styled.div`
  * {
    margin: 0 !important;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button:focus {
    outline: 0;
  }

  font-family: Arial, Helvetica, sans-serif;

  h1 {
    font-size: 47px;
    font-weight: 400;
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
  }

  .box-padding {
    padding: 15px 20px;
    min-height: 86px;
  }

  .btn {
    width: 100%;
    text-align: left;
    border: none;

    &--light {
      background-color: #e6e6e1;
      color: #cccccc;
      border-top: solid 1px #333333;
      transition: color 300ms linear;
    }

    &--active {
      color: #1a1a1a;
    }

    &--dark {
      border-top: solid 1px #333333;
      background-color: #1a1a1a;
      color: #e6e6e1;
    }

    &--dark:last-child {
      border-bottom: solid 1px #333333;
    }

    &--icon {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 25px;
      }
    }
  }
`;
export default GlobalStyles;
