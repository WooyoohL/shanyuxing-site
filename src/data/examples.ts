export interface Example {
  title: string;
  content: string;
  suitableFor: string;
}

export const examples: Example[] = [
  {
    title: '外贸询盘回复助手',
    content:
      '输入客户询盘和产品资料，生成中文需求摘要、客户意图判断、英文回复草稿和下一步跟进建议。',
    suitableFor: '外贸公司、跨境 B2B 商家、工厂外贸部',
  },
  {
    title: '客服知识库助手',
    content:
      '将常见问题、售后政策、产品说明和历史话术整理成内部客服问答助手，帮助客服快速生成回复建议。',
    suitableFor: '电商客服、售后团队、培训机构、本地服务公司',
  },
  {
    title: '电商评论分析助手',
    content:
      '批量分析商品评论和差评内容，输出问题分类、占比统计、典型反馈和改进建议。',
    suitableFor: '电商商家、代运营团队、品牌运营人员',
  },
  {
    title: '表格数据分析与日报助手',
    content:
      '读取销售、订单、客户或运营表格，自动生成摘要、异常提醒、趋势分析和日报内容。',
    suitableFor: '老板、运营负责人、销售管理、项目管理人员',
  },
];
