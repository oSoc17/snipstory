import React from 'react';

const ImageSearchExerciseModule = ({ module: { text } }) =>
  <article className="container module">
    <span>
      {text}
    </span>
    <div className="image-drop-box">
      {/* Uplaod box for image (drag & drop) */}
    </div>
  </article>;
export default ImageSearchExerciseModule;
