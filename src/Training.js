export default class Training {
	constructor() {
		this.cleanupTraining();

		this.voiceElement = new Audio();
		this.voiceElement.addEventListener("canplaythrough", () => {
			// console.log("playing " + this.voiceElement.getAttribute("src"));

			try {
				this.voiceElement.play();
			} catch(e) {
				console.log(e);
			}
		});
	}

	/** public */
	setupTraining(kius) {
		this.weightedTechniques = this.createWeightedTechniquesArray(kius);
	}

	isSetUpCorrectly() {
		return this.weightedTechniques && this.weightedTechniques.length > 0;
	}

	/** public */
	cleanupTraining() {
		this.weightedTechniques = null;
	}

	/** public */
	trainTechnique(index) {
		let technique = this.chooseRandomTechnique(this.weightedTechniques);
		// let technique = this.chooseTechniqueAtPos(this.weightedTechniques, index);

		this.speakTechnique(technique);

		return technique;
	}

	createWeightedTechniquesArray(kius) {
		let weightedTechniques = [];

		for (let kiuWeighedTechniques of kius) {
			let techniques = kiuWeighedTechniques[1];
			
			for (let techniqueWeight of techniques) {
				let techniqueName = techniqueWeight[0];
				let weight = techniqueWeight[1] - 0;

				for (let i = 0; i < weight; i++) {
					weightedTechniques.push(techniqueName);
				}
			};
		};

		// console.log(weightedTechniques);

		return weightedTechniques;
	}

	chooseRandomTechnique(techniques) {
		let index = Math.trunc(Math.random() * techniques.length);

		return techniques[index];
	}

	chooseTechniqueAtPos(techniques, index) {
		return index < techniques.length ? techniques[index] : null;
	}

	speakTechnique (technique) {
		const mainVoiceDir = "voice-sempai";
		const otherVoiceDir = "voice-other";
		const defaultVoiceDir = "voice-default";

		this.voiceElement.setAttribute("src", "audio/" + defaultVoiceDir + "/" + technique + ".mp3")
	}
}
