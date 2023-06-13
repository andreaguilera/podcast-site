import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
 

  main {
    padding: 16px;
  }

  form {
    display: grid;
    gap: 16px;
  }

  label {
    font-weight: bold;
  }

  input,
  textarea {
    margin-left: 16px;
    width: 80%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .formField {
    display: flex;
    justify-content: space-between;
  }

  button {
    padding: 8px 16px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer>     

      <main>
        <h2>Entre em Contato</h2>
        <form>
          <div className='formField'>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className='formField'>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className='formField'>
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" rows={4}></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </main>

      <footer>
        <p>&copy; 2023 Podcast. Todos os direitos reservados.</p>
      </footer>
    </ContactContainer>
  );
}

export default Contact;
