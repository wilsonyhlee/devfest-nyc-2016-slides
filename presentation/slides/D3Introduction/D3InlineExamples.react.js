import React, { Component } from 'react';

import {
    Fill,
    Heading,
    Layout,
    } from "spectacle";

import * as d3 from "d3";
import sentimentAnalysis from "sentiment-analysis";

const NEGATIVE_COLOUR = "#ff4040";
const NEUTRAL_COLOUR = "powderblue";
const POSITIVE_COLOUR = "#f0ad4e";

const duration = 200;

const NEGATIVE = -100;
const NEUTRAL = 0;
const POSITIVE = 100;

const transform = (interpolation, newColour) => {
    d3.select('#mouth')
        .transition().duration(duration)
        .attrTween('d', function() {
            // M x y - move cursor to x, y
            // s x2 y2 x y - draw a smooth curve using control point x2, y2, to end point x, y
            // (it's a lower case s so use relative coords)
            return function(t) { return 'M 90 200 s 60 ' + (interpolation(t)) + ' 120 0'; };
        })
        .style("stroke", newColour);
    d3.selectAll('.eyes').transition().duration(duration)
        .style("fill", newColour);
    d3.select('#face-1').transition().duration(duration)
        .style("stroke", newColour);
};

const classify = (score) => {
    if (score === 0 ) {
        return NEUTRAL;
    } else if (score > 0) {
        return POSITIVE;
    } else {
        return NEGATIVE;
    }
};

const getColour = (state) => {
    let newColour;
    switch (state) {
        case NEGATIVE:
            newColour = NEGATIVE_COLOUR;
            break;
        case POSITIVE:
            newColour = POSITIVE_COLOUR;
            break;
        case NEUTRAL:
            newColour = NEUTRAL_COLOUR;
            break;
        default:
            newColour = NEUTRAL_COLOUR;
            break;
    }
    return newColour;
};

const transformFace = (nextState) => {
    const d = d3.select('#mouth').attr('d');
    const currentY2 = Number(d.split(" ")[5]);
    const currentState = classify(currentY2);
    let interpolation, newColour;

    interpolation = (t) => ( currentState + t * (nextState - currentState));
    transform(interpolation, getColour(nextState));
};

const lightText = "#ccc";

class D3InlineExamples extends Component {

    constructor(props) {
        super(props);
        this.state = {input: '', result: 0};

        this._input = this._input.bind(this);
    }

    _input(e) {
        const input = e.target.value;
        const result = classify(sentimentAnalysis(input));
        this.setState({input: input, result: result}, transformFace(result));
    }

    render() {
        return (
            <div>
                <Heading size={2} lineHeight={1} textColor={lightText}>An inline example</Heading>
                <Layout>
                    <Fill>
                        <svg height="300" width="300">
                            <circle cx="150" cy="170" r="120" style={{fill: 'white', stroke:`${NEUTRAL_COLOUR}`, strokeWidth:'8'}} id="face-1"></circle>
                            <circle cx="100" cy="120" r="10" style={{fill: `${NEUTRAL_COLOUR}`}} id="eye-1" className="eyes"></circle>
                            <circle cx="200" cy="120" r="10" style={{fill: `${NEUTRAL_COLOUR}`}} id="eye-2" className="eyes"></circle>
                            <path style={{fill:'none', stroke:`${NEUTRAL_COLOUR}`, strokeWidth: 4 }} id="mouth" d="M 90 200 s 60 0 120 0"></path>
                        </svg>
                    </Fill>
                    <Fill>
                        <input
                            onChange={this._input}
                            style={{marginTop: "100px"}}
                            placeholder="Enter Text Here"
                        />
                    </Fill>
                </Layout>
            </div>

        )
    }
}

export default D3InlineExamples;
