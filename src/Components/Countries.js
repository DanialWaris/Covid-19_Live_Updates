import React, { useState, useEffect } from 'react';
import Image from './assets/corona.jpg';
import './Countries.css';

import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';






const useStyles = makeStyles({
    root: {
        minWidth: 100,
        maxWidth: 300,
        margin: "30px",
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "12px",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
        textAlign: "center",
    },
    cards: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    body: {
        margin: "0",
        padding: "50px 0px",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(" + Image + ")",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
    },
    cardText: {
        textAlign: "center",
        fontSize: "16px",
        margin: "12px",
        fontFamily: "sans-serif"

    },
    cardHeading: {
        textAlign: "center",
        fontSize: "20px",
        margin: "12px",
        fontFamily: "sans-serif",
        fontStyle: "bold",
    },
    cardFooter: {
        fontFamily: "sans-serif",
        fontSize: "12px",
        textAlign: "center"
    },
    search : {
        position : "relative",
        maxWidth : "600px",
        margin: "50px auto",
        fontSize : "20px",
        borderBottom : "1px solid #20c9a7",
        borderStyle :"",
        display : "flex",
        flexWrap : "wrap",
    },
    input : {
        background : "none",
        outline : "none",
        border : "none",
        padding: "14px 30px",
        color : "#FFF"
    }

});







const Countries = () => {

    const classes = useStyles();
    const [allCountries, setAllCountries] = useState([])
    const [searchCountries, setSearchCountries] = useState("");


    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const result = await axios.get(`https://corona.lmao.ninja/v2/countries`)
        setAllCountries(result.data)
        console.log(result.data)
    }


    const filterCountries = allCountries.filter((item) => {
        return searchCountries !== ""
          ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
          : item;
      });



    return (
        <div className={classes.body} id='body'>

            <search className={classes.search}>
                <input className={classes.input} onChange={(e) => setSearchCountries(e.target.value)} type="text" placeholder="Search country..." />
            </search>

            <Grid className={classes.cards} container spacing={3}>
                {filterCountries.map((con) => (

                    <Grid>
                        <Card className={classes.root} id='root'>
                            <img style={{ width: "300px", height: "200px" }} src={con.countryInfo.flag} alt="country" />
                            <CardContent>

                                <Typography className={classes.cardHeading} variant="h5" component="h2">
                                    {con.country}
                                </Typography>
                                <Typography className={classes.cardText} variant="h5" component="h2">
                                    Cases : {con.cases}
                                </Typography>
                                <Typography className={classes.cardText} variant="h5" component="h2">
                                    Deaths : {con.deaths}
                                </Typography>
                                <Typography className={classes.cardText} variant="h5" component="h2">
                                    Recovered : {con.recovered}
                                </Typography>
                                <Typography className={classes.cardText} variant="h5" component="h2">
                                    Today Cases : {con.todayCases}
                                </Typography>
                                <Typography className={classes.cardText} variant="h5" component="h2">
                                    Today Deaths : {con.todayDeaths}
                                </Typography>
                                <Typography className={classes.cardText} variant="h5" component="h2">
                                    Active Cases : {con.active}
                                </Typography>
                                <Typography className={classes.cardText} variant="h5" component="h2">
                                    Critical : {con.critical}
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>

                ))}

            </Grid>



        </div>
    );
}


export default Countries