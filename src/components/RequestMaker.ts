import axios, { AxiosResponse } from "axios";

export async function anotherGet<T>(address: string): Promise<T> {
  try {
    const res: AxiosResponse = await axios.get(address);
    return res.data as T;
  } catch (e) {
    console.error("axios error");
    throw new Error(e);
  }
}
