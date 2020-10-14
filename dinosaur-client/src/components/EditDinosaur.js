import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editDinosaur } from '../actions/dinosaurActions'

class EditDinosaur extends Component {

    state = {
            id: this.props.dinosaur.id,
            genus: this.props.dinosaur.genus,
            grouping: this.props.dinosaur.grouping,
            meaning: this.props.dinosaur.meaning,
            type_species: this.props.dinosaur.type_species,
            discovery_year: this.props.dinosaur.discovery_year,
            discovery_person: this.props.dinosaur.discovery_person,
            size: this.props.dinosaur.size,
            period: this.props.dinosaur.period,
            distribution: this.props.dinosaur.distribution,
            description: this.props.dinosaur.description
        }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleGroupingChange = event => {
        let idx = event.target.selectedIndex
        let new_grouping = event.target[idx].value
        this.setState({
            grouping: new_grouping
        })
        console.log(this.state)
    }

    handlePeriodChange = event => {
        let idx = event.target.selectedIndex
        let new_period = event.target[idx].value
        this.setState({
            period: new_period
        })
        console.log(this.state)
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.editDinosaur(this.state);
    }

    render() {

        const dinoToEdit = this.props.dinosaur ? (
        <div>
            <h1>You've reached the dinosaur edit page for {this.props.dinosaur.genus}!</h1>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" name="genus" 
                            value={this.state.genus}
                            onChange={event => this.handleChange(event)}
                             />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-one-third">
                                <div className="field">
                                    <label className="label">Grouping</label>
                                    <div className="select is-fullwidth" name="grouping">
                                        <select
                                        value={this.state.grouping}
                                        onChange={event => this.handleGroupingChange(event)}>
                                            <option value="Ankylosaur">Ankylosaur</option>
                                            <option value="Stegosaur">Stegosaur</option>
                                            <option value="Pachycephalosaur">Pachycephalosaur</option>
                                            <option value="Ceratopsid">Ceratopsid</option>
                                            <option value="Ornithopod">Ornithopod</option>
                                            <option value="Prosauropod">Prosauropod</option>
                                            <option value="Sauropod">Sauropod</option>
                                            <option value="Theropod">Theropod</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        <div className="column is-one-third">
                            <div className="field">
                                <label className="label">Meaning of Name</label>
                                <div className="control">
                                    <input className="input" type="text" name="meaning" 
                                    value={this.state.meaning}
                                    onChange={event => this.handleChange(event)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <div className="field">
                                <label className="label">Type Species</label>
                                <div className="control">
                                    <input className="input" type="text" name="type_species" 
                                    value={this.state.type_species}
                                    onChange={event => this.handleChange(event)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="columns">
                        <div className="column is-half">
                            <div className="field">
                                    <label className="label">Discovery Year</label>
                                    <div className="control">
                                        <input className="input" type="number" name="discovery_year" min="1800" max="2020" 
                                        value={this.state.discovery_year}
                                        onChange={event => this.handleChange(event)}
                                        />
                                    </div>
                            </div>
                        </div>
                        <div className="column is-half">
                            <div className="field">
                                <label className="label">Discovered By</label>
                                <div className="control">
                                    <input className="input" type="text" name="discovery_person" 
                                    value={this.state.discovery_person}
                                    onChange={event => this.handleChange(event)}    
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="columns">
                    <div className="column is-one-third">
                    <div className="field">
                        <label className="label">Size (in Meters)</label>
                        <div className="control">
                            <input className="input" type="number" name="size" step="0.1" placeholder="1.0"
                            value={this.state.size}
                            onChange={event => this.handleChange(event)}
                            />
                        </div>
                    </div>
                    </div>
                    <div className="column is-one-third">
                    <div className="field">
                        <label className="label">When did it live?</label>
                        <div className="select is-fullwidth" name="period">
                            <select
                            value={this.state.period}
                            onChange={event => this.handlePeriodChange(event)}>
                                <option>Early Triassic</option>
                                <option>Middle Triassic</option>
                                <option>Late Triassic</option>
                                <option>Early Jurassic</option>
                                <option>Middle Jurassic</option>
                                <option>Late Jurassic</option>
                                <option>Early Cretaceous</option>
                                <option>Late Cretaceous</option>
                            </select>
                        </div>
                    </div>
                    </div>
                    <div className="column is-one-third">
                    <div className="field">
                        <label className="label">Where did it live?</label>
                        <div className="control">
                            <input className="input" type="text" name="distribution" 
                            value={this.state.distribution}
                            onChange={event => this.handleChange(event)}
                            />
                        </div>
                    </div>
                    </div>
                    </div>

                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <input className="textarea" type="textarea" name="description" 
                            value={this.state.description}
                            onChange={event => this.handleChange(event)}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button className="button">Submit</button>
                        </div>
                    </div>
                </form>   
            </div>
            ) : (
            <h1> Still loading... </h1>
            )

        return (
            <div>
                {dinoToEdit}
            </div>
        )     
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = parseInt(ownProps.match.params.dinosaur_id)
    return {
        loading: false, 
        dinosaur: state.dinosaurs.find(dinosaur => dinosaur.id === id)
    }
  }

const mapDispatchToProps = dispatch => {
    return { editDinosaur: (formData) => dispatch(editDinosaur(formData)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDinosaur)