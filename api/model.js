import request from '@/utils/request'

// 删除模型
export const apiModelDelete = (params) => request.post('modelfile/delete', params)

//获取模型文件
export function getmodelFileList(params) {
    return request.get("modelfile/lists", { params });
}
  
//获取模型文件详情
export function getmodelDetail(params) {
    return request.get("modelfile/detail", { params });
}

//预签名上传
export function presignedUpload(params) {
    return request.post("modelfile/presignedUpload", params );
}

// 预签名上传
export const getPresignedUpload = (params) => request.post('modelfile/getPresignedUpload',
    {
        ...params
    },
    { headers: { version: '3.3.0' }
})

// 创建模型文件
export const createModelFile = (params) => request.post('modelfile/createModelFile',
    {
        ...params
    },
    { headers: { version: '3.3.0' }
})

// 模型提交订单
export const modelOrder = (params) => request.post('modelfile/modelOrder', params);

// 获取模型文件商品详情
export const apiModelGoodsDetail = (params) =>
    request.get("modelfile/getModelGoodsInfo", { params });

//获取模型下载地址接口
export function downloadModelFile(params) {
    return request.get("modelfile/downloadModelFile", { params });
}
