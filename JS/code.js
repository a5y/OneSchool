let coursesData=[
    {
        id:1,
        name:"Logo Design Course",
        img:"img_5.jpg",
        salary:99,
        lesson:5,
        weeks:6,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        std:2000,
        msg:3
    },
    {
        id:2,
        name:"Js Programming Language",
        img:"img_6.jpg",
        salary:99,
        lesson:6,
        weeks:9,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        std:2100,
        msg:5
    },
    {
        id:3,
        name:"Study Law Of Physics",
        img:"img_4.jpg",
        salary:20,
        lesson:4,
        weeks:5,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        std:2050,
        msg:3
    },
    {
        id:4,
        name:"Web Design Course",
        img:"img_3.jpg",
        salary:50,
        lesson:5,
        weeks:6,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        std:2100,
        msg:5
    },
    {
        id:5,
        name:"Front-End Course",
        img:"img_2.jpg",
        salary:150,
        lesson:10,
        weeks:15,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        std:2000,
        msg:6
    },
    {
        id:6,
        name:"Angular Course",
        img:"img_1.jpg",
        salary:80,
        lesson:5,
        weeks:6,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        std:1000,
        msg:5
    },
    {
        id:7,
        name:"Back-End Course",
        img:"img_4.jpg",
        salary:99,
        lesson:5,
        weeks:6,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        std:2000,
        msg:3
    },
    {
        id:8,
        name:"Java Course",
        img:"img_5.jpg",
        salary:99,
        lesson:5,
        weeks:6,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        std:2000,
        msg:3
    },
    {
        id:9,
        name:"C/C++ Course",
        img:"img_4.jpg",
        salary:99,
        lesson:5,
        weeks:6,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        std:2000,
        msg:3
    },
    {
        id:10,
        name:"Python Course",
        img:"img_6.jpg",
        salary:99,
        lesson:5,
        weeks:6,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        std:2000,
        msg:3
    }
];

let holder='';
for (let item of coursesData){
    holder += `
                <div class="item card" style="height: auto;">
                    <div class="img-holder">
                     <img src="images/${item.img}" class="img-fluid" alt="not found">
                    </div>
                    <div class="content1">
                        <span class="salary">$${item.salary}</span>
                        <p class="lesson"><i class="far fa-clock"></i> ${item.lesson} Lessons / ${item.weeks} week</p>
                        <h6>${item.name}</h6>
                        <p>${item.desc}</p>
                        <div class="std">
                            <span><i class="fas fa-users"></i> ${item.std} students</span>
                            <span class="bord"><i class="fas fa-comment-alt"></i> ${item.msg}</span>
                        </div>
                    </div>
            </div>
    `;
}
document.getElementById("corss").innerHTML=holder;



$(function () {
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    document.querySelector(".owl-next span").innerHTML="NEXT";
    document.querySelector(".owl-prev span").innerHTML="PREV";
});