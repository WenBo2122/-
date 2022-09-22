// iconNav
var test = (function () {
  let result;
  let url1;
  url1 = "https://api-v2.chuangkit.com/mobile/main/getMainMiniProgramHomeInfo.do"; //原接口
  url1 = "http://localhost:9527/mobile/main/getMainMiniProgramHomeInfo.do"; //被代理的接口，用于解决跨域
  $.ajax({
    type: "get",
    url: url1,
    dataType: "json",
    async: false,
    success: (response) => {
      result = response;
    },
  });
  return result;
})();

// 推荐专题
var zhuanti = (function () {
  let result;
  let url1;
  url1 =
    "https://api-v2.chuangkit.com/solutionSubject/theme.do?_dataType=json&_dataClientType=3&client_type=40&solutionSubjectId=1&pageNum=1&pageSize=6&templatePageSize=6&type=3&device=2&business_type=1%2C2%2C3";
  url1 =
    "http://localhost:9527/solutionSubject/theme.do?_dataType=json&_dataClientType=3&client_type=40&solutionSubjectId=1&pageNum=1&pageSize=6&templatePageSize=6&type=3&device=2&business_type=1%2C2%2C3";
  $.ajax({
    type: "get",
    url: url1,
    dataType: "json",
    async: false,
    success: (response) => {
      result = response;
    },
  });
  return result;
})();

// 手机海报、每日一签、手机壁纸
var shouji = (function () {
  let result;
  let url1;
  url1 = "https://api-v2.chuangkit.com/mobile/main/getSceneDetail.do?page_no=1";
  url1 = "http://localhost:9527/mobile/main/getSceneDetail.do?page_no=1";
  $.ajax({
    type: "get",
    url: url1,
    dataType: "json",
    async: false,
    success: (response) => {
      result = response;
    },
  });
  return result;
})();

// 朋友圈封面、横板、邀请函
var pyq = (function () {
  let result;
  let url1;
  url1 = "https://api-v2.chuangkit.com/mobile/main/getSceneDetail.do?page_no=2";
  url1 = "http://localhost:9527/mobile/main/getSceneDetail.do?page_no=2";
  $.ajax({
    type: "get",
    url: url1,
    dataType: "json",
    async: false,
    success: (response) => {
      result = response;
    },
  });
  return result;
})();

// 印刷宣传海报、名片、竖版海报
var yinhua = (function () {
  let result;
  let url1;
  url1 = "https://api-v2.chuangkit.com/mobile/main/getSceneDetail.do?page_no=3";
  url1 = "http://localhost:9527/mobile/main/getSceneDetail.do?page_no=3";
  $.ajax({
    type: "get",
    url: url1,
    dataType: "json",
    async: false,
    success: (response) => {
      result = response;
    },
  });
  return result;
})();

// 直播悬浮标
var zhibo = (function () {
  let result;
  let url1;
  url1 = "https://api-v2.chuangkit.com/mobile/main/getSceneDetail.do?page_no=4";
  url1 = "http://localhost:9527/mobile/main/getSceneDetail.do?page_no=4";
  $.ajax({
    type: "get",
    url: url1,
    dataType: "json",
    async: false,
    success: (response) => {
      result = response;
    },
  });
  return result;
})();


// 导出
export { test, shouji, zhuanti, pyq, yinhua, zhibo };
