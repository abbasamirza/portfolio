import { HttpStatusCodes } from "@/constants/http";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isResponseStatusOK = (response: Response) => {
  return response?.status === HttpStatusCodes.OK;
};
