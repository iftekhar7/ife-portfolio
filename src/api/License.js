import { api } from "../Utils/api";

const license = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllFeatureByWorkspaceId: builder.query({
      query: ({workspaceId}) => ({
        url: `license/api/v1/features?workspaceId=${workspaceId}`,
        method: "GET",
      }), 
    }),
    assignLicense: builder.mutation({
      query: (body) => ({
        url: `license/api/v1/licenses`,
        method: "PUT",
        body: body,
      }), 
    }),
  }),
});

export const { useGetAllFeatureByWorkspaceIdQuery, useAssignLicenseMutation } =
  license;

export default license.reducer;
