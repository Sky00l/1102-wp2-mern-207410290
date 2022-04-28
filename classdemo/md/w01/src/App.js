import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  return (
    <main>
      <section className='markdown'>
        <textarea className='input'></textarea>
        <article className="result"></article>
      </section>
    </main>
  );
}

export default App;
