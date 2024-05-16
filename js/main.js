var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productModel=document.getElementById("productModel");
var productDesc=document.getElementById("productDesc");
var productList;
var addProductBtn=document.getElementById("addProductBtn")
var updateProductBtn=document.getElementById("updateProductBtn")
var updatedIindex;
if(localStorage.getItem("productList")==null){
    productList=[]
}else{
    productList=JSON.parse(localStorage.getItem("productList"))
    displayProduct(productList)
}



function addProduct(){
    var product={
        name:productName.value,
        price:productPrice.value,
        Model:productModel.value,
        Desc:productDesc.value,
    }
    console.log(product);
   productList.push(product)
//    clearForm()
   console.log(productList)
   displayProduct(productList)
   localStorage.setItem("productList",JSON.stringify(productList))
}

function displayProduct(list){
var cartona="";
for(var i=0;i<list.length;i++){
    cartona+=`      <tr>
    <td>${i +1}</td>
    <td>${list[i].newName?list[i].newName:list[i].name}</td>
    <td>${list[i].price}</td>
    <td>${list[i].Model}</td>
    <td>${list[i].Desc}</td>
    <td>
        <button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm">delete</button>
    </td>
    <td>
        <button onclick="getUpdatedProducts(${i})" class="btn btn-warning btn-sm">update</button>
    </td>
   </tr>`
}
document.getElementById("tBody").innerHTML=cartona
}

function clearForm(){
    productName.value=""
    productPrice.value=""
    productModel.value=""
    productDesc.value=""
}

function deleteProduct(index){
    productList.splice(index,1)
    console.log(productList)
    displayProduct(productList)
    localStorage.setItem("productList",JSON.stringify(productList))
}

function searchByName(term){
    var foundedItems=[]
for(var i=0;i<productList.length;i++){
    if(productList[i].name.toLowerCase().includes(term.toLowerCase())==true){
         foundedItems.push(productList[i])
         displayProduct(foundedItems)
    }
    productList[i].newName=productList[i].name.toLowerCase().replace(term.toLowerCase(),`<span class="text-danger fw-2">${term}</span>`)
}
}

function getUpdatedProducts(index){
    productName.value=productList[index].name
    productPrice.value=productList[index].price
    productModel.value=productList[index].Model
    productDesc.value=productList[index].Desc

    addProductBtn.classList.add("d-none")
    updateProductBtn.classList.replace("d-none","d-block")
}


function updateProduct(){
    addProductBtn.classList.replace("d-none","d-block")
    updateProductBtn.classList.replace("d-block","d-none")

}









