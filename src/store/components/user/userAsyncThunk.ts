import { createAsyncThunk } from "@reduxjs/toolkit";
import { SubmitResponse, UserState } from "../../../types";
import axios from "axios";

export const userAsyncThunk = createAsyncThunk<SubmitResponse, UserState>(
  "user/auth",
  async function (userState, thunkAPI) {
    const {
      signInFormValues,
      formStep1Values,
      formStep2Values,
      formStep3Values,
    } = userState;
    if (!signInFormValues) {
      return thunkAPI.rejectWithValue(
        "Вы ввели неверный номер телефона или email"
      );
    }
    if (!formStep1Values) {
      return thunkAPI.rejectWithValue("Вы неверно заполнили форму на шаге1");
    }
    if (!formStep2Values) {
      return thunkAPI.rejectWithValue("Вы неверно заполнили форму на шаге2");
    }
    if (!formStep3Values) {
      return thunkAPI.rejectWithValue("Вы неверно заполнили форму на шаге3");
    }

    try {
      const response = await axios<SubmitResponse>({
        method: "post",
        url: "https://api.sbercloud.ru/content/v1/bootcamp/frontend",
        data: {
          ...signInFormValues,
          ...formStep1Values,
          ...formStep2Values,
          ...formStep3Values,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Не удалось осуществить запрос. Повторите попытку позже."
      );
    }
  }
);
