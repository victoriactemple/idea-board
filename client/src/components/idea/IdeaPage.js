import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const UserHeader = styled.div`
font-family: "Didact Gothic", sans-serif;
font-size: 50px;
text-align: center;
`

const PostItContainer = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;


`
const PostItBlock = styled.div`
    border: 2px rgba(138, 134, 132, .5);
    border-radius: 2px;
    width: 275px;
    height: 275px;
    margin: 10px auto;
    background-color: rgba(255, 243, 149, .35)
    
`
const Title = styled.h3`
font-family: "Englebert", sans-serif;
text-decoration: underline;
text-align: center;
test-transform: toLowerCase;
`

const Description = styled.p`
font-family: "Ruluko", sans-serif;

padding-right: 10px;
padding-bottom: 10px;
padding-left: 20px;
`

class IdeaPage extends Component {
    state = {
        user: {
            userName: '',
            password: '',
            ideas: []

        }
    }
    async componentWillMount() {
        //Parent element is the Router that has a state of "match"
        //Router gives you history, location, and match
        // these props are being passed in from the 
        // console.log(this.props.match.params.userId)
        // const userId = this.props.match.params.userId
        // object destructuring 
        const { userId } = this.props.match.params

        const res = await axios.get(`/api/users/${userId}`)
        this.setState({ user: res.data })
    }
    render() {
return (
    <div>

    <UserHeader>
        {this.state.user.userName}'s Idea Board
    </UserHeader>

    {this.state.user.ideas.map((idea) => {
        return (

            <PostItContainer>
                <PostItBlock>

                    <span key={idea._id}></span>
                    <Title>{idea.title}</Title>

                <Description>
                <p>{idea.description}</p>
                </Description>
                    

                </PostItBlock>
            </PostItContainer>

        )
    })}

        </div>
    );
    }
}

export default IdeaPage;