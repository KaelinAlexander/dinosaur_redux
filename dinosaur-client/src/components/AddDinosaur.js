import React, { Component } from 'react'

class AddDinosaur extends Component {

    render() {

        return(
            <div>
                <form>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" name="genus" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Meaning of Name</label>
                        <div className="control">
                            <input className="input" type="text" name="meaning" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Grouping</label>
                        <div className="select" name="grouping">
                            <select>
                                <option>Ankylosauria</option>
                                <option>Stegosauria</option>
                                <option>Pachycephalosauria</option>
                                <option>Ceratopsia</option>
                                <option>Ornithopoda</option>
                                <option>Prosauropoda</option>
                                <option>Sauropoda</option>
                                <option>Theropoda</option>
                            </select>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Type Species</label>
                        <div className="control">
                            <input className="input" type="text" name="type_species" />
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <label className="label">Discovery Year</label>
                        <div className="control">
                            <input className="input" type="number" name="discovery_year" min="1800" max="2020" />
                        </div>

                        <label className="label">Discovered By</label>
                        <div className="control">
                            <input className="input" type="text" name="discovery_person" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Size (in Meters)</label>
                        <div className="control">
                            <input className="input" type="number" name="discovery_person" />
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <label className="label">When did it live?</label>
                        <div className="select" name="period">
                            <select>
                                <option>Early Triassic</option>
                                <option>Middle Triassic</option>
                                <option>Late Triassic</option>
                                <option>Early Jurassic</option>
                                <option>Middle Jurassic</option>
                                <option>Late Jurassic</option>
                                <option>Early Cretaceous</option>
                                <option>Late Creataceous</option>
                            </select>
                        </div>

                        <label className="label">Where did it live?</label>
                        <div className="control">
                            <input className="input" type="text" name="distribution" />
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button className="button">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }

}

export default AddDinosaur