<template>
  <!-- hidden PageHeaderWrapper title demo -->
  <page-header-wrapper :title="false">
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <s-table
        ref="table"
        size="default"
        :columns="columns"
      >
        <span slot="action">
          <a>编辑</a>
          <a-divider type="vertical"/>
          <a-dropdown>
            <a class="ant-dropdown-link">
              更多 <a-icon type="down"/>
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">1st menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">2nd menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">3rd menu item</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>
      </s-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import { STable } from '@/components'
export default {
  name: 'BaseForm',
  components: {
    STable
  },
  data () {
    return {
      columns: [{
        title: '检测项目',
        dataIndex: 'no'
      }, {
        title: '检测要素',
        dataIndex: 'description'
      }, {
        title: '核心监测点',
        dataIndex: 'callNo'
      }, {
        title: '数据说明',
        dataIndex: 'status'
      }, {
        title: '数据采集点',
        dataIndex: 'updatedAt'
      }, {
        table: '填报内容',
        dataIndex: 'action',
        scopedSlots: { customRender: 'action' }
      }]
    }
  },
  methods: {
  }
}
</script>
