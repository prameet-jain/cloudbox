import React, { Component } from "react";
import AppError from "../AppError/AppError";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      error: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      // Fallback UI
      return <AppError />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
