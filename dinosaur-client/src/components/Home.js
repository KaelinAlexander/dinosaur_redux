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
            <div className="columns is-multiline">
            <div className="column">Loading...</div>
            </div>
            )
        } else {
            return (
            <div className="columns is-multiline">
                {this.props.dinosaurs.map(dino => 
                <div className="column is-one-third" key={dino.id}>
                    <div className="card">
                        <div className="card-content">
                            <p className="title">{dino.genus}</p>
                       </div>
                       <footer className="card-footer">
                           <p className="card-footer-item">
                              <Link to={"/dinosaurs/" + dino.id }>View</Link> 
                           </p>
                           <p className="card-footer-item">
                              <Link to="/about">Edit</Link> 
                           </p>
                           <p className="card-footer-item">
                              <Link to="/about">Delete</Link> 
                           </p>
                       </footer>
                    </div>
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