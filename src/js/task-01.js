const category = document.getElementsByClassName("item")

console.log("Number of categories :", category.length );
for (let i = 0; i < category.length; i += 1) {
    const categoryName = category[i].firstElementChild.textContent
    console.log("Category:", categoryName)
    const counts = category[i].querySelectorAll("li").length
    console.log("Elements:", Number(counts));
}
     
    
