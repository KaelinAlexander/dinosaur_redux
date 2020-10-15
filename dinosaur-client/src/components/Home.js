import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { fetchDinosaurs } from '../actions/dinosaurActions'
import { deleteDinosaur } from '../actions/dinosaurActions'
import { Link } from 'react-router-dom'
import Sauropod from '../assets/groups/Sauropod.jpg'
import Theropod from '../assets/groups/Theropod.jpg'

class Home extends Component {

    componentDidMount() {
        this.props.fetchDinosaurs()
    }

    handleClick = event => {
        let deleteId = parseInt(event.target.parentElement.id)
        this.props.deleteDinosaur(deleteId)
        this.props.history.push('/')
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
                                <figure className="image is-48x48">
                                    {/* <img src={`${dino.grouping}`} /> */}
                                    <img src={dino.grouping} alt="Grouping" />
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
                              <Link id={dino.id} onClick={this.handleClick}>
                                <FontAwesomeIcon id={dino.id} onClick={this.handleClick} icon={["far", "trash-alt"]} color="black" />
                              </Link> 
                           </p>
                       </footer>
                    </div>
                </div>
                )}
            </div>

            <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-content has-background-white">
                <h3>Are you sure you want to delete this?</h3>
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