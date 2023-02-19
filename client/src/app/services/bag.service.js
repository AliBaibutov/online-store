import httpService from "./http.service";

const bagEndpoint = "/bag/";

const bagService = {
    fetchAll: async () => {
        const { data } = await httpService.get(bagEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(bagEndpoint, payload);
        return data;
    },
    remove: async (bagId) => {
        const { data } = await httpService.delete(bagEndpoint + bagId);
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(
            bagEndpoint + localStorage.getItem("bagId"),
            payload
        );
        return data;
    }
};

export default bagService;
