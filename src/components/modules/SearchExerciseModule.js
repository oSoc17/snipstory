import React from 'react';

export const ImageSearchExerciseModule = ({ module: { text } }) =>
  <div>
    <span>
      {text}
    </span>
    <div className="image-drop-box">
      {/* Uplaod box for image (drag & drop) */}
    </div>
  </div>;
