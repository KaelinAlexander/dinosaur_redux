import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteDinosaur } from '../actions/dinosaurActions'
import Basics from './showTabs/Basics'
import History from './showTabs/History'
import Clade from './showTabs/Clade'

class Dinosaur extends Component {

    state = {
        basicsShow: "",
        historyShow: "is-hidden",
        cladeShow: "is-hidden",
        basicsTabSelected: "is-active",
        historyTabSelected: "",
        cladeTabSelected: ""
    }

    handleClick = () => {
        this.props.deleteDinosaur(this.props.dinosaur.id)
        this.props.history.push('/')
    }

    handleBasics = () => {
        this.setState({
            basicsShow: "",
            historyShow: "is-hidden",
            cladeShow: "is-hidden",
            basicsTabSelected: "is-active",
            historyTabSelected: "",
            cladeTabSelected: ""
        })
    }

    handleHistory = () => {
        this.setState({
            basicsShow: "is-hidden",
            historyShow: "",
            cladeShow: "is-hidden",
            basicsTabSelected: "",
            historyTabSelected: "is-active",
            cladeTabSelected: ""
        })
    }

    handleClade = () => {
        this.setState({
            basicsShow: "is-hidden",
            historyShow: "is-hidden",
            cladeShow: "",
            basicsTabSelected: "",
            historyTabSelected: "",
            cladeTabSelected: "is-active"
        })
    }

    render() {
        if (this.props.dinosaur ) {
        return(
        <div>
            <div className="columns">
                <div className="column">
                    <div className="tabs is-centered is-toggle">
                        <ul>
                            <li className={this.state.basicsTabSelected}>
                            <Link onClick={this.handleBasics}>Basics</Link>  
                            </li>
                            <li className={this.state.historyTabSelected}>
                            <Link onClick={this.handleHistory}>History</Link>  
                            </li>
                            <li className={this.state.cladeTabSelected}>
                            <Link onClick={this.handleClade}>Clade</Link>  
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="tab-content">

                <div id="dino-basics" className={this.state.basicsShow}>
                    <Basics dinosaur={this.props.dinosaur} />
                </div>

                <div id="dino-history" className={this.state.historyShow}>
                    <History dinosaur={this.props.dinosaur} />
                </div>

                <div id="dino-clade" className={this.state.cladeShow}>
                    <Clade dinosaur={this.props.dinosaur} />
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