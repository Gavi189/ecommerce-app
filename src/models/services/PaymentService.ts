import { IPayment } from "../interfaces/IPayment";
import { ApiService } from "./ApiService";

export default class PaymentService extends ApiService<IPayment> {
  constructor() {
    super(
      "http://10.63.45.29:8080/pagamentos",
      "wRQjwyt4KKSXDXrDTGQhUpko0sCPz2WukJhZN2dl4YlDhjXka6TnMvuytcOEBhH9fXf8CRhgLwoKEk79zV6ss6wEYku3yMhDE2XX"
    );
  }

  async paymentIntent(valor: number): Promise<string> {
    try {
      console.log("Enviando pagamento para:", this._baseUrl);
      console.log("Valor:", valor);

      const response = await fetch(this._baseUrl, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({ valor }),
      });

      // 1. Log da resposta bruta
      const responseText = await response.text();
      console.log("Resposta bruta do backend:", responseText);
      console.log("Status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${responseText}`);
      }

      // 2. Tentar parsear como JSON
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error("Falha ao fazer parse do JSON:", parseError);
        throw new Error("Resposta inválida do servidor (não é JSON)");
      }

      // 3. Validar se tem client_secret
      if (!data || typeof data.client_secret !== "string") {
        console.error("client_secret ausente ou inválido:", data);
        throw new Error("client_secret não encontrado na resposta");
      }

      return data.client_secret;
    } catch (error: any) {
      console.error("Erro em paymentIntent:", error);
      throw error; // Propaga para o componente
    }
  }

  async confirmPayment(id_pagamento: string): Promise<IPayment> {
    try {
      console.log("Confirmando pagamento com client_secret:", id_pagamento);

      const response = await fetch(this._baseUrl, {
        method: "PUT",
        headers: this._headers,
        body: JSON.stringify({ id_pagamento }),
      });

      const responseText = await response.text();
      console.log("Resposta confirmação:", responseText);

      if (!response.ok) {
        throw new Error(`Falha na confirmação: ${responseText}`);
      }

      let data;
      try {
        data = JSON.parse(responseText);
      } catch {
        throw new Error("Resposta de confirmação não é JSON válido");
      }

      return data;
    } catch (error: any) {
      console.error("Erro em confirmPayment:", error);
      throw error;
    }
  }
  //Métodos não utilizados
  getById(): Promise<IPayment> {
    throw new Error("Não implementado");
  }
  getAll(): Promise<IPayment[]> {
    throw new Error("Não implementado");
  }
  create(): Promise<IPayment> {
    throw new Error("Não implementado");
  }
  update(): Promise<IPayment> {
    throw new Error("Não implementado");
  }
  delete(): Promise<void> {
    throw new Error("Não implementado");
  }
}
