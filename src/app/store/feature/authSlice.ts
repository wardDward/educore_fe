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
            console.log('action: ' + JSON.stringify(action.payload));
            state.accessToken = action.payload.accessToken
        }
    }
})

export const {setToken} = authSlice.actions
export default authSlice.reducer