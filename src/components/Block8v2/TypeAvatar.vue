<template>
    <div class="avatar">
         <img :src="$attrs.value">
    </div>
</template>
<style leng="scss" scoped>
img {
    width: 230px;
    height: 230px;
    object-fit: cover;
    border-radius: 50%;
}
.avatar {
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
}
</style>