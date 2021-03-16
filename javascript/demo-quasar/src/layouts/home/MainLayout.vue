<template>
    <div id="project-hiddensinger">
        <header>
            <div class="col20">
               <Sidebar/>  
            </div>
            <div class="col80">
                <nav>
                  <div class="tab-chuyen">
                      <div class="tab-left">
                          <button>
                              <i class="fas fa-arrow-left"></i>
                          </button>
                          
                      </div>
                      <div class="tab-right">
                          <button>
                          <i class="fas fa-arrow-right"></i>
                          </button>
                      </div>
                      
                  </div>
                  <div class="search-search">
                      <div class="search">
                          <div class="search-icon">
                              <i class="fa fa-search" aria-hidden="true"></i>
                          </div>
                          <div class="search-input">
                              <input type="text" name="" id="" placeholder="Enter a song name, artist or MV">
                          </div>
                      </div>
                  </div>
                <div class="applicat"> 
                    <div class="doimau" @click="clickbuttonmau">
                        <i class="fas fa-tshirt"></i>
                    </div>
                    <div class="form-doimau" id="form-doimau">
                        <div class="form-doiMau">
                            <div class="title-form-doimau">
                                <div class="title-form">
                                    <h1>interface and themes</h1>
                                </div>
                                <div class="xoa"  @click="clickclose">
                                    <i class="fas fa-times"></i>
                                </div>
                                
                        </div> 
                    </div>
                        
                        
                    </div>
                    <input type="file" id="file-upload"> 
                    <label for="file-upload">
                        <div class="upload">
                            <i class="fa fa-upload" aria-hidden="true"></i>
                        </div>
                    </label> 
                    <div class="setting">
                            <i class="fa fa-cog" aria-hidden="true"></i>
                    </div>            
                    <div class="avatar">
                        <img src="../../assets/home/imgs/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg" alt="">
                    </div>
                    
                </div>
                </nav>
                <content>
                    <router-view/>
                </content>
            </div>
        </header>
        <footer>
            <div class="img-music">
                <div class="icon-music-1">♪</div>
                <div class="icon-music-2">♫</div>
                <div class="img-music-author">
                    <img src="../../assets/home/imgs/elle-viet-nam-am-nhac-anh-huong-cam-xuc-5.jpg" alt="">
                </div>
                
            </div>
            <div class="title-music">
                    <div class="name-music">
                        <p>Mẹ Tôi</p>
                    </div>
                    <div class="author-music">
                        <p>Quách Tuấn Du</p>
                    </div>
            </div>
                <div class="icon-like">
                    <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                </div>
                <div class="icon-dislike">
                    <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                </div>
                <div class="icon-other">
                    <span>...</span>
                </div>
                <div class="playmusic">
                    <div class="playmusic-top">
                        <span class="load-music">⇆</span>
                        <span class="reverleftplay">◁</span>
                        <span class="playMusic">▶</span>
                        <span class="reverrightplay">▷</span>
                        <span class="random"><i class="fa fa-random" aria-hidden="true"></i></span>
                    </div>
                    <div class="playmusic-bottom">
                        <span class="time-start">14:10</span>
                        <span class="chay-time">───────────────────────────</span>
                        <span class="dungluong-time">───────────────────────────</span>                       
                        <span class="nut">●</span>
                        <span class="time-finish">20:18-</span>
                    </div>
                    <span class="play-speaker"><i class='fas fa-volume-up'></i></span>
                </div>
        </footer>
    </div>
</template>
<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css';
 @import '../../assets/home/css/index.css';
 @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css';
</style>
<script>
import Sidebar from '../../components/Sidebar'
export default {
    name: 'Home',
     components: {
        Sidebar
    },
    data(){
        return{

        }
    },
    methods: {
        
        clickbuttonmau(){
            document.getElementById("form-doimau").style.display='block';
        },
        clickclose(){
            document.getElementById("form-doimau").style.display="none";
        }
    }
}
</script>