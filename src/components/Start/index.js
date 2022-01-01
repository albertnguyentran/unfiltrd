import Video from '../../videos/vid.mp4'
import {VideoBg, Card, Container, Bg, Heading, Input, Box, Submit, Text, Button2} from './StartElements'
import React, { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


//initial chart data
let data = [
    {
    x: 0,
    y: 0,
    }

];



function handleSubmit(e) {
    //obtain text from textarea
    e.preventDefault();
    let text = e.target.textbox.value;
    
    //api reference
    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();
    var log = sentiment.analyze(text);

    //set variables from api
    let score = Math.abs(log.score);
    let comparative = Math.abs(log.comparative);
    let positive = log.positive;
    let negative = log.negative;
    var textArray = [];
    textArray = text.split(' ').filter(w => w !== '');
    
    calculateAndUpdate(text, score, positive, negative, comparative, textArray)
    
}

function calculateAndUpdate (text, score, positive, negative, comparative, textArray) {
    
    //create arrays with position and type of tokenized words
    let positiveValues = []
    let negativeValues = []
    for(var i=0; i<textArray.length; i++){
        if(positive.includes(textArray[i])) {
            positiveValues.push([i])
        } else if(negative.includes(textArray[i])) {
            negativeValues.push([i])
        }
    }

    //calculate clustering of like word subsets (positive or negative)
    //then append to respective array
    let positiveDifference = [];
    let negativeDifference = [];
    for(var k=0; k<((positiveValues.length)-1); k++){
        positiveDifference.push(positiveValues[k+1] - positiveValues[k])
    }

    for(var l=0; l<((negativeValues.length)-1); l++){
        negativeDifference.push(negativeValues[l+1] - negativeValues[l])
    }
    
    //calculate average distance between clusters
    const sump = positiveDifference.reduce((a, b) => a + b, 0);
    const avgp= (sump / positiveDifference.length) || 0;

    const sumn = negativeDifference.reduce((a, b) => a + b, 0);
    const avgn = (sumn / negativeDifference.length) || 0;

    //update data
    data[0].y = comparative*20;
    data[0].x = score + Math.abs(avgp - avgn);
    
}
function refresh() {

    //refreshing the graph by resizing it and forcing it to udpate
    let width = document.getElementById("container").style.width

    if (width === "80%") {
        document.getElementById("container").style.width = "81.0001%";
    } else {
        document.getElementById("container").style.width = "80.000%";
    }
}

const StartPage = () => {

   const [value1, change] = useState('')
    return (
        <>
            <Bg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </Bg>
            <div id="div">
                <Container>
                    <Card>
                        <Heading>Enter Text</Heading>
                        <Box onSubmit={handleSubmit}>
                            <Input name="textbox" value={value1} onChange={(e) => change(e.target.value)}>
                            
                            </Input>
                    
                            <Submit type="submit"></Submit>
                            <Button2 onClick={refresh}>Refresh</Button2>
                        </Box>
                    </Card>

                    <Card>
                        <Text>Bias vs. Sentiment Analysis</Text>
                        <ResponsiveContainer id="container" width="80%" height="80%">
                            <ScatterChart
                                id="chart"
                                width={400}
                                height={400}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                }}
                                >
                            <CartesianGrid />
                                
                            <XAxis id="1" type="number" dataKey="x" name="bias" domain={[0, 100]}></XAxis>
                            <YAxis id="2" type="number" dataKey="y" name="sentiment" domain={[0, 100]}></YAxis>
                                location.reload()
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter name="A school" data={data} fill="#8884d8"/>
                            </ScatterChart>
                        </ResponsiveContainer>
                        
                    </Card>
                </Container>
            </div>
        </>
    )
}


export default StartPage;