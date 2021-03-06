import React from 'react';

import {
    ListItem,
    List,
    } from "spectacle";

const lightText = "#ccc";

const Resources = () => (
    <div>
        <List textColor={lightText}>
            <ListItem>
                <b>D3: </b>
                https://d3js.org/
            </ListItem>
            <ListItem>
                <b>Mike Bostock: </b>
                https://bost.ocks.org/mike/
            </ListItem>
            <ListItem>
                <b>D3 Plus: </b>
                https://d3plus.org/
            </ListItem>
            <ListItem>
                <b>Sara Soueidan SVG Blog: </b>
                goo.gl/rw1FTb
            </ListItem>
            <ListItem>
                <b>Interactive Data Visualization for the Web (book): </b>
                https://goo.gl/2QDrtt
            </ListItem>
            <br />
            <ListItem>
                Find me on Twitter <b>@wilsonyhlee</b>
            </ListItem>
            <ListItem>
                <b>Link to these slides: </b>
                https://goo.gl/sGC1rF
            </ListItem>
            <ListItem>
                <b>Spectacle, ReactJS presentation framework: </b>
                https://goo.gl/H1eNXh
            </ListItem>
        </List>
    </div>
);

export default Resources;

