<template>
     <div class="sidebar">
        <div class="title">
           <img src="../assets/home/imgs/logo.png" alt="">
        </div>

        <div class="menu-items">
            <div class="dashboard">
                <h2><a href="/">HOME</a></h2>
            </div>
            <router-link to="/zingchart" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    #ZingChart
                </div>
            </router-link>
            <router-link to="/top100" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Top 100
                </div>
            </router-link>
            <router-link to="/topic" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                   Topic
                </div>
            </router-link>
            <router-link to="/newrelease" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    New Release
                </div>
            </router-link>
        </div>
    </div>
</template>
<style scoped>
.dashboard {
    background: white;
    padding: 7%;
}

.dashboard h2 a {
    text-decoration: none;
    color: #0f3057;
}
.title img {
    width: 76%;
    height: 123px;
    margin-left: 12%;
}
.title {
    color: white;
    font-size: 24px;
    margin-top: 10px;
}

.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 6px;
}

.menu-items > * {
    margin-top: 60px;
}

.side-btn {
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: white;
    background-color: transparent;
}

.side-btn:focus {
    outline: none;
}

.side-btn.active {
    position: relative;
    background-color: white;
    color: #0f3057;
    font-weight: 600;
    margin-left: 10px;
    border-radius: 30px 0 0 30px;
}

.side-btn.active::before {
    top: -30px;
}

.side-btn.active::after {
    bottom: -30px;
}

.side-btn.active::before, .side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
    height: 30px;
    width: 30px;
    background-color: white;
}

.side-btn.active .link-container::before {
    top: -60px;
}

.side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
}

.side-btn.active .link-container::before, .side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: #0f3057;
}
</style>