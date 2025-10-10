import { Client } from "../types/Client";
import { ApiService } from "./ApiService";

export default class ClientService extends ApiService<Client> {
  constructor() {
    super(
      "http://10.63.45.29:8080/clientes",
      "wRQjwyt4KKSXDXrDTGQhUpko0sCPz2WukJhZN2dl4YlDhjXka6TnMvuytcOEBhH9fXf8CRhgLwoKEk79zV6ss6wEYku3yMhDE2XX"
    );
  }

  async getById(id: number): Promise<Client> {
    const response = await fetch(`${this._baseUrl}/${id}`, {
      method: "GET",
      headers: this._headers,
    });
    return response.json();
  }

  async getAll(email?: string, password?: string): Promise<Client[]> {
    const response = await fetch(
      `http://10.63.45.29:8080/clientes/?email=${email}&senha=${password}`,
      {
        method: "GET",
        headers: this._headers,
      }
    );
    const json = await response.json();
    return json.data;
  }

  async create(data: Client): Promise<Client> {
    const response = await fetch(this._baseUrl, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async update(id: number, data: Partial<Client>): Promise<Client> {
    const response = await fetch(`${this._baseUrl}/${id}`, {
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
