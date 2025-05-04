import { baseApi } from "../api/baseApi";

export interface Portfolio {
  _id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  categories: string;
}

export interface CreatePortfolioPayload {
  title: string;
  description: string;
  image: string;
  link: string;
  categories: string;
}

export interface UpdatePortfolioPayload {
  _id: string;
  title?: string;
  description?: string;
  image?: string;
  link?: string;
  categories?: string;
}

export const portfolioApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ["Portfolio"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      addPortfolio: builder.mutation<Portfolio, CreatePortfolioPayload>({
        query: (newPortfolio) => ({
          url: "/portfolio/add",
          method: "POST",
          body: newPortfolio,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }),
        invalidatesTags: ["Portfolio"],
      }),

      getAllPortfolio: builder.query<Portfolio[], void>({
        query: () => "/portfolio",
        transformResponse: (response: {
          success: boolean;
          message: string;
          data: Portfolio[];
        }) => response.data,
        providesTags: ["Portfolio"],
      }),

      getSinglePortfolio: builder.query<Portfolio, string>({
        query: (id) => `/portfolio/${id}`,
        transformResponse: (response: {
          success: boolean;
          message: string;
          data: Portfolio;
        }) => response.data,
        providesTags: (_result, _error, id) => [{ type: "Portfolio", id }],
      }),

      updatePortfolio: builder.mutation<
        UpdatePortfolioPayload,
        Partial<UpdatePortfolioPayload>
      >({
        query: (updatedPortfolio) => ({
          url: `/portfolio/${updatedPortfolio._id}`,
          method: "PATCH",
          body: updatedPortfolio,
        }),
        invalidatesTags: (_result, _error, arg) => [
          { type: "Portfolio", id: arg._id },
          "Portfolio",
        ],
      }),

      deletePortfolio: builder.mutation<Portfolio, string>({
        query: (id) => ({
          url: `/portfolio/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Portfolio"],
      }),
    }),
  });

export const {
  useGetAllPortfolioQuery,
  useGetSinglePortfolioQuery,
  useAddPortfolioMutation,
  useUpdatePortfolioMutation,
  useDeletePortfolioMutation,
} = portfolioApi;
