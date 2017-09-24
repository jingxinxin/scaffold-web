/**
 * Created by jack on 2017/1/5.
 */

export const time = {
  disappear: 3000
};

export const confirm = {
  delete: {
    header       : '确认要删除吗?',
    content      : '将要删除',
    cancelButton : '取消',
    confirmButton: '删除'
  }
};

export const dropDown = {
  confirm_10   : [
    { text: 'YES', value: '1' },
    { text: 'NO', value: '0' }
  ],
  confirm_tf   : [
    { text: 'YES', value: 'true' },
    { text: 'NO', value: 'false' }
  ],
  platform     : [
    { text: '全部', value: '' },
    { text: 'IOS', value: 'ios' },
    { text: 'Android', value: 'android' }
  ],
  isPublic     : [
    { text: '未发布', value: '0' },
    { text: '已发布', value: '9' }
  ],
  status_public: [
    { text: '全部', value: '' },
    { text: '未发布', value: '0' },
    { text: '已下架，禁止所有用户访问', value: '1' },
    { text: '已下架，但允许已购买用户访问', value: '2' },
    { text: '已经发布', value: '9' }
  ],
  status_audit: [
    { text: '已审核', value: '9'},
    { text: '审核未通过', value: '1'},
    { text: '待审核', value: '0'}
  ],
  sort_data    : [
    { text: '大小顺序', value: 'sorting-asc' },
    { text: '大小倒序', value: 'sorting-desc' },
    { text: '发布时间顺序', value: 'created_at-asc' },
    { text: '发布时间倒序', value: 'created_at-desc' },
    { text: '更新时间顺序', value: 'updated_at-asc' },
    { text: '更新时间倒序', value: 'updated_at-desc' }
  ]
};

export const radio = {
  status_public: [
    { text: '未发布', value: '0' },
    { text: '已下架，禁止所有用户访问', value: '1' },
    { text: '已下架，但允许已购买用户访问', value: '2' },
    { text: '已经发布', value: '9' }
  ],
  status_public_2:[
    { text: '待审核', value: '0' },
    { text: '已经发布', value: '9' }
  ]
};

export const order = [
  { text: 'XXX', value: '0' },
  { text: '等待支付', value: '1' },
  { text: 'XXX', value: '2' },
  { text: '支付成功', value: '9' }
];

export const icon = {};