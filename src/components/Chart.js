import React, { PureComponent } from 'react';
import Highcharts from 'highcharts';
import { convertTemp } from '../utils';

class Chart extends PureComponent {
    componentDidMount() {
        this.loadChart();
    }

    componentDidUpdate() {
        this.updateChart();
    }

    getCategoriesAndValues = () => {
        const { segments, type } = this.props;
        const categories = segments.map(segment => {
            const time = segment.dt_txt.split(' ')[1].split(':')[0];
            return `${time}:00 ${Number(time) < 12 ? 'AM' : 'PM'}`;
        });
        const values = segments.map(segment => convertTemp(segment.main.temp, type));
        return { categories, values };
    }

    loadChart = () => {
        const { categories, values } = this.getCategoriesAndValues();

        this.chart = Highcharts.chart('chart-container', {

            title: {
                text: 'Weather Forecast'
            },

            yAxis: {
                min: 0,
                title: {
                    text: 'Temperature (F)'
                }
            },
        
            xAxis: {
                title: {
                    text: 'Time (Hours)'
                },
                categories,
            },
        
            series: [{
                type: 'column',
                colorByPoint: true,
                data: values,
                showInLegend: false
            }]
        
        });
    }

    updateChart() {
        const { categories, values } = this.getCategoriesAndValues();
        this.chart.update({
            yAxis: {
                min: 0,
                title: {
                    text: `Temperature (${this.props.type.toUpperCase()})`
                }
            },
            xAxis: {
                categories,
            },
            series: [{
                type: 'column',
                colorByPoint: true,
                data: values,
                showInLegend: false
            }]
        });
    }

    render() {
        return (
            <div id="chart-container"></div>
        )
    }
}

export default Chart;