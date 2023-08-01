import { Component } from 'react';
import './App.scss';
import Layout from './components/Layout/Layout';
import CHF from './image/CHF.png'
import CNY from './image/CNY.png'
import EUR from './image/EUR.png'
import GBP from './image/GBP.png'
import JPY from './image/JPY.png'
import RUB from './image/RUB.png'
import USD from './image/USD.png'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            base: 'USD',
            rate: '',
            date: '',
            currency: {
                CHF: {name: 'Китайский Юань', flag: CHF, course: '9'},
                CNY: {name: 'Швейцарский Франк', flag: CNY, course: '9'},
                EUR: {name: 'Евро', flag: EUR, course: '9'},
                GBP: {name: 'Фунт Стерлинга', flag: GBP, course: '9'},
                JPY: {name: 'Японская Ена', flag: JPY, course: '9'},
                RUB: {name: 'Российский Рубль', flag: RUB, course: '9'},
                USD: {name: 'Доллар США', flag: USD, course: '9'},
            }
        }
    }

    render () {
        return <Layout />
    }
}

export default App
