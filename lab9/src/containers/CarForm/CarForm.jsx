import React, { Component } from 'react';
import * as SC from './styles';
import carApi from '../../utilities/services/CarApi.js/CarApi';
import Input from './components/Input';
import Select from './components/Select';
import RadioInput from './components/RadioInput';
import { bodyOptions, brandOptions, isStillProducedOptions } from './dummyData';

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
        if (stateWithError.isValid) {
            await carApi.createCar(this.state);
            return this.props.history.push('/');
        }
    };

    render() {
        const { errors } = this.state;
        return (
            <SC.Container>
                <SC.Form onSubmit={this.handleSubmit}>
                    <h2>Add Car</h2>
                    <Input
                        onChange={this.handleChange}
                        name="model"
                        placeholder="model"
                        error={errors.model}
                        value={this.state['model'] || ''}
                    />

                    <Select
                        onChange={this.handleChange}
                        name="brand"
                        options={brandOptions}
                        value={this.state['brand'] || ''}
                        error={errors.brand}
                    />
                    <Select
                        onChange={this.handleChange}
                        name="body"
                        options={bodyOptions}
                        value={this.state['body'] || ''}
                        error={errors.body}
                    />
                    <Input
                        onChange={this.handleChange}
                        name="yearOfProduction"
                        placeholder="year of production"
                        error={errors.yearOfProduction}
                        value={this.state['yearOfProduction'] || ''}
                    />
                    <Input
                        onChange={this.handleChange}
                        name="enginePower"
                        placeholder="engine power"
                        error={errors.enginePower}
                        value={this.state['enginePower'] || ''}
                    />
                    <Input
                        onChange={this.handleChange}
                        name="engineCapacity"
                        placeholder="engine capacity"
                        error={errors.engineCapacity}
                        value={this.state['engineCapacity'] || ''}
                    />
                    <Input
                        onChange={this.handleChange}
                        name="color"
                        placeholder="color"
                        error={errors.color}
                        value={this.state['color'] || ''}
                    />
                    <h3>Is car still in production?</h3>
                    <RadioInput
                        name="isStillProduced"
                        options={isStillProducedOptions}
                        onChange={this.handleChange}
                        error={errors.isStillProduced}
                    />
                    <SC.Button type="submit">Create Car</SC.Button>
                </SC.Form>
            </SC.Container>
        );
    }
}

export default CarForm;
