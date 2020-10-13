import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dinosaur extends Component {
    render() {
        return(
        <div>
            It worked!
            {console.log(this.props.dinosaur)}
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

export default connect(mapStateToProps)(Dinosaur)