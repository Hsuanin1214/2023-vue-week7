<template>
    <div class="container h-100 top-0 left-0">
        <nav class="navbar navbar-expand-lg navbar-light flex-column me-3 ms-3">
            <!-- <nav> -->
            <RouterLink class="navbar-brand text-light fs-2 fw-bolder" to="/">嗜甜甜點</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav d-flex flex-column">
                <RouterLink class="nav-item nav-link me-4 text-warning" to="/about">關於嗜甜</RouterLink>
                <RouterLink class="nav-item nav-link me-4 active text-warning" to="/products">甜點列表</RouterLink>
                <RouterLink class="nav-item nav-link me-4 active text-warning" to="/news">最新消息</RouterLink>
                <RouterLink class="nav-item nav-link me-4 active text-warning" to="/questions">問題參考</RouterLink>
                <RouterLink class="nav-item nav-link me-4 active text-warning" to="/cart">我的購物</RouterLink>
                <RouterLink class="nav-item nav-link me-4 active text-warning" to="/orders">訂單進度</RouterLink>
                <RouterLink class="nav-item nav-link me-4 text-warning" to="/login">前往後台</RouterLink>
                <!-- <RouterLink class="nav-item nav-link" href="./cart.html"><i class="fas fa-shopping-cart"></i></RouterLink> -->
            </div>
            </div>
        </nav>
    </div>
</template>
