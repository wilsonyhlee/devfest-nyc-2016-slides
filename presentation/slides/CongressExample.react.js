import React from 'react';
import {
    Heading,
    Link,
    } from "spectacle";

const lightText = "#ccc";

const CongressExample = (props) => (
    <div>
        <Heading fit size={2} lineHeight={1} textColor={lightText}>
            Demo
        </Heading>

        <Link href="">
            <Heading size={6} lineHeight={1} textColor={lightText}>

            </Heading>
        </Link>
    </div>
);

export default CongressExample;
