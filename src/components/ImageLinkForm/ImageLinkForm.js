import React from 'react';
import './ImageLinkForm.css';

// Displays Greeting and input + submit button
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3 light-blue'>
                {'Our artificial intelligence can detect faces in your pictures' }
            </p>
            <div className='center w-80'>
                <div className='form center pv4 ph2 br3 shadow-5'>
                    <input className='f4 ma2 lh-solid w-70 center br4 ba b--navy bg-light-blue' type='text' onChange={onInputChange} />
                    <button className='f4 link dim br3 ba bw1 pa2 ma2 dib light-blue bg-transparent b--light-blue' onClick={onButtonSubmit} >Detect</button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;