import data from "$lib/data/data.json";
import { writable } from 'svelte/store';

export const season = writable("0");
export const teams = writable();
export const form = writable();
export const recent = writable()
export const goalscorers = writable();
export const assistants = writable();
export const goalkeepers = writable();
export const motm = writable();
export const matches = writable();

let selected = data;

recent.set([... selected[0].stats].slice(-1));


season.subscribe((value) => {
    let current = value;

    if (isNaN(current)) {
        selected = [{ "season": "All Time", "stats": [... data].reverse().map(({ stats }) => stats).flat() }];
        current = 0;
    } else {
        current = parseInt(value);
        selected = data;
    }

    form.set([... selected[current].stats].slice(-5));

	function generateTeam(name) {
		return {
			position: "",
			name: name,
			played: selected[current].stats.length,
			won: 0,
			drawn: 0,
			lost: 0,
			g: [0, 0]
		}
	}

    let results = [ new generateTeam("P&B"), new generateTeam("G&J")]

	selected[current].stats.forEach((node) => {
		// Wins/Draws/Losses
		if (node.score_plasil > node.score_grehn) {
			results[0].won += 1;
			results[1].lost += 1;
		} else if (node.score_grehn > node.score_plasil) {
			results[1].won += 1;
			results[0].lost += 1;
		} else {
			results[1].drawn += 1;
			results[0].drawn += 1;
		}

		// Goal Difference
		results[0].g[0] += node.score_plasil;
		results[0].g[1] += node.score_grehn;
		results[1].g[0] += node.score_grehn;
		results[1].g[1] += node.score_plasil;
	});

	if (results[0].won < results[1].won || (results[0].won == results[1].won && results[0].g[0] < results[1].g[0])) {
		results[1].position = "1";
		results[0].position = "2";
		teams.reverse();
	} else if (results[0].won == results[1].won) {
		results[1].position = "=1";
		results[0].position = "=1";
	} else {
		results[1].position = "2";
		results[0].position = "1";
	}

    teams.set(results);

    //
    // Goals
    //

    function sortObject(obj) {
		return Object.entries(obj).sort((a, b) => b[1] - a[1])
	}

	let scorers = {}

	selected[current].stats.forEach((node) => {
		node.goals.forEach((scorer) => {
			if (scorer in scorers) {
				scorers[scorer] += 1
			} else {
				scorers[scorer] = 1
			}
		});
	});

	goalscorers.set(sortObject(scorers));

	//
    // Assists
    //

    function sortObject(obj) {
		return Object.entries(obj).sort((a, b) => b[1] - a[1])
	}

	let helpers = {}

	selected[current].stats.forEach((node) => {
		node.assists.forEach((helper) => {
			if (helper in helpers) {
				helpers[helper] += 1
			} else {
				helpers[helper] = 1
			}
		});
	});

	assistants.set(sortObject(helpers));

	//
    // MOTM
    //

    function sortObject(obj) {
		return Object.entries(obj).sort((a, b) => b[1] - a[1])
	}

	let mvp = {}

	selected[current].stats.forEach((node) => {
		if (node.motm != "") {
			if (node.motm in mvp) {
				mvp[node.motm] += 1;
			} else {
				mvp[node.motm] = 1;
			}
		}
	});

	motm.set(sortObject(mvp));

	//
    // Clean Sheets
    //

    function sortObject(obj) {
		return Object.entries(obj).sort((a, b) => b[1] - a[1])
	}

	let keepers = {}

	selected[current].stats.forEach((node) => {
		node.assists.forEach((keeper) => {
			if (keeper in keepers) {
				keepers[keeper] += 1
			} else {
				keepers[keeper] = 1
			}
		});
	});

	goalkeepers.set(sortObject(keepers));

    //
    // Matches
    //

    matches.set([... selected[current].stats].reverse());
});