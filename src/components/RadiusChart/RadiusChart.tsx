import { CircularProgressbar } from 'react-circular-progressbar';
import ChangingProgressProvider from "./ChanginProgressProvider";

import 'react-circular-progressbar/dist/styles.css';
import './styles.css';


interface RadiusChartProps{
    nota: number;
    total: number;
}
export function RadiusChart({nota, total}: RadiusChartProps){
    const percentCorrect = nota/total * 100;
    
    return(
       <div className=' w-52 '> 
        <ChangingProgressProvider values={[0, percentCorrect]}>
        {(percentage: number) => (
          <CircularProgressbar value={percentage} text={`${nota}/${total}`} />
        )}
      </ChangingProgressProvider>
       </div>
    )
}