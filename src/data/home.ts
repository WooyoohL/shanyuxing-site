export interface Audience {
  title: string;
  description: string;
}

export interface CollaborationPath {
  title: string;
  suitableFor: string;
  description: string;
}

export interface DeliveryAssurance {
  title: string;
  description: string;
}

export const audiences: Audience[] = [
  {
    title: '软件公司',
    description:
      '已有项目或客户资源，但需要补齐 AI 模块开发、知识库问答、文本处理和自动化流程经验。',
  },
  {
    title: '企业服务商',
    description:
      '需要把客户的客服、运营、数据整理或内部流程问题，转化成可交付的小模块方案。',
  },
  {
    title: '代运营团队',
    description:
      '围绕电商评论、售后反馈、内容整理、报表汇总等重复工作，先做一个可验证的流程。',
  },
  {
    title: '中小企业',
    description:
      '已经知道哪个业务环节重复、耗时或容易出错，希望先做一个可用功能，而不是一开始建设大系统。',
  },
];

export const collaborationPaths: CollaborationPath[] = [
  {
    title: '给软件公司 / 企业服务商做 AI 能力补位',
    suitableFor: '已有项目或客户资源，但缺少 AI 模块开发经验。',
    description:
      '配合现有项目交付知识库问答、文本处理、表格分析或自动化流程模块，帮助你把 AI 能力嵌入客户方案。',
  },
  {
    title: '给中小企业做单个 AI 功能模块',
    suitableFor: '已经知道某个环节重复、耗时、容易出错。',
    description:
      '先围绕一个明确业务问题交付可用功能，例如回复草稿、评论分类、日报生成或资料问答，再根据效果迭代。',
  },
  {
    title: '给服务团队做小场景自动化流程',
    suitableFor: '表单、企业微信、飞书、邮箱、表格或内部系统之间有重复流转。',
    description:
      '保留人工确认节点，把信息收集、分类、通知、生成和记录串成半自动化流程，减少复制和重复处理。',
  },
];

export const deliveryAssurance: DeliveryAssurance[] = [
  {
    title: '明确输入资料',
    description: '先确认 FAQ、表格、工单、历史话术、业务规则和可用系统，避免脱离业务资料空转。',
  },
  {
    title: '明确输出结果',
    description: '把摘要、分类、回复草稿、日报、标签或流程节点定义清楚，方便测试和验收。',
  },
  {
    title: '明确人工确认',
    description: '区分哪些环节必须人工审核，哪些可以自动化处理，避免错误结果直接进入业务流程。',
  },
  {
    title: '明确系统集成',
    description: '根据需要接入表单、企业微信、飞书、邮箱或现有系统接口，让模块进入真实工作流。',
  },
  {
    title: '明确验收标准',
    description: '通过交付说明、样例测试、维护迭代计划和边界说明，让项目可检查、可调整。',
  },
];

export const deliveryBoundaries = [
  '不承诺全自动替代人工，关键业务判断需要保留人工确认。',
  '不承诺脱离业务资料和人工审核的高准确率结果。',
  '不建议一开始建设复杂的大系统，优先交付可验收的小模块。',
  '更适合有资料、有流程、有人工确认节点的业务场景。',
  '根据实际使用效果迭代扩展，而不是一次性做大而全。',
];
