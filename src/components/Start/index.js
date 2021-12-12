import Video from '../../videos/vid.mp4'
import {Button} from '../ButtonElements'
import {VideoBg, Card, Container, Bg, Heading, Input, Box, Submit, Text} from './StartElements'
import ReactDOM from 'react-dom';
import React, { PureComponent, useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import naughtyWords from 'naughty-words';
import Sentiment from 'sentiment'
import { MdUpdate } from 'react-icons/md';

let data = [
    {
    x: 0,
    y: 0,
    }

];

async function handleSubmit(e) {
    e.preventDefault();
    let text = e.target.textbox.value;

    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();
    var log = sentiment.analyze(text);


    let score = Math.abs(log.score);
    let words = Math.abs(log.words.length);

    let magnitude = (text.length);

    if (score <= 0 || magnitude <= 0) {
    } else {
        score = score - ((magnitude / words) / magnitude);
    }

    console.log(log)
    console.log(data[0])

    data[0].y = score;
    data[0].x = (score/magnitude) + score ;

}


const StartPage = () => {

   const [value1, change] = useState('')
    return (
        <>
            <Bg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </Bg>

            <Container>
                <Card>
                    <Heading>Enter Text</Heading>
                    <Box onSubmit={handleSubmit}>
                        <Input name="textbox" value={value1} onChange={(e) => change(e.target.value)}>
                        
                        </Input>
                
                        <Submit type="submit"></Submit>
                    </Box>
                </Card>

                <Card>
                    <Text>Bias vs. Sentiment Analysis</Text>
                    <ResponsiveContainer width="80%" height="80%">
                        <ScatterChart
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
                        <XAxis id="1" type="number" dataKey="x" name="bias" domain={[0, 100]}>1</XAxis>
                        <YAxis id="2" type="number" dataKey="y" name="sentiment" domain={[0, 100]}>1</YAxis>

                        location.reload()
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter name="A school" data={data} fill="#8884d8" />
                        </ScatterChart>
                    </ResponsiveContainer>
                </Card>
            </Container>
        </>
    )
}




export default StartPage;