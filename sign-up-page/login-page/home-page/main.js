var inp=document.getElementById("inp");
console.log(inp);
var but=document.getElementById("add");
console.log(but);
var create=document.getElementById("create");
console.log(create);

but.addEventListener("click",function(){
    addpost();
})

var store={};
function addpost(){
    store['text']=inp.value
    console.log(store);
    createpost();
}

function createpost(){
    create.innerHTML+=`
    <div class="container">
    <div class="row">
    <div class="col">
        <div class="logo">
            <div class="logo-image">
            <i class="fa fa-user fblue" aria-hidden="true"></i>
            </div>
            <div class="logo-para">
                <p class="logo-para1">Ayahtu Samuthiram</p>
                <div class="logos">
                    <p class="logo-para2">2 minutes</p>
                    <i class="fa fa-globe" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
    </div>
    <div class="col2">
        <div class="main-image">
            <img src="images/7.webp" alt="" id="image">
        </div>
        <div class="icons">
            <div class="main-icon">
                <i class="fa fa-heart" aria-hidden="true" onclick="like(this)" id="heart"></i>
                <i class="fa fa-pencil" aria-hidden="true" onclick="editpost(this)"></i>
                <i class="fa fa-trash" aria-hidden="true" onclick="deletepost(this)"></i>
                <p class="liked" style="padding: 1%;" id="likepara">
                    207 likes
                </p>
                <p class="name">${store.text}</p>
                <p class="comment">
                    view all 32 comments
                </p>
                <p class="comment">2 HOURS AGO</p>
            </div>
        </div>
    </div>
    <div class="empty2">
    </div>
    <div class="col3">
        <div>
            <p>&#9786 Add a comment...</p>
        </div>
        <p>post</p>
    </div>
</div>
</div>`
    inp.value='';
    // var image=document.getElementById("image");
    // console.log(image);
    // image.src="https://picsum.photos/200/300";
}

function editpost(e){
    console.log(e.parentElement.children[4].innerHTML);
    inp.value=e.parentElement.children[4].innerHTML;
    e.parentElement.parentElement.parentElement.previousElementSibling.parentElement.remove();
}

function deletepost(e){
    e.parentElement.parentElement.parentElement.previousElementSibling.parentElement.remove();
}



value=true;
var count=207;
function like(){
    
    if(value==true){
    heart.style.color="red";
    count=count+1;
    likepara.innerHTML=count+" likes";
    value=false;
    }
    else{
        heart.style.color="black";
        count=count-1
        likepara.innerHTML=count+" likes";
        console.log(count)
        value=true;
    }
}

// var image=document.getElementById("image");
// console.log(image);
// function generate(){
// 	var picture=["images/burj.jpg","images/corin.jpg","images/delhi.jfif","images/kerala.jpg","images/ooty.jpg","images/taj.jpg","images/tamilnadu.jpg","images/korea.jfif","images/dubai.webp"];
// 	picture.forEach(function(){
// 		var b=Math.floor(Math.random()*(picture.length));
// 		image.src=picture[b];
		
// 	})
// }