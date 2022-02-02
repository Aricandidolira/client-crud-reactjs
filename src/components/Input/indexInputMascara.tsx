import React from 'react';

import {
  Container,
  ContainerInput,
} from './stylesInputMascara';

const InputMascaras: React.FC<any> = React.forwardRef((props, ref) => (
  <Container>
    <ContainerInput {...props} ref={ref} />
  </Container>
));

export default InputMascaras;
