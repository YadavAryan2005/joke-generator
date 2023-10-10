const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
async function joke(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    if (result.error) {
      throw new Error("failed to fetch joke ");
    }
    let joke = document.getElementsByClassName("joke")[0];
    let pun = document.getElementsByClassName("pun")[0];
    let punchline = document.getElementsByClassName("punchline")[0];
    punchline.innerText = "";
    joke.innerText = "";
    if (result.setup) {
      joke.innerText += result.setup;
      pun.style.display = "block";
      punchline.innerText += result.delivery;
    }
    if (result.joke) {
      pun.style.display = "none";
      joke.innerText += result.joke;
    }
    console.log(result);
  } catch (error) {
    document.alert(error);
  }
}
joke(url);
function showjokes() {
  joke(url);
}
