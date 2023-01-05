import httpService from "./http.service";

const companyEndpoint = "/company";

const companyService = {
    fetchAll: async () => {
        const { data } = await httpService.get(companyEndpoint);
        console.log(data);
        return data;
    }
};

export default companyService;
