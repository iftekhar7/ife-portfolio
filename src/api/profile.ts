import { api } from "../utils/api";

const profile = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: `api/v1/profile`,
        method: "GET",
      }), 
    }), 
  }),
});

export const {useGetProfileQuery } =
  profile;

export default profile.reducer;
