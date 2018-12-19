<template>
  <vb-menu>
    <vb-menu-group>
      <vb-menu-item>Dashboard</vb-menu-item>
      <vb-menu-item>Customers</vb-menu-item>
      <vb-menu-group>
        <vb-menu-item>Team Settings</vb-menu-item>
        <vb-menu-item actived>
          <span slot="title">Manage Your Team</span>
          <vb-menu-group>
            <vb-menu-item>Members</vb-menu-item>
            <vb-menu-item>Plugins</vb-menu-item>
            <vb-menu-item>Add a member</vb-menu-item>
          </vb-menu-group>
        </vb-menu-item>
        <vb-menu-item>Invitations</vb-menu-item>
        <vb-menu-item>Cloud Storage Environment Settings</vb-menu-item>
        <vb-menu-item>Authentication</vb-menu-item>
      </vb-menu-group>
    </vb-menu-group>
  </vb-menu>
</template>
