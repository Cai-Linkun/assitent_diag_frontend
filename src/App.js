import logo from './logo.svg';
import result_img from './result.jpg';
import csv_icon from './csv.png';
import smoothed_velocity from './smoothed_velocity.png'
import './App.css';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Row, Col, Form, Input, Space, Table, Image, Result } from 'antd'
import React from 'react';
import { Divider, Upload } from 'antd';

const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

const FeatureTable = () => {
  // 54.74, 26.38, 37.15, 0.76, 0.51
  const dataSource = [
    {
      key: '1',
      Side: "Left",
      PSV: 54.74,
      EDV: 26.38,
      TMV: 37.15,
      PI: 0.76,
      RI: 0.51,
    },
    // 66.90, 25.91, 41.21, 0.99, 0.61
    {
      key: '2',
      Side: "Right",
      PSV: 66.90,
      EDV: 25.91,
      TMV: 41.21,
      PI: 0.99,
      RI: 0.61,
    },
  ];

  const columns = [
    {
      title: 'Side',
      dataIndex: 'Side',
      key: 'side',
    },
    {
      title: 'PSV',
      dataIndex: 'PSV',
      key: 'psv',
    },
    {
      title: 'EDV',
      dataIndex: 'EDV',
      key: 'edv',
    },
    {
      title: 'TMV',
      dataIndex: 'TMV',
      key: 'tmv',
    },
    {
      title: 'PI',
      dataIndex: 'PI',
      key: 'pi',
    },
    {
      title: 'RI',
      dataIndex: 'RI',
      key: 'ri',
    },
  ];
  return (
    <Table dataSource={dataSource} columns={columns} bordered size="middle" pagination={false} />
  );
}



function App() {
  const [form] = Form.useForm();

  const formItemLayout = {
    // labelAlign: 'right',
    // labelCol: {
    //   span: 4,
    // },
    // wrapperCol: {
    //   span: 19,
    //   offset: 1
    // },
  };

  var doUpload = () => { }

  const fileList = [
    {
      uid: '-1',
      name: 'ICA-X01.csv',
      status: 'done',
      url: csv_icon,
      thumbUrl: csv_icon
    },
  ];

  return (
    <div className="App">
      <Row>
        <Col flex="300px" className='ad_Sidebar'>
          <Form form={form} name="validateOnly" autoComplete="off" layout="vertical">

            <Divider>Demographic characteristics</Divider>
            <Form.Item
              name="sub"
              label="Sub"
              rules={[
                {
                  // required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="age"
              label="Age"
              rules={[
                {
                  // required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="bmi"
              label="BMI"
              rules={[
                {
                  // required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Divider>Clinical characteristics</Divider>
            <Form.Item
              name="sbp"
              label="SBP"
              rules={[
                {
                  // required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="dbp"
              label="DBP"
              rules={[
                {
                  // required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="hr"
              label="HR"
              rules={[
                {
                  // required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="ica"
              label="ICA"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload name="logo" action="" listType='picture' defaultFileList={fileList}>
                <Button icon={<UploadOutlined />}> Click to upload csv or excel file</Button>
              </Upload>
            </Form.Item>



            <Form.Item>
              <Space>
                <SubmitButton form={form}>Submit</SubmitButton>
                <Button htmlType="reset">Reset</Button>
              </Space>
            </Form.Item>
          </Form>
        </Col>
        <Col flex="auto" className='as_Content'>
          <Space
            direction="vertical"
            size="middle"
            style={{
              display: 'flex',
            }}
          >
            <Image width={600} src={smoothed_velocity}></Image>
            <FeatureTable></FeatureTable>

            <Space>
              <Image
                width={400}
                fallback="data:image/png;base64,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"
                src={result_img}
              />
              <Result className='as-Result'
                status="warning"
                title="WARNING!"
              />
            </Space>

          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default App;
