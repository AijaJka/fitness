require('../css/MotionData.less');

// require('../css/commoncss/basic.styl');
const echarts = require('echarts');

document.ready(function () {
    let myChart = echarts.init(document.querySelector('.box202'));
    // 绘制图表
    myChart.setOption({
        title: {
            text: '近7天运动时长'
        },
        tooltip: {},
        xAxis: {
            data: ['9.21', '9.22', '9.23', '9.24', '9.25', '9.26','9.27']
        },
        yAxis: {},
        series: [
            {
                name: '运动时长(分)',
                type: 'bar',
                data: [30, 60, 35, 12, 90, 90,60]
            }
        ]
    });
    
    let myChart1 = echarts.init(document.querySelector('.box32'));
    myChart1.setOption({
        title: {
            text: '运动分类',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              type: 'pie',
              radius: '50%',
              data: [
                { value: 25, name: '跑步' },
                { value: 35, name: '骑行' },
                { value: 40, name: '训练' },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
    })


})