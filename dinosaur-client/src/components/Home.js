import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { fetchDinosaurs } from '../actions/dinosaurActions'
import { deleteDinosaur } from '../actions/dinosaurActions'
import { Link } from 'react-router-dom'

class Home extends Component {

    state = {
        modalToggle: "modal",
        deleteId: null,
        searchActive: false,
        foundDinos: [],
        searchTerm: ""
    }

    componentDidMount() {
        this.props.fetchDinosaurs()
    }

    handleClick = event => {
        debugger
        this.setState({
            ...this.state,
            modalToggle: "modal is-active",
            deleteId: event.target.parentElement.id
        })
    }

    handleModalAway = event => {
        this.setState({
            ...this.state,
            modalToggle: "modal",
            deleteId: null
        })
    }

    handleDelete = event => {
        let deleteId = parseInt(this.state.deleteId)
        this.props.deleteDinosaur(deleteId)
        this.props.history.push('/')
        this.setState({
            ...this.state,
            modalToggle: "modal",
            deleteId: null,
            searchActive: false,
            foundDinos: [],
            searchTerm: ""
        })
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            searchTerm: event.target.value
        })
    }

    handleSearch = (event) => {
        event.preventDefault();
        const editedSearch = this.state.searchTerm.charAt(0).toUpperCase() + this.state.searchTerm.substr(1).toLowerCase()
        debugger
        const foundDinos = this.props.dinosaurs.filter(dinosaur => dinosaur.genus === editedSearch)
        this.setState({
            ...this.state,
            searchTerm: "",
            searchActive: true,
            foundDinos: foundDinos
        })
              
   }

   clearSearch = (event) => {
       this.setState({
        ...this.state,
        searchActive: false,
        foundDinos: [],
        searchTerm: ""
       })
   }

    handleLoading = () => {
        if(this.props.loading) {
            return(
            <div className="columns is-multiline">
            <div className="column">Loading...</div>
            </div>
            )
        } else if (this.state.searchActive && this.state.foundDinos.length === 0 ){
            return(
                <div>
                <div id="search-bar">
                <form onSubmit={event => this.handleSearch(event)}>
                    <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
                    <button className="button">Submit</button>
                </form>
                <button className="button" onClick={this.clearSearch}>Clear Search</button>
                </div>   
                    Sorry, no dinosaurs found.
                </div>
            )        
        } else if (this.state.searchActive && this.state.foundDinos.length > 0 ){
            return (
                <div>
                <div id="search-bar">
                <form onSubmit={event => this.handleSearch(event)}>
                    <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
                    <button className="button">Submit</button>
                </form>
                <button className="button" onClick={this.clearSearch}>Clear Search</button>
                </div>                
                <div className="coulumns is-multiline">
                    {this.state.foundDinos.map(dino => 
                        <div className="column is-one-third" key={dino.id}>
                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                <figure className="image is-96x96">
                                    <img src={`/groups/${dino.grouping}.jpg`} alt="Grouping" />
                                </figure>
                                </div>  
                                <div className="media-content">                              
                                <p className="title is-4">{dino.genus}</p>
                                <p className="subtitle is-6">{dino.grouping}</p>
                                </div>
                            </div>
                            <div className="content">
                            {dino.description}
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
                <div className="modal-card">
                <div className="modal-card-head">
                <p className="modal-card-title">Are you sure you want to delete this dinosaur?</p>
                </div>
                <div className="modal-card-foot">
                <div className="buttons has-addons is-centered">
                <button className="button" onClick={this.handleDelete}>Yes</button>
                <button className="button" onClick={this.handleModalAway}>No</button>
                </div>
                </div>
                </div>
            </div>
                </div>
            )
        } else {
            return (                
            <div>
                <div id="search-bar">
                <form onSubmit={event => this.handleSearch(event)}>
                    <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
                    <button className="button">Submit</button>
                </form>
                <button className="button" onClick={this.clearSearch}>Clear Search</button>
            </div>
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
                                <div className="media-content">                              
                                <p className="title is-4">{dino.genus}</p>
                                <p className="subtitle is-6">{dino.grouping}</p>
                                </div>
                            </div>
                            <div className="content">
                            {dino.description}
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
                <div className="modal-card">
                <div className="modal-card-head">
                <p className="modal-card-title">Are you sure you want to delete this dinosaur?</p>
                </div>
                <div className="modal-card-foot">
                <div className="buttons has-addons is-centered">
                <button className="button" onClick={this.handleDelete}>Yes</button>
                <button className="button" onClick={this.handleModalAway}>No</button>
                </div>
                </div>
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