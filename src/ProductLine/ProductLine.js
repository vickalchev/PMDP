import React from 'react';
import './ProductLineStyle.css';
import {WakeUpWorldThumbnail} from '../WakeUpWorld';
import { MileHighThumbnail } from '../MileHigh';
import {SaffronWoodThumbnail} from '../SaffronWood';
import { HauteProvenceThumbnail} from '../HauteProvence';
import { GardensOfIndiaThumbnail } from '../GardensOfIndia';
import { PapyrusOudThumbnail } from '../PapyrusOud';


export const ProductLine = () => {
    return (
        <div className = 'product-line-container'>
            <WakeUpWorldThumbnail />
            <MileHighThumbnail />
            <SaffronWoodThumbnail />
            <HauteProvenceThumbnail />
            <GardensOfIndiaThumbnail />
            <PapyrusOudThumbnail />
            

        </div>
    )
}