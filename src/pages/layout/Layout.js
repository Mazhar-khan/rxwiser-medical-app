export default function Layout() {
  return <>
    <>
  {/* ===============================================*/}
  <main className="main" id="top">
    <nav className="navbar navbar-vertical navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
        <div className="navbar-vertical-content">
          <ul className="navbar-nav flex-column" id="navbarVerticalNav">
            <li className="nav-item">
              <div className="nav-item-wrapper">
                <a
                  className="nav-link active label-1"
                  href="index.html"
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather="calendar" />
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">Calendar</span>
                    </span>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item">
              {/* parent pages*/}
              <div className="nav-item-wrapper">
                <a
                  className="nav-link dropdown-indicator label-1"
                  href="#nv-home"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="nv-home"
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon" />
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather="users" />
                    </span>
                    <span className="nav-link-text">People</span>
                    <span
                      className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                      style={{ fontSize: 6 }}
                    />
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent show"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="nv-home"
                  >
                    <li className="collapsed-nav-item-title d-none">People</li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Add</span>
                        </div>
                      </a>
                    </li>
                    {/* Modal */}
                    <li className="nav-item">
                      <a className="nav-link" href="client.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Clients</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="shared.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Shared</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Contact</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="referrers.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Referrers</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="third-party.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Third Parties</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Waitlist</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item">
              {/* label*/}
              {/* <p class="navbar-vertical-label">
        </p> */}
              <hr className="navbar-vertical-line" />
              {/* parent pages*/}
              {/* parent pages*/}
              <div className="nav-item-wrapper">
                <a
                  className="nav-link dropdown-indicator label-1"
                  href="#nv-icons"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="nv-icons"
                >
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon" />
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather="settings" />
                    </span>
                    <span className="nav-link-text">Settings</span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul
                    className="nav collapse parent"
                    data-bs-parent="#navbarVerticalCollapse"
                    id="nv-icons"
                  >
                    <li className="collapsed-nav-item-title d-none">
                      Settings
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="business_info.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
                            Business Information
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="practise_location.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Locations</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="user_management.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">User Management</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="select_practitioners.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Practitioners</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="payment_received.html">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">Payment</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* parent pages*/}
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-vertical-footer">
        <button className="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center">
          <span className="uil uil-left-arrow-to-left fs-8" />
          <span className="uil uil-arrow-from-right fs-8" />
          <span className="navbar-vertical-footer-text ms-2">
            Collapsed View
          </span>
        </button>
      </div>
    </nav>
    {/* Header nav ===============================================*/}
    <nav
      className="navbar navbar-top fixed-top navbar-expand"
      id="navbarDefault"
    >
      <div className="collapse navbar-collapse justify-content-between">
        <div className="navbar-logo">
          <button
            className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarVerticalCollapse"
            aria-controls="navbarVerticalCollapse"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggle-icon">
              <span className="toggle-line" />
            </span>
          </button>
          <a className="navbar-brand me-1 me-sm-3" href="index.html">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <h5 className="logo-text ms-2 d-none d-sm-block fa-9">
                  Medical App
                </h5>
              </div>
            </div>
          </a>
        </div>
        <div
          className="search-box navbar-top-search-box d-none d-lg-block"
          data-list='{"valueNames":["title"]}'
          style={{ width: "25rem" }}
        >
          <form
            className="position-relative"
            data-bs-toggle="search"
            data-bs-display="static"
          >
            <input
              className="form-control search-input fuzzy-search rounded-pill form-control-sm"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <span className="fas fa-search search-box-icon" />
          </form>
          <div
            className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none"
            data-bs-dismiss="search"
          >
            <button className="btn btn-link p-0" aria-label="Close" />
          </div>
        </div>
        <ul className="navbar-nav navbar-nav-icons flex-row">
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="#"
              style={{ minWidth: "2.25rem" }}
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <span className="d-block" style={{ height: 20, width: 20 }}>
                <span data-feather="bell" style={{ height: 20, width: 20 }} />
              </span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret"
              id="navbarDropdownNotfication"
              aria-labelledby="navbarDropdownNotfication"
            >
              <div className="card position-relative border-0">
                <div className="card-header p-2">
                  <div className="d-flex justify-content-between">
                    <h5 className="text-body-emphasis mb-0">Notifications</h5>
                    <button
                      className="btn btn-link p-0 fs-9 fw-normal"
                      type="button"
                    >
                      Mark all as read
                    </button>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div
                    className="scrollbar-overlay"
                    style={{ height: "27rem" }}
                  >
                    <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                      <div className="d-flex align-items-center justify-content-between position-relative">
                        <div className="d-flex">
                          <div className="avatar avatar-m status-online me-3">
                            <img
                              className="rounded-circle"
                              src="assets/img/team/40x40/30.webp"
                              alt=""
                            />
                          </div>
                          <div className="flex-1 me-sm-3">
                            <h4 className="fs-9 text-body-emphasis">
                              Jessie Samson
                            </h4>
                            <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                              <span className="me-1 fs-10">💬</span>Mentioned
                              you in a comment.
                              <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                                10m
                              </span>
                            </p>
                            <p className="text-body-secondary fs-9 mb-0">
                              <span className="me-1 fas fa-clock" />
                              <span className="fw-bold">10:41 AM </span>August
                              7,2021
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-0 border-top border-translucent border-0">
                  <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85">
                    <a className="fw-bolder" href="pages/notifications.html">
                      Notification history
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link lh-1 pe-0"
              id="navbarDropdownUser"
              href="#!"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="avatar avatar-l ">
                <img
                  className="rounded-circle "
                  src="assets/img/team/40x40/57.webp"
                  alt=""
                />
              </div>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border"
              aria-labelledby="navbarDropdownUser"
            >
              <div className="card position-relative border-0">
                <div className="card-body p-0">
                  <div className="text-center pt-4 pb-3">
                    <div className="avatar avatar-xl ">
                      <img
                        className="rounded-circle "
                        src="assets/img/team/72x72/57.webp"
                        alt=""
                      />
                    </div>
                    <h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
                  </div>
                  <div className="mb-3 mx-3">
                    <input
                      className="form-control form-control-sm"
                      id="statusUpdateInput"
                      type="text"
                      placeholder="Update your status"
                    />
                  </div>
                </div>
                <div
                  className="overflow-auto scrollbar"
                  style={{ height: "10rem" }}
                >
                  <ul className="nav d-flex flex-column mb-2 pb-1">
                    <li className="nav-item">
                      <a className="nav-link px-3 d-block" href="#!">
                        {" "}
                        <span
                          className="me-2 text-body align-bottom"
                          data-feather="user"
                        />
                        <span>Profile</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-3 d-block" href="#!">
                        <span
                          className="me-2 text-body align-bottom"
                          data-feather="pie-chart"
                        />
                        Dashboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-3 d-block" href="#!">
                        {" "}
                        <span
                          className="me-2 text-body align-bottom"
                          data-feather="lock"
                        />
                        Posts &amp; Activity
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-3 d-block" href="#!">
                        {" "}
                        <span
                          className="me-2 text-body align-bottom"
                          data-feather="settings"
                        />
                        Settings &amp; Privacy{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-3 d-block" href="#!">
                        {" "}
                        <span
                          className="me-2 text-body align-bottom"
                          data-feather="help-circle"
                        />
                        Help Center
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-3 d-block" href="#!">
                        {" "}
                        <span
                          className="me-2 text-body align-bottom"
                          data-feather="globe"
                        />
                        Language
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-footer p-0 border-top border-translucent">
                  <ul className="nav d-flex flex-column my-3">
                    <li className="nav-item">
                      <a className="nav-link px-3 d-block" href="#!">
                        {" "}
                        <span
                          className="me-2 text-body align-bottom"
                          data-feather="user-plus"
                        />
                        Add another account
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <div className="px-3">
                    {" "}
                    <a
                      className="btn btn-phoenix-secondary d-flex flex-center w-100"
                      href="#!"
                    >
                      {" "}
                      <span className="me-2" data-feather="log-out">
                        {" "}
                      </span>
                      Sign out
                    </a>
                  </div>
                  <div className="my-2 text-center fw-bold fs-10 text-body-quaternary">
                    <a className="text-body-quaternary me-1" href="#!">
                      Privacy policy
                    </a>
                    •
                    <a className="text-body-quaternary mx-1" href="#!">
                      Terms
                    </a>
                    •
                    <a className="text-body-quaternary ms-1" href="#!">
                      Cookies
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div className="content">
      <div id="calendar" />
      <footer className="footer position-absolute">
        <div className="row g-0 justify-content-between align-items-center h-100">
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 mt-2 mt-sm-0 text-body">
              Thank you for creating with Phoenix
              <span className="d-none d-sm-inline-block" />
              <span className="d-none d-sm-inline-block mx-1">|</span>
              <br className="d-sm-none" />
              2024 ©
              <a className="mx-1" href="https://themewagon.com">
                Themewagon
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 text-body-tertiary text-opacity-85">v1.18.0</p>
          </div>
        </div>
      </footer>
    </div>
  </main>
  {/* ===============================================*/}
  {/*    End of Main Content*/}
  {/* ===============================================*/}
  {/*------ Modals Add li top ------- */}
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-hidden="true"
  >
    <div
      className="modal-dialog modal-dialog-centered"
      style={{ maxWidth: 600, width: "100%" }}
    >
      <div className="modal-content bg-body-highlight">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Add New
          </h5>
          <button
            className="btn btn-close p-1"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div
          className="modal-body"
          style={{ padding: "16px !important", backgroundColor: "#fff" }}
        >
          <div className="row">
            <div className="col-md-4">
              <h5 className="modal-title md-top" id="exampleModalLabel">
                Profile Type
              </h5>
            </div>
            <div className="col-md-8">
              <div className="row">
                {/* Client Switch */}
                <div className="col-md-4 col-6 mt10">
                  <div className="form-group">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="switchClient"
                        defaultChecked=""
                      />
                      <label
                        className="d-inline ml10 form-control-label form-check-label"
                        htmlFor="switchClient"
                      >
                        <span style={{ fontSize: 14 }}>Client</span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* Shared Switch */}
                <div className="col-md-4 col-6 mt10">
                  <div className="form-group">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="switchShared"
                      />
                      <label
                        className="d-inline ml10 form-control-label form-check-label"
                        htmlFor="switchShared"
                      >
                        <span style={{ fontSize: 14 }}>Shared</span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* Contact Switch */}
                <div className="col-md-4 col-6 mt10">
                  <div className="form-group">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="switchContact"
                      />
                      <label
                        className="d-inline ml10 form-control-label form-check-label"
                        htmlFor="switchContact"
                      >
                        <span style={{ fontSize: 14 }}>Contact</span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* Referrer Switch */}
                <div className="col-md-4 col-6 mt10">
                  <div className="form-group">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="switchReferrer"
                      />
                      <label
                        className="d-inline ml10 form-control-label form-check-label"
                        htmlFor="switchReferrer"
                      >
                        <span style={{ fontSize: 14 }}>Referrer</span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* Third Party Switch */}
                <div className="col-md-4 col-6 mt10">
                  <div className="form-group">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="switchThirdParty"
                      />
                      <label
                        className="d-inline ml10 form-control-label form-check-label"
                        htmlFor="switchThirdParty"
                      >
                        <span style={{ fontSize: 14 }}>Third Party</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center g-3 mt-2">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <label className="lb">Name</label>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-8">
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <input
                className="form-control"
                type="text"
                placeholder="Middle"
              />
            </div>
          </div>
          <div className="row align-items-center g-3 mt-1">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <label className="lb">Last Name</label>
            </div>
            <div className="col-lg-8 col-md-4 col-sm-8">
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="row align-items-center g-3 mt-1">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <label className="lb">Mobile Number</label>
            </div>
            <div className="col-lg-8 col-md-4 col-sm-8">
              <input
                className="form-control"
                type="number"
                placeholder="Mobile Number"
              />
            </div>
          </div>
          <div className="row align-items-center g-3 mt-1">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <label className="lb">Email</label>
            </div>
            <div className="col-lg-8 col-md-4 col-sm-8">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row align-items-center g-3 mt-1">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <label className="lb">Primary practitioner</label>
            </div>
            <div className="col-lg-8 col-md-4 col-sm-8">
              <select
                className="form-select"
                aria-label="Default select example"
                style={{ fontSize: 12, color: "#707f94" }}
              >
                <option selected="selected" value="">
                  Select option{" "}
                </option>
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
              </select>
            </div>
          </div>
        </div>
        <div className="border-wrapper" style={{ backgroundColor: "#fff" }}>
          <div className="modal-footer">
            <button
              id="savenewclient"
              className="btn btn-success shadow validate-form save"
              type="button"
            >
              <i className="fa fa-check" /> Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ===============================================*/}
  {/*    JavaScripts*/}
  {/* ===============================================*/}
  {/* document.addEventListener('DOMContentLoaded', function () {
const calendarEl = document.getElementById('calendar');

const calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'timeGridDay',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'timeGridDay,timeGridWeek,dayGridMonth',
  },
  slotMinTime: '08:00:00',
  slotMaxTime: '18:00:00',
  allDaySlot: false,
  editable: true,
  selectable: true,
  events: [
    {
      title: 'Cillian Martin 📞',
      start: '2024-11-28T11:00:00',
      end: '2024-11-28T11:30:00',
      color: '#81d4fa',
    },
    {
      title: 'Abigail Sadler',
      start: '2024-11-28T12:00:00',
      end: '2024-11-28T12:30:00',
      color: '#ffd54f',
    },
    {
      title: 'Jack Doyle',
      start: '2024-11-28T16:00:00',
      end: '2024-11-28T16:30:00',
      color: '#aed581',
    },
  ],
});

calendar.render();
    }); */}
</>

  </>;
}
