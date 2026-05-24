export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export class ServiceError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ServiceError";
    this.status = status;
  }
}

export async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new ServiceError(
      `Request failed with status ${response.status}`,
      response.status,
    );
  }
  return response.json() as Promise<T>;
}
