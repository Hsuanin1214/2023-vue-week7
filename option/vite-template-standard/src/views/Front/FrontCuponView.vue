<template>
  <div class="container px-5">
    <h2 class="my-4 text-primary border-primary-left ps-3">優惠券列表</h2>
    <div class="row">
      <div>
        <span>目前共有兩張優惠券</span>
      </div>
      <div class="box d-flex">
        <div class="coupon">
          <div>
            <p>10% 優惠券</p>
            <p>到期日 : 2025/10/15</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.box{
  position: relative;
}
.coupon{
    width: 400px;
    height: 120px;
    margin: 40px auto;
    color: #fff;
    position: relative;
    background-color: transparent;
    background-image:
    radial-gradient(circle at 2px 8px, transparent 4px, #fff 4px, #ACC 0px),radial-gradient(circle at 82px 8px, transparent 4px, #fff 4px, #acc 0px);
    background-size: 316px 20px;
    background-repeat: no-repeat repeat;
    background-position: 0px 2px,316px 2px;
}
.coupon p{
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translate(0,-50%);
}
.coupon::before{
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    left: 60%;
    top: 0;
    border-left: 2px dotted #fff;
}
.coupon::after{
  content: "立 即 领 取";
  font-size: 16px;
  display: block;
  width: 50px;
  position: absolute;
  top: 50%;
  right: 4rem;
  transform: translate(-50%,-50%);
  text-align: center;
  white-space: pre-line;
}
</style>
