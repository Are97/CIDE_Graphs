
import React from 'react';

//import ShowcaseButton from '../showcase-components/showcase-button';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries
} from 'react-vis';

function generateData() {
  return [...new Array(10)].map(row => ({
    x: Math.random() * 5,
    y: Math.random() * 10
  }));
}

const MODE = ['noWobble'];

export default class Example extends React.Component {
  state = {
    data: generateData(),
    modeIndex: 0
  };

  updateModeIndex = increment => () => {
    const newIndex = this.state.modeIndex + (increment ? 1 : -1);
    const modeIndex =
      newIndex < 0 ? MODE.length - 1 : newIndex >= MODE.length ? 0 : newIndex;
    this.setState({
      modeIndex
    });
  };

  render() {
    const {modeIndex, data} = this.state;
    return (
      <div className="centered-and-flexed">
        <XYPlot width={300} height={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <MarkSeries animation={MODE[modeIndex]} data={data} />
        </XYPlot>
        <button
          onClick={() => this.setState({data: generateData()})}
          buttonContent={'UPDATE DATA'}
        />
      </div>
    );
  }
}