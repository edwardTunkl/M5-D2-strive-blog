import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
//import posts from "../../../data/posts.json";
export default class BlogList extends Component {
  state = { posts: [] };

  
  fetchPosts = async () => {
    try {
      let response = await fetch("http://localhost:3001/blogPosts");
      let recievedPosts = await response.json();
      this.setState = ({ posts: recievedPosts });
      console.log(recievedPosts)
      return recievedPosts
    } catch (error) {
      console.log(error);
    }
  };
  
  componentDidMount(){
    this.fetchPosts()
    console.log("STATE",this.state.posts)
   
  }

  render() {
    return (
      <Row>
        {this.state.posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}
