import React, { Component } from "react";
import { Card, Grid, Button } from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { resetPassword } from "../../redux/actions/LoginActions";

class ChangePassword extends Component {
  state = {
    // email: "watson@example.com",
    password: "",
    password1: "",
    password2: "",
  };
  handleChange = event => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleFormSubmit = () => {
    this.props.resetPassword({ ...this.state });
  };
  render() {
    let {password, password1, password2 } = this.state;

    return (
      <div className="signup flex justify-center w-full h-full-screen">
        <div className="p-8">
          <Card className="signup-card position-relative y-center">
            <Grid container>
              <Grid item lg={5} md={5} sm={5} xs={12}>
                <div className="p-8 flex justify-center items-center h-full">
                  <img src="/assets/images/illustrations/dreamer.svg" alt="" />
                </div>
              </Grid>
              <Grid item lg={7} md={7} sm={7} xs={12}>
                <div className="p-9 h-full bg-light-gray position-relative">
                  <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>

                  <TextValidator
                      className="mb-3 w-full"
                      label="Current Password"
                      variant="outlined"
                      onChange={this.handleChange}
                      name="password"
                      type="password"
                      value={password}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                    
                    <TextValidator
                      className="mb-3 w-full"
                      label="Change Password"
                      variant="outlined"
                      onChange={this.handleChange}
                      name="password1"
                      type="password"
                      value={password1}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                                        <TextValidator
                      className="mb-3 w-full"
                      label="Change Password"
                      variant="outlined"
                      onChange={this.handleChange}
                      name="password2"
                      type="password"
                      value={password2}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                    <div className="flex items-center">
                      <Button variant="contained" color="primary" type="submit">
                        Change Password
                      </Button>
                      <span className="ml-4 mr-2">or</span>
                      <Button
                        className="capitalize"
                        onClick={() =>
                          this.props.history.push("/session/signin")
                        }
                      >
                        Sign in
                      </Button>
                    </div>
                  </ValidatorForm>
                </div>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  resetPassword: PropTypes.func.isRequired,
  login: state.login
});
export default withRouter(
  connect(mapStateToProps, { resetPassword })(ChangePassword)
);
