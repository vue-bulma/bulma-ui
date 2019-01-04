<template>
  <div class="sidebar">
    <vb-menu v-for="(item, index) in menus" :key="index" :label="item.name">
      <vb-menu-item
        v-for="child in item.children"
        :key="child.name"
        :to="{ name: child.component || child.name }"
        :index="child.index"
      >
        <span>{{child.name}}</span>
      </vb-menu-item>
    </vb-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: 'Columns',
          children: [{ name: 'Column', index: 1 }]
        },
        {
          name: 'Layout',
          children: [
            { name: 'Container', index: 2 },
            { name: 'Level', index: 3 },
            { name: 'Media', component: 'MediaObject', index: 4 },
            { name: 'Hero', index: 5 },
            { name: 'Section', index: 6 },
            { name: 'Footer', index: 7 },
            { name: 'Tile', index: 8 }
          ]
        },
        {
          name: 'Form',
          children: [
            { name: 'General', component: 'Form', index: 9 },
            { name: 'Checkbox', index: 10 },
            { name: 'File', index: 11 },
            { name: 'Input', index: 12 },
            { name: 'Radio', index: 13 },
            { name: 'Select', index: 14 },
            { name: 'Textarea', index: 15 }
          ]
        },
        {
          name: 'Elements',
          children: [
            { name: 'Box', index: 16 },
            { name: 'Button', index: 17 },
            { name: 'Content', index: 18 },
            { name: 'Delete', index: 19 },
            { name: 'Icon', index: 20 },
            { name: 'Image', index: 21 },
            { name: 'Notification', index: 22 },
            { name: 'ProgressBars', index: 23 },
            { name: 'Table', index: 24 },
            { name: 'Tag', index: 25 },
            { name: 'Title', index: 26 }
          ]
        },
        {
          name: 'Components',
          children: [
            { name: 'Breadcrumb', index: 27 },
            { name: 'Card', index: 28 },
            { name: 'Dropdown', index: 29 },
            { name: 'Menu', index: 30 },
            { name: 'Message', index: 31 },
            { name: 'Modal', index: 32 },
            { name: 'Navbar', index: 33 },
            { name: 'Pagination', index: 34 },
            { name: 'Panel', index: 35 },
            { name: 'Tabs', index: 36 }
          ]
        }
      ]
    }
  }
}
</script>
