import React from 'react';

const ImageSearchExerciseModule = ({ module: { text } }) =>
  <div>
    <span>
      {text}
    </span>
    <div className="image-drop-box">
      {/* Uplaod box for image (drag & drop) */}
    </div>
  </div>;
export default ImageSearchExerciseModule;
