import httpService from "./http.service";

const productEndpoint = "/product";

const productService = {
    fetchAll: async () => {
        const { data } = await httpService.get(productEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(productEndpoint, payload);
        return data;
    }
};

export default productService;
