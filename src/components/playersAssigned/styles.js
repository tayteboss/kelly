import styled from "styled-components";

const PlayersAssignedStyles = styled.section`
  .colour {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    &--1 {
      background-color: yellow;

      h1 {
        color: black;
      }
    }

    &--2 {
      background-color: blue;
    }

    &--3 {
      background-color: red;
    }

    &--4 {
      background-color: purple;
    }

    &--5 {
      background-color: orange;
    }

    &--6 {
      background-color: green;
    }

    &--7 {
      background-color: brown;
    }

    &--8 {
      background-color: black;
    }

    &--9 {
      background-color: yellow;

      h1 {
        color: black;
      }
    }

    &--10 {
      background-color: blue;
    }

    &--11 {
      background-color: red;
    }

    &--12 {
      background-color: purple;
    }

    &--13 {
      background-color: orange;
    }

    &--14 {
      background-color: green;
    }

    &--15 {
      background-color: brown;
    }
  }

  .restart-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10;
    h2 {
      color: #333333;
    }
  }

  .slider-wrapper {
    z-index: 10;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
  }
`;
export default PlayersAssignedStyles;
