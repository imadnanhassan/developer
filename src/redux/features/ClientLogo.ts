import { baseApi } from "../api/baseApi";

export interface ClientLogo {
  name: string;
  image: string;
}

type UpdateClientLogoPayload = {
  _id?: string;
  name?: string;
  image?: string;
  link?: string;
};

export const clientLogoApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ["ClientLogo"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getClientLogos: builder.query<ClientLogo[], void>({
        query: () => "/client-logo",
        transformResponse: (response: {
          success: boolean;
          message: string;
          data: ClientLogo[];
        }) => response.data,
        providesTags: [{ type: "ClientLogo" as const }],
      }),

      getSingleClientLogo: builder.query<ClientLogo, string>({
        query: (id) => `/client-logo/${id}`,
        providesTags: (_result, _error, id) => [
          { type: "ClientLogo" as const, id },
        ],
      }),

      addClientLogo: builder.mutation<ClientLogo, FormData>({
        query: (formData) => ({
          url: "/client-logo/add",
          method: "POST",
          body: formData,
        }),
        invalidatesTags: ["ClientLogo"], // Invalidates list on add
      }),

      updateClientLogo: builder.mutation<
        UpdateClientLogoPayload,
        Partial<UpdateClientLogoPayload>
      >({
        query: (updatedClientLogo) => ({
          url: `/client-logo/${updatedClientLogo._id}`,
          method: "PATCH",
          body: updatedClientLogo,
        }),
        invalidatesTags: (_result, _error, arg) => [
          { type: "ClientLogo", id: arg._id },
          "ClientLogo",
        ],
      }),

      deleteClientLogo: builder.mutation<ClientLogo, string>({
        query: (id) => ({
          url: `/client-logo/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: [
          { type: "ClientLogo", id: "LIST" },
          { type: "ClientLogo", id: "ALL" },
        ],
      }),
    }),
  });

export const {
  useGetClientLogosQuery,
  useAddClientLogoMutation,
  useUpdateClientLogoMutation,
  useDeleteClientLogoMutation,
} = clientLogoApi;
