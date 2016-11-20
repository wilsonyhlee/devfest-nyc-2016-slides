import React from 'react';

import {
    Appear,
    Heading,
    ListItem,
    List,
    } from "spectacle";

const lightText = "#ccc";

const D3Intro = () => (
    <div>
        <Heading size={2} lineHeight={1} textColor={lightText}>
            What is D3.js?
        </Heading>

        <List>
            <Appear fid="1">
                <ListItem textColor={lightText}>
                    a JavaScript library for manipulating documents based on data
                </ListItem>
            </Appear>

            <Appear fid="2">
                <ListItem textColor={lightText}>
                    bind arbitrary data to a DOM, and then apply data-driven transformations to the document
                </ListItem>
            </Appear>
        </List>
    </div>
);

export default D3Intro;
