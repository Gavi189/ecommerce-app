export interface IPayment {
  id_pagamento: string;
  status?: string;
  valor: number;
  descricao?: string;
  client_secret?: string;
}
