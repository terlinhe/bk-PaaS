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
    name: 'x-button',
    type: 'x-button',
    displayName: 'x-button',
    events: [
        { name: 'click', tips: '点击事件' }
    ],
    styles: ['size', 'padding', 'margin', 'font', 'border', 'background'],
    props: {
        title: {
            type: 'string',
            val: 'hello world'
        },
        size: {
            type: 'string',
            options: ['small', 'normal', 'large'],
            val: 'normal'
        },
        theme: {
            type: 'string',
            options: ['default', 'primary', 'success', 'warning', 'danger', 'text']
        },
        disabled: {
            type: 'boolean',
            val: false
        }
    }
}
