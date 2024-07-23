<template>
    <div class="sidebar">
        <div class="sidebar-item">
            <img src="@/assets/svg/star.svg" alt="home">
            <p>Juegos</p>
        </div>
        <div class="sidebar-item">
            <img src="@/assets/svg/gaming-pad.svg" alt="heart">
            <p>Hardware</p>
        </div>
        <div class="sidebar-item">
            <img src="@/assets/svg/Nintendo_Switch_Logo.svg" alt="rocket">
            <p>Nintendo Switch Online</p>
        </div>
        <div class="sidebar-item">
            <img src="@/assets/svg/bag-shopping.svg" alt="box">
            <p>Nintendo eShop</p>
        </div>
        <!-- <div class="sidebar-item">
            <img src="@/assets/svg/MyNintendoIcon.svg" alt="setting">
            <p>My Nintendo Store</p>
        </div>
        <div class="sidebar-item">
            <img src="@/assets/svg/help.svg" alt="setting">
            <p>Ayuda</p>
        </div>
        <div class="sidebar-item">
            <img src="@/assets/svg/news.svg" alt="setting">
            <p>Noticias</p>
        </div> -->
        <div class="sidebar-item">
            <img src="@/assets/svg/users.svg" alt="setting">
            <p>Siguenos</p>
        </div>
        <div class="sidebar-item points">
            <p class="points-p">...</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SidebarComponent'
}
</script>

<style scoped>

img {
    width: 32px;
    height: auto;

}

.sidebar {
    background-color: #bf0010;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1001;
    top: 70px;
    left: 0;
    width: 88px;
    height: calc(100vh - 70px);
}

.sidebar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    color: white;
    cursor: pointer;
    font-size: 80%;
    border: 1px solid #bf0010;
    background-color: #e60012;
    position: relative;
}

.sidebar-item::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #6f0009;
    position: absolute;
    top: 0px;
    right: -4px;
    transform: rotate(45deg);
    
}

.sidebar-item:hover {
    background-color: #d50213;
}

p {
    margin-top: 8px;
    text-align: center;
}

.points {
    display: flex;
    justify-content: center;
    align-items: center;
}

.points-p {
    margin: 0;
    font-size: 28px;
    margin-bottom: 12px;
}

@media (max-width: 678px) {
    .sidebar {
        display: none;
    }
}

</style>