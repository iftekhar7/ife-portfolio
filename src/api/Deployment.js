import { api } from "../Utils/api";

const deployment = api.injectEndpoints({
  endpoints: (builder) => ({
    createDeploymentPlan: builder.mutation({
      query: (body) => ({
        url: "account/api/v1/deployments",
        method: "POST",
        body,
      }),
       invalidatesTags: (result, error, arg) => [
        { type: "DeploymentHistory", id: arg.workspaceId },
        { type: "Workspaces", id: arg.workspaceId }
      ],
    }),
    getDeploymentHistory: builder.query({
      query: ({ workspaceId, page, size }) => ({
        url: `account/api/v1/workspaces/${workspaceId}/deployments?page=${page}&size=${size}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => [
        { type: "DeploymentHistory", id: arg.workspaceId }, 
      ],
    }),
    getDeploymentDetails: builder.query({
      query: (deploymentId) => ({
        url: `account/api/v1/deployments/${deploymentId}`,
        method: "GET",
      }),
    }),
    getDeploymentByIdLogs: builder.query({
      query: (planId) => ({
        url: `account/api/v1/deployments/plans/${planId}`,
        method: "GET",
      }),
    }),
    getDeploymentById: builder.query({
      query: ({ id }) => ({
        url: `account/api/v1/deployments/${id}`,
        method: "GET",
      }),
    }),
    requestDeploymentApproval: builder.mutation({
      query: (body) => ({
        url: `account/api/v1/deployments/approval-requests`,
        method: "PUT",
        body,
      }),
    }),
    approveDeploymentPlan: builder.mutation({
      query: ({ body, id }) => ({
        url: `account/api/v1/deployments/${id}/apply`,
        method: "PUT",
        body,
      }),
    }),
    getDeploymentResources: builder.query({
      query: (planId) => ({
        url: `account/api/v1/deployments/plans/${planId}/output`,
        method: "GET",
      }),
    }),
    getAllDeploymentType: builder.query({
      query: (workspaceId) => ({
        url: `account/api/v1/deployments/types?workspaceId=${workspaceId}`,
        method: "GET",
      }),
    }),
    getDeploymentSuccessLogs: builder.query({
      query: (id) => ({
        url: `/account/api/v1/deployments/${id}/output`,
        method: "GET",
      }),
    }),
    getDeploymentFailLogs:builder.query({
      query:({id})=>({
        url:`account/api/v1/deployments/${id}/logs`,
        method:'GET'
      })
    })
  }),
});

export const {
  useCreateDeploymentPlanMutation,
  useGetDeploymentHistoryQuery,
  useGetDeploymentDetailsQuery,
  useGetDeploymentByIdLogsQuery,
  useGetDeploymentByIdQuery,
  useRequestDeploymentApprovalMutation,
  useApproveDeploymentPlanMutation,
  useGetDeploymentResourcesQuery,
  useGetAllDeploymentTypeQuery,
  useGetDeploymentSuccessLogsQuery,
  useGetDeploymentFailLogsQuery
} = deployment;

export default deployment.reducer;
