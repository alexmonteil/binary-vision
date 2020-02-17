import React from 'react';

// Displays greeting and user entry count
const Rank = ({name, entries}) => {
    return (
        <div>
            <div className='f3 white'>
                {`${name}, your current number of detections is ...`}
            </div>
            <div className='f1 white'>
                {entries}
            </div>
        </div>
    );
};

export default Rank;