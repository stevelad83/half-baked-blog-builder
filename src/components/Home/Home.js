import React, { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('titillium');
  const [align, setAlign] = useState('center');

  // add useState calls here for title, subtitle, font, align, and text

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, subtitle, font, align }} />
      <Editor {...{ title, setTitle, subtitle, setSubtitle, font, setFont, align, setAlign }} />
    </main>
  );
}
