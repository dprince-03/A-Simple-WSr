import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

async function fetchWebData() {
    try {
			const response = await fetch(
				"https://github.com/dprince-03/A-Simple-WSr"
			);
			const body = await response.text();
			const $ = cheerio.load(body);
            
			// const wrapper = $(".px-3");
			// console.log(wrapper);
			// console.log(wrapper.length);

			const items = [];
			$(".px-3").map((i, el) => {});
            
		} catch (error) {
        console.error('Error fetching data:', error);
        return;
    }
    // console.log('Fetching data from: ...nothing yet...');
    
}

fetchWebData();
