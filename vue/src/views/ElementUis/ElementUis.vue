<template>
    <div class='ElementUis'>
        <div class="title" @click="_click(-1)">Data</div>
        <el-row >
            <el-col :span="2" class="bottom"><el-tag class="tag"  @click="_click('Table')"  type="danger">Table 表格</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Pagination')" type="danger">Pagination 分页</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Tree')" type="warning">Tree 树形控件</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Tag')" type="warning">Tag 标签</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Progress')" type="warning" >Progress 进度条</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Badge')" type="info">Badge 标记</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Avatar')" type="info">Avatar 头像</el-tag></el-col>
        </el-row>
        <div class="comptents">
            <Etable v-if="index == 'Table'"/>
            <Etag v-else-if="index == 'Tag'"/>
            <Eprogress v-else-if="index == 'Progress'"/>
            <Etree v-else-if="index == 'Tree'"/>
            <Epagination v-else-if="index == 'Pagination'"/>
            <Ebadge v-else-if="index == 'Badge'"/>
            <Eavatar v-else-if="index == 'Avatar'"/>
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
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Loading')" type="danger">Loading 加载</el-tag></el-col>

            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Alert')" type="warning">Alert 警告</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Message')" type="warning">Message 消息提示</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('MessageBox')" type="info">MessageBox 弹框</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Notification')" type="info">Notification 通知</el-tag></el-col>
        </el-row>
        <div class="comptents">
            <Eloading v-if="index == 'Loading'"/>
            <Ealert v-else-if="index == 'Alert'"/>
            <Emessage v-else-if="index == 'Message'"/>
            <EmessageBox v-else-if="index == 'MessageBox'"/>
            <ENotification v-else-if="index == 'Notification'"/>
            <div v-else></div>
        </div>
        <div class="title">Navigation</div>
        <el-row >
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('NavMenu')" type="danger">NavMenu 导航菜单</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Tabs')" type="danger">Tabs 标签页</el-tag></el-col>

            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Steps')" type="warning">Steps 步骤条</el-tag></el-col>

            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Breadcrumb')" type="info">Breadcrumb 面包屑</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('PageHeader')" type="info">PageHeader 页头</el-tag></el-col>
            <el-col :span="4" class="bottom"><el-tag class="tag" @click="_click('Dropdown')" type="info">Dropdown 下拉菜单</el-tag></el-col>
        </el-row>
        <div class="comptents">
            <ENavMenu v-if="index == 'NavMenu'"/>
            <ETabs v-else-if="index == 'Tabs'"/>
            <ESteps v-else-if="index == 'Steps'"/>
            <EBreadcrumb v-else-if="index == 'Breadcrumb'"/>
            <EPageHeader v-else-if="index == 'PageHeader'"/>
            <EDropdown v-else-if="index == 'Dropdown'"/>
            <div v-else></div>
        </div>
        <div class="title">Others</div>
        <el-row >
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Dialog')" type="danger">Dialog 对话框</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Tooltip')" type="danger">Tooltip 文字提示</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Popover')" type="danger">Popover 弹出框</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Carousel')" type="danger">Carousel 走马灯</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Image')" type="danger">Image 图片</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Timeline')" type="danger">Timeline 时间线</el-tag></el-col>

            <el-col :span="3" class="bottom"><el-tag class="tag" @click="_click('Popconfirm')" type="warning">Popconfirm 气泡确认框</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Collapse')" type="warning">Collapse 折叠面板</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Backtop')" type="warning">Backtop 回到顶部</el-tag></el-col>

            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Divider')" type="info">Divider 分割线</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Calendar')" type="info">Calendar 日历</el-tag></el-col>
            <el-col :span="3" class="bottom"><el-tag class="tag" @click="_click('InfiniteScroll')" type="info">InfiniteScroll 无限滚动</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Drawer')" type="info">Drawer 抽屉</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Card')" type="info">Card 卡片</el-tag></el-col>
        </el-row>
        <div class="comptents">
            <EDialog v-if="index == 'Dialog'"/>
            <ETooltip v-if="index == 'Tooltip'"/>
            <EPopover v-if="index == 'Popover'"/>
            <ECarousel v-if="index == 'Carousel'"/>
            <EImage v-if="index == 'Image'"/>
            <ETimeline v-else-if="index == 'Timeline'"/>
            <EPopconfirm v-else-if="index == 'Popconfirm'"/>
            <ECollapse v-else-if="index == 'Collapse'"/>
            <EBacktop v-else-if="index == 'Backtop'"/>
            <EDivider v-else-if="index == 'Divider'"/>
            <ECalendar v-else-if="index == 'Calendar'"/>
            <EInfiniteScroll v-else-if="index == 'InfiniteScroll'"/>
            <EDrawer v-else-if="index == 'Drawer'"/>
            <ECard v-else-if="index == 'Card'"/>
            <div v-else></div>
        </div>
        <div class="title">Basic</div>
        <el-row >
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Layout')" type="danger">Layout 布局</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Container')" type="danger">Container 布局容器</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Button')" type="danger">Button 按钮</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Icon')" type="danger">Icon 图标</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Link')" type="info">Link 文字链接</el-tag></el-col>
            <el-col :span="3" class="bottom"><el-tag class="tag" @click="_click('Typography')" type="info">Typography 字体</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Color')" type="info">Color 色彩</el-tag></el-col>
            <el-col :span="2" class="bottom"><el-tag class="tag" @click="_click('Layout')" type="info">Border 边框</el-tag></el-col>
        </el-row>
        <div class="comptents">
            <ELayout v-if="index == 'Layout'"/>
            <EContainer v-else-if="index == 'Container'"/>
            <EButton v-else-if="index == 'Button'"/>
            <EIcon v-else-if="index == 'Icon'"/>
            <ELink v-else-if="index == 'Link'"/>
            <ETypography v-else-if="index == 'Typography'"/>
            <EColor v-else-if="index == 'Color'"/>
            <EBorder v-else-if="index == 'Border'"/>
            <div v-else></div>
        </div>

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

    //basic
    import EBorder from "../../compents/elements/Basic/EBorder/EBorder"
    import EButton from "../../compents/elements/Basic/EButton/EButton"
    import EColor from "../../compents/elements/Basic/EColor/EColor"
    import EContainer from "../../compents/elements/Basic/EContainer/EContainer"
    import EIcon from "../../compents/elements/Basic/EIcon/EIcon"
    import ELayout from "../../compents/elements/Basic/ELayout/ELayout"
    import ELink from "../../compents/elements/Basic/ELink/ELink"
    import ETypography from "../../compents/elements/Basic/ETypography/ETypography"

    //Navigation
    import EBreadcrumb from "../../compents/elements/Navigation/EBreadcrumb/EBreadcrumb"
    import EDropdown from "../../compents/elements/Navigation/EDropdown/EDropdown"
    import ENavMenu from "../../compents/elements/Navigation/ENavMenu/ENavMenu"
    import EPageHeader from "../../compents/elements/Navigation/EPageHeader/EPageHeader"
    import ESteps from "../../compents/elements/Navigation/ESteps/ESteps"
    import ETabs from "../../compents/elements/Navigation/ETabs/ETabs"

    //notice
    import Ealert from "../../compents/elements/notice/Ealert/Ealert"
    import Eloading from "../../compents/elements/notice/Eloading/Eloading"
    import Emessage from "../../compents/elements/notice/Emessage/Emessage"
    import EmessageBox from "../../compents/elements/notice/EmessageBox/EmessageBox"
    import ENotification from "../../compents/elements/notice/ENotification/ENotification"

    //Others
    import EBacktop from "../../compents/elements/Others/EBacktop/EBacktop"
    import ECalendar from "../../compents/elements/Others/ECalendar/ECalendar"
    import ECard from "../../compents/elements/Others/ECard/ECard"
    import ECarousel from "../../compents/elements/Others/ECarousel/ECarousel"
    import ECollapse from "../../compents/elements/Others/ECollapse/ECollapse"
    import EDialog from "../../compents/elements/Others/EDialog/EDialog"
    import EDivider from "../../compents/elements/Others/EDivider/EDivider"
    import EDrawer from "../../compents/elements/Others/EDrawer/EDrawer"
    import EImage from "../../compents/elements/Others/EImage/EImage"
    import EInfiniteScroll from "../../compents/elements/Others/EInfiniteScroll/EInfiniteScroll"
    import EPopconfirm from "../../compents/elements/Others/EPopconfirm/EPopconfirm"
    import EPopover from "../../compents/elements/Others/EPopover/EPopover"
    import ETimeline from "../../compents/elements/Others/ETimeline/ETimeline"
    import ETooltip from "../../compents/elements/Others/ETooltip/ETooltip"


    export default {
        components: {
            Eloading,
            ETooltip,
            EBacktop,
            ECalendar,
            ECard,
            ECarousel,
            ECollapse,
            EDialog,
            EInfiniteScroll,
            EDivider,
            EDrawer,
            EImage,
            EPopconfirm,
            EPopover,
            ETimeline,
            EBreadcrumb,
            EDropdown,
            ENavMenu,
            EPageHeader,
            ESteps,
            ETabs,
            Ealert,
            Emessage,
            EmessageBox,
            ENotification,
            EBorder,
            EButton,
            EColor,
            EContainer,
            EIcon,
            ELayout,
            ELink,
            ETypography,

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
