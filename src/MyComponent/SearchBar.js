import React from 'react'

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term, 1);
  }

  render () {
    return (
      <div className="ui segment" style={{ boxShadow: '5px 5px 5px #aaaaaa', backgroundColor: 'rgb(255, 222, 168)'}}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input 
              type="text"
              value={this.state.term}
              placeholder="請輸入你要搜尋的關鍵字"
              onChange={e => this.setState({ term: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar