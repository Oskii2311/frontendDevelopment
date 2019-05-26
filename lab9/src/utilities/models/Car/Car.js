import Vehicle from '../Vehicle/Vehicle';

class Car extends Vehicle {
    constructor(
        model,
        nadwozie,
        wPrdukcji,
        id,
        marka,
        rokProdukcji,
        mocSilnika,
        pojemnoscSilnika,
        kolor,
    ) {
        super(id, marka, rokProdukcji, mocSilnika, pojemnoscSilnika, kolor);
        this.model = model;
        this.nadwozie = nadwozie;
        this.wPrdukcji = wPrdukcji;
    }

    static signal(direction) {
        return direction === 'left'
            ? console.log('tik in left site')
            : console.log('tik in right site');
    }
}

export default Car;
