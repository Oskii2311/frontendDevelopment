import axios from 'axios';

class CarApi {
    url = 'http://localhost:5000/api/v1';

    fetchAllCars = async () => {
        const res = await axios.get(`${this.url}/cars`);

        return res.data.cars;
    };

    createCar = async car => {
        const res = await axios.post(`${this.url}/car`, {
            ...car,
        });
        return res;
    };
}

const carApi = new CarApi();

export default carApi;
