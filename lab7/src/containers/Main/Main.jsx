import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as SC from './styles';
import CarList from '../../components/CarList/CarList';
import CarDescription from '../../components/CarDescription/CarDescription';
import Car from '../../utilities/models/Car/Car';

class Main extends Component {
    state = {
        car: null,
    };

    showDescription = null;

    componentDidMount() {
        this.showDescription = setInterval(() => {
            this.setState({ car: this.getRandomCar() });
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.showDescription);
    }

    getRandomCar = () => {
        const { cars } = this.props;
        const item = cars[Math.floor(Math.random() * cars.length)];

        return item;
    };

    render() {
        const { cars } = this.props;
        const { car } = this.state;
        return (
            <SC.MainLayoutContainer>
                <SC.BaseInfoContainer>
                    Car List:
                    <CarList cars={cars} />
                </SC.BaseInfoContainer>
                {car && (
                    <SC.DescriptionContainer>
                        <CarDescription car={car} />
                    </SC.DescriptionContainer>
                )}
            </SC.MainLayoutContainer>
        );
    }
}

Main.propTypes = {
    cars: PropTypes.arrayOf(PropTypes.shape(Car)).isRequired,
};

export default Main;
