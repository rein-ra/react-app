import React from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';


class TestTable extends React.Component {
    
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'Pealkiri',
                dataIndex: 'title',
                width: '30%',
            },
            {
                title: 'Loodud',
                dataIndex: 'createdAt',
            },
            {
                title: 'Vaatamisi',
                dataIndex: 'viewCount',
            },
            {
                title: '',
                dataIndex: 'operation',
                    render: (text, record) =>
                        this.state.dataSource.length >= 1 ? (
                            <Popconfirm title="Kindel, et soovite arhiveerida?" onConfirm={() => this.handleDelete(record._id)}>
                                <Button className={'table-archive-button'}>Arhvieeri</Button>
                            </Popconfirm>
                        ) : null,
            },
        ];

        this.state = {
            dataSource: [
                {
                    _id: '1',
                    title: 'First topic',
                    createdAt: '2016-05-18T16:00:00Z',
                    viewCount: 100,
                },
                {
                    _id: '2',
                    title: 'Second topic',
                    createdAt: '2018-05-18T16:00:00Z',
                    viewCount: 22,
                },
            ],
            count: 2,
        };
    }
    
    handleDelete = _id => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item._id !== _id) });
    };

    handleAdd = newValue => {
        //const newTitle = titleInput;
        const { count, dataSource } = this.state;
        const newData = {
            _id: count,
            title: newValue,
            createdAt: '2018-05-18T16:00:00Z',
            viewCount: Math.floor(Math.random() * 100),
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    };

    handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row._id === item._id);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        this.setState({ dataSource: newData });
    };

    render() {
        const { dataSource } = this.state;
        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div>
                <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                Add a row
                </Button>
                <Table
                    
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        );
    }
}


export default TestTable;