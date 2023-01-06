import React from "react";
import MenuFeatureItem from '../../Items/MenuFeature/MenuFeatureItem';
import { initialMenuFeaturesData } from '../../../utils/initial-data';

function FeaturesItems({className}) {
  return (
    <ul className={className}>
      {
        initialMenuFeaturesData.map(item => 
          (
            <MenuFeatureItem 
              key={item.id}
              item={item}
            />
          ) 
        )
      }
    </ul>
  );
}
export default FeaturesItems;