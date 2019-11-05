import React from 'react';

class Pagination extends React.Component {


  render () {
    if (this.props.searched) {
      return (
        <div style={{display: 'flex',justifyContent: 'center',margin: '10px 0 20px 0'}}>
          <div className="ui buttons">
            <button onClick={() => this.props.onChangePage(null, this.props.currentPage - 1)} className="ui button">
              <i className="left chevron icon"></i>
            </button>
            <button onClick={() => this.props.onChangePage(null, this.props.currentPage + 1)} className="ui button">
              <i className="right chevron icon"></i>
            </button>
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
    
  }
}

export default Pagination;