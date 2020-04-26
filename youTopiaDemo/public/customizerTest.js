import React from 'react'

import AvataaarsCustomerizer from 'avataaars-customizer'

function Example() {
  const [customizedAttributes,setCustomizedAttributes] = React.useState({
    topType:'LongHairMiaWallace',
    accessoriesType:'Prescription02',
    hairColor:'BrownDark',
    facialHairType:'Blank',
    clotheType:'Hoodie',
    clotheColor:'PastelBlue',
    eyeType:'Happy',
    eyebrowType:'Default',
    mouthType:'Smile',
    skinColor:'Light',
  });

  return (
    <AvataaarsCustomizer value={customizedAttributes} onChange={setCustomizedAttributes}/>
  )
}
