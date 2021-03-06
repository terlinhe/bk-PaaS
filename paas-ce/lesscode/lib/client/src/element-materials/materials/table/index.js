/**
 * Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 * Copyright (C) 2017-2019 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

export default {
    name: 'table',
    type: 'bk-table',
    displayName: '表格',
    icon: 'bk-drag-table',
    group: '数据',
    order: 1,
    events: [{
        name: 'select', tips: '当用户手动勾选数据行的 Checkbox 时触发的事件，回调参数（selection, row）'
    }, {
        name: 'select-all', tips: '当用户手动勾选全选 Checkbox 时触发的事件，回调参数（selection）'
    }, {
        name: 'selection-change', tips: '当选择项发生变化时会触发该事件，回调参数（selection）'
    }, {
        name: 'cell-mouse-enter', tips: '当单元格 hover 进入时会触发该事件，回调参数（row, column, cell, event）'
    }, {
        name: 'cell-mouse-leave', tips: '当单元格 hover 退出时会触发该事件，回调参数（row, column, cell, event）'
    }, {
        name: 'row-mouse-enter', tips: '当表格行 hover 进入时会触发该事件，回调参数（index, row, event）'
    }, {
        name: 'row-mouse-leave', tips: '当表格行 hover 退出时会触发该事件，回调参数（index, row, event）'
    }, {
        name: 'cell-click', tips: '当某个单元格被点击时会触发该事件，回调参数（row, column, cell, event）'
    }, {
        name: 'cell-dblclick', tips: '当某个单元格被双击击时会触发该事件，回调参数（row, column, cell, event）'
    }, {
        name: 'row-click', tips: '当某一行被点击时会触发该事件，回调参数（row, event, column）'
    }, {
        name: 'row-contextmenu', tips: '当某一行被鼠标右键点击时会触发该事件，回调参数（row, event）'
    }, {
        name: 'row-dblclick', tips: '当某一行被双击时会触发该事件，回调参数（row, event）'
    }, {
        name: 'header-click', tips: '当某一列的表头被点击时会触发该事件，回调参数（column, event）'
    }, {
        name: 'header-contextmenu', tips: '当某一列的表头被鼠标右键点击时触发该事件，回调参数（column, event）'
    }, {
        name: 'sort-change', tips: '当表格的排序条件发生变化的时候会触发该事件，回调参数（{ column, prop, order }）'
    }, {
        name: 'filter-change', tips: '当表格的筛选条件发生变化的时候会触发该事件，回调参数 filters 是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。'
    }, {
        name: 'current-change', tips: '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性，回调参数（currentRow, oldCurrentRow）'
    }, {
        name: 'header-dragend', tips: '当拖动表头改变了列的宽度的时候会触发该事件，回调参数（newWidth, oldWidth, column, event）'
    }, {
        name: 'expand-change', tips: '当用户对某一行展开或者关闭的时候会触发该事件，回调参数（row, expandedRows）'
    }, {
        name: 'page-change', tips: '当用户切换表格分页时会触发的事件，回调参数（newPage）'
    }, {
        name: 'page-limit-change', tips: '当用户切换表格每页显示条数时会出发的事件，回调参数（limit）'
    }],
    styles: ['size', 'margin', 'display'],
    props: {
        slots: {
            name: 'bk-table-column',
            type: 'table-column',
            val: [
                { label: '第一列', prop: 'prop1', sortable: false },
                { label: '第二列', prop: 'prop2', sortable: false },
                { label: '第三列', prop: 'prop3', sortable: false }
            ]
        },
        data: {
            type: ['array', 'remote'],
            remoteValidate (data) {
                if (!Array.isArray(data)) return '返回值需要是数组'
            },
            val: [
                { prop1: '1-1', prop2: '1-2', prop3: '1-3' },
                { prop1: '2-1', prop2: '2-2', prop3: '2-3' },
                { prop1: '3-1', prop2: '3-2', prop3: '3-3' }
            ],
            tips: '显示的数据'
        },
        height: {
            type: ['string', 'number'],
            tips: 'Table 的高度，默认为自动高度。如果 height 为 Number 类型，单位 px；如果 height 为 String 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。'
        },
        'max-height': {
            type: ['string', 'number']
        },
        stripe: {
            type: 'boolean',
            va: false,
            tips: '是否为斑马纹 Table'
        },
        border: {
            type: 'boolean',
            va: false,
            tips: '是否带有边框'
        },
        'outer-border': {
            type: 'boolean',
            va: false,
            tips: '是否带有外边框'
        },
        'row-border': {
            type: 'boolean',
            va: true,
            tips: '是否带有横向边框, 当 border 为 true 时，此属性设置无效'
        },
        'col-border': {
            type: 'boolean',
            va: false,
            tips: '是否带有纵向边框, 当 border 为 true 时，此属性设置无效'
        },
        size: {
            type: 'string',
            val: 'medium',
            options: ['small', 'medium', 'large']
        },
        fit: {
            type: 'boolean',
            val: true,
            tips: '列的看度是否自动撑开'
        },
        'show-header': {
            type: 'boolean',
            val: true,
            tips: '是否显示表头'
        },
        'highlight-current-row': {
            type: 'boolean',
            val: false,
            tips: '是否高亮当前行'
        }
    }
}
