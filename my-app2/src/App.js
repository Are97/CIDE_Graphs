import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  LineSeries,
  MarkSeries,
  AreaSeries,
  VerticalBarSeries,
  HorizontalBarSeries
  
}from 'react-vis';

import {curveCatmullRom} from 'd3-shape';


class App extends Component {
  render() {
    return (
      <div className="App">

        <XYPlot width={600} height={300} margin={60}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Empleo_numero_obreros_por_distrito_industrial 1945-1985"/>
          <YAxis title="Poblacion"/>
          <LineMarkSeries
            className="linemark-series-example"
            style={{
              strokeWidth: '3px'
            }}
            lineStyle={{stroke: 'red'}}
            markStyle={{stroke: 'blue'}}

            data={
              [
                {
                    
                    x: 1945,
                    y: 58069
                  },
                  {
                    x: 1950,
                    y: 59600
                  },
                  {
                    x: 1955,
                    y: 71644
                  },
                  {
                    x: 1960,
                    y: 76858
                  },
                  {
                    x: 1965,
                    y: 154530
                  },
                  {
                    x: 1970,
                    y: 199579
                  },
                  {
                    x: 1975,
                    y: 255174
                  },
                  {
                    x: 1976,
                    y: 244133
                  },
                  {
                    x: 1977,
                    y: 271606
                  },
                  {
                    x: 1978,
                    y: 303124
                  },
                  {
                    x: 1979,
                    y: 325733
                  },
                  {
                    x: 1980,
                    y: 360483
                  },
                  {
                    x: 1981,
                    y: 341309
                  },
                  {
                    x: 1982,
                    y: 303010
                  },
                  {
                    x: 1983,
                    y: 310688
                  },
                  {
                    x: 1984,
                    y: 341491
                  },
                  {
                    x: 1985,
                    y: 272429
                  }
                 
               ]

            }
          />
          
        </XYPlot>

        <XYPlot width={600} height={300}>
      <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
      <VerticalGridLines style={{stroke: '#B7E9ED'}} />
      <XAxis
        title="Empleo_tasa_desocupación_abierta_urbanas1973-1997"
        style={{
          line: {stroke: '#ADDDE1'},
          ticks: {stroke: '#ADDDE1'},
          text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
        }}
      />
      <YAxis title="Tasa General" />
      <LineSeries
        className="first-series"
        data={
          [
            {
              x: 1973,
              y: 7.5
            },
            {
              x: 1974,
              y: 7.2
            },
            {
              x: 1975,
              y: 7.2
            },
            {
              x: 1976,
              y: 6.7
            },
            {
              x: 1977,
              y: 8.1
            },
            {
              x: 1978,
              y: 6.8
            },
            {
              x: 1979,
              y: 5.8
            },
            {
              x: 1980,
              y: 4.5
            },
            {
              x: 1981,
              y: 4.2
            },
            {
              x: 1982,
              y: 4.2
            },
            {
              x: 1983,
              y: 6.8
            },
            {
              x: 1984,
              y: 5.7
            },
            {
              x: 1985,
              y: 4.4
            },
            {
              x: 1986,
              y: 4.3
            },
            {
              x: 1987,
              y: 3.9
            },
            {
              x: 1988,
              y: 3.6
            },
            {
              x: 1989,
              y: 3
            },
            {
              x: 1990,
              y: 2.8
            },
            {
              x: 1991,
              y: 2.6
            },
            {
              x: 1992,
              y: 2.8
            },
            {
              x: 1993,
              y: 3.4
            },
            {
              x: 1994,
              y: 3.7
            },
            {
              x: 1995,
              y: 6.2
            },
            {
              x: 1996,
              y: 5.5
            },
            {
              x: 1997,
              y: 3.7
            }
           ]
        }
        style={{
          strokeLinejoin: 'round',
          strokeWidth: 4
        }}
      />
      
    </XYPlot>


    <XYPlot width={600} height={300} >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis title="Empleo_tiempo_medio_trabajado_semanalmente_por_distrito_industrial1940-1985" />
      <YAxis title="Promedio" />
      
      <AreaSeries
        className="area-series-example"
        curve="curveNatural"
        data={
          [
            {
              "FIELD1": 0,
              x: 1940,
              y: 44.27
            },
            {
              "FIELD1": 1,
              x: 1945,
              y: 45.88
            },
            {
              "FIELD1": 2,
              x: 1950,
              y: 46.61
            },
            {
              "FIELD1": 3,
              x: 1955,
              y: 46.14
            },
            {
              "FIELD1": 4,
              x: 1960,
              y: 45.96
            },
            {
              "FIELD1": 5,
              x: 1965,
              y: 44.96
            },
            {
              "FIELD1": 6,
              x: 1970,
              y: 44.05
            },
            {
              "FIELD1": 7,
              x: 1975,
              y: 44.05
            },
            {
              "FIELD1": 8,
              x: 1976,
              y: 45.16
            },
            {
              "FIELD1": 9,
              x: 1977,
              y: 44.08
            },
            {
              "FIELD1": 10,
              x: 1978,
              y: 46.9
            },
            {
              "FIELD1": 11,
              x: 1979,
              y: 46.3
            },
            {
              "FIELD1": 12,
              x: 1980,
              y: 46.02
            },
            {
              "FIELD1": 13,
              x: 1981,
              y: 44.89
            },
            {
              "FIELD1": 14,
              x: 1982,
              y: 44.11
            },
            {
              "FIELD1": 15,
              x: 1983,
              y: 44.42
            },
            {
              "FIELD1": 16,
              x: 1984,
              y: 46.14
            },
            {
              "FIELD1": 17,
              x: 1985,
              y: 45.99
            }
           ]

        }
      />
    </XYPlot>

    <XYPlot width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <AreaSeries
        className="area-elevated-series-1"
        color="#79c7e3"
        data={[
          {x: 1, y: 10, y0: 1},
          {x: 2, y: 25, y0: 5},
          {x: 3, y: 15, y0: 3}
        ]}
      />
      <AreaSeries
        className="area-elevated-series-2"
        color="#12939a"
        data={[
          {x: 1, y: 5, y0: 6},
          {x: 2, y: 20, y0: 11},
          {x: 3, y: 10, y0: 9}
        ]}
      />
      <LineMarkSeries
        className="area-elevated-line-series"
        data={[{x: 1, y: 5.5}, {x: 2, y: 15}, {x: 3, y: 9}]}
      />
    </XYPlot>

    <XYPlot
          margin={{left: 75}}
          xType="time"
          width={300}
          height={300}
          
        >
          <VerticalBarSeries className="vertical-bar-series-example" data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]} />
          <XAxis />
          <YAxis />
        </XYPlot>

        
        <XYPlot width={300} height={300} stackBy="x">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <HorizontalBarSeries data={[{y: 2, x: 10}, {y: 4, x: 5}, {y: 5, x: 15}]} />
          <HorizontalBarSeries data={[{y: 2, x: 12}, {y: 4, x: 2}, {y: 5, x: 11}]} />
        </XYPlot>
    </div>
    );
  }
}

export default App;