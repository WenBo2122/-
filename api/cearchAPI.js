// 热门搜索接口
var remen = (function () {
  let result;
  let url1;
  url1 = "https://api-v2.chuangkit.com/template/getRecommendKeyword.do?_dataType=json";
  url1 = "http://localhost:9527/template/getRecommendKeyword.do?_dataType=json";
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

export { remen };
