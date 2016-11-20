// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


// slides
import TitleSlide from "./slides/TitleSlide.react.js";
import SeatMapComparison from "./slides/SeatMapComparison.react.js";
import D3Intro from "./slides/D3Introduction/D3Intro.react.js";
import D3ProsCons from "./slides/D3Introduction/D3ProsCons.react.js";
import D3DocOverview from "./slides/D3Introduction/D3DocOverview.react.js";
import D3Examples from "./slides/D3Introduction/D3Examples.react.js";
import D3InlineExamples from "./slides/D3Introduction/D3InlineExamples.react.js";
import CymruExample from "./slides/CymruExample.react.js";
import CongressExample from "./slides/CongressExample.react.js";
import Resources from "./slides/Resources.react.js";

const images = {
    stage_view: require("../assets/chicago_stage_view.png"),
    street_view: require("../assets/chicago_street_view.png"),
    telecharge: require("../assets/telecharge.png"),
    todayTix: require("../assets/todayTix.png"),
    broadwaycom: require("../assets/Cymru.png")
};

preloader(images);

const darkBgd = "#111";
const lightText = "#ccc";
const theme = createTheme({
  primary: darkBgd
});

export default class Presentation extends React.Component {
  render() {
    return (
        <Spectacle theme={theme}>
            <Deck transition={["zoom", "slide"]} transitionDuration={500}>

                <Slide transition={["zoom"]} bgColor={darkBgd}>
                    <TitleSlide />
                </Slide>

                <Slide transition={["slide"]} bgColor={darkBgd} bgImage={images.street_view.replace("/", "")}>
                </Slide>

                <Slide transition={["slide"]} bgColor={darkBgd} bgImage={images.stage_view.replace("/", "")}>
                </Slide>

                <Slide transition={["slide"]} bgColor={darkBgd}>
                    <SeatMapComparison
                        telecharge={images.telecharge}
                        todayTix={images.todayTix}
                        broadwaycom={images.broadwaycom}
                    />
                </Slide>

                <Slide transition={["slide"]} bgColor={darkBgd}>
                    <D3Intro />
                </Slide>

                <Slide transition={["slide"]} bgColor={darkBgd}>
                    <D3ProsCons />
                </Slide>

                <Slide transition={["slide"]} bgColor={darkBgd}>
                    <D3DocOverview showIndex={0} />
                </Slide>

                <Slide>
                    <CodePane
                        lang="javascript"
                        source={require("raw!../assets/selections.example")}
                        margin="20px auto"
                        style={{fontSize: "1.6rem"}}
                        />
                </Slide>

                <Slide transition={["slide"]} bgColor={darkBgd}>
                    <D3DocOverview showIndex={1} />
                </Slide>

                <Slide>
                    <CodePane
                        lang="javascript"
                        source={require("raw!../assets/dynamic.example")}
                        margin="20px auto"
                        style={{fontSize: "1.6rem"}}
                        />
                </Slide>

                <Slide transition={["slide"]} bgColor={darkBgd}>
                    <D3DocOverview showIndex={2} />
                </Slide>

                <Slide>
                    <CodePane
                        lang="javascript"
                        source={require("raw!../assets/enterExit.example")}
                        margin="20px auto"
                        style={{fontSize: "1.6rem"}}
                        />
                </Slide>

                <Slide transition={["slide"]} bgColor={darkBgd}>
                    <D3DocOverview showIndex={3} />
                </Slide>

                <Slide>
                    <CodePane
                        lang="javascript"
                        source={require("raw!../assets/transformation.example")}
                        margin="20px auto"
                        style={{fontSize: "1.6rem"}}
                        />
                </Slide>

                <Slide transition={["slide"]} bgColor={darkBgd}>
                    <D3DocOverview showIndex={4} />
                </Slide>

                <Slide transition={["slide"]} bgColor={darkBgd}>
                    <D3Examples
                        title="Wimbledon 2013"
                        url="http://charts.animateddata.co.uk/tennis/"
                    />
                </Slide>

                <Slide transition={["slide"]} bgColor={darkBgd}>
                    <D3Examples
                        title="Earth Projection"
                        url="https://www.jasondavies.com/maps/rotate/"
                    />
                </Slide>

                <Slide transition={["slide"]} bgColor={darkBgd}>
                    <D3InlineExamples />
                </Slide>

                <Slide
                    transition={["slide"]}
                    bgColor={darkBgd}
                    notes={"1. same ecosystem 2. responsive 3. elegant interaction + animation"}>
                    <CymruExample />
                </Slide>

                <Slide
                    transition={["slide"]}
                    bgColor={darkBgd}
                    notes={"1. more interaction 2. dashboard of information"}>
                    <CongressExample />
                </Slide>

                <Slide transition={["slide"]} bgColor={darkBgd}>
                    <BlockQuote>
                        <Quote textColor={lightText}>
                            D3 is not a monolithic framework that seeks to provide every conceivable feature.
                            Instead, D3 solves the crux of the problem: efficient manipulation of documents based on data.
                        </Quote>
                        <Cite>
                            Mike Bostock, d3js.org
                        </Cite>
                    </BlockQuote>
                </Slide>

                <Slide transition={["slide"]} bgColor={darkBgd}>
                    <Resources />
                </Slide>

            </Deck>
        </Spectacle>
    );
  }
}
