import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Products from '../Products/Products';
import { useState } from 'react';

export function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${ index }`}
            aria-labelledby={`scrollable-auto-tab-${ index }`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${ index }`,
        'aria-controls': `scrollable-auto-tabpanel-${ index }`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const CategoryTab = () => {

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [index, setIndex] = useState(0);
    const [categorySelected, setCategorySelected] = useState("Food");

    const handleChange = (event, newValue) => {
        const selectedCategory = event.target.innerText;
        setCategorySelected(selectedCategory);
        setValue(newValue);
        setIndex(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    centered
                >
                    <Tab label="Food" {...a11yProps(0)} />
                    <Tab label="Dress" {...a11yProps(1)} />
                    <Tab label="Electronic" {...a11yProps(2)} />
                    <Tab label="Mobile" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <Products index={index} categorySelected={categorySelected} value={value}></Products>
        </div>
    );
};

export default CategoryTab;