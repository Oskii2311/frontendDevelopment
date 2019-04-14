import Car from '../Car';

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
    3,
    'fiat',
    1972,
    23,
    594,
    'bialy'
);

const Cars = [bmwm3, nissanz3, maluch];

export default Cars;
