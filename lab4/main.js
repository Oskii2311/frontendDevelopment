var CarsDB = (function() {
    var cars = [];

    function findObjBy(type, value) {
        return cars
            .map(function(car) {
                return car[type];
            })
            .indexOf(value);
    }

    function addCar(car) {
        if (findObjBy('model', car.model) === -1) {
            cars.push(car);
            return console.log('added: ' + car.model);
        } else {
            return console.log('this model already exist in db');
        }
    }

    function deleteCar(carModel) {
        var carIndex = findObjBy('model', carModel);
        cars.splice(carIndex, 1);
        return console.log('removed: ' + carModel);
    }

    function updateCar(carModel, value, key) {
        var carIndex = findObjBy('model', carModel);
        cars[carIndex][key] = value;
        return console.log('updated: ' + carModel);
    }

    function filterByKM(type, value) {
        var filtered;
        if (type === 'over') {
            filtered = cars.filter(function(car) {
                return car.mocSilnika > value;
            });
        } else if (type === 'below') {
            filtered = cars.filter(function(car) {
                return car.mocSilnika > value;
            });
        } else {
            console.log('choose type "below" or "over"');
            return;
        }

        return filtered;
    }

    function filterByIsProduction() {
        var filtered = cars.filter(function(car) {
            return car.wPrdukcji;
        });

        return filtered;
    }

    function getAllCars() {
        return cars;
    }

    return {
        addCar: addCar,
        getAllCars: getAllCars,
        deleteCar: deleteCar,
        updateCar: updateCar,
        filterByIsProduction: filterByIsProduction,
        filterByKM: filterByKM,
    };
})();

function Vehicle(id, marka, rokProdukcji, mocSilnika, pojemnoscSilnika, kolor) {
    this.id = id;
    this.marka = marka;
    this.rokProdukcji = rokProdukcji;
    this.mocSilnika = mocSilnika;
    this.pojemnoscSilnika = pojemnoscSilnika;
    this.kolor = kolor;
}

function Car(
    model,
    nadwozie,
    wPrdukcji,
    id,
    marka,
    rokProdukcji,
    mocSilnika,
    pojemnoscSilnika,
    kolor
) {
    Vehicle.call(
        this,
        id,
        marka,
        rokProdukcji,
        mocSilnika,
        pojemnoscSilnika,
        kolor
    );
    this.model = model;
    this.nadwozie = nadwozie;
    this.wPrdukcji = wPrdukcji;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.varructor = Car;

Car.prototype.start = function() {
    return console.log('wrrrrr!');
};

Car.prototype.signal = function(direction) {
    return direction === 'left'
        ? console.log('tik in left site')
        : console.log('tik in right site');
};

var bmwm3 = new Car('m3', 'coupe', true, 1, 'bmw', 2011, 420, 3999, 'czerwony');
var nissanz3 = new Car(
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
var maluch = new Car(
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

CarsDB.addCar(bmwm3);
CarsDB.addCar(nissanz3);
CarsDB.addCar(maluch);

maluch.start();

var findedSuperCar = CarsDB.filterByKM('over', 300);
var allCars = CarsDB.getAllCars();
var stillProducedCars = CarsDB.filterByIsProduction();
console.log(findedSuperCar, allCars, stillProducedCars);
