import React, { useState } from 'react';
import style from './style.less';
import { Input, Button, message } from 'antd';
import { post } from '@/utils/request';

const Component = (props: any) => {
  const [content, setContent] = useState('');
  const submit = async () => {
    const data = { content };
    try {
      const res = await post('/v1/teacher/add_knowledge', { data });
      console.log('add knowledge', res);
      message.success('添加知识点成功');
    } catch (e: any) {
      message.error(e.toString());
    }
  };
  return (
    <div>
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="内容"
      ></Input>
      <Button onClick={submit}>提交</Button>
    </div>
  );
};

export default Component;
