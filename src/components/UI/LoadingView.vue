<template>
    <div class="loading">
        <div class="loadingspinner"></div>
    </div>
</template>
<style lang="scss" scoped>
.loadingspinner {
    margin-top: 75px;
    margin-left: auto;
    margin-right: auto;

}
.loadingspinner {
	pointer-events: none;
	width: 90px;
	height: 90px;
	border: 0.4em solid transparent;
	border-color: #eee;
	border-top-color: #3E67EC;
	border-radius: 50%;
	animation: loadingspin 1s linear infinite;
}

@keyframes loadingspin {
	100% {
			transform: rotate(360deg)
	}
}
</style>