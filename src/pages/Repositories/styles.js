import styled from 'styled-components'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: stretch;
    padding: 10px;
    background: #7159c1;
`

export const Icons = styled(Icon).attrs(props => ({
    color: props.color,
    name: props.name,
    size: props.size,
}))`` 

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: stretch;
`

export const GobackContent = styled.TouchableOpacity.attrs({
    hitSlop: ({
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
    })
})`
   position: absolute;
   top: 5px;
   right: 5px;
`

export const RepoFlatList = styled.FlatList`
    flex: 1;
    margin-top: 5px;
`

export const UserContent = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const ImageContent = styled.View`
    justify-content: center;
    align-items: center;
`

export const UserImage = styled.Image.attrs({
    resizeMode: 'cover',
})`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`
export const UserUsername = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;   
    padding: 5px 5px 0 5px; 
`

export const UserName = styled.Text`
    color: #fff;
    font-size: 15px;   
    padding: 0 5px 5px 5px; 
`

export const DescriptionContent = styled.View`
    flex-direction: column;
    margin: 10px 0;
`

export const UserDescription = styled.Text`
    color: #fff;
    font-size: 12px;
    padding: 2px;
`

export const UserLabel = styled.Text`
    color: #fff;
    font-size: 12px;
    padding: 2px;
    font-weight: bold;
`
  
export const RepositorieContent = styled.View`
    justify-content: center;
    align-items: stretch;
    background: #fff;
    box-shadow: 0 0 6px rgba(0,0,0,0.5);
    elevation: 5;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
`

export const RepositorieName = styled.Text`
    color: #383838;
    font-weight: bold;
    font-size: 20px;
`

export const RepositorieDescription = styled.Text`
    color: #666;
    font-size: 12px;
`