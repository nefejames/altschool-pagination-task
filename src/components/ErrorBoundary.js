import { Component } from "react";
import { Center, Heading } from "@chakra-ui/react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <Center>
          <Heading color="red.600" mt={10}>
            A coding error has Occurred
          </Heading>
        </Center>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
