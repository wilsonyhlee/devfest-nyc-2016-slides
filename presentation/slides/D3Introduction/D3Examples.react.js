import React from 'react';

import {
    Fill,
    Heading,
    Layout,
    Link,
    } from "spectacle";

const lightText = "#ccc";

const D3Examples = (props) => (
    <div>
        <Heading size={4} lineHeight={1} textColor={lightText}>Common example - {props.title}</Heading>
        <Layout>
            <Fill>
                <Link href={props.url}>
                    <h5 style={{ color: "#ccc", fontSize: "14px"}}>{props.url}</h5>
                </Link>
                <Link href={props.url}>
                    <iframe src={props.url} style={{ width: '100%', minHeight: '60vh'}}>
                    </iframe>
                </Link>
            </Fill>
        </Layout>
    </div>
);

export default D3Examples;
