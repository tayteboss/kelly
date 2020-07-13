import styled from "styled-components";

const PlayerSelectStyles = styled.main`
  section {
    display: flex;
    flex-direction: column;
    padding-bottom: 86px;
  }

  .assign-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
  }
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: red;
    z-index: 10;
  }

  .fadeout {
    display: none;
  }
`;
export default PlayerSelectStyles;
