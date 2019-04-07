import DB from './DB';
import filterTypes from './constants/filterType';
import cars from './constants/data';
import { addCarsToDb, showResults } from './helpers';

(function init() {
    const db = new DB();
    addCarsToDb(db, cars);

    const findedSuperCar = db.filterByKM(filterTypes.over, 300);
    const { allCars } = db;
    const stillProducedCars = db.filterByIsProduction();

    showResults(findedSuperCar, allCars, stillProducedCars);
})();
