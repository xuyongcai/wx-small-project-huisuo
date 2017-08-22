// 店铺列表
var shopsList = [
  {
    title: "仕馨月子会所（云山店）",
    subtitle:"广州市白云区永平街丛云路382号（武警一中队旁）",
    imgoff:true,
    img: ["../../img/report01.jpg", "../../img/report02.jpg","../../img/report03.jpg"]
  },
  {
    title: "仕馨月子会所（越秀店）",
    subtitle: "广州市越秀区人民中路408号大晟华厦（市妇婴医院旁)",
    imgoff: false,
    img: ["../../img/report01.jpg", "../../img/report02.jpg", "../../img/report03.jpg"]
  },
  {
    title: "仕馨月子会所（西关店）",
    subtitle: "广州市荔湾区龙津西路280号龙津华府E座",
    imgoff: false,
    img: ["../../img/report01.jpg", "../../img/report02.jpg", "../../img/report03.jpg"]
  },
  {
    title: "仕馨月子会所（萝岗店-子品牌优若家）",
    subtitle: "广州市萝岗区万达广场C1座11、15、20楼",
    imgoff: false,
    img: ["../../img/report01.jpg", "../../img/report02.jpg", "../../img/report03.jpg"]
  },
  {
    title: "仕馨月子会所（东莞店）",
    subtitle: "东莞市莞城区创业路15号（老客运站对面）",
    imgoff: false,
    img: ["../../img/report01.jpg", "../../img/report02.jpg", "../../img/report03.jpg"]
  },
  {
    title: "仕馨月子会所（普宁店）",
    subtitle: "普宁市普宁大道多年山路段新二中校区旁",
    imgoff: false,
    img: ["../../img/report01.jpg", "../../img/report02.jpg", "../../img/report03.jpg"]
  }
]
// 详情列表
var detailList = [
  {
    address: "广州市白云区永平街丛云路382号",
    time:"8:00 - 23:00",
    tel:"400-0000-0000"
  },
  {
    address: "广州市越秀区人民中路408号大晟华厦",
    time: "8:00 - 23:00",
    tel: "400-0000-0000"
  },
  {
    address: "广州市荔湾区龙津西路280号",
    time: "8:00 - 23:00",
    tel: "400-0000-0000"
  },
  {
    address: "广州市萝岗区万达广场C1座11、15、20楼",
    time: "8:00 - 23:00",
    tel: "400-0000-0000"
  },
  {
    address: "东莞市莞城区创业路15号",
    time: "8:00 - 23:00",
    tel: "400-0000-0000"
  },
  {
    address: "普宁市普宁大道多年山路段新二中校区旁",
    time: "8:00 - 23:00",
    tel: "400-0000-0000"
  }
]

// 详情图片
var imgPath =
  [
    {
      preview: [ //预览图 云山店 big图
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_09.jpg"
      ],
      imgPath: [ //samll图
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_09.jpg",
      ]
    },
    {
      preview: [ //预览图 越秀店 big图
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_09.jpg"

      ],
      imgPath: [ //samll图
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_09.jpg"
      ]
    },
    {
      preview: [ //预览图 西关 big图
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_09.jpg"


      ],
      imgPath: [ //samll图
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_09.jpg"

      ]
    },
    {
      prevview: [ //预览图 萝岗店 big图
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_09.jpg"



      ],
      imgPath: [ //samll图
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_09.jpg",

      ]
    },
    {
      preview: [ //预览图 东莞店 big图
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_09.jpg",



      ],
      imgPath: [ //samll图
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_09.jpg"
      ]
    },
    {
      preview: [ //预览图 普宁店 big图
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_09.jpg"

      ],
      imgPath: [ //samll图
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_09.jpg",
      ]
    }

  ]

module.exports={
  shopsList: shopsList,
  detailList:detailList,
  imgPath: imgPath
}