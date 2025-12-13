import { api } from "../Utils/api";

const workspaces = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllWorkspace: builder.query({
      query: ({ accountId }) => ({
        url: `account/api/v1/workspaces/filters?accountId=${accountId}`,
        method: "GET",
      }),
      providesTags: (result, error, { accountId }) =>
        result?.data
          ? [
              ...result.data.map((w) => ({ type: "Workspaces", id: w.id })),
              { type: "Workspaces", id: accountId },
            ]
          : [{ type: "Workspaces", id: accountId }],
    }),
    createWorkspace: builder.mutation({
      query: (body) => ({
        url: `account/api/v1/workspaces`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: (result, error, { accountId }) => [
        { type: "Workspaces", id: accountId },
      ],
    }),
    upgradeWorkspaceVersion: builder.mutation({
      query: ({ payload, workspaceId }) => ({
        url: `/account/api/v1/workspaces/${workspaceId}/version`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: (result, error, { workspaceId }) => [
        { type: "UpdateVersion", id: workspaceId },
      ],
    }),
     upgradeWorkspaceAttachesAWS: builder.mutation({
      query: ({ payload, workspaceId }) => ({
        url: `/account/api/v1/workspaces/${workspaceId}/aws-attachments`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: (result, error, { workspaceId }) => [
        { type: "UpdateVersion", id: workspaceId },
      ],
    }),
    
    getEnvironmentVariables: builder.query({
      query: (workspaceId) => ({
        url: `/account/api/v1/workspaces/${workspaceId}/variables`,
        method: "GET",
      }),
      providesTags: (result, error, workspaceId) => [
        { type: "UpdateVersion", id: workspaceId },
      ],
    }),
    getPlatformVersion: builder.query({
      query: () => ({
        url: "/account/api/v1/platform/version",
        method: "GET",
      }),
    }),
    createEnvironmentVariables: builder.mutation({
      query: ({ payload, workspaceId }) => ({
        url: `/account/api/v1/workspaces/${workspaceId}/variables`,
        method: "POST",
        body: payload,
      }),
    }),
    updateEnvironmentVariables: builder.mutation({
      query: ({ payload, workspaceId }) => ({
        url: `/account/api/v1/workspaces/${workspaceId}/variables`,
        method: "PUT",
        body: payload,
      }),
    }),
    getDomainForCreatingEnvironment: builder.query({
      query: () => ({
        url: "account/api/v1/platform/domain",
        method: "GET",
      }),
    }),
    getWorkspaceById: builder.query({
      query: ({ id }) => ({
        url: `account/api/v1/workspaces/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, { id }) => {
        return [
          { type: "Workspaces", id },
          { type: "UpdateVersion", id },
        ];
      },
    }),
    deleteWorkspace: builder.mutation({
      query: ({ id }) => ({
        url: `account/api/v1/workspaces/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Workspaces", id }],
    }),
    getCurrentStatus: builder.query({
      query: ({ id }) => ({
        url: `account/api/v1/workspaces/${id}/current-status`,
        method: "GET",
      }),
    }),
    getWorkspaceByIdDNS: builder.query({
      query: ({ id }) => ({
        url: `account/api/v1/workspaces/${id}/dns/urls`,
        method: "GET",
      }),
      providesTags: (result, error, { id }) => {
        return [
          { type: "Workspaces", id },
          { type: "UpdateVersion", id },
        ];
      },
    }),
  }),
});

export const {
  useGetAllWorkspaceQuery,
  useCreateWorkspaceMutation,
  useUpgradeWorkspaceVersionMutation,
  useGetEnvironmentVariablesQuery,
  useGetPlatformVersionQuery,
  useCreateEnvironmentVariablesMutation,
  useUpdateEnvironmentVariablesMutation,
  useGetWorkspaceByIdQuery,
  useGetDomainForCreatingEnvironmentQuery,
  useDeleteWorkspaceMutation,
  useGetCurrentStatusQuery,
  useUpgradeWorkspaceAttachesAWSMutation,
  useGetWorkspaceByIdDNSQuery
} = workspaces;

export default workspaces.reducer;
