import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class History extends Component {
  state = {
    yesterdayPrice: {},
    twoDaysPrice: {},
    threeDaysPrice: {},
    fourDaysPrice: {},
    fiveDaysPrice: {},
    sixDaysPrice: {}
  }

  //Gets the BTC price of a certain date
  getBTCPrices(date) {
    return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' + date);
  }

  //Gets the ETH price of a certain date
  getETHPrices(date) {
    return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=' + date);
  }

  //Gets the XMR price of a certain date
  getXMRPrices(date) {
    return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=XMR&tsyms=USD&ts=' + date);
  }

  //Gets the prices of yesterday
  yesterdayPrice() {
    let date = moment().subtract(1, 'days').unix();

    axios.all([this.getBTCPrices(date), this.getETHPrices(date), this.getXMRPrices(date)])
    .then(axios.spread( (btc, eth, xmr) => {;
      let pricesAndDate = {
        date: moment.unix(date).format('Do MMMM YYYY'),
        btc: btc.data.BTC.USD,
        eth: eth.data.ETH.USD,
        xmr: xmr.data.XMR.USD
      };

      this.setState({ yesterdayPrice: pricesAndDate })
    }))
  }

  //Gets the prices of two days ago
  twoDaysPrice() {
    let date = moment().subtract(2, 'days').unix();

    axios.all([this.getBTCPrices(date), this.getETHPrices(date), this.getXMRPrices(date)])
    .then(axios.spread( (btc, eth, xmr) => {
      let pricesAndDate = {
        date: moment.unix(date).format('Do MMMM YYYY'),
        btc: btc.data.BTC.USD,
        eth: eth.data.ETH.USD,
        xmr: xmr.data.XMR.USD
      };

      this.setState({ twoDaysPrice: pricesAndDate })
    }))
  }

  //Gets the prices of three days ago
  threeDaysPrice() {
    let date = moment().subtract(3, 'days').unix();

    axios.all([this.getBTCPrices(date), this.getETHPrices(date), this.getXMRPrices(date)])
    .then(axios.spread( (btc, eth, xmr) => {
      let pricesAndDate = {
        date: moment.unix(date).format('Do MMMM YYYY'),
        btc: btc.data.BTC.USD,
        eth: eth.data.ETH.USD,
        xmr: xmr.data.XMR.USD
      };

      this.setState({ threeDaysPrice: pricesAndDate })
    }))
  }

  //Gets the prices of four days ago
  fourDaysPrice() {
    let date = moment().subtract(4, 'days').unix();

    axios.all([this.getBTCPrices(date), this.getETHPrices(date), this.getXMRPrices(date)])
    .then(axios.spread( (btc, eth, xmr) => {
      let pricesAndDate = {
        date: moment.unix(date).format('Do MMMM YYYY'),
        btc: btc.data.BTC.USD,
        eth: eth.data.ETH.USD,
        xmr: xmr.data.XMR.USD
      };

      this.setState({ fourDaysPrice: pricesAndDate })
    }))
  }

  //Gets the prices of five days ago
  fiveDaysPrice() {
    let date = moment().subtract(5, 'days').unix();

    axios.all([this.getBTCPrices(date), this.getETHPrices(date), this.getXMRPrices(date)])
    .then(axios.spread( (btc, eth, xmr) => {
      let pricesAndDate = {
        date: moment.unix(date).format('Do MMMM YYYY'),
        btc: btc.data.BTC.USD,
        eth: eth.data.ETH.USD,
        xmr: xmr.data.XMR.USD
      };

      this.setState({ fiveDaysPrice: pricesAndDate })
    }))
  }

  //Gets the prices of six days ago
  sixDaysPrice() {
    let date = moment().subtract(6, 'days').unix();

    axios.all([this.getBTCPrices(date), this.getETHPrices(date), this.getXMRPrices(date)])
    .then(axios.spread( (btc, eth, xmr) => {
      let pricesAndDate = {
        date: moment.unix(date).format('Do MMMM YYYY'),
        btc: btc.data.BTC.USD,
        eth: eth.data.ETH.USD,
        xmr: xmr.data.XMR.USD
      };

      this.setState({ sixDaysPrice: pricesAndDate })
    }))
  }

  componentWillMount() {
    this.yesterdayPrice();
    this.twoDaysPrice();
    this.threeDaysPrice();
    this.fourDaysPrice();
    this.fiveDaysPrice();
    this.sixDaysPrice();
  }

  render() {
    return(
      <ul className="history__dates-list">
        <li className="dates-list__day">
          <h4 className="day__date">Yesterday</h4>
          <ul>
            <li>
              <h4>Bitcoin</h4>
              <p>1 BTC = {this.state.yesterdayPrice.btc}</p>
            </li>
            <li className="dates-coins-list__coin--middle">
              <h4>Ethereum</h4>
              <p>1 ETH = {this.state.yesterdayPrice.eth}</p>
            </li>
            <li>
              <h4>Monero</h4>
              <p>1 XMR = {this.state.yesterdayPrice.xmr}</p>
            </li>
          </ul>
        </li>

        <li className="dates-list__day">
          <h4 className="day__date">{this.state.twoDaysPrice.date}</h4>
          <ul>
            <li>
              <h4>Bitcoin</h4>
              <p>1 BTC = {this.state.twoDaysPrice.btc}</p>
            </li>
            <li className="dates-coins-list__coin--middle">
              <h4>Ethereum</h4>
              <p>1 ETH = {this.state.twoDaysPrice.eth}</p>
            </li>
            <li>
              <h4>Monero</h4>
              <p>1 XMR = {this.state.twoDaysPrice.xmr}</p>
            </li>
          </ul>
        </li>

        <li className="dates-list__day">
          <h4 className="day__date">{this.state.threeDaysPrice.date}</h4>
          <ul>
            <li>
              <h4>Bitcoin</h4>
              <p>1 BTC = {this.state.threeDaysPrice.btc}</p>
            </li>
            <li className="dates-coins-list__coin--middle">
              <h4>Ethereum</h4>
              <p>1 ETH = {this.state.threeDaysPrice.eth}</p>
            </li>
            <li>
              <h4>Monero</h4>
              <p>1 XMR = {this.state.threeDaysPrice.xmr}</p>
            </li>
          </ul>
        </li>

        <li className="dates-list__day">
          <h4 className="day__date">{this.state.fourDaysPrice.date}</h4>
          <ul>
            <li>
              <h4>Bitcoin</h4>
              <p>1 BTC = {this.state.fourDaysPrice.btc}</p>
            </li>
            <li className="dates-coins-list__coin--middle">
              <h4>Ethereum</h4>
              <p>1 ETH = {this.state.fourDaysPrice.eth}</p>
            </li>
            <li>
              <h4>Monero</h4>
              <p>1 XMR = {this.state.fourDaysPrice.xmr}</p>
            </li>
          </ul>
        </li>

        <li className="dates-list__day">
          <h4 className="day__date">{this.state.fiveDaysPrice.date}</h4>
          <ul>
            <li>
              <h4>Bitcoin</h4>
              <p>1 BTC = {this.state.fiveDaysPrice.btc}</p>
            </li>
            <li className="dates-coins-list__coin--middle">
              <h4>Ethereum</h4>
              <p>1 ETH = {this.state.fiveDaysPrice.eth}</p>
            </li>
            <li>
              <h4>Monero</h4>
              <p>1 XMR = {this.state.fiveDaysPrice.xmr}</p>
            </li>
          </ul>
        </li>

        <li className="dates-list__day">
          <h4 className="day__date">{this.state.sixDaysPrice.date}</h4>
          <ul>
            <li>
              <h4>Bitcoin</h4>
              <p>1 BTC = {this.state.sixDaysPrice.btc}</p>
            </li>
            <li className="dates-coins-list__coin--middle">
              <h4>Ethereum</h4>
              <p>1 ETH = {this.state.sixDaysPrice.eth}</p>
            </li>
            <li>
              <h4>Monero</h4>
              <p>1 XMR = {this.state.sixDaysPrice.xmr}</p>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default History;