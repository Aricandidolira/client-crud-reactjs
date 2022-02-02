export interface IClient {
  cliente: IDataClient;
}
export interface IDataClient {
  id:string;
  nome:string;
  email:string;
  profissao:string;
  nascimento:string;
  observacao:string;
}