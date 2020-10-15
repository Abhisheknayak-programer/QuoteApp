//// Fetching The id of the html
const quotes = document.getElementById("quotes");
const author = document.getElementById("authors");
const getQuotes = document.getElementById("getQuotes");
const tweetme = document.getElementById("tweetme");

let realData = "";
let quotesData = "";


const getRandomQuotes = () =>{
    let random_quote = Math.floor(Math.random() * 100);

    //// For checking that wheather the data is random or not
    // console.log(realData[random_quote].text);



    quotesData = realData[random_quote];


    //// Displaying the data to the main page
    quotes.innerHTML = `${quotesData.text}`;
    // author.innerHTML = `${quotesData.author}`;


  //// This is made to show that if the author name is null in the api then simply we need to show UNKNOWN    
    if(quotesData.author === null){
        author.innerHTML = "UNKNOWN";
    }else{
        author.innerHTML = `${quotesData.author}`;
    }

    
}



const getQuote = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();

        //// For Fetching the data 
        // console.log(realData[0].text);
        // console.log(realData[0].author);

        getRandomQuotes();

    } catch (error) {
        
    }
}





getQuotes.addEventListener("click",getRandomQuotes);


//// Its a function for the tweet
tweetme.addEventListener("click",()=>{
    let Twitter_post = `https://twitter.com/intent/tweet?text=${quotesData.text}                                         By  ${quotesData.author}`;
    window.open(Twitter_post);
})



getQuote();