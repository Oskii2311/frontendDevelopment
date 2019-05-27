import React, { Component } from 'react';
import * as SC from './styles';
import CarList from '../../components/CarList/CarList';
import carApi from '../../utilities/services/CarApi.js/CarApi';
import CarDescription from '../../components/CarDescription/CarDescription';
import Select from '../CarForm/components/Select';
import brandOptionsFilter from './dummyData';

class Main extends Component {
    state = {
        cars: null,
        loading: false,
        car: null,
        search: '',
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

    handleEditCar = id => {
        this.props.history.push(`/edit-car/${id}`);
    };

    onSearchByBrand = async e => {
        this.setState({ ...this.state, search: e.target.value });
        let res;
        if (!e.target.value) {
            res = await carApi.fetchAllCars(e.target.value);
        } else {
            res = await carApi.filterCars(e.target.value);
        }
        this.setState({ ...this.state, cars: res });
    };

    render() {
        const { cars, loading, car, search } = this.state;

        return (
            <SC.MainLayoutContainer>
                <div>
                    <SC.SearchLabel htmlFor="filter">
                        search cars by brand
                    </SC.SearchLabel>
                    <Select
                        name="filter"
                        options={brandOptionsFilter}
                        onChange={this.onSearchByBrand}
                        value={search}
                    />
                </div>
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
                                onEditCar={this.handleEditCar}
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
