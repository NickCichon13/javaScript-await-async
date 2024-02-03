alert("Working")

let url = "http://numbersapi.com"
let favNum = 33



async function getFavNum(){
    let res = await $.getJSON(`${url}/${favNum}?json`);
    console.log(res);
}
getFavNum();

async function getMultipleNums(){
    let multipleNums = [1,2,3,4]
    let res = await $.getJSON(`${url}/${multipleNums}?json`);
    console.log(res);
}
getMultipleNums();

async function getMutilFacts() {
    let multiFacts = await Promise.all(
      Array.from({ length: 4 }, () => $.getJSON(`${url}/${favNum}?json`))
    );
    multiFacts.forEach(data => {
      $('body').append(`<p>${data.text}</p>`);
    });
  }
  getMutilFacts();

