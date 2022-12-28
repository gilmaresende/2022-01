import React from "react";
import axios from "axios";
import "./index.css";

const API =
  "https://api.hgbrasil.com/weather?woeid=459740&format=json-cors&locale=pt";

class App extends React.Component {
  state = {
    city: "loadig...",
    forecast: [],
  };

  componentDidMount() {
    // fetch(API).then(response => response.json()).then(json => {
    //   this.setState({city: json.results.city_name})
    // });

    axios.get(API).then(({ data }) => {
      this.setState({
        city: data.results.city_name,
        forecast: data.results.forecast,
      });
    });
  }

  render() {
    return (
      <div className="container center">
        <h1>{this.state.city}</h1>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Min.</th>
              <th>Max.</th>
              <th>Previsão</th>
              <th>Img</th>
            </tr>
          </thead>
          <tbody>
            {this.state.forecast.map((day, index) => {
              return (
                <tr key={index}>
                  <td>{day.date}</td>
                  <td>{day.min}</td>
                  <td>{day.max}</td>
                  <td>{day.description}</td>
                  <td>
                    <img
                      src={`/weather-icons/${day.condition}.svg`}
                      alt={`${day.condition}`}
                    ></img>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
