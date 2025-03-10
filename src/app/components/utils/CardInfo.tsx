import React from 'react';

interface InfosProps {
  title: string;
  data?: string;
}


const CardInfo: React.FC<InfosProps> = ({title, data}) => {
    return(
        <div className={`${title}-info inline-flex items-center gap-3 h-13 mt-5 rounded-lg`} 
            style={{ backgroundColor: "var(--profile-info-bg-color)", marginTop: "20px" }}>
            <span>{title}</span>
            <span className="h-8 w-px bg-gray-400"></span>
            <span>{data}</span>
        </div>

    );
}

export default CardInfo;