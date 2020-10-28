export const products = {
  'groups':
        [
          '运费类',
          '增值类',
          '事后折基数'
        ],
  'data': [
    {
      group: '运费类',
      type: 'input', // input  dateInput radio checkbox
      value: '正常文本', // 默认值
      name: '文本框', // 字段名称
      en: 'input1',
      min: 0,
      max: 12,
      req: false, // 置灰->放开，是否要必输
      isReq: false, // 是否必输；true,必输
      isEnabled: true, // 是否可用；true可用
      isShow: true// 是否显示；true显示

    }, {
      group: '运费类',
      type: 'input', // input  dateInput radio checkbox
      value: '我的值是不可用', // 默认值
      name: '不可用', // 字段名称
      en: 'input2',
      min: 0,
      max: 12,
      req: false, // 置灰->放开，是否要必输
      isReq: false, // 是否必输；true,必输
      isEnabled: false, // 是否可用；true可用
      isShow: true// 是否显示；true显示
    }, {
      group: '运费类',
      type: 'input', // input  dateInput radio checkbox
      value: '我的值是不显示', // 默认值
      name: '不显示', // 字段名称
      en: 'input3',
      min: 0,
      max: 12,
      req: false, // 置灰->放开，是否要必输
      isReq: false, // 是否必输；true,必输
      isEnabled: false, // 是否可用；true可用
      isShow: false// 是否显示；true显示
    }, {
      group: '运费类',
      type: 'input', // input  dateInput radio checkbox
      value: '我的值是必输', // 默认值
      name: '必输', // 字段名称
      en: 'input4',
      min: 0,
      max: 12,
      req: true, // 置灰->放开，是否要必输
      isReq: true, // 界面渲染使用是否必输；true,必输，置灰后必须要设置为false
      isEnabled: true, // 是否可用；true可用
      isShow: true// 是否显示；true显示
    }, {
      group: '运费类',
      type: 'radio', // input  dateInput radio checkbox
      value: 'Y', // 默认值
      en: 'radio1',
      values: [
        {
          label: '是', // String
          value: 'Y', // String
          with: ['input2', 'input4'], // 所有关联字段
          wTrue: ['input2'], // 取消置灰
          wFalse: ['input4']// 设置为置灰
        }, //
        {
          label: '否', // String
          value: 'N', // String
          with: ['input2', 'input4'], // 所有关联字段
          wTrue: ['input4'], // 取消置灰
          wFalse: ['input2']// 设置为置灰
        }
      ],
      name: '请单选', // 字段名称
      isReq: true, // 是否必输；true,必输
      isEnabled: true, // 是否可用；true可用
      isShow: true// 是否显示；true显示
    }
  ]
}
export const input = {
  value: '',
  name: '产品折扣', // String
  min: 0, // 最小长度Number
  max: 12, // 最大长度Number
  isReq: true, // 是否必输Boolean
  isEnabled: true, // 是否可用Boolean
  isShow: true, // 是否显示Boolean
  defalut: ''// 默认值String
}
export const dateInput = {
  name: '产品折扣', // String
  min: '2020/09/12 00/00/00', // 最小长度String
  max: '2021/09/12 00/00/00', // 最大长度String
  isReq: true, // 是否必输Boolean
  isEnabled: true, // 是否可用Boolean
  isShow: true, // 是否显示Boolean
  defalut: ''// 默认值String
}
export const number = {
  name: '产品折扣', // String
  min: [
    0, // 最小值Number
    false// 不包含0，true包含，false不包含Boolean
  ],
  max: [
    100, // 最大值
    true// 包含100，true包含，false不包含Boolean
  ],
  floatLength: 3, // 保留几位小数
  isReq: true, // 是否必输Boolean
  isEnabled: true, // 是否可用Boolean
  isShow: true, // 是否显示Boolean
  defalut: ''// 默认值String
}
export const radio = {
  isReq: true, // 是否必输Boolean
  isEnabled: true, // 是否可用Boolean
  isShow: true, // 是否显示Boolean
  defalut: 'Y', // 默认值String
  values: [
    {
      name: '是', // String
      value: 'Y', // String
      with: ['aa', 'bb', 'cc', 'dd'], // 所有关联字段
      wTrue: ['aa', 'bb'], // 放开置灰
      withFalse: ['cc', 'dd']// 设置为置灰
    }, //
    {
      name: '否', // String
      value: 'N', // String
      with: ['aa', 'bb', 'cc', 'dd'], // 所有关联字段
      withTrue: ['cc', 'dd'], // 放开置灰
      withFalse: ['aa', 'bb']// 设置为置灰
    }
  ]// Array
}
export const checkbox = {
  isReq: true, // 是否必输Boolean
  isEnabled: true, // 是否可用Boolean
  isShow: true, // 是否显示Boolean
  defalut: [], // 默认值
  values: [
    {
      name: '是', // String
      value: 'Y', // String
      with: ['aa', 'bb', 'cc', 'dd'], // 所有关联字段
      withTrue: ['aa', 'bb'], // 放开置灰
      withFalse: ['cc', 'dd']// 设置为置灰
    },
    {
      name: '否', // String
      value: 'N', // String
      with: ['aa', 'bb', 'cc', 'dd'], // 所有关联字段
      withTrue: ['cc', 'dd'], // 放开置灰
      withFalse: ['aa', 'bb']// 设置为置灰
    }
  ]
}
