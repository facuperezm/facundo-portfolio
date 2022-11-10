import styled from "@emotion/styled";

const Navblur = styled.div`
  position: fixed;
  width: 100%;
  height: 18%;
  top: 0;
  left: 0;
  blur: (10px);
  background: linear-gradient(180deg, #202023, rgba(32, 32, 35, 0.01) 91.43%);
  pointerevents: none;
  zindex: 5;
  &{theme}="dark"}: {
    filter: "invert(91%)",
  };
  transition: all 0.2s ease-in-out !important;
`;

export default Navblur;
