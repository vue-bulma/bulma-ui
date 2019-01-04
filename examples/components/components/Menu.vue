<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-menu label="General">
          <vb-menu-item index="1">
            <span>Dashboard</span>
          </vb-menu-item>
          <vb-menu-item index="2">
            <span>Customers</span>
          </vb-menu-item>
        </vb-menu>

        <vb-menu label="Administration">
          <vb-menu-item index="3">
            <span>Team Settings</span>
          </vb-menu-item>
          <vb-menu-item icon="fa fa-image" index="4">
            <span>Manage Your Team</span>
            <vb-menu slot="subMenu">
              <vb-menu-item index="4-1">
                <span>Members</span>
              </vb-menu-item>
              <vb-menu-item index="4-2">
                <span>Plugins</span>
              </vb-menu-item>
              <vb-menu-item index="4-3">
                <span>Add a member</span>
              </vb-menu-item>
            </vb-menu>
          </vb-menu-item>

          <vb-menu-item index="5">
            <span>Invitations</span>
          </vb-menu-item>
          <vb-menu-item index="6">
            <span>Cloud Storage Environment Settings</span>
          </vb-menu-item>
          <vb-menu-item index="7">
            <span>Authentication</span>
          </vb-menu-item>
        </vb-menu>

        <vb-menu label="Transactions">
          <vb-menu-item index="8">
            <span>Payments</span>
          </vb-menu-item>
          <vb-menu-item index="9">
            <span>Transfers</span>
          </vb-menu-item>
          <vb-menu-item index="10">
            <span>Balance</span>
          </vb-menu-item>
        </vb-menu>
        <pre slot="code">{{ basic }}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '../../code/components/menu.js'

export default {
  name: 'MenuExamples',
  data() {
    return {
      basic: code.basic
    }
  }
}
</script>
