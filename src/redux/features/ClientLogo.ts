import { baseApi } from "../api/baseApi";

export interface ClientLogo {
  name: string;
  image: string;
}

type UpdateClientLogoPayload = {
  _id?: string;
  name?: string;
  image?: string;
};

export const clientLogoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClientLogos: builder.query<ClientLogo[], void>({
      query: () => "/client-logo",
      transformResponse: (response: {
        success: boolean;
        message: string;
        data: ClientLogo[];
      }) => response.data,
    }),
    addClientLogo: builder.mutation<ClientLogo, FormData>({
      query: (formData) => ({
        url: "/client-logo/add",
        method: "POST",
        body: formData,
      }),
    }),
    updateClientLogo: builder.mutation<
      UpdateClientLogoPayload,
      Partial<UpdateClientLogoPayload>
    >({
      query: (updatedClientLogo) => ({
        url: `/client-logos/${updatedClientLogo._id}`,
        method: "PATCH",
        body: updatedClientLogo,
      }),
    }),
    deleteClientLogo: builder.mutation<ClientLogo, string>({
      query: (id) => ({
        url: `/client-logos/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetClientLogosQuery,
  useAddClientLogoMutation,
  useUpdateClientLogoMutation,
  useDeleteClientLogoMutation,
} = clientLogoApi;
