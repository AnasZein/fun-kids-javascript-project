function click(){
    // console.log(this.id);
    localStorage.setItem("id", this.id)
    location.href = "quizPage.html"
}

classArr = ['.card1','.card2','.card3','.card4','.card5','.card6']

for (const i of classArr) {
    document.querySelector(i).addEventListener("click", click)
}