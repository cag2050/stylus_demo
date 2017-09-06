<template lang='pug'>
<div>
    <div>为每个li指定背景颜色</div>
    <ul>
      <li class='li1'>li1</li>
      <li class='li2'>li2</li>
      <li class='li3'>li3</li>
      <li class='li4'>li4</li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {

        }
    }
}
</script>

<style lang='stylus'>
colors = {
  '1': #3b5999,
  '2': #55acee,
  '3': #0077B5,
  '4': #dd4b39
}

for no, color in colors
  li:nth-child({no})
    background-color: color
</style>
