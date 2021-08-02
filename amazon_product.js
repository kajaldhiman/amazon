//const puppeteer = require('puppeteer');
const url = process.argv[2];
if (!url) {
    throw "Please provide URL as a first argument";
}
const cheerio = require('cheerio');
const request = require('request');

async function run () {
	request({
	    method: 'GET',
	    url: url
	}, (err, res, body) => {

	    if (err) return console.error(err);

	    let $ = cheerio.load(body);
        const data = new Array;
	    /*let title = $('title');
	    console.log(title.text());*/
        let post = {
        	canonical: $('link[rel="canonical"]').attr('href'),
			title: $('meta[name="title"]').attr('content'),
			descritpion: $('meta[name="description"]').attr('content'),
			image: ($('#imgTagWrapperId').find('img').attr('src'))
		}
	    data.push(post)
        console.log(data);
	});
}

run();




