import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'

const api = 'http://localhost:8000/api/auth'

export const rawBaseQuery = fetchBaseQuery({
    baseUrl: `${api}`,
    credentials: "include",
    prepareHeaders(headers, api) {
        console.log((api.getState() as any).auth.accessToken)
    },
})


const baseQueryWithReauth : BaseQueryFn<string|FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await rawBaseQuery(args, api, extraOptions)

    // 401 status request refresh token

    return result
}

