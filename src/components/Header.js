import React, { PureComponent} from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class Header extends PureComponent {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Weather App
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;