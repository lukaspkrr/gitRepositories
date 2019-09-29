import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as RepositoriesActions } from './../../store/ducks/repositories'

import { 
    Container,
    Content,
    RepoFlatList,
    RepositorieContent,
    RepositorieName,
    RepositorieDescription,
    UserContent,
    ImageContent,
    UserImage,
    UserUsername,
    UserName,
    DescriptionContent,
    UserDescription,
    UserLabel,
    GobackContent,
    Icons,
} from './styles'

class Repositories extends Component {
  componentDidMount() {
     const { loadRepositoriesRequest } = this.props
     loadRepositoriesRequest()
  }

  goBackToLogin = () => {
    const { navigation } = this.props
    navigation.navigate('Login')
  }

  render() {
    const { user, repositories } = this.props
    return (
      <Container>
          {
            repositories.loading
            ? <ActivityIndicator size="large" color="#fff" />
            : (
              <Content>
              <GobackContent onPress={this.goBackToLogin}>
                <Icons
                  name="close"
                  color="#fff"
                  size={24}
                />
              </GobackContent>
              <UserContent>
              <ImageContent>
                <UserImage source={{ uri: user.avatar }} />
              </ImageContent>
              <DescriptionContent>
                <DescriptionContent>
                  <UserUsername>{user.username}</UserUsername>
                  <UserName>{user.name}</UserName>
                </DescriptionContent>
              </DescriptionContent>
              </UserContent>
              <DescriptionContent>
                  {user.company
                  ? (<UserContent>
                    <UserLabel>Company: </UserLabel>
                    <UserDescription>{user.company}</UserDescription>
                  </UserContent>)
                  : null}
                  {user.blog
                  ? (<UserContent>
                    <UserLabel>Blog: </UserLabel>
                    <UserDescription>{user.blog}</UserDescription>
                  </UserContent>)
                  : null}
                  {user.location
                  ? (<UserContent>
                    <UserLabel>Location: </UserLabel>
                    <UserDescription>{user.location}</UserDescription>
                  </UserContent>)
                  : null}
                  {user.email
                  ? (<UserContent>
                    <UserLabel>E-mail: </UserLabel>
                    <UserDescription>{user.email}</UserDescription>
                  </UserContent>)
                  : null}
                </DescriptionContent>
              <UserUsername>Repositories: </UserUsername>
              <RepoFlatList
                data={repositories.data}
                renderItem={({ item }) => (
                  <RepositorieContent>
                    <RepositorieName>{item.name}</RepositorieName>
                    <RepositorieDescription>{item.full_name}</RepositorieDescription>
                    <RepositorieDescription>{item.private ? 'Privado' : 'Público'}</RepositorieDescription>
                  </RepositorieContent>
                )}
                keyExtractor={item => `${item.id}`}
              />
              </Content>
            )
          }
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  user: state.login.user,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Repositories)