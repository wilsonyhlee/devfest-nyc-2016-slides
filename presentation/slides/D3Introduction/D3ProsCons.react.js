import React from 'react';

import {
    Appear,
    Heading,
    ListItem,
    List,
    } from "spectacle";

const lightText = "#ccc";

const D3ProsCons = () => (
    <div>
        <Heading size={2} lineHeight={1} textColor={lightText}>
            Pros {"&"} Cons
        </Heading>
        <List>
            <Appear fid="1">
                <ListItem textColor={lightText}>
                    Pros:
                    <ul>
                        <li>lightweight and fast</li>
                        <Appear fid="2">
                            <li>highly flexible</li>
                        </Appear>
                        <Appear fid="3">
                            <li>dynamic and beautiful</li>
                        </Appear>
                    </ul>
                </ListItem>
            </Appear>

            <Appear fid="4">
                <ListItem textColor={lightText}>
                    Cons:
                    <ul>
                        <li>steeper learning curve</li>
                        <Appear fid="5">
                            <li>only supported on modern browsers (Chrome, FireFox, Safari and IE9+)</li>
                        </Appear>
                        <Appear fid="6">
                            <li>no support for chart export</li>
                        </Appear>
                    </ul>
                </ListItem>
            </Appear>
        </List>
    </div>
);

export default D3ProsCons;
