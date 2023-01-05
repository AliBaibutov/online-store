import httpService from "./http.service";

const subcategoryEndpoint = "/subcategory";

const subcategoryService = {
    fetchAll: async () => {
        const { data } = await httpService.get(subcategoryEndpoint);
        console.log(data);
        return data;
    }
};

export default subcategoryService;
