import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rawBaseQuery } from "../_lib/baseQueryWithReauth";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery:  rawBaseQuery,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (payload: {email: string, password: string}) => ({
                url: '/login',
                method: "POST",
                body: payload
            })
        })
    })
})


export const { useLoginMutation } = authApi