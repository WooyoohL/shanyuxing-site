export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: 'AI 回复与文本生成模块',
    description:
      '围绕客服回复、外贸邮件、运营文案和跟进话术，交付可嵌入业务流程的生成、改写、摘要和审核辅助能力。',
  },
  {
    title: 'AI 知识库问答模块',
    description:
      '将 FAQ、产品资料、售后政策和内部文档整理为可检索问答能力，支持客服、销售或运营人员快速查找答案。',
  },
  {
    title: '表格分析与日报模块',
    description:
      '针对销售、订单、客户、评论或运营表格，交付自动汇总、异常提示、趋势说明和日报草稿生成能力。',
  },
  {
    title: '文本分类与业务标签模块',
    description:
      '对评论、工单、聊天记录、询盘和反馈文本进行分类、打标、归因和优先级判断，帮助团队更快定位重点。',
  },
  {
    title: 'AI 工作流集成模块',
    description:
      '把表单、企业微信、飞书、邮箱、现有系统接口和人工确认节点串联起来，形成可运行的小场景自动化流程。',
  },
];
