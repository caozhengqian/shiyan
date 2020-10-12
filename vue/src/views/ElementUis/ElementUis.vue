<template>
    <div class='ElementUis'>
        <div class="title" @click="_click(-1)">Data</div>
        <el-row >
            <el-col :span="2" class="bottom"><el-tag class="tag"  @click="_click(0)"  type="danger">Table 表格</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(4)" type="danger">Pagination 分页</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(3)" type="warning">Tree 树形控件</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(1)" type="warning">Tag 标签</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(2)" type="warning" >Progress 进度条</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(5)" type="info">Badge 标记</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(6)" type="info">Avatar 头像</el-tag></el-col>
        </el-row>
        <div class="comptents">
            <Etable v-if="index == 0"/>
            <Etag v-else-if="index == 1"/>
            <Eprogress v-else-if="index == 2"/>
            <Etree v-else-if="index == 3"/>
            <Epagination v-else-if="index == 4"/>
            <Ebadge v-else-if="index == 5"/>
            <Eavatar v-else-if="index == 6"/>
            <div v-else></div>
        </div>
        <div class="title">From</div>
        <el-row >
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Radio')"  type="danger">Radio 单选框</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Checkbox')" type="danger">Checkbox 多选框</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Input')" type="danger">Input 输入框</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('TimePicker')" type="danger">TimePicker 时间选择器</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('DatePicker')" type="danger">DatePicker 日期选择器</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('DateTimePicker')" type="danger">DateTimePicker 日期时间选择器</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Select')" type="danger">Select 选择器</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Upload')" type="danger">Upload 上传</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Form')" type="danger">Form 表单</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Cascader')" type="warning">Cascader 级联选择器</el-tag></el-col>

            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Slider')" type="warning">Slider 滑块</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('InputNumber')" type="warning">InputNumber 计数器</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Switch')" type="warning">Switch 开关</el-tag></el-col>

            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Rate')" type="info">Rate 评分</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('ColorPicker')" type="info">ColorPicker 颜色选择器</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Transfer')" type="info">Transfer 穿梭框</el-tag></el-col>
        </el-row>
        <div class="comptents">
            <Echeckbox v-if="index == 'Checkbox'"/>
            <EcolorPicker v-else-if="index == 'ColorPicker'"/>
            <EdatePicker v-else-if="index == 'DatePicker'"/>
            <EdateTimePicker v-else-if="index == 'DateTimePicker'"/>
            <Efrom v-else-if="index == 'Form'"/>
            <Einput v-else-if="index == 'Input'"/>
            <EinputNumber v-else-if="index == 'InputNumber'"/>
            <Eradio v-else-if="index == 'Radio'"/>
            <Erate v-else-if="index == 'Rate'"/>
            <Eselect v-else-if="index == 'Select'"/>
            <Eslider v-else-if="index == 'Slider'"/>
            <Eswitch v-else-if="index == 'Switch'"/>
            <EtimePicker v-else-if="index == 'TimePicker'"/>
            <Etransfer v-else-if="index == 'Transfer'"/>
            <Eupload v-else-if="index == 'Upload'"/>
            <Ecascader v-else-if="index == 'Cascader'"/>
            <div v-else></div>
        </div>
        <div class="title">Notice</div>
        <el-row >
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click(8)" type="danger">Loading 加载</el-tag></el-col>

            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click(7)" type="info">Alert 警告</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click(9)" type="info">Message 消息提示</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click(10)" type="info">MessageBox 弹框</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click(11)" type="info">Notification 通知</el-tag></el-col>
        </el-row>
        <div class="title">Navigation</div>
        <el-row >
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click(7)" type="danger">NavMenu 导航菜单</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click(8)" type="danger">Tabs 标签页</el-tag></el-col>

            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click(7)" type="warning">Steps 步骤条</el-tag></el-col>

            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click(9)" type="info">Breadcrumb 面包屑</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click(10)" type="info">PageHeader 页头</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click(11)" type="info">Dropdown 下拉菜单</el-tag></el-col>
        </el-row>
        <div class="title">Others</div>
        <el-row >
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(7)" type="danger">Dialog 对话框</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(8)" type="danger">Tooltip 文字提示</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(9)" type="danger">Popover 弹出框</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(7)" type="danger">Carousel 走马灯</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(7)" type="danger">Image 图片</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(9)" type="danger">Timeline 时间线</el-tag></el-col>

            <el-col :span="3" class="bottom"><el-tag class="tag" @click="_click(10)" type="warning">Popconfirm 气泡确认框</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(8)" type="warning">Collapse 折叠面板</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(8)" type="warning">Backtop 回到顶部</el-tag></el-col>

            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(10)" type="info">Divider 分割线</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(11)" type="info">Calendar 日历</el-tag></el-col>
            <el-col :span="3" class="bottom"><el-tag class="tag" @click="_click(9)" type="info">InfiniteScroll 无限滚动</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(10)" type="info">Drawer 抽屉</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(11)" type="info">Card 卡片</el-tag></el-col>
        </el-row>
        <div class="title">Basic</div>
        <el-row >
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(7)" type="danger">Layout 布局</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(8)" type="danger">Container 布局容器</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(8)" type="danger">Button 按钮</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(7)" type="danger">Icon 图标</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(9)" type="info">Link 文字链接</el-tag></el-col>
            <el-col :span="3" class="bottom"><el-tag class="tag" @click="_click(10)" type="info">Typography 字体</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(9)" type="info">Color 色彩</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click(11)" type="info">Border 边框</el-tag></el-col>
        </el-row>

    </div>
</template>

<script>
    //data
    import Epagination from "../../compents/elements/data/Epagination/Epagination"
    import Eprogress from "../../compents/elements/data/Eprogress/Eprogress"
    import Etag from "../../compents/elements/data/Etag/Etag"
    import Etree from "../../compents/elements/data/Etree/Etree"
    import Eavatar from "../../compents/elements/data/Eavatar/Eavatar"
    import Ebadge from "../../compents/elements/data/Ebadge/Ebadge"
    import Etable from "../../compents/elements/data/Etable/Etable"

    //from
    import Ecascader from "../../compents/elements/from/Ecascader/Ecascader"
    import Echeckbox from "../../compents/elements/from/Echeckbox/Echeckbox"
    import EcolorPicker from "../../compents/elements/from/EcolorPicker/EcolorPicker"
    import EdatePicker from "../../compents/elements/from/EdatePicker/EdatePicker"
    import EdateTimePicker from "../../compents/elements/from/EdateTimePicker/EdateTimePicker"
    import Efrom from "../../compents/elements/from/Efrom/Efrom"
    import Einput from "../../compents/elements/from/Einput/Einput"
    import EinputNumber from "../../compents/elements/from/EinputNumber/EinputNumber"
    import Eradio from "../../compents/elements/from/Eradio/Eradio"
    import Erate from "../../compents/elements/from/Erate/Erate"
    import Eselect from "../../compents/elements/from/Eselect/Eselect"
    import Eslider from "../../compents/elements/from/Eslider/Eslider"
    import Eswitch from "../../compents/elements/from/Eswitch/Eswitch"
    import EtimePicker from "../../compents/elements/from/EtimePicker/EtimePicker"
    import Etransfer from "../../compents/elements/from/Etransfer/Etransfer"
    import Eupload from "../../compents/elements/from/Eupload/Eupload"

    export default {
        components: {
            Eavatar,
            Ebadge,
            Etable,
            Etree,
            Etag,
            Epagination,
            Eprogress,

            Ecascader,
            Echeckbox,
            EcolorPicker,
            EdatePicker,
            EdateTimePicker,
            Efrom,
            Einput,
            EinputNumber,
            Eradio,
            Erate,
            Eselect,
            Eslider,
            Eswitch,
            EtimePicker,
            Etransfer,
            Eupload,
        },
        name: 'ElementUis',
        props: {
            //  msg: String
        },
        computed: {
            // ...mapState(["activityData"])
        },
        data() {
            return {
                index:0,
            }
        },
        created() {

        },
        methods: {
            _click(index) {
                this.index = index;
            },
        }

    }
</script>

<style lang="less" scoped>
    .ElementUis {
        .title{
            font-size: 20px;
            color:blue;
            padding-bottom: 10px;
            cursor: pointer;
        }
        .bottom{
            padding-bottom: 5px;
        }
        .tag{
            cursor: pointer;
        }
    }
</style>
