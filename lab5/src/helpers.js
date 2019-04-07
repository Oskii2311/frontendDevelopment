const isPlural = array => array.length > 1 && true;

const addCarsToDb = (db, carsData) => {
    carsData.forEach(car => {
        db.addCar(car);
    });
};

const showResults = (allCars, stillProducedCars, findedSuperCar) => {
    console.log(`All Cars: \n`, allCars);

    console.log(
        `Only super ${isPlural(findedSuperCar) ? 'Cars' : 'Car'} filtered: \n`,
        findedSuperCar
    );

    console.log(
        `Only still produced  ${
            isPlural(stillProducedCars) ? 'Cars' : 'Car'
        }: \n`,
        stillProducedCars
    );
};

export { addCarsToDb, showResults };
