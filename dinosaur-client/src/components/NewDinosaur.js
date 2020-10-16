import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newDinosaur } from '../actions/dinosaurActions'

class NewDinosaur extends Component {

    state = {
        fields: {
        genus: "",
        grouping: "",
        meaning: "",
        type_species: "",
        discovery_year: "1800",
        discovery_person: "",
        size: "1.0",
        period: "",
        distribution: "",
        description: ""
        },
        errors: {},
        modalToggle: "modal"
    };

    handleChange = event => {
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value
        this.setState({fields})
    }

    handleGroupingChange = event => {
        let fields = this.state.fields
        let idx = event.target.selectedIndex
        let new_grouping = event.target[idx].value
        fields["grouping"] = new_grouping
        this.setState({fields})
    }

    handlePeriodChange = event => {
        let fields = this.state.fields
        let idx = event.target.selectedIndex
        let new_period = event.target[idx].value
        fields["period"] = new_period
        debugger
        this.setState({fields})
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if ( fields["genus"] === "" ) {
            formIsValid = false;
            errors["genus"] = "Please supply a genus name."
        }

        if ( !fields["genus"] ) {
            formIsValid = false;
            errors["genus"] = "Please supply a genus name."
        }

        if ( fields["genus"] !== "" ) {
            if ( !fields["genus"].match(/^[a-zA-Z]+$/) ){
                formIsValid = false;
                errors["genus"] = "Only use letters for the dinosaur's name, please."
            }
        }

        if ( fields["grouping"] !== "Ankylosaur" && fields["grouping"] !== "Stegosaur" && fields["grouping"] !== "Pachycephalosaur" && fields["grouping"] !== "Ceratopsid" && fields["grouping"] !== "Ornithopod" && fields["grouping"] !== "Prosauropod" && fields["grouping"] !== "Sauropod" && fields["grouping"] !== "Theropod" && fields["grouping"] !== "Unknown" ) {
            formIsValid = false;
            errors["grouping"] = "Please supply a standard grouping, or select 'Unknown.'"
        }

        if ( fields["meaning"] === "" ) {
            formIsValid = false;
            errors["meaning"] = "Please supply a meaning of the genus, or take a guess."
        }
        
        if ( fields["meaning"] !== "" ) {
            if ( !fields["meaning"].match(/^[a-zA-Z]+$/) ){
                formIsValid = false;
                errors["meaning"] = "Only user letters for the dinosaur's meaning, please."
            }
        }

        if ( fields["type_species"] !== "" ) {
            if ( !fields["type_species"].match(/^[a-zA-Z]+$/) ){
                formIsValid = false;
                errors["type_species"] = "Only letters for the dinosaur's type species, please."
            }
        }

        if ( fields["type_species"] === "" ) {
            formIsValid = false;
            errors["type_species"] = "Please supply type species for the genus."
        }

        if ( fields["discovery_person"] === "" ) {
            formIsValid = false;
            errors["discovery_person"] = "Who first named this dinosaur?"
        }

        if ( fields["discovery_person"] !== "" ) {
            if ( !fields["discovery_person"].match(/^[a-zA-Z]+$/) ){
                formIsValid = false;
                errors["discovery_person"] = "Only letters for the person who discovered or named the dinosaur, please."
            }
        }

        if ( fields["period"] !== "Early Triassic" && fields["period"] !== "Middle Triassic" && fields["period"] !== "Late Triassic" && fields["period"] !== "Early Jurassic" && fields["period"] !== "Middle Jurassic" && fields["period"] !== "Late Jurassic" && fields["period"] !== "Early Cretaceous" && fields["period"] !== "Late Cretaceous" && fields["period"] !== "Unknown" ) {
            debugger
            formIsValid = false;
            errors["period"] = "Please indicate the period, or select 'Unknown.'"
        }

        if ( fields["distribution"] === "" ) {
            formIsValid = false;
            errors["distribution"] = "Where did this dinosaur live?"
        }

        if ( fields["distribution"] !== "" ) {
            if ( !fields["distribution"].match(/^[a-zA-Z]+$/) ){
                formIsValid = false;
                errors["distribution"] = "Only letters for the dinosaur's global distribution, please."
            }
        }

        this.setState({errors: errors});
        return formIsValid

    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.handleValidation() !== false ) {
            alert("Form submitted.");
            this.props.newDinosaur(this.state.fields, this.props.history);
        } else {
            this.setState({
                modalToggle: "modal is-active",
            })
        }
    }

    handleModalAway = event => {
        this.setState({
            modalToggle: "modal",
            deleteId: null
        })
    }

    render() {

        return(
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" name="genus" 
                            value={this.state.fields.genus}
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
                                        value={this.state.fields.grouping}
                                        onChange={event => this.handleGroupingChange(event)}>
                                            <option value=""></option>
                                            <option value="Ankylosaur">Ankylosaur</option>
                                            <option value="Ceratopsid">Ceratopsid</option>
                                            <option value="Ornithopod">Ornithopod</option>
                                            <option value="Pachycephalosaur">Pachycephalosaur</option>                                          
                                            <option value="Prosauropod">Prosauropod</option>
                                            <option value="Sauropod">Sauropod</option>
                                            <option value="Stegosaur">Stegosaur</option>
                                            <option value="Theropod">Theropod</option>
                                            <option value="Unknown">Unknown</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        <div className="column is-one-third">
                            <div className="field">
                                <label className="label">Meaning of Name</label>
                                <div className="control">
                                    <input className="input" type="text" name="meaning" 
                                    value={this.state.fields.meaning}
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
                                    value={this.state.fields.type_species}
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
                                        value={this.state.fields.discovery_year}
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
                                    value={this.state.fields.discovery_person}
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
                            value={this.state.fields.size}
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
                            value={this.state.fields.period}
                            onChange={event => this.handlePeriodChange(event)}>
                                <option value=""></option>
                                <option value="Early Triassic">Early Triassic</option>
                                <option value="Middle Triassic">Middle Triassic</option>
                                <option value="Late Triassic">Late Triassic</option>
                                <option value="Early Jurassic">Early Jurassic</option>
                                <option value="Middle Jurassic">Middle Jurassic</option>
                                <option value="Late Jurassic">Late Jurassic</option>
                                <option value="Early Cretaceous">Early Cretaceous</option>
                                <option value="Late Cretaceous">Late Cretaceous</option>
                                <option value="Unknown">Unknown</option>
                            </select>
                        </div>
                    </div>
                    </div>
                    <div className="column is-one-third">
                    <div className="field">
                        <label className="label">Where did it live?</label>
                        <div className="control">
                            <input className="input" type="text" name="distribution" 
                            value={this.state.fields.distribution}
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
                            value={this.state.fields.description}
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

                <div className={this.state.modalToggle}>
                <div className="modal-background"></div>
                <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Please fix the following errors:</p>
                </header>
                <section className="modal-card-body">              
                    <span style={{color: "red"}}>{this.state.errors["genus"]}</span>
                    <br />
                    <span style={{color: "red"}}>{this.state.errors["meaning"]}</span>
                    <br />
                    <span style={{color: "red"}}>{this.state.errors["type_species"]}</span>
                    <br />
                    <span style={{color: "red"}}>{this.state.errors["discovery_person"]}</span>
                    <br />
                    <span style={{color: "red"}}>{this.state.errors["grouping"]}</span>
                    <br />
                    <span style={{color: "red"}}>{this.state.errors["period"]}</span>
                    <br />
                    <span style={{color: "red"}}>{this.state.errors["distribution"]}</span>
                    <br />
                </section>
                <footer className="modal-card-foot">
                <button className="button" onClick={this.handleModalAway}>Got it!</button>
                </footer>
                </div>
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return { newDinosaur: (formData, history) => dispatch(newDinosaur(formData, history)) }
}

export default connect(null, mapDispatchToProps)(NewDinosaur)