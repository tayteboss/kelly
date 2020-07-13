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

  .body {
    overflow-x: hidden;
    width: 100%;
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

  a {
    text-decoration: none;
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

      &:last-child {
        border-bottom: solid 1px #333333;
      }
    }

    &--active {
      color: #1a1a1a;
    }

    &--player {
      position: relative;
      overflow: hidden;
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
        z-index: 15;

        &--drag {
        }
      }
    }
  }

  .fill {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -10;

    &--black {
      background-color: #1a1a1a;
    }

    &--light {
      background-color: #e6e6e1;
    }
  }

  .player-assign-wrapper {
    padding-bottom: 86px;
  }

  .player-select {
    overflow-x: hidden;
  }
`;
export default GlobalStyles;
