import React, { PureComponent } from 'react';
import { Grid, Card, Typography, CardContent, CardActionArea } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { convertTemp } from '../utils';

const styles = theme => ({
    item: {
        flexGrow: 1,
    },
    childItem: {
        display: 'inline-flex'
    }
})

class DayCard extends PureComponent {
    render() {
        const { segmentData, classes, onDayClick, selected, type } = this.props;
        return (
            <Grid item xs={4}>
                <Card style={{backgroundColor: selected ? '#bbdefb' : 'white'}}>
                    <CardActionArea onClick={onDayClick}>
                        <CardContent>
                            <Typography component="div" className={classes.item}>
                                <Typography component="div" className={classes.childItem}>Temp:&nbsp;</Typography>
                                <Typography component="div" className={classes.childItem}>{convertTemp(segmentData.averagetemp, type)}</Typography>
                            </Typography>
                            <Typography component="div" className={classes.item}>
                                <Typography component="div" className={classes.childItem}>Date:&nbsp;</Typography>
                                <Typography component="div" className={classes.childItem}>{segmentData.day}</Typography>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    }
}

export default withStyles(styles)(DayCard);