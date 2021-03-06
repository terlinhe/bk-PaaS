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
    name: 'progress',
    type: 'bk-progress',
    displayName: '进度条',
    icon: 'bk-drag-progress',
    group: '数据',
    order: 1,
    styles: ['size', 'margin'],
    props: {
        theme: {
            type: 'string',
            options: ['primary', 'warning', 'success', 'danger'],
            val: 'primary'
        },
        percent: {
            type: 'number',
            val: 0.3,
            tips: '进度百分比'
        },
        size: {
            type: 'string',
            options: ['small', 'normal', 'large'],
            val: 'normal'
        },
        'stroke-width': {
            type: 'number',
            tips: '进度条的宽度，单位 px'
        },
        'text-inside': {
            type: 'boolean',
            val: false,
            tips: '进度条显示文字内置在进度条内'
        },
        color: {
            type: 'string',
            tips: '进度条背景色'
        },
        'show-text': {
            type: 'boolean',
            val: true,
            tips: '是否显示进度条文字内容'
        },
        'title-style': {
            type: 'object',
            val: {
                fontSize: '16px',
                verticalAlign: 'middle'
            },
            tips: '设置 title 的样式'
        },
        'ext-cls': {
            type: 'string',
            tips: '配置自定义样式类名，传入的类会被加在组件最外层的 DOM 上'
        }
    }
}
