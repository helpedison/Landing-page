import React, { Component } from "react";
import $ from "jquery";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Testimonials from "./Components/Testimonials";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioData: {},
    };
  }

  getPortfolioData() {
    // Fetch request
    fetch("https://project-profile-business.uc.r.appspot.com/api/myself/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ portfolioData: data });
      })
      .catch((error) => {
        console.error(
          "An error occurred while loading the portfolio data: ",
          error
        );
        alert("An error occurred. Please check the console for more details.");
      });
  }

  componentDidMount() {
    /* setTimeout(function () {
      getPortfolioData();
    }, 100);*/
    this.getPortfolioData();
  }

  render() {
    console.log(this.state.portfolioData);
    return (
      <div className="App">
        <Header data={this.state.portfolioData.main} />
        <About data={this.state.portfolioData.main} />
        <Resume data={this.state.portfolioData.resume} />
        <Portfolio data={this.state.portfolioData.portfolio} />
        <Testimonials data={this.state.portfolioData.testimonials} />
        <Contact data={this.state.portfolioData.main} />
        <Footer />
      </div>
    );
  }
}

export default App;
