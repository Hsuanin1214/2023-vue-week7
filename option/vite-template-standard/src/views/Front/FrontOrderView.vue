<template>
  <div class="container px-5">
    <h2 class="my-4 text-primary border-primary-left ps-3">訂單進度</h2>
    <div class="row justify-content-center pb-5">
      <h3 class="fw-bold mb-4 pt-3">訂單進度查詢</h3>
      <div class="col-12">
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
              <nav class="navbar navbar-expand-lg navbar-light px-0">
                <ul
                  class="list-unstyled mb-0 ms-md-auto d-flex align-items-center justify-content-between justify-content-md-end w-100 mt-md-0 mt-4"
                >
                  <li class="me-md-6 me-3 position-relative custom-step-line">
                    <i
                      class="fas fa-check-circle d-md-inline d-block text-center"
                    ></i>
                    <span class="text-nowrap">Lorem ipsum</span>
                  </li>
                  <li class="me-md-6 me-3 position-relative custom-step-line">
                    <i
                      class="fas fa-check-circle d-md-inline d-block text-center"
                    ></i>
                    <span class="text-nowrap">Lorem ipsum</span>
                  </li>
                  <li>
                    <i
                      class="fas fa-dot-circle d-md-inline d-block text-center"
                    ></i>
                    <span class="text-nowrap">Lorem ipsum</span>
                  </li>
                </ul>
              </nav>
              <p class="mb-0 position-relative custom-checkout-label">
                Lorem ipsum
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
          <!-- <div class="card rounded-0">
            <div
              class="card-header bg-white border-0 py-3 collapsed"
              id="headingTwo"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <p class="mb-0 position-relative custom-checkout-label">
                Lorem ipsum
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
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
