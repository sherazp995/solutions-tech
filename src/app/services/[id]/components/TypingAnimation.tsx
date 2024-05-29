import React, { useState, useEffect } from "react";

interface TypingAnimationProps {
  textArray: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

function TypingAnimation(props: any) {
  const {
    textArray,
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseTime = 2000,
  } = props;
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textArray[loopNum % textArray.length];
      const updatedText = isDeleting
        ? currentText.substring(0, typingIndex - 1)
        : currentText.substring(0, typingIndex + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingIndex(isDeleting ? typingIndex - 1 : typingIndex + 1);
    };

    const typingInterval = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(typingInterval);
  }, [
    typingIndex,
    isDeleting,
    textArray,
    loopNum,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return { displayText };
}

export default TypingAnimation;
