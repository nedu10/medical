<template>
  <!-- Topbar -->
  <header
    class="topbar topbar-expand-lg topbar-secondary topbar-inverse bg-info "
  >
    <div class="container">
      <div class="topbar-left">
        <span class="topbar-btn topbar-menu-toggler"><i>&#9776;</i></span>

        <div class="topbar-brand">
          <a href="#"><img src="/assets/img/logo.png" alt="..."/></a>
        </div>

        <div class="topbar-divider d-none d-md-block"></div>

        <nav class="topbar-navigation">
          <ul class="menu">
            <li class="menu-item" :class="$route.name == 'Feeds' && 'active'">
              <router-link class="menu-link" to="/account" tag="a">
                <span class="title">Feeds</span>
              </router-link>
            </li>

            <li
              class="menu-item"
              :class="$route.name == 'Broadcast' && 'active'"
            >
              <router-link class="menu-link" to="/account/broadcast" tag="a">
                <span class="title">Broadcast</span>
              </router-link>
            </li>

            <li class="menu-item" :class="$route.name == 'Members' && 'active'">
              <router-link class="menu-link" to="/account/members" tag="a">
                <span class="title">Members</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="topbar-right">
        <ul class="topbar-btns">
          <li class="dropdown">
            <span class="topbar-btn" data-toggle="dropdown"
              ><img class="avatar" src="/assets/img/avatar/1.jpg" alt="..."
            /></span>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="#"
                ><i class="ti-user"></i> Profile</a
              >
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#"
                ><i class="ti-power-off"></i> Logout</a
              >
            </div>
          </li>

          <li>
            <span
              class="topbar-btn has-new"
              data-toggle="quickview"
              data-target="#qv-notifications"
              ><i class="ti-bell"></i
            ></span>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <!-- END Topbar -->
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style>
.topbar-inverse.topbar-secondary.bg-info .menu > .menu-item:hover,
.topbar-inverse.topbar-secondary.bg-info .menu > .menu-item.active,
.topbar-inverse.topbar-secondary.bg-info .menu-submenu,
.topbar-inverse.topbar-secondary.bg-info .menu-sub-submenu,
.topbar-inverse.topbar-secondary.bg-info .dropdown.show .topbar-btn,
.topbar-inverse.topbar-secondary.bg-info .dropdown:hover .topbar-btn,
.topbar-inverse.topbar-secondary.bg-info .topbar-btn:hover {
  /* background-color: #3a8bc1; */
  background: transparent !important;
  border-bottom: 4px solid white !important;
}
</style>
