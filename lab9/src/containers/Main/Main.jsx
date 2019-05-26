import React, { Component } from 'react';
import * as SC from './styles';
import CarList from '../../components/CarList/CarList';
import carApi from '../../utilities/services/CarApi.js/CarApi';
import CarDescription from '../../components/CarDescription/CarDescription';
import CarForm from '../CarForm/CarForm';

class Main extends Component {
    state = {
        cars: null,
        loading: false,
        car: null,
    };

    async componentDidMount() {
        this.setState({ loading: true });
        const res = await carApi.fetchAllCars();
        this.setState({ cars: res, loading: false });
    }

    handleItemClick = car => {
        this.setState({ car });
    };

    handleItemHide = () => {
        this.setState({ car: null });
    };

    render() {
        const { cars, loading, car } = this.state;
        return (
            <SC.MainLayoutContainer>
                {!loading ? (
                    <SC.BaseInfoContainer>
                        Car List:
                        {cars && (
                            <CarList
                                cars={cars}
                                onCarClick={this.handleItemClick}
                                onCarHide={this.handleItemHide}
                            />
                        )}
                    </SC.BaseInfoContainer>
                ) : (
                    <div>Loading...</div>
                )}
                {car && (
                    <SC.DescriptionContainer>
                        <CarDescription car={car} />
                    </SC.DescriptionContainer>
                )}
                <CarForm />
            </SC.MainLayoutContainer>
        );
    }
}
export default Main;
