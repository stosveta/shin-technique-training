import React from 'react';
import ReactDOM from 'react-dom';

import { Panel } from 'primereact/panel';
import { Card } from 'primereact/card';
import { ProgressBar } from 'primereact/progressbar';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import Training from './Training.js';
import './traning.css';

class TrainingView extends React.Component {
  constructor(props) {
    super(props);

    this.handleStartStop = this.handleStartStop.bind(this);

    this.state = {
        isSetUpCorrectly: true,
        inProgress: false,
        isFinished: false,
        techniquesIterval: null,
        techniqueIndex: -1,
        training: null,
        settings: null
    };
  }

  render() {
    const inProgress = this.state.inProgress;
    const isFinished = this.state.isFinished;

    let message = this.state.isSetUpCorrectly ? "" : "is set up incorrectly";

    let trainingViewPanel = "";
    let finishedViewPanel = ""
    let currentTechniquePanel = "";
    let summaryPanel = "";

    let progressValue = isFinished ? 1 
                                    : inProgress ? this.getCurrentAmount() / this.getTechniquesAmount()
                                                 : 0;

    if (inProgress) { 
        currentTechniquePanel = 
            <div id="current-technique" className="bump-animation p-d-flex p-jc-center">
              {this.getCurrentTechnique()}
            </div>

        summaryPanel = <>
          <div>Всього {this.getTechniquesAmount()} технік</div>
          <div>Залишилось {this.getLeftAmount()}</div>
        </>
    }

    if (isFinished) { 
          finishedViewPanel=  
            <div id="finished-pane" className="bump-animation p-d-flex p-jc-center">
                 Finished
              </div>
    } 

    if (inProgress || isFinished) { 
        trainingViewPanel = 
            <Panel>
              <div style={{color: "red"}}>{message}</div>
              
              <Card id="current-technique-container">
                  {currentTechniquePanel}
                  {finishedViewPanel}
              </Card>

              <ProgressBar value={Math.round(progressValue * 100)} />

              {summaryPanel}
            </Panel>
          }

    return trainingViewPanel;
  }

  // styled animation to work. Doesnt work. TODO.
  componentDidUpdate() {
      let currentTechnique = this.getCurrentTechnique();

      if (typeof currentTechnique !== "undefined") {
          let elm = document.getElementById("current-technique");
          
          if (elm != null) {
            let parent = elm.parentNode;
            let newNode = elm.cloneNode(true);

            if (this.state.inProgress && !this.state.isFinished) {
              /*
              try {
                elm.remove();

                newNode.innerHTML = currentTechnique;
                parent.appendChild(newNode);
              } catch(e) {
                console.log(e);
              }*/
            }
          }
      }  
  }

  /** @public */
   handleStartStop(getSettingsFunc, callback) {
    if (this.state.inProgress) {
      this.stopTraining(callback);
    } else {
      this.startTraining(getSettingsFunc(), callback); 
    }
  }

  trainOrStop() {
    this.trainTechnique();
    this.stopTrainingIfNeeded();
  }

  trainTechnique() {
    let technique = this.state.training.trainTechnique(this.state.techniqueIndex);

    this.setState({
      techniqueIndex: this.state.techniqueIndex + 1,
      currentTechnique: technique
    });
  }

  stopTrainingIfNeeded() {
    if (this.state.techniqueIndex === this.getTechniquesAmount() - 1) {
       this.stopTraining();
    }
  }

  /** @public */
  startTraining(settings, callback) {
    if (!settings) {
      return;
      // TODO;
      // was settings = this.settingsView.getSettings();
    }

    let training = new Training();
    training.setupTraining(settings.kius);

    let isSetUpCorrectly = training.isSetUpCorrectly();
    this.setState({isSetUpCorrectly: isSetUpCorrectly});

    if (isSetUpCorrectly) {
      this.setState({
          inProgress: true,
          isFinished: false,
          training: training,
          settings: settings
      }, () => { 
        callback();

        this.trainOrStop();

        if (this.state.inProgress) {
          this.setState({techniquesIterval: setInterval(
                () => this.trainOrStop(), this.state.settings.delay
          )})
        }
      });      
    }
  }

  /** @public */
  stopTraining(callback) {
    clearInterval(this.state.techniquesIterval);
    this.state.training.cleanupTraining();

    setTimeout(() => {
      this.setState({
              isSetUpCorrectly: true,
              inProgress: false,
              isFinished: true,
              techniquesIterval: null,
              techniqueIndex: -1,
              training: null,
              settings: null
          }, callback);
      setTimeout(() => this.setState({isFinished: false}), 3000);}, 
    this.state.settings.delay);
  }

  getTechniquesAmount() {
    return this.state.settings.amount;
  }

  getLeftAmount() {
    return this.state.techniqueIndex > -1 ? this.state.settings.amount - this.state.techniqueIndex - 1: 0;
  }

  getCurrentTechnique() {
    return this.state.currentTechnique;
  }

  getCurrentAmount() {
    return this.state.techniqueIndex > -1 ? this.state.techniqueIndex + 1 : 0;
  }
}

export default TrainingView;