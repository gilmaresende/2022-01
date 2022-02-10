import React from "react";
import axios from 'axios'

const API = "https://api.hgbrasil.com/weather?woeid=459740&format=json-cors";


class App extends React.Component {

  state = {
    city: "loadig...",
    forecast: []
  }

  componentDidMount() {
    // fetch(API).then(response => response.json()).then(json => { 
    //   this.setState({city: json.results.city_name})
    // });

    axios.get(API).then(({ data }) => {
      this.setState({
        city: data.results.city_name,
        forecast: data.results.forecast
      })

    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.city}</h1>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Min.</th>
              <th>Max.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2019-12-25</td>
              <td>15</td>
              <td>25</td>
            </tr>

          </tbody>
        </table>
      </div>
    )
  }


}
export default App