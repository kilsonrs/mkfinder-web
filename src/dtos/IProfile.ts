export default interface IProfile {
  company: string;
  id: string;
  nome: string;
  cpf_cnpj: string;
  uuid_cliente: string;
  url: string;
  status: {
    isFree: boolean;
    isActive: boolean;
    deactivationDate: string;
    isBlocked: boolean;
    blockDate: string;
    inException: boolean;
    exceptionUntil: string;
  };
}
