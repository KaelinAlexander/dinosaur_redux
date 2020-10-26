import React, { Component } from 'react'

class LikeButton extends Component {

    state = {
        likes: 0
    }

    handleClick = () => {
        const oldLikes = this.state.likes
        this.setState({
            likes: oldLikes + 1
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>{this.state.likes}</button>
            </div>
        )
    }

}

export default LikeButton