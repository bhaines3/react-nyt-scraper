import React, { Component } from 'react';
import Panel from '../../Components/Panel';
import {DeleteBtn} from "../../Components/Buttons";
import API from "../../utils/API";

class Saved extends Component {
  state = {
    saved: []
  };

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    API.getSavedArticles()
      .then(res => this.setState({ saved: res.data }))
      .catch(err => console.log(err));
  }

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container-fluid">
        <Panel title="Saved">
          <div>
          {this.state.saved.map(article => (
            <div key={article._id}>
              <a href={article.url}>{article.title}</a>
              <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
            </div>
          ))}
          </div>
        </Panel>
      </div>
    );
  }
}

export default Saved;