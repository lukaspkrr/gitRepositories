import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: stretch;
    padding: 10px;
    background: #7159c1;
`

export const RepositorieContent = styled.View`
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