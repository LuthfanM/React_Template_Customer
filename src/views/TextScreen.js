import React, { useState, useEffect } from 'react';
import MainLabel from '../@core/layouts/components/custom/label/MainLabel';
import MainCard from '../@core/layouts/components/custom/MainCard';

const TextScreen = () => {
    return (<>
        <MainCard title={"to be decided"}>
            <MainLabel size="12px" align='center'>placed text</MainLabel>
        </MainCard>
    </>);
}

export default TextScreen;