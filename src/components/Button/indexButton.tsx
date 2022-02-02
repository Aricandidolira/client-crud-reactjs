import React from 'react';

import { Container, ComponentButton } from './stylesButton';

function Button({ ...props }) {
  return (
    <Container>
      <ComponentButton style={{ background: 'green' }} onClick={props.submit} type="submit">
        Cadastrar
      </ComponentButton>
    </Container>
  );
}

export default Button;
