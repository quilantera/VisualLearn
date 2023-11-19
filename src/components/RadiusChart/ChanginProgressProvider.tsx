"use client"
import React, { useState, useEffect, ReactNode } from "react";

interface ChangingProgressProviderProps {
  values: number[];
  interval?: number;
  children: (currentValue: number) => ReactNode;
  
}

const ChangingProgressProvider: React.FC<ChangingProgressProviderProps> = ({ values, interval = 1000, children }) => {
  const [valuesIndex, setValuesIndex] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (valuesIndex < values.length - 1) {
      intervalId = setInterval(() => {
        setValuesIndex(prevIndex => prevIndex + 1);
      }, interval);
    }

    return () => clearInterval(intervalId);
  }, [valuesIndex, values, interval]);

  // Call the children function with the current value
  return <>{children(values[valuesIndex])}</>;
}
export default ChangingProgressProvider;
