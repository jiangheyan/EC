import React, { Component } from 'react';
import { Search } from '../../components';
import './index.css';

let dataList = [
  {
    "searchWord": "小米"
  },
  {
    "searchWord": "和田大枣"
  },
  {
    "searchWord": "杏干"
  },
  {
    "searchWord": "咖啡杯"
  },
  {
    "searchWord": "cherry"
  },
  {
    "searchWord": "大米"
  }
];
let hotItems = dataList.map((item, key) => <button type="button" key={key} className="btn btn-default">{item.searchWord}</button>);
function HotSearch() {
  return (
    <div className="line">
      <p className="title">大家都在搜</p>
      {hotItems}
    </div>
  )
}

class SearchHistory extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    let his = localStorage.history ? localStorage.history.split(','): [];
    this.state = {
      histories: his
    };
  }

    handleClick(e) {
        localStorage.setItem('history', '');
        this.setState({
            histories: []
        });
    }
    
    render() {
        if (!localStorage.history) {
            return false;
        }
        return (
            <div className="history">
              <p className="title">历史搜索<span className="glyphicon glyphicon-trash rightFlo" onClick={this.handleClick} aria-hidden="true"></span></p>
              <hr />
              <ul className="list-unstyled hisItem">
                {this.state.histories.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
        );
    }
}

class AppSearch extends Component {
  render() {
    return (
      <div className="container-fluid appSearch">
        <Search />
        <HotSearch source="search/histories" />
        <SearchHistory />
      </div>
    );
  }
}

export default AppSearch;