import React from 'react';
import './heading.css';

const SkewTextEffect = () => {
  const phrase = "A Vision for Accessible, Practical Learning";
  const words = phrase.split(' ');

  return (
    <p className='heading_p' aria-label="Animated Text">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="word">
          {word.split('').map((char, charIndex) => (
            <span key={charIndex} data-text={char} className="char">
              {char}
            </span>
          ))}
          {/* Add space between words */}
          <span className="space"> </span>
        </span>
      ))}
    </p>
  );
};

export default SkewTextEffect;
