import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteDinosaur } from '../actions/dinosaurActions'

class Dinosaur extends Component {

    state = {
        basicsShow: "",
        historyShow: "is-hidden",
        cladeShow: "is-hidden"
    }

    handleClick = () => {
        this.props.deleteDinosaur(this.props.dinosaur.id)
        this.props.history.push('/')
    }

    handleBasics = () => {
        this.setState({
            basicsShow: "",
            historyShow: "is-hidden",
            cladeShow: "is-hidden"
        })
    }

    handleHistory = () => {
        this.setState({
            basicsShow: "is-hidden",
            historyShow: "",
            cladeShow: "is-hidden"
        })
    }

    handleClade = () => {
        this.setState({
            basicsShow: "is-hidden",
            historyShow: "is-hidden",
            cladeShow: ""
        })
    }

    render() {
        if (this.props.dinosaur) {
        return(
        <div>
            <div className="columns">
                <div className="column">
                    <div className="tabs is-centered is-boxed">
                        <ul>
                            <li>
                            <Link onClick={this.handleBasics}>Basics</Link>  
                            </li>
                            <li>
                            <Link onClick={this.handleHistory}>History</Link>  
                            </li>
                            <li>
                            <Link onClick={this.handleClade}>Clade</Link>  
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="tab-content">

                <div id="dino-basics" className={this.state.basicsShow}>
                It worked! Let's find out all about {this.props.dinosaur.genus}!
                </div>

                <div id="dino-history" className={this.state.historyShow}>
                This is the history page.
                </div>

                <div id="dino-clade" className={this.state.cladeShow}>
                This is the clade page.
                </div>

            </div>
            
            <button onClick={this.handleClick}>Delete Dinosaur</button>

        </div>
        )
        } else {
            return (
                <h1>Content loading...</h1>
            )
        }
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