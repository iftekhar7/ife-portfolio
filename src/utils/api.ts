import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setMessageContent } from "./Slices/common";

const baseUrl =
  import.meta.env.VITE_API_BASE_URL || `${window.location.origin}/api/v1/`;

const rawBaseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

const baseQueryWithAuth = async (args: any, api: any, extraOptions: any) => {
  const result: any = await rawBaseQuery(args, api, extraOptions);
  const status = result?.meta?.response?.status || result?.error?.status;

  switch (status) {
    case 401:
      // You can redirect to login here
      break;
    case 400:
    case 404:
    case 500:
      api.dispatch(
        setMessageContent({
          isOpen: true,
          message:
            result?.error?.data?.errors ||
            result?.error?.data?.message ||
            "Something went wrong",
          type: "error",
        })
      );
      break;
    case 403:
      api.dispatch(
        setMessageContent({
          isOpen: true,
          message: "Access forbidden.",
          type: "error",
        })
      );
      break;
    case "FETCH_ERROR":
      api.dispatch(
        setMessageContent({
          isOpen: true,
          message: "Network or CORS error.",
          type: "error",
        })
      );
      break;
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithAuth,
  tagTypes: [ 'getAllCustomers'],
  endpoints: () => ({}),
});
