import { Component } from 'react';
import './App.scss';
import Layout from './components/Layout/Layout';
import { RateContext } from './context/RateContext'
import CHF from './image/CHF.png'
import CNY from './image/CNY.png'
import EUR from './image/EUR.png'
import GBP from './image/GBP.png'
import JPY from './image/JPY.png'
import RUB from './image/RUB.png'
import USD from './image/USD.png'
import axios from 'axios';

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            base: 'EUR',
            rate: '',
            date: '',
            currency: {
                CHF: {name: 'Китайский Юань', flag: CHF, course: ''},
                CNY: {name: 'Швейцарский Франк', flag: CNY, course: ''},
                EUR: {name: 'Евро', flag: EUR, course: ''},
                GBP: {name: 'Фунт Стерлинга', flag: GBP, course: ''},
                JPY: {name: 'Японская Ена', flag: JPY, course: ''},
                RUB: {name: 'Российский Рубль', flag: RUB, course: ''},
                USD: {name: 'Доллар США', flag: USD, course: ''},
            },
            inputValue: 100,
            currencyValue: 'RUB',
            result: null,
            sample: {
                base: 'EUR',
                base2: 'JPY',
                date: '',
                course: null,
            },
            sampleList: '',
        }
    }

    baseHandler = e => {
        this.setState({sample: {...this.state.sample, base: e.target.value}})
    }

    base2Handler = e => {
        this.setState({sample: {...this.state.sample, base2: e.target.value}})
    }

    sampleDateHandler = e => {
        this.setState({sample: {...this.state.sample, date: e.target.value}})
    }

    inputValueHandler = e => {
        this.setState({
            inputValue: e.target.value,
            result: null,
        })
    }

    currencyValueHandler = e => {
        this.setState({
            currencyValue: e.target.value,
            result: null,
        })
    }

    calculatorHandler = async val => {
        await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.REACT_APP_API_KEY}&base=${this.state.base}&symbols=GBP,JPY,EUR,CHF,CNY,RUB,USD`)
        .then(res => res.json())
        .then(data => {
            let result = data.rates[val] * this.state.inputValue
            this.setState({result})
            return result
        })
    }

    dataWrite = async () => {
        const sample = await fetch(
            `http://api.exchangeratesapi.io/v1/${this.state.sample.date}?access_key=${process.env.REACT_APP_API_KEY}&base=${this.state.sample.base}&symbols=GBP,JPY,EUR,CHF,CNY,RUB,USD`
        )
        .then(resp => resp.json())
        .then(data => {
            const sample = {...this.state.sample, course: data.rates[this.state.sample.base2]}
            this.setState(sample)
            return sample
        })

        await axios.post(
            'https://react-exchange-rates-default-rtdb.firebaseio.com/sample.json',
            sample
        )

        await axios(
            'https://react-exchange-rates-default-rtdb.firebaseio.com/sample.json',
        )
        .then(resp => {
            this.setState({sampleList: resp.data})
        })
    }

    sampleRemove = async id => {
        const sampleList = {...this.state.sampleList}
        delete sampleList[id]
        this.setState({sampleList})
        await axios.delete(`https://react-exchange-rates-default-rtdb.firebaseio.com/sample/${id}.json`)
    }

    componentDidMount () {
        // fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.REACT_APP_API_KEY}&base=${this.state.base}&symbols=GBP,JPY,EUR,CHF,CNY,RUB,USD`)
        // .then(resp => resp.json())
        // .then(data => {
        //     const rates = Object.keys(this.state.currency)
        //     const currency = {...this.state.currency}
        //     rates.forEach(rate => currency[rate].course = data.rates[rate])
        //     this.setState({
        //         rate: data.base,
        //         date: data.date,
        //         currency,
        //     })
        // })
        // .catch(e => console.log(e))
        // axios(
        //     'https://react-exchange-rates-default-rtdb.firebaseio.com/sample.json',
        // )
        // .then(resp => {
        //     this.setState({sampleList: resp.data})
        // })
    }

    render () {
        return (
            <RateContext.Provider value={{
                state: this.state,
                inputValueHandler: this.inputValueHandler,
                currencyValueHandler: this.currencyValueHandler,
                calculatorHandler: this.calculatorHandler,
                baseHandler: this.baseHandler,
                base2Handler: this.base2Handler,
                sampleDateHandler: this.sampleDateHandler,
                dataWrite: this.dataWrite,
                sampleRemove: this.sampleRemove,
            }}>
                <Layout /> 
            </RateContext.Provider>
        )
    }
}

export default App
