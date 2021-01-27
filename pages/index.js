import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Widget from '../src/components/Widgets';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 450px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <>
      <QuizBackground>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Quiz da OCM</h1>
            </Widget.Header>
            <Widget.Content>
              <p>salve salve família</p>
              <form onSubmit={(e) => {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
              >
                <Widget.Input
                  type="text"
                  placeholder="Digite seu nome pra jogar"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Widget.Button type="submit" disabled={name.length === 0}>
                  Jogar [seuNome]
                </Widget.Button>
              </form>

            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quiz da OCM</h1>
              <p>salve salve família</p>
            </Widget.Content>
          </Widget>

          <Footer />
        </QuizContainer>
        <GitHubCorner />
      </QuizBackground>
    </>
  );
}
