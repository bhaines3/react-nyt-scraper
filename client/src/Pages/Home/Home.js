import React, { Component } from 'react';
import "./Home.css";
import Panel from '../../Components/Panel';
import API from '../../utils/API';
import {SaveBtn} from "../../Components/Buttons";


class Home extends Component {
  state = {
    articles: [],
    q: "",
    start_year: "",
    end_year: "",
  };

  handleChange = (event) => {
    console.log(event.target.value);
    var name = event.target.name
    var value = event.target.value
    this.setState({
      [name]: value
    });
  }
  handleSearch = () => {
    API.getArticles({
      q: this.state.q,
      start_year: this.state.start_year,
      end_year: this.state.end_year
    }).then((res) => {
      this.setState({
        articles: res.data
      });
    })
    
  }

  saveArticle = article => {
    API.saveArticle({title: article.headline.main, url: article.web_url})
    .then(alert('Article saved!'))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container-fluid">
        <Panel title="Search"> 
          <div className="input-group">
            <h4 className="text-center">Topic</h4>
            <input 
              className="form-control" 
              value={this.state.q}
              name="q"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <h4 className="text-center">Start Year</h4>
            <input 
              className="form-control" 
              value={this.state.start_year}
              name="start_year"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <h4 className="text-center">End Year</h4>
            <input 
              className="form-control" 
              value={this.state.end_year}
              name="end_year"
              onChange={this.handleChange}
            />
          </div>
          <div className="searchBtn text-center">
            <button 
            className="btn btn-primary"
            onClick={this.handleSearch}
            >Search</button>
          </div>
        </Panel>
        <Panel title={"Results"}>
          <div className="ArticleResults">
            {this.state.articles.map(article => (
              <div key={article._id}>
                <a href={article.web_url} target="_blank">{article.headline.main}</a>
                <SaveBtn onClick={() => this.saveArticle(article)} />
              </div>
            ))}
          </div>
        </Panel>
      </div>
    );
  }
}

export default Home;