import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native'

import { Container, Input, Button, ButtonText, Error } from './styles';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as LoginActions} from './../../store/ducks/login'

class Login extends Component {
  state ={ username: ''}

  handleSubmit = async () => {
    const { username } = this.state
    const { loginRequest } = this.props

    loginRequest(username)
  }

  render() {
    const { username } = this.state
    const { error, loading } = this.props
    return (
      <Container>
        {error ? <Error>Nonexistent user</Error> : null}
        <Input
          value={username}
          onChangeText={text => this.setState({username: text})}
          autoCaptalize="none"
          autoCorrect={false}
          placeholder="Enter your git username"
        />
        <Button onPress={() => this.handleSubmit()}>
          { 
            loading 
            ? <ActivityIndicator size="small" color="#fff"/> 
            : <ButtonText>Enter</ButtonText>
          }
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login)