import  {InfoContainer, Heading, Text} from './InfoElements';
import React from 'react';



  

const InfoSection = () => {
    return (
        <>

            <InfoContainer id="about">

                <Heading>How it works</Heading>
                <Text>Handles text submission and calculates Bias (x) vs. Sentiment (y). Using npms NLP javscript library I was able to calculate sentiment and bias (by determining the clustering of key words).</Text>
                <Heading>Why I made it</Heading>
                <Text> Unfiltrd detects the overall bias presented in a medium of text to better inform you of what you are reading. </Text>
                <Heading>Tools and Technologies</Heading>
                <Text>ReactJs, Javascript NLP library, recharts</Text>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
