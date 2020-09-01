import React, { Component } from "react";
import Categories from "./Components/Categories/Categories";

import COURSES_DATA from "./data";

import "./App.css";

class App extends Component {
  state = {
    courses: COURSES_DATA,
  };

  componentWillMount = () => {};

  apiCall = () => {};

  render() {
    const { courses } = this.state;
    return (
      <div className="App">
        <div>
          <h1>YOU TUBE APP</h1>
          {courses.map(({ id, ...otherCoursesProps }) => {
            return <Categories key={id} {...otherCoursesProps} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
