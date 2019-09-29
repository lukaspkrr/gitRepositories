import React, { Component } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as RepositoriesActions } from './../../store/ducks/repositories'

import { 
    Container,
    RepositorieContent,
    RepositorieName,
    RepositorieDescription,
} from './styles';

class Repositories extends Component {
  componentDidMount() {
     const { loadRepositoriesRequest } = this.props;
     loadRepositoriesRequest()
  }

  render() {
    const { repositories } = this.props
    return (
      <Container>
        <ScrollView>
          {
            repositories.loading
            ? <ActivityIndicator size="large" color="#fff" />
            : (
              repositories.data.map(repo => (
                <RepositorieContent key={repo.id} >
                  <RepositorieName>{repo.name}</RepositorieName>
                  <RepositorieDescription>{repo.full_name}</RepositorieDescription>
                  <RepositorieDescription>{repo.private ? 'Privado' : 'Público'}</RepositorieDescription>
                </RepositorieContent>
              ))
            )
          }
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Repositories)