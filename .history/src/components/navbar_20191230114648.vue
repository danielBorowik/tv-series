<template>
<nav>
    <div class="container">
        <div class="logoContainer">
            <img src="../assets/logo.png">
            <div>
                <p>TV SERIES</p>
                <p>SEARCH</p>
            </div>
        </div>

        <div class="links">
            <a>SEARCH</a>
            <a>WATCH LATER</a>
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

.nav {
    width: 100%;
    background:black;
}

.container {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    z-index: 5;
}

.logoContainer {
    display: flex;
    align-items: center;
    margin-left: 2rem;

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

    a {
        margin: 0;
        margin-right: 4rem;
        text-shadow: 0px 0px 8px rgba(229,9,20,0.81);
    }
}

a {
margin-top: 1rem;
display: inline-block;
outline: none;
text-decoration: none;
letter-spacing: 0.1rem;
font-weight: 700;
text-shadow: 0 0 1px rgba(255,255,255,0.3);
font-size: 1.5rem;
color: #e50914;
position: relative;
cursor: pointer;
}

a:hover,
a:focus {
outline: none;
}

a::before {
position: absolute;
content: '[';
transform: translateX(-10px);

}

a::after {
position: absolute;
content: ']';
}

a:hover::before,
a:hover::after,
a:focus::before,
a:focus::after {
opacity: 1;
}

a:hover::before,
a:focus::before {
transform: translateX(-30px);
}

a:hover::after,
a:focus::after {
transform: translateX(20px);
}

a::before,
a::after {
color: red;
display: inline-block;
opacity: 0;
transition: transform 0.3s, opacity 0.2s;
}

a::before,
a::after {
@media (max-width: 474px) {
    display: none;
}
}


</style>
