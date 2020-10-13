import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDinosaurs } from '../actions/dinosaurActions'
import { Link } from 'react-router-dom'

class Home extends Component {

    componentDidMount() {
        console.log(this.props)
        this.props.fetchDinosaurs()
    }

    handleLoading = () => {
        if(this.props.loading) {
            return(
            <div className="columns">
            <div className="column">Loading...</div>
            </div>
            )
        } else {
            return (
            <div className="columns is-multiline">
                {this.props.dinosaurs.map(dino => 
                <div className="column is-one-quarter" key={dino.id}>
                <h1 className="is-size-3 title">{dino.genus}</h1>
                </div>
                )}
            </div>
            )
        }
    }

    render() {    
        return (
            <div>
                {this.handleLoading()}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        dinosaurs: state.dinosaurs
    }
}

const mapDispatchToProps = (dispatch) => {
    return { fetchDinosaurs: () => dispatch(fetchDinosaurs())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)