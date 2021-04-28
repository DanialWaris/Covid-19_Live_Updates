import React, { useState, useEffect } from 'react';
import Image from './assets/corona.jpg'
import './Home.css';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';



const useStyles = makeStyles({
    root: {
        minWidth: 200,
        maxWidth: 300,
        margin: "30px",
        color: "white",
        borderRadius: "12px",
        transform: "translate (-50%, -50%)",
        overflow: "hidden",
        transition: "all 0.5s ease 0s",

        "&:hover": {
            transform: "scale(1.1)",
            overflow: "hidden",
            boxShadow: "2px 2px 10px 4px darkGray",
            minWidth: 275,
            maxWidth: 300,
        }
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
        // maxWidth: "1200px",
        // margin: "140px ",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        justifyContent: "center",
        textAlign: "center",
        color: "#FFF",
        fontFamily: "Copperplate, Papyrus, fantasy",
        letterSpacing: "2px",
        wordSpacing: "8px",
    },
    headerText: {
        color: "white",
        overflow: "hidden",
        fontFamily: "Times New Roman",
        fontSize: "20px",
        marginBottom: "100px",
        maxWidth: "900px",
        margin: "auto",
        padding : "30px 70px",
        justifyContent: "center",
        background:"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
        borderRadius : "8px"
    },
    body: {
        margin: "0",
        padding: "100px 0px",
        backgroundImage: " url(" + Image + ")",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        zIndex: '-1',
    },
    cardHeading: {
        textAlign: "center",
        fontSize: "20px",
        fontFamily: "Times New Roman"
    },
    cardFooter: {
        fontFamily: "sans-serif",
        fontSize: "12px",
        textAlign: "center"
    },
    symptoms: {
        fontFamily: "Times New Roman",
        height: "550px",
        maxWidth: "1000px",
        margin: "0px auto",
        padding: "50px 30px",
        lineHeight: "30px ",
        justifyContent: "center",
        transition: "all 0.5s ease 0s",
    },
    symptomHeading: {
        fontFamily: "Times New Roman",
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "30px",
    }


});

const Home = () => {

    const classes = useStyles();
    const [totalData, setTotalData] = useState([])


    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const result = await axios.get('https://corona.lmao.ninja/v2/all')
        setTotalData(result.data)
    }


    const date = new Date();
    const lastUpdated = date.toString();



    return (

        <div className='hero'>
            <div className={classes.body}>
                <div className={classes.heading} id="heading">
                    <h3>Covid-19 Coronavirus</h3>
                </div>
                <div className={classes.headerText} id="header-text">
                    <p>Coronaviruses are a type of virus. There are many different kinds, and
                    some cause disease. A newly identified coronavirus, SARS-CoV-2, has
                 caused a worldwide pandemic of respiratory illness, called COVID-19.</p>
                </div>


                <Grid className={classes.cards} id='cards' container spacing={3}>
                    <Grid>
                        <Card style={{ background: "gray" }} className={classes.root} id='root'>
                            <CardContent>

                                <Typography className={classes.cardHeading} variant="h5" component="h2">
                                    Total Cases
                        </Typography>
                                <Typography className={classes.pos}>
                                    {totalData.cases}
                                </Typography>
                                <hr style={{ marginTop: "40px" }} />
                                <Typography className={classes.cardFooter} variant="body2" component="p">
                                    Last updated : {lastUpdated}

                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid >
                        <Card style={{ background: "red" }} className={classes.root} id='root'>
                            <CardContent>

                                <Typography className={classes.cardHeading} variant="h5" component="h2">
                                    Total Deaths
                        </Typography>
                                <Typography className={classes.pos}>
                                    {totalData.deaths}
                                </Typography>
                                <hr style={{ marginTop: "40px" }} />
                                <Typography className={classes.cardFooter} variant="body2" component="p">
                                    Last updated : {lastUpdated}
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid >
                        <Card style={{ background: "green" }} className={classes.root} id='root'>
                            <CardContent>
                                <Typography className={classes.cardHeading} variant="h5" component="h2">
                                    Total Recovered
                        </Typography>
                                <Typography className={classes.pos}>
                                    {totalData.recovered}
                                </Typography>
                                <hr style={{ marginTop: "40px" }} />
                                <Typography className={classes.cardFooter} variant="body2" component="p">
                                    Last updated : {lastUpdated}
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>

                </Grid>
            </div>

            <div className={classes.symptoms} id="symptoms">
                <div className={classes.symptomHeading}>
                    <h2>Symptoms:</h2>
                </div>
                <div>
                    <p>The CDC says you may have coronavirus if you have these symptoms or combination of symptoms:</p>
                    <ul>
                        <li>Fever or chills.</li>
                        <li>Cough.</li>
                        <li>Shortness of breath or difficulty breathing.</li>
                        <li>Tiredness.</li>
                        <li>Muscle or body aches.</li>
                        <li>Headaches.</li>
                        <li>New loss of taste or smell.</li>
                        <li>Sore throat.</li>
                        <li>Congestion or runny nose.</li>
                        <li>Nausea or vomiting.</li>
                        <li>Diarrhea.</li>
                    </ul>
                </div>
            </div>
        </div>




    );

}


export default Home;