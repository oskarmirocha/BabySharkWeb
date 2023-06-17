import React from 'react';
import '../../App.css';
import videoBcg from '../../assets/videos/babyshark.mp4'

export default function Watch() {
    return(
        <div className='shark-container'>
        <video src={videoBcg} autoPlay loop  />
        </div>
        );
}