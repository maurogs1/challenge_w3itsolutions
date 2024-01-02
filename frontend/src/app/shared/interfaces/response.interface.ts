export default interface ResponseInterface<T> {
    data: T;
    status: number;
    msg?: string;
  }