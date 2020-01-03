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

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logoContainer {
    display: flex;
    align-items: center;

    img {
        height: 50px;
        width: 50px;
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
