export interface PaginatedResponseDto<T> {
  data: T[];
  count: number;
}
