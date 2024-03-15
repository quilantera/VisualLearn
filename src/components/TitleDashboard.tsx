interface TitleDashBoardProps {
    text: string;
    size?:  1 | 2 | 3 | 4 | 5;
    color?: "blue" | "violet" | "slate" | "red" | "orange" | "green" | "purple" | "gray";
    weight?: "base" | "medium" | "semibold" | "bold";
    ariaLabel?: string;
}
export function TitleDashBoard({text,size = 5, color= "violet",weight = "medium",ariaLabel}: TitleDashBoardProps) {
    
    const colors = {
        blue: "#172554",
        violet: "#2e1065",
        slate: "#1e293b",
        red: "#991b1b",
        orange: "#c2410c",
        green: "#166534",
        purple: "#3b0764",
        gray: "#526072"
    };
    const selectedColor = colors[color];
    const font= [{
        fontSize: "1rem",
        lineHeight: "1.5rem",
    },{
        fontSize: "1.175rem",
        lineHeight: "1.75rem",
    },{
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
    },{
        fontSize: "1.5rem",
        lineHeight: "2rem",
    },{
        fontSize: "1.75rem",
        lineHeight: "2.20rem",
    }]
    const fontWeight = {
        base: "400",
        medium: "500",
        semibold: "600",
        bold: "700"
    }
    const fontWeightSelected = fontWeight[weight];
    const getHeadingComponent = (size: number) => {
        switch (size) {
            case 1:
                return <p  aria-label={ariaLabel}
                className={`font-medium text-[${selectedColor}] text-shadow w-full dark:text-slate-50 `}
                style={{fontSize: font[size-1].fontSize, lineHeight: font[size-1].lineHeight , fontWeight: fontWeightSelected}}>{text}</p>;
            case 2:
                return <h4  aria-label={ariaLabel}
                className={`font-medium text-[${selectedColor}] text-shadow w-full dark:text-slate-50 `}
                style={{fontSize: font[size-1].fontSize, lineHeight: font[size-1].lineHeight , fontWeight: fontWeightSelected}}>{text}</h4>;
            case 3:
                return <h3  aria-label={ariaLabel}
                className={`font-medium text-[${selectedColor}] text-shadow w-full dark:text-slate-50 `}
                style={{fontSize: font[size-1].fontSize, lineHeight: font[size-1].lineHeight , fontWeight: fontWeightSelected}}>{text}</h3>;
            case 4:
                return <h2 aria-label={ariaLabel}
                className={`font-medium text-[${selectedColor}] text-shadow w-full dark:text-slate-50 `}
                style={{fontSize: font[size-1].fontSize, lineHeight: font[size-1].lineHeight , fontWeight: fontWeightSelected}}>{text}</h2>;
            case 5:
                return <h2  aria-label={ariaLabel}
                className={`font-medium text-[${selectedColor}] text-shadow w-full dark:text-slate-50 `}
                style={{fontSize: font[size-1].fontSize, lineHeight: font[size-1].lineHeight , fontWeight: fontWeightSelected}}>{text}</h2>;
            default:    
                return <p  aria-label={ariaLabel}
                className={`font-medium text-[${selectedColor}] text-shadow w-full dark:text-slate-50 `}
                style={{fontSize: font[size-1].fontSize, lineHeight: font[size-1].lineHeight , fontWeight: fontWeightSelected}}>{text}</p>;
        }
    };
        return(
        <div className="w-full"> 
        <h2  
            aria-label={ariaLabel}
            className={`font-medium text-[${selectedColor}] text-shadow w-full dark:text-slate-50 `}
            style={{fontSize: font[size-1].fontSize, lineHeight: font[size-1].lineHeight , fontWeight: fontWeightSelected}}
        >{text}</h2> 
      </div>
    )
}