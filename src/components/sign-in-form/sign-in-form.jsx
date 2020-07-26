import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {connect} from "react-redux";

class SignInForm extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    return (<form className="login__form form"
      action=""
      onSubmit={this.handleSubmit}
      method="post">
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input" type="email" name="email" placeholder="Email" required=""
          ref={this.loginRef}
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input" type="password" name="password" placeholder="Password" required=""
          ref={this.passwordRef}
        />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>);
  }
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {SignInForm};
export default connect(null, mapDispatchToProps)(SignInForm);

