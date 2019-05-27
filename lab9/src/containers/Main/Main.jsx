import React, { Component } from 'react';
import * as SC from './styles';
import CarList from '../../components/CarList/CarList';
import carApi from '../../utilities/services/CarApi.js/CarApi';
import CarDescription from '../../components/CarDescription/CarDescription';

class Main extends Component {
    state = {
        cars: null,
        loading: false,
        car: null,
    };

    componentDidMount() {
        this.fetchCars();
    }

    fetchCars = async () => {
        this.setState({ loading: true });
        const res = await carApi.fetchAllCars();
        this.setState({ cars: res, loading: false });
    };

    handleItemClick = car => {
        this.setState({ car });
    };

    handleItemHide = () => {
        this.setState({ car: null });
    };

    handleItemDelete = async id => {
        await carApi.deleteCar(id);
        this.fetchCars();
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
                                onCarDelete={this.handleItemDelete}
                                isCarDescriptionVisible={!!car}
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
            </SC.MainLayoutContainer>
        );
    }
}
export default Main;
