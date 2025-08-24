import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import fs from 'fs';

async function fetchWebData() {
    try {
			const response = await fetch("");
			const body = await response.text();
			const $ = cheerio.load(body);

			// const wrapper = $(``);
			// console.log(wrapper);
			// console.log(wrapper.length);

			const items = [];
			$(".").map((i, el) => {
				const elementClass = $(el).find(".").text().trim();

				items.push({
					elementClass,
				});

			});

			fs.writeFile('WSRdata.json', JSON.stringify(items, (err) => {}));
			console.log(items);

		} catch (error) {
        console.error('Error fetching data:', error);
        return;
    }
    // console.log('Fetching data from: ...nothing yet...');
    
}

fetchWebData();
