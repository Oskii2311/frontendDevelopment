var car1 = {
    id: 1,
    marka: 'BMW',
    model: 'm3',
    nadwozie: 'coupe',
    rokProdukcji: '2013',
    mocSilnika: 420,
    pojemnoscSilnika: 3999,
    kolor: 'niebeski',
    wPrdukcji: false,
    start: function () {
        console.log('wrrrr!');
    }
}

var car2 = {
    id: 2,
    marka: 'Renault',
    model: 'Megan RS',
    nadwozie: 'hatchback',
    rokProdukcji: '2016',
    mocSilnika: 265,
    pojemnoscSilnika: 1998,
    kolor: 'czerwony',
    wPrdukcji: true,
    start: function () {
        console.log('wrrrr!');
    }
}

var car3 = {
    id: 3,
    marka: 'Renault',
    model: 'clio Sport',
    nadwozie: 'hatchback',
    rokProdukcji: '2005',
    mocSilnika: 182,
    pojemnoscSilnika: 1998,
    kolor: 'biały',
    wPrdukcji: false,
    start: function () {
        console.log('wrrrr!');
    }
}

var car4 = {
    id: 4,
    marka: 'Mercedes',
    model: 'e63 AMG',
    nadwozie: 'hatchback',
    rokProdukcji: '2009',
    mocSilnika: 514,
    pojemnoscSilnika: 6208,
    kolor: 'srebrny',
    wPrdukcji: false,
    start: function () {
        console.log('wrrrr!');
    }
}

var cars = [car1, car2, car3];
addCar(car4)

function addCar(car) {
    if (findObjBy('model', car.model) === -1) {
        cars.push(car);
        console.log('added: ' + car.model);
    } else {
        return console.log('this model already exist in db')
    }
}

function findObjBy(type, value) {
    return cars.map(function (car) {
        return car[type];
    }).indexOf(value);
}


function deleteCar(carModel) {
    var carIndex = findObjBy('model', carModel);
    cars.splice(carIndex, 1);
    console.log('removed: ' + carModel);
}

function updateCar(carModel, value, key) {
    var carIndex = findObjBy('model', carModel);
    cars[carIndex][key] = value;
    console.log('updated: ' + carModel);
}

function getAllCars() {
    console.log(cars);
}

function filterByKM(type, value) {
    var filtered;
    if (type === 'over') {

        filtered = cars.filter(function (car) {
            return car.mocSilnika > value
        })
    } else if (type === 'below') {
        filtered = cars.filter(function (car) {
            return car.mocSilnika > value
        })
    } else {
        console.log('choose type "below" or "over"');
        return;
    }
    console.log(filtered);
}


function filterByBrand(brand) {
    var filtered = cars.filter(function (car) {
        return car.marka.toLocaleLowerCase() === brand.toLocaleLowerCase();
    });
    console.log(filtered);
}

console.log(cars)

