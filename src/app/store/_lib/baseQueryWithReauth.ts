import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { setToken } from "../feature/authSlice";
import { Mutex } from 'async-mutex'
const api = 'http://localhost:8000/api'

// create a new mutex
const mutex = new Mutex()
//fetchBaseQuery 
const rawBaseQuery = fetchBaseQuery({
    baseUrl: `${api}`,
    credentials: "include",
    prepareHeaders(headers, api) {
        console.log('headers: ' + headers)
        console.log((api.getState() as any).auth.accessToken)
        const token = ((api.getState() as any).auth.accessToken)
        if(token) headers.set("authorization", `Bearer ${token}`)
        return headers
    },
})


export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock()
    let result = await rawBaseQuery(args, api, extraOptions)
    console.log('result res:  ' + JSON.stringify(result))

    if (!mutex.isLocked()) {
        const release = await mutex.acquire()
        try {
            if (result.error && result.error.status === 401) {
                // try to get a new token
                const refreshToken = await rawBaseQuery('auth/refresh_token', api, extraOptions)
                console.log('resfresh token res:  ' + refreshToken)
                if (refreshToken.data) {
                    // store the new token
                    api.dispatch(setToken(refreshToken.data))
                    // retry the initial query
                    result = await rawBaseQuery(args, api, extraOptions)
                }
            } else {
                // call api.dispatch then logged out
            }
        } finally {
            // release must be called once the mutex should be released again.
            release()
        }
    } else {
        // wait until the mutex is available without locking it
        await mutex.waitForUnlock()
        result = await rawBaseQuery(args,api,extraOptions)

    }

    return result
}

