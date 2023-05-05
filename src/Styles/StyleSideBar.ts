import styled from 'styled-components';

type Props = {
  sidebar: string;
}

export const Container = styled.div<Props>`
  background: #00995D;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.2);
  position: fixed;
  height: 100%;
  top: 80px;
  left: 0px;
  height: 1122px;
  width: 263px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 263px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;