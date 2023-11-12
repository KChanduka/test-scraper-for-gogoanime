const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

const  botCheckURL = 'https://bot.sannysoft.com/';
const url1 ='https://ww4.gogoanime2.org/home';

puppeteer.use(StealthPlugin());

async function run(){

    const browser = await puppeteer.launch({headless:false});

    const page = await browser.newPage();

    // await page.waitFor(5000);
    await page.goto(url1);
    // await page.goto("https://account.mongodb.com/account/login?n=%2Fv2%2F653028a4b3398518e13ce130&nextHash=%23clusters");
    // await page.goto('https://www.animeout.xyz/')

    await page.waitForTimeout(5000);


    await page.screenshot({path:'example.png' , fullPage: true});
    // const title = await page.evaluate(()=>document.title);
    // console.log(title);
    // const text = await page.evaluate(()=>document.body.innerText);
    // console.log(text);

    // const links = await page.evaluate(()=>Array.from(document.getElementsByTagName("a"),(e)=> e.href));
    // const titles = await page.evaluate(()=>Array.from(document.querySelectorAll("article > h2 > a"),
    // (e)=>{ 
    //     const card = {
    //         name:e.innerHTML,
    //         link:e.href
    //     }
    //     return card;
    // }));
    // console.log(titles);

    const nameDiscriptions = await page.evaluate(()=>Array.from(document.querySelectorAll(".items > li"),
    (e)=>(
        {
            name: e.querySelector(".name > a").innerHTML,
            link:e.querySelector(".name > a ").href,
            description:e.querySelector(".episode ").innerHTML,
            imageLink:e.querySelector(".img > a >img").src 

        }
    )));
    console.log(nameDiscriptions);

    
    await browser.close();

}

run();