<template>
    <header>
        <div class="left-zone">
            <img src="@/assets/svg/menu.svg" alt="menu" class="menu">
            <img src="@/assets/svg/nintendo-logo.svg" alt="nintendo-logo" class="nintendo-logo">
        </div>
        <div class="right-zone">
            <div class="search">
                <img src="@/assets/svg/search-right.svg" alt="search" class="search-img">
                <p>Buscar</p>
            </div>
            <div class="wish-list">
                <img src="@/assets/svg/hearth.svg" alt="wish-list" class="hearth-img">
                <p>Lista deseos</p>
            </div>
            <div class="profile">
                <img src="@/assets/mii/mii-angel.png" alt="profile" class="profile-img">
                <p>Ángel</p>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style scoped>

header {
    background-color: #e60012;
    color: white;
    height: 70px;
    display: flex;
    position: fixed;
    z-index: 1000;
    width: 100%;
    top: 0;
}

.left-zone {
    margin-left: 12px;
    display: flex;
    align-items: center;
    width: 100%;
    margin-right: 12px;
}

.nintendo-logo {
    width: 70px;
    height: 70px;
}

.menu, .search-img, .hearth-img, .profile-img {
    width: 28px;
    height: auto;
}

.menu {
    margin-right: 18px;

}

.profile-img {
    border: 2px solid white;
    border-radius: 50%;
}

.right-zone {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin-right: 12px;
}

.search, .wish-list, .profile {
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.search > p, .wish-list > p, .profile > p {
    text-align: center;
    font-size: .65rem;
    padding: 0 4px;
    margin-top: 5px;
    font-weight: 500;
}


.search:hover > p, .wish-list:hover > p, .profile:hover > p {
    text-decoration: underline;
}

.search:hover, .wish-list:hover, .profile:hover {
    cursor: pointer;
}

.profile > p {
    font-weight: 700;
}

@media (min-width: 678px) {
    .menu {
        display: none;
    }

    .nintendo-logo {
        width: 100px;
        height: auto;
        margin-left: 12px;
    }

    .right-zone {
        margin-right: 24px;
    }
}


</style>