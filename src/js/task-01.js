const categoryEl = document.getElementsByClassName("item")

console.log("Number of categories :", categoryEl.length );
for (let i = 0; i < categoryEl.length; i += 1) {
    const categoryName = categoryEl[i].firstElementChild.textContent
    console.log("Category:", categoryName)
    const counts = categoryEl[i].querySelectorAll("li").length
    console.log("Elements:", Number(counts));
}
     
    
