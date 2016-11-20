import React from 'react';
import {
    Heading,
    Link,
    } from "spectacle";

const lightText = "#ccc";

const CymruExample = (props) => (
    <div>
        <Heading fit size={2} lineHeight={1} textColor={lightText}>
            Broadway.com SeatMap Demo
        </Heading>

        <Link href="https://checkout.broadway.com/chicago/calendar/">
            <Heading size={6} lineHeight={1} textColor={lightText}>
                https://checkout.broadway.com/chicago/calendar/
            </Heading>
        </Link>
    </div>
);

export default CymruExample;
