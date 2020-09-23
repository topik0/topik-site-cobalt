import styled from "styled-components"

export const BoldTitle = styled.p`
  font-weight: 900;
  font-size: ${props => (props.size ? props.size : "60px")};
  margin-bottom: 20px;
`
export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 26px;
  line-height: 1.3;
  width: 70%;
`
export const Logo = styled.img`
  width: 50%;
  height: 50%;
  position: absolute;
  filter: drop-shadow(0 0 25px rgba(17, 17, 17, 0.5));
`
