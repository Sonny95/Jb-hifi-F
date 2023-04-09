import { createSlice, PayloadAction } from '@reduxjs/toolkit';

	
export type UserState = {
    isLogin: any;
  };

export type LoginPayload = {
    isLogin: boolean;
  };

const initialState: UserState = {
    isLogin: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction(state: UserState, action: PayloadAction<LoginPayload>){
        console.log('test')
        console.log(action.payload)
        state.isLogin = action.payload
    },
    logoutAction(state) {
        state.isLogin = false;
      },
    },
  })

const { reducer, actions } = userSlice;
export const { loginAction, logoutAction } = actions;
export default reducer;


 
