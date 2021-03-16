<template>
    <div id="Home">
        <section id="slider">
                        <input type="radio" name="slider" id="s1" >
                        <input type="radio" name="slider" id="s2">
                        <input type="radio" name="slider" id="s3" checked>
                        <input type="radio" name="slider" id="s4" >
                        <input type="radio" name="slider" id="s5">
                        <label for="s1" id="slide1">
                            <img src="../../assets/home/imgs/tải xuống (1).jpg"  height="100%" width="100%" alt="">
                        </label>
                        <label for="s2" id="slide2">
                            <img src="../../assets/home/imgs/tải xuống (2).jpg"  height="100%" width="100%" alt="">
                        </label>
                        <label for="s3" id="slide3">
                            <img src="../../assets/home/imgs/tải xuống.jpg" height="100%" width="100%" alt="">
                        </label>
                        <label for="s4" id="slide4">
                            <img src="../../assets/home/imgs/tron-bo-nhung-hinh-anh-dep-buon-mang-tam-trang-suy-tu.jpg"  height="100%" width="100%" alt="">
                        </label>
                        <label for="s5" id="slide5">
                            <img src="../../assets/home/imgs/những-hình-ảnh-hoa-Anh-Đào-2020-đẹp-nhất-5.jpg"  height="100%" width="100%" alt="">
                        </label>
                        <div class="input-slide">
                            <div class="slide-left">
                                <i class="fa fa-angle-left" aria-hidden="true"></i>
                            </div>
                            <div class="slide-right">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                            
                        </div>
        </section>
        
    </div>
</template>

<style scoped>
/*slide 3d*/
.slide-left {
    cursor: pointer;
    left: 2%;
    top: 40%;
    position: absolute;
    padding-top: 0.5%;
    box-sizing: border-box;
    justify-content: center;
    width: 3%;
    display: inline-block;
    text-align: center;
    height: 6vh;
    display: inline-block;
    border-radius: 50%;
    background: #f2f2f2;
}
.slide-right {
    cursor: pointer;
    right: 2%;
    top: 40%;
    position: absolute;
    padding-top: 0.5%;
    box-sizing: border-box;
    justify-content: center;
    width: 3%;
    display: inline-block;
    text-align: center;
    height: 6vh;
    display: inline-block;
    border-radius: 50%;
    background: #f2f2f2;
}
[type=radio]{
    display: none;
}
#slider {
    height:20vw;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
}
#slider label img {
    border-radius: 16px;
}
#slider label {
    margin: auto;
    width: 40%;
    height: 100%;
    
    position: absolute;
    left: 0;
    right: 0;
    cursor: pointer;
    transition: transform 0.4s ease;
}
#s1:checked ~ #slide4, #s2:checked ~ #slide5,
#s3:checked ~ #slide1, #s4:checked ~ #slide2,
#s5:checked ~ #slide3 {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .37);
    transform: translate3d(-90%,0,-200px);

}

#s1:checked ~ #slide5, #s2:checked ~ #slide1,
#s3:checked ~ #slide2, #s4:checked ~ #slide3,
#s5:checked ~ #slide4 {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .3), 0 2px 2px 0 rgba(0, 0, 0, .2);
    transform: translate3d(-50%,0,-100px);
    
}

#s1:checked ~ #slide1, #s2:checked ~ #slide2,
#s3:checked ~ #slide3, #s4:checked ~ #slide4,
#s5:checked ~ #slide5 {
    box-shadow: 0 13px 25px 0 rgba(0, 0, 0, .3), 0 11px 7px 0 rgba(0, 0, 0, .19);
    transform: translate3d(0,0,0);
    
}
 
#s1:checked ~ #slide2, #s2:checked ~ #slide3,
#s3:checked ~ #slide4, #s4:checked ~ #slide5,
#s5:checked ~ #slide1 {
    box-shadow: 0 6px 10px 0 #0000004d,0 2px 2px 0 rgba(0, 0, 0, .2);
    transform: translate3d(50%,0,-100px);
 
}

#s1:checked ~ #slide3, #s2:checked ~ #slide4,
#s3:checked ~ #slide5, #s4:checked ~ #slide1,
#s5:checked ~ #slide2 {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .37) 0 2px 2px 0 rgba(0, 0, 0, .2);
    transform: translate3d(90%,0,-200px);
 
}

/*end slide 3d*/
</style>