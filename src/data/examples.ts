export interface Example {
  title: string;
  input: string;
  output: string;
  suitableFor: string;
  boundary: string;
}

export const examples: Example[] = [
  {
    title: '外贸询盘回复助手',
    input: '客户询盘、产品资料、历史回复话术、报价规则',
    output: '需求摘要、客户意图判断、英文回复草稿、跟进建议',
    suitableFor: '外贸公司、跨境 B2B 商家、工厂外贸部、外贸服务商',
    boundary: '不代替业务员确认价格、交期、合同承诺和客户关系判断。',
  },
  {
    title: '客服知识库助手',
    input: 'FAQ、售后政策、产品说明、历史客服话术',
    output: '知识库检索、回复建议、引用依据、问题归类',
    suitableFor: '电商客服、售后团队、培训机构、本地服务公司',
    boundary: '不直接替代人工客服处理退款、投诉、合规或高风险承诺。',
  },
  {
    title: '电商评论分析助手',
    input: '商品评论、差评内容、售后反馈、竞品评价',
    output: '问题分类、标签统计、典型反馈、优化建议',
    suitableFor: '电商商家、代运营团队、品牌运营人员',
    boundary: '适合辅助运营判断，不替代产品、供应链和客服团队的最终决策。',
  },
  {
    title: '表格数据分析与日报助手',
    input: '销售表、订单表、客户跟进表、运营数据表',
    output: '数据摘要、异常提醒、趋势说明、日报或周报草稿',
    suitableFor: '老板、运营负责人、销售管理、项目管理人员',
    boundary: '适合固定格式和明确指标的数据，不承担财务审计或复杂 BI 建模。',
  },
];
