export interface Example {
  title: string;
  input: string;
  output: string;
  suitableFor: string;
  boundary: string;
}

export const examples: Example[] = [
  {
    title: '外贸询盘与跟进回复',
    input: '客户询盘、产品资料、历史话术、报价规则',
    output: '需求摘要、回复草稿、跟进建议、需人工确认的关键点',
    suitableFor: '外贸公司、跨境 B2B 商家、工厂外贸部、外贸服务商',
    boundary: '价格、交期、合同承诺和客户关系判断仍由业务人员确认。',
  },
  {
    title: '客服知识库与回复辅助',
    input: 'FAQ、售后政策、产品说明、历史客服话术',
    output: '可引用的答案、回复建议、问题归类、人工确认提示',
    suitableFor: '电商客服、售后团队、培训机构、本地服务公司',
    boundary: '退款、投诉、合规和高风险承诺不自动处理，需要人工审核。',
  },
  {
    title: '电商评论、售后与差评分析',
    input: '商品评论、售后反馈、差评内容、竞品评价',
    output: '问题标签、典型反馈、占比摘要、运营改进线索',
    suitableFor: '电商商家、代运营团队、品牌运营人员',
    boundary: '适合辅助运营判断，不替代产品、供应链和客服团队的最终决策。',
  },
  {
    title: '表格日报与经营分析',
    input: '销售表、订单表、客户跟进表、运营数据表',
    output: '数据摘要、异常提醒、趋势说明、日报或周报草稿',
    suitableFor: '老板、运营负责人、销售管理、项目管理人员',
    boundary: '适合固定格式和明确指标的数据，不承担财务审计或复杂 BI 建模。',
  },
];
