//Classe Concreta para Serviços de Produto

import { Product } from "../types/Product";
import { ApiService } from "./ApiService";

export default class ProductService extends ApiService<Product> {
  //Construtor
  constructor() {
    super(
      "http://10.63.45.29:8080/produtos",
      "wRQjwyt4KKSXDXrDTGQhUpko0sCPz2WukJhZN2dl4YlDhjXka6TnMvuytcOEBhH9fXf8CRhgLwoKEk79zV6ss6wEYku3yMhDE2XX"
    );
  }

  //Implementação dos métodos abstratos
  async getById(id: number): Promise<Product> {
    const response = await fetch(`${this._baseUrl}/${id}`, {
      method: "GET",
      headers: this._headers,
    });
    return response.json();
  }

  async getAll(): Promise<Product[]> {
    const response = await fetch(this._baseUrl, {
      method: "GET",
      headers: this._headers,
    });
    const json = await response.json();
    return json.data;
  }

  async create(data: Product): Promise<Product> {
    const response = await fetch(this._baseUrl, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async update(id: number, data: Partial<Product>): Promise<Product> {
    const response = await fetch(`${this._baseUrl}${id}`, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async delete(id: number): Promise<void> {
    await fetch(`${this._baseUrl}/${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }
}
