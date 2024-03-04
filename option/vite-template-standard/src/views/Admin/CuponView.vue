<template>
  <div>
    <div class="mb-3">
      <h2>優惠券管理</h2>
      <span>目前共有兩張優惠券</span>
    </div>
    <div>
      <button type="button" class="btn btn-outline-primary mb-3">新增優惠券</button>
    </div>
    <div class="row">
      <div class="list-item-container col-5">
        <ul class="list-group">
          <li class="list-group-item">
            <span class="list-group-icon">
            </span>
            List item
            <span class="arrow">&rsaquo;</span>
          </li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item">
            <span class="list-group-icon">
            </span>
            List item
            <span class="arrow">&rsaquo;</span>
          </li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item">
            <span class="list-group-icon">
            </span>
            List item
            <span class="arrow">&rsaquo;</span>
          </li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item">
            <span class="list-group-icon">
            </span>
            List item
            <span class="arrow">&rsaquo;</span>
          </li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item">
            <span class="list-group-icon">
            </span>
            List item
            <span class="arrow">&rsaquo;</span>
          </li>
        </ul>
      </div>
      <div ref='couponModal' class="col-7">
        <div>
          <div class="mb-3 form-switch">
            <label class="form-check-label me-3" for="test">狀態</label>
            <input class="form-check-input ms-5" type="checkbox" role="switch" id="test">
          </div>
          <div class="mb-3">
            <label for="couponName" class="form-label is-required">優惠券名稱</label>
            <input type="text" class="form-control">
          </div>
          <div class="mb-3">
            <label for="couponName" class="form-label is-required">優惠碼</label>
            <input type="text" class="form-control">
          </div>
          <div class="mb-3">
            <label for="couponName" class="col-3">折扣</label>
            <input type="text" class="form-control">
          </div>
          <div class="mb-3">
            <label for="couponName" class="col-3">有效日期</label>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="d-flex">
          <button type="button" class="btn btn-outline-primary me-2">編輯</button>
          <button type="button" class="btn btn-outline-primary">刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.form-switch{
  padding-left: 0;
}
.list-item-container {
  max-width: 300px;
  /* margin: auto; */
}

.list-group-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.list-group-item .list-group-icon {
  background-color: #e9ecef; /* This is Bootstrap's $gray-200 */
  border-radius: 50%;
  padding: 10px;
  margin-right: 10px;
}

.list-group-item .list-group-icon {
  width: 35px; /* Specify width for the icon */
  height: 35px; /* Specify height for the icon */
  background-color: #e9ecef; /* This is Bootstrap's $gray-200 */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list-group-item .list-group-icon::before {
  content: '15%'; /* FontAwesome check icon - ensure FontAwesome is included if you use this */
  font-family: 'FontAwesome'; /* Specify FontAwesome as the font family */
  font-size: 16px; /* Adjust icon size */
}

.list-group-item .arrow {
  font-size: 1.5em; /* Adjust the size of the arrow */
}
</style>
