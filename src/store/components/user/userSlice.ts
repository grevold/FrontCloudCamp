import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  FormStep1Values,
  FormStep2Values,
  FormStep3Values,
  SignInFormValues,
  UserState,
} from "../../../types";
import { userAsyncThunk } from "./userAsyncThunk";

const initialState = {} as UserState;

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addSignInFormValues(userState, action: PayloadAction<SignInFormValues>) {
      return { ...userState, signInFormValues: action.payload };
    },
    addStep1InFormValues(userState, action: PayloadAction<FormStep1Values>) {
      return { ...userState, formStep1Values: action.payload };
    },
    addStep2InFormValues(userState, action: PayloadAction<FormStep2Values>) {
      const { advantages, radio, checkBox } = action.payload;
      return {
        ...userState,
        formStep2Values: {
          advantages: [...advantages],
          radio,
          checkBox: [...checkBox],
        },
      };
    },
    addStep3InFormValues(userState, action: PayloadAction<FormStep3Values>) {
      return { ...userState, formStep3Values: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userAsyncThunk.rejected, (userState, action) => {
      return userState;
    });
    builder.addCase(
      userAsyncThunk.fulfilled,
      (userState, action: PayloadAction<any>) => {
        return userState;
      }
    );
  },
});

export const userStoreActions = slice.actions;

export const userReducer = slice.reducer;
