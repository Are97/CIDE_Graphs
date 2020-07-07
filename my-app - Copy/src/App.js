import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  Crosshair,
  MarkSeries,
  Hint
} from 'react-vis';

const CHART_MARGINS = {left: 50, right: 10, top: 10, bottom: 25};
const DATA2 = [{x: 1, y: 5}, {x: 2, y: 10}, {x: 3, y: 10}, {x: 4, y: 15}];
const YMAX = 15;

const DATA = [
  [
    {x: 1, y: 10},
    {x: 2, y: 7},
    {x: 3, y: 15}
  ],
  [
    {x: 1, y: 20},
    {x: 2, y: 5},
    {x: 3, y: 15}
  ]
];

class App extends Component {

  _rememberValue = value => {
    this.setState({value});
  };

  constructor(props) {
    super(props);
    this.state = {
      crosshairValues: []
    };
    
  }
  
  render() {
    const {value} = this.state;
    return (
      <div className="App">

        <XYPlot
          onMouseLeave={() => this.setState({crosshairValues: []})}
          width={300}
          height={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries
            onNearestX={(value, {index}) =>
                this.setState({crosshairValues: DATA.map(d => d[index])})}
            data={DATA[0]}/>
          <LineSeries
            data={DATA[1]}/>
          <Crosshair values={this.state.crosshairValues}/>
        </XYPlot>

        <XYPlot width={300} height={300} margin={CHART_MARGINS}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <MarkSeries onNearestX={this._rememberValue} data={DATA2} />
        {value ? (
          <LineSeries
            data={[{x: value.x, y: value.y}, {x: value.x, y: YMAX}]}
            stroke="black"
          />
        ) : null}
        {value ? (
          <Hint
            value={value}
            align={{horizontal: Hint.ALIGN.AUTO, vertical: Hint.ALIGN.TOP_EDGE}}
          >
            <div className="rv-hint__content">{`(${value.x}, ${value.y})`}</div>
          </Hint>
        ) : null}
      </XYPlot>

      </div>
    );
  }
}

export default App;