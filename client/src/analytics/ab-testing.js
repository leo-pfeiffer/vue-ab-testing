const AlephBet = require("alephbet");

/**
 * Wrapper for an A/B testing adapter for AlephBet experiments.
 * */
const makeAdapter = () => {
    return {
        experiment_start: async function (experiment, variant) {
            console.log(experiment, variant, 'participate')
        },
        goal_complete: async function (experiment, variant, event_name) {
            console.log(experiment.name, variant, event_name)
        },
    };
};



/**
 * Set up a new A/B testing experiment with AlephBet
 * @param name Name of the experiment
 * @param variants Object of the experiment variants
 * @param adapter Adapter of the experiment
 * */
const makeExperiment = (name, variants, adapter) => {
    return new AlephBet.Experiment({
        name: name,
        variants: variants,
        tracking_adapter: adapter,
    });
};


// Experiment variant presets
const experimentVariants = {
    "button color": {
        green: {
            activate: function () {
                document.getElementById("increment-btn").className = "is-green";
            },
            weight: 50,
        },
        blue: {
            activate: function () {
                document.getElementById("increment-btn").className = "is-blue";
            },
            weight: 50,
        },
    },
};

module.exports = {
    makeExperiment: makeExperiment,
    makeAdapter: makeAdapter,
    experimentVariants: experimentVariants,
}