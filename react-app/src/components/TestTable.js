import React from 'react';
import { Table, Button, Popconfirm} from 'antd';

const data = [
    {
        _id: '1',
        title: 'First topic',
        createdAt: "2016-05-18T16:00:00Z",
        viewCount: 100
    },
    {
        _id: '2',
        title: 'Second topic',
        createdAt: "2018-05-18T16:00:00Z",
        viewCount: 22
    },
    {
        _id: '3',
        title: 'Third topic',
        createdAt: "2018-05-18T16:00:00Z",
        viewCount: 87
    },
]

class TestTable extends React.Component {
    constructor(props) {
    super(props);

    this.columns = [
        {
            title: 'Teema',
            dataIndex: 'title',
            width: '30%',
        },
        {
            title: 'Loodud',
            dataIndex: 'createdAt',
            width: '30%',
        },
        {
            title: 'Vaatamisi',
            dataIndex: 'viewCount',
            width: '15%',
        },
        {
            title: 'Toimetus',
            dataIndex: 'operation',
            width: '15%',
            render: (text, record) =>
                this.state.dataSource.length >= 1 ? (
                <Popconfirm title="Kindel, etsoovite postitust arhiveerida?" onConfirm={() => this.handleArchive(record._id)}>
                    <Button className={'table-archive-button'}>Archive</Button>
                </Popconfirm>
                ) : null,
        },
    ];
        this.state = {
            dataSource: data
        };
    }

    handleArchive = (_id) => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter((item) => item._id !== _id),
        });
    };

    render() {
        const { dataSource } = this.state;
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: (record) => ({
                    record,
                    dataIndex: col.dataIndex,
                    title: col.title,
                }),
            };
        });
        return (
            <div>
                <Table
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                    className={'app-data'}
                />
            </div>
        );
    }
}

export default TestTable