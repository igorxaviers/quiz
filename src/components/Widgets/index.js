import styled from 'styled-components'

const Widget = styled.div`
  background-color: ${({ theme }) => theme.colors.widgetBg};
  border-radius: ${({ theme }) => theme.borderRadius}; 
  color: #444;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  box-shadow: rgba(17, 12, 46, 0.08) 0px 48px 40px 0px;
  &:not(:first-child){
    margin-top:30px;
  }
  margin-bottom:30px;
  h1{
    font-size: 26px;
  }
  h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
  * {
    margin: 0;
  }
`

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`

export default Widget
