<template>
  <nav
    id="sidenav-main"
    class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-theme"
    background-color="vue"
    short-title="Ejoya"
    title="Ejoya"
  >
    <div class="">
      <button
        type="button"
        data-toggle="collapse"
        aria-label="Toggle navigation"
        class="navbar-toggler"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a href="#/" class="navbar-brand router-link-active"
        ><img src="/img/ejoya/ejoya.svg" alt="..." class="navbar-brand-img"
      /></a>
      <ul class="nav align-items-center d-md-none">
        <li aria-haspopup="true" class="dropdown nav-item dropdown">
          <a
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            class="nav-link nav-link-icon"
            ><i class="ni ni-bell-55"></i
          ></a>
          <ul class="dropdown-menu dropdown-menu-right">
            <a href="#" class="dropdown-item">Action</a
            ><a href="#" class="dropdown-item">Another action</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">Something else here</a>
          </ul>
        </li>
        <li aria-haspopup="true" class="dropdown nav-item dropdown">
          <a href="#" role="button" class="nav-link">
            <div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle"
                ><img
                  alt="Image placeholder"
                  src="img/theme/team-1-800x800.jpg"
              /></span>
            </div>
          </a>
          <ul class="dropdown-menu dropdown-menu-right">
            <div class="dropdown-header noti-title">
              <h6 class="text-overflow m-0">Welcome!</h6>
            </div>
            <a href="#/profile" class="dropdown-item"
              ><i class="ni ni-single-02"></i><span>My profile</span></a
            ><a href="#/profile" class="dropdown-item"
              ><i class="ni ni-settings-gear-65"></i><span>Settings</span></a
            ><a href="#/profile" class="dropdown-item"
              ><i class="ni ni-calendar-grid-58"></i><span>Activity</span></a
            ><a href="#/profile" class="dropdown-item"
              ><i class="ni ni-support-16"></i><span>Support</span></a
            >
            <div class="dropdown-divider"></div>
            <a href="#!" class="dropdown-item"
              ><i class="ni ni-user-run"></i><span>Logout</span></a
            >
          </ul>
        </li>
      </ul>
      <div
        id="sidenav-collapse-main"
        class="navbar-collapse collapse show"
        style="display: none"
      >
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="#/" class="router-link-active"
                ><img src="img/brand/green.png"
              /></a>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                data-toggle="collapse"
                aria-label="Toggle navigation"
                class="navbar-toggler"
              >
                <span></span><span></span>
              </button>
            </div>
          </div>
        </div>
        <ul class="navbar-nav dashboardSidebar">
          <li class="nav-item">
            <router-link to="/app/home" aria-current="page" class="nav-link"
              ><i class="fa fa-home"></i
              ><span class="nav-link-text">Dashboard</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/app/music-monitor" class="nav-link"
              ><i class="fa fa-music"></i
              ><span class="nav-link-text">Music Monitor</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/app/wallet" class="nav-link"
              ><i class="fas fa-wallet"></i
              ><span class="nav-link-text">Wallet</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/app/settings" class="nav-link"
              ><i class="fa fa-cog"></i
              ><span class="nav-link-text">Account Settings</span></router-link
            >
          </li>
        </ul>
        <hr class="my-3" />

        <ul class="navbar-nav mb-md-3">
          <li class="nav-item">
            <a href="#" class="nav-link"
              ><i class="fas fa-sign-out-alt"></i>
              <span class="nav-link-text">Sign out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>