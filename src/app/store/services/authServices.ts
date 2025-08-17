import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = 'http://localhost:8000/api/auth'
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${api}` }),
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