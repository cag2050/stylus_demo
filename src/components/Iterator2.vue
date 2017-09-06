<template lang='pug'>
<div>
    <div>为每个li设置不同的颜色、字体大小</div>
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
color(args)
    color args
fontSize(args)
    font-size args

$colors= red blue orange yellow
$fonts= 20px 30px 40px 20px
$li_length = 3

ul.iterator3
    for index in (0..$li_length)
        li:nth-child({index+1})
            color($colors[index])
            fontSize($fonts[index])
</style>
