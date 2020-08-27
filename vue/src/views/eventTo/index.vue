<template>


    <div class='EventTo'>
        <p>@click="_click(<span class="red">data</span>, <span class="red">event</span>")</p>
        <button @click="_click(data, $event)">参数+e(BUTTON)</button>
        <el-button @click="_click(data, $event)">参数+e(文本处为SPAN)</el-button>
        <p>------------------------------------------------------------------------------</p>
        <p>事件修饰符5-1：<span class="red">stop</span></p>
        <div class="bor" @click="_defalut(data, $event)">
            <button @click="_stop(data, $event)">不阻止冒泡 + e</button>
            <button @click.stop="_stop(data, $event)">阻止冒泡 + e</button>
        </div>
        <p>------------------------------------------------------------------------------</p>
        <p>事件修饰符5-2：<span class="red">prevent</span></p>
        <p> From 表单 @<span class="red">submit.prevent</span>="_prevent(data, $event)"</p>
        <form @submit.prevent="_prevent(data, $event)">阻止默认prevent</form>
        <p>------------------------------------------------------------------------------</p>
        <p>事件修饰符5-3：<span class="red">self</span>，<span class="red">elButton的文字是span</span>，则<span class="red">不会执行</span>，<span class="red">非文本区域</span>是BUtton才<span class="red">执行</span></p>
        <div class="bor" @click="_defalut(data, $event)">
              <button @click.self="_selfs(data, $event)">自己self</button>
              <el-button @click.self="_selfs(data, $event)">自己self</el-button>
        </div>
        <p>------------------------------------------------------------------------------</p>
        <p>事件修饰符5-3：<span class="red">capture</span>:<span class="red">事件委托</span>内部是<span class="red">stop阻止</span>，<span class="red">没用</span>的</p>
        <div class="bor" @click.capture="_defalut(data, $event)">
            <button @click.stop="_capture(data, $event)">事件委托capture</button>
        </div>

        <p>------------------------------------------------------------------------------</p>
        <p>事件修饰符5-4：once，<span class="red">页面加载</span>后，只能执行一次，组件<span class="red">重新渲染</span>又可以执行一次</p>
        <button @click.once="_once(data, $event)">执行一次once</button>

        <p>------------------------------------------------------------------------------</p>
        <p>键盘响应enter、tab、delete、esc、space、up、down、left、right</p>
        <button @keyup.enter="_enter(data, $event)">先click</button>
        <input @keyup.enter="_enter(data, $event)"/>

        <p>------------------------------------------------------------------------------</p>
        <p>键盘<span class="red">系统修饰符</span>ctrl、alt、shift</p>
        <p>使用<span class="red">.exact精准事件</span>，模糊的不能触发</p>
        <button @keyup.ctrl.67="_clear(data, $event)">先click</button>
        <input @keyup.ctrl.67="_clear(data, $event)" value="ctrl+c或ctrl+alt+c"/>
        <input @keyup.ctrl.67.exact="_clear(data, $event)" value="ctrl+c能，ctrl+alt+c不能"/>

        <p>------------------------------------------------------------------------------</p>
        <p>鼠标事件，left、right</p>
        <p>暂无</p>
    </div>
</template>

<script>
    //import { mapState } from "vuex";
    //import All from "./comLife/All";
    export default {
        components: {
            //       All,
        },
        name: 'EventTo',
        props: {
            //  msg: String
        },
        computed: {
            // ...mapState(["activityData"])
        },
        data() {
            return {
                data:'data值'
            }
        },
        created() {

        },
        methods: {
            //键盘事件
            _enter(data,e) {
                console.info("键盘enter触发-》"+data+"-》"+e.target.tagName);
            },
            _clear(data,e) {
                console.info("键盘ctrl+c触发、ctrl+alt+c也能出发-》"+data+"-》"+e.target.tagName);
            },
            _defalut(data,e) {
                console.info("默认父组件-》"+data+"-》"+e.target.tagName);
            },
            _click(data,e) {
                console.info("参数+e事件-》"+data+"-》"+e.target.tagName);
            },
            _stop(data,e) {
                console.info("阻止冒泡stop-》"+data+"-》"+e.target.tagName);
            },
            _prevent(data,e) {
                console.info("阻止默认prevent-》"+data+"-》"+e.target.tagName);
            },
            _selfs(data,e) {
                console.info("参自己self-》"+data+"-》"+e.target.tagName);
            },
            _capture(data,e) {
                console.info("事件委托capture-》"+data+"-》"+e.target.tagName);
            },

            _once(data,e) {
                console.info("执行一次once-》"+data+"-》"+e.target.tagName);
            },
        }

    }
</script>

<style lang="less" scoped>
    .EventTo {
        .bor{
            border: 1px solid red;
        }
        .red{
            color:red
        }
    }
</style>
