import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { fetchDinosaurs } from '../actions/dinosaurActions'
import { deleteDinosaur } from '../actions/dinosaurActions'
import { Link } from 'react-router-dom'

class Home extends Component {

    state = {
        modalToggle: "modal",
        deleteId: null
    }

    componentDidMount() {
        this.props.fetchDinosaurs()
    }

    handleClick = event => {
        this.setState({
            modalToggle: "modal is-active",
            deleteId: event.target.parentElement.id
        })
    }

    handleModalAway = event => {
        this.setState({
            modalToggle: "modal",
            deleteId: null
        })
    }

    handleDelete = event => {
        let deleteId = parseInt(this.state.deleteId)
        this.props.deleteDinosaur(deleteId)
        this.props.history.push('/')
        this.setState({
            modalToggle: "modal",
            deleteId: null
        })
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
            <div>
            <div className="columns is-multiline">
                {this.props.dinosaurs.map(dino =>
                <div className="column is-one-third" key={dino.id}>
                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                <figure className="image is-96x96">
                                    <img src={`/groups/${dino.grouping}.jpg`} alt="Grouping" />
                                </figure>
                                </div>                                
                                <p className="title">{dino.genus}</p>
                            </div>                            
                       </div>
                       <footer className="card-footer">
                           <p className="card-footer-item">
                              <Link to={"/dinosaurs/" + dino.id }>
                                  <FontAwesomeIcon icon={["far", "list-alt"]} color="black" />
                              </Link> 
                           </p>
                           <p className="card-footer-item">
                              <Link to={"/dinosaurs/edit/" + dino.id }>
                                <FontAwesomeIcon icon={["far", "edit"]} color="black" />
                              </Link> 
                           </p>
                           <p className="card-footer-item">
                              <Link id={dino.id}>
                                <FontAwesomeIcon id={dino.id} onClick={this.handleClick} icon={["far", "trash-alt"]} color="black" />
                              </Link> 
                           </p>
                       </footer>
                    </div>
                </div>
                )}
            </div>

            <div className={this.state.modalToggle}>
                <div className="modal-background"></div>
                <div className="modal-content has-background-white">
                <h3 className="title">Are you sure you want to delete this?</h3>
                <button onClick={this.handleDelete}>Yes</button>
                <button onClick={this.handleModalAway}>No</button>
                </div>
            </div>
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
    return { fetchDinosaurs: () => dispatch(fetchDinosaurs()),
             deleteDinosaur: (id) => dispatch(deleteDinosaur(id))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)