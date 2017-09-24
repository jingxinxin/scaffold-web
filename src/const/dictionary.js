/**
 * Created by jack on 2016/12/5.
 */
import * as object from './object';
import * as config from './config';
import _ from 'lodash';

class dictionary {
  static translateEnToCn(en) {
    switch (en) {
      case object.headline:
        return '头条';
      case object.wiki:
        return '百科';
      case object.information:
        return '资讯';
      case object.classification:
        return '分类';
      case object.list:
        return '列表';
      case object.article:
        return '文章';
      case object.create:
        return '创建';
      case object.dashboard:
        return '概览';
      case object.tag:
        return '标签';
      case object.guru:
        return '名师';
      case object.video:
        return '视频';
      case object.school:
        return '学堂';
      case object.train:
        return '从业';
      case object.course:
        return '课程';
      case object.lesson:
        return '章节';
      case object.bundle:
        return '套餐';
      case object.user:
        return '用户';
      case object.customer:
        return '客户';
      case object.live:
        return '直播';
      case object.advert:
        return '广告';
      case object.order:
        return '订单';
      case object.operation:
        return '运营';
      case object.web:
        return '网站';
      case object.activity:
        return '活动';
      case object.sale:
        return '销售';
      case object.roles:
        return '角色';
      case object.verification_code:
        return '短信验证码';
      case object.content:
        return '内容';
      case object.banner:
        return '横幅';
      case object.message:
        return '消息';
      case object.push:
        return '推送';
      case object.statistic:
        return '统计';
      case object.comment:
        return '评论';
      case object.detail:
        return '详情';
      case object.appVersion:
        return 'APP版本';
      case object.feedback:
        return '反馈';
      case object.tip:
        return '打赏';
      case object.classes:
        return '课程';
      case object.comment:
        return '评论';
      default :
        return en;
    }
  }

  static translateEnToCnContact(array) {
    if (!_.isEmpty(array)) {
      let res = '';
      _.map(array, item => {
        res += this.translateEnToCn(item);
      });
      return res;
    } else {
      return array;
    }
  }

  static switchStatus(value, type = 'public') {
    let data = [];
    switch (type) {
      case 'public':
        data = config.radio.status_public;
        break;
      case 'order':
        data = config.order;
        break;
    }
    return _.map(data, item => {
      if (item.value == value) {
        return item.text
      }
    });
  }

  /**
   * 根据状态码返回Icon名字
   * @returns {*}
   * @param param
   */
  static switchIconByStatus(param) {

    switch (param.name.toString()) {
      case '0':
        param.name  = 'close';
        param.color = 'grey';
        break;
      case '9':
        param.name  = 'checkmark';
        param.color = 'green';
        break;
      default:
        param.name  = 'close';
        param.color = 'grey';
    }

    return {
      name : param.name,
      color: param.color,
      size : param.size
    }
  }

  static selectStatus(value, type = 'audit') {
    let data = [];
    switch (type) {
      case 'audit':
        data = config.dropDown.status_audit;
        break;
    }
    return data;
  }
}

// export default function converter(resource) {
//   switch (resource) {
//     case '1':
//       return '2';
//     default:
//       return false;
//   }
// }

export default dictionary;