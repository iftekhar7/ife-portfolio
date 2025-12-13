import { api } from "../Utils/api";

const customers = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllCustomers: builder.query({
            query: (body) => ({
                url: 'account/api/v1/accounts/filter',
                method: 'POST',
                body,
            }),
            providesTags: ['getAllCustomers'],
        }),
        createCustomer: builder.mutation({
            query: (body) => ({
                url: 'account/api/v1/accounts',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['getAllCustomers']
        }),
        updateCustomer: builder.mutation({
            query: (body) => ({
                url: 'account/api/v1/accounts',
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['getAllCustomers']
        }),
        deleteCustomer: builder.mutation({
            query: ({ accountId }) => ({
                url: `account/api/v1/accounts/${accountId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['getAllCustomers']
        })
    }),
});

export const {
    useGetAllCustomersQuery,
    useLazyGetAllCustomersQuery,
    useCreateCustomerMutation,
    useUpdateCustomerMutation,
    useDeleteCustomerMutation
} = customers;

export default customers.reducer;


