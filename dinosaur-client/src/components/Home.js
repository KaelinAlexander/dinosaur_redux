import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchDinosaurs } from '../actions/fetchDinosaurs'

class Home extends Component {

    handleOnClick() {
        this.props.fetchDinosaurs()
    }

    render() {
    const dinosaurs = this.props.dinosaurs.map(dino => <li key={dino.id}>{dino.genus}</li>)
        return (
            <div>
                <button onClick={(event) => this.handleOnClick(event)} />
                { dinosaurs }
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return { fetchDinosaurs: () => dispatch(fetchDinosaurs())}
}

function mapStateToProps(state) {
    return {dinosaurs: state.dinosaurs}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)