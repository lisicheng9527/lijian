// 开发者环境：开|关	【注：方便微信小程序发行测试】
const SWITCH_DEVELOPMENT = true

/** S 是否H5端 **/
// #ifdef H5
const IS_H5 = false
// #endif

// #ifndef H5
const IS_H5 = false
// #endif
/** E 是否H5端 **/

/** S API BaseURL **/
const baseURLMap = {
	// 开发环境
	development: 'https://test.zhihuischool.com.cn',
	// 生产环境https://b2cplus.likeshop.cn
	production: IS_H5 ? location.origin : 'https://test.zhihuischool.com.cn'
}

const baseURL = SWITCH_DEVELOPMENT ? baseURLMap['development'] : baseURLMap[process.env.NODE_ENV]

/** E API BaseURL **/

module.exports = {
	version: '3.3.0', // 版本号
	baseURL, // API Base URL
	basePath: '/mobile'
}