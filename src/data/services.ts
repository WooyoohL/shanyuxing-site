export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: '外贸与跨境业务',
    description:
      '辅助处理英文询盘、客户需求摘要、回复草稿、产品资料查询和跟进建议，减少业务员在翻译、整理和回复上的重复时间。',
  },
  {
    title: '电商与内容运营',
    description:
      '支持商品文案生成、评论分析、差评归因、内容选题和运营数据整理，让运营团队更快发现问题和产出内容。',
  },
  {
    title: '客服与售后支持',
    description:
      '将常见问题、售后政策、产品资料和历史话术整理成可查询的客服知识助手，帮助客服统一回复口径。',
  },
  {
    title: '内部流程自动化',
    description:
      '围绕表格、日报、工单、客户记录和内部资料整理，搭建轻量级自动化流程，减少人工复制、汇总和重复录入。',
  },
];
