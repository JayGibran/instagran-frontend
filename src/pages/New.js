import React, { Component } from "react";

import api from "../services/api";

import "./New.css";
import Axios from "axios";

class New extends Component {
  state = {
    image: null,
    author: "",
    place: "",
    description: "",
    hashtags: ""
  };

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const data = new FormData();
    data.append("image", this.state.image);
    data.append("author", this.state.author);
    data.append("description", this.state.description);
    data.append("place", this.state.place);
    data.append("hashtags", this.state.hashtags);
    api.post("posts", data).then(result => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChange} />
        <input
          type="text"
          name="author"
          onChange={this.handleChange}
          value={this.state.author}
          placeholder="Author do post"
        />
        <input
          type="text"
          name="place"
          onChange={this.handleChange}
          value={this.state.place}
          placeholder="Local do post"
        />
        <input
          type="text"
          name="description"
          onChange={this.handleChange}
          value={this.state.description}
          placeholder="Descricao do post"
        />
        <input
          type="text"
          name="hashtags"
          onChange={this.handleChange}
          value={this.state.hashtags}
          placeholder="Hashtags do post"
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default New;
