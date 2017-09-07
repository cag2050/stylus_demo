<template lang='pug'>
<div>
    <div>为每个li设置不同的样式(数组中包含对象)</div>
    <ul class='iterator3'>
      <li>li1</li>
      <li>li2</li>
      <li>li3</li>
      <li>li4</li>
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
items = ({'left':10px,'top':10px}) ({'left':20px,'top':20px}) ({'left':30px,'top':30px}) ({'left':40px,'top':40px})

ul.iterator3
    for item, index in items
        li:nth-child({index+1})
            for name, value in item
                {name} value
</style>
