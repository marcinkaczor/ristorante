import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';

const errorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        showing: false
      }
    }
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({
          error: null,
          showing: false
        });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({
          error: error,
          showing: true
        });
      });
    }

    componentWillUnmount(){
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor)
    }

    errorConfirmedHandler = () => {
      this.setState({
        error: null,
        showing: false
      });
    }
    render() {
      return (
        <div>
          <Modal isOpen={this.state.showing} toggle={this.errorConfirmedHandler} >
            <ModalBody>
              {this.state.error ? this.state.error.message : null}
            </ModalBody>
          </Modal>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
}

export default errorHandler;