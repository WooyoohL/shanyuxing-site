export interface Capability {
  title: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    title: '大模型文本生成与回复草稿',
    description:
      '基于业务资料和上下文，生成客服回复、外贸邮件、运营文案、说明文本和跟进建议。',
  },
  {
    title: '企业知识库问答',
    description:
      '将 FAQ、产品资料、制度文档和业务说明整理成可检索、可追溯的内部问答助手。',
  },
  {
    title: 'Excel / 表格数据分析',
    description:
      '对销售、订单、评论、客户跟进等表格数据进行清洗、分类、汇总和报告生成。',
  },
  {
    title: '评论、工单、聊天记录分类',
    description:
      '对非结构化文本进行分类、标签提取、问题归因和优先级判断，辅助客服、运营和管理人员快速定位重点。',
  },
  {
    title: 'API 接入与自动化工作流',
    description:
      '根据项目需要接入表单、邮箱、企业微信、飞书、数据库或第三方系统，形成半自动化业务流程。',
  },
];
