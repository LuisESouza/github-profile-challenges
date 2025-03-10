import React from 'react';

interface InfosProps {
    img?: string;
    data?: string | number;
  }
  
const ImgsInfos: React.FC<InfosProps> = ({img, data}) =>{
    return(
        <div className="img-info flex gap-1">
            {img && <img src={img}/>}
            {data && <span>{data}</span>}
        </div>
    );
}

export default ImgsInfos;