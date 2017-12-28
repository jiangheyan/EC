import React, { Component } from 'react';

import './index.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      value: '',
    }
  }

  handleCancel() {
    alert(123);
  }

  handleSearch() {
    let val = this.refs.inpVal.value.trim();
    let data = localStorage.getItem('history');
    if (val.length > 0) {
      if (!data) {
        data = new Set();
      } else {
        data = new Set(data.split(','));
      }
      data.add(val);
      let arr = [...data];
      data = arr.toString();
      localStorage.setItem('history', data);
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
    if (this.state.value.length > 1) {
      document.getElementById('searchDel').className = 'glyphicon glyphicon-remove form-control-feedback iconRight showIcon';
    } else {
      document.getElementById('searchDel').className = 'glyphicon glyphicon-remove form-control-feedback iconRight';
    }
  }

  render() {
    return (
      <div className="navbar-fixed-top whiteBack">
        <div className="col-lg-12">
          <div className="input-group">
            <span className="glyphicon glyphicon-search iconLeft" aria-hidden="true" onClick={this.handleSearch}></span>
            <input type="search" className="form-control searchInp" placeholder="Search for..." ref="inpVal"  onChange={this.handleChange} />
            <span className="glyphicon glyphicon-remove form-control-feedback iconRight" id="searchDel"></span>
            <span className="input-group-btn">
              <button className="btn btn-link" type="button" onClick={this.handleCancel}>取消</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;