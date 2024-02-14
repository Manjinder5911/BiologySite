let instrumentPic = document.getElementsByClassName('Finstrument');
let imglink = ["../img/img1.jpg","../img/img3.jpg","../img/img4.jpg","../img/img5.jpg","../img/img6.jpg","../img/img7.jpg"]
for (let index = 0; index < imglink.length; index++) {
    instrumentPic[index].src = `${imglink[index]}`;
    
}