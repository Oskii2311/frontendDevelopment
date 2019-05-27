import axios from 'axios';

class CarApi {
    url = 'http://localhost:5000/api/v1';

    fetchAllCars = async () => {
        const res = await axios.get(`${this.url}/cars`);

        return res.data.cars;
    };

    getCar = async id => {
        const res = await axios.get(`${this.url}/car/${id}`);

        return res.data.car;
    };

    updateCar = async (car, id) => {
        const res = await axios.put(`${this.url}/car/${id}`, {
            ...car,
        });

        return res;
    };

    createCar = async car => {
        const res = await axios.post(`${this.url}/car`, {
            ...car,
        });
        return res;
    };

    deleteCar = async id => {
        const res = await axios.delete(`${this.url}/car/${id}`);
        return res;
    };

    filterCars = async brand => {
        const res = await axios.get(`${this.url}/cars/filter?brand=${brand}`);

        return res.data.filteredCar;
    };
}

const carApi = new CarApi();

export default carApi;
