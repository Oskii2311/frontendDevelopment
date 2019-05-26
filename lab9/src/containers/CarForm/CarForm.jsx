import React, { Component } from 'react';
import * as SC from './styles';
import carApi from '../../utilities/services/CarApi.js/CarApi';
import Error from '../../components/Error/Error';

class CarForm extends Component {
    state = {
        model: null,
        brand: null,
        body: null,
        yearOfProduction: null,
        enginePower: null,
        color: null,
        isStillProduced: null,
        engineCapacity: null,
        errors: {},
        isValid: null,
    };

    handleChange = e => {
        const {
            target: { name, value },
        } = e;

        this.setState({
            ...this.state,
            [name]: value,
            errors: { ...this.state.errors, [name]: false },
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const stateWithError = { ...this.state };
        stateWithError.isValid = true;
        Object.entries(stateWithError).forEach(([key, value]) => {
            if (key !== 'errors' && key !== 'isValid' && !value) {
                stateWithError.errors[key] = true;
                stateWithError.isValid = false;
            }
        });
        this.setState(stateWithError);
        console.log(this.state);
        if (this.state.isValid) {
            await carApi.createCar(this.state);
        }
        return;
    };
    render() {
        const { errors } = this.state;
        return (
            <SC.Form onSubmit={this.handleSubmit}>
                <h1>Add Car</h1>
                <input
                    onChange={this.handleChange}
                    name="model"
                    placeholder="model"
                />
                {errors.model && <Error text="this field is required" />}
                <select onChange={this.handleChange} name="brand">
                    <option />
                    <option>nissan</option>
                    <option>fiat</option>
                    <option>bmw</option>
                    <option>mercedes</option>
                    <option>ford</option>
                </select>
                {errors.brand && <Error text="this field is required" />}

                <select onChange={this.handleChange} name="body">
                    <option />
                    <option>coupe</option>
                    <option>combi</option>
                    <option>sedan</option>
                    <option>hatchBack</option>
                </select>
                {errors.body && <Error text="this field is required" />}

                <input onChange={this.handleChange} name="yearOfProduction" />
                {errors.yearOfProduction && (
                    <Error text="this field is required" />
                )}

                <input onChange={this.handleChange} name="enginePower" />
                {errors.enginePower && <Error text="this field is required" />}

                <input onChange={this.handleChange} name="engineCapacity" />
                {errors.engineCapacity && (
                    <Error text="this field is required" />
                )}

                <input onChange={this.handleChange} name="color" />
                {errors.color && <Error text="this field is required" />}

                <h3>Is car still in production?</h3>
                <SC.RadioContainer>
                    <input
                        onChange={this.handleChange}
                        type="radio"
                        name="isStillProduced"
                    />
                    <label htmlFor="isStillProduced">yes</label>
                </SC.RadioContainer>
                <SC.RadioContainer>
                    <input
                        onChange={this.handleChange}
                        type="radio"
                        name="isStillProduced"
                    />
                    <label htmlFor="isStillProduced">no</label>
                </SC.RadioContainer>
                {errors.isStillProduced && (
                    <Error text="this field is required" />
                )}

                <button type="submit">Create Car</button>
            </SC.Form>
        );
    }
}

export default CarForm;
