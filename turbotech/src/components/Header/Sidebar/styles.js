import styled from "styled-components";

export const Container = styled.div`
  background-color: #212b38;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 300px;
  height:550px;
  transform: translateX(${(props) => (props.sidebar ? "0" : "100%")});
  transition: transform 0.4s ease-in-out;
  margin-right:1px;

  > img {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 70px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;
