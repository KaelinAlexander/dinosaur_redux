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
            return <div>Loading...</div>
        } else {
            return this.props.dinosaurs.map(dino => <li key={dino.id}>{dino.genus}</li>)
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