"use client"
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import ChangingProgressProvider from "./ChanginProgressProvider";

import 'react-circular-progressbar/dist/styles.css';
import './styles.css';
import { useAccessibility } from '@/app/Context/AccessibilityContext';


interface RadiusChartProps{
    nota: number;
    total: number;
    width?: string;
    openColor?: boolean;
}
function setColorChange(value: number, isDarkMode: boolean){

  if(isDarkMode){
    return "#e5e6f5";
  }

  if(value < 0.3){
    return "#940707";
  }
  else if(value <= 0.4){
    return "#d39614";
  }
  else if(value <=0.5){
    return "#cfd300";
  }
  else if(value <= 0.7){
    return "#198504";
  }
  else {
    return "#0c39ce";
  }
}
function setTextColorChange(value: number, isDarkMode: boolean){
   if(isDarkMode){
    return "#f0f0f0";
    }
  if(value < 0.3){
    return "#750404";
  }
  else if(value <= 0.4){
    return "#d39614";
  }
  else if(value <=0.5){
    return "#af9500";
  }
  else if(value <= 0.7){
    return "#166b05";
  }
  else {
    return "#0c39ce";
  }
}
function setTrailColorChange(isDarkMode: boolean){
 return !isDarkMode ? "#b9c1ce": "#292828";
}


export function RadiusChart({nota, total,width="13rem"}: RadiusChartProps){
    const { contrast } = useAccessibility();

    const percentCorrect = nota/total * 100;

    return(
      <div tabIndex={-1} style={{width: width}}> 
        <ChangingProgressProvider  values={[0, percentCorrect]}>
        {(percentage: number) => (
          <CircularProgressbarWithChildren 
            className='font-medium'
            value={percentage} 
            strokeWidth={9} 
           
              styles={buildStyles({
                trailColor: setTrailColorChange(contrast),
                pathColor: setColorChange((nota/total),contrast),
               
              })
           } >
            <p className={`text-gray-600 dark:text-slate-50 font-medium`} aria-label={`sua nota: ${nota}`} tabIndex={-1}> {nota}/{total}</p>
            </CircularProgressbarWithChildren>
        )}
      </ChangingProgressProvider>
       </div>
    )
}