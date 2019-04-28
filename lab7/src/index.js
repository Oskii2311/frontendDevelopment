import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './containers/Main/Main';
import Database from './utilities/Database/Database';
import dummyData from './utilities/constants/dummyData/dummyData';

const localDB = new Database();

const initDummyData = () => {
    const data = dummyData;
    data.forEach(car => {
        localDB.addCar(car);
    });
};

initDummyData();

ReactDOM.render(
    <Main cars={localDB.allCars} />,
    document.getElementById('root'),
);
