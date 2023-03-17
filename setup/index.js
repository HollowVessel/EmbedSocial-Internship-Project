let http = new XMLHttpRequest();

http.open('get', 'data.json', true); 
 
http.send();

http.onload = function() {
    
    if(this.readyState == 4 && this.status == 200) {
        let container = JSON.parse(this.responseText);

        let output = "";

        for(let item of container) {
            output += `
                <div class="card">
                    <div class="header">
                        <div class="user-details">
                            <div class="profile-img">
                                <img src="${item.profile_image}" alt="pfp" class="cover">
                            </div>
                            <h3>${item.name}<br><span>${item.date}</span></h3>
                        </div>
                        <div>
                        <a href="${item.source_link}"><img src="../icons/instagram-logo.svg" alt="${item.source_type}" class="social-icon"></a>
                        </div>
                    </div>
                    <div class="img-box">
                        <img src="${item.image}" alt="cat" class="cover"></a>
                    </div>
                    <div class="description">
                        <p>
                        ${item.caption} 
                        </p>
                    </div>
                    <hr> 
                    <div class="action-buttons">
                        <div class="left">
                            <img src="../icons/heart.svg" alt="heart" class="heart">
                        </div>
                            <h4 id=""class="likes">${item.likes}</h4>
                    </div>
                </div>
            `
        }

        document.querySelector(".box-container").innerHTML = output;
    }
}

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 4;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.container .box-container .card')];

    for (var i = currentItem; i < currentItem + 4; i++) {
        boxes[i].style.display = "inline-block";
    }
    currentItem += 4;

    if(currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}