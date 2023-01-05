import httpService from "./http.service";

const categoryEndpoint = "/category";

const categoryService = {
    fetchAll: async () => {
        const { data } = await httpService.get(categoryEndpoint);
        return data;
    }
};

export default categoryService;
