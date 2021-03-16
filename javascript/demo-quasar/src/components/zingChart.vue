<template>
    <div id="zingchart">
        <div class="xephang">
            <div class="baihat">
                <div class="much">
                    <h1>1</h1>
                </div>
                <span>-</span>
                <img src="../assets/home/imgs/elle-viet-nam-am-nhac-anh-huong-cam-xuc-5.jpg" alt="">
                <div class="title-music">
                    <p class="name-music">Đom đóm</p>
                    <p class="Author-music">Jack</p>
                </div>
                <span class="time-music">
                    05:25
                </span>
                <div class="views">
                    <span>200</span>
                </div>
                <div class="icon-karaoke">
                    <img src="../assets/home/imgs/karaoke-icon-vector-734194.jpg" alt="">
                </div>
                <div class="icon-like">
                   <i class="fas fa-heart"></i>
                    
                   
                </div>
                <div class="icon-dislike">
                    <i class="fas fa-heart-broken"></i>
                </div>
                <div class="icon-other">
                    <span>...</span>
                </div>
                <div class="icon-play">
                    <i class="fa fa-play" aria-hidden="true"></i>
                </div>
            </div>
            
        </div>
        <div class="button-see-top-100">
                <p>SEE TOP 100</p>
        </div>

    </div>
    
</template>
<style  scoped>
.baihat {width: 100%;}

.much {
    display: inline-block;
    float: left;
}
.much h1 {
    font-size:50px;
}
.icon-play {
    
    display: none;
    position: absolute;
    top: 13%;
    left: 22%;
}

.baihat span {
    float: left;
    font-size: 34px;
}

.button-see-top-100 {
    margin-left: 44%;
    font-size: 18px;
    border-radius: 16px;
    padding: 1%;
    display: inline-block;
    border: 1px solid white;
    background: ghostwhite;
}

.xephang {
    height: 41vh;
    width: 100%;
}

.baihat {width: 100%;padding:1%}

.much {
    font-size: 16px;
    display: inline-block;
    float: left;
}

.baihat span {
    padding-left: 2%;
    float: left;
    font-size: 34px;
}

.baihat img {
    margin-top:1%;
    padding-left: 2%;
    padding-right: 2%;
    float: left;
    display: inline-block;
    width: 10%;
    height: 7vh;
    border-radius: 4px;
}

.title-music {
    display: inline-block;
    float: left;
}

span.name-music {
    display: block;
}

span.Author-music {
    display: block;
    float: left;
}

span.time-music {
    padding-top: 1%;
    padding-right:15%;
    font-size: 20px!important;
    padding-left: 15%;
}

.views span {
    font-size: 20px!important;
}

.views {
    margin-left: 1%;
    display: inline-block;
    float: left;
    width: 4%;
    text-align: center;
    box-sizing: border-box;
    height: 7vh;
    border-radius: 50%;
    padding-top: 0.5%;
    padding-left: 0.5%;
}

.icon-karaoke {
    padding-left: 1%;
    width: 6%;
    display: inline-block;
    float: left;
    padding-right: 1%;
}

.icon-karaoke img {
    border-radius: 50%!important;
    width: 100%!important;
    height: 100%!important;
    background: rosybrown;
}

.icon-like {
    font-size: 20px;
    display: inline-block;
    float: left;
    padding-top: 1%;
    padding-left: 1%;
}

.icon-dislike {
    padding-right: 2%;
    display: inline-block;
    float: left;
    padding-left: 2%;
    padding-top: 1%;
    font-size: 20px;
}

.icon-other {
    cursor: pointer;
    box-sizing: border-box;
    width: 3%;
    float: left;
    text-align: center;
    padding-left: 0.7%;
    border-radius: 50%;
    background: red;
    height: 6vh;
}

.icon-other span {
    color: white;
    text-align: center;
    display: inline-block;
    font-size: 20px!important;
    font-weight: 700;
}

.baihat:hover {
    background: rgb(89, 82, 82);
    height: 15vh;
}

.baihat:hover .much, .baihat:hover span, .baihat:hover .title-music, .baihat:hover .icon-like, .baihat:hover .icon-dislike {
    color: white;
}

.title-music {
    display: inline-block;
    float: left;
}

.name-music {
    margin:0;
    font-size: 17px;
    display: block;
}
.baihat:hover .icon-play i.fa.fa-play {
   color:white;
    padding-left: 40%;
}
.baihat:hover .icon-play {
    margin-top:1%;
    padding-bottom: 2%;
    box-sizing: border-box;
    padding-top:1%;
    width: 6%;
    background:rgba(0,0,0,0.3);
    display: inline-block;
}
.Author-music {
     font-size: 17px;
    display: block;
    float: left;
}
</style>
<script>
export default {
    
}
</script>