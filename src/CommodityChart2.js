import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import PropTypes from 'prop-types';

class SalesChart extends Component {
    render() {
        const { salesdata } = this.props;

        var dateList = salesdata.map((value, id) => {
            return value.time;
        });

        var valueList = salesdata.map((value, id) => {
            return value.count;
        });

        var option = {

            // Make gradient line here
            visualMap: [{
                show: false,
                type: 'continuous',
                seriesIndex: 0,
                min: 0,
                max: 400
            },],
            title: [{
                left: 'center',
                // text: '水果销量'
            },],
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [{
                data: dateList
            },],
            yAxis: [{
                splitLine: {show: false}
            },],
            grid: [{
                // bottom: '60%'
            },],
            series: [{
                type: 'line',
                showSymbol: false,
                data: valueList
            },]
        };

        return (
            <ReactEcharts
                        option={option}
                        style={{height: 300, width: 800}}
                        className='react_for_echarts' />
        );
    }
}

SalesChart.propTypes = {

    salesdata: PropTypes.object.isRequired,
};

export default SalesChart;