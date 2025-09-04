import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const api = `${process.env.NEXT_PUBLIC_BACKEND_APP_URL}/api/auth`
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: api }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (payload: { email: string, password: string }) => ({
                url: 'login',
                method: "POST",
                body: payload
            })
        }),
        register: builder.mutation({
            query: (payload) => ({
                url: 'register',
                method: 'POST',
                body: payload
            })
        })
    })
})


export const { useLoginMutation, useRegisterMutation } = authApi