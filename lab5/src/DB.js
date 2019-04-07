import filterType from './constants/filterType';

class DB {
    constructor(cars = []) {
        this.cars = cars;
    }

    static overFilter(array, value) {
        return array.filter(car => car.mocSilnika > value);
    }

    static belowFilter(array, value) {
        return array.filter(car => car.mocSilnika < value);
    }

    findCarBy(type, value) {
        return this.cars.map(car => car[type]).indexOf(value);
    }

    addCar(car) {
        if (this.findCarBy('model', car.model) === -1) {
            this.cars.push(car);

            return console.log(`added: ${car.model}`);
        }

        return console.log('this model already exist in db');
    }

    deleteCar(carModel) {
        const carIndex = this.findCarBy('model', carModel);
        this.cars.splice(carIndex, 1);

        return console.log(`removed: ${carModel}`);
    }

    updateCar(carModel, value, key) {
        const carIndex = this.findCarBy('model', carModel);
        this.cars[carIndex][key] = value;

        return console.log(`updated: ${carModel}`);
    }

    filterByKM(type, value) {
        let filtered;
        if (type === filterType.over) {
            filtered = DB.overFilter(this.cars, value);
        } else if (type === filterType.below) {
            filtered = DB.belowFilter(this.cars, value);
        } else {
            console.log(
                `Choose type ${filterType.over} or ${filterType.below}`
            );
            filtered = null;
        }

        return filtered;
    }

    filterByIsProduction() {
        const filtered = this.cars.filter(car => car.wPrdukcji);

        return filtered;
    }

    get allCars() {
        return this.cars;
    }
}

export default DB;
