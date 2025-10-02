//Classe Abstrata para Serviços de API
export abstract class ApiService<T> {
  //Propriedades protegidas
  protected _baseUrl: string;
  protected _headers: HeadersInit;

  //Construtor
  constructor(baseUrl: string, token: string) {
    this._baseUrl = baseUrl;
    this._headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }

  //Métodos abstratos
  abstract getById(id: number): Promise<T>;
  abstract getAll(): Promise<T[]>;
  abstract create(data: T): Promise<T>;
  abstract update(id: number, data: Partial<T>): Promise<T>;
  abstract delete(id: number): Promise<void>;

  //Genérico <T> representa o tipo de dado que o
  // serviço irá manipular
}
