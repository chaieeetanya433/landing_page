/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property*/

import { useEffect, useState } from "react";
import Planet from "../../components/planets";
import { destinationWrapper } from "./styles";
import PlanetCard from "../../components/planet-card";
import { Planets } from "../constant";

function DestinationModule({ destinations }) {
  const [id, setId] = useState(0);

  useEffect(() => {}, [id]);

  const clickHandler = (idx) => {
    return () => {
      setId(idx);
    };
  };

  return (
    <div className={destinationWrapper}>
        <div className='planet-div'>
            <Planet enableZoom={true} animate={true} showPiece={true} showAtmosphere={false} planetTexture={Planets[destinations?.[id]?.name]?.image ?? Planets['Fallback'].image}  planetRadius={3}/>
        </div>
      <div className="card-div">
        {destinations?.map((obj, idx) => {
          return (
            <PlanetCard
              planet={obj}
              clickHandler={clickHandler(idx)}
              key={String(idx)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DestinationModule;
