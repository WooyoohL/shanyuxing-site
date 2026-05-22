export interface Capability {
  title: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    title: '业务资料结构化',
    description:
      '把 FAQ、产品资料、表格字段、历史话术和业务规则整理成模型可用、团队可维护的输入结构。',
  },
  {
    title: '模型能力接入与约束',
    description:
      '根据场景选择合适的模型能力，并通过提示词、规则、引用依据和人工确认降低不可控输出。',
  },
  {
    title: '表格与文本处理',
    description:
      '处理 Excel、CSV、评论、工单、聊天记录等常见业务数据，完成清洗、分类、摘要和报告生成。',
  },
  {
    title: '现有系统对接',
    description:
      '按项目需要与表单、企业微信、飞书、邮箱或已有业务系统连接，让 AI 功能进入实际工作流。',
  },
  {
    title: '上线维护与迭代',
    description:
      '围绕真实使用反馈调整规则、字段、提示词和流程节点，保证小模块能持续服务业务。',
  },
];
