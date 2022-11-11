import styled from "@emotion/styled";

const TopBlur = styled.div`
  position: fixed;
  width: 100%;
  height: 15%;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #1c1c1c, rgba(32, 32, 35, 0.01) 90%);
  mask-image: linear-gradient(#1f2028, transparent);
  backdrop-filter: blur(4px);
  zindex: 5;
`;

export default TopBlur;
