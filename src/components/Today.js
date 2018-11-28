import React, { Component } from 'react';
import axios from 'axios';

import btcLogo from '../assets/logos/bitcoin.svg';
import ethLogo from '../assets/logos/ethereum.svg';
import xmrLogo from '../assets/logos/monero.svg';

class Today extends Component {
  state = {
    btcPrice:'',
    ethPrice: '',
    xmrPrice: '',

    btcPercent: '',
    ethPercent: '',
    xmrPercent: '',

    btcUpDown: 'no-change',
    ethUpDown: 'no-change',
    xmrUpDown: 'no-change',
  }

  componentWillMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XMR&tsyms=USD')
    .then(response => {
      this.setState({ btcPrice: response.data.RAW.BTC.USD.PRICE});
      this.setState({ ethPrice: response.data.RAW.ETH.USD.PRICE});
      this.setState({ xmrPrice: response.data.RAW.XMR.USD.PRICE});
      this.setState({ btcPercent: response.data.DISPLAY.BTC.USD.CHANGEPCT24HOUR});
      this.setState({ ethPercent: response.data.DISPLAY.ETH.USD.CHANGEPCT24HOUR});
      this.setState({ xmrPercent: response.data.DISPLAY.XMR.USD.CHANGEPCT24HOUR});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return(
      <ul className="today__coins-list">
        <li>
          <img src={btcLogo} alt="Bitcoin"/>
          <p>1 BTC = $ {this.state.btcPrice}</p>
          <p>Changed in 24h: <span className={'coin__change-percent coin__change-percent--' + this.state.btcUpDown}>{this.state.btcPercent}%</span> </p>
        </li>
        <li>
          <img src={ethLogo} alt="Ethereum"/>
          <p>1 ETH = $ {this.state.ethPrice}</p>
          <p>Changed in 24h: <span className={'coin__change-percent coin__change-percent--' + this.state.ethUpDown}>{this.state.ethPercent}%</span> </p>
        </li>
        <li>
          <img src={xmrLogo} alt="Monero"/>
          <p>1 XMR = $ {this.state.xmrPrice}</p>
          <p>Changed in 24h: <span className={'coin__change-percent coin__change-percent--' + this.state.xmrUpDown}>{this.state.xmrPercent}%</span> </p>
        </li>
      </ul>
    );
  }

  componentDidMount() {
    setInterval(() => {
      axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XMR&tsyms=USD')
      .then(response => {
        this.setState({ btcUpDown: response.data.RAW.BTC.USD.PRICE > this.state.btcPrice ? 'up' : 'down'});
        this.setState({ ethUpDown: response.data.RAW.ETH.USD.PRICE > this.state.btcPrice ? 'up' : 'down'});
        this.setState({ xmrUpDown: response.data.RAW.BTC.USD.PRICE > this.state.btcPrice ? 'up' : 'down'});

        this.setState({ btcPrice: response.data.RAW.BTC.USD.PRICE});
        this.setState({ ethPrice: response.data.RAW.ETH.USD.PRICE});
        this.setState({ xmrPrice: response.data.RAW.XMR.USD.PRICE});

        this.setState({ btcPercent: response.data.DISPLAY.BTC.USD.CHANGEPCT24HOUR});
        this.setState({ ethPercent: response.data.DISPLAY.ETH.USD.CHANGEPCT24HOUR});
        this.setState({ xmrPercent: response.data.DISPLAY.XMR.USD.CHANGEPCT24HOUR});
      })
      .catch(error => {
        console.log(error);
      });   
    }, 10000);
  }
}

export default Today;