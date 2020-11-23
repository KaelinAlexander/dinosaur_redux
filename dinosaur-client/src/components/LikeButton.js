import React, { Component } from 'react'

class LikeButton extends Component {

    state = {
        likes: 0
    }

    handleClick = () => {
        this.setState({
            likes: this.state.likes + 1
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