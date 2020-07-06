<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
        <router-link
                to="/"
                tag="a"
                class="navbar-brand">
            Ürün Listesi
        </router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link
                    to="/urun-girisi"
                    tag="a"
                    class="nav-link">
                        Ürün İşlemleri
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                            to="/urun-cikisi"
                            tag="a"
                            class="nav-link">
                        Ürün Çıkışı
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
    export default {

    }
</script>