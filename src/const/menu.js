import * as o from './object';
import dictionary from './dictionary';
/**
 * 参数说明
 * display: 无为默认显示，none为隐藏
 * style: 无为默认显示，dropDown为下拉样式
 */
export default {
  name   : '管理后台',
  url    : '/manager',
  content: [
    {
      name: dictionary.translateEnToCn(o.tag),//标签
      url : `/${o.tag}/${o.list}`
    },
    {
      'name': dictionary.translateEnToCn(o.guru),//老师
      'url' : `/${o.guru}/${o.list}`
    },
    {
      'name'    : dictionary.translateEnToCn(o.headline),//头条
      'children': [
        {
          // display: 'none',
          'name': dictionary.translateEnToCnContact([ o.information, o.article ]),
          'url' : `/${o.headline}/${o.information}/${o.article}/${o.list}`
        },
        {
          // display: 'none',
          'name': dictionary.translateEnToCnContact([ o.information, o.classification ]),
          'url' : `/${o.headline}/${o.information}/${o.classification}/${o.list}`
        },
        {
          'name': dictionary.translateEnToCnContact([ o.video, o.list ]),
          'url' : `/${o.headline}/${o.video}/${o.list}`
        },
        {
          'name': dictionary.translateEnToCnContact([ o.classification, o.list ]),
          'url' : `/${o.headline}/${o.classification}/${o.list}`
        }
      ]
    },
    {
      'name'    : dictionary.translateEnToCn(o.wiki),//百科
      'children': [
        {
          'name': dictionary.translateEnToCnContact([ o.video, o.list ]),
          'url' : `/${o.wiki}/${o.video}/${o.list}`
        },
        {
          'name': dictionary.translateEnToCnContact([ o.classification, o.list ]),
          'url' : `/${o.wiki}/${o.classification}/${o.list}`
        }
      ]
    },
    {
      'name'    : dictionary.translateEnToCn(o.school),//学堂
      'children': [
        {
          'name': dictionary.translateEnToCnContact([ o.bundle ]),
          'url' : `/${o.school}/${o.bundle}/${o.list}`
        },
        {
          'name': dictionary.translateEnToCnContact([ o.course ]),
          'url' : `/${o.school}/${o.course}/${o.list}`
        },
        {
          'name': dictionary.translateEnToCnContact([ o.course, o.classification ]),
          'url' : `/${o.school}/${o.course}/${o.classification}/${o.list}`
        },
        {
          'name': dictionary.translateEnToCnContact([ o.course, o.lesson ]),
          'url' : `/${o.school}/${o.course}/${o.lesson}/${o.list}`
        },
        {
          'name': dictionary.translateEnToCnContact([ o.article ]),
          'url' : `/${o.school}/${o.article}/${o.list}`
        },
        {
          'name': dictionary.translateEnToCnContact([ o.article, o.classification ]),
          'url' : `/${o.school}/${o.article}/${o.classification}/${o.list}`
        }
      ]
    },
    {
      name    : dictionary.translateEnToCn(o.train),//从业
      // display : 'none',
      children: [
        {
          name: dictionary.translateEnToCnContact([ o.course, o.list ]),
          url : `/${o.train}/${o.course}/${o.list}`
        },
        {
          name: dictionary.translateEnToCnContact([ o.classification, o.list ]),
          url : `/${o.train}/${o.classification}/${o.list}`
        }
      ]
    },
    {
      name    : dictionary.translateEnToCnContact([ o.live ]),//直播
      children: [
        {
          name: dictionary.translateEnToCnContact([ o.advert ]),
          url : `/${o.live}/${o.advert}/${o.list}`
        }
      ]
    },
    {
      name    : dictionary.translateEnToCnContact([ o.content, '管理' ]),//内容管理
      children: [
        {
          name: '横幅和广告',
          url : `/${o.content}/${o.banner}/${o.list}`
        }
      ]
    },
    {
      name    : dictionary.translateEnToCnContact([ o.customer, '管理' ]),//客户管理
      children: [
        {
          name: dictionary.translateEnToCnContact([ o.customer, o.list ]),
          url : `/${o.customer}/${o.list}`
        },
        {
          name: dictionary.translateEnToCnContact([ o.roles, o.list ]),
          url : `/${o.roles}/${o.list}`
        },
        {
          name: dictionary.translateEnToCnContact([ o.verification_code ]),
          url : `/${o.customer}/${o.verification_code}/${o.list}`
        },
        {
          name: dictionary.translateEnToCnContact([ o.tip ]),
          url : `/${o.customer}/${o.tip}/${o.list}`
        }
      ]
    },
    {
      name    : '论坛管理*',
      display : 'none',
      children: []
    },
    {
      name      : dictionary.translateEnToCnContact([ o.activity, '管理' ]),//活动管理
      // display   : 'none',
      'children': [
        {
          name: dictionary.translateEnToCnContact([ o.web, '相关' ]),
          url : `${o.activity}/${o.web}/${o.list}`
        },
        {
          name    : '兑换码',
          style   : 'dropDown',
          children: [
            {
              name: '兑换活动列表',
              url : '/redeem-activities'
            },
            {
              name: '兑换码列表',
              url : '/redeem-codes'
            }
          ]
        }
      ]
    },
    {
      name    : dictionary.translateEnToCnContact([ o.sale ]), //销售
      children: [
        {
          name: dictionary.translateEnToCn(o.dashboard),
          url : `/${o.dashboard}`
        },
        {
          name: dictionary.translateEnToCnContact([ o.order, o.list ]),
          url : `/${o.order}/${o.list}`
        }
      ]
    },
    {
      name    : dictionary.translateEnToCnContact([ o.operation ]), //运营
      children: [
        {
          name: dictionary.translateEnToCnContact([ o.message, o.push]),
          url : `/${o.operation}/${o.message}/${o.list}`
        },
        {
          name: dictionary.translateEnToCnContact([ o.live, o.statistic]),
          url : `/${o.operation}/${o.live}/${o.statistic}/${o.list}`
        },
        {
          name: dictionary.translateEnToCnContact([ o.appVersion, '发布' ]),
          url : `/${o.operation}/${o.appVersion}/${o.list}`
        },
        {
          name: dictionary.translateEnToCnContact([ o.customer, o.feedback ]),
          url : `/${o.operation}/${o.feedback}`
        }
      ]
    },
    {
      name    : '系统管理',
      display : 'none',
      children: [
        {
          'name': '管理日志',
          'url' : '/log'
        }

      ]
    },
    {
      name: '课程评论',
      url: `/${o.classes}/${o.comment}/${o.list}`
    }
  ]
}
