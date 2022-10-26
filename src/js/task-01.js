const categories = document.querySelectorAll(".item")
console.log(categories);
console.log("Number of categories :", categories.length );
categories.forEach(category =>{ const categoryName = category.firstElementChild.textContent
    console.log("Category:", categoryName)
    const counts = category.querySelectorAll("li").length
    console.log("Elements:", Number(counts))})
    

     
    
