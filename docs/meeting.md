## 课堂管理


### 创建课堂

  请求url 
     post  localhost:3000/meeting/createMeeting


  请求参数：
        
        {
            meetingName:meetingbody.meetingName, //课堂名字
            meetingContent:meetingbody.meetingContent, //课堂描述
            userName:ctx.request.userName,  //创建用户名
            presenterPassword:meetingbody.presenterPassword, //主讲人密码            
            beginTime:meetingbody.beginTime ? new Date(meetingbody.beginTime):null, //开始时间
            endTime:meetingbody.endTime ? new Date(meetingbody.endTime):null, // 结束时间
            isPublic:meetingbody.isPublic,  //是否公开课
            repeatmode:meetingbody.repeatmode, //是否重复周期
            meetingType:meetingbody.meetingType, //课堂类型
            h5Module:meetingbody.h5Module, // 是否支持H5
            attendeePassword:meetingbody.attendeePassword, //学生密码
            videoModule:meetingbody.videoModule, //视频是否启用
            chatInterval:meetingbody.chatInterval, //聊天延时时间
            aheadTime:meetingbody.aheadTime, // 提前进入课堂时间
            maxVideoChannels:meetingbody.maxVideoChannels, //最大视频路数
            max_audioChannels:meetingbody.max_audioChannels, // 最大音频路数
            video_quality:meetingbody.video_quality, //视频画质
            pagenaviUserprivilege:meetingbody.pagenaviUserprivilege, //换页权限是否开启
            markerUserprivilege:meetingbody.markerUserprivilege, // 批注权限是否开启
            chatToNormalUserprivilege:meetingbody.chatToNormalUserprivilege, //与参会者聊天权限是否开启
            chatToHostUserprivilege:meetingbody.chatToHostUserprivilege, //与主持人聊天权限是否开启
            docModule:meetingbody.docModule, //文档共享是否开启
            screenModule:meetingbody.screenModule, //屏幕共享是否开启
            mediaModule:meetingbody.mediaModule, //媒体共享是否开启 
            whiteboardModule:meetingbody.whiteboardModule, //白板共享是否开启
            recordModule:meetingbody.recordModule, //录制是否启用
            chatModule:meetingbody.chatModule, //聊天模式是否启用
        }


    请求示例： 
        
        {
            "meetingName":"meetingbody.meetingName", 
            "meetingContent":"meetingbody.meetingContent", 
            "userName":"ctx.request.userName",  
            "presenterPassword":"rPassword", 
            "beginTime":"presenterPassword", 
            "endTime":"2016-09-01", 
            "isPublic":"1",  
            "repeatmode":"1", 
            "meetingType":"1", 
            "h5Module":"1", 
            "attendeePassword":"12345", 
            "videoModule":"1", 
            "chatInterval":"1",
            "aheadTime":60, 
            "maxVideoChannels":"1", 
            "max_audioChannels":"0",
            "video_quality":"0",
            "pagenaviUserprivilege":"1",
            "markerUserprivilege":"1",
            "chatToNormalUserprivilege":"1",
            "chatToHostUserprivilege":"0",
            "docModule":"1",
            "screenModule":"1",
            "mediaModule":"1",
            "whiteboardModule":"1",
            "recordModule":"1",
            "chatModule":"1"
        }

        返回参数:

         {
                    "code": 200,
                    "returnData": {
                        "data": {
                            "createTime": "2017-08-28T09:43:42.000Z",
                            "id": "A2dmBXKgwV3MDq1W0RprOvlZ8o6P4bYQ",
                            "meetingNumber": "53727",
                            "meetingName": "meetingbody.meetingName",
                            "meetingContent": "meetingbody.meetingContent",
                            "presenterPassword": "rPassword",
                            "beginTime": null,
                            "endTime": "2016-09-01T00:00:00.000Z",
                            "isPublic": "1",
                            "repeatmode": "1",
                            "meetingType": "1",
                            "h5Module": 1,
                            "attendeePassword": "12345",
                            "videoModule": "1",
                            "chatInterval": "1",
                            "aheadTime": 60,
                            "maxVideoChannels": "1",
                            "pagenaviUserprivilege": "1",
                            "markerUserprivilege": "1",
                            "chatToNormalUserprivilege": "1",
                            "chatToHostUserprivilege": "0",
                            "docModule": "1",
                            "screenModule": "1",
                            "mediaModule": "1",
                            "whiteboardModule": "1",
                            "recordModule": "1",
                            "chatModule": "1"
                        }
                    }
                }
