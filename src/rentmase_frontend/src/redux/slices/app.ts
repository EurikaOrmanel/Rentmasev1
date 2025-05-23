import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LocationType } from "../types";
import { CountryData } from "../../pages/airtime/types";
import { CashbackType } from "../../../../declarations/rentmase_backend/rentmase_backend.did";

type TokenBalance = {
  balance: number;
  principal: String;
}

export interface GlobalState {
  location: LocationType | null;
  audience: string;
  countries: CountryData[] | null;
  tokenLiveData: any;
  locationStatus: string | null;
  tokenBalance : TokenBalance | null;
  cashback: CashbackType | null;
}

const initialState: GlobalState = {
  location: null,
  audience: "topups-sandbox",
  countries: null,
  tokenLiveData: null,
  locationStatus: null,
  tokenBalance: null,
  cashback: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LocationType | null>) => {
      state.location = action.payload;
    },
    setAudience: (state, action: PayloadAction<string>) => {
      state.audience = action.payload;
    },
    setCountries: (state, action: PayloadAction<CountryData[]>) => {
      state.countries = action.payload;
    },
    setTokenLiveData: (state, action: PayloadAction<any>) => {
      state.tokenLiveData = action.payload;
    },
    setLocationStatus: (state, action: PayloadAction<string | null>) => {
      state.locationStatus = action.payload;
    },
    setTokenBalance: (state, action: PayloadAction<TokenBalance>) => {
      state.tokenBalance = action.payload;
    },
    setCashback: (state, action: PayloadAction<CashbackType | null>) => {
      state.cashback = action.payload;
    }
  },
});

export const { setLocation, setAudience , setCountries, setTokenLiveData, setLocationStatus, setTokenBalance, setCashback } = appSlice.actions;

export default appSlice.reducer;
