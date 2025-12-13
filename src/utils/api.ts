import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setMessageContent } from "./Slices/common";
// import { getAccessToken } from "./MsLoginUtils/useAccessToken"; 
const baseUrl = window?.APP_CONFIG?.API_BASE_URL; 

const baseQueryWithAuth = async (args: any, api:any, extraOptions:any) => {
  let token;

  try {
    // token = await getAccessToken();
  } catch (err) {
    console.warn("Error getting access token:", err);
  }

  const rawBaseQuery = fetchBaseQuery({ baseUrl });

  if (typeof args === "string") {
    args = { url: args };
  }

  args.headers = {
    ...args.headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const result = await rawBaseQuery(args, api, extraOptions);

  switch (result?.meta?.response?.status || result?.error?.status) {
    case 401:
      // logoutUser();
      break;

    case 400:
    case 500:
    case 404:
      api.dispatch(
        setMessageContent({
          isOpen: true,
          message: Array.isArray(result?.error?.data?.errors)
            ? result.error.data.errors[0]
            : result?.error?.data?.errors ||
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
          message:
            "Access forbidden. You are not authorized to perform this action.",
          type: "error",
        })
      );
      break;

    case "FETCH_ERROR":
      api.dispatch(
        setMessageContent({
          isOpen: true,
          message:
            "Network or CORS error. Please check your connection or API settings.",
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
  tagTypes: [""],
  endpoints: () => ({}),
});
