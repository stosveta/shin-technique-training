import React from 'react';
import ReactDOM from 'react-dom';


import { Button } from "primereact/button";
import { Card } from "primereact/card";

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';

import SettingsView from './SettingsView.js';
import TrainingView from './TrainingView.js';

import './traning.css';

class AppView extends React.Component {
    constructor(props) {
        super(props);

        this.handleStartStop = this.handleStartStop.bind(this);
        this.handleShowHideSettings = this.handleShowHideSettings.bind(this);

        this.state = {inProgress: false};

        // settingsView set in render
        // trainingView set in render
    }

    render() {
        const inProgress = this.state.inProgress;

        let startOrStopLabel = inProgress ? "Stop" : "Start";
        let startOrStopIcon = "pi pi-" + (inProgress ? "times-circle" : "caret-right");
        let settings = null; // load saved settings somewhere

        return <>
                <Card>
                    <div>Shinkyokushinkai Karate Techniques Training</div>
                </Card>

                <Button label={startOrStopLabel} icon={startOrStopIcon} onClick={this.handleStartStop}
                    className="p-button-outlined p-button-icon-only p-button-sm p-button-rounded p-button-text" 
                />

                <Button icon="pi pi-cog" onClick={this.handleShowHideSettings}
                    className="p-button-outlined p-button-icon-only p-button-sm p-button-rounded p-button-text" 
                />

                <SettingsView
                    ref={(element) => {this.settingsView = element}}
                    value = {settings}
                />
                
                <TrainingView
                    ref={(element) => {this.trainingView = element}}
                    value = {settings}
                />
            </>
    }

    handleStartStop() {
        this.trainingView.handleStartStop(
            () => this.settingsView.getSettings(),
            () => this.setState({
                    inProgress: this.trainingView && this.trainingView.state.inProgress
            })
        );
    }

  handleShowHideSettings() {
    return this.settingsView.toggleVisibility();
  }
}

export default AppView;