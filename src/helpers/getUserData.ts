import axios, { AxiosResponse } from "axios";
import { UserInfo } from "../types/UserInfo";

export const getUserData = async (username: string): Promise<UserInfo | null> => {
  let res: AxiosResponse | null;

  try {
    res = await axios.get(`https://bio.torre.co/api/bios/${username}`);
  } catch (err) {
    return null;
  }

  return res?.data;
};
