import { ApiEndpoints } from "@/constants/api-endpoints";

export type Layout = Readonly<{
  children: React.ReactNode;
}>;

export type ApiEndPoint = (typeof ApiEndpoints)[keyof typeof ApiEndpoints];
