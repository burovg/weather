import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{


    constructor(props){
        super(props);
        this.state = {term:''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onformSubmit = this.onformSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term:event.target.value});
    }

    onformSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }

    render(){
        return(
            <form className="input-group" onSubmit={this.onformSubmit}>
                <input 
                    placeholder="Get five day forecast"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispachToPromise(dispatch){
    //debugger;
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispachToPromise)(SearchBar);