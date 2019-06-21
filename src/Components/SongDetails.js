import React from 'react';
import { connect } from 'react-redux';

function SongDetails(props) {
    
    // console.log(props);
    const { selectedSong } = props;

    if(!selectedSong) {
        return (
            <div>
                <h2 className="text-center text-danger">Please Select A Song</h2>
            </div>
        )
    } else {
        return (
            <div className="text-center">
                <h3>Details For:</h3>
                <p className="text-primary">
                    {selectedSong.title}
                    <br />
                    {selectedSong.duration}
                </p>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    // console.log(state);
    return { selectedSong: state.selectedSong }
}

export default connect(mapStateToProps) (SongDetails)
