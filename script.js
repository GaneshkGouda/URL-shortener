const shortBtn =document.getElementById("short-btn");
const reloadBtn =document.getElementById("reload-btn");
shortBtn.addEventListener("click",shortenUrl);

function shortenUrl(){
var orginalurl = document.getElementById("orginalurl").value;
var apiurl = "https://tinyurl.com/api-create.php?url="+encodeURIComponent(orginalurl);

shortenedUrlTextararea = document.getElementById("shortenedUrl");
fetch(apiurl).then(response => response.text()).then(data => {
shortenedUrlTextararea.value=data;

}).catch(error =>{
shortenedUrlTextararea.value=" Error : unable to short Url!"
});
}
reloadBtn.addEventListener('click',() =>{
location.reload()
})