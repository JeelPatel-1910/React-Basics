import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Space, Form, Modal, Input } from "antd";
import "antd/dist/antd.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./TableWithApi.css";

const TableWithApi = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((Response) => {
        setData(Response.data);
      });
  };

  const columns = [
    {
      title: "UserId",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Completed",
      dataIndex: "completed",
      key: "completed",
      render: (text) => String(text),
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "x",
      render: (_, record) => {
        return (
          <div>
            <EditOutlined
              onClick={() => {
                onEdithandler(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteHandler(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </div>
        );
      },
    },
  ];

  const onDeleteHandler = (record) => {
    const dataSource = [...data];
    console.log(dataSource);
    const filteredData = dataSource.filter((item) => item.id !== record.id);
    setData(filteredData);
  };

  const onEdithandler = (record) => {
    console.log(record);
    setIsEditing(true);
    setEditData({ ...record });
  };
  const resetEditData = () => {
    setIsEditing(false);
    setEditData(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Table columns={columns} dataSource={data} rowKey="id"></Table>
        <Modal
          title="Edit"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditData();
          }}
          onOk={() => {
            setData((pre) => {
              return pre.map((data) => {
                if (data.id === editData.id) {
                  return editData;
                } else {
                  return data;
                }
              });
            });
            resetEditData();
          }}
        >
          <Input
            value={editData?.userId}
            onChange={(e) => {
              setEditData((pre) => {
                return { ...pre, userId: e.target.value };
              });
            }}
          />
          <Input
            value={editData?.title}
            onChange={(e) => {
              setEditData((pre) => {
                return { ...pre, title: e.target.value };
              });
            }}
          />
          <Input
            value={editData?.completed}
            onChange={(e) => {
              setEditData((pre) => {
                return { ...pre, completed: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
};

export default TableWithApi;
