import { getStateDes } from '@/utils/device_util'
import { formatDate } from '@/utils/date'

// 获取设备参数
export function getPara(hd_device_id, ws) {
  var obj = {
    'hd_device_id': hd_device_id,
    'request_type': 'GetPara',
    'socket_type': 0
  }

  return ws.send(obj)
}

export function customize(hd_device_id, paraBody, ws) {
  var obj = {
    'hd_device_id': hd_device_id,
    'request_type': 'Customize',
    'socket_type': 0,
    'request_body': paraBody
  }

  return ws.send(obj)
}

// 设置设备参数
export function setPara(hd_device_id, paraBody, ws) {
  var obj = {
    'hd_device_id': hd_device_id,
    'request_type': 'SetPara',
    'socket_type': 0,
    'request_body': paraBody
  }

  return ws.send(obj)
}
// 升级
export function upgrade(device_id, version, ws) {
  var obj = {
    'device_id': device_id,
    'request_type': 'Upgrade',
    'socket_type': 0,
    'request_body': {
      'version': version
    }
  }

  return ws.send(obj)
}

// 取消升级
export function cancelUpgrade(device_id, ws) {
  var obj = {
    'device_id': device_id,
    'socket_type': 0,
    'request_type': 'CancelUpgrade'
  }
  return ws.send(obj)
}

// 打开窗户
export function openWindow(hd_device_sensor_id, ws) {
  var obj = {
    'hd_device_sensor_id': hd_device_sensor_id,
    'socket_type': 0,
    'request_type': 'OpenWindow'

  }

  return ws.send(obj)
}

// 关闭窗户
export function closeWindow(hd_device_sensor_id, ws) {
  var obj = {
    'hd_device_sensor_id': hd_device_sensor_id,
    'socket_type': 0,
    'request_type': 'CloseWindow'
  }

  return ws.send(obj)
}

// 停止窗户
export function stopWindow(hd_device_sensor_id, ws) {
  var obj = {
    'hd_device_sensor_id': hd_device_sensor_id,
    'socket_type': 0,
    'request_type': 'StopWindow'
  }

  return ws.send(obj)
}

// 控制窗户
export function handelWindow(hd_device_sensor_id, state, ws) {
  if (state === 8 || state === '8') {
    return openWindow(hd_device_sensor_id, ws)
  } else if (state === 9 || state === '9') {
    return closeWindow(hd_device_sensor_id, ws)
  } else if (state === 10 || state === '10') {
    return stopWindow(hd_device_sensor_id, ws)
  }
}

//通用型网关setPara
export function setParaGkDevice(device_id,channels,values,ws){
  var obj = {
    'request_body':{
      'channels':channels,
      'values':values,
    },
    'device_id' :device_id,
    'message_id': 99,
    'request_type':'SetParaGkDevice'
  }
  return ws.send(obj)
}

// 开关阀门
export function openOrCloseChannel(hd_device_sensor_id, value, ws) {
  if (value === 1) {
    return openChannel(hd_device_sensor_id, ws)
  } else {
    return closeChannel(hd_device_sensor_id, ws)
  }
}

// 打开阀门
export function openChannel(hd_device_sensor_id, ws) {
  var obj = {
    'hd_device_sensor_id': hd_device_sensor_id,
    'socket_type': 0,
    'request_type': 'OpenChannel',
  }
  return ws.send(obj)
}

// 关掉阀门
export function closeChannel(hd_device_sensor_id, ws) {
  var obj = {
    'hd_device_sensor_id': hd_device_sensor_id,
    'socket_type': 0,
    'request_type': 'CloseChannel'
  }
  return ws.send(obj)
}

export function openValve(hd_device_sensor_id, ws) {
  var obj = {
    'hd_device_sensor_id': hd_device_sensor_id,
    'socket_type': 0,
    'request_type': 'OpenValve'
  }

  return ws.send(obj)
}

export function closeValve(hd_device_sensor_id, ws) {
  var obj = {
    'hd_device_sensor_id': hd_device_sensor_id,
    'socket_type': 0,
    'request_type': 'CloseValve'
  }

  return ws.send(obj)
}

// 打开阀门组
export function openChannels(hd_device_sensor_ids, ws) {
  var obj = {
    'hd_device_sensor_ids': hd_device_sensor_ids,
    'socket_type': 0,
    'request_type': 'OpenChannels'
  }

  return ws.send(obj)
}

// 关闭阀门组
export function closeChannels(hd_device_sensor_ids, ws) {
  var obj = {
    'hd_device_sensor_ids': hd_device_sensor_ids,
    'socket_type': 0,
    'request_type': 'CloseChannels'
  }
  
  return ws.send(obj)
}

// 获取设备状态
export function getSta(hd_device_id, ws) {
  var obj = {
    hd_device_id: hd_device_id,
    message_id: 3,
    request_type: "GetPara",
    socket_type: 0
  }

  return ws.send(obj)
}

// 之前的获取设备状态
export function getStaOld(hd_device_id, ws) {
  var obj = {
    'hd_device_id': hd_device_id,
    'socket_type': 0,
    'request_type': 'GetSta'
  }

  return ws.send(obj)
}

// 设置水肥操作逻辑
export function SetSFLogic(hd_device_id,request_body, ws) {
  var obj = {
   'hd_device_id': hd_device_id,
   'socket_type': 0,
   'request_type': 'SetSFLogic',
   'request_body':request_body
 }

 return ws.send(obj)
}

// 删除水肥操作逻辑
export function delSFLogic(hd_device_id,logicNum, ws) {
   var obj = {
    'hd_device_id': hd_device_id,
    'socket_type': 0,
    'request_type': 'DelSFLogic',
    'request_body':{
			  "logicNum":logicNum
    }
  }

  return ws.send(obj)
}

// 绑定设备
export function bindDevice(hd_device_id, ws) {
  var obj = {
    'hd_device_id': hd_device_id,
    'socket_type': 0,
    'request_type': 'BindDevice'
  }

  return ws.send(obj)
}

// 解绑设备
export function unBindDevice(hd_device_id, ws) {
  var obj = {
    'hd_device_id': hd_device_id,
    'socket_type': 0,
    'request_type': 'UnbindDevice'
  }

  return ws.send(obj)
}

// 绑定或解绑设备
export function bindOrUnbindDevice(hd_device_id, state, ws) {
  if (state === 1) {
    return bindDevice(hd_device_id, ws)
  } else {
    return unBindDevice(hd_device_id, ws)
  }
}

// 根据设备data属性获取展示数据
export function getPropertyList(data) {
  var device_propertys = data.device_propertys
  var property_values = data.property_values
  var propertys = []
  for (var property in property_values) {
    if (device_propertys[property]){
      var obj = {
        'chinesename': device_propertys[property].chinesename,
        'unit': device_propertys[property].unit,
        'value': property_values[property]
      }
      if (property === 'state') {
        obj.value = getStateDes(property_values[property])
      }else if (property === 'gpsTime'){
        obj.value = formatDate(new Date(property_values[property]),"yyyy-MM-dd hh:mm:ss")
      }
      propertys.push(obj)
    }

  }
  return propertys
}
