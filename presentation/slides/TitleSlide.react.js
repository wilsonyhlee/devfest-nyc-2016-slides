import React from 'react';
import {
    Link,
    } from "spectacle";

const CCC = "#CCC";
const EEE= "#EEE";

const SubHeading = (props) => (
    <h6 style={{color: CCC, fontSize: '2.5rem', margin: '10px'}}>
        {props.text}
    </h6>
);

const TitleSlide = () => (
    <div>
        <h2 style={{color: EEE, fontSize: '4rem'}}>
            Responsive UI for Complicated (and Unusual) Data with D3.js
        </h2>

        <SubHeading text="DevFest NYC, Nov 20, 2016" />

        <SubHeading text="Wilson Lee" />

        <SubHeading text="Broadway.com, New York, NY" />

        <Link href="https://twitter.com/wilsonyhlee">
            <SubHeading text="@wilsonyhlee on Twitter" />
        </Link>

    </div>
);

export default TitleSlide;

