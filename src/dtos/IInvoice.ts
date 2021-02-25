export default interface IInvoice {
  uuid_lanc: string;
  nome: string;
  datavenc: string;
  datavencFormatted: string;
  valor: string;
  cpf_cnpj: string;
  nossonum: string;
  linhadig: string;
  titulo: string;
  referencia: string;
  processamento: string;
  descricao: string;
  plano: string;
  status: string;
  datapag: string;
  valorpag: string;
  recibo: string;
  deltitulo: string;
  active: boolean;
}
