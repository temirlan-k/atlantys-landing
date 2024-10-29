'use client';
import { useState, useEffect } from 'react';

// const textArray = [
//   'бухгалтерии',
//   'юриспруденции',
//   'образовании',
//   'аналитике',
//   'продажах',
//   'маркетинге',
//   'обслуживании',
//   'клиентов',
//   'рекрутинге',
// ];

const TypingTextAnimation = () => {
  // const [currentIndex, setCurrentIndex] = useState(0); // Track which text is being displayed
  // const [displayedText, setDisplayedText] = useState(''); // Track the currently displayed characters
  // const [charIndex, setCharIndex] = useState(0); // Track the current character in the string
  // const [isDeleting, setIsDeleting] = useState(false); // Flag for whether we are deleting or typing

  // useEffect(() => {
  //   const currentText = textArray[currentIndex];

  //   if (!isDeleting && charIndex < currentText.length) {
  //     // Typing effect - add a character
  //     const timeout = setTimeout(() => {
  //       setDisplayedText(currentText.substring(0, charIndex + 1));
  //       setCharIndex(charIndex + 1);
  //     }, 100); // Typing speed
  //     return () => clearTimeout(timeout);
  //   } else if (!isDeleting && charIndex === currentText.length) {
  //     // Hold for a moment after typing is complete
  //     const timeout = setTimeout(() => {
  //       setIsDeleting(true); // Start deleting
  //     }, 2000); // Delay before start deleting
  //     return () => clearTimeout(timeout);
  //   } else if (isDeleting && charIndex > 0) {
  //     // Deleting effect - remove a character
  //     const timeout = setTimeout(() => {
  //       setDisplayedText(currentText.substring(0, charIndex - 1));
  //       setCharIndex(charIndex - 1);
  //     }, 100); // Deleting speed
  //     return () => clearTimeout(timeout);
  //   } else if (isDeleting && charIndex === 0) {
  //     // When finished deleting, move to the next text
  //     setIsDeleting(false); // Switch back to typing
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length); // Move to next text
  //   }
  // }, [charIndex, isDeleting, currentIndex]);

  return (
    <div className='mt-20'>
      {/* <p className="text-center text-5xl mt-20">
        <span className="text-sub_color font-mono">ИИ-ассистент в </span>
        {displayedText}
      </p> */}

      <div className='font-kanit' >Этот текст использует шрифт Wix Madefor Display</div>
      <div className='font-wix font-bold' >Этот текст использует шрифт Wix Madefor Display</div>
      <div className='font-monaBlackWide'>Этот текст использует шрифт Wix Madefor Display</div>
      <div className='font-gropled'>Этот текст использует шрифт Wix Madefor Display</div>
    </div>
  );
};

export default TypingTextAnimation;
