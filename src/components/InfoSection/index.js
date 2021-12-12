import {Button} from '../ButtonElements';
import  {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img, Text} from './InfoElements';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


  

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>

            <InfoContainer id="about">

                <Heading>How it works</Heading>
                <Text>Handles form submission and calculates Bias (x) vs. Sentiment (y) values using NLP. Determining the overall tone of the message presented.</Text>
                <Heading>Why I made it</Heading>
                <Text>Reading the news can be interesting. I decided to create Unfiltrd to recognize bias as a way to learn NLP</Text>
                <Heading>Tech Stack</Heading>
                <Text>ReactJs + Javascript Libraries</Text>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
