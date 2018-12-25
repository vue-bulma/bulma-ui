<template>
  <vb-box>
    <vb-menu label="General">
      <vb-menu-item>
        <span>Dashboard</span>
      </vb-menu-item>
      <vb-menu-item>
        <span>Customers</span>
      </vb-menu-item>
    </vb-menu>

    <vb-menu label="Administration">
      <vb-menu-item>
        <span>Team Settings</span>
      </vb-menu-item>
      <vb-menu-item icon="fa fa-image" actived>
        <span>Manage Your Team</span>
        <vb-menu slot="sub">
          <vb-menu-item>
            <span>Members</span>
          </vb-menu-item>
          <vb-menu-item>
            <span>Plugins</span>
          </vb-menu-item>
          <vb-menu-item>
            <span>Add a member</span>
          </vb-menu-item>
        </vb-menu>
      </vb-menu-item>

      <vb-menu-item>
        <span>Invitations</span>
      </vb-menu-item>
      <vb-menu-item>
        <span>Cloud Storage Environment Settings</span>
      </vb-menu-item>
      <vb-menu-item>
        <span>Authentication</span>
      </vb-menu-item>
    </vb-menu>

    <vb-menu label="Transactions">
      <vb-menu-item>
        <span>Payments</span>
      </vb-menu-item>
      <vb-menu-item>
        <span>Transfers</span>
      </vb-menu-item>
      <vb-menu-item>
        <span>Balance</span>
      </vb-menu-item>
    </vb-menu>
  </vb-box>
</template>

<style scoped>
.box {
  width: 40%;
}
</style>
