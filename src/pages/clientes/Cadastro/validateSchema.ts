import * as Yup from 'yup';

export const validateSchema = Yup.object().shape({
  nome: Yup.string()
    .trim()
    .min(3, 'Mínimo 3 caracteres')
    .required('Nome é obrigatório!'),
  email: Yup.string()
    .trim()
    .required('E-mail é obrigatório')
    .min(5, 'E-mail deve conter no minimo 5 caracteres')
    .email('Digite um e-mail válido'),
  nascimento: Yup.string()
    .trim()
    .matches(/^\d*$/, 'Informe somente números')
    .required('Data de Nascimento é Obrigatório'),
  profissao: Yup.string().trim().required('Profissão é obrigatório'),
  observacao: Yup.string().trim().optional(),
});
