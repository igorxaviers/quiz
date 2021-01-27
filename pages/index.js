import styled from 'styled-components'
import Widget from '../src/components/Widgets'
import Footer from '../src/components/Footer'
import QuizBackground from '../src/components/QuizBackground'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'
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
  max-width: 450px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return(
    <>
      <Head>
        <title>{db.title}</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="description" content=""/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://quiz-kappa.vercel.app/"/>
        <meta property="og:title" content={db.title}/>
        <meta property="og:description" content={db.description}/>
        <meta property="og:image" content={db.bg}/>

        <meta property="twitter:card" content={db.bg}/>
        <meta property="twitter:url" content="https://quiz-kappa.vercel.app/"/>
        <meta property="twitter:title" content={db.title}/>
        <meta property="twitter:description" content={db.description}/>
        <meta property="twitter:image" content={db.bg}/>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <QuizBackground backgroundImage={db.bg}>
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
    </>

  )
}
