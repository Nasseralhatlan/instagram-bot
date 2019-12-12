document.querySelector(".v1Nh3").querySelector("a").click();
setInterval(()=>{
        var like = document.querySelector("button.dCJp8");
        var follow = document.querySelector("button.oW_lN");
        var next = document.querySelector("a.HBoOv");
        if(follow.innerHTML == "Follow"){
            follow.click();
        }
        if(like.querySelector("span").getAttribute("aria-label") == "Like"){
            like.click();
        }
        next.click();
},10000)




