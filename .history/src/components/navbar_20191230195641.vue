<template>
<nav>
    <div class="container">
        <router-link tag="div" class="logoContainer" to="/">
                <img src="../assets/logo.png">
                <div>
                    <p>TV SERIES</p>
                    <p>SEARCH</p>
                </div>
        </router-link>

                    <button class="hamburger">
                <span class="hamburger__box">
                    <span class="hamburger__inner"></span>
                </span>
            </button>


        <div class="links">
            <router-link to="/"> SEARCH </router-link>
            <router-link to="/watchlater"> WATCH LATER </router-link>
        </div>
    </div>
</nav>

</template>

<script>
export default {
  name: 'navbar',
};
</script>

<style lang="scss" scoped>

@import "../styles/a.scss";
@import "../styles/hamburger.scss";


.container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem;
    background:black;
    z-index: 5;
}

.logoContainer {
    display: flex;
    align-items: center;
    margin-left: 2rem;
    cursor: pointer;

    img {
        height: 80px;
        width: 80px;
        margin-bottom: 3px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    p {
        margin: 0;
        padding: 0;
        font-size: 1.7rem;
        font-weight: 700;
        text-shadow: 0px 0px 8px rgba(229,9,20,0.81);
    }

    p:nth-child(1) {
        margin-bottom: -8px;
    }

    p:nth-child(2) {
        letter-spacing: 0.25rem;
        margin-left: 3px;
    }
}

.links {
    display:flex;
    height: 100%;
    align-items: center;

    @media (max-width: 1024px) {
        position: absolute;
        top: 100px;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        background: black;
        height: 200px;
        transform: translateY(300px);
    }

    a {
        color: #90131A;
        margin: 0;
        margin-right: 4rem;
        text-shadow: 0px 0px 8px rgba(229,9,20,0.81);

        &:hover {
            color: #e50914;
        }

        @media (max-width: 1024px) {
            font-size: 3rem;
            margin: 1rem 0;
        }
    }

    .router-link-exact-active{
        color: #e50914;
    }
}


</style>
