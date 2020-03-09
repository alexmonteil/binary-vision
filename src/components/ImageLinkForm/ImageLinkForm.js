import React from 'react';
import './ImageLinkForm.css';

// Displays Greeting and input + submit button
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3 dark-gray'>
                {'This magic brain will detect faces in your pictures, give it a try !'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 w-70 center br4 bg-light-gray' type='text' onChange={onInputChange} />
                    <button className='w-25 f4 link dim br3 ba bw1 ph3 pv2 mb2 dib dark-gray bg-transparent b--dark-gray' onClick={onButtonSubmit} >Detect</button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;