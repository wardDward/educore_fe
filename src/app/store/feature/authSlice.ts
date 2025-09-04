import { User } from '@/app/interface/User'
import { createSlice } from '@reduxjs/toolkit'

interface authState{
    user: User | null;
    error: any | null;
    accessToken: string | null;
}

const initialState = {} as authState

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setToken: (state, action) => {
            state.accessToken = action.payload.accessToken
        },
        setError : (state, action) => {
            state.error = action.payload
        }
    }
})

export const {setToken, setError} = authSlice.actions
export default authSlice.reducer