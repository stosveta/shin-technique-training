import React from 'react';
import { useState, useEffect } from 'react'


import { Button } from "primereact/button";
import { Card } from "primereact/card";

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';

import SettingsView from './SettingsView.js';
import TrainingView from './TrainingView.js';

import './traning.css';

const AppView = () => {
    const [inProgress, setInProgress] = useState(false)

    let startOrStopLabel = inProgress ? "Stop" : "Start";
    let startOrStopIcon = "pi pi-" + (inProgress ? "times-circle" : "caret-right");
    let settings = null; // load saved settings somewhere

    let settingsView = null;
    let trainingView = null;

    const handleStartStop = () => {
        trainingView.handleStartStop(
            () => settingsView.getSettings(),
            () => setInProgress(trainingView && trainingView.state.inProgress)
        );
    }

    const handleShowHideSettings = () => {
        return settingsView.toggleVisibility();
    }
    
    return <>
            <Card>
                <div>Shinkyokushinkai Karate Techniques Training</div>
            </Card>

            <Button label={startOrStopLabel} icon={startOrStopIcon} onClick={handleStartStop}
                className="p-button-outlined p-button-icon-only p-button-sm p-button-rounded p-button-text" 
            />

            <Button icon="pi pi-cog" onClick={handleShowHideSettings}
                className="p-button-outlined p-button-icon-only p-button-sm p-button-rounded p-button-text" 
            />

            <SettingsView
                ref={(element) => {settingsView = element}}
                value = {settings}
            />
            
            <TrainingView
                ref={(element) => {trainingView = element}}
                value = {settings}
            />
        </>
}

export default AppView;