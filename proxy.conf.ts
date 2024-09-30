/*
 * @Author: pmx
 * @Date: 2022-11-03 09:56:29
 * @Last Modified by: pmx
 * @Last Modified time: 2022-12-06 13:44:51
 */
const PROXY_CONFIG = [
  {
    context: [
      '/howell/ver10/data_service/',
      '/api/howell/ver10/aiop_service/',
      '/api/howell/ver10/garbage_profiles/',
      '/video/wsplayer/',
    ],
    // target: 'http://iebs.51hws.cn',
    // target: 'http://192.168.21.241:9000',
    target: 'http://wechat.51hws.cn:8080',
    // target: 'http://192.168.21.122:8080',
    changeOrigin: true,
    secure: false,
    headers: {
      Connection: 'keep-alive',
    },
  },
  // {
  //   context: ['/api/howell/ver10/garbage_profiles/'],
  //   // target: 'http://192.168.21.241:9000',
  //   target: 'http://wechat.51hws.cn:9999',
  //   changeOrigin: true,
  //   secure: false,
  // },
];

module.exports = PROXY_CONFIG;
