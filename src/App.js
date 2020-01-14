import React, { Component } from 'react';
import './App.css';
import unsplash from '../src/api/unsplash'
import SearchBar from './MyComponent/SearchBar'
import ImageList from './MyComponent/ImageList'
import Pagination from './MyComponent/Pagination'

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    totalPages: 1,
    searched: false,
    searchWord: '',
  };

  componentDidMount () {
    this.searchSubmit('girl', 1)
  }

  searchSubmit = async (term, page) => {
    const response = await unsplash.get('/search/photos',{
      params: {
        query: term || this.state.searchWord,
        per_page: 30,
        page: page
      },
    })
    console.log(response.data)
    this.setState({
      images: response.data.results,
      searched: true,
      searchWord: term == null ? this.state.searchWord : term,
      currentPage: page,
      totalPages: response.data.total_pages,
    })

  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '5vh'}}>
        
        { /* 搜尋 bar */ } 
        <SearchBar onSubmit={this.searchSubmit} />

        { /* 上下頁 */ }
        <Pagination
          currentPage={this.state.currentPage}
          totalPages={this.state.totalPages} 
          searched={this.state.searched} 
          onChangePage={this.searchSubmit}
        />

        { /* 圖片牆 */ }
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
