import React from 'react';
import './Editor.css';

export default function Editor({
  title,
  setTitle,
  subtitle,
  setSubtitle,
  font,
  setFont,
  align,
  setAlign,
}) {
  return (
    <div className="editor">
      <div className="form-control">
        <input name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-control">
        <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
        <label>Subtitle</label>
      </div>
      <div className="form-control">
        <select value={font} onChange={(e) => setFont(e.target.value)}>
          <option value="architect">{"Architect's Daughter"}</option>
          <option value="comforter">Comforter</option>
          <option value="fredoka">Fredoka</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="monteserrat">Monteserrat</option>
          <option value="roboto">Roboto</option>
          <option value="roboto-mono">Roboto Mono</option>
          <option value="titillium">Titillium</option>
        </select>
        <label>Font</label>
      </div>
      <div className="form-control">
        <label>Alignment</label>
        <div className="radio-group">
          <label>
            <input
              name="align"
              type="radio"
              value="left"
              checked={align === 'left'}
              onChange={(e) => {
                setAlign(e.target.value);
              }}
            />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input
              name="align"
              type="radio"
              value="center"
              checked={align === 'center'}
              onChange={(e) => {
                setAlign(e.target.value);
              }}
            />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input
              name="align"
              type="radio"
              value="right"
              checked={align === 'right'}
              onChange={(e) => {
                setAlign(e.target.value);
              }}
            />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control">
        <textarea style={{ height: '250px' }} />
        <label>Text</label>
      </div>
    </div>
  );
}
