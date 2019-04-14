var CarsDB = (function() {
    var state = {
        over: 'over',
        below: 'below',
    };
    var cars = [];

    function _findObjBy(type, value) {
        return cars
            .map(function(car) {
                return car[type];
            })
            .indexOf(value);
    }

    function _overFilter(array, value) {
        return array.filter(function(car) {
            return car.mocSilnika > value;
        });
    }

    function _belowFilter(array, value) {
        return array.filter(function(car) {
            return car.mocSilnika < value;
        });
    }

    function addCar(car) {
        if (_findObjBy('model', car.model) === -1) {
            cars.push(car);
            return 'added: ' + car.model;
        }
        return 'this model already exist in db';
    }

    function deleteCar(carModel) {
        var carIndex = _findObjBy('model', carModel);
        cars.splice(carIndex, 1);
        return 'removed: ' + carModel;
    }

    function updateCar(carModel, value, key) {
        var carIndex = _findObjBy('model', carModel);
        cars[carIndex][key] = value;
        return 'updated: ' + carModel;
    }

    function filterByKM(type, value) {
        var filtered;
        if (type === state.over) {
            filtered = _overFilter(cars, value);
        } else if (type === state.below) {
            filtered = _belowFilter(cars, value);
        } else {
            console.log('choose type "below" or "over"');
            filtered = null;
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
var classes = (function() {
    function Vehicle(
        id,
        marka,
        rokProdukcji,
        mocSilnika,
        pojemnoscSilnika,
        kolor
    ) {
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
    return {
        Car: Car,
    };
})();

(function initDbValues() {
    var Car = classes.Car;
    var bmwm3 = new Car(
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
        3,
        'fiat',
        1972,
        23,
        594,
        'bialy'
    );

    CarsDB.addCar(bmwm3);
    CarsDB.addCar(nissanz3);
    CarsDB.addCar(maluch);
})();

(function DbOperation() {
    var isPlural = function(array) {
        return array.length > 1 ? true : false;
    };

    var findedSuperCar = CarsDB.filterByKM('over', 300);
    var allCars = CarsDB.getAllCars();
    var stillProducedCars = CarsDB.filterByIsProduction();

    console.log(
        'All Cars: ',
        '\n',
        allCars,
        '\n \n',
        'Only super ' +
            (isPlural(findedSuperCar) ? 'Cars' : 'Car') +
            ' filtered: ',
        '\n',
        findedSuperCar,
        '\n \n',
        'Only still produced ' +
            (isPlural(stillProducedCars) ? 'Cars' : 'Car') +
            ': ',
        '\n',
        stillProducedCars,
        '\n \n'
    );
})();

(function CarClassActions() {
    var allCars = CarsDB.getAllCars();

    console.log('Car start engine: ');
    allCars[0].start();
    console.log('\n \n');
    console.log('Car switch on right signal: ');
    allCars[0].signal('right');
})();
