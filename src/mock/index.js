import { Random, mock } from 'mockjs';

let make = function (n, name) {
  var arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Random[name]())
  };
  return arr;
}


const info = mock({
  'goods|6': [
    {
      'id|+1': 1,
      'name|+1': [
        'X9Plus 全网通',
        'X20Plus 全面屏',
        'Y69 全面屏手机',
        'X9Plus 全网通',
        'X20Plus 全面屏',
        'Y69 全面屏手机',
      ],
      'detailHeader|+1': [
        '【花呗免息，0首付0利率轻松购机】',
        '【4月21日0点-7月31日0点，感恩促销直降200，到手价2598】',
        '【4月24日—5月1日，购机加赠爱奇艺VIP月卡；直降200元促销，到手价999】',
        '【花呗免息，0首付0利率轻松购机】',
        '【4月21日0点-7月31日0点，感恩促销直降200，到手价2598】',
        '【4月24日—5月1日，购机加赠爱奇艺VIP月卡；直降200元促销，到手价999】'
      ],
      'detailContent|+1': [
        'Y69A 32GB内存，前置1600万柔光自拍，正面指纹解锁，一体式机身设计，分屏多任务。',
        'X20A 18:9高清全面屏，Face Wake面部识别，0.1s面部解锁，前后2x1200万像素，2400万感光单元。',
        'X9s Plus A 5.85英寸大屏，双引擎闪充，4015mAh大电池，持久续航（注：面部识别需升级到最新系统使用）',
        'X20A 18:9高清全面屏，Face Wake面部识别，0.1s面部解锁，前后2x1200万像素，2400万感光单元。',
        'X9s Plus A 5.85英寸大屏，双引擎闪充，4015mAh大电池，持久续航（注：面部识别需升级到最新系统使用）',
        'Y69A 32GB内存，前置1600万柔光自拍，正面指纹解锁，一体式机身设计，分屏多任务。'
      ],
      'info|+1': [
        '优惠200元|限量促销',
        '6.43英寸大屏|0.1s快速解锁',
        '前置2400万像素',
        '优惠200元|限量促销',
        '6.43英寸大屏|0.1s快速解锁',
        '前置2400万像素',
      ],
      'price|+1': [
        2798,
        4396,
        7777,
        5641,
        3021,
        5896,
      ],
      'images|+1': [
        require("../assets/uploads/phone1.png"),
        require("../assets/uploads/phone2.png"),
        require("../assets/uploads/phone3.png"),
        require("../assets/uploads/phone4.png"),
        require("../assets/uploads/phone5.png"),
        require("../assets/uploads/phone6.png"),
      ],
      'swipeImages': [
        require("../assets/uploads/phone1.png"),
        require("../assets/uploads/phone2.png"),
        require("../assets/uploads/phone3.png")
      ],
      'paramsImages': [
        require("../assets/uploads/params1.jpg"),
        require("../assets/uploads/params2.jpg"),
        require("../assets/uploads/params3.jpg")
      ],
      "homePeizhi": "<h4>包装清单</h4><span>标配</span><p>X9s Plus A *1 </p><p>取卡针 *1 </p><p>XE680线控耳机 *1</p><p>闪充充电头 *1</p><p>USB数据线</p><p>透明后盖保护壳 *1</p><p>快速入门指南 *1</p><p>重要信息和保修卡</p><h4>其他参数</h4><div><p>CPU</p><p>高通骁龙八核MSM8976SG（MSM8976pro</p></div>"
    }
  ]

});

const goods = mock({

  'Xplay系列|4': [
    {
      'id|+1': 1000,
      'name|+1': [
        'X9Plus 全网通',
        'X20Plus 全面屏',
        'Y69 全面屏手机',
        'Y69 全面屏手机'
      ],
      'detailHeader|+1': [
        '【花呗免息，0首付0利率轻松购机】',
        '【4月21日0点-7月31日0点，感恩促销直降200，到手价2598】',
        '【4月24日—5月1日，购机加赠爱奇艺VIP月卡；直降200元促销，到手价999】',
        '【花呗免息，0首付0利率轻松购机】'
      ],
      'detailContent|+1': [
        'Y69A 32GB内存，前置1600万柔光自拍，正面指纹解锁，一体式机身设计，分屏多任务。',
        'X20A 18:9高清全面屏，Face Wake面部识别，0.1s面部解锁，前后2x1200万像素，2400万感光单元。',
        'X9s Plus A 5.85英寸大屏，双引擎闪充，4015mAh大电池，持久续航（注：面部识别需升级到最新系统使用）',
        'X20A 18:9高清全面屏，Face Wake面部识别，0.1s面部解锁，前后2x1200万像素，2400万感光单元。'
      ],
      'info|+1': [
        '优惠200元|限量促销',
        '6.43英寸大屏|0.1s快速解锁',
        '前置2400万像素',
        '优惠200元|限量促销',
        '6.43英寸大屏|0.1s快速解锁',
        '前置2400万像素'
      ],
      'price|+1': [
        2798,
        4396,
        7777,
        5896
      ],
      'images|+1': [
        require("../assets/uploads/phone1.png"),
        require("../assets/uploads/phone2.png"),
        require("../assets/uploads/phone5.png"),
        require("../assets/uploads/phone6.png")
      ],
      'swipeImages': [
        require("../assets/uploads/phone1.png"),
        require("../assets/uploads/phone2.png"),
        require("../assets/uploads/phone3.png")
      ],
      'paramsImages': [
        require("../assets/uploads/params1.jpg"),
        require("../assets/uploads/params2.jpg"),
        require("../assets/uploads/params3.jpg")
      ],
      "homePeizhi": "<h4>包装清单</h4><span>标配</span><p>X9s Plus A *1 </p><p>取卡针 *1 </p><p>XE680线控耳机 *1</p><p>闪充充电头 *1</p><p>USB数据线</p><p>透明后盖保护壳 *1</p><p>快速入门指南 *1</p><p>重要信息和保修卡</p><h4>其他参数</h4><div><p>CPU</p><p>高通骁龙八核MSM8976SG（MSM8976pro</p></div>"
    }
  ],
  'X系列|3': [
    {
      'id|+1': 2000,
      'name|+1': [
        'X9Plus 全网通',
        'Y69 全面屏手机',
        'Y69 全面屏手机'
      ],
      'detailHeader|+1': [
        '【花呗免息，0首付0利率轻松购机】',
        '【4月24日—5月1日，购机加赠爱奇艺VIP月卡；直降200元促销，到手价999】',
        '【花呗免息，0首付0利率轻松购机】'
      ],
      'detailContent|+1': [
        'Y69A 32GB内存，前置1600万柔光自拍，正面指纹解锁，一体式机身设计，分屏多任务。',
        'X20A 18:9高清全面屏，Face Wake面部识别，0.1s面部解锁，前后2x1200万像素，2400万感光单元。',
        'X20A 18:9高清全面屏，Face Wake面部识别，0.1s面部解锁，前后2x1200万像素，2400万感光单元。'
      ],
      'info|+1': [
        '优惠200元|限量促销',
        '优惠200元|限量促销',
        '前置2400万像素'
      ],
      'price|+1': [
        5641,
        3021,
        5896
      ],
      'images|+1': [
        require("../assets/uploads/phone3.png"),
        require("../assets/uploads/phone4.png"),
        require("../assets/uploads/phone6.png"),
      ],
      'swipeImages': [
        require("../assets/uploads/phone1.png"),
        require("../assets/uploads/phone2.png"),
        require("../assets/uploads/phone3.png")
      ],
      'paramsImages': [
        require("../assets/uploads/params1.jpg"),
        require("../assets/uploads/params2.jpg"),
        require("../assets/uploads/params3.jpg")
      ],
      "homePeizhi": "<h4>包装清单</h4><span>标配</span><p>X9s Plus A *1 </p><p>取卡针 *1 </p><p>XE680线控耳机 *1</p><p>闪充充电头 *1</p><p>USB数据线</p><p>透明后盖保护壳 *1</p><p>快速入门指南 *1</p><p>重要信息和保修卡</p><h4>其他参数</h4><div><p>CPU</p><p>高通骁龙八核MSM8976SG（MSM8976pro</p></div>"
    }
  ],
  'Y系列|2': [
    {
      'id|+1': 3000,
      'name|+1': [
        'X20Plus 全面屏',
        'Y69 全面屏手机'
      ],
      'detailHeader|+1': [
        '【4月21日0点-7月31日0点，感恩促销直降200，到手价2598】',
        '【花呗免息，0首付0利率轻松购机】'
      ],
      'detailContent|+1': [
        'X20A 18:9高清全面屏，Face Wake面部识别，0.1s面部解锁，前后2x1200万像素，2400万感光单元。',
        'X9s Plus A 5.85英寸大屏，双引擎闪充，4015mAh大电池，持久续航（注：面部识别需升级到最新系统使用）'
      ],
      'info|+1': [
        '优惠200元|限量促销',
        '6.43英寸大屏|0.1s快速解锁'
      ],
      'price|+1': [
        2798,
        5896
      ],
      'images|+1': [
        require("../assets/uploads/phone3.png"),
        require("../assets/uploads/phone6.png")
      ],
      'swipeImages': [
        require("../assets/uploads/phone1.png"),
        require("../assets/uploads/phone2.png"),
        require("../assets/uploads/phone3.png")
      ],
      'paramsImages': [
        require("../assets/uploads/params1.jpg"),
        require("../assets/uploads/params2.jpg"),
        require("../assets/uploads/params3.jpg")
      ],
      "homePeizhi": "<h4>包装清单</h4><span>标配</span><p>X9s Plus A *1 </p><p>取卡针 *1 </p><p>XE680线控耳机 *1</p><p>闪充充电头 *1</p><p>USB数据线</p><p>透明后盖保护壳 *1</p><p>快速入门指南 *1</p><p>重要信息和保修卡</p><h4>其他参数</h4><div><p>CPU</p><p>高通骁龙八核MSM8976SG（MSM8976pro</p></div>"
    }
  ]

});

const peijian = mock({

  '充电器|2': [
    {
      'id|+1': 7000,
      'name|+1': [
        '闪充充电器',
        '原装数据线'
      ],
      'detailHeader|+1': [
        '【花呗免息，0首付0利率轻松购机】',
        '【4月21日0点-7月31日0点，感恩促销直降200，到手价2598】'
      ],
      'detailContent|+1': [
        'Y69A 32GB内存，前置1600万柔光自拍，正面指纹解锁，一体式机身设计，分屏多任务。',
        'X20A 18:9高清全面屏，Face Wake面部识别，0.1s面部解锁，前后2x1200万像素，2400万感光单元。'
      ],
      'info|+1': [
        '优惠200元|限量促销',
        '前置2400万像素'
      ],
      'price|+1': [
        2798,
        5896
      ],
      'images|+1': [
        require("../assets/uploads/phone1.png"),
        require("../assets/uploads/phone6.png")
      ],
      'swipeImages': [
        require("../assets/uploads/phone1.png"),
        require("../assets/uploads/phone2.png"),
        require("../assets/uploads/phone3.png")
      ],
      'paramsImages': [
        require("../assets/uploads/params1.jpg"),
        require("../assets/uploads/params2.jpg"),
        require("../assets/uploads/params3.jpg")
      ],
      "homePeizhi": "<h4>包装清单</h4><span>标配</span><p>X9s Plus A *1 </p><p>取卡针 *1 </p><p>XE680线控耳机 *1</p><p>闪充充电头 *1</p><p>USB数据线</p><p>透明后盖保护壳 *1</p><p>快速入门指南 *1</p><p>重要信息和保修卡</p><h4>其他参数</h4><div><p>CPU</p><p>高通骁龙八核MSM8976SG（MSM8976pro</p></div>"
    }
  ],
  '保护膜|3': [
    {
      'id|+1': 8000,
      'name|+1': [
        'X9Plus 全网通',
        'X20Plus 全面屏',
        'Y69 全面屏手机',
        'Y69 全面屏手机'
      ],
      'detailHeader|+1': [
        '【花呗免息，0首付0利率轻松购机】',
        '【4月21日0点-7月31日0点，感恩促销直降200，到手价2598】',
        '【4月24日—5月1日，购机加赠爱奇艺VIP月卡；直降200元促销，到手价999】',
        '【花呗免息，0首付0利率轻松购机】'
      ],
      'detailContent|+1': [
        'Y69A 32GB内存，前置1600万柔光自拍，正面指纹解锁，一体式机身设计，分屏多任务。',
        'X20A 18:9高清全面屏，Face Wake面部识别，0.1s面部解锁，前后2x1200万像素，2400万感光单元。',
        'X9s Plus A 5.85英寸大屏，双引擎闪充，4015mAh大电池，持久续航（注：面部识别需升级到最新系统使用）',
        'X20A 18:9高清全面屏，Face Wake面部识别，0.1s面部解锁，前后2x1200万像素，2400万感光单元。'
      ],
      'info|+1': [
        '优惠200元|限量促销',
        '6.43英寸大屏|0.1s快速解锁',
        '前置2400万像素',
        '优惠200元|限量促销',
        '6.43英寸大屏|0.1s快速解锁',
        '前置2400万像素'
      ],
      'price|+1': [
        2798,
        4396,
        7777,
        5896
      ],
      'images|+1': [
        require("../assets/uploads/phone1.png"),
        require("../assets/uploads/phone2.png"),
        require("../assets/uploads/phone5.png"),
        require("../assets/uploads/phone6.png")
      ],
      'swipeImages': [
        require("../assets/uploads/phone1.png"),
        require("../assets/uploads/phone2.png"),
        require("../assets/uploads/phone3.png")
      ],
      'paramsImages': [
        require("../assets/uploads/params1.jpg"),
        require("../assets/uploads/params2.jpg"),
        require("../assets/uploads/params3.jpg")
      ],
      "homePeizhi": "<h4>包装清单</h4><span>标配</span><p>X9s Plus A *1 </p><p>取卡针 *1 </p><p>XE680线控耳机 *1</p><p>闪充充电头 *1</p><p>USB数据线</p><p>透明后盖保护壳 *1</p><p>快速入门指南 *1</p><p>重要信息和保修卡</p><h4>其他参数</h4><div><p>CPU</p><p>高通骁龙八核MSM8976SG（MSM8976pro</p></div>"
    }
  ],
  '耳机音响|2': [
    {
      'id|+1': 9000,
      'name|+1': [
        'X9Plus 全网通',
        'X20Plus 全面屏',
        'Y69 全面屏手机',
        'Y69 全面屏手机'
      ],
      'detailHeader|+1': [
        '【花呗免息，0首付0利率轻松购机】',
        '【4月21日0点-7月31日0点，感恩促销直降200，到手价2598】',
        '【4月24日—5月1日，购机加赠爱奇艺VIP月卡；直降200元促销，到手价999】',
        '【花呗免息，0首付0利率轻松购机】'
      ],
      'detailContent|+1': [
        'Y69A 32GB内存，前置1600万柔光自拍，正面指纹解锁，一体式机身设计，分屏多任务。',
        'X20A 18:9高清全面屏，Face Wake面部识别，0.1s面部解锁，前后2x1200万像素，2400万感光单元。',
        'X9s Plus A 5.85英寸大屏，双引擎闪充，4015mAh大电池，持久续航（注：面部识别需升级到最新系统使用）',
        'X20A 18:9高清全面屏，Face Wake面部识别，0.1s面部解锁，前后2x1200万像素，2400万感光单元。'
      ],
      'info|+1': [
        '优惠200元|限量促销',
        '6.43英寸大屏|0.1s快速解锁',
        '前置2400万像素',
        '优惠200元|限量促销',
        '6.43英寸大屏|0.1s快速解锁',
        '前置2400万像素'
      ],
      'price|+1': [
        2798,
        4396,
        7777,
        5896
      ],
      'images|+1': [
        require("../assets/uploads/phone1.png"),
        require("../assets/uploads/phone2.png"),
        require("../assets/uploads/phone5.png"),
        require("../assets/uploads/phone6.png")
      ],
      'swipeImages': [
        require("../assets/uploads/phone1.png"),
        require("../assets/uploads/phone2.png"),
        require("../assets/uploads/phone3.png")
      ],
      'paramsImages': [
        require("../assets/uploads/params1.jpg"),
        require("../assets/uploads/params2.jpg"),
        require("../assets/uploads/params3.jpg")
      ],
      "homePeizhi": "<h4>包装清单</h4><span>标配</span><p>X9s Plus A *1 </p><p>取卡针 *1 </p><p>XE680线控耳机 *1</p><p>闪充充电头 *1</p><p>USB数据线</p><p>透明后盖保护壳 *1</p><p>快速入门指南 *1</p><p>重要信息和保修卡</p><h4>其他参数</h4><div><p>CPU</p><p>高通骁龙八核MSM8976SG（MSM8976pro</p></div>"
    }
  ]

});


const news = mock({
  "news": [
    {
      "id": 1,
      "newsTitle": "vivo X21全面屏手机五大个热门问题详解",
      "newsImg": "https://bbsfiles.vivo.com.cn/vivobbs/attachment/portal/201804/18/211307l0sr8tqrpststut0.jpg",
      "newsCon": "X21给人的第一感觉是比X20更加惊艳的，6.28英寸的大屏幕，19:9的屏幕比例，屏占比达到了90.3%，全面屏视野比X20更加广阔。",
      "newsTime": "2018-4-22",
      "sc": false,
      "newsDetail": "<img src='https://bbs.vivo.com.cn/forum.php?mod=image&aid=6487059&size=720x0&key=95498692e14f5992&type=fixnone' style='width:100%;margin-bottom: 10px' ><p style='margin-bottom: 10px';>和以往的vivo X系列不同，vivo X21这一次的包装不再沿用白色的简约设计，反而是用了深蓝色的外包装，增加了一点科技感和炫酷感。</p><img src='https://bbs.vivo.com.cn/forum.php?mod=image&aid=6487084&size=720x0&key=7f1f552b52fc3a49&type=fixnone' style='width:100%'><p style='margin-top:10px'>在附件方面，和X20一样，有透明手机壳x1、充电器、耳机一副。手机本身有原装贴膜，不过自X20开始，就没有再附送多一张贴膜了。vivo X21标配的耳机是XE680/XE710两款耳机随机发送，铛儿拿到的是XE710耳机，刚好可以和之前用过的XE600i和XE680做个对比。</p><img src='https://bbs.vivo.com.cn/forum.php?mod=image&aid=6487091&size=720x0&key=6ed55c3127662901&type=fixnone' style='width:100%;margin-bottom:10px;margin-top:10px'></img><p>XE710耳机的外形采用了人耳耳廓仿真外形的设计，佩戴起来比XE680更加舒适。铛儿的耳廓属于较小的类型，所以之前佩戴XE600i和XE680耳机时，都很容易下滑掉落，XE710的外形设计对我来说刚刚好，隔音效果也很不错，也不会像XE680一样戴久了出现耳朵疼的情况。不过，由于XE710是随机发送的，所以能不能拿到这副标配耳机全靠运气咯~</p><img src='https://bbs.vivo.com.cn/forum.php?mod=image&aid=6487095&size=720x0&key=a6f6e8aeae4cbe9c&type=fixnone' style='margin-top:10px;width:100%'></img>"
    },
    {
      "id": 2,
      "newsTitle": "vivo X21屏幕指纹版，黑科技多到爆",
      "newsImg": "https://bbsfiles.vivo.com.cn/vivobbs/attachment/portal/201804/12/190408w8123imwv3w22z4t.jpg",
      "newsCon": "vivo X21屏幕指纹版已经是vivo第二款屏幕指纹手机'简称X21UD'，也是目前全世界在售手机中唯一一款屏幕指纹解锁手机。",
      "newsTime": "2018-4-22",
      "sc": false,
      "newsDetail": "<p>有句话说的好「销量就能证明这产品好不好」，虽然只是片面之词其中会有很多因素在里面，对于全球销售前五的vivo来说，创新和提供用户需求才是赢得用户的拥护，这次vivo发布全新手机X21，并同时发布一款全球最领先水平的vivo X21屏幕指纹版，它已经是vivo第二款屏幕指纹手机（简称X21UD），也是目前全世界在售手机中唯一一款屏幕指纹解锁手机。</p><p style='margin-top:10px;margin-bottom:10px'>vivo X21UD对于我一直长期使用vivo的老用户还是有不错的升级，比如异形全面屏、红外辅助让面脸识别在暗光下也能快速解锁，更舒服的导航手势、Jovi人工智能真正能让我感受到它的用处、首款基于P3色域能够自动色彩管理的安卓手机、安卓唯一P3色域炫彩相机、逆光拍照和夜景效果同样让人惊喜。</p><h3>vivo X21屏幕指纹版图鉴分享</h3><img src='https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201804/04/105458fzaood0zl00hnn50.jpg.thumb.jpg' style='margin-top:10px;width:100%'><img src='https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201804/04/105456fj42zdjz11hvnt1x.jpg.thumb.jpg' style='margin-bottom:10px;margin-top:10px;width:100%'><img src='https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201804/04/105519q2b6n2o6ok3gzo7u.jpg.thumb.jpg' style='margin-bottom:10px;width:100%'><img src='https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201804/04/105500b2grsdfg2sg2adgg.jpg.thumb.jpg' style='margin-bottom:10px;width:100%'><img src='https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201804/04/105502f06vscmsbtwt7sg8.jpg.thumb.jpg' style='margin-bottom:10px;width:100%'><img src='https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201804/04/105515orhr2gikk49hkmjz.jpg.thumb.jpg' style='margin-bottom:10px;width:100%'><img src='https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201804/04/105517x0nn0nkzyn0ltlnh.jpg.thumb.jpg' style='margin-bottom:10px;width:100%'><img src='https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201804/04/105518dq7sz6pbxhaps37z.jpg.thumb.jpg' style='margin-bottom:10px;width:100%'>"
    },
    {
      "id": 3,
      "newsTitle": "vivo X21冰钻黑图赏，黑色也要唱着高调",
      "newsImg": "https://bbsfiles.vivo.com.cn/vivobbs/attachment/portal/201804/23/175957thm7fz3m6am6l7fz.jpg",
      "newsCon": "X21带来了3D玻璃机身，这种质感过渡，在黑色版本上基本不会视觉残留，就像黑的看不见接缝，看不到瑕疵。",
      "newsTime": "2018-4-22",
      "newsDetail": "<img src='http://bbs.vivo.com.cn/forum.php?mod=image&aid=6500789&size=720x0&key=74d2ef2488e2292e&type=fixnone' style='margin-bottom:10px;width:100%'><p>我可能是喜欢黑色，大多数情况下，衣服买黑色，鞋子买黑色，钱包买黑色，倒不是说喜欢黑色的单一纯粹和耐脏，在旁人看来会显得人很无趣，而事实上，黑色运用在很多产品设计上都是给人神秘高雅有意境的存在。服饰上，而在电子产品的选择上，同级别的定位里，我会首选黑色作为我的数码装备主旋律色。</p><img src='http://bbs.vivo.com.cn/forum.php?mod=image&aid=6500790&size=720x0&key=5c975f33e8edb152&type=fixnone' style='margin-bottom:10px;margin-top:10px;width:100%'><p style='margin-bottom:10px;'>vivo上个月发布了vivo X21共三款配色，虽说我对红色比较中意（本命年），但拿到这只极光黑X21时简直合不拢嘴，不得不夸一夸vivo的调色功底，这个镜面的感觉好棒呀，而且黑色也并不是传统的纯黑色，带一点透明感，在某些环境光比大的场景下，还会错看成其他颜色。</p><p style='margin-bottom:10px;margin-top:10px'>上一次用vivo玻璃材质的手机还是vivo X5Pro，玻璃给人的感觉不同于金属的僵硬冰冷，握在手里有温润感，和亲近感。X21带来了3D玻璃机身，熟悉的「三明治」结构设计，不同的是，这次弧度的背板玻璃和金属中框衔接的很紧密，浑然一体，手指划过也只是轻微的错落感。这种质感过渡，在黑色版本上基本不会视觉残留，就像黑的看不见接缝，看不到瑕疵。</p><img src='http://bbs.vivo.com.cn/forum.php?mod=image&aid=6500791&size=720x0&key=551778d364f3ae20&type=fixnone' style='margin-top:10px;width:100%'><img src='http://bbs.vivo.com.cn/forum.php?mod=image&aid=6500792&size=720x0&key=59dfbded3d3d8e67&type=fixnone' style='margin-bottom:10px;margin-top:10px;width:100%'><p>事实上，在拿到极光黑vivo X21之前我特别担心这是否像TOTAL BLACK的vivo Xplay6那样，活脱脱就是一个指纹收集器呢？这可是很影响观感的呀，你看看买手机送抹布的索尼Z5P，多不好。</p><img src='http://bbs.vivo.com.cn/forum.php?mod=image&aid=6500793&size=720x0&key=61ee8223a18b2cec&type=fixnone' style='margin-bottom:10px;margin-top:10px;width:100%'><p>好在，vivo X21的抗油污玻璃机身设计在某些程度上解决的指纹污渍残留的问题，虽然不是完全不沾指纹，但已经好太多了，握感也相较于X20提升了一截。</p><img src='http://bbs.vivo.com.cn/forum.php?mod=image&aid=6500794&size=720x0&key=61e04bb011821e4d&type=fixnone' style='margin-top:10px;margin-bottom:10px;width:100%'><p>作为热销机vivo X20的升级版，X21在升级上虽说有些保守的，但也并非小幅度改良，依然是主打全面屏设计，不过这次的6.28英寸，90.3%的屏占比，窄边框设计更为震撼了。同时前脸也撞衫iPhone X和一些竞品，也就是大家口中的「齐刘海」设计，本质上这是为了向更标准的全面屏靠拢而妥协的一种结果，获得更大的屏占比就得砍掉额头两边无可厚非。X21的刘海也处在当今主流的手机设计趋势下，保留了更高的屏占比，更大尺寸的屏幕，这些都是「刘海全面屏」浪潮的必然结果，没什么抄袭与借鉴，懂得大局观，知道消费者想要什么，就足够。</p><img src='http://bbs.vivo.com.cn/forum.php?mod=image&aid=6500795&size=720x0&key=66a5e9849b284bd4&type=fixnone' style='margin-top:10px;margin-bottom:10px;width:100%'><img src='http://bbs.vivo.com.cn/forum.php?mod=image&aid=6500796&size=720x0&key=bb2b4213f63641ad&type=fixnone' style='margin-bottom:10px;width:100%'><img src='http://bbs.vivo.com.cn/forum.php?mod=image&aid=6500797&size=720x0&key=80bf977f98b248c2&type=fixnone' style='margin-bottom:10px;width:100%'><p>机身细节还做了一些改变，比如，3.5mm的耳机孔挪到了顶部，sim卡槽挪到了底部，虽然更习惯从底部插入耳机，但整体影响不大，无伤大雅。</p><img src='http://bbs.vivo.com.cn/forum.php?mod=image&aid=6500798&size=720x0&key=4229708e398d240b&type=fixnone'style='margin-bottom:10px;margin-top:10px;width:100%;'><p>拍照是vivo X21的主打卖点之一，配置了全新的后置摄像头，具有2*1200万像素折合2400万感光单元，最高可拍摄2400万像素的照片（需手动开启）。值得一提的是，X21加入了P3色域相机，理论上成像和观感都有提升，此外这一次还融入了AI元素，配合vivo图像魔方技术，官方称在弱光和逆光环境下都能拍摄出高质量的画面。</p><h3 style='margin-bottom:10px;margin-top:20px'>更多图赏</h3><img src='http://bbs.vivo.com.cn/forum.php?mod=image&aid=6500799&size=720x0&key=e431462688b6b793&type=fixnone' style='margin-bottom:10px;width:100%'><img src='http://bbs.vivo.com.cn/forum.php?mod=image&aid=6500800&size=720x0&key=8d714f06598da3e9&type=fixnone' style='margin-bottom:10px;width:100%'><img src='http://bbs.vivo.com.cn/forum.php?mod=image&aid=6500801&size=720x0&key=ceb42e04437ad43a&type=fixnone' style='margin-bottom:10px;width:100%'><img src='http://bbs.vivo.com.cn/forum.php?mod=image&aid=6500802&size=720x0&key=1a927f57644833dd&type=fixnone' style='margin-bottom:10px;width:100%'><img src='http://bbs.vivo.com.cn/forum.php?mod=image&aid=6500803&size=720x0&key=135e1986c15de5e3&type=fixnone' style='margin-bottom:10px;width:100%'>"
    },
    {
      "id": 4,
      "newsTitle": "你的女朋友vivo X21，从内到外都是美",
      "newsImg": "https://bbsfiles.vivo.com.cn/vivobbs/attachment/portal/201804/18/210355fmpl8qqnu737qlz9.jpg",
      "newsCon": "X21屏幕指纹版可是拥有一项黑科技的，那就是屏幕指纹解锁。这项科技目前全球只有vivo拥有，没有之一。",
      "newsTime": "2018-4-22",
      "newsDetail": "<img src='https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201804/07/213251pfwtzq7ivvue06g7.jpg.thumb.jpg' style='margin-bottom:10px;width:100%'><p>vivo X21到了我手中也快半个月了，在半个月的使用过程中，不得不说X21给我的感觉实在是太惊艳了。以至于本人的前任“X20”在X21的面前已经完全到了被嫌弃的地步。究竟是什么让X20在X21面前如此的黯然失色呢？让我细细给你们道来。</p><img src='https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201804/07/213310lj12neyaaq1lnzq5.jpg.thumb.jpg' style='margin-top:10px;margin-bottom:10px;width:100%'><p>首先当然是这块刘海屏。从X20到X21，很多消费者就像楼主本人我一样，实在有些不解。以vivo公司的性子，X20不升到X30也至少是X25呀。这次为何vivo在命名上如此低调？难道真的只有一点点升级吗？当然不是，X21屏幕指纹版可是拥有一项黑科技的，那就是屏幕指纹解锁。这项科技目前全球只有vivo拥有，没有之一。可惜楼主本人拿到手中的仅仅是一部不带指纹的普通版。当然，除了屏幕指纹的重大升级，全面屏发展到刘海屏，也可以认为是全面屏的再次进化。</p><img src='https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201804/07/213301soea7w1qah616i4w.jpg.thumb.jpg' style='margin-top:10px;margin-bottom:10px;width:100%'><p>vivo X21的刘海屏拥有极高的屏占比，官方宣称达到90.3%。如此一来，升级到6.3寸屏幕的X21在整机手感上与普通5.5寸屏幕的手机大小一般。它不同于某果的那条宽宽的刘海。X21的刘海尽可能的缩短最小化。在保障两颗传感器，听筒，前置摄像头最紧凑的位置后，其余全是屏幕。这让楼主本人不得不大喝一声彩，这视野，绝对够大。</p><img src='https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201804/07/213322jzxoemf4zomzh6ro.jpg.thumb.jpg' style='margin-top:10px;margin-bottom:10px;width:100%'><p>vivo X21采用的是super AMOLED屏幕，还拥有P3色域彩色管理技术。强大的硬件加软件配合，给我赏心悦目的视觉感受。无论是看图片，浏览网页还是看视频，玩游戏。这块屏幕所表达出来的色彩既鲜艳，又不失真实。如果一定要我说这块屏幕有啥缺点的话，那就是它并没有经过专业的校色。但谁要X21只是一款手机呢，娱乐才是最主要的，看着好看舒服不就行了么？</p><img src='https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201804/07/213337qro3hxhoiii3fko3.jpg.thumb.jpg' style='margin-bottom:10px;margin-top:10px;width:100%'><p>除了刘海屏的突破，X21在后盖这次又再次突破。打破从X6时代开始的一体金属后盖，细历了两年的厚积薄发，X21终于突破性的弄出了这么一块四曲面玻璃后盖。不得不说这是我喜欢X21的第二个重大因素。玻璃无论手感还是视觉，都比金属后盖有着质的提升。以前因为都是平面的玻璃，最多是2.5D的伪3D玻璃。这样会让手机在手中握感略差，不太符合人机学。但这次这块后盖则是真正的3D曲面玻璃。</p><img src='https://bbs.vivo.com.cn/forum.php?mod=image&aid=6481804&size=720x0&key=9ec8e358650f12dc&type=fixnone' style='margin-top:10px;margin-bottom:10px;width:100%'><p>它的大曲面大弧度尽最大可能的贴合了你的手掌，避免了平面玻璃的突兀感。当我把X21拿在手心，中指和无名指能滑腻腻的感受到鹅卵石般的圆润。即使我稍稍用力抓握后盖的边缘，也不会有割手感。不得不说这感觉实在是太好了。</p><img src='https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201804/07/213350w5zbz5qydh7lt5bq.jpg.thumb.jpg' style='margin-top:10px;margin-bottom:10px;width:100%'><p>同时玻璃后盖的光泽比以往金属一体后盖的光泽看起来更加的闪亮，如果用磨砂来形容金属后盖，那么用高光来形容玻璃后盖则最合适不过了。楼主看了多年的磨砂后盖，也是时候看腻味了。</p><img src='https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201804/07/213345purbr2r1drrmy2g1.jpg.thumb.jpg' style='margin-top:10px;margin-bottom:10px;width:100%'><p style='font-size:.5rem'>*综述*</p><div style='margin-top:15px'><p>拥有完美色彩显示的大屏占比刘海屏</p><p>极致手感的曲面玻璃后盖</p><p>玩游戏不输他人的6+128G的强大性能配置</p><p>vivo X21无论是颜值还是性能性价比很高</p></div>"
    }
  ],
})

const all = Object.assign({},goods, peijian)



mock('/api/info', 'get', info)
mock('/api/goods', 'get', goods)
mock('/api/peijian', 'get', peijian)
mock('/api/all', 'get', all)
mock('/api/news', 'get', news)


