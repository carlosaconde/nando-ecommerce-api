export interface PaginationResult<T> {
  payload: T[];
  page: number;
  status: "success" | "error";
}
