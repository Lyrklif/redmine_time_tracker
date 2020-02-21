import React from "react";

import * as IconsLib from "@material-ui/icons";


import PieChart from '../components/PieChart';

import {connect} from "react-redux";

import getStatistics from "../redmine/getStatistics";
import {
  periodToday,
  periodWeek,
  periodMonth
} from "../functions/commandGetStatistics";
import Grid from "@material-ui/core/Grid";
import {statistics} from "../actions/actionCreators";


const mapStateToProps = state => {
  return {
    day: state.statistics.day,
    week: state.statistics.week,
    month: state.statistics.month
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchStatistics: (name, value) => dispatch(statistics(name, value)),
  }
};

class Statistics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingDay: true,
      isLoadingWeek: true,
      isLoadingMonth: true,
    };

    this.updComponent = this.updComponent.bind(this);
  }

  setStatistics = (name, response) => {
    response.then(e => {
      const data = e.data.time_entries;
      let hours = 0;
      data.forEach(elem => hours += elem.hours);
      hours = +hours.toFixed(2);

      this.props.dispatchStatistics(name, hours);
    });
  };

  componentDidMount() {
    this.updComponent(periodToday, "day", 'isLoadingDay').then(r => this.setLoaded('isLoadingDay'));
    this.updComponent(periodWeek, "week", 'isLoadingWeek').then(r => this.setLoaded('isLoadingWeek'));
    this.updComponent(periodMonth, "month", 'isLoadingMonth').then(r => this.setLoaded('isLoadingMonth'));
  };

  async updComponent(period, name, loadingName) {
    let value = getStatistics(period);
    this.setStatistics(name, value);
  }

  //TODO спинер не показывается. Возможная причина: статус меняется до того, как store обновится
  setLoaded = (name) => {
    this.setState({
      [name]: false
    });
  };

  render() {
    let dayPercent = (this.props.day * 100 / 8).toFixed(2);
    let weekPercent = (this.props.week * 100 / 40).toFixed(2);
    let monthPercent = (this.props.month * 100 / 160).toFixed(2);

    return (
      <Grid container justify="center" alignItems="flex-start">
        <Grid item xs={12} sm={6} md={4}>
          <PieChart
            percent={dayPercent}
            text={'За этот день'}
            hours={this.props.day}
            isLoading={this.state.isLoadingDay}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PieChart
            percent={weekPercent}
            text={'За эту неделю'}
            hours={this.props.week}
            isLoading={this.state.isLoadingWeek}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PieChart
            percent={monthPercent}
            text={'За этот месяц'}
            hours={this.props.month}
            isLoading={this.state.isLoadingMonth}
          />
        </Grid>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
