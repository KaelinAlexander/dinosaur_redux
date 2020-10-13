import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteDinosaur } from '../actions/dinosaurActions'

class Dinosaur extends Component {

    handleClick = () => {
        this.props.deleteDinosaur(this.props.dinosaur.id)
        this.props.history.push('/')
    }

    render() {
        return(
        <div>
            It worked! Let's find out all about {this.props.dinosaur.genus}!
            <button onClick={this.handleClick}>Delete Dinosaur</button>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = parseInt(ownProps.match.params.dinosaur_id)
    return {
      dinosaur: state.dinosaurs.find(dinosaur => dinosaur.id === id)
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        deleteDinosaur: (id) => { dispatch(deleteDinosaur(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dinosaur)