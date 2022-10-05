<template>
<div class="modal" v-show="showModal">
    <!-- mask是我们的制造层 -->
    <div class="mask"></div>
    <!-- modal-dialog 弹框 -->
    <div class="modal-dialog">
        <div class="modal-header">
            <span>标题</span>
            <a href="javascript:;" class="icon-close" ></a>
        </div>
        <div class="modal-body">
            <slot name="body"></slot>
        </div>
        <div class="modal-footer">
            <a href="javascript:;" class="btn" >确定</a>
            <a href="javascript:;" class="btn" >取消</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'modal',
    // props是变量
    props:{
        // 弹框类型：小small、中middle、大large、表单form
        modalType:{ // 文本框类型 这就是我们vue里面的 可以给这个属性的参数来给它指定类型和默认值
            type:String,
            default:'form'
        },
        // 弹框标题
        title: String,
        // 按钮类型: 1:确定按钮 2:取消按钮 3:确定取消
        btnType: String,
        // sureText confirmText都行 起名称看个人喜好
        sureText:{
            type:String,
            default:'确定' 
        },
        cancelText:{
            type:String,
            default:'取消'
        },
        showModal:Boolean
    }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';
</style>
