define({ "api": [
  {
    "type": "GET",
    "url": "/admin/me",
    "title": "获取管理员信息",
    "group": "Admin",
    "description": "<p>获取管理员信息</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Admin",
    "name": "GetAdminMe",
    "sampleRequest": [
      {
        "url": "http://api.consult.dev/admin/me"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/admin/refresh_token",
    "title": "刷新token",
    "group": "Admin",
    "description": "<p>刷新token接口</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>旧的token</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Admin",
    "name": "GetAdminRefresh_token",
    "sampleRequest": [
      {
        "url": "http://api.consult.dev/admin/refresh_token"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/admin/create",
    "title": "管理员注册",
    "group": "Admin",
    "description": "<p>管理员注册接口</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Admin",
    "name": "PostAdminCreate",
    "sampleRequest": [
      {
        "url": "http://api.consult.dev/admin/create"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/admin/login",
    "title": "管理员登录",
    "group": "Admin",
    "description": "<p>管理员登录接口</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Admin",
    "name": "PostAdminLogin",
    "sampleRequest": [
      {
        "url": "http://api.consult.dev/admin/login"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/issue/show",
    "title": "显示已回复的问题",
    "group": "issue",
    "description": "<p>显示所有管理员已回复的问题</p>",
    "version": "0.0.1",
    "filename": "routes/api.php",
    "groupTitle": "issue",
    "name": "GetIssueShow",
    "sampleRequest": [
      {
        "url": "http://api.consult.dev/issue/show"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/issue/store",
    "title": "提交问题",
    "group": "issue",
    "description": "<p>考生提交问题(可以匿名提问)</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>问题的详细描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wx_user_id",
            "description": "<p>用户id(如果匿名提问只需将本字段传0即可)</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "issue",
    "name": "PostIssueStore",
    "sampleRequest": [
      {
        "url": "http://api.consult.dev/issue/store"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/wx_user/linkage/:parent_id",
    "title": "省市三级联动",
    "group": "user",
    "description": "<p>获取省市三级联动</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parent_id",
            "defaultValue": "0",
            "description": "<p>父级城市ID</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "routes/api.php",
    "groupTitle": "user",
    "name": "GetWx_userLinkageParent_id",
    "sampleRequest": [
      {
        "url": "http://api.consult.dev/wx_user/linkage/:parent_id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/wx_user/me/:openid",
    "title": "查询用户信息",
    "group": "user",
    "description": "<p>通过微信的openid尝试请求用户信息以及它提过的问题</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "openid",
            "description": "<p>用户的标志,对当前公众号唯一,用来确定登陆者的身份</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "routes/api.php",
    "groupTitle": "user",
    "name": "GetWx_userMeOpenid",
    "sampleRequest": [
      {
        "url": "http://api.consult.dev/wx_user/me/:openid"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/wx_user/store",
    "title": "保存用户信息",
    "group": "user",
    "description": "<p>如果数据库中没有用户信息则让用户填写相关信息并保存到数据库中.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "openid",
            "description": "<p>用户的标志,对当前公众号唯一,用来确定登陆者的身份</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>用户昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "headimgurl",
            "description": "<p>用户图像链接</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>省份</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>城市</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>地区</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course",
            "description": "<p>成绩</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_school",
            "description": "<p>所在学校</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"message\": \"数据验证失败.\",\n    \"status_code\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api.php",
    "groupTitle": "user",
    "name": "PostWx_userStore",
    "sampleRequest": [
      {
        "url": "http://api.consult.dev/wx_user/store"
      }
    ]
  }
] });
