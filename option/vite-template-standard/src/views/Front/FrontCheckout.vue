<template>
  <div class="container px-5">
    <h2 class="my-4 text-primary border-primary-left ps-3">訂單進度</h2>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <nav class="navbar navbar-expand-lg navbar-light px-0">
          <a class="navbar-brand" href="./index.html">Navbar</a>
          <ul
            class="list-unstyled mb-0 ms-md-auto d-flex align-items-center justify-content-between justify-content-md-end w-100 mt-md-0 mt-4"
          >
            <li class="me-md-6 me-3 position-relative custom-step-line">
              <i
                class="fas fa-check-circle d-md-inline d-block text-center"
              ></i>
              <span class="text-nowrap">商品確認</span>
            </li>
            <li class="me-md-6 me-3 position-relative custom-step-line">
              <i
                class="fas fa-check-circle d-md-inline d-block text-center"
              ></i>
              <span class="text-nowrap">訂購人填寫</span>
            </li>
            <li>
              <i class="fas fa-dot-circle d-md-inline d-block text-center"></i>
              <span class="text-nowrap">訂單確認</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <h3 class="fw-bold mb-4 pt-3">訂購人資訊</h3>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <div class="col-md-4">
        <div class="border p-4 mb-4">
          <div class="d-flex">
            <img
              src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
              alt=""
              class="me-2"
              style="width: 48px; height: 48px; object-fit: cover"
            />
            <div class="w-100">
              <div class="d-flex justify-content-between">
                <p class="mb-0 fw-bold">Lorem ipsum</p>
                <p class="mb-0">NT$12,000</p>
              </div>
              <p class="mb-0 fw-bold">x1</p>
            </div>
          </div>
          <div class="d-flex mt-2">
            <img
              src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
              alt=""
              class="me-2"
              style="width: 48px; height: 48px; object-fit: cover"
            />
            <div class="w-100">
              <div class="d-flex justify-content-between">
                <p class="mb-0 fw-bold">Lorem ipsum</p>
                <p class="mb-0">NT$12,000</p>
              </div>
              <p class="mb-0 fw-bold">x1</p>
            </div>
          </div>
          <table class="table mt-4 border-top border-bottom text-muted">
            <tbody>
              <tr>
                <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">
                  小計
                </th>
                <td class="text-end border-0 px-0 pt-4">NT$24,000</td>
              </tr>
              <tr>
                  <th
                    scope="row"
                    class="border-0 px-0 pt-0 pb-4 font-weight-normal"
                  >
                    優惠券折扣
                  </th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">－NT$</td>
                </tr>
              <tr>
                <th
                  scope="row"
                  class="border-0 px-0 pt-0 pb-4 font-weight-normal"
                >
                支付方式
                </th>
                <td class="text-end border-0 px-0 pt-0 pb-4">本店目前只提供自取或貨到付款
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">總金額</p>
            <p class="mb-0 h4 fw-bold">NT$24,000</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <form>
          <p>聯絡人資訊</p>
          <div class="mb-0">
            <label for="ContactMail" class="text-muted mb-0">信箱</label>
            <input
              type="email"
              class="form-control"
              id="ContactMail"
              aria-describedby="emailHelp"
              placeholder="example@gmail.com"
            />
          </div>
          <p class="mt-4">收貨地址</p>
          <div class="mb-2">
            <label for="ContactName" class="text-muted mb-0">收貨人姓名</label>
            <input
              type="text"
              class="form-control"
              id="ContactName"
              placeholder="Carmen A. Rose"
            />
          </div>
          <div class="mb-2">
            <label for="ContactPhone" class="text-muted mb-0">聯絡電話</label>
            <input
              type="text"
              class="form-control"
              id="ContactPhone"
              placeholder="Password"
            />
          </div>
          <div class="mb-2">
            <label for="ContactMessage" class="text-muted mb-0">備註</label>
            <textarea
              class="form-control"
              rows="3"
              id="ContactMessage"
              placeholder="message ... "
            ></textarea>
          </div>
        </form>
        <div class="accordion" id="accordionExample">
          <div class="card rounded-0">
            <div
              class="card-header bg-white border-0 py-3"
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p class="mb-0 position-relative custom-checkout-label">
                自取
              </p>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body bg-light ps-5 py-4">
                <div class="mb-2">
                  <label for="Lorem ipsum1" class="text-muted mb-0"
                    >12：00前</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="Lorem ipsum1"
                    placeholder="Lorem ipsum"
                  />
                </div>
                <div class="mb-0">
                  <label for="Lorem ipsum2" class="text-muted mb-0"
                    >20：00 店面結束前</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="Lorem ipsum2"
                    placeholder="Lorem ipsum"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="card rounded-0">
            <div
              class="card-header bg-white border-0 py-3 collapsed"
              id="headingTwo"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <p class="mb-0 position-relative custom-checkout-label">
                宅配
              </p>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body bg-light ps-5 py-4">
                <div class="mb-2">
                  <label for="Lorem ipsum1" class="text-muted mb-0"
                    >Lorem ipsum</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="Lorem ipsum1"
                    placeholder="Lorem ipsum"
                  />
                </div>
                <div class="mb-0">
                  <label for="Lorem ipsum2" class="text-muted mb-0"
                    >Lorem ipsum</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="Lorem ipsum2"
                    placeholder="Lorem ipsum"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="card rounded-0">
            <div
              class="card-header bg-white border-0 py-3 collapsed"
              id="headingThree"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              <p class="mb-0 position-relative custom-checkout-label">
                Lorem ipsum
              </p>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body bg-light ps-5 py-4">
                <div class="mb-2">
                  <label for="Lorem ipsum1" class="text-muted mb-0"
                    >Lorem ipsum</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="Lorem ipsum1"
                    placeholder="Lorem ipsum"
                  />
                </div>
                <div class="mb-0">
                  <label for="Lorem ipsum2" class="text-muted mb-0"
                    >Lorem ipsum</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="Lorem ipsum2"
                    placeholder="Lorem ipsum"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100"
        >
          <router-link
            class="text-dark mt-md-0 mt-3"
            to="/cart"
            ><i class="fas fa-chevron-left me-2"></i>返回購物車</router-link
          >
          <router-link
            class="text-muted btn btn-secondary py-3 px-7"
            to="/checkOrder"
            >確認結帳</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
