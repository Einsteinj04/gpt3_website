import React from 'react'

function Links({direction}) {
  return (
    <div className={`flex ${direction} list-none `}>
      <li>
        <a href='#home'>Home</a>
      </li>
      <li>
        <a href='#what_is_gpt'>What is GPT?</a>
      </li>
      <li>
        <a href='#open_ai'>Open AI</a>
      </li>
      <li>
        <a href='#case_studies'>Case Studies</a>
      </li>
      <li>
        <a>Library</a>
      </li>
    </div>
  );
}

export default Links