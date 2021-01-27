import styled from 'styled-components'
import Widget from '../src/components/Widgets'
import Footer from '../src/components/Footer'
import QuizBackground from '../src/components/QuizBackground'
import GitHubCorner from '../src/components/GitHubCorner'
import db from '../db.json'

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`

// const BackgroundImage = styled.div`
//   background-color: ${({ theme }) => theme.colors.mainBg};
//   background-size: cover;
//   background-position: center;
//   height: 100vh;
// `

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return(
    <QuizBackground>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz da OCM</h1>
          </Widget.Header>
          <Widget.Content>
            <p>salve salve família</p>

          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz da OCM</h1>
            <p>salve salve família</p>

          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner/>
    </QuizBackground>  
  )
}
