import DB from './DB';
import Car from './Car';
import filterTypes from './constants/filterType';

const bmwm3 = new Car(
    'm3',
    'coupe',
    true,
    1,
    'bmw',
    2011,
    420,
    3999,
    'czerwony'
);

const nissanz3 = new Car(
    'z3',
    'coupe',
    false,
    2,
    'nissan',
    2011,
    270,
    3999,
    'niebieski'
);

const maluch = new Car(
    '126p',
    'hatchback',
    false,
    2,
    'fiat',
    1972,
    23,
    594,
    'bialy'
);

const db = new DB();

db.addCar(bmwm3);
db.addCar(maluch);
db.addCar(nissanz3);

const isPlural = array => array.length > 1 && true;

const findedSuperCar = db.filterByKM(filterTypes.over, 300);
const { allCars } = db;
const stillProducedCars = db.filterByIsProduction();

console.log(`All Cars:\n`, allCars);
console.log(
    `Only super ${isPlural(findedSuperCar) ? 'Cars' : 'Car'} filtered: `,
    findedSuperCar
);
console.log(
    `Only still produced  ${isPlural(stillProducedCars) ? 'Cars' : 'Car'}:`,
    stillProducedCars
);
