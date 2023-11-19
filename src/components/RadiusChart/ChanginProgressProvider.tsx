"use client"
import React, { useState, useEffect, ReactNode } from "react";

interface ChangingProgressProviderProps {
  values: number[];
  interval?: number;
  children: (currentValue: number) => ReactNode;
  onComplete?: () => void;
}

const ChangingProgressProvider: React.FC<ChangingProgressProviderProps> = ({ values, interval = 1000, children, onComplete }) => {
  const [valuesIndex, setValuesIndex] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (valuesIndex < values.length - 1) {
      intervalId = setInterval(() => {
        setValuesIndex(prevIndex => prevIndex + 1);
      }, interval);
    } else if (onComplete) {
      onComplete();
    }

    return () => clearInterval(intervalId);
  }, [valuesIndex, values, interval, onComplete]);

  return children(values[valuesIndex]);
}

export default ChangingProgressProvider;
