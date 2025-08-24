import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export interface ErrorResponse{
    errors?: Record<string, string[]>
}

export type CustomError = FetchBaseQueryError & {
    data?: ErrorResponse
}