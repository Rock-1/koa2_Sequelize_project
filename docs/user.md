

## 用户管理

### 用户注册 

请求url：
 
     POST /users/addUser

请求参数：

名称|类型|描述
:--|:--|:--
|loginName       |string     |必须, 登录名      |
|password        |string     |必须，密码        |
|userEmail       |string     |必须，邮箱        |
|userMobile      |string     |必须，用户手机号   |


请求示例：
   
   localhost:3000/users/addUser

      body  
          {
            "loginName": "尼安德特", // 登录名
            "password": "123456",  //登录密码
            "companyName":"bat",  //公司名字
            "userName":"尼安德特人", //用户名
            "userRole":0, // 用户角色 0超级管理员，1管理员，2监课，3老师，4学生
            "userEmail":"kengni@buyouyu.com", // 用户邮箱 
            "userMobile":123124, // 用户手机号
            "content":"2017-09-01", // 用户简介
            "groupId":1 //用户组id
           }
返回参数：
     
     {
          "code": 200,
          "returnData": {
              "data": {
                  "id": "agoXryE96Jp4DbqXdqLB17MKzYV0meRw",
                  "createTime": "2017-08-28T02:47:34.000Z",
                  "loginName": "尼安德特3",
                  "password": "9f3d53742f6ac4ec14ee0e06a1e21478",
                  "companyName": "bat",
                  "userName": "尼安德特人",
                  "IDcard": "23123",
                  "salt": 69,
                  "userType": 1,
                  "userRole": 0,
                  "userEmail": "kengn1i@bu2youy1u.com",
                  "userMobile": 123211524,
                  "content": "2017-09-01",
                  "endTime": null,
                  "groupId": 1
              }
          }
      }

### 用户登录

请求url 

  POST   /users/login

请求参数：

名称|类型|描述
:--|:--|:--
|loginName   |string    |, 登录名          |
|password    |string    |必须，密码        |
|code        |string    |必须，手机号验证码  |



请求示例：
   
   localhost:3000/users/login

   body  
          {
          	"loginName":"尼安德特",
            "password":"123456",
            "code":"qwe123"
          }
返回参数：

     {
            "code": 200,
            "returnData": {
                "data": {
                    "id": "qvoP3Y8geAOWmb9rYLJyN1D5Mz0xlGa6",
                    "loginName": "尼安德特",
                    "userType": 1,
                    "token":    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InF2b1AzWThnZUFPV21iOXJZTEp5TjFENU16MHhsR2E2IiwibmFtZSI6IuWwvOWuieW-t-eJueS6uiIsInVzZXJSb2xlIjowLCJpYXQiOjE1MDM4OTk2NzYsImV4cCI6MTUwNzQ5OTY3Nn0.H73LobalRvgNUOhUecXuc6dohgEsNYsPt61LJSVghCA",
                    "createTime": "2017-08-24 02:47:36"    //请求接口的时候需要在herds 中传
                }
            }
        }
   


## 用户查询

  请求url
   post   /users/getUser

  请求参数：

       localhost:3000/users/getUser
       查询条件都可以不填就是查询所有
       {
            "loginName": "尼安德特", // 登录名
            "password": "123456",  //登录密码
            "companyName":"bat",  //公司名字
            "userName":"尼安德特人", //用户名
            "userRole":0, // 用户角色 0超级管理员，1管理员，2监课，3老师，4学生
            "userEmail":"kengni@buyouyu.com", // 用户邮箱 
            "userMobile":123124, // 用户手机号
            "content":"2017-09-01", // 用户简介
            "groupId":1 //用户组id
           }
  返回参数：
      
       {
              "code": 200,
              "returnData": {
                  "data": {
                      "users": [
                          {
                              "id": "aMwJvonVWdyL4Em2ZmZDR5AP72YblpkK",
                              "loginName": "l3989",
                              "IDcard": "231243",
                              "password": "4eef3be2f1aa6240ada14d0df9720d05",
                              "salt": 21,
                              "companyName": "bat",
                              "userName": "智人",
                              "userType": 1,
                              "userRole": 3,
                              "userEmail": "42237539@qq.com",
                              "userMobile": "12328555324",
                              "createTime": "2017-08-28 06:50:01",
                              "endTime": "Invalid date",
                              "content": "2017-09-01",
                              "serialNo": 0,
                              "siteId": "3m",
                              "userStatus": 0,
                              "groupId": "1"
                          },
                          {
                              "id": "Rv2G3Ay45kjp6B1XyalrMLzEg0DJ9mdQ",
                              "loginName": "0bk4a",
                              "IDcard": "231243",
                              "password": "a071495b74b65a34559c76227e0633a4",
                              "salt": 5,
                              "companyName": "bat",
                              "userName": "智人",
                              "userType": 1,
                              "userRole": 3,
                              "userEmail": "422339@qq.com",
                              "userMobile": "12328555824",
                              "createTime": "2017-08-28 06:46:56",
                              "endTime": "Invalid date",
                              "content": "2017-09-01",
                              "serialNo": 0,
                              "siteId": "3m",
                              "userStatus": 0,
                              "groupId": "1"
                          }
                      ],
                      "count": 2,
                      "page": 1,
                      "pageno": 10
                  }
              }
          }



## 用户编辑
    
    请求url
      put localhost:3000/users/updateUserByUserId/:id

  请求参数（可选填）：
      {
            "loginName": "尼安德特20",
            "IDcard": "231243",
            "companyName": "bat",
            "userName": "小asd明",
            "userEmail": "15314352890@163.com",
            "userMobile": "123280824",
            "createTime": "2017-08-28 06:41:30",
            "endTime": "Invalid date",
            "content": "2017-09-asd"
      }
  
  返回参数：

    {
        "code": 200,
        "returnData": {
            "data": {
                "id": "GpQKn0yLMda7OVXMZ82PqYvjAxZ5493J",
                "loginName": "尼安德特20",
                "IDcard": "231243",
                "password": "d2322484d96897dca51bef5dc8126ef2",
                "salt": 65,
                "companyName": "bat",
                "userName": "小asd明",
                "userType": 1,
                "userRole": 4,
                "userEmail": "15314352890@163.com",
                "userMobile": "123280824",
                "createTime": "2017-08-27 22:41:30",
                "endTime": "Invalid date",
                "content": "2017-09-asd",
                "serialNo": 0,
                "siteId": "3m",
                "userStatus": 0,
                "groupId": "1"
            }
        }
    }


## 删除用户

  请求url
     
     localhost:3000/users/delUserByUserId/:id

请求参数：

名称|类型|描述
:--|:--|:--
|id   |string    |必须, 用户ID          |


返回参数：

      {
          "code": 200,
          "returnData": {
              "data": 1
          }
      }


