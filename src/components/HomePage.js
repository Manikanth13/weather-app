import React, { PureComponent } from 'react';
import { Container, Typography, FormControl, RadioGroup, FormControlLabel, Radio, IconButton, Grid, Paper } from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import { connect } from 'react-redux';
import DayCard from './DayCard';
import Chart from './Chart';

export class HomePage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            limit: 3,
            offset: 0,
            tempType: 'f',
            selectedDay: null,
            selectedIndex: 0,
        }
    }
    handleChange = (e) => {
        const { value } = e.target;
        this.setState(prevState => ({
            ...prevState,
            tempType: value
        }));
    };

    loadNext = () => {
        this.setState(prevState => ({
            offset: prevState.offset + 3,
            selectedIndex: prevState.offset + 3,
        }));
    };

    loadPrev = () => {
        this.setState(prevState => ({
            ...prevState,
            offset: prevState.offset - 3,
            selectedIndex: prevState.offset - 3,
        }));
    };

    onSelectedDay = (index) => {
        this.setState(prevState => ({
            ...prevState,
            selectedIndex: prevState.offset + index
        }))
    }

    render() {
        const { weatherData } = this.props;
        const { limit, offset, tempType, selectedIndex } = this.state;
        const hasNext = (weatherData.length - 3) > offset;
        const segments = weatherData[selectedIndex].segments;
        return (
            <Container maxWidth="md">
                <Typography component="div" style={{ backgroundColor: '#f5f5f5', height: '100vh' }}>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="temperature" value={tempType} onChange={this.handleChange} row>
                            <FormControlLabel value="c" control={<Radio />} label="Celcius" />
                            <FormControlLabel value="f" control={<Radio />} label="Fahrenheit" />
                        </RadioGroup>
                    </FormControl>
                    <div style={{paddingLeft: 30, paddingRight: 30}}>
                        <IconButton style={{float: 'left'}} disabled={offset === 0} onClick={this.loadPrev} aria-label="Previous" limit="medium" color="primary">
                            <ArrowBack fontSize="large" />
                        </IconButton>
                        <IconButton style={{float: 'right'}} disabled={!hasNext} onClick={this.loadNext} aria-label="Next" size="medium" color="primary">
                            <ArrowForward fontSize="large" />
                        </IconButton>
                    </div>
                    <div style={{padding: 30}}>
                        <Grid container alignContent="center" justify="center" spacing={3}>
                            {weatherData.slice(offset, limit + offset).map((daySegment, index) => (
                                <DayCard key={index} selected={(selectedIndex - offset) === index} onDayClick={() => this.onSelectedDay(index)} segmentData={daySegment} type={tempType} />
                            ))}
                        </Grid>
                    </div>
                    <div>
                        <Chart segments={segments} type={tempType}/>
                    </div>
                </Typography>
            </Container>
        );
    };
};

const mapStateToProps = state => ({
    weatherData: state.weatherData
});

export default connect(mapStateToProps, null)(HomePage);