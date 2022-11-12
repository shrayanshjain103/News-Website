
// 6d8cbf0c029b4b37a0caeabdbd7226d8

//initilization of the variable
let source = "bbc-news";
let apiKey = "6d8cbf0c029b4b37a0caeabdbd7226d8";

// Grab the news conatainer
let newsAccordion = document.getElementById("newsAccordion");

//Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=6d8cbf0c029b4b37a0caeabdbd7226d8`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function(element,index) {
        let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button
                                    class="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapse${index}"
                                    aria-expanded="true"
                                    aria-controls="collapse${index}">
                                    <b>Breaking News ${index+1}:</b>  ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element["url"]}" target="_blank">Read More Here</a> </div>
                            </div>
                         </div>`;
         newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
}
xhr.send()
