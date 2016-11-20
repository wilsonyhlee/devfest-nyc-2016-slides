import React from 'react';
import {
    Heading,
    Link,
    } from "spectacle";

const lightText = "#ccc";

const CongressExample = (props) => (
    <div>
        <Heading fit size={2} lineHeight={1} textColor={lightText}>
            Congressional Committees Demo
        </Heading>

        <Link href="https://goo.gl/aP9ss5">
            <Heading size={6} lineHeight={1} textColor={lightText}>
                https://goo.gl/aP9ss5
            </Heading>
        </Link>
    </div>
);

export default CongressExample;
