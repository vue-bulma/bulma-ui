<template>
  <div class="sidebar">
    <vb-menu v-for="(item, index) in menus" :key="index" :label="item.name">
      <vb-menu-item v-for="child in item.children" :key="child.name" :to="{ name: child.component || child.name }">
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
          children: [{ name: 'Column' }]
        },
        {
          name: 'Layout',
          children: [
            { name: 'Container' },
            { name: 'Level' },
            { name: 'Media', component: 'MediaObject' },
            { name: 'Hero' },
            { name: 'Section' },
            { name: 'Footer' },
            { name: 'Tile' }
          ]
        },
        {
          name: 'Form',
          children: [
            { name: 'General', component: 'Form' },
            { name: 'Checkbox' },
            { name: 'File' },
            { name: 'Input' },
            { name: 'Radio' },
            { name: 'Select' },
            { name: 'Textarea' }
          ]
        },
        {
          name: 'Elements',
          children: [
            { name: 'Box' },
            { name: 'Button' },
            { name: 'Content' },
            { name: 'Delete' },
            { name: 'Icon' },
            { name: 'Image' },
            { name: 'Notification' },
            { name: 'ProgressBars' },
            { name: 'Table' },
            { name: 'Tag' },
            { name: 'Title' }
          ]
        },
        {
          name: 'Components',
          children: [
            { name: 'Breadcrumb' },
            { name: 'Card' },
            { name: 'Dropdown' },
            { name: 'Menu' },
            { name: 'Message' },
            { name: 'Modal' },
            { name: 'Navbar' },
            { name: 'Pagination' },
            { name: 'Panel' },
            { name: 'Tabs' }
          ]
        }
      ]
    }
  }
}
</script>
