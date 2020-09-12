import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount(){
    this.searchApi('sports');
  }

  clickedVideo = video => {
    this.setState({ selectedVideo: video });
  }

  searchApi = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
    console.log(this.state.videos);
  }

  render(){
    return(
      <div className="ui container">
        <SearchBar searchApi={this.searchApi} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList clickedVideo={this.clickedVideo} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;