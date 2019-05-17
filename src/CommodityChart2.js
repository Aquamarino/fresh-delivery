import React, { Component } from 'react';
import echarts from 'echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class SalesChart extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        const {salesdata} = this.props;
        console.log(salesdata);
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('saleschart'));

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
            }, {
                show: false,
                type: 'continuous',
                seriesIndex: 1,
                dimension: 0,
                min: 0,
                max: dateList.length - 1
            }],


            title: [{
                left: 'center',
                text: '水果销量'
            }, {
                top: '55%',
                left: 'center',
                text: '日销量变化'
            }],
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [{
                data: dateList
            }, {
                data: dateList,
                gridIndex: 1
            }],
            yAxis: [{
                splitLine: {show: false}
            }, {
                splitLine: {show: false},
                gridIndex: 1
            }],
            grid: [{
                bottom: '60%'
            }, {
                top: '60%'
            }],
            series: [{
                type: 'line',
                showSymbol: false,
                data: valueList
            }, {
                type: 'line',
                showSymbol: false,
                data: valueList,
                xAxisIndex: 1,
                yAxisIndex: 1
            }]
        };

        myChart.setOption(option, true);

    }
    render() {
        return (
            <div id="saleschart" style={{ width: 600, height: 400 }}></div>
        );
    }
}

export default SalesChart;