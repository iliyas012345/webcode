let div = document.createElement('div');

let input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","search 1-12 ")
input.setAttribute("id","book")

 div.append(input)
 document.body.append(div)

let  button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary")
button.innerHTML="search"
button.addEventListener("click",foo)
 div.append(button)
 document.body.append(div)



 async function foo(){
    
         let res= document.getElementById("book").value
     const response = await fetch(`https://www.anapioficeandfire.com/api/books/${res}`); 
     const data = await response.json();

     console.log(data.name);
  console.log(data.isbn);
  console.log(data.numberOfPages);
  console.log(data.authors[0])
  console.log(data.publisher);
  console.log(data.released);
  console.log(data.characters[0]);
     
  
    let card=document.getElementById('card')
    card.innerHTML+=
    
    `<div class="card" style="width: 25rem;  >
    
        <div class="card-body">
          
          <p class="card-name" >Name of the book :${data.name}</p>
          <p class="card-isbn">ISBN of book :${data.isbn}</p>
          <p class="card-number">Number Of Pages:${data.numberofpages}</p>
          <p class="card-authors">Name Of The Author:${data.authors[0]}</p>
          <p class="card-publisher">Name Of the Publisher :${data.publisher}</p>
          <p class="card-released">Released Date:${data.released}</p>
          <p class="card-characters">character1 :${data.characters[0]}</p>

          
        </div>
      </div>`
     

 }

