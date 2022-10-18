<template>
    <div class="loading">
        <!-- 为什么这里用/imgs/呢？要用/ 因为public是我们的根目录 用/即可访问 -->
        <!-- svg是矢量图 它不会随着分辨率的大小 变大/缩小 而失真 -->
        <img src="/imgs/loading-svg/loading-bars.svg" alt="">
    </div>
</template>

<script>
export default {
    name:'loading' // 哪怕你不用它也最好起一个名字
}
</script>

<style lang="scss">
    .loading{
        height: 80px;
        line-height: 80px;
        text-align: center;
        padding:30px 0; /*上下30px 左右是0*/
        img{
            height: 100%;
        }
    }
</style>