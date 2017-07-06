import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged} from '../actions';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './commons';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder="password"
          />
        </CardSection>

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}
// class LoginForm extends Component {
//   state = { email: '', password: '', error: '', loading: false };
//
//   onButtonPress() {
//     const { email, password } = this.state;
//
//     this.setState({ error: '', loading: true });
//
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(this.onLoginSuccess.bind(this))
//       .catch(() => {
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//           .then(this.onLoginSuccess.bind(this))
//           .catch(this.onLoginFail.bind(this));
//       });
//   }
//
//   onLoginFail() {
//     this.setState({
//       error: 'Authentification failed.',
//       loading: false
//      });
//   }
//
//   onLoginSuccess() {
//     this.setState({
//       email: '',
//       password: '',
//       loading: false,
//       error: ''
//     });
//   }
//
//   renderButton() {
//     if (this.state.loading) {
//       return <Spinner />;
//     }
//
//     return (
//       <Button onPress={this.onButtonPress.bind(this)}>
//         Log in
//       </Button>
//     );
//   }
//
//   render() {
//     return (
//       <Card>
//         <CardSection>
//           <Input
//             value={this.state.email}
//             onChangeText={email => this.setState({ email })}
//             label="Email"
//             placeholder='user@gmail.com'
//           />
//         </CardSection>
//
//         <CardSection>
//           <Input
//             value={this.state.password}
//             onChangeText={password => this.setState({ password })}
//             label="password"
//             placeholder='password'
//             secureTextEntry
//           />
//         </CardSection>
//
//         <Text style={styles.errorTextStyle}>
//           {this.state.error}
//         </Text>
//
//         <CardSection>
//           {this.renderButton()}
//         </CardSection>
//       </Card>
//     );
//   }
// }

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

const mapStateToProps = state => {
  return {
    email: state.auth.email
  };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
