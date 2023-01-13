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
  text,
  setText,
}) {
  const handleChange = (value, e) => {
    if (value === 'title') {
      setTitle(e.target.value);
    }
    if (value === 'subtitle') {
      setSubtitle(e.target.value);
    }
    if (value === 'font') {
      setFont(e.target.value);
    }
    if (value === 'align') {
      setAlign(e.target.value);
    }
    if (value === 'text') {
      setText(e.target.value);
    }
  };

  // const handleTitle = (e) => {
  //   setTitle(e.target.value);
  // };
  // const handleSubtitle = (e) => {
  //   setSubtitle(e.target.value);
  // };
  // const handleFont = (e) => {
  //   setFont(e.target.value);
  // };
  // const handleAlign = (e) => {
  //   setAlign(e.target.value);
  // };
  // const handleText = (e) => {
  //   setText(e.target.value);
  // };

  return (
    <div className="editor">
      <div className="form-control">
        <input name="title" type="text" value={title} onChange={(e) => handleChange('title', e)} />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-control">
        <input type="text" value={subtitle} onChange={(e) => handleChange('subtitle', e)} />
        <label>Subtitle</label>
      </div>
      <div className="form-control">
        <select value={font} onChange={(e) => handleChange('font', e)}>
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
        <div className="radio-group" onChange={(e) => handleChange('align', e)}>
          <label>
            <input
              name="align"
              type="radio"
              value="left"
              checked={align === 'left'}
              onChange={(e) => handleChange('align', e)}
            />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input
              name="align"
              type="radio"
              value="center"
              checked={align === 'center'}
              onChange={(e) => handleChange('align', e)}
            />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input
              name="align"
              type="radio"
              value="right"
              checked={align === 'right'}
              onChange={(e) => handleChange('align', e)}
            />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control">
        <textarea
          value={text}
          onChange={(e) => handleChange('text', e)}
          style={{ height: '250px' }}
        />
        <label>Text</label>
      </div>
    </div>
  );
}
