<template>
  <!-- hidden PageHeaderWrapper title demo -->
  <page-header-wrapper :title="false">
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <a-table
        :columns="columns"
        :data-source="tableData"
        :loading="loading"
        bordered>
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
        <span slot="tags" slot-scope="tags">
          <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
        <span slot="action" slot-scope="text, record">
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
        </span>
      </a-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import { STable } from '@/components'
import { getUniversityTable } from '@/api/table'
export default {
  name: 'BaseForm',
  components: {
    STable
  },
  data () {
    return {
      loading: false,
      columns: [{
        dataIndex: 'name',
        key: 'name',
        slots: { title: 'customTitle' },
        scopedSlots: { customRender: 'name' }
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        customRender: (value, row, index) => {
          const obj = {
            children: value,
            attrs: {}
          }
          if (index === 0) {
            obj.attrs.rowSpan = 2
          }
          if (index === 1) {
            obj.attrs.rowSpan = 0
          }
          return obj
        }
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        scopedSlots: { customRender: 'tags' }
      },
      {
        title: 'Action',
        key: 'action',
        scopedSlots: { customRender: 'action' }
      }],
      tableData: [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer']
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 32,
        address: 'London No. 1 Lake Park',
        tags: ['loser']
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher']
      }]
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      return new Promise((resolve, reject) => {
        getUniversityTable().then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
</script>
