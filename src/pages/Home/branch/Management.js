import React from 'react'
import '@/pages/Home/branch/less/Management.less'
import { Table , Button  } from 'antd';
class Management extends React.Component{
    state = {
        data : [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York Park',
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 40,
              address: 'London Park',
            },
          ],
          columns : [
            { title: 'Id', dataIndex: 'address'},
            { title: '所属赛事', dataIndex: 'address'},
            { title: '赛事名称', dataIndex: 'address'},
            { title: '赛事类型', dataIndex: 'address'},
            { title: '门票价格', dataIndex: 'address'},
            { title: '场地容纳', dataIndex: 'address'},
            { title: '广告供应商', dataIndex: 'address'},
            {
              title: 'Action',
              key: 'operation',
              fixed: 'right',
              width: 200,
              render: () => {return<><Button type="primary">编辑</Button><Button type="danger">删除</Button></>},
            },
          ]
    }
    onChange = (selectedRowKeys, selectedRows) => {
        console.log(selectedRows);
    }
    render(){
        return (
            <div className="Management">
                <p className="title2">9559</p>
                <Table
                 rowKey = { (record)=> record.id }
                 columns={this.state.columns} 
                 dataSource={this.state.data} 
                 rowSelection={{
                    type: 'checkbox',
                    onChange:this.onChange
                 }}
                 scroll={{ x: 1500 }} />
            </div>
        )
    }
}
export default Management;