import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends Component {

    renderList() {
        return this.props.songs.map(song => {
            return (             
                <React.Fragment key={song.title}>
                    <ul className="list-group">
                        <li className="list-group-item">
                            {song.title}
                        <button 
                            className="btn btn-primary btn-pill float-right"
                            onClick={() => {this.props.selectSong(song)}}
                        >
                            Select Song
                        </button>
                        </li>
                    </ul>
                </React.Fragment>
            )
        })
    }

    render() {
        // this.props === songs: state.songs
        // console.log(this.props);

        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return { songs: state.songs }
}

export default  connect(mapStateToProps, { selectSong }) (SongList)
