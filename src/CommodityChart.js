import React, { Component } from 'react';
import echarts from 'echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class EchartsTest extends Component {
    constructor() {
        super();
        this.state = {
            source: [
                ['day', '5-2', '5-3', '5-4', '5-5', '5-6', '5-7', '5-8'],
                ['桃子🍑', 41, 30, 65, 53, 83, 98, 98],
                ['苹果🍎', 86, 92, 85, 83, 73, 55, 55],
                ['西瓜🍉', 24, 67, 79, 86, 65, 82, 55],
                ['橙子🍊', 55, 67, 69, 72, 53, 39, 55],
                ['葡萄🍇', 55, 67, 69, 72, 53, 39, 55],
                ['草莓🍓', 55, 67, 69, 72, 53, 39, 55],
                ['哈密瓜🍈', 55, 67, 69, 72, 53, 39, 55],
            ],
        }
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('commoditychart'));
        
        // 绘制图表
        var option = {
            title: {
                // text: '各种水果的收藏',
                // subtext: '过去一周',
            },
            legend: {},
            tooltip: {
                trigger: 'axis',
                showContent: false
            },
            dataset: {
                source: this.state.source,
                // source: [
                //     ['day', '5-2', '5-3', '5-4', '5-5', '5-6', '5-7', '5-8'],
                //     ['桃子🍑', 41, 30, 65, 53, 83, 98, 98],
                //     ['苹果🍎', 86, 92, 85, 83, 73, 55, 55],
                //     ['西瓜🍉', 24, 67, 79, 86, 65, 82, 55],
                //     ['橙子🍊', 55, 67, 69, 72, 53, 39, 55],
                //     ['葡萄🍇', 55, 67, 69, 72, 53, 39, 55],
                //     ['草莓🍓', 55, 67, 69, 72, 53, 39, 55],
                //     ['哈密瓜🍈', 55, 67, 69, 72, 53, 39, 55],
                // ]
            },
            xAxis: {type: 'category'},
            yAxis: {gridIndex: 0},
            grid: {top: '55%'},
            series: [
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['50%', '25%'],
                    label: {
                        formatter: '{b}: {@5-2} ({d}%)'
                    },
                    encode: {
                        itemName: 'day',
                        value: '5-2',
                        tooltip: '5-2'
                    }
                }
            ]
        };

        myChart.on('updateAxisPointer', function (event) {
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                myChart.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
        });
    
        myChart.setOption(option);

    }
    render() {
        return (
            <div>
            <div id="commoditychart" style={{ width: 600, height: 400 }}></div>

            </div>
            

        );
    }
}
EchartsTest.prototypes = {
    classes: PropTypes.object.isRequired,
};

export default EchartsTest;