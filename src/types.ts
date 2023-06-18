export enum RoutePath {
  MainPage = "/",
  Step1Page = "/step1",
  Step2Page = "/step2",
  Step3Page = "/step3",
}

export enum Sex {
  Undefined = "Не выбрано",
  Man = "man",
  Woman = "woman",
}

export interface SignInFormValues {
  email: string;
  phone: string;
}

export interface FormStep1Values {
  nickname: string;
  name: string;
  sername: string;
  sex: Sex.Man | Sex.Woman;
}

export interface FormStep2Values {
  advantages: string[];
  checkBox: string[];
  radio: string;
}

export interface FormStep3Values {
  about: string;
}

export interface UserState {
  signInFormValues?: SignInFormValues;
  formStep1Values?: FormStep1Values;
  formStep2Values?: FormStep2Values;
  formStep3Values?: FormStep3Values;
}

export interface SubmitResponse {
  status: string;
  message: string;
}
