import React from 'react'
import styled from 'styled-components'

const MyCardDiv = styled.div`
  width: 500px;
  height: 520px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
  align-items: center;
  background-color: #f2f2f2;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
`
const TextUserId = styled.p`
  font-size: 20px;
  font-weight: 600;
`
const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
`
class MyCard extends React.Component {
  render() {
    return (
      <MyCardDiv>
        <h1>My Card</h1>
        <TextUserId>{this.props.user.login}</TextUserId>
        <Image src={this.props.user.avatar_url} />
        <Text>Name: {this.props.user.name}</Text>
        <Text>Location: {this.props.user.location}</Text>
        <Text>Public Repos: {this.props.user.public_repos}</Text>
        <Text>
          Followers: {this.props.user.followers} / Following:{' '}
          {this.props.user.following}
        </Text>
      </MyCardDiv>
    )
  }
}

export default MyCard
