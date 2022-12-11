import { AxiosInstance } from 'axios';
export class Repository {

    constructor(private axios: AxiosInstance) {}

    async request(data) {
        const response = await this.axios.post('/', data)

        if(response?.data?.data) return response.data.data;
    }
}