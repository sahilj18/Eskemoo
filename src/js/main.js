import option from "./components/Option";

// https://dog.ceo/api/breed/affenpinscher/images/random
// https://dog.ceo/api/breeds/list/all

const BASE_URL=`https://dog.ceo/api/`;

const imageEl = document.querySelector("img");
const breedListEl= document.querySelector("#data-breed-list")
console.log(imageE1, dataBreedList);


// fetch function
function getDogList(){
fetch (`${BASE_URL}breeds/list/all`)
.then((res)=> res.json())
.then((data)=> data.message)
.catch((err)=>console.error("error agayi",err));
}
getDogList();

//TODO; implement this
function getDogImage(Breed){}
fetch (`{$BASE_URL}`)

//===MARK Render
function renderSelect(){}

getDogList().then((breedList)=> {
    for (let breed in breedList){
        const option=document.childElement("option")
        option.textcontent="breed";
        option.value="breed";
        breedListEl.appendChild(option);
    }
})

renderSelect();

function renderImage(){}




// async function getImage() {
//   const res = await fetch(
//     `https://dog.ceo/api/breed/affenpinscher/images/random`
//   );
//   const data = await res.json();
//   console.log(data.message);

//   imageEl.src = data.message;
// }

// getImage();