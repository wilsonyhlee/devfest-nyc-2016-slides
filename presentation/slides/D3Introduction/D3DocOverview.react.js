import React from 'react';

import {
    Heading,
    ListItem,
    List,
    } from "spectacle";

const lightText = "#ccc";

const D3DocOverview = (props) => {
    var showIndex = props.showIndex;

    return (
        <div>
            <Heading size={2} lineHeight={1} textColor={lightText}>
                D3 Documentation Overview
            </Heading>
            <List textColor={lightText}>
                {showIndex >= 0 ? <ListItem>Selections</ListItem> : null}

                <ListItem>{showIndex >= 1 ? `Dynamic Properties` : null }</ListItem>

                <ListItem>{showIndex >= 2 ? `Enter/ Exit` : null }</ListItem>

                <ListItem>{showIndex >= 3 ? `Transformation` : null }</ListItem>

                <ListItem>{showIndex >= 4 ? `More on https://d3js.org/` : null}</ListItem>
            </List>
        </div>
    )
};

export default D3DocOverview;
