import React from 'react';
import styled from 'styled-components';

const SupportContainer = styled.div`

  main {
    padding: 16px;
    text-align: center;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  ul {
    list-style: disc;
    margin-left: 24px;
  }

  footer {
    padding: 16px;
    background-color: #f2f2f2;
    text-align: center;
  }
`;

const Support: React.FC = () => {
  return (
    <SupportContainer>     

      <main>
        <h2>Apoie o Podcast</h2>
        <p>Se você gosta do nosso podcast e deseja apoiar o projeto, existem várias maneiras de contribuir:</p>
        <ul>
          <li>Faça uma doação</li>
          <li>Compartilhe nossos episódios nas redes sociais</li>
          <li>Deixe uma avaliação positiva nas plataformas de podcast</li>
        </ul>
      </main>

      <footer>
        <p>&copy; 2023 Podcast. Todos os direitos reservados.</p>
      </footer>
    </SupportContainer>
  );
}

export default Support;
